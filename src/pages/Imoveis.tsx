import Header from "../components/header";
import Pesquisa from "../components/barra-pesquisa";
import CardImovel from "../components/card-imovel";
import Nav from "../components/nav";
import Adicionar from "../components/btn-adicionar";

export default function Imoveis() {
    return(
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <Header></Header>

            <main className="w-full flex-1 mx-auto px-4 grid gap-10 lg:w-2/3 shadow-xl/50">               
                <section className="pb-20">
                    <Pesquisa></Pesquisa>
                    <div className="flex justify-between my-5">
                        <h2 className="text-center text-2xl font-semibold">Imóveis</h2>
                        <Adicionar></Adicionar>
                    </div>
                    <div className="lg:mx-1">
                        <CardImovel></CardImovel>
                    </div>
                </section>
                
            </main>

            <Nav></Nav>
        </div>
    )
}