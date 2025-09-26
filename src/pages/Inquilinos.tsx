import Header from "../components/header";
import Pesquisa from "../components/barra-pesquisa";
import CardInquilinos from "../components/card-inquilinos";
import Nav from "../components/nav";

export default function Inquilinos() {
    return(
        <div>
            <Header></Header>

            <main  className="mx-4 grid gap-10">
                <h2 className="text-center text-3xl font-semibold">Inquilinos</h2>
                <section>
                    <Pesquisa></Pesquisa>
                    <CardInquilinos></CardInquilinos>
                </section>
            </main>

           <Nav></Nav> 
        </div>
    )
}