import Header from "../components/header";
import Pesquisa from "../components/barra-pesquisa";
import CardImovel from "../components/card-imovel";
import Nav from "../components/nav";
import Adicionar from "../components/btn-adicionar";

export default function Imoveis() {
    return(
        <div className="m-auto min-h-screen bg-gray-100 lg:w-2/3 shadow-xl/50 pb-20">
            <Header></Header>

            <main className="mx-4 bg-gray-100">               
                <section>
                    <Pesquisa></Pesquisa>
                    <div className="flex justify-between my-5">
                        <h2 className="text-center text-2xl font-semibold">Imóveis</h2>
                        <Adicionar></Adicionar>
                    </div>
                    <div className="lg:mx-5">
                        <CardImovel></CardImovel>
                    </div>
                </section>
                
            </main>

            <Nav></Nav>
        </div>
    )
}