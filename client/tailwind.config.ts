// Importing types for Tailwind CSS configuration and relevant utilities.
import type { Config } from "tailwindcss"; // Import the type definition for the Tailwind config.
import { createThemes } from "tw-colors"; // Importing utility to create themes.
import colors from "tailwindcss/colors"; // Import the built-in Tailwind colors.

// Array of base color names to generate themes for.
const baseColors = [
  "gray", // Gray color scale
  "red", // Red color scale
  "yellow", // Yellow color scale
  "green", // Green color scale
  "blue", // Blue color scale
  "indigo", // Indigo color scale
  "purple", // Purple color scale
  "pink", // Pink color scale
];

// Mapping shades of colors for light and dark themes.
// In this case, it reverses the usual shade mapping for dark mode.
const shadeMapping = {
  "50": "900", // In dark mode, the 50 shade is mapped to the 900 shade for darker color
  "100": "800",
  "200": "700",
  "300": "600",
  "400": "500",
  "500": "400",
  "600": "300",
  "700": "200",
  "800": "100",
  "900": "50", // In dark mode, the 900 shade is mapped to the 50 shade for lighter color
};

// A function to generate theme objects dynamically, based on the base colors and shade mappings.
const generateThemeObject = (colors: any, mapping: any, invert = false) => {
  const theme: any = {}; // Initialize an empty theme object.
  baseColors.forEach((color) => { // Loop through each base color (e.g., gray, red, etc.).
    theme[color] = {}; // Initialize an empty object for each color.
    Object.entries(mapping).forEach(([key, value]: any) => { // Loop through the shade mapping.
      const shadeKey = invert ? value : key; // If `invert` is true, swap the mapping (for dark mode).
      theme[color][key] = colors[color][shadeKey]; // Assign the color's shade based on the mapping.
    });
  });
  return theme; // Return the constructed theme object.
};

// Generate light and dark themes using the helper function.
const lightTheme = generateThemeObject(colors, shadeMapping); // Create the light theme using the shade mapping.
const darkTheme = generateThemeObject(colors, shadeMapping, true); // Create the dark theme by inverting the mapping.

// Define the themes object, including the light and dark themes.
const themes = {
  light: {
    ...lightTheme, // Spread the light theme into the light object.
    white: "#ffffff", // Set the white color for the light theme.
  },
  dark: {
    ...darkTheme, // Spread the dark theme into the dark object.
    white: colors.gray["950"], // Use a very dark gray for white in the dark theme (for contrast).
    black: colors.gray["50"], // Use a very light gray for black in the dark theme.
  },
};

// Tailwind CSS configuration object.
const config: Config = {
  darkMode: "class", // Enable dark mode based on the presence of a 'class' (for CSS-based dark mode).
  content: [
    // Define the paths to all the files that Tailwind should scan for class names.
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", // Include all JavaScript, TypeScript, JSX, and MDX files in pages.
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // Include all components.
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Include all files in the app directory.
  ],
  theme: {
    extend: { // Extend Tailwind's default theme with custom configurations.
      backgroundImage: { // Define custom background image gradients.
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))", // Define a radial gradient.
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))", // Define a conic gradient.
      },
    },
  },
  plugins: [createThemes(themes)], // Apply the theme plugin that we created earlier to add the custom themes.
};

// Export the configuration object so that Tailwind can use it.
export default config;
