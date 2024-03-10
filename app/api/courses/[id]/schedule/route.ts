import { courses } from "@/app/lib/data";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _request: NextRequest,
  _context: { params: { id: number } }
) {
  // Use context.params.id to get all courses (aka classes) with the matching
  // course id.
  return NextResponse.json({ courses }, { status: 200 });
}
