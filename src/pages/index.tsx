import { Geist, Geist_Mono } from "next/font/google";
import { Printables } from "../logos/printables-logo";
import { Strava } from "@/logos/strava-logo";
import { GitHub } from "@/logos/github-logo";
import { LinkedIn } from "@/logos/linkedin-logo";
import { Contact } from "@/misc/contact";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-platinum text-berkeley-blue`}
    >
      <main className="flex flex-col gap-4 row-start-2 items-center">
        <div className="flex flex-col gap-1 items-center">
          <h1 className="font-bold text-3xl">Paul Mourer</h1>
          <p>Leadville, CO</p>
        </div>
        <div className="text-center text-jet">
          <p>software engineer</p>
          <p>tinkerer</p>
          <p>maker</p>
          <p>cyclist</p>
        </div>
        <div className="text-burnt-orange flex gap-4">
          <a href="https://www.github.com/pm0u">
            <GitHub className="h-4 w-auto hover:brightness-75 transition-all duration-200" />
          </a>
          <a href="https://www.linkedin.com/in/pmou">
            <LinkedIn className="h-4 w-auto hover:brightness-75 transition-all duration-200" />
          </a>
          <a href="https://www.printables.com/@PaulMourer_2841132">
            <Printables className="h-4 w-auto hover:brightness-75 transition-all duration-200" />
          </a>
          <a href="https://www.strava.com/athletes/6217227">
            <Strava className="h-4 w-auto hover:brightness-75 transition-all duration-200" />
          </a>
        </div>
        <div>
          <Contact />
        </div>
      </main>
    </div>
  );
}
