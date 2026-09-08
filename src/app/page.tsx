import { HeroStage } from "@/components/hero-stage";
import { ProfileExplorer } from "@/components/profile-explorer";
import { SelectedProjectsSection } from "@/components/selected-projects-section";
import { TechStackSection } from "@/components/tech-stack-section";

export default function Home() {
  return (
    <>
      <HeroStage />
      <ProfileExplorer />
      <TechStackSection />
      <SelectedProjectsSection />
    </>
  );
}
