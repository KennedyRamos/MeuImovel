import Header from "../components/header";
import Pesquisa from "../components/barra-pesquisa";
import CardImovel from "../components/card-imovel";
import Nav from "../components/nav";
import Adicionar from "../components/btn-adicionar";

export default function Imoveis() {
    return(
        <div>
            <Header></Header>

            <main className="mx-4 bg-gray-100">               
                <section className="mb-20">
                    <Pesquisa></Pesquisa>
                    <div className="flex justify-between my-5">
                        <h2 className="text-center text-2xl font-semibold">Imóveis</h2>
                        <Adicionar></Adicionar>
                    </div>
                    <CardImovel></CardImovel>
                </section>
                
            </main>

            <Nav></Nav>
        </div>
    )
}