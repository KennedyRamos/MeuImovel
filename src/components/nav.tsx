export default function Nav() {
  return (
    <nav className="bg-blue-400 bottom-0 left-0 w-screen fixed">

        <ul className="mx-auto w-full lg:w-2/3 grid grid-cols-4 text-center py-5 text-white">
            <li>
              <a href="/Dashboard">Dashboard</a>
            </li>
            <li>
              <a href="/Imoveis">Imóveis</a>
            </li>
            <li>
              <a href="/Inquilinos">Inquilinos</a>
            </li>
            <li>
              <a href="/Contratos">Contratos</a>
            </li>
        </ul>
    </nav>
  )
}