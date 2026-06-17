import { IoHome, IoPerson } from "react-icons/io5";
import { GiBookmark } from "react-icons/gi";
import { BsGraphUp } from "react-icons/bs";
import SlideBarLi from "@/components/layouts/SlideBarLi";

export default function AppSidebar() {
  return (
    <aside className="min-w-[18%] max-w-[35%] bg-brand-dark text-white shadow-xl rounded-sm flex flex-col min-h-screen">
      <div className="h-20 flex items-center justify-center border-b border-slate-800">
        <h1 className="text-2xl font-bold text-white">Questione</h1>
      </div>
      <nav className="text-white w-full flex-1 mt-4">
        <div className="flex flex-col justify-center gap-5">
          <ul className="p-4 w-full flex flex-col gap-2">
            <SlideBarLi icon={IoHome} label="Meu Dashboard" href="/arena/dashboard" />
            <SlideBarLi
              icon={GiBookmark}
              label="Praticar Questões"
              href="/arena/responder/escolha-categoria"
            />
            <SlideBarLi icon={BsGraphUp} label="Meu Desempenho" href="/arena/desempenho" />
            <SlideBarLi icon={IoPerson} label="Meu Perfil" href="/arena/perfil" />
          </ul>
        </div>
      </nav>
      <div className="p-4 border-t border-slate-800">
         <SlideBarLi icon={IoHome} label="Sair" href="/login" />
      </div>
    </aside>
  );
}
