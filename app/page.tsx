import Hero from "@/components/hero";
import NavigationBar from "@/components/navigation-bar";
import AppBackground from "@/layouts/app-background";

export default function Home() {
  return (
    <AppBackground>
      <NavigationBar />
      <main>
        <Hero />
        <section className="flex justify-center w-full">
          <div className="max-w-[1280px] w-full px-9 py-5 mt-20 mb-32">
            <div className="w-full text-center">
              <h2 className="text-4xl md:text-5xl font-semibold">About me</h2>
            </div>
            <div className="flex justify-center items-center w-full mt-20">
              <div className="grid grid-cols-2 gap-8 w-full">
                <div className="flex flex-col justify-center items-center gap-4">
                  <p>
                    My passion for web development ignited when I architected
                    and built a comprehensive hotel booking system from the
                    ground up. That foundational experience in vanilla
                    JavaScript and PHP sparked a drive to master the modern web.
                  </p>
                  <p>
                    Today, I&apos;m a Full-Stack Developer who specializes in
                    crafting exceptional front-end experiences. I build fast,
                    intuitive, and high-quality applications using React,
                    combining my eye for design with a strong understanding of
                    back-end architecture to bring ideas to life.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="flex flex-col justify-center items-center gap-2 bg-accent border rounded-lg p-6 shadow-lg w-full">
                    <p className="text-primary text-3xl font-semibold">10+</p>
                    <p>Projects Completed</p>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-2 bg-accent border rounded-lg p-6 shadow-lg w-full">
                    <p className="text-primary text-3xl font-semibold">3+</p>
                    <p>Years Experience</p>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-2 bg-accent border rounded-lg p-6 shadow-lg w-full">
                    <p className="text-primary text-3xl font-semibold">10+</p>
                    <p>Technologies</p>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-2 bg-accent border rounded-lg p-6 shadow-lg w-full">
                    <p className="text-primary text-3xl font-semibold">1000+</p>
                    <p>GitHub Contributions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </AppBackground>
  );
}
