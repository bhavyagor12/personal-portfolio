import { Briefcase } from "lucide-react";
import experienceData from "../data/experience.json";

const ExperienceSection = () => {
  return (
    <section id="experience">
      <div className="flex items-center mb-10">
        <Briefcase className="mr-3 text-primary" size={24} />
        <h2
          className="text-3xl md:text-5xl leading-tight"
          style={{ fontFamily: "var(--font-bangers)" }}
        >
          Experience
        </h2>
      </div>

      <div className="grid gap-8">
        {experienceData.map((exp) => (
          <div
            key={exp.id}
            className={`experience-card relative p-6 md:p-8 rounded-xl hover:shadow-md transition-all duration-300 
            ${exp.current ? "border-2 border-black-600" : "bg-secondary bg-opacity-30"}`}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
              {exp.website ? (
                <a href={exp.website} target="_blank" rel="noopener noreferrer">
                  <h3 className="text-xl md:text-2xl font-serif font-medium underline">
                    {exp.company}
                  </h3>
                </a>
              ) : (
                <h3 className="text-xl md:text-2xl font-serif font-medium">
                  {exp.company}
                </h3>
              )}
              <span className="text-sm text-muted-foreground mt-1 md:mt-0">
                {exp.period}
              </span>
            </div>
            <p className="text-base font-medium text-muted-foreground mb-2">
              {exp.title}
            </p>
            <p className="text-base md:text-md">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
