import css from "./CamperFeature.module.css";
import icons from "../../assets/icons.svg"

export default function CamperFeature({iconId, displayValue}) {
    return (
        // TODO: maybe fine to just use li as a wrapper
        <div className={css['camper-feature-wrapper']}>
            <svg width="20" height="20" className={css['camper-feature-icon']}>
            <use href={`${icons}#${iconId}`}></use>
            </svg>
            <p className={css['camper-feature-description']}>{displayValue}</p>
        </div>
    )
}
