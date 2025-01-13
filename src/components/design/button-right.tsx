export const ButtonRight = () => {
  return (
    <div className="cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 184 48"
        style={{ width: "100%", height: "48" }}
        fill="none"
      >
        <path
          d="M183.75 0.249756H0.25V47.7498H172.201L183.75 35.4011V0.249756Z"
          stroke="white"
          stroke-width="0.5"
        />

        <foreignObject x="50" y="10" width="184" height="48">
          <div xmlns="http://www.w3.org/1999/xhtml" className="text-white">
            <button>See details</button>
          </div>
        </foreignObject>
      </svg>
    </div>
  );
};
