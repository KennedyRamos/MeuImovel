import Header from "../components/header";
import Pesquisa from "../components/barra-pesquisa";
import CardInquilinos from "../components/card-inquilinos";
import Nav from "../components/nav";
import Adicionar from "../components/btn-adicionar";

export default function Inquilinos() {
    return(
        <div>
            <Header></Header>

            <main  className="mx-4 bg-gray-100">
                
                <section>
                    <Pesquisa></Pesquisa>
                    <div className="flex justify-between my-5">
                        <h2 className="text-center text-2xl font-semibold">Inquilinos</h2>
                        <Adicionar></Adicionar>
                    </div>
                    <CardInquilinos></CardInquilinos>
                </section>
            </main>

           <Nav></Nav> 
        </div>
    )
}