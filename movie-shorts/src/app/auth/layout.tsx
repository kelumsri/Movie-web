import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function UserLayout({
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  if (userId === "user_2S8UY2S6emgHqTbap2S1ykrWpsQ") {
    redirect("/dashboard");
  }

  if (userId !== "user_2S8UY2S6emgHqTbap2S1ykrWpsQ") {
    redirect("/homepage");
  }
  return(
  <h1>jhsdbjkshbdkjh</h1>
);
}