import { Icons } from "../icons/icons"

export default function Deletar(){
    return(
        <button className="flex items-start text-2xl p-3 bg-gray-100 text-red-600/80 cursor-pointer">
            <Icons.Deletar/>
        </button>
    )
}