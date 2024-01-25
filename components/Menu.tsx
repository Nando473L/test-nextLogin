import styles from "@/styles/styles.module.css"
import Link from "next/link"

const Menu = () =>{
    return(
        <nav className={styles.navbar}>
            <Link href="/" className={styles.navbarBrand}>Home</Link>
            <ul className={styles.navbarNav}>
                <li className={styles.navItem}>
                    <Link href="/pages/ayuda" className={styles.navLink}>Ayuda</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/pages/sesion" className={styles.navLink}>Sesion</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu;