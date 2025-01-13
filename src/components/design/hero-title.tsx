import { SearchIcon } from "./search-icon";

export const HeroTitle = () => {
  return (
    <div className="mx-auto text-center w-full">
      <p className="lg:text-[124px] md:text-[90px] text-[60px] font-[400]">
        PENGWIN
      </p>
      <div className="mx-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 492 74"
          style={{ width: "100%", height: "74" }}
          fill="none"
        >
          <path
            d="M0.5 53.9998V10.2069L10.2071 0.499756H482.785L491.5 9.69899V57.9998V63.816L483.269 73.4998H422.5H8.73122L0.5 63.816V53.9998Z"
            fill="#164859"
            stroke="#17CCC6"
          />
          <foreignObject x="20" y="0" width="465" height="74">
            <div xmlns="http://www.w3.org/1999/xhtml" className="flex items-center justify-between">
              <input
                type="text"
                placeholder="Search token by name..."
                className="w-full bg-transparent outline-none h-[74px] text-[25px]"
              />
              <SearchIcon />
            </div>
          </foreignObject>
        </svg>
      </div>
      <p className="lg:text-[124px] md:text-[90px] text-[60px] font-[400]">
        TOKEN
      </p>
    </div>
  );
};
