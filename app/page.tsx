import About from "@/components/about";
import Hero from "@/components/hero";
import NavigationBar from "@/components/navigation-bar";
import AppLayout from "@/layouts/app-layout";

export default function Home() {
  return (
    <AppLayout>
      <NavigationBar />
      <main>
        <Hero />
        <About />
      </main>
    </AppLayout>
  );
}
