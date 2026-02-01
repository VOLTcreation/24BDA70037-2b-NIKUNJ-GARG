import { Container } from "@/components/container";
import { Sidebar } from "@/components/sidebar";

interface SidebarLayoutProps {
  children: React.ReactNode;
}

export function SidebarLayout({ children }: SidebarLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Container className="py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <Sidebar />
          <main className="flex-1">{children}</main>
        </div>
      </Container>
    </div>
  );
}