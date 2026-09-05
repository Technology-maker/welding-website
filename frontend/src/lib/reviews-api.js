import { API_URL } from "./api";
const OWNER_KEY = "svmw-review-owner-token";

export function getReviewOwnerToken() {
    let token = window.localStorage.getItem(OWNER_KEY);
    if (!/^[a-f0-9]{64}$/.test(token || "")) {
        token = Array.from(window.crypto.getRandomValues(new Uint8Array(32)), (byte) => byte.toString(16).padStart(2, "0")).join("");
        // Save before publishing, so a failed storage write cannot leave an unmanageable review.
        window.localStorage.setItem(OWNER_KEY, token);
    }
    return token;
}

export async function reviewRequest(path = "", { ownerToken, adminPassword, ...options } = {}) {
    const response = await fetch(`${API_URL}/reviews${path}`, {
        ...options,
        headers: {
            ...(options.body ? { "Content-Type": "application/json" } : {}),
            ...(adminPassword ? { Authorization: `Bearer ${adminPassword}` }
                : ownerToken ? { Authorization: `Review ${ownerToken}` } : {}),
        },
    });
    if (response.status === 204) return null;
    const data = await response.json().catch(() => null);
    if (!response.ok) throw new Error(data?.message || "Could not load reviews. Please try again.");
    if (!data) throw new Error("The reviews service returned an invalid response.");
    return data;
}
