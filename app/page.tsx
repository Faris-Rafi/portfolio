import About from "@/components/about";
import Hero from "@/components/hero";
import NavigationBar from "@/components/navigation-bar";
import AppBackground from "@/layouts/app-background";

export default function Home() {
  return (
    <AppBackground>
      <NavigationBar />
      <main>
        <Hero />
        <About />
      </main>
    </AppBackground>
  );
}
