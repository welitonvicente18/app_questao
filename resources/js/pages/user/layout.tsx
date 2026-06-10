import Layout from "@/components/layouts/Layout";
import AppSidebar from "@/components/layouts/AppSidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return <Layout SidebarComponent={AppSidebar}>{children}</Layout>;
}
