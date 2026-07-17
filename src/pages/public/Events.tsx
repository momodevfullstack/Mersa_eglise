import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, MapPin, Clock, Video, Info, Calendar as CalendarIcon } from 'lucide-react';

// --- UTILITAIRES DE DATE ---
const today = new Date();

const fDate = (d: Date) => {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const addDays = (date: Date, days: number) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

const isFuture = (dateStr: string) => {
  return new Date(dateStr) > new Date(fDate(today));
};

// --- DONNÉES SIMULÉES ---
const agendaItems = [
  {
    id: '1',
    type: 'event',
    title: "Culte de Célébration",
    date: fDate(addDays(today, 2)),
    time: "10:00 - 12:30",
    location: "Auditorium Principal",
    description: "Rejoignez-nous pour notre culte dominical. Un temps de louange passionné et un message inspirant de la Parole de Dieu.",
    image: "https://images.unsplash.com/photo-1548625361-ec85d4508493?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: '2',
    type: 'teaching',
    title: "Étude Biblique: Les Fondements",
    date: fDate(addDays(today, 5)),
    time: "19:00 - 20:30",
    location: "Salle Annexe",
    description: "Une étude approfondie sur les fondements de la grâce et de la foi. Préparez vos cœurs et vos Bibles.",
    image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: '3',
    type: 'event',
    title: "Soirée de Prière & Intercession",
    date: fDate(addDays(today, 8)),
    time: "19:30 - 21:00",
    location: "Salle de Prière",
    description: "Un moment dédié à chercher la face de Dieu ensemble, intercéder pour notre nation et pour les besoins de l'église.",
    image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: '4',
    type: 'teaching',
    title: "Enseignement: L'Appel de Matthieu 28",
    date: fDate(addDays(today, 12)),
    time: "19:00 - 20:30",
    location: "Auditorium Principal",
    description: "Plongée dans la vision missionnaire de l'église. Comment accomplir l'ordre suprême dans notre quotidien.",
    image: "https://images.unsplash.com/photo-1444065381814-865dc9da92c0?q=80&w=2946&auto=format&fit=crop"
  },
  {
    id: '5',
    type: 'event',
    title: "Rencontre de Jeunesse",
    date: fDate(addDays(today, 15)),
    time: "15:00 - 18:00",
    location: "Espace Jeunes",
    description: "Temps de communion fraternelle, jeux, louange et partage pour les jeunes de 15 à 25 ans.",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: '6',
    type: 'teaching',
    title: "Séminaire: Vie Victorieuse",
    date: fDate(addDays(today, -2)),
    time: "10:00 - 16:00",
    location: "Auditorium Principal",
    description: "Une journée complète d'enseignement pour apprendre à surmonter les défis par la foi.",
    image: "https://images.unsplash.com/photo-1444065381814-865dc9da92c0?q=80&w=2946&auto=format&fit=crop"
  },
  {
    id: '7',
    type: 'event',
    title: "Action Sociale",
    date: fDate(today),
    time: "08:00 - 14:00",
    location: "Centre Ville",
    description: "Distribution de repas et partage de l'évangile dans notre communauté.",
    image: "https://images.unsplash.com/photo-1548625361-ec85d4508493?q=80&w=2000&auto=format&fit=crop"
  }
];

const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
const daysOfWeek = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

export default function Events() {
  const [currentMonth, setCurrentMonth] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // Navigation du mois
  const nextMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  const prevMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));

  // Calcul du calendrier
  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();
  const firstDayAdjusted = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1; // Ajustement pour commencer le lundi

  const blanks = Array.from({ length: firstDayAdjusted }, (_, i) => i);
  const days = Array.from({ length: daysInMonth }, (_, i) => new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i + 1));

  // Filtrer les événements à afficher
  const selectedDateStr = selectedDate ? fDate(selectedDate) : null;
  
  let displayedItems = [];
  let displayTitle = "";

  if (selectedDateStr) {
    displayedItems = agendaItems.filter(item => item.date === selectedDateStr);
    displayTitle = `Programme du ${formatDateFr(selectedDate!)}`;
  } else {
    displayedItems = [...agendaItems]
      .filter(item => new Date(item.date + 'T12:00:00') >= new Date(fDate(today) + 'T00:00:00'))
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .slice(0, 4);
    displayTitle = "Prochains Rassemblements";
  }

  const getDotsForDate = (date: Date) => {
    const dateStr = fDate(date);
    const items = agendaItems.filter(item => item.date === dateStr);
    return {
      hasEvent: items.some(i => i.type === 'event'),
      hasTeaching: items.some(i => i.type === 'teaching')
    };
  };

  const formatDateFr = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('fr-FR', options);
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#FDFBF7] font-sans">
      
      {/* Header */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto w-full">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-5xl md:text-7xl text-stone-900 mb-6 tracking-tight"
        >
          Agenda.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-stone-600 font-light text-xl max-w-2xl"
        >
          Découvrez nos prochains événements et enseignements. Sélectionnez une date pour voir le programme détaillé.
        </motion.p>
      </section>

      {/* Main Layout Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto w-full pb-32">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Events Details */}
          <div className="flex-1 w-full order-2 lg:order-1">
            <div className="flex items-center justify-between border-b border-stone-200 pb-4 mb-8">
              <h3 className="font-serif text-3xl md:text-4xl text-stone-900 capitalize">
                {displayTitle}
              </h3>
              {selectedDate && (
                <button 
                  onClick={() => setSelectedDate(null)}
                  className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors bg-stone-100 hover:bg-stone-200 px-4 py-1.5 rounded-full"
                >
                  Voir tout
                </button>
              )}
            </div>

            <AnimatePresence mode="wait">
              {displayedItems.length > 0 ? (
                <motion.div 
                  key={selectedDateStr || 'upcoming'}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-16"
                >
                  {displayedItems.map((item, i) => (
                    <div key={item.id} className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-center group">
                      
                      {/* Image avec bordure subtile selon le type */}
                      <div className={`xl:col-span-5 ${i % 2 !== 0 ? 'xl:order-2' : ''}`}>
                        <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl shadow-stone-200/50">
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-[0.16,1,0.3,1]"
                          />
                          <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors" />
                          <div className={`absolute inset-0 border-4 rounded-[2rem] opacity-20 transition-opacity group-hover:opacity-40 ${
                            item.type === 'event' ? 'border-red-500 border-dotted' : 'border-blue-500'
                          }`} />
                        </div>
                      </div>

                      {/* Content */}
                      <div className={`xl:col-span-7 ${i % 2 !== 0 ? 'xl:order-1' : ''}`}>
                        <span className={`inline-block px-4 py-1.5 rounded-full text-xs uppercase tracking-widest font-medium mb-4 ${
                          item.type === 'event' 
                            ? 'bg-red-50 text-red-600 border border-red-200 border-dotted' 
                            : 'bg-blue-50 text-blue-600 border border-blue-200'
                        }`}>
                          {item.type === 'event' ? 'Événement' : 'Enseignement'}
                        </span>
                        
                        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-4 group-hover:text-stone-600 transition-colors leading-tight">
                          {item.title}
                        </h2>
                        
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6 text-stone-600 font-light text-sm">
                          <div>
                            <span className="block text-xs uppercase tracking-widest text-stone-400 mb-1">Date & Heure</span>
                            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-stone-400" /> {formatDateFr(new Date(item.date + 'T12:00:00'))} • {item.time}</span>
                          </div>
                          <div>
                            <span className="block text-xs uppercase tracking-widest text-stone-400 mb-1">Lieu</span>
                            <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-stone-400" /> {item.location}</span>
                          </div>
                        </div>

                        <p className="text-stone-600 font-light leading-relaxed mb-6">
                          {item.description}
                        </p>

                        {item.type === 'teaching' && (
                          <div className="mt-6 pt-6 border-t border-stone-100">
                            {isFuture(item.date) ? (
                              <div className="flex items-start gap-3 bg-blue-50/50 p-4 rounded-xl border border-blue-100/50">
                                <Info className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                                <p className="text-sm text-blue-800 font-light leading-relaxed">
                                  <strong className="font-medium text-blue-900">Vidéo non disponible.</strong><br/>
                                  L'enregistrement sera mis en ligne après la session.
                                </p>
                              </div>
                            ) : (
                              <button className="flex items-center gap-2 px-6 py-3 bg-stone-900 text-white rounded-xl text-sm font-medium hover:bg-stone-800 transition-all hover:shadow-lg">
                                <Video className="w-4 h-4" />
                                Regarder l'enregistrement
                              </button>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-24 text-center px-4 bg-white rounded-[2rem] border border-stone-100 border-dashed"
                >
                  <CalendarIcon className="w-12 h-12 text-stone-300 mb-4" />
                  <p className="text-xl font-serif text-stone-900 mb-2">Aucun programme prévu</p>
                  <p className="text-stone-500 font-light text-sm max-w-sm mx-auto">
                    Il n'y a pas d'événement ou d'enseignement prévu à cette date. Sélectionnez une date avec un indicateur sur le calendrier.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Calendar Widget */}
          <div className="w-full lg:w-[380px] shrink-0 order-1 lg:order-2 lg:sticky lg:top-32">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 md:p-8 rounded-[2rem] shadow-xl shadow-stone-200/50 border border-stone-100"
            >
              {/* Header du Calendrier */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-serif text-2xl text-stone-900 capitalize">
                  {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                </h2>
                <div className="flex gap-1">
                  <button onClick={prevMonth} className="p-2 rounded-full hover:bg-stone-100 text-stone-600 transition-colors">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button onClick={nextMonth} className="p-2 rounded-full hover:bg-stone-100 text-stone-600 transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Légende */}
              <div className="flex flex-col gap-3 mb-6 text-xs text-stone-500 font-light bg-stone-50/50 p-4 rounded-xl">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full border-[1.5px] border-dotted border-red-500 bg-red-50"></span>
                  <span>Événements</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                  <span>Enseignements</span>
                </div>
              </div>

              {/* Jours de la semaine */}
              <div className="grid grid-cols-7 gap-1 mb-2 text-center">
                {daysOfWeek.map(day => (
                  <div key={day} className="text-[10px] uppercase tracking-widest text-stone-400 font-medium py-1">
                    {day}
                  </div>
                ))}
              </div>

              {/* Grille du mois */}
              <div className="grid grid-cols-7 gap-1">
                {blanks.map(blank => (
                  <div key={`blank-${blank}`} className="aspect-square"></div>
                ))}
                
                {days.map(day => {
                  const isSelected = selectedDate ? fDate(day) === fDate(selectedDate) : false;
                  const isToday = fDate(day) === fDate(today);
                  const { hasEvent, hasTeaching } = getDotsForDate(day);

                  return (
                    <button
                      key={day.toString()}
                      onClick={() => setSelectedDate(isSelected ? null : day)}
                      className={`relative w-full aspect-square rounded-lg flex flex-col items-center justify-center transition-all ${
                        isSelected 
                          ? 'bg-stone-900 text-white shadow-md scale-105' 
                          : 'bg-stone-50/50 hover:bg-stone-100 text-stone-900'
                      }`}
                    >
                      <span className={`text-sm ${isToday && !isSelected ? 'font-bold text-stone-900' : 'font-medium'}`}>
                        {day.getDate()}
                      </span>
                      
                      {/* Indicateurs (Points) */}
                      <div className="absolute bottom-1.5 flex gap-1">
                        {hasEvent && (
                          <span className={`w-1 h-1 md:w-1.5 md:h-1.5 rounded-full border-[1px] border-dotted ${isSelected ? 'border-red-400 bg-red-400/20' : 'border-red-500 bg-red-100'}`}></span>
                        )}
                        {hasTeaching && (
                          <span className={`w-1 h-1 md:w-1.5 md:h-1.5 rounded-full ${isSelected ? 'bg-blue-400' : 'bg-blue-500'}`}></span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
}
