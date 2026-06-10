import { IoHome } from "react-icons/io5";
import { BsJournalBookmark } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import { GiBookmark } from "react-icons/gi";
import SlideBarLi from "@/components/layouts/SlideBarLi";

export default function Sidebar() {
  return (
    <aside className="min-w-[18%] max-w-[35%] bg-brand-dark text-white shadow-xl rounded-sm flex flex-col min-h-screen">
      <div className="h-20 flex items-center justify-center">
        <img src="/logo.png" alt="Logo" className="w-16 h-16" />
      </div>
      <nav className="text-white w-full flex-1">
        <div className="flex flex-col justify-center gap-5">
          <ul className="p-4 w-full">
            <SlideBarLi icon={IoHome} label="Dashboard" href="/dashboard" />
            <SlideBarLi icon={BiCategory} label="Categoria" href="/categorias" />
            <SlideBarLi
              icon={BsJournalBookmark}
              label="Questões"
              href="/questoes"
            />
            <SlideBarLi
              icon={GiBookmark}
              label="Praticar Questões"
              href="/responder/escolha-categoria"
            />
          </ul>
        </div>
      </nav>
    </aside>
  );
}
