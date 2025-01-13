export const ButtonLeft = () => {
  return (
    <div className="cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 184 48"
        style={{ width: "100%", height: "48" }}
        fill="none"
      >
        <path
          d="M0.25 0.249756H183.75V47.7498H11.7991L0.25 35.4011V0.249756Z"
          stroke="#17CCC6"
          stroke-width="0.5"
        />

        <foreignObject x="50" y="10" width="184" height="48">
          <div>
            <button>Mint Now</button>
          </div>
        </foreignObject>
      </svg>
    </div>
  );
};
