import React from "react";
import { cn } from "@/lib/utils";

interface SocialIconProps {
  icon: React.ReactNode;
  href: string;
  label: string;
  className?: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({
  icon,
  href,
  label,
  className,
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        "social-icon w-8 h-8 flex items-center justify-center rounded-full text-foreground border border-[#333] transition-all duration-300 ease-in-out hover:bg-foreground hover:text-background",
        className,
      )}
    >
      {icon}
    </a>
  );
};

export default SocialIcon;
