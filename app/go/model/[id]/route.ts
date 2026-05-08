import { NextResponse } from "next/server";
import { getModelUrl } from "@/lib/affiliate";

export const dynamic = "force-dynamic";

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(_request: Request, context: RouteContext) {
  const { id } = await context.params;

  return NextResponse.redirect(getModelUrl(id), {
    headers: {
      "X-Robots-Tag": "noindex, nofollow"
    }
  });
}
