import { CardPattern } from "./design";

export const Card = () => {
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[20px] mx-auto pt-[50px]">
      {new Array(15).fill(1).map((_, i) => (
        <CardPattern key={i} />
      ))}
    </div>
  );
};
