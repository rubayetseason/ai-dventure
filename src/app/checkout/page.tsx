"use client";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "motion/react";
import ContactForm from "./_components/ContactForm";
import PersonalForm from "./_components/PersonalForm";

const Checkout = () => {
  return (
    <div>
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
            Checkout
          </div>
        </motion.div>
      </AuroraBackground>
      <div className="pb-32 max-w-screen-2xl mx-auto text-white font-raleway grid grid-cols-2 gap-11">
        <PersonalForm></PersonalForm>
        <ContactForm></ContactForm>
      </div>
    </div>
  );
};

export default Checkout;
