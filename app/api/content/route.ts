import { NextResponse } from "next/server";
import { siteContent } from "@/data/siteContent";

export async function GET() {
  return NextResponse.json(siteContent);
}
