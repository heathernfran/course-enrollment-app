import BackButton from "@/app/components/BackButton";

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <h2>Thank you for enrolling in Course {id}!</h2>
      <BackButton text={`Back to courses`} />
    </div>
  );
}
