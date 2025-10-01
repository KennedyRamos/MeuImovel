import { Icons } from "../icons/icons"

export default function CardInquilinos () {
    return(
        <div className="grid gap-10">
            <div className="shadow-xl rounded-lg grid grid-cols-2 gap-3 text-center p-2 border-y-5 border-blue-400">
                <div>
                    <p className="text-2xl font-semibold">Ayrton Ferraz</p>
                    <h3 className="font-medium text-blue-800">Inquilino</h3>
                </div>

                <div>
                    <p className="text-2xl font-semibold">5</p>
                    <h3 className="font-medium text-blue-800">Alugueis</h3>
                </div>

                <button className="col-span-2">
                    <Icons.SetaBaixo className="text-white text-2xl p-2 bg-blue-400 rounded-xl" />
                </button>
            </div>
        </div>
    )
}