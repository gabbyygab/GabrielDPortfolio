import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-xl bg-surface-light dark:bg-surface-dark hover:bg-emerald-primary/10 dark:hover:bg-emerald-primary/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-primary"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon className="w-4.5 h-4.5 text-text-primary" />
      ) : (
        <Sun className="w-4.5 h-4.5 text-text-primary-dark" />
      )}
    </button>
  );
}
