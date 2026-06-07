import { NextResponse } from "next/server";
import { getBecomeModelUrl } from "@/lib/affiliate";

export const dynamic = "force-dynamic";

export function GET() {
  return NextResponse.redirect(getBecomeModelUrl(), {
    headers: {
      "X-Robots-Tag": "noindex, nofollow"
    }
  });
}
