import { NextResponse } from "next/server";
import { getLiveJasminUrl } from "@/lib/affiliate";

export const dynamic = "force-dynamic";

export function GET() {
  return NextResponse.redirect(getLiveJasminUrl(), {
    headers: {
      "X-Robots-Tag": "noindex, nofollow"
    }
  });
}
