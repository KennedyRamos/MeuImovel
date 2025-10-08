import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faMagnifyingGlass,
    faAngleDown,
    faAngleUp,
    faDownload,
    faTrashCan,
    faPlus,
    faArrowUpFromBracket,
    faPenToSquare,
    faCircleUser,
} from "@fortawesome/free-solid-svg-icons";

export const Icons = {
    Lupa: (props: any) => <FontAwesomeIcon icon={faMagnifyingGlass} {...props} />,

    SetaBaixo: (props: any) => <FontAwesomeIcon icon={faAngleDown} {...props} />,

    SetaCima: (props: any) => <FontAwesomeIcon icon={faAngleUp} {...props} />,

    Download: (props: any) => <FontAwesomeIcon icon={faDownload} {...props} />,

    Deletar: (props: any) => <FontAwesomeIcon icon={faTrashCan} {...props} />,

    Adicionar: (props: any) => <FontAwesomeIcon icon={faPlus} {...props} />,

    Upload: (props: any) => <FontAwesomeIcon icon={faArrowUpFromBracket} {...props} />,

    Editar: (props: any) => <FontAwesomeIcon icon={faPenToSquare} {...props} />,

    Perfil: (props: any) => <FontAwesomeIcon icon={faCircleUser} {...props} />,
}