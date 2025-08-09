import Hero from "@/components/hero";
import NavigationBar from "@/components/navigation-bar";
import AppBackground from "@/layouts/app-background";

export default function Home() {
  return (
    <main>
      <AppBackground>
        <NavigationBar />
        <Hero />
      </AppBackground>
    </main>
  );
}
