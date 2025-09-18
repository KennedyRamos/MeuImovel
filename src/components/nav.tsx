export default function Nav() {
  return (
    <nav className="bg-blue-400 bottom-0 left-0 w-screen fixed">
        <ul className="w-full grid grid-cols-4 text-center py-5 text-white">
            <li>Dashboard</li>
            <li>Imóveis</li>
            <li>Inquilinos</li>
            <li>Contratos</li>
        </ul>
    </nav>
  )
}