import { IoStatsChart, IoPeople, IoSettings } from "react-icons/io5";
import { BsJournalBookmark } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import SlideBarLi from "@/components/layouts/SlideBarLi";

export default function AdminSidebar() {
  return (
    <aside className="min-w-[18%] max-w-[35%] bg-slate-900 text-white shadow-xl rounded-sm flex flex-col min-h-screen">
      <div className="h-20 flex flex-col items-center justify-center border-b border-slate-800">
        <h1 className="text-xl font-bold text-brand-gold">Questione</h1>
        <span className="text-xs text-slate-400 uppercase tracking-widest">Painel Admin</span>
      </div>
      <nav className="text-white w-full flex-1 mt-4">
        <div className="flex flex-col justify-center gap-5">
          <ul className="p-4 w-full flex flex-col gap-2">
            <SlideBarLi icon={IoStatsChart} label="Dashboard" href="/admin/dashboard" />
            <SlideBarLi icon={BiCategory} label="Categorias" href="/admin/categorias" />
            <SlideBarLi icon={BsJournalBookmark} label="Questões"href="/admin/questoes" />
            <SlideBarLi icon={IoPeople} label="Usuários" href="/admin/usuarios" />
            <SlideBarLi icon={IoSettings} label="Configurações" href="/admin/configuracoes" />
          </ul>
        </div>
      </nav>
      <div className="p-4 border-t border-slate-800">
         <SlideBarLi icon={IoStatsChart} label="Sair" href="/login" />
      </div>
    </aside>
  );
}
