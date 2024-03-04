import Image from "next/image";
import { Inter } from "next/font/google";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import bgImage from '../assets/bg.jpg'
import { MyNav } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });
const words =
  "Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows";
export default function Home() {
  return (
    <main
      className={` bg-[url('../../public/bg.jpg')] bg-cover h-screen m-0 p-0`}
    >
        <MyNav />
      <div className="relative top-20">


        <TextGenerateEffect words={words} />
      </div>
    </main>
  );
}
