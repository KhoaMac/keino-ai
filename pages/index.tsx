import Image from "next/image";
import { Inter } from "next/font/google";
import Button from "@/components/Button";
import OnboardingLayout from "@/components/layouts/OnboardingLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <OnboardingLayout>
      <Button />
    </OnboardingLayout>
  );
}
