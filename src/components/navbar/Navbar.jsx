import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import AuthLink from '../authLink/AuthLink'
import ThemeToggle from '../themeToggle/ThemeToggle'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.socials}>
        <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="Instagram" width={24} height={24} />
        <Image src="/github.svg" alt="Github" width={24} height={24} />
        <Image src="/linkedin.png" alt="LinkedIn" width={24} height={24} style={{ borderRadius: '50%' }}/>
      </div>
      <div className={styles.logo}>Mind in Space</div>
      <div className={styles.links}>
        <ThemeToggle/>
        <Link href="/home">Homepage</Link>
        <Link href="/blog">Contact</Link>
        <Link href="/about">About</Link>
        <AuthLink/>
      </div>
    </div>
  ) 
}

export default Navbar