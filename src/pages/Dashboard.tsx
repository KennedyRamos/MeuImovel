import Header from "../components/header";
import CardImovel from "../components/card-imovel";
import Nav from "../components/nav";

export default function Dashboard() {
  return (
    <div className="h-screen p-4 bg-gray-100">
      <Header></Header>

      <main className="my-5">
        <section>
          <h2 className="text-3xl font-semibold">Dashboard</h2>

          <div className="text-center">
            <div className="bg-blue-50 m-4 rounded-md inset-shadow-sm inset-shadow-blue-500">
              <h3 className="text-2xl font-medium text-blue-800">Imóveis</h3>
            </div>
            <div className="bg-blue-50 m-4 rounded-md inset-shadow-sm inset-shadow-blue-500 font-medium">
              <h3 className="text-2xl text-blue-800">Atrasados</h3>
            </div>
          </div>
        </section>

        <section className=" pb-20">
          <h2 className="text-3xl font-semibold">Últimas Atualizações</h2>
          <CardImovel></CardImovel>
        </section>
      </main>

      <nav>
        <Nav></Nav>
      </nav>   
    </div>
  );
}
