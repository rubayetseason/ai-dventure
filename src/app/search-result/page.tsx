"use client";
// import AiLoader from "@/components/shared/loaders/AiLoader";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "motion/react";

const SearchResultPage = () => {
  return (
    <div className="min-h-dvh bg-black">
      {/* <AiLoader></AiLoader> */}
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="text-6xl font-bold text-white text-center font-raleway">
            Your personalized tour suggestion is ready to explore.
          </div>
        </motion.div>
      </AuroraBackground>
    </div>
  );
};

export default SearchResultPage;
