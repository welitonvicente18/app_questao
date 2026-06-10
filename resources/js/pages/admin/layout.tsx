import Layout from "@/components/layouts/Layout";
import AdminSidebar from "@/components/layouts/AdminSidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <Layout SidebarComponent={AdminSidebar}>{children}</Layout>;
}
