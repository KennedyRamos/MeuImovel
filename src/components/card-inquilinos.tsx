import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { faAngleUp } from "@fortawesome/free-solid-svg-icons"

export default function cardInquilinos () {
    return(
        <div className="grid gap-10">
            <div className="shadow-xl rounded-lg grid grid-cols-2 gap-3 text-center p-2 border-5 border-blue-100">
                <div>
                    <p className="text-xl font-semibold">Ayrton Ferraz</p>
                    <h3 className="font-medium text-blue-800">Inquilino</h3>
                </div>

                <div>
                    <p className="text-xl font-semibold">5</p>
                    <h3 className="font-medium text-blue-800">Alugueis</h3>
                </div>

                <button className="col-span-2">
                    <FontAwesomeIcon icon={faAngleDown} className="text-blue-400 text-2xl" />
                </button>
            </div>
        </div>
    )
}