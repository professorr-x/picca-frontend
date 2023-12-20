import bgImg from "../assets/mosque-window.jpg";

/* creates hero image */
export function HeroImage(): JSX.Element {
  return (
    <div className="h-96 overflow-hidden">
      <img className="w-full visible object-contain" src={bgImg} alt="/" />
    </div>

  );
}
