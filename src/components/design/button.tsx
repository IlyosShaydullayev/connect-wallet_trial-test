export const Button = () => {
  return (
    <div className="ml-auto">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 100"
        style={{ width: "200", height: "100" }}
        fill="none"
        className="ml-auto"
      >
        <path
          d="M0.5 35.6398V9.9582L12.1771 0.499756H163.782L172.5 9.91569V46.2068L163.818 53.4998H148.562H12.1444L0.5 46.1638V35.6398Z"
          fill="#164859"
          stroke="#17CCC6"
          className="cursor-pointer"
        />
        <foreignObject x="30" y="15" width="200" height="100">
          <div className="mr-auto">
            Connect Wallet
          </div>
        </foreignObject>
      </svg>
    </div>
  );
};
