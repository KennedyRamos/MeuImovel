import Header from "../components/header";
import Pesquisa from "../components/barra-pesquisa";
import CardImovel from "../components/card-imovel";
import Nav from "../components/nav";

export default function Imoveis() {
    return(
        <div>
            <Header></Header>

            <main className="mx-4 bg-gray-100">
                <h2 className="text-center text-3xl font-semibold">Imóveis</h2>
                <section className=" mb-20">
                    <Pesquisa></Pesquisa>
                    <CardImovel></CardImovel>
                </section>
                
            </main>

            <Nav></Nav>
        </div>
    )
}