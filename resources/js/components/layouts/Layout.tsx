import NavBar from "./NavBar";

interface LayoutProps {
  children: React.ReactNode;
  SidebarComponent: React.ComponentType;
}

export default function Layout({ children, SidebarComponent }: LayoutProps) {
  return (
    <div className="w-full h-full bg-slate-50 flex">
      <SidebarComponent />
      <div className="flex-1 h-full">
        <NavBar />
        <main className="">
          {children}
        </main>
      </div>
    </div>
  );
}