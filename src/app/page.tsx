import CarouselMobile from "@/components/shared/Home/CarouselMobile";
import Carousel from "@/components/shared/Home/CarouselPC";
import Loader from "@/components/shared/loaders/Loader";
import Searchbox from "@/components/shared/others/Searchbox";

export default function Home() {
  return (
    <div>
      <Loader></Loader>
      <div className="relative">
        <div className="hidden md:block">
          <Carousel></Carousel>
        </div>
        <div className="md:hidden">
          <CarouselMobile></CarouselMobile>
        </div>
        <div className="w-full absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Searchbox></Searchbox>
        </div>
      </div>
    </div>
  );
}
