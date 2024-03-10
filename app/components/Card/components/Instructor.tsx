import type { Instructor as InstructorType } from "@/app/lib/definitions";
import Image from "next/image";

export default function Instructor({
  instructor,
}: {
  instructor: InstructorType;
}) {
  const { first_name, last_name, portrait_image } = instructor;

  return (
    <div className="mt-16 mx-8">
      <Image
        src={portrait_image}
        alt={`Photo of ${first_name} ${last_name}`}
        width={100}
        height={100}
        className="rounded-full mx-auto"
      />
      <div className="text-center my-2">
        Instructor: <br />
        {first_name}
      </div>
    </div>
  );
}
