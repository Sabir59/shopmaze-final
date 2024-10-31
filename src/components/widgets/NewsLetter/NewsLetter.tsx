import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import React from "react";

export const NewsLetter = () => {
  return (
    <div className=" sm:max-w-4xl mx-auto rounded-xl bg-teal-900 py-3 px-5 flex flex-col sm:flex-row justify-between sm:items-center gap-3 sm:gap-12">
      {/* Left */}
      <div className="flex flex-col gap-1">
        <span className="text-xl font-semibold text-white">News Letter</span>
        <span className="text-sm text-gray-200">
          Subscribe to our newsletter
        </span>
      </div>
      {/* Right */}
      <div className="relative w-full flex-1 md:flex-[0_0_300px] border-b">
        <Input
          placeholder="youremail@example.com"
          className="border-none rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent w-[calc(100%-2rem)] placeholder:text-gray-300 pl-0"
        />
        <Send className="size-5 absolute top-1/2 -translate-y-1/2 right-2 text-white cursor-pointer" />
      </div>
    </div>
  );
};
