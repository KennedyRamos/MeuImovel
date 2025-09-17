export default function Dashboard() {
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <header className="mb-6">
        <h2 className="text-xl font-bold">Dashboard</h2>
      </header>

      <section>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded shadow">Imóveis: 3</div>
          <div className="p-4 bg-white rounded shadow">Contratos: 2</div>
          <div className="p-4 bg-white rounded shadow">Recebimentos: R$ 4.000</div>
        </div>
      </section>
    </div>
  )
}