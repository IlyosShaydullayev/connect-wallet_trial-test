import { Button, EndHeader, HeroTitle, ThreeButtons } from "./design";

export const Header = () => {
  return (
    <div>
      <div className="w-full flex md:flex-row flex-col items-center md:justify-between justify-center gap-3">
        <ThreeButtons />
        <Button />
      </div>
      <div className="pt-[10px]">
        <HeroTitle />
      </div>
      <div className="pt-[20px]">
        <EndHeader />
      </div>
    </div>
  );
};
