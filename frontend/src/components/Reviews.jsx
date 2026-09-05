import Button from "../components/ui/Button";
import { MessageCircle, Quote, Send, Star, Trash2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { getReviewOwnerToken, reviewRequest } from "../lib/reviews-api";

const StarRow = ({ rating, interactive = false, onRate, size = "h-5 w-5" }) => (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
        {[1, 2, 3, 4, 5].map((star) => {
            const active = star <= rating;
            const icon = (
                <Star
                    className={`${size} transition-colors ${active ? "fill-orange-400 text-orange-400" : "text-slate-300"}`}
                />
            );

            if (!interactive) {
                return <span key={star}>{icon}</span>;
            }

            return (
                <button
                    key={star}
                    type="button"
                    onClick={() => onRate(star)}
                    className="rounded-md p-1 transition-transform hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-400"
                    aria-label={`Rate ${star} star${star === 1 ? "" : "s"}`}
                    aria-pressed={active}
                >
                    {icon}
                </button>
            );
        })}
    </div>
);

const Reviews = () => {
    const [result, setResult] = useState({ reviews: [], total: 0, average: 0 });
    const [page, setPage] = useState(1);
    const [refresh, setRefresh] = useState(0);
    const [loading, setLoading] = useState(true);
    const [loadError, setLoadError] = useState("");
    const [error, setError] = useState("");
    const [busy, setBusy] = useState(false);
    const busyRef = useRef(false);
    const [notice, setNotice] = useState("");
    const [confirmDelete, setConfirmDelete] = useState(null);
    const [adminPassword, setAdminPassword] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [adminOpen, setAdminOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        project: "",
        message: "",
    });
    const [rating, setRating] = useState(5);
    useEffect(() => {
        const controller = new AbortController();
        let ownerToken;
        try { ownerToken = getReviewOwnerToken(); } catch { /* Reading public reviews still works without storage. */ }
        setLoading(true);
        setLoadError("");
        reviewRequest(`?page=${page}`, { ownerToken, signal: controller.signal })
            .then((data) => {
                if (controller.signal.aborted) return;
                const lastPage = Math.max(1, Math.ceil(data.total / 6));
                if (page > lastPage) { setPage(lastPage); return; }
                setResult(data);
            })
            .catch((failure) => { if (!controller.signal.aborted) setLoadError(failure.message); })
            .finally(() => { if (!controller.signal.aborted) setLoading(false); });
        return () => controller.abort();
    }, [page, refresh]);

    const averageRating = result.total ? result.average.toFixed(1) : "—";
    const reviewHighlights = [
        { value: result.total ? `${averageRating}/5` : "—", label: "Average rating" },
        { value: result.total, label: "Customer reviews" },
        { value: "25+", label: "Years trusted" },
    ];

    const runAction = async (action) => {
        if (busyRef.current) return;
        busyRef.current = true;
        setBusy(true);
        setError("");
        setNotice("");
        try { await action(); } catch (failure) { setError(failure.message); }
        finally { busyRef.current = false; setBusy(false); }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((current) => ({ ...current, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        runAction(async () => {
            if (!formData.name.trim() || !formData.message.trim()) throw new Error("Please enter your name and review.");
            let ownerToken;
            try { ownerToken = getReviewOwnerToken(); }
            catch { throw new Error("Please enable browser storage to post and manage your reviews."); }
            await reviewRequest("", {
                method: "POST", ownerToken,
                body: JSON.stringify({ name: formData.name, project: formData.project, text: formData.message, rating }),
            });
            setFormData({ name: "", project: "", message: "" });
            setRating(5);
            setNotice("Thank you. Your review has been published.");
            setPage(1);
            setRefresh((value) => value + 1);
        });
    };

    const handleDelete = (review) => runAction(async () => {
        await reviewRequest(`/${review.id}`, {
            method: "DELETE", adminPassword,
            ownerToken: adminPassword ? undefined : getReviewOwnerToken(),
        });
        setConfirmDelete(null);
        setNotice("Review deleted.");
        setRefresh((value) => value + 1);
    });

    const handleAdminLogin = (event) => {
        event.preventDefault();
        runAction(async () => {
            await reviewRequest("/admin/verify", { method: "POST", adminPassword: passwordInput });
            setAdminPassword(passwordInput);
            setPasswordInput("");
            setNotice("Admin access enabled. You can delete any review.");
        });
    };

    return (
        <section id="reviews" className="section-padding relative overflow-hidden bg-white">
            <div className="absolute inset-0 bg-fine-grid opacity-35" aria-hidden="true" />
            <div className="section-shell relative">
                <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
                    <div className="reveal-on-scroll">
                        <span className="eyebrow">Customer reviews</span>
                        <h2 className="mt-5 text-balance text-[clamp(2.15rem,5vw,4rem)] font-black leading-tight text-slate-950">
                            Trusted work, rated by local customers.
                        </h2>
                        <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
                            Real project feedback helps new customers choose strong, clean, and dependable metal fabrication with confidence.
                        </p>

                        <div className="mt-7 grid gap-4 sm:grid-cols-3">
                            {reviewHighlights.map((item) => (
                                <div key={item.label} className="metric-tile p-5">
                                    <p className="text-2xl font-black text-slate-950">{item.value}</p>
                                    <p className="mt-2 text-xs font-black uppercase text-slate-500">{item.label}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-7 rounded-lg border border-orange-200 bg-orange-50/75 p-5 shadow-sm">
                            <div className="flex flex-wrap items-center gap-3">
                                <StarRow rating={Math.round(result.average)} />
                                <span className="text-lg font-black text-slate-950">{result.total ? `${averageRating} average from customers` : "Be the first to leave a review"}</span>
                            </div>
                            <p className="mt-3 leading-7 text-slate-700">
                                Share your experience with all visitors. You can delete your own reviews from this browser. Clearing browser data removes that access.
                            </p>
                        </div>
                    </div>

                    <div className="reveal-on-scroll stagger-1 grid gap-5">
                        <div aria-live="polite">
                            {notice && <p className="text-sm font-bold text-teal-700">{notice}</p>}
                            {error && <p role="alert" className="text-sm font-bold text-red-700">{error}</p>}
                        </div>
                        {loading && <p role="status" className="text-slate-600">Loading reviews...</p>}
                        {loadError && <div role="alert" className="rounded-lg border border-red-200 p-4 text-red-700">
                            <p>{loadError}</p>
                            <Button type="button" variant="outline" className="mt-3" onClick={() => setRefresh((value) => value + 1)}>Retry</Button>
                        </div>}
                        {!loading && !loadError && result.total === 0 && <p className="text-slate-600">No reviews yet. Share your experience below.</p>}
                        <div className="grid gap-5 md:grid-cols-2">
                            {!loading && !loadError && result.reviews.map((review, index) => (
                                <article
                                    key={review.id}
                                    className={`premium-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 ${index === 0 ? "md:col-span-2" : ""}`}
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <h3 className="text-lg font-black text-slate-950">{review.name}</h3>
                                            <p className="mt-1 text-sm font-bold text-orange-700">{review.project}</p>
                                        </div>
                                        <Quote className="h-6 w-6 shrink-0 text-teal-700" />
                                    </div>
                                    <div className="mt-4">
                                        <StarRow rating={review.rating} />
                                    </div>
                                    <p className="mt-4 whitespace-pre-wrap break-words leading-7 text-slate-600">{review.text}</p>
                                    {(review.canDelete || adminPassword) && <div className="mt-4">
                                        {confirmDelete === review.id ? <div>
                                            <p className="mb-2 text-sm text-slate-600">Delete this review permanently?</p>
                                            <div className="flex gap-2">
                                                <Button type="button" variant="destructive" size="sm" disabled={busy} onClick={() => handleDelete(review)}>Confirm delete</Button>
                                                <Button type="button" variant="ghost" size="sm" disabled={busy} onClick={() => setConfirmDelete(null)}>Cancel</Button>
                                            </div>
                                        </div> : <Button type="button" variant="ghost" size="sm" className="text-red-700" disabled={busy} onClick={() => setConfirmDelete(review.id)} aria-label={`Delete review by ${review.name}`}>
                                            <Trash2 className="h-4 w-4" /> Delete review
                                        </Button>}
                                    </div>}
                                </article>
                            ))}
                        </div>
                        {!loadError && result.total > 6 && <nav aria-label="Review pages" className="flex items-center justify-between gap-3">
                            <Button type="button" variant="outline" disabled={page === 1 || loading || busy} onClick={() => { setPage(page - 1); setConfirmDelete(null); }}>Previous</Button>
                            <span className="text-sm text-slate-600">Page {page} of {Math.ceil(result.total / 6)}</span>
                            <Button type="button" variant="outline" disabled={page >= Math.ceil(result.total / 6) || loading || busy} onClick={() => { setPage(page + 1); setConfirmDelete(null); }}>Next</Button>
                        </nav>}

                        <form onSubmit={handleSubmit} className="premium-card p-5 sm:p-6">
                            <fieldset disabled={busy}>
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                                <div>
                                    <span className="section-kicker">Share your experience</span>
                                    <h3 className="mt-2 text-2xl font-black text-slate-950">Rate our work</h3>
                                </div>
                                <StarRow rating={rating} interactive onRate={setRating} size="h-6 w-6" />
                            </div>

                            <div className="mt-6 grid gap-4 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="review-name" className="mb-2 block text-xs font-black uppercase text-slate-600">
                                        Your Name
                                    </label>
                                    <input
                                        id="review-name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="field-control"
                                        placeholder="Your name"
                                        autoComplete="name"
                                        maxLength={80}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="review-project" className="mb-2 block text-xs font-black uppercase text-slate-600">
                                        Project Type
                                    </label>
                                    <input
                                        id="review-project"
                                        name="project"
                                        value={formData.project}
                                        onChange={handleChange}
                                        className="field-control"
                                        placeholder="Gate, grill, roofing..."
                                        maxLength={120}
                                    />
                                </div>
                            </div>

                            <div className="mt-4">
                                <label htmlFor="review-message" className="mb-2 block text-xs font-black uppercase text-slate-600">
                                    Review
                                </label>
                                <textarea
                                    id="review-message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="field-control min-h-28 resize-y"
                                    placeholder="Tell others about the quality, service, and finishing..."
                                    required
                                    maxLength={2000}
                                />
                            </div>

                            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                <Button type="submit" disabled={busy}>
                                    <Send className="h-4 w-4" />
                                    {busy ? "Please wait..." : "Submit Review"}
                                </Button>
                            </div>
                            </fieldset>
                        </form>

                        <div className="premium-card p-5">
                            {adminPassword ? <div className="flex flex-wrap items-center justify-between gap-3">
                                <p className="text-sm font-bold text-teal-700">Admin review management</p>
                                <Button type="button" variant="outline" disabled={busy} onClick={() => { setAdminPassword(""); setConfirmDelete(null); setNotice("Admin access closed."); }}>Sign out</Button>
                            </div> : <>
                                <button type="button" className="text-sm font-bold text-slate-600 underline" aria-expanded={adminOpen} onClick={() => setAdminOpen(!adminOpen)}>Admin access</button>
                                {adminOpen && <form onSubmit={handleAdminLogin} className="mt-4 flex flex-col gap-3">
                                    <input type="text" name="username" autoComplete="username" value="admin" readOnly hidden />
                                    <label htmlFor="reviews-admin-password" className="text-sm font-bold text-slate-700">Admin password</label>
                                    <input id="reviews-admin-password" name="password" className="field-control" type="password" autoComplete="current-password" minLength={9} required value={passwordInput} onChange={(event) => setPasswordInput(event.target.value)} disabled={busy} />
                                    <Button type="submit" disabled={busy}>{busy ? "Please wait..." : "Sign in as admin"}</Button>
                                </form>}
                            </>}
                        </div>

                        <a
                            href="https://wa.me/919352391913"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 font-black text-slate-950 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-200 hover:bg-teal-50 hover:text-teal-800"
                        >
                            <MessageCircle className="h-4 w-4" />
                            Ask for customer references
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
