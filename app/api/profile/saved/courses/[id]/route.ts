import { NextRequest, NextResponse } from "next/server";

type Context = { params: { id: number } };

const courseIds: number[] = [];

export async function POST(_request: NextRequest, context: Context) {
  const id = context.params.id;
  const nextCourseIds = [...courseIds, id];

  return NextResponse.json({ data: nextCourseIds }, { status: 200 });
}

export async function DELETE(_request: NextRequest, context: Context) {
  const id = context.params.id;
  const nextCourseIds =
    courseIds.length && courseIds.filter((courseId) => courseId !== id);

  return NextResponse.json({ data: nextCourseIds }, { status: 200 });
}
