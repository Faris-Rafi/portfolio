import AppLayout from "@/layouts/app-layout";
import NavigationBar from "@/components/navigation-bar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <AppLayout>
      <NavigationBar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </AppLayout>
  );
}
