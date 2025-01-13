export const ThreeButtons = () => {
  return (
    <div className="w-[250px] flex justify-between gap-x-3">
      <div className="cursor-pointer text-center">
        <img
          src="/Group 104 (1).svg"
          alt="how it works"
          className="w-full h-full object-contain"
          style={{ width: "65px", height: "65px" }}
          loading="lazy"
        />
        <p className="lg:text-[15px] text-[12px] lg:w-full w-[55px] font-[400] pt-[15px]">How it works</p>
      </div>
      <div className="cursor-pointer text-center">
        <img
          src="/Group 103.svg"
          alt="how it works"
          className="w-full h-full object-contain"
          style={{ width: "65px", height: "65px" }}
          loading="lazy"
        />
        <p className="lg:text-[15px] text-[12px] lg:w-full w-[55px] font-[400] pt-[15px]">Advanced</p>
      </div>
      <div className="cursor-pointer text-center">
        <img
          src="/Group 102.svg"
          alt="how it works"
          className="w-full h-full object-contain"
          style={{ width: "65px", height: "65px" }}
          loading="lazy"
        />
        <p className="lg:text-[15px] text-[12px] lg:w-full w-[55px] font-[400] pt-[15px]">Support</p>
      </div>
    </div>
  );
};
