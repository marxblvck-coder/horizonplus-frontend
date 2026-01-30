export default function AdminDashboard() {
  return (
    <div className="space-y-8">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-horizon-dark">
          Tableau de bord
        </h1>
        <p className="text-gray-600 mt-2">
          Gestion du site Horizon Plus
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">Pages</h3>
          <p className="text-3xl font-bold text-horizon-blue mt-2">6</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">Publications</h3>
          <p className="text-3xl font-bold text-horizon-gold mt-2">12</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">Langues</h3>
          <p className="text-3xl font-bold text-horizon-dark mt-2">
            FR / EN
          </p>
        </div>

      </div>

      {/* Actions rapides */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">Actions rapides</h2>

        <div className="flex flex-wrap gap-4">
          <a
            href="/admin/pages"
            className="px-5 py-3 bg-horizon-blue text-white rounded-lg hover:bg-horizon-dark transition"
          >
            Gérer les pages
          </a>

          <a
            href="/admin/content"
            className="px-5 py-3 bg-horizon-gold text-black rounded-lg hover:opacity-90 transition"
          >
            Gérer le contenu
          </a>
        </div>
      </div>

    </div>
  );
}
