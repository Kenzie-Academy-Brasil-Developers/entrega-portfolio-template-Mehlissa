import "./style/reset.css";
import "./style/globalStyle.css";
import { Header } from "./components/Header";
import { Section } from "./components/BannerSection";
import { DivImage } from "./components/DivImage";
import { AboutMeSection } from "./components/AboutMeSection";
import { TechSection } from "./components/TechSection";
import { ProjectSection } from "./components/ProjectsSection";
import { Footer } from "./components/Footer";

function App() {
    return (
        <>
            <Header />
            <main className="main">
                <Section />

                <DivImage />

                <AboutMeSection />

                <TechSection />

                <ProjectSection />
            </main>
            <Footer />
        </>
    );
}

export default App;
