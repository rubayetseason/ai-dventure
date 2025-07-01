import CarouselMobile from "@/components/shared/Home/CarouselMobile";
import Carousel from "@/components/shared/Home/CarouselPC";

export default function Home() {
  return (
    <div>
      <div className="hidden md:block">
        <Carousel></Carousel>
      </div>
      <div className="md:hidden">
        <CarouselMobile></CarouselMobile>
      </div>
    </div>
  );
}
