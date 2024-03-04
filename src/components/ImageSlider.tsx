"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import bgImage from "../assets/bg.jpg";

export function ImageSlider() {
  const words =
    "Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows";
  const images = [
    "https://firebasestorage.googleapis.com/v0/b/pehli-pariksha.appspot.com/o/Amiphoria%202024%2Fbg.jpg?alt=media&token=ac4294de-ad15-4b92-a1aa-5b0d1ec670b9",
    "https://firebasestorage.googleapis.com/v0/b/pehli-pariksha.appspot.com/o/Amiphoria%202024%2Fastha_gill.jpg?alt=media&token=bbd24e73-d4dc-4e1e-b4ee-17a9a4568807",
    "https://firebasestorage.googleapis.com/v0/b/pehli-pariksha.appspot.com/o/Amiphoria%202024%2FasthaGill2.jpg?alt=media&token=d0ac7491-9ba6-4d2c-b377-ffcefbc61371",
    "https://firebasestorage.googleapis.com/v0/b/pehli-pariksha.appspot.com/o/Amiphoria%202024%2Fastha_gill.jpg?alt=media&token=bbd24e73-d4dc-4e1e-b4ee-17a9a4568807",
    "https://firebasestorage.googleapis.com/v0/b/pehli-pariksha.appspot.com/o/Amiphoria%202024%2FasthaGill2.jpg?alt=media&token=d0ac7491-9ba6-4d2c-b377-ffcefbc61371",
  ];
  return (
    <ImagesSlider className=" h-screen bg-contain" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1.2,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="z-50 flex flex-col justify-center items-center relative "
      >
        <motion.p className="font-bold text-5xl md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4 ">
        <h2 className="amiphoria-text  font-sans md:mb-20 mb-10 ">AMIPHORIA 2024</h2>
          <TextGenerateEffect words={words} className="md:mx-36 mx-10"/>
        </motion.p>
        <button className="px-4 py-3 backdrop-blur-sm border bg-blue-300/20 border-blue-500 text-white mx-auto text-center rounded-full relative mt-4 hover:scale-[1.1] transition-all dealy-100 ease-in-out hover:bg-blue-400/30">
          <span className="">Participate Now →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
