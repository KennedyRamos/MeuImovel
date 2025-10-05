import Header from "../components/header";
import Pesquisa from "../components/barra-pesquisa";
import Nav from "../components/nav";
import CardContrato from "../components/card-contratos";
import { Icons } from "../icons/icons";

export default function Contratos(){
    return(
        <div>
            <Header></Header>
            <main className="mx-4 bg-gray-100">
                
                <section className=" mb-20">
                    <Pesquisa></Pesquisa>
                    
                    <div className="flex justify-between my-5">
                        <h2 className="text-center text-2xl font-semibold">Contratos</h2>
                        <Icons.Upload className="bg-blue-400 p-1.5 rounded-md text-white text-2xl"/>
                    </div>
                    
                    <CardContrato></CardContrato>
                </section>
            </main>
            <Nav></Nav>
        </div>
    )
}