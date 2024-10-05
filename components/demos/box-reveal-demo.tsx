"use client";

import BoxReveal from "@/components/ui/box-reveal";
import Link from "next/link";

const BoxRevealDemo = () => {
  return (
    <div className="h-full w-full items-center justify-center ml-10 overflow-hidden pt-8 space-y-2">
      <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
        <p className="text-3xl font-semibold">1. Rejoignez-nous</p>
      </BoxReveal>

      <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
        <h2 className="my-2 text-lg text-gray-500">
          Connectez-vous avec nous en programmant un
          <Link href={"/meeting"} className="text-[#3b82f6]">
            {" "}
            Rendez-vous personnalisé{" "}
          </Link>
        </h2>
      </BoxReveal>
      <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
        <p className="text-3xl font-semibold">2. Collaborez avec nous</p>
      </BoxReveal>

      <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
        <h2 className="my-2 text-lg text-gray-500">
          Ensemble, définissons les objectifs de votre projet
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
        <p className="text-3xl font-semibold">3. Créons ensemble</p>
      </BoxReveal>

      <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
        <h2 className="my-2 text-lg text-gray-500">
          Confiez-nous la réalisation, nous nous occupons de tout
        </h2>
      </BoxReveal>
    </div>
  );
};

export default BoxRevealDemo;
