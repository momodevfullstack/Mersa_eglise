import { Play, Calendar, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const sermons = [
  {
    id: 1,
    title: "La Puissance de la Grâce",
    preacher: "Pasteur Principal",
    date: "12 Mai 2024",
    series: "Fondements",
    duration: "45 min",
    image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Marcher par l'Esprit",
    preacher: "Pasteur Adjoint",
    date: "05 Mai 2024",
    series: "Fondements",
    duration: "52 min",
    image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "L'Appel de Matthieu 28",
    preacher: "Pasteur Principal",
    date: "28 Avril 2024",
    series: "Mission",
    duration: "48 min",
    image: "https://images.unsplash.com/photo-1444065381814-865dc9da92c0?q=80&w=2946&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Vaincre l'Adversité",
    preacher: "Invité Spécial",
    date: "21 Avril 2024",
    series: "Vie Victorieuse",
    duration: "60 min",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function Sermons() {
  const featured = sermons[0];

  return (
    <div className="flex flex-col w-full overflow-hidden bg-[#FDFBF7]">
      
      {/* Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto w-full">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-5xl md:text-7xl text-stone-900 mb-6 tracking-tight"
        >
          Enseignements.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-stone-600 font-light text-xl max-w-2xl"
        >
          Nourrissez votre esprit avec la Parole de Dieu. Explorez nos messages récents et séries bibliques.
        </motion.p>
      </section>

      {/* Featured Sermon */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto w-full mb-24">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[2rem] overflow-hidden group cursor-pointer"
        >
          <div className="aspect-[16/9] md:aspect-[21/9] relative">
            <img 
              src={featured.image} 
              alt={featured.title} 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-stone-900/40 transition-colors group-hover:bg-stone-900/50" />
            
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 lg:p-16">
              <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs uppercase tracking-widest font-medium mb-4 w-fit">
                Dernier Message
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-white mb-4 leading-tight max-w-3xl">
                {featured.title}
              </h2>
              <div className="flex flex-wrap items-center gap-4 text-stone-300 text-sm font-light">
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {featured.date}</span>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {featured.duration}</span>
                <span>Par {featured.preacher}</span>
              </div>
            </div>

            {/* Play Button Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto w-full pb-32">
        <div className="flex items-center justify-between mb-12">
          <h3 className="font-serif text-3xl text-stone-900">Catalogue</h3>
          <div className="hidden md:flex gap-4">
            <select className="bg-transparent border border-stone-300 rounded-full px-6 py-2 text-sm text-stone-600 focus:outline-none focus:border-stone-900 appearance-none">
              <option>Toutes les séries</option>
              <option>Fondements</option>
              <option>Mission</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16">
          {sermons.slice(1).map((sermon, i) => (
            <motion.div 
              key={sermon.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-6">
                <img 
                  src={sermon.image} 
                  alt={sermon.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors" />
                <div className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                  <Play className="w-4 h-4 text-stone-900 ml-0.5" fill="currentColor" />
                </div>
              </div>
              <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-stone-500 mb-3">
                <span className="text-stone-900 font-medium">{sermon.series}</span>
                <span>•</span>
                <span>{sermon.date}</span>
              </div>
              <h4 className="font-serif text-2xl text-stone-900 mb-2 group-hover:text-stone-600 transition-colors">
                {sermon.title}
              </h4>
              <p className="text-stone-500 font-light text-sm">Par {sermon.preacher}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
