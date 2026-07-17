import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Enseignements', path: '/sermons' },
    { name: 'Agenda', path: '/events' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 inset-x-0 z-50 transition-all duration-500 border-b",
      scrolled 
        ? "bg-[#FDFBF7]/80 backdrop-blur-xl border-stone-200/50 py-4 shadow-sm" 
        : "bg-transparent border-transparent py-6"
    )}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex flex-col group">
              <span className="font-serif font-bold text-2xl tracking-tight text-stone-900">
                M.E.R.S.A
              </span>
              <span className="text-[9px] uppercase tracking-widest text-stone-500 font-medium mt-0.5">
                Matthieu 28:19
              </span>
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-xs uppercase tracking-[0.2em] font-medium transition-colors hover:text-stone-500",
                    isActive ? "text-stone-900" : "text-stone-400"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              to="/login"
              className="px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-medium transition-all bg-stone-900 text-white hover:bg-stone-800 hover:shadow-lg hover:-translate-y-0.5"
            >
              Espace Membre
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-stone-900"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#FDFBF7] border-b border-stone-200 shadow-xl">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block text-lg font-serif text-stone-900"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="block mt-4 text-sm uppercase tracking-widest font-medium text-stone-500"
            >
              Espace Membre
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
