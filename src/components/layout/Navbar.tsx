import { AiDventureAssets } from "@/assets";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="pt-3 w-full absolute flex justify-center items-center gap-2 z-10">
      <Image
        src={AiDventureAssets.logos?.whiteLogo}
        className="w-16 md:w-20"
        alt="AIDventure"
      />
      <h1 className="text-2xl md:text-3xl text-white font-comforter">
        AIDventure
      </h1>
    </div>
  );
};

export default Navbar;
