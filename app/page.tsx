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
import { WordPullUpDemo } from "@/components/demos/word-pull-upp-demo";

const services = [
  {
    icon: "/images/s_6.png",
    title: "Web Design + Development",
    description:
      "Take your business to the next level with our web design and development services",
  },
  {
    icon: "/images/s_1.png",
    title: "Search Engine Optimization",
    description:
      "Get your website to the top of search engine results with our SEO services",
  },
  {
    icon: "/images/s_5.png",
    title: "Content Creation",
    description:
      "Boost your brand's online presence with our social media marketing services",
  },
  {
    icon: "/images/s_3.png",
    title: "Social Media Marketing",
    description:
      "Interact with your customers and increase sales with our email marketing services",
  },
  {
    icon: "/images/s_4.png",
    title: "Email Marketing",
    description:
      "With our content creation services, we help businesses drive results",
  },
  {
    icon: "/images/s_2.png",
    title: "Pay-Per-Click Advertising",
    description:
      "Don't waste money on ineffective advertising. Our PPC services help you reach your target audience",
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
            alt="Galsen Digital Logo"
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
              Expertise
            </ScrollLink>
            <ScrollLink
              to="process"
              smooth={true}
              className="hover:text-green-700"
            >
              A Propos
            </ScrollLink>
            <ScrollLink
              to="guarenties"
              smooth={true}
              className="hover:text-green-700"
            >
              Clients
            </ScrollLink>
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          {/* <a href="tel:781606189" className="hidden 2xl:flex">
            <button className="px-4 py-2 rounded-md flex items-center gap-x-3">
              (+221)78-160-61-89
            </button>
          </a> */}
          <Link
            href="/meeting"
            className="px-6 py-3 text-lg hover:bg-[#abcbff] rounded-[6px] border-2 border-black text-white bg-[#121212] transition duration-200 hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
          >
            Reserver un RV
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
              Réservez un RV
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
    </div>
  );
}
