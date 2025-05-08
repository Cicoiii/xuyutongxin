/** @type {import('tailwindcss').Config} */
content: [
  "./index.html",
  "./src/**/*.{html,js,jsx}",
  "./src/index.css" // 确保包含你的 CSS 文件
],
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        'brown': '#5C4033',
      },
      // 添加渐变配置
      backgroundImage: {
        'warm-orange-gradient': 'linear-gradient(to right, #0066FF, #00CCFF)',
        'beige-gradient': 'linear-gradient(to right, #0066FF, #00CCFF)',
      },
      keyframes: {
        fadeInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        }
      },
      animation: {
        'fadeInRight': 'fadeInRight 1s ease-out'
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};