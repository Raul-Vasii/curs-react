import { useThemeStore } from "./use-theme-store";

export function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Tema curenta este: {theme}</p>
    </div>
  );
}
