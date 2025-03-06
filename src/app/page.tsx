import Banner from "@/components/Banner";
import ExperienceSection from "@/components/ExperienceSection";
import GettingStarted from "@/components/GettingStarted";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col h-full gap-4">
      <Banner />
      <GettingStarted />
      <ExperienceSection />
      <ProjectsSection />
    </main>
  );
}
