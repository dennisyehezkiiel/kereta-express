import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Check if the current path is "/"
  console.log(request.nextUrl.pathname, ">>>>cek req");
  
  if (request.nextUrl.pathname === "/") {
    // Redirect to "/login"
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = "/login";
    return NextResponse.redirect(loginUrl);
    // return NextResponse.redirect('/login');
  }

  // Allow the request if it's not "/"
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/some-other-path"],
};
