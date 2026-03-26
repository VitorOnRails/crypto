import { useTheme } from "next-themes";

export function useColorMode() {
  const { theme, setTheme } = useTheme();
  const toggleColorMode = () => setTheme(theme === "light" ? "dark" : "light");
  return { colorMode: theme, toggleColorMode };
}

export function useColorModeValue(light, dark) {
  const { colorMode } = useColorMode();
  return colorMode === "dark" ? dark : light;
}