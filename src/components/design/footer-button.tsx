import { useState } from "react";

export const FooterButton = () => {
  const [select, setSelect] = useState(1);
  return (
    <div className="pt-[50px] mx-auto flex items-center justify-center gap-x-3">
      <div onClick={() => setSelect(1)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="65"
          height="64"
          viewBox="0 0 65 64"
          fill="none"
          className="cursor-pointer"
        >
          <path
            d="M65 58.2949H17.1804L11.3864 63.9998H5.90752L0.112792 58.2949L0 58.1837V58.0062V5.70463H47.8196L53.6136 -0.000244141H59.0925L64.8872 5.70463L65 5.81576V5.97092V58.2949ZM0.788819 57.851L6.24516 63.2232H11.0698L16.8638 57.5184H64.2104V6.12681L58.7541 0.777008H53.952L48.1573 6.48188H0.788073L0.788819 57.851Z"
            fill={select === 1 ? "#17CCC6" : "#164859"}
            />
          <path
            d="M47.6945 4.32635L50 1.99976H18.389L15.9913 4.32635H47.6945ZM17.2824 59.6957L15 61.9998H46.5879L48.9857 59.6957H17.2824Z"
            fill={select === 1 ? "#17CCC6" : "#164859"}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M62 56.1936V6.42742L57.6474 1.99976H54.339L48.6326 7.80514H3V57.5941L7.35262 61.9998H10.661L16.3674 56.1936H62Z"
            fill="#164859"
          />

          <foreignObject x="22" y="20" width="65" height="64">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className={select === 1 ? "text-[#17CCC6]" : "#164859"}
            >
              01
            </div>
          </foreignObject>
        </svg>
      </div>
      <div onClick={() => setSelect(2)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="65"
          height="64"
          viewBox="0 0 65 64"
          fill="none"
          className="cursor-pointer"
        >
          <path
            d="M65 58.2949H17.1804L11.3864 63.9998H5.90752L0.112792 58.2949L0 58.1837V58.0062V5.70463H47.8196L53.6136 -0.000244141H59.0925L64.8872 5.70463L65 5.81576V5.97092V58.2949ZM0.788819 57.851L6.24516 63.2232H11.0698L16.8638 57.5184H64.2104V6.12681L58.7541 0.777008H53.952L48.1573 6.48188H0.788073L0.788819 57.851Z"
            fill={select === 2 ? "#17CCC6" : "#164859"}
            />
          <path
            d="M47.6945 4.32635L50 1.99976H18.389L15.9913 4.32635H47.6945ZM17.2824 59.6957L15 61.9998H46.5879L48.9857 59.6957H17.2824Z"
            fill={select === 2 ? "#17CCC6" : "#164859"}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M62 56.1936V6.42742L57.6474 1.99976H54.339L48.6326 7.80514H3V57.5941L7.35262 61.9998H10.661L16.3674 56.1936H62Z"
            fill="#164859"
          />

          <foreignObject x="22" y="20" width="65" height="64">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className={select === 2 ? "text-[#17CCC6]" : "#164859"}
            >
              02
            </div>
          </foreignObject>
        </svg>
      </div>
      <div onClick={() => setSelect(3)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="65"
          height="64"
          viewBox="0 0 65 64"
          fill="none"
          className="cursor-pointer"
        >
          <path
            d="M65 58.2949H17.1804L11.3864 63.9998H5.90752L0.112792 58.2949L0 58.1837V58.0062V5.70463H47.8196L53.6136 -0.000244141H59.0925L64.8872 5.70463L65 5.81576V5.97092V58.2949ZM0.788819 57.851L6.24516 63.2232H11.0698L16.8638 57.5184H64.2104V6.12681L58.7541 0.777008H53.952L48.1573 6.48188H0.788073L0.788819 57.851Z"
            fill={select === 3 ? "#17CCC6" : "#164859"}
            />
          <path
            d="M47.6945 4.32635L50 1.99976H18.389L15.9913 4.32635H47.6945ZM17.2824 59.6957L15 61.9998H46.5879L48.9857 59.6957H17.2824Z"
            fill={select === 3 ? "#17CCC6" : "#164859"}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M62 56.1936V6.42742L57.6474 1.99976H54.339L48.6326 7.80514H3V57.5941L7.35262 61.9998H10.661L16.3674 56.1936H62Z"
            fill="#164859"
          />

          <foreignObject x="22" y="20" width="65" height="64">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className={select === 3 ? "text-[#17CCC6]" : "#164859"}
            >
              03
            </div>
          </foreignObject>
        </svg>
      </div>
      <div onClick={() => setSelect(4)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="65"
          height="64"
          viewBox="0 0 65 64"
          fill="none"
          className="cursor-pointer"
        >
          <path
            d="M65 58.2949H17.1804L11.3864 63.9998H5.90752L0.112792 58.2949L0 58.1837V58.0062V5.70463H47.8196L53.6136 -0.000244141H59.0925L64.8872 5.70463L65 5.81576V5.97092V58.2949ZM0.788819 57.851L6.24516 63.2232H11.0698L16.8638 57.5184H64.2104V6.12681L58.7541 0.777008H53.952L48.1573 6.48188H0.788073L0.788819 57.851Z"
            fill={select === 4 ? "#17CCC6" : "#164859"}
            />
          <path
            d="M47.6945 4.32635L50 1.99976H18.389L15.9913 4.32635H47.6945ZM17.2824 59.6957L15 61.9998H46.5879L48.9857 59.6957H17.2824Z"
            fill={select === 4 ? "#17CCC6" : "#164859"}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M62 56.1936V6.42742L57.6474 1.99976H54.339L48.6326 7.80514H3V57.5941L7.35262 61.9998H10.661L16.3674 56.1936H62Z"
            fill="#164859"
          />

          <foreignObject x="22" y="20" width="65" height="64">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className={select === 4 ? "text-[#17CCC6]" : "#164859"}
            >
              04
            </div>
          </foreignObject>
        </svg>
      </div>
      <div onClick={() => setSelect(5)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="65"
          height="64"
          viewBox="0 0 65 64"
          fill="none"
          className="cursor-pointer"
        >
          <path
            d="M65 58.2949H17.1804L11.3864 63.9998H5.90752L0.112792 58.2949L0 58.1837V58.0062V5.70463H47.8196L53.6136 -0.000244141H59.0925L64.8872 5.70463L65 5.81576V5.97092V58.2949ZM0.788819 57.851L6.24516 63.2232H11.0698L16.8638 57.5184H64.2104V6.12681L58.7541 0.777008H53.952L48.1573 6.48188H0.788073L0.788819 57.851Z"
            fill={select === 5 ? "#17CCC6" : "#164859"}
            />
          <path
            d="M47.6945 4.32635L50 1.99976H18.389L15.9913 4.32635H47.6945ZM17.2824 59.6957L15 61.9998H46.5879L48.9857 59.6957H17.2824Z"
            fill={select === 5 ? "#17CCC6" : "#164859"}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M62 56.1936V6.42742L57.6474 1.99976H54.339L48.6326 7.80514H3V57.5941L7.35262 61.9998H10.661L16.3674 56.1936H62Z"
            fill="#164859"
          />

          <foreignObject x="22" y="20" width="65" height="64">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className={select === 5 ? "text-[#17CCC6]" : "#164859"}
            >
              05
            </div>
          </foreignObject>
        </svg>
      </div>
    </div>
  );
};
