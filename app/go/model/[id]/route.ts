import { NextResponse } from "next/server";
import { getModelUrl } from "@/lib/affiliate";
import { getLiveModelById } from "@/lib/livejasmin";

export const dynamic = "force-dynamic";

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(_request: Request, context: RouteContext) {
  const { id } = await context.params;
  const model = await getLiveModelById(id);

  return NextResponse.redirect(getModelUrl(id, model?.profileUrl), {
    headers: {
      "X-Robots-Tag": "noindex, nofollow"
    }
  });
}
