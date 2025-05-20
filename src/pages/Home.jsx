import { NavBar } from "@/components/NavBar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { DivMeter } from "../components/models/DivMeter";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/* Theme Toggle */ }
        <ThemeToggle />
        {/* Background Effects */}
        <StarBackground />
        {/* NavBar */}
        <NavBar />

        {/* Main Content */}
        <main>
            <HeroSection />
            <DivMeter />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        </div>
    );
};