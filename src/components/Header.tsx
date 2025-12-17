import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import logoImage from '@/assets/logo-cuarzo-white.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const sections = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'quienes-somos', label: 'Quienes Somos', href: '/quienes-somos' },
    { id: 'servicios', label: 'Servicios', href: '/servicios' },
    {
      id: 'certificaciones',
      label: 'Certificaciones',
      href: '/certificaciones',
    },
    { id: 'contacto', label: 'Contacto', href: '/contacto' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <>
      {/* Main Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 bg-brand-nav shadow-sm"
      >
        <div className="mx-auto w-full max-w-4xl px-6">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-8">
              {/* Logo Section */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex flex-shrink-0 items-center"
              >
                <Link to="/" className="flex items-center space-x-4">
                  <img
                    src={logoImage}
                    alt="Cuarzo Logo"
                    className="h-12 w-auto object-contain"
                  />
                </Link>
              </motion.div>

              {/* Desktop Navigation */}
              <nav className="ml-10 hidden items-center space-x-8 md:flex">
                {sections.map(section => {
                  const isContacto = section.id === 'contacto';
                  return (
                    <Link
                      key={section.id}
                      to={section.href}
                      className={cn(
                        'relative whitespace-nowrap px-3 py-1 text-sm font-medium transition-colors duration-200',
                        isContacto
                          ? 'bg-white px-3 py-1.5 text-brand-nav shadow-sm hover:bg-white/90'
                          : 'text-white/80',
                        !isContacto &&
                          (isActive(section.href)
                            ? 'text-white'
                            : 'hover:text-white')
                      )}
                    >
                      {section.label}
                      {!isContacto && isActive(section.href) && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                          initial={false}
                          transition={{
                            type: 'spring',
                            stiffness: 500,
                            damping: 30,
                          }}
                        />
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden rounded-lg p-2 text-white transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.nav
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="border-t border-white/10 bg-brand-nav md:hidden"
              >
                <div className="space-y-2 px-6 py-4">
                  {sections.map(section => {
                    const isContacto = section.id === 'contacto';
                    return (
                      <Link
                        key={section.id}
                        to={section.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={cn(
                          'block w-full text-left rounded-lg px-4 py-3 text-sm font-medium transition-colors duration-200',
                          isContacto
                            ? 'bg-white text-brand-nav'
                            : 'text-white/80',
                          !isContacto &&
                            (isActive(section.href)
                              ? 'text-white bg-white/10'
                              : 'hover:text-white hover:bg-white/5')
                        )}
                      >
                        {section.label}
                      </Link>
                    );
                  })}
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>

        {/* Teal Accent Line */}
        <div className="h-1 bg-brand-accent"></div>
      </motion.header>
    </>
  );
};

export default Header;
