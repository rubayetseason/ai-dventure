"use client";

import { Button } from "@/components/ui/button";
import { MapPinHouse, Mic, Mountain, Ship } from "lucide-react";
import TextareaAutosize from "react-textarea-autosize";

const Searchbox = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen px-4 z-10">
      <h1 className="text-2xl sm:text-3xl md:text-6xl font-raleway font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-200 to-gray-500 animate-gradient-text mb-8">
        How may I help you today?
      </h1>

      {/* Auto-growing limited textarea */}
      <div className="relative w-full max-w-xl">
        <TextareaAutosize
          minRows={2}
          maxRows={7}
          placeholder="Message AIDventure..."
          className="pl-4 pr-12 py-4 w-full text-base md:text-lg text-white bg-gray-600/50 placeholder:text-gray-300 resize-none focus:outline-none focus:ring-0 focus:border-none rounded-2xl"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 text-gray-300 hover:text-black"
        >
          <Mic className="w-5 h-5" />
        </Button>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 mt-6">
        <Button variant="outline" className="gap-2">
          <Ship className="w-4 h-4" />
          Trip to Cox&apos;s Bazar
        </Button>
        <Button variant="outline" className="gap-2">
          <MapPinHouse className="w-4 h-4" />
          Historical Places
        </Button>
        <Button variant="outline" className="gap-2">
          <Mountain className="w-4 h-4" />
          Mountains of Bandarban
        </Button>
      </div>
    </div>
  );
};

export default Searchbox;
