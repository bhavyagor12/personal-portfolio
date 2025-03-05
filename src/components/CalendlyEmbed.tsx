"use client";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { ArrowRight } from "lucide-react";

export default function ContactMe() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="rounded-xl flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors duration-200"
          onClick={() => { }}
        >
         Lets Talk 
         <ArrowRight size={16} />
        </Button>
      </DialogTrigger>
      <DialogContent className="xs:w-[80%] h-auto overflow-y-auto p-6 bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-4">
            Get in touch
          </DialogTitle>
        </DialogHeader>
        <CalendlyEmbed />
      </DialogContent>
    </Dialog>
  );
}

const CalendlyEmbed = () => {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    if (!head) return;
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js",
    );
    head.appendChild(script);
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url={"https://calendly.com/bhavya-gor9999/30min"}
      style={{ minHeight: "650px", width: "100%" }}
    ></div>
  );
};
