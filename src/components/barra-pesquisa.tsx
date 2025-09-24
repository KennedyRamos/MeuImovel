import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

export default function Pesquisa() {
  return (
    <div className="flex gap-2 items-center my-5">
      <input
        type="text"
        name="pesquisa"
        id="pesquisa"
        placeholder="Pesquisar"
        className="w-full border border-blue-500/50 font-semibold rounded-sm p-2"
      />
      <button className="flex "><FontAwesomeIcon icon={faMagnifyingGlass} className="bg-blue-400 text-white p-3 rounded-sm" /></button>
    </div>
  );
}
