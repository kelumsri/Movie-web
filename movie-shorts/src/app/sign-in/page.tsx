// import { SignIn } from "@clerk/nextjs";

// export default function Page() {
//   return <SignIn />;
// }

import { SignIn } from "@clerk/nextjs";

const SignInPage = () => (
  <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
  );

export default SignInPage;