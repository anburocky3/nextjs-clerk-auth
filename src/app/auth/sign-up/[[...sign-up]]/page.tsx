import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center m-10">
      <SignUp
        appearance={{
          layout: {
            helpPageUrl: "https://clerk.dev/support",
            logoPlacement: "inside",
            socialButtonsPlacement: "bottom",
            socialButtonsVariant: "iconButton",
            privacyPageUrl: "https://clerk.dev/privacy",
            termsPageUrl: "https://clerk.dev/terms",
          },
        }}
      />
    </div>
  );
}
