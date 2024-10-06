import BlurFade from "@/components/ui/blur-fade";
import Image from "next/image";
import Link from "next/link";
import samacar from "/public/images/samacar.png";
import samakeur from "/public/images/samakeur.png";
import sencoffee from "/public/images/sen-coffee.png";
import jayymabaguette from "/public/images/jayy-ma-baguette.png";
const works = [
  {
    background: "bg-gray-200",
    imageUrl: samakeur.src,
    title: "Sama Keur",
    link: "https://sama-keur-sn.onrender.com",
  },
  {
    background: "bg-gray-200",
    imageUrl: samacar.src,
    title: "Sama Car",
    link: "https://sama-car.vercel.app",
  },
  {
    background: "bg-gray-200",
    imageUrl: sencoffee.src,
    title: "Sen Coffee",
    link: "https://sen-coffee.netlify.app",
  },
  {
    background: "bg-gray-200",
    imageUrl: jayymabaguette.src,
    title: "Jayy Ma Baguette",
    link: "https://modouaicha023.github.io/jaaymabaguette",
  },
];

export function BlurFadeDemo() {
  return (
    <section id="photos">
      <div className="grid md:grid-cols-2 gap-8 mt-10 justify-items-center">
        {works.map(({ imageUrl, title, link }, idx) => (
          <BlurFade
            key={title}
            delay={0.25 + idx * 0.05}
            inView
            className={`rounded-lg ${works[idx].background} p-4`}
          >
            <Link href={link} target="_blank" rel="noreferrer">
              <Image
                height={10000}
                width={10000}
                className="
                h-5/6 w-full object-cover rounded-lg"
                src={imageUrl}
                alt={`Random stock image ${idx + 1}`}
              />
              <h3 className="text-lg font-semibold p-4">{title}</h3>
            </Link>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
