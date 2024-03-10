"use client";

import { useRouter } from "next/navigation";

export default function BackButton({ text }: { text: string }) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="text-blue-50 hover:underline"
    >
      {text}
    </button>
  );
}
