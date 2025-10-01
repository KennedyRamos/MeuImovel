import Header from "../components/header";
import Pesquisa from "../components/barra-pesquisa";
import Nav from "../components/nav";
import CardContrato from "../components/card-contratos";

export default function Contratos(){
    return(
        <div>
            <Header></Header>
            <main className="mx-4 bg-gray-100">
                <h2 className="text-center text-3xl font-semibold">Contratos</h2>
                <section className=" mb-20">
                    <Pesquisa></Pesquisa>
                    <CardContrato></CardContrato>
                </section>
            </main>
            <Nav></Nav>
        </div>
    )
}