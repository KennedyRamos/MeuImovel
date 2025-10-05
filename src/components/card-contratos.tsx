import { Icons } from "../icons/icons";
import Deletar from "./btn-deletar";

export default function CardContrato() {
  return (
    <div className="grid gap-8">
      <div className="border-l-4 border-blue-400 rounded-sm flex justify-around shadow-md relative">
        

        <div className="text-center w-5/6">
          <div>
            <p className="text-xl">Rua Adolfo, 305</p>
            <h3 className="text-lg font-medium text-indigo-800">Imóvel</h3>
          </div>
          <div>
            <div className="flex justify-evenly">
              <p className="text-xl">23/12/2000</p>
              <p className="font-bold">-</p>
              <p className="text-xl">23/12/2025</p>
            </div>
            <h3 className="font-medium text-indigo-800 uppercase">Vigência</h3>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Deletar></Deletar>
          <button className="">
            <Icons.Download className="text-3xl text-blue-600" />
          </button>
        </div>
      </div>
    </div>
  );
}
