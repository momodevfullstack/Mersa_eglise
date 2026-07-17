import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          
          <div className="md:col-span-4 space-y-6">
            <div className="flex flex-col">
              <span className="font-serif font-bold text-3xl text-white tracking-wide">M.E.R.S.A</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500 mt-2 leading-relaxed">
                Mission Évangélique pour le<br/>Réveil et le Salut des Âmes
              </span>
            </div>
            <p className="text-stone-400 font-light max-w-sm text-base leading-relaxed">
              "Allez, faites de toutes les nations des disciples..." (Matthieu 28:19). Une communauté ancrée dans la foi et ouverte au monde.
            </p>
          </div>
          
          <div className="md:col-span-3 md:col-start-7">
            <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-stone-500 mb-6">Menu</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-stone-300 hover:text-white transition-colors">Accueil</Link></li>
              <li><Link to="/sermons" className="text-stone-300 hover:text-white transition-colors">Enseignements</Link></li>
              <li><Link to="/events" className="text-stone-300 hover:text-white transition-colors">Événements</Link></li>
              <li><Link to="/contact" className="text-stone-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-stone-500 mb-6">Culte</h3>
            <ul className="space-y-4">
              <li className="text-stone-300">Dimanche — 10h00</li>
              <li className="text-stone-500 font-light text-sm">Programme enfants inclus</li>
              <li className="pt-4 text-stone-300">Mardi — 19h00</li>
              <li className="text-stone-500 font-light text-sm">Groupes de maison</li>
            </ul>
          </div>

        </div>
        
        <div className="mt-24 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-500 text-sm font-light">&copy; {new Date().getFullYear()} M.E.R.S.A. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="text-stone-500 hover:text-white text-sm transition-colors">Instagram</a>
            <a href="#" className="text-stone-500 hover:text-white text-sm transition-colors">YouTube</a>
            <a href="#" className="text-stone-500 hover:text-white text-sm transition-colors">Spotify</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
