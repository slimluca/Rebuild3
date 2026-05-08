import { NextResponse } from "next/server";
import { getSignupUrl } from "@/lib/affiliate";

export const dynamic = "force-dynamic";

export function GET() {
  return NextResponse.redirect(getSignupUrl(), {
    headers: {
      "X-Robots-Tag": "noindex, nofollow"
    }
  });
}
