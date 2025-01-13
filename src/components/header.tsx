import { Button, EndHeader, HeroTitle, ThreeButtons } from "./design";

export const Header = () => {
  return (
    <div>
      <div className="w-full flex items-center justify-between gap-x-3">
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
