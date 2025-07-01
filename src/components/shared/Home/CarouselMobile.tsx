"use client";

import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { AiDventureAssets } from "@/assets";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

const carouselSlides = [
  {
    title: "Welcome to Bangladesh",
    description:
      "Bangladesh offers stunning natural diversity—lush green hills, serene rivers, mangrove forests, and sandy beaches—alongside six vibrant seasons, making it a captivating destination for nature lovers and cultural tourists.",
    image: AiDventureAssets.images.mobile.mobileImage1,
    alt: "Scenic landscape of Bangladesh",
  },
  {
    title: "The Sundarbans",
    description:
      "World's largest mangrove forest, a UNESCO World Heritage Site teeming with biodiversity, including the elusive Royal Bengal Tiger, offering adventurous eco-tourism and breathtaking natural beauty.",
    image: AiDventureAssets.images.mobile.mobileImage2,
    alt: "The Sundarbans forest with rivers and trees",
  },
  {
    title: "Chittagong Hill Tracts",
    description:
      "The Chittagong Hill Tracts boast rolling hills, tribal cultures, waterfalls, and scenic lakes like Kaptai, offering a unique blend of natural beauty and indigenous heritage in southeastern Bangladesh.",
    image: AiDventureAssets.images.mobile.mobileImage3,
    alt: "Hilly landscapes of Chittagong",
  },
];

const CarouselMobile = () => {
  return (
    <div>
      <Carousel
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 5000 }), Fade()]}
      >
        <CarouselContent>
          {carouselSlides.map((slide, index) => (
            <CarouselItem key={index} className="relative">
              <Image
                src={slide.image}
                alt={slide.alt}
                className="w-dvw h-dvh object-cover brightness-[.6]"
                priority={index === 0}
              />
              <div className="px-12 w-full absolute top-24 left-0 flex flex-col gap-5 z-10">
                <h1 className="text-5xl text-white font-comforter">
                  {slide.title}
                </h1>
                <h1 className="text-sm text-white font-raleway">
                  {slide.description}
                </h1>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CarouselMobile;
