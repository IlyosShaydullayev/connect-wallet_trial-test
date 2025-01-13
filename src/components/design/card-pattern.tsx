import { ButtonLeft } from "./button-left";
import { ButtonRight } from "./button-right";

export const CardPattern = () => {
  return (
    <div className="">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 397 245"
        style={{ width: "100%", height: "245" }}
        fill="none"
      >
        <path
          d="M0.5 0.499756H376.312L396.5 18.2261V128.985V226.797L379.289 244.5H206.5H16.2227L0.5 227.033V0.499756Z"
          stroke="#17CCC6"
        />
        <foreignObject x="0" y="0" width="397" height="245">
          <div>
            <div className="flex gap-x-[15px]">
              <img
                src="/image (1).png"
                alt="image"
                loading="lazy"
                className="size-[120px]"
              />
              <div className="pt-[10px]">
                <p className="text-[31px] font-[400] leading-[36px]">
                  Cutipie Penguin
                  <span className="text-white block">#464</span>
                </p>
                <p className="text-[11px] font-[300] text-white pt-[10px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmo .................
                </p>
              </div>
            </div>
            <div className="pt-[15px] px-[10px] grid grid-cols-3">
              <div>
                <p className="text-[15px] font-[400] text-white">Snow White</p>
                <p className="text-[12px] font-[400]">BACKGROUND</p>
              </div>
              <div>
                <p className="text-[15px] font-[400] text-white">Level 99</p>
                <p className="text-[12px] font-[400]">LEVEL</p>
              </div>
              <div>
                <p className="text-[15px] font-[400] text-white">Emporer</p>
                <p className="text-[12px] font-[400]">SPECIES</p>
              </div>
            </div>
            <div className="pt-[10px] px-[10px] flex items-center justify-between">
              <ButtonLeft />
              <ButtonRight />
            </div>
          </div>
        </foreignObject>
      </svg>
    </div>
  );
};
