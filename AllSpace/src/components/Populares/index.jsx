import populares from './populares.json';
import styles from './Populares.module.scss';

export function Populares () {
    return (
        <aside className={styles.populares}>
            <h2>Populares</h2>
            <ul aside className={styles.populares__imagens}>
                {
                    populares.map((popular) => {
                        return (
                            <li key={popular.id}>
                                <img src={popular.path} alt={popular.alt} />
                            </li>
                        )
                    }
                    )
                }
            </ul>
            <button>Ver mais fotos</button>
        </aside>
    )
}