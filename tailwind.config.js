import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    heroui({
      prefix: "heroui", // prefijo para las variables del tema
      addCommonColors: false, // desactivar colores comunes por defecto
      defaultTheme: "light", // el tema por defecto es el claro
      defaultExtendTheme: "light", // extender el tema claro
      layout: {
        disabledOpacity: "0.3", // opacity-[0.3]
        radius: {
          small: "2px", // rounded-small
          medium: "4px", // rounded-medium
          large: "6px", // rounded-large
        },
        borderWidth: {
          small: "1px", // border-small
          medium: "1px", // border-medium
          large: "2px", // border-large
        },
      },
      themes: {
        light: {
          layout: {}, // configuraciones adicionales para el tema claro
          colors: {
            primary: "#0cc0df", // azul moderno para primario
            secondary: "#0097b2", // rosa vibrante para secundario
            success: "#7ed957", // verde neón para éxito
            error: "#F31260", // rojo brillante para errores
            warning: "#FFD700", // dorado moderno para advertencias
            background: "#FFFFFF", // color claro para el fondo
            text: "#FFD700", // color oscuro para el texto
            border: "#E6E6E6", // gris claro para bordes
          },
        },
        dark: {
          layout: {}, // configuraciones adicionales para el tema oscuro
          colors: {
            primary: "#0cc0df", // azul oscuro moderno
            secondary: "#C71585", // rosa oscuro
            success: "#20C997", // verde oscuro
            error: "#E74C3C", // rojo oscuro
            warning: "#F39C12", // dorado oscuro
            background: "#121212", // fondo oscuro
            text: "#FFFFFF", // texto claro
            border: "#333333", // bordes oscuros
          },
        },
      },
    }),
  ],
};
