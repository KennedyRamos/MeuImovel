import Nav from "../components/nav";

export default function Dashboard() {
  return (
    <div className="h-screen p-4 bg-gray-100">
      <header className="text-center p-4 font-bold">
        <h1 className="text-2xl  text-indigo-800">Meu Imóvel</h1>
      </header>

      <main className="my-5">
        <section>

          <h2 className="text-3xl font-semibold">Dashboard</h2>

          <div className="text-center">
            
            <div className="bg-indigo-50 m-4 rounded-md inset-shadow-sm inset-shadow-indigo-500">
              <h3 className="text-2xl font-medium text-indigo-800">Imóveis</h3>
            </div>
            <div className="bg-indigo-50 m-4 rounded-md inset-shadow-sm inset-shadow-indigo-500 font-medium">
              <h3 className="text-2xl text-indigo-800">Atrasos</h3>
            </div>

          </div>

        </section>
        
        <section>
          <h2 className="text-3xl font-semibold">Últimas Atualizações</h2>
          <div>
            <div className="grid grid-cols-2 my-5 shadow-xl">
              <div className="text-center col-span-2">
                <p className="text-3xl">casa 1</p>
                
                <h3 className="text-lg font-medium text-indigo-800">Imóvel</h3>
              </div>

              <div className="text-center">
                <p className="text-xl">Seu Jõao</p>
                
                <h3 className="font-medium text-indigo-800">Inquilino</h3>
              </div>

              <div className="text-center">
                <p className="text-xl">5</p>
                
                <h3 className="font-medium text-indigo-800">Contrato (meses)</h3>
              </div>

              <button className="bg-green-500 text-center text-lg font-semibold text-white col-span-2 p-2 mt-2  rounded-b-lg">Confirmar pagamento</button>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <Nav></Nav>
      </footer>
    </div>
  )
}