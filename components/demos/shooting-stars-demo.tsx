import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Image from "next/image";
import fast from "/public/images/fast.svg";
import design from "/public/images/design.svg";
import scalable from "/public/images/scalable.svg";
import safe from "/public/images/safe.svg";
import team from "/public/images/team.svg";
import analytics from "/public/images/analytics.svg";
import flexible from "/public/images/flexible.svg";
import support from "/public/images/support.svg";
import money from "/public/images/money.svg";
const features = [
  {
    icon: fast.src,
    title: "Livraison Rapide",
    description:
      "Livraison en 1 à 2 semaines pour la plupart des projets. Contactez-nous pour plus d'informations.",
  },
  {
    icon: design.src,
    title: "Conception & Développement",
    description:
      "Nous concevons et développons votre site web avec les dernières technologies et tendances.",
  },
  {
    icon: scalable.src,
    title: "Scalabilité + Maintenance",
    description:
      "Nous offrons la maintenance et la scalabilité pour tous les sites web.",
  },
  {
    icon: team.src,
    title: "Équipe d'Experts",
    description: "Une équipe d'experts prête à vous aider à tout moment.",
  },
  {
    icon: safe.src,
    title: "Construction Sécurisée",
    description:
      "Pratiques de construction sûres et sécurisées pour garantir la sécurité de vos données.",
  },
  {
    icon: analytics.src,
    title: "Suivi Analytique",
    description: "Suivez vos progrès avec notre système d'analyses intégré.",
  },
  {
    icon: flexible.src,
    title: "Sites Web Dynamiques",
    description: "Nous créons des solutions dynamiques faciles à gérer.",
  },
  {
    icon: support.src,
    title: "Support 24/7",
    description:
      "Nous offrons un support 24/7 pour tous nos clients. Contactez-nous pour plus d'informations.",
  },
  {
    icon: money.src,
    title: "Tarifs Abordables",
    description: "Des tarifs abordables pour tous nos clients.",
  },
];

export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div className="mt-20 py-10 md:py-20 rounded-[40px] bg-neutral-900 flex flex-col items-center justify-center relative w-full px-6 md:px-0">
      <h2 className="relative flex-col  z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 via-white to-white flex items-center gap-2 ">
        Nos garanties pour vous.
        <p className="md:text-center   mx-auto  text-xl md:text-2xl text-gray-200">
          Nous garantissons la plus haute qualité de travail, avec les délais de
          livraison les plus rapides.
        </p>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 z-40 xl:w-4/5 2xl:w-[68%] mx-auto ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col   p-10 bg-neutral-800 rounded-xl cursor-pointer"
          >
            <button
              className="
                     w-16 p-4 
                     animate-shine flex items-center justify-center rounded-md  bg-gradient-to-br  
                        from-neutral-700 to-neutral-800 
                    font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <Image
                src={feature.icon}
                width={10000}
                height={10000}
                alt="icon"
                className="w-8 h-8"
              />
            </button>

            <h3 className="text-xl font-bold mt-4 text-white">
              {feature.title}
            </h3>
            <p className=" text-gray-200">{feature.description}</p>
          </div>
        ))}
      </div>

      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
