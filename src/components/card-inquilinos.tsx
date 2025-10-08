import { Icons } from "../icons/icons";
import Deletar from "./btn-deletar";

export default function CardInquilinos() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
     
      <div className="shadow-xl rounded-lg grid gap-3 text-center p-2 border-y-5 border-blue-400 relative">
        
        <div className="flex justify-between">
          
          <div className="grid grid-cols-2 pb-3 w-full">
            <div>
              <p className="text-2xl font-semibold">Ayrton Ferraz</p>
              <h3 className="font-medium text-blue-800">Inquilino</h3>
            </div>

            <div>
              <p className="text-2xl font-semibold">5</p>
              <h3 className="font-medium text-blue-800">Alugueis</h3>
            </div>
          </div>
        </div>
        
        <div className="absolute right-0 bottom-1/3">
          <Deletar></Deletar>
        </div>

        <button>
          <Icons.SetaBaixo className="text-white text-2xl p-2 bg-blue-400 rounded-xl" />
        </button>
      </div>

      <div className="shadow-xl rounded-lg grid gap-3 text-center p-2 border-y-5 border-blue-400 relative">
        
        <div className="flex justify-between">
          
          <div className="grid grid-cols-2 pb-3 w-full">
            <div>
              <p className="text-2xl font-semibold">Ayrton Ferraz</p>
              <h3 className="font-medium text-blue-800">Inquilino</h3>
            </div>

            <div>
              <p className="text-2xl font-semibold">5</p>
              <h3 className="font-medium text-blue-800">Alugueis</h3>
            </div>
          </div>
        </div>
        
        <div className="absolute right-0 bottom-1/3">
          <Deletar></Deletar>
        </div>

        <button>
          <Icons.SetaBaixo className="text-white text-2xl p-2 bg-blue-400 rounded-xl" />
        </button>
      </div>
    </div>
  );
}
