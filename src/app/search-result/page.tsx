"use client";
import AiLoader from "@/components/shared/loaders/AiLoader";
import { AiDventureAssets } from "@/assets";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { ShineBorder } from "@/components/ui/shine-border";
import { AlignLeft, CalendarDays, MapPin, Sun } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

const travelData = [
  {
    day: 1,
    date: "2023-08-01",
    location: "New York",
    description:
      "Visit the Empire State Building. Explore the city's history and culture. Experience the iconic skyline. Eat at Katz Daily. Drink at The High Line. Shop at the Museum of Modern Art.",
    weatherPrediction: "35° C Sunny",
    suggestions: ["Carry Sunscreen", "Pack Lunch", "Buy a Book"],
  },
  {
    day: 2,
    date: "2023-08-02",
    location: "Paris",
    description:
      "Visit the Eiffel Tower. Explore the city's history and culture. Experience the iconic skyline. Eat at La Brasserie. Drink at the Louvre. Shop at the Musee d'Orsay.",
    weatherPrediction: "28° C Cloudy",
    suggestions: ["Carry Sunscreen", "Pack Lunch", "Buy a Book"],
  },
  {
    day: 3,
    date: "2023-08-03",
    location: "Tokyo",
    description:
      "Visit the Tokyo Tower. Explore the city's history and culture. Experience the iconic skyline. Eat at Sushi Sushi. Drink at the Tokyo Tower. Shop at the National Museum of Art.",
    weatherPrediction: "25° C Rainy",
    suggestions: ["Carry Sunscreen", "Pack Lunch", "Buy a Book"],
  },
  {
    day: 4,
    date: "2023-08-04",
    location: "Sydney",
    description:
      "Visit the Sydney Opera House. Explore the city's history and culture. Experience the iconic skyline. Eat at Sydney Sushi. Drink at the Opera House. Shop at the Opera House.",
    weatherPrediction: "30° C Sunny",
    suggestions: ["Carry Sunscreen", "Pack Lunch", "Buy a Book"],
  },
  {
    day: 5,
    date: "2023-08-05",
    location: "Rome",
    description:
      "Visit the Colosseum. Explore the city's history and culture. Experience the iconic skyline. Eat at La Pizzeria. Drink at the Colosseum. Shop at the Vatican.",
    weatherPrediction: "27° C Cloudy",
    suggestions: ["Carry Sunscreen", "Pack Lunch", "Buy a Book"],
  },
];

const SearchResultPage = () => {
  return (
    <div className="text-white bg-black">
      <AiLoader></AiLoader>
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
      <div className="pb-32 max-w-screen-2xl mx-auto">
        {travelData?.map((travel, i) => (
          <div key={i} className="grid grid-cols-3 gap-4">
            <div className="relative flex justify-center items-center">
              <div
                className={`absolute left-1/2 w-px bg-gradient-to-b from-indigo-500 to-indigo-500 z-0 ${
                  i === 0
                    ? "top-1/2 bottom-0"
                    : i === travelData.length - 1
                    ? "top-0 bottom-1/2"
                    : "top-0 bottom-0"
                }`}
              />
              <div className="relative size-40 mx-auto my-auto text-2xl bg-black font-raleway font-medium flex justify-center items-center rounded-full z-10">
                <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
                Day {travel?.day}
              </div>
            </div>
            <div className="py-16 font-raleway flex flex-col justify-center gap-4 px-4">
              <div className="text-2xl text-slate-300 font-medium flex items-center gap-2">
                <MapPin className="w-5 h-5 text-rose-400" />
                <span className="font-medium">{travel.location}</span>
              </div>
              <div className="flex items-center gap-2 text-base text-slate-300">
                <CalendarDays className="w-5 h-5 text-indigo-400" />
                <span>{travel.date}</span>
              </div>
              <div className="flex items-center gap-2 text-base text-slate-300">
                <Sun className="w-5 h-5 text-yellow-400" />
                <span>{travel.weatherPrediction}</span>
              </div>

              <div className="flex items-start gap-2 text-base text-slate-300">
                <AlignLeft className="w-5 h-5 text-green-400 mt-1" />
                <p className="leading-relaxed">{travel.description}</p>
              </div>

              <div className="flex items-start gap-2 text-base text-slate-300">
                <ul className="list-disc pl-5 space-y-1">
                  {travel.suggestions.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <Image
                className="brightness-75 rounded-2xl"
                src={AiDventureAssets?.images?.pc?.pcImage4}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResultPage;
