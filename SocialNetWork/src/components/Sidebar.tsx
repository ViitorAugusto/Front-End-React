import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';
export function Sidebar() {
    return (
       <aside className={styles.sidebar}>
              <img className={styles.cover} src="https://plus.unsplash.com/premium_photo-1663931932735-8694976211ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2VifGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=50" />
            
            <div className={styles.profile}>
                <Avatar 
                src="https://avatars.githubusercontent.com/u/106840657?v=4"
                hasBorder={true}
                />
                <strong>Vitor Augusto</strong>
                <span>Web Developer</span>

            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar Perfil
                </a>
            </footer>



         </aside>
    )
}