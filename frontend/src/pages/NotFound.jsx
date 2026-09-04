import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Button from "../components/ui/Button";

const NotFound = () => {
    const location = useLocation();

    useEffect(() => {
        console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    }, [location.pathname]);

    return (
        <div className="flex min-h-screen items-center justify-center bg-[linear-gradient(135deg,#0f172a,#135c71)] px-4 text-white">
            <div className="premium-card max-w-md p-8 text-center text-slate-950">
                <p className="text-sm font-black uppercase text-orange-700">Page not found</p>
                <h1 className="mt-3 text-6xl font-black">404</h1>
                <p className="mt-4 text-lg leading-7 text-slate-600">The page you are looking for does not exist.</p>
                <a href="/" className="mt-7 inline-flex">
                    <Button>Return to Home</Button>
                </a>
            </div>
        </div>
    );
};

export default NotFound;
