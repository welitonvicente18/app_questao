import { IoHome, IoPerson } from 'react-icons/io5';
import { GiBookmark } from 'react-icons/gi';
import { BsGraphUp } from 'react-icons/bs';
import SlideBarLi from '@/components/layouts/SlideBarLi';
import { IoExitOutline } from 'react-icons/io5';
export default function AppSidebar() {
    return (
        <aside className="flex min-h-screen max-w-[35%] min-w-[18%] flex-col rounded-sm bg-brand-dark text-white shadow-xl">
            <div className="flex h-20 items-center justify-center border-b border-slate-800">
                <h1 className="text-2xl font-bold text-white">Questione</h1>
            </div>
            <nav className="mt-4 w-full flex-1 text-white">
                <div className="flex flex-col justify-center gap-5">
                    <ul className="flex w-full flex-col gap-2 p-4">
                        <SlideBarLi
                            icon={IoHome}
                            label="Meu Dashboard"
                            href="/arena/dashboard"
                        />
                        <SlideBarLi
                            icon={GiBookmark}
                            label="Praticar Questões"
                            href="/arena/responder/escolha-categoria"
                        />
                        <SlideBarLi
                            icon={BsGraphUp}
                            label="Meu Desempenho"
                            href="/arena/desempenho"
                        />
                        <SlideBarLi
                            icon={IoPerson}
                            label="Meu Perfil"
                            href="/arena/perfil"
                        />
                    </ul>
                </div>
            </nav>
            <div className="border-t border-slate-800 p-4">
                <ul className="flex w-full flex-col gap-2 p-4">
                    <SlideBarLi
                        icon={IoExitOutline}
                        label="Sair"
                        href="/logout"
                    />
                </ul>
            </div>
        </aside>
    );
}
