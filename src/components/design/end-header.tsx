export const EndHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 397 75"
          style={{ width: "100%", height: "75" }}
          fill="none"
        >
          <path
            d="M0.5 38.0355V9.82569L11.4804 0.499756H386.313L396.5 9.34268V55.6484V61.1847L386.306 70.4998H340.92H11.4804L0.5 61.1738V38.0355Z"
            fill="#164859"
            stroke="#17CCC6"
          />
          <foreignObject x="0" y="0" width="397" height="75">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="flex items-center justify-evenly p-[10px] "
            >
              <div>
                <p className="text-[24px] font-[400] text-white">🔥 Featured</p>
                <p className="w-full text-end">Sort By</p>
              </div>
              <div className="bg-[#17CCC6] w-[2px] h-[40px]"></div>
              <div className="flex items-center justify-between gap-x-[25px]">
                <div>
                  <label className="inline-flex items-center justify-between cursor-pointer text-[#17CCC6]">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      id="toggle-checkbox"
                    />
                    <div className="relative w-16 h-8 bg-[#2C3438] peer-focus:outline-none peer-focus:ring-4 peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:bg-[#232222] after:h-8 after:w-8 after:transition-all  ">
                      <span className="absolute left-2 top-1 text-sm font-medium text-[#17CCC6] peer-checked:left-12 transition-all duration-300">
                        On
                      </span>
                      <span className="absolute right-2 top-1 text-sm font-medium text-[#17CCC6] peer-checked:right-12 transition-all duration-300">
                        Off
                      </span>
                    </div>
                  </label>
                  <p className="text-[11px] font-[300] text-white">
                    include nsfw
                  </p>
                </div>
                <div>
                  <label className="inline-flex items-center justify-between cursor-pointer text-[#17CCC6]">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      id="toggle-checkbox"
                    />
                    <div className="relative w-16 h-8 bg-[#2C3438] peer-focus:outline-none peer-focus:ring-4 peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:bg-[#232222] after:h-8 after:w-8 after:transition-all  ">
                      <span className="absolute left-2 top-1 text-sm font-medium text-[#17CCC6] peer-checked:left-12 transition-all duration-300">
                        On
                      </span>
                      <span className="absolute right-2 top-1 text-sm font-medium text-[#17CCC6] peer-checked:right-12 transition-all duration-300">
                        Off
                      </span>
                    </div>
                  </label>
                  <p className="text-[11px] font-[300] text-white">
                    Show animation
                  </p>
                </div>
              </div>
            </div>
          </foreignObject>
        </svg>
      </div>
      <div>
        <img src="/Group 122.png" alt="" loading="lazy" className="lg:block hidden" />
      </div>
    </div>
  );
};
