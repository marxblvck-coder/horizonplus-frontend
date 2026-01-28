export default function AdminDashboard() {
  return (
    <div className="space-y-8">

      <h1 className="text-3xl font-bold text-horizon-dark">
        Tableau de bord
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold">Pages</h3>
          <p className="text-2xl font-bold">5</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold">Publications</h3>
          <p className="text-2xl font-bold">3</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold">Messages</h3>
          <p className="text-2xl font-bold">0</p>
        </div>

      </div>

    </div>
  );
}
