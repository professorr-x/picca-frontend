// import { HeroGetStarted } from "./HeroGetStarted";

/* container to hold text and button for hero */
export function HeroHeading(): JSX.Element {
  return (
    <div className="block text-center">
      <div className="flex flex-col justify-center md:items-start w-full px-2 py-8 text-white">
        <h1 className="py-3 text-5xl md:text-7xl font-bold">P I C C A</h1>
        <p className="text-2xl">Pakistaanse Islamitische Cultureel Centrum Almere</p>
        {/* <HeroGetStarted /> */}
      </div>
    </div>
  );
}
