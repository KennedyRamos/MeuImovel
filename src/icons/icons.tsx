import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faMagnifyingGlass,
    faAngleDown,
    faAngleUp,
    faDownload,
} from "@fortawesome/free-solid-svg-icons";

export const Icons = {
    Lupa: (props: any) => <FontAwesomeIcon icon={faMagnifyingGlass} {...props} />,

    SetaBaixo: (props: any) => <FontAwesomeIcon icon={faAngleDown} {...props} />,

    SetaCima: (props: any) => <FontAwesomeIcon icon={faAngleUp} {...props} />,

    Download: (props: any) => <FontAwesomeIcon icon={faDownload} {...props} />,
}