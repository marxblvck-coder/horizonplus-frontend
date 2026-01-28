import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/admin/login");
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-horizon-dark text-white p-6 space-y-6">
        <h2 className="text-xl font-bold">Horizon Admin</h2>

        <nav className="space-y-3">
          <a href="/admin/dashboard">Dashboard</a>
          <a href="/admin/content">Contenu</a>
          <a href="/api/auth/signout">Déconnexion</a>
        </nav>
      </aside>

      <main className="flex-1 p-10">
        {children}
      </main>
    </div>
  );
}
