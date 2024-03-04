import Image from "next/image";
import { Inter } from "next/font/google";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import bgImage from '../assets/bg.jpg'
import { MyNav } from "@/components/Navbar";
import { ImageSlider } from "@/components/ImageSlider";
const inter = Inter({ subsets: ["latin"] });
const words =
  "Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows";
export default function Home() {
  return (
    <main
      className={` m-0 p-0`}
    >
        <MyNav />
        <div className=" ">

        <ImageSlider />
        </div>
      {/* <div className="relative top-20 ">
        <TextGenerateEffect words={words} className="absolute top-64 md:mx-36" />
      </div> */}
    </main>
  );
}
