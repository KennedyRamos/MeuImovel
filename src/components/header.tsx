import { Icons } from "../icons/icons"

export default function Header() {
  return (
    <header className="text-center p-10 font-bold relative">
      <h1 className="text-2xl  text-blue-800">Meu Imóvel</h1>
      <button className="h-full mx-3 lg:mx-15 right-0 top-0 flex items-center text-4xl text-blue-800 absolute cursor-pointer">
        <Icons.Perfil/>
      </button>
    </header>
  );
}
