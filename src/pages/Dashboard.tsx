import Header from "../components/header";
import CardImovel from "../components/card-imovel";
import Nav from "../components/nav";

export default function Dashboard() {
  return (
    <div className="m-auto min-h-screen bg-gray-100 lg:w-2/3 shadow-xl/50">
      <Header></Header>

      <main className="mx-4 grid gap-10">
        <section>
          <h2 className="text-3xl font-semibold">Dashboard</h2>

          <div className="lg:p-5 grid gap-5 lg:flex text-center">
            <div className="p-3 lg:w-1/2 rounded-md shadow-md shadow-gray-950/50 border-3 font-medium border-blue-100 ">
              <h3 className="text-2xl text-blue-800">Imóveis</h3>
              <p className="text-9xl">5</p>
            </div>

            <div className="p-3 lg:w-1/2 rounded-md shadow-md shadow-gray-950/50 border-3 border-blue-100 font-medium">
              <h3 className="text-2xl text-blue-800">Atrasados</h3>
              <p className="text-9xl">5</p>
            </div>
          </div>
        </section>

        <section className="mb-20 grid gap-6">
          <h2 className="text-3xl font-semibold">Últimas Atualizações</h2>
          <div className="lg:mx-10">
            <CardImovel></CardImovel>
          </div>
        </section>
      </main>

      <nav>
        <Nav></Nav>
      </nav>   
    </div>
  );
}
