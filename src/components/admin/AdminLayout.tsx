import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Video, CalendarDays, Users, LogOut, Settings } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function AdminLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const sidebarLinks = [
    { name: 'Tableau de bord', path: '/admin', icon: LayoutDashboard },
    { name: 'Enseignements', path: '/admin/sermons', icon: Video },
    { name: 'Événements', path: '/admin/events', icon: CalendarDays },
    { name: 'Utilisateurs', path: '/admin/users', icon: Users },
    { name: 'Paramètres', path: '/admin/settings', icon: Settings },
  ];

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex bg-[#FDFBF7] font-sans text-stone-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-stone-200 flex-col hidden md:flex">
        <div className="h-20 flex items-center px-6 border-b border-stone-200 cursor-pointer" onClick={() => navigate('/')}>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-xl tracking-tight text-stone-900">
              M.E.R.S.A
            </span>
            <span className="text-[9px] uppercase tracking-widest text-stone-500 font-medium mt-0.5">
              Espace Membre
            </span>
          </div>
        </div>
        
        <nav className="flex-1 py-8 px-4 space-y-2">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path;
            
            return (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all",
                  isActive 
                    ? "bg-stone-900 text-white shadow-md" 
                    : "text-stone-500 hover:bg-stone-50 hover:text-stone-900"
                )}
              >
                <Icon className="h-5 w-5" />
                {link.name}
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t border-stone-200">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-stone-500 hover:bg-red-50 hover:text-red-600 w-full transition-colors"
          >
            <LogOut className="h-5 w-5" />
            Déconnexion
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Mobile header */}
        <header className="h-16 bg-white border-b border-stone-200 flex items-center justify-between px-4 md:hidden">
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg tracking-tight text-stone-900">
              M.E.R.S.A
            </span>
          </div>
          {/* Mobile menu toggle would go here */}
        </header>

        <main className="flex-1 p-6 md:p-10 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
