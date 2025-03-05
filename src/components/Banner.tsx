import { Linkedin, Twitter, ArrowDown } from "lucide-react";
import SocialIcon from "./SocialIcon";

const Portfolio = () => {
  return (
    <>
      <div className="pb-8 md:pb-0">
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

      <div className="md:w-1/2 md:pl-8 lg:pl-12 flex flex-col justify-center">
        <p className="text-base md:text-lg leading-relaxed max-w-lg">
          Hey there! I'm Bhavya, a curious developer passionate about building
          things. This is my story.
        </p>
        <a
          href="#projects"
          className="discover-btn flex items-center justify-center space-x-2 mt-8 bg-black text-white py-3 px-5 rounded-full w-max text-sm font-medium transition-all duration-300 ease-in-out hover:bg-opacity-90"
        >
          <span>Discover</span>
          <ArrowDown size={16} />
        </a>
      </div>
    </>
  );
};

export default Portfolio;
