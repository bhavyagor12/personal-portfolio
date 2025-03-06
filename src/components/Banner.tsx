import { Linkedin, Twitter, ArrowDown } from "lucide-react";
import SocialIcon from "./SocialIcon";
import GitHubCalendar from "react-github-calendar";

const Banner = () => {
  return (
    <div className="flex-1 flex flex-col md:flex-row mt-12 md:mt-14">
      <div className="pb-8 md:pb-0 md:w-1/2">
        <h1
          className="text-5xl md:text-7xl lg:text-8xl leading-tight"
          style={{ fontFamily: "var(--font-bangers)" }}
        >
          Bhavya Gor
        </h1>
        <div className="mt-4 mb-6">
          <p className="text-sm mb-2">bhavya.gor9999@gmail.com</p>
          <div className="h-px bg-gray-200 w-48"></div>
        </div>
        <div className="flex space-x-6 items-center mt-6">
          <SocialIcon
            icon={<Twitter size={16} />}
            href="https://x.com/bhavya_gor"
            label="Twitter"
          />
          <SocialIcon
            icon={<Linkedin size={16} />}
            href="https://www.linkedin.com/in/bhavya-gor/"
            label="LinkedIn"
          />
        </div>
      </div>
      <div className="md:w-1/2 md:pl-8 md:pt-12 lg:pt-20 lg:pl-12 flex flex-col justify-center">
        <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
          <GitHubCalendar
            username="bhavyagor12"
            hideColorLegend
            labels={{
              totalCount: "{{count}} contributions to the world",
            }}
          />
        </div>
        <p className="text-base md:text-lg leading-relaxed max-w-lg mt-4">
          Hey there! I&apos;m Bhavya, a curious developer passionate about
          building things. This is my story.
        </p>
      </div>
    </div>
  );
};

export default Banner;
