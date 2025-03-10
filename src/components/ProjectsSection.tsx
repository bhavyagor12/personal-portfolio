"use client";
import { Github, Code, Youtube, ArrowUpRightSquare, Globe } from "lucide-react";
import projectsData from "../data/projects.json";
import SocialIcon from "./SocialIcon";

interface ProjectLink {
  website?: string;
  github?: string;
  deployed?: string;
  youtube?: string;
}

interface Project {
  id: number;
  name: string;
  description: string;
  images: string[];
  links: ProjectLink;
  tags: string[];
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);
  //
  // const nextImage = () => {
  //   setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  // };
  //
  // const prevImage = () => {
  //   setCurrentImageIndex((prev) =>
  //     prev === 0 ? project.images.length - 1 : prev - 1,
  //   );
  // };

  return (
    <div className="project-card relative group rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 border border-2">
      {/* Image carousel */}
      {/* <div className="relative aspect-video">
        <div className="absolute inset-0 flex items-center">
          <img
            src={project.images[currentImageIndex]}
            alt={project.name}
            className="w-full h-full object-cover"
          />
        </div>
        {project.images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ArrowRight size={16} className="transform rotate-180" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ArrowRight size={16} />
            </button>
          </>
        )}

        {project.images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded-full">
            {currentImageIndex + 1}/{project.images.length}
          </div>
        )}
      </div>
      */}
      <div className="p-6">
        <h3 className="text-xl font-serif font-medium mb-2">{project.name}</h3>
        <p className="text-sm text-muted-foreground mb-4">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-secondary px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div
          className="flex space-x-4 mt-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {project.links.github && (
            <SocialIcon
              href={project.links.github}
              icon={<Github size={18} />}
              label="View on GitHub"
            />
          )}
          {project.links.website && (
            <SocialIcon
              href={project.links.website}
              icon={<Globe size={18} />}
              label="Visit website"
            />
          )}
          {project.links.youtube && (
            <SocialIcon
              href={project.links.youtube}
              icon={<Youtube size={18} />}
              label="Watch on YouTube"
            />
          )}
          {project.links.deployed && (
            <SocialIcon
              href={project.links.deployed}
              icon={<ArrowUpRightSquare size={18} />}
              label="View deployed version"
            />
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects">
      <div className="flex items-center mb-10">
        <Code className="mr-3 text-primary" size={24} />
        <h2
          className="text-3xl md:text-5xl leading-tight"
          style={{
            fontFamily: "var(--font-bangers)",
          }}
        >
          Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
