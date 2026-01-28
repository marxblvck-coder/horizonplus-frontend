export default function AdminContent() {
  return (
    <div className="space-y-6">

      <h1 className="text-3xl font-bold text-horizon-dark">
        Contenu du site
      </h1>

      <div className="bg-white p-6 rounded-xl shadow space-y-4">

        <h2 className="font-semibold">Accueil</h2>
        <button className="px-4 py-2 bg-horizon-blue text-white rounded">
          Modifier
        </button>

        <h2 className="font-semibold mt-6">Publications</h2>
        <button className="px-4 py-2 bg-horizon-blue text-white rounded">
          Gérer
        </button>

      </div>

    </div>
  );
}
