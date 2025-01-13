/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // clipPath: {
      //   'button-clip': 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)',
      //   'card-clip': 'polygon(0 0, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0 0)',
      //   'left-corner-clip': 'polygon(0 0, 100% 0, 100% 0, 100% 100%, 100% 100%, 20% 100%, 0% 80%)',
      //   'right-corner-clip': 'polygon(0 0, 100% 0, 100% 0, 100% 80%, 80% 100%, 0 100%, 0 100%, 0 0)',
      //   'content-clip': 'polygon(20% 0%, 100% 0, 100% 0, 100% 80%, 80% 100%, 0 100%, 0 100%, 0% 20%)',
      // },
    },
  },
  plugins: [],
};
