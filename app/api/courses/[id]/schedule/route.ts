import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _request: NextRequest,
  _context: { params: { id: number } }
) {
  return NextResponse.json({ data: [] }, { status: 200 });
}
