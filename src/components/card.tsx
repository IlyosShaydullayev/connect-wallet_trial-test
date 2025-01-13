import { CardPattern } from "./design";

export const Card = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] mx-auto pt-[40px]">
      {new Array(15).fill(5).map((_, i) => (
        <CardPattern key={i} />
      ))}
    </div>
  );
};
