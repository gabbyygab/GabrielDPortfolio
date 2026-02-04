import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-bg-dark text-text-primary dark:text-text-primary-dark transition-colors duration-300">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
