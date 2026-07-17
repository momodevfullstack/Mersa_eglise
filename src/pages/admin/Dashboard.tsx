import { Video, CalendarDays, Users } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    { name: 'Enseignements', value: '42', icon: Video },
    { name: 'Événements à venir', value: '8', icon: CalendarDays },
    { name: 'Utilisateurs', value: '15', icon: Users },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-stone-900">Tableau de bord</h1>
        <p className="text-stone-500 mt-1 font-light">Bienvenue dans l'espace d'administration de M.E.R.S.A.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white rounded-3xl shadow-sm border border-stone-100 p-6 md:p-8 flex items-center transition-all hover:shadow-md hover:-translate-y-1">
              <div className="p-4 rounded-2xl bg-stone-50 text-stone-900 mr-6">
                <Icon className="h-8 w-8" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-stone-400 font-medium mb-1">{stat.name}</p>
                <p className="text-3xl font-bold text-stone-900">{stat.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-3xl shadow-sm border border-stone-100 p-6 md:p-8">
          <h2 className="text-lg font-bold text-stone-900 mb-6">Activités Récentes</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-2 h-2 mt-2 rounded-full bg-green-500"></div>
              <div>
                <p className="text-stone-900 font-medium">Nouveau message publié</p>
                <p className="text-stone-500 text-sm">"La Puissance de la Grâce" a été publié par Admin.</p>
                <p className="text-stone-400 text-xs mt-1">Il y a 2 heures</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 mt-2 rounded-full bg-blue-500"></div>
              <div>
                <p className="text-stone-900 font-medium">Événement mis à jour</p>
                <p className="text-stone-500 text-sm">"Culte de Célébration" a été modifié.</p>
                <p className="text-stone-400 text-xs mt-1">Hier à 14:30</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
