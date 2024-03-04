import Image from "next/image";
import { Inter } from "next/font/google";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const inter = Inter({ subsets: ["latin"] });
const words =
  "Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows";
export default function Home() {
  return (
    <main
      className={`bg-home w-screen h-screen bg-white m-0 p-0`}
    >
      <TextGenerateEffect words={words} />
    </main>
  );
}
