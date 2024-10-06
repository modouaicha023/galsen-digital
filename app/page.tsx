"use client";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink, Element } from "react-scroll";
import Logo from "/public/images/Galsen-Digitale-Logo.webp";
import { AnimatedShinyTextDemo } from "@/components/demos/animated-shiny-text-demos";
import { CoverDemo } from "@/components/demos/cover-demo";
import BoxReveal from "@/components/ui/box-reveal";
import { PiCheckBold } from "react-icons/pi";
import NumberTicker from "@/components/ui/number-ticker";
import { InfiniteMovingLogos } from "@/components/ui/infinite-moving-logo";
import logo1 from "/public/images/logo1.jpg";
import logo2 from "/public/images/logo2.webp";
import logo3 from "/public/images/logo3.jpg";
import s_1 from "/public/images/s_1.png";
import s_2 from "/public/images/s_2.png";
import s_3 from "/public/images/s_3.png";
import s_4 from "/public/images/s_4.png";
import s_5 from "/public/images/s_5.png";
import s_6 from "/public/images/s_6.png";
import squiggle from "/public/images/squiggle.svg";
import star from "/public/images/star.svg";
import { WordPullUpDemo } from "@/components/demos/word-pull-upp-demo";
import { ScrollBasedVelocityDemo } from "@/components/demos/scroll-based-velocity-demo";
import { AnimatedBeamMultipleOutputDemo } from "@/components/demos/animated-beam-demo";
import BoxRevealDemo from "@/components/demos/box-reveal-demo";
import { IconStarFilled } from "@tabler/icons-react";
import { ShootingStarsAndStarsBackgroundDemo } from "@/components/demos/shooting-stars-demo";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";

const services = [
  {
    icon: s_6.src,
    title: "Conception et développement web",
    description:
      "Faites passer votre entreprise au niveau supérieur avec nos services de conception et de développement web",
  },
  {
    icon: s_1.src,
    title: "Optimisation pour les moteurs de recherche",
    description:
      "Faites apparaître votre site web en tête des résultats de recherche avec nos services SEO",
  },
  {
    icon: s_5.src,
    title: "Création de contenu",
    description:
      "Boostez la présence en ligne de votre marque avec nos services de marketing sur les réseaux sociaux",
  },
  {
    icon: s_3.src,
    title: "Marketing sur les réseaux sociaux",
    description:
      "Interagissez avec vos clients et augmentez vos ventes avec nos services de marketing par e-mail",
  },
  {
    icon: s_4.src,
    title: "Marketing par e-mail",
    description:
      "Avec nos services de création de contenu, nous aidons les entreprises à générer des résultats",
  },
  {
    icon: s_2.src,
    title: "Publicité payante par clic",
    description:
      "Ne gaspillez pas votre argent sur de la publicité inefficace. Nos services PPC vous aident à atteindre votre public cible",
  },
];
export default function Home() {
  return (
    <div className="overflow-clip inset-0 -z-10 h-full w-full bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <Element
        name="top"
        className="overflow-hidden rounded-[6px] top-5 sticky md:mx-auto z-50 xl:w-4/5 2xl:w-[68%] bg-white flex items-center justify-between py-6 px-4 md:px-8 mx-6"
      >
        <Link href="/">
          <Image
            src={Logo.src}
            alt="Galsen Digital Studio Logo"
            width={1000}
            height={1000}
            className="w-16"
          />
        </Link>
        <div className="absolute right-1/2 translate-x-1/2 transform">
          <div className="hidden md:flex gap-x-10 items-center text-gray-700 font-medium text-lg cursor-pointer">
            <Link href="/showcase" className="hover:text-green-700">
              Réalisations
            </Link>
            <ScrollLink
              to="services"
              smooth={true}
              className="hover:text-green-700 text-nowrap"
            >
              Expertises
            </ScrollLink>
            <ScrollLink
              to="process"
              smooth={true}
              className="hover:text-green-700"
            >
              Processus
            </ScrollLink>
            <ScrollLink
              to="guarentees"
              smooth={true}
              className="hover:text-green-700"
            >
              Garanties
            </ScrollLink>
          </div>
        </div>
        <div className="flex items-center gap-x-4 text-xs">
          <a href="tel:+221781606189" className="hidden 2xl:flex">
            <button className="px-4 py-2 rounded-md flex items-center gap-x-3">
              (+221)78-160-61-89
            </button>
          </a>
          <Link
            href="/meeting"
            className="px-6 py-3 text-lg hover:bg-[#abcbff] rounded-[6px] border-2 border-black text-white bg-[#121212] transition duration-200 hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
          >
            Réserver un RV
          </Link>
        </div>
      </Element>
      <main className="md:pb-10">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-14">
          <AnimatedShinyTextDemo />

          <h1>
            <CoverDemo />
          </h1>
          <p className="px-2 text-justify md:text-center text-xl md:text-2xl my-10 md:w-4/5 mx-auto text-gray-500">
            Vous avez un projet digital ? Parlons-en ! Prenez rendez-vous avec
            nos experts.
          </p>
          <div className="flex justify-center items-center gap-x-4">
            <Link
              href="/meeting"
              className="py-3 px-10 md:px-16 text-sm
      md:text-xl
      hover:bg-[#abcbff] 
      rounded-[6px]
      border-2 
      border-black 
      dark:border-white 
       bg-[#121212] 
       text-white 
       transition 
       duration-200 
       hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
            >
              Prenez un RV
            </Link>
            <Link
              href={"/showcase"}
              className="
              bg-white
   py-3 
   px-10
   md:px-16 text-sm
      md:text-xl
        border-4
        border-black
        rounded-[6px]
        hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
            >
              Réalisations
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center text-left justify-items-center md:mx-auto mt-10 md:mt-16">
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Design
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Développement
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Marketing
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Stratégie
              </p>
            </BoxReveal>
          </div>

          <div className="md:flex items-center justify-between gap-y-4 my-10 gap-x-28 mx-auto">
            <div className="md:w-2/5">
              <h1 className="text-2xl font-medium text-gray-600 w-4/5">
                Ils nous ont fais confiance
              </h1>
              <div className="flex my-6 gap-x-5 w-full">
                <div>
                  <h2 className="text-blue-500 text-3xl md:text-5xl">
                    <NumberTicker value={10} />+{" "}
                    <p className="text-gray-500 text-sm md:text-md">
                      Client contents
                    </p>
                  </h2>
                </div>
                <div className="w-px bg-gray-300 self-stretch"></div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-blue-500 text-3xl md:text-5xl whitespace-nowrap">
                    <NumberTicker value={10} />+{" "}
                    <p className="text-gray-500 text-sm md:text-md">
                      Sites Webs
                    </p>
                  </h2>
                </div>
              </div>
            </div>
            <section className=" mt-10 md:w-3/5">
              <InfiniteMovingLogos
                speed="slow"
                direction="left"
                items={[
                  {
                    logo: logo1.src,
                    name: "Logo 1",
                  },
                  {
                    logo: logo2.src,
                    name: "Logo 2",
                  },
                  {
                    logo: logo3.src,
                    name: "Logo 3",
                  },
                ]}
              />
            </section>
          </div>
        </div>
      </main>

      <Element name="services">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto ">
          <div>
            <WordPullUpDemo />
          </div>
          <p className="md:text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500">
            Tous nos services sont conçus pour aider votre entreprise à se
            démarquer
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col justify-between h-full space-y-4 text-center bg-gray-100 p-4 cursor-pointer hover:scale-105 transition-transform rounded-md"
              >
                <Image
                  src={service.icon}
                  width={10000}
                  height={10000}
                  className="object-contain bg-gray-100 p-4 w-full h-40 rounded-md"
                  alt="image"
                />
                <h1 className="text-xl font-medium">{service.title}</h1>
                <p className="text-gray-500">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Element>

      <section className="py-20">
        <ScrollBasedVelocityDemo />
      </section>
      <Element name="process">
        <main className="md:px-0 mx-6 md:mx-auto">
          <h1 className="text-2xl md:text-5xl md:text-center font-bold flex items-center gap-x-2 mx-auto justify-center">
            Notre{" "}
            <span className="text-yellow-500 flex gap-x-1 items-center">
              {" "}
              <Image
                src={squiggle.src}
                width={10000}
                height={10000}
                className="w-6"
                alt="image"
              />
              Processus
              <Image
                src={star.src}
                width={10000}
                height={10000}
                className="w-6 mb-8"
                alt="image"
              />
            </span>{" "}
            Creative
          </h1>

          <p
            className="text-center 
          py-4 md:w-1/2 mx-auto 
          text-xl md:text-2xl text-gray-500"
          >
            Tous nos services sont conçus pour aider votre entreprise à se faire
            remarquer.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-1/2 mx-auto">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <AnimatedBeamMultipleOutputDemo />
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2 md:ml-0">
              <BoxRevealDemo />
            </div>
          </div>
        </main>
      </Element>

      <section>
        <main className="md:flex items-center justify-center space-y-6 md:space-y-0 md:gap-x-20 xl:w-4/5 2xl:w-[68%] mx-auto px-6 md:px-0">
          <Image
            src={Logo.src}
            width={10000}
            height={10000}
            className=" md:w-1/3 rounded-md"
            alt="image"
          />
          <div className="flex flex-col gap-y-5 md:w-1/2">
            <h1 className="text-lg md:text-2xl ">
              &quot;Nous travaillons avec Galsen digital studio depuis plus de 2
              ans, et c&apos;est un plaisir de collaborer avec eux. Ils nous ont
              aidés à développer notre entreprise, et nous ne pourrions pas être
              plus satisfaits des résultats.&quot;
            </h1>
            <div className="flex items-center gap-x-1">
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
            </div>

            <span className="text-xl font-medium">
              Fallou Seck <br />
              CEO, Gallash Shop
            </span>
          </div>
        </main>
      </section>

      <Element name="guarentees">
        <ShootingStarsAndStarsBackgroundDemo />
      </Element>
      <section className="my-10 md:py-20 xl:w-4/5 2xl:w-[68%] md:mx-auto">
        <LetsMakeThingsHappenSection />
      </section>

      <footer className="bg-[#fafafa] py-10  px-6 md:px-0 md:mx-auto border-t">
        <div className="flex flex-col sm:flex-row gap-x-8 gap-y-4 sm:gap-y-0 justify-center items-center p-x-4">
          <div className="flex flex-col  justify-between gap-y-3 xl:w-4/5 2xl:w-[68%] mx-auto">
            <h1 className="text-3xl md:text-5xl font-medium ">
              <Image
                src={Logo.src}
                width={10000}
                height={10000}
                className="w-40"
                alt="image"
              />{" "}
            </h1>
            <p className="text-left  text-xl  text-gray-500">
              (+221)78-160-61-89
            </p>
            <p className="text-left  text-xl  text-gray-500">
              modouaicha023@gmail.com
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a
              className="text-gray-700 hover:text-green-600"
              aria-label="Visit TrendyMinds LinkedIn"
              href="https://www.linkedin.com/in/modouaicha023"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="h-8"
              >
                <path
                  fill="currentColor"
                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                ></path>
              </svg>
            </a>
            <a
              className="text-gray-700 hover:text-green-600"
              aria-label="Visit TrendyMinds YouTube"
              href="https://www.youtube.com/@modouaicha023"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="h-8"
              >
                <path
                  fill="currentColor"
                  d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                ></path>
              </svg>
            </a>
            <a
              className="text-gray-700 hover:text-green-600"
              aria-label="Visit TrendyMinds Facebook"
              href="https://www.facebook.com/modouaicha023"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="h-8"
              >
                <path
                  fill="currentColor"
                  d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                ></path>
              </svg>
            </a>
            <a
              className="text-gray-700 hover:text-green-600"
              aria-label="Visit TrendyMinds Instagram"
              href="https://www.instagram.com/modouaicha023"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="h-8"
              >
                <path
                  fill="currentColor"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                ></path>
              </svg>
            </a>
            <a
              className="text-gray-700 hover:text-green-600"
              aria-label="Visit TrendyMinds Twitter"
              href="https://twitter.com/modouaicha023"
              target="_blank"
            >
              <svg
                className="h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <div className="flex md:justify-center gap-x-4 mt-10">
          © {new Date(Date.now()).getFullYear()} Galsen Digital Studio. Tous
          droits réservés.
        </div>
      </footer>
    </div>
  );
}
