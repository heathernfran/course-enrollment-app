import { NextRequest, NextResponse } from "next/server";

export async function POST(
  _request: NextRequest,
  _context: { params: { id: number } }
) {
  return NextResponse.json({ data: [] }, { status: 200 });
}

export async function DELETE(
  _request: NextRequest,
  _context: { params: { id: number } }
) {
  return NextResponse.json({ data: [] }, { status: 200 });
}
