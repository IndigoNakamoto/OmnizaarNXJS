import Link from 'next/link'
import styles from './navigation.module.css'

export default function Nav() {
    return (
        <header className={
            styles.header
        }>
            <Link href="/" className='logo'>
                <a>0MNIZAAR</a>
            </Link>
            <nav>
                <ul className={styles.menu}>
                    <li>
                        <Link href="/about">
                            <a>ABOUT</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/learn">
                            <a>LEARN</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/mint">
                            <a>MINT</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
