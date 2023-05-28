import styles from '../CardsProjectList s/styles.module.css'

import gitImage from '../../assets/git-icon.png'

export const CardsProjectList = ({ name, descriptions }) => {
    return(
        <li className={styles.listProject}>
            <div className={styles.listProjectDivPrimary}>
                <span className={styles.spanName}>{name}</span>
                <img src={gitImage} alt="" />
            </div>
            <p>{descriptions}</p>
            <a className={styles.listProjectAnchor} href="">Saiba mais</a>
        </li>
    )
}