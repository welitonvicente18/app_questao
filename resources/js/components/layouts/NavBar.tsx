import { BsBell } from "react-icons/bs";

export default function NavBar() {
  return (
    <section className="w-full h-[60px]">
      <nav className="w-full h-full text-black border-b border-slate-300 shadow-sm">
        <div className="flex flex-row justify-end items-center h-full px-10 py-2">
          <div className="w-20">
            <BsBell size={25} />
          </div>
          <div className="flex justify-center items-center gap-2 hover:bg-slate-200 rounded-md p-1 cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-semibold text-slate-600">
              W
            </div>
            <span className="font-medium items-center"> Weliton</span>
          </div>
        </div>
      </nav>
    </section>
  );
}
