import AppBackground from "@/layouts/app-background";
import NavigationBar from "@/components/navigation-bar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <AppBackground position="top">
      <NavigationBar />
      <Hero />
      <main>
        <About />
        <Projects />
        <AppBackground position="bottom">
          <Contact />
          <Footer />
        </AppBackground>
      </main>
    </AppBackground>
  );
}
