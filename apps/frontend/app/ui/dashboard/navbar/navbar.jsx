"use client"
import styles from './navbar.module.css'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname();
  return(
    <div className={styles.container}>
      <div className={styles.title}>{pathname.split("/").pop()}</div>
    </div>
  )
}

export default Navbar