import Header from "../components/header";
import Pesquisa from "../components/barra-pesquisa";
import Nav from "../components/nav";
import CardContrato from "../components/card-contratos";
import { Icons } from "../icons/icons";

export default function Contratos(){
    return(
        <div className="min-h-screen bg-gray-100 flex flex-col">

            <Header></Header>

            <main className="w-full flex-1 mx-auto px-4 grid gap-10 lg:w-2/3 shadow-xl/50">
                
                <section className=" pb-20">
                    <Pesquisa></Pesquisa>
                    
                    <div className="flex justify-between my-5">
                        <h2 className="text-center text-2xl font-semibold">Contratos</h2>
                        
                        <div className="bg-blue-400 p-1.5 rounded-sm text-white text-2xl cursor-pointer">
                            <Icons.Upload/>
                        </div>
                    </div>
                    
                    <div className="lg:mx-1">
                        <CardContrato></CardContrato>
                    </div>
                </section>
            </main>
            <Nav></Nav>
        </div>
    )
}