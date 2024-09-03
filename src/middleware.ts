import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import { NextRequest } from "next/server";

// Define the middleware function
export default function middleware(req: NextRequest) {
    // Apply the authentication middleware
    return withAuth(req);
}

// Configure which routes this middleware applies to
export const config = {
    matcher: ["/createPost"], // Apply to /createPost route
};
