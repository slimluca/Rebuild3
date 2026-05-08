import { NextResponse } from "next/server";
import { getRandomModelUrl } from "@/lib/affiliate";

export const dynamic = "force-dynamic";

export function GET() {
  return NextResponse.redirect(getRandomModelUrl(), {
    headers: {
      "X-Robots-Tag": "noindex, nofollow"
    }
  });
}
