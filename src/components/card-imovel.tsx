import Deletar from "./btn-deletar";

export default function CardImovel() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      
      {/* Card */}
      <div className="shadow-md rounded-lg">

        {/* Dados e botão deletar */}
        <div className="flex justify-between relative">
          
          {/* Dados */}
          <div className="grid grid-cols-2 pb-3 w-full">
            
            {/* Casa */}
            <div className="text-center col-span-2">
              <p className="text-3xl">casa 1</p>

              <h3 className="text-lg font-medium text-indigo-800">Imóvel</h3>
            </div>

            {/* Inquilino */}
            <div className="text-center">
              <p className="text-xl">Seu Jõao</p>

              <h3 className="font-medium text-indigo-800">Inquilino</h3>
            </div>
            
            {/* Tempo de contrato */}
            <div className="text-center">
              <p className="text-xl">5</p>

              <h3 className="font-medium text-indigo-800">Contrato (meses)</h3>
            </div>
          </div>

          <div className="absolute right-0">
            <Deletar></Deletar>
          </div>
        </div>

        {/* Data depagamento */}
        <div className="p-2 bg-blue-400 text-white text-center font-semibold">
          <h4>
            Data de pagamento: <span>22/12/2222</span>
          </h4>
        </div>

        <button className="w-full bg-green-500 text-center text-lg font-semibold text-white p-2 uppercase rounded-b-lg cursor-pointer">
          Confirmar pagamento
        </button>
      </div>

      <div className="shadow-md rounded-lg">

        {/* Dados e botão deletar */}
        <div className="flex justify-between relative">
          
          {/* Dados */}
          <div className="grid grid-cols-2 pb-3 w-full">
            
            {/* Casa */}
            <div className="text-center col-span-2">
              <p className="text-3xl">casa 1</p>

              <h3 className="text-lg font-medium text-indigo-800">Imóvel</h3>
            </div>

            {/* Inquilino */}
            <div className="text-center">
              <p className="text-xl">Seu Jõao</p>

              <h3 className="font-medium text-indigo-800">Inquilino</h3>
            </div>
            
            {/* Tempo de contrato */}
            <div className="text-center">
              <p className="text-xl">5</p>

              <h3 className="font-medium text-indigo-800">Contrato (meses)</h3>
            </div>
          </div>

          <div className="absolute right-0">
            <Deletar></Deletar>
          </div>
        </div>

        {/* Data depagamento */}
        <div className="p-2 bg-blue-400 text-white text-center font-semibold">
          <h4>
            Data de pagamento: <span>22/12/2222</span>
          </h4>
        </div>

        <button className="w-full bg-green-500 text-center text-lg font-semibold text-white p-2 uppercase rounded-b-lg cursor-pointer">
          Confirmar pagamento
        </button>
      </div>

      <div className="shadow-md rounded-lg">

        {/* Dados e botão deletar */}
        <div className="flex justify-between relative">
          
          {/* Dados */}
          <div className="grid grid-cols-2 pb-3 w-full">
            
            {/* Casa */}
            <div className="text-center col-span-2">
              <p className="text-3xl">casa 1</p>

              <h3 className="text-lg font-medium text-indigo-800">Imóvel</h3>
            </div>

            {/* Inquilino */}
            <div className="text-center">
              <p className="text-xl">Seu Jõao</p>

              <h3 className="font-medium text-indigo-800">Inquilino</h3>
            </div>
            
            {/* Tempo de contrato */}
            <div className="text-center">
              <p className="text-xl">5</p>

              <h3 className="font-medium text-indigo-800">Contrato (meses)</h3>
            </div>
          </div>

          <div className="absolute right-0">
            <Deletar></Deletar>
          </div>
        </div>

        {/* Data depagamento */}
        <div className="p-2 bg-blue-400 text-white text-center font-semibold">
          <h4>
            Data de pagamento: <span>22/12/2222</span>
          </h4>
        </div>

        <button className="w-full bg-green-500 text-center text-lg font-semibold text-white p-2 uppercase rounded-b-lg cursor-pointer">
          Confirmar pagamento
        </button>
      </div>
      {/* Próximo card */}
    </div>
  );
}
