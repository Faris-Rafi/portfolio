import AppLayout from "@/layouts/app-layout";
import NavigationBar from "@/components/navigation-bar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <AppLayout>
      <NavigationBar />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
    </AppLayout>
  );
}
