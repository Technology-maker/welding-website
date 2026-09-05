# Reviews setup

Customer reviews are stored in MongoDB and shared across visitors. There are no customer accounts: a random private key saved in the visitor's browser lets that browser delete its own reviews. Visitors sharing a browser profile share this access. Clearing site storage or switching browsers loses it; the admin can still remove the review.

1. Run `npm install` in `backend`.
2. Add `MONGODB_URI`, `MONGODB_DB`, and `REVIEWS_ADMIN_PASSWORD` to the existing backend `.env`. See `.env.example`; preserve the existing email settings. Use a persistent MongoDB database (for example, MongoDB Atlas for Vercel), with network access and credentials permitting reads, writes, and index creation. The `reviews` collection and its index are created on first use.
3. Set `REVIEWS_ADMIN_PASSWORD` to a unique password with more than 8 characters (minimum 9). Keep it on the backend; never put it in a `VITE_` variable. Admin access stays disabled if this setting is missing or too short.
4. For local development, start the backend with `npm run dev` and the frontend with `npm run dev` in a separate terminal. Frontend `/api` requests are proxied to the `PORT` in `backend/.env` (default `5000`). Restart both development servers after changing that port. To use another API, set `VITE_API_URL` in the frontend environment (see `frontend/.env.example`).
5. For deployment, configure the same backend environment variables on the hosting provider, then deploy both apps. The production frontend defaults to the existing backend URL. Use HTTPS, and update the backend CORS origin list if the frontend domain changes. Protect public submission/admin endpoints with hosting-level rate limits appropriate to your traffic.

Use **Admin access** below the review form to enter the configured password. Every review then shows a delete button. Deletion requires confirmation. **Sign out** or reloading clears admin access from the page; the password is kept only in React state, never in browser storage.

Reviews are paginated six per page, with totals and average rating calculated across all reviews. Old browser-only reviews are not automatically published, and hardcoded sample testimonials are no longer shown as shared customer submissions.

Run `npm run lint` and `npm run build` in `frontend` for frontend checks. The review test file has been removed, so `npm test` does not currently provide review coverage. When verifying a deployment, check review creation, ownership, admin permissions, pagination, and persistence using temporary reviews, then remove those reviews.
