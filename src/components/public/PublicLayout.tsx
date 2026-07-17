import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-stone-900 bg-[#FDFBF7]">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
