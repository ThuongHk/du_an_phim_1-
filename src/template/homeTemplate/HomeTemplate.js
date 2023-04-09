import React from 'react'
import Footer from './footer/Footer'
import Header from './header/Header'
import styles from './HomeTemplate.module.scss'

const HomeTemplate = ({ children }) => {
    return (
        <div>
            <div className={styles.HomeTemplate}>               
                <div className={styles.header}>
                    <Header />
                </div>
            </div>
            {children}
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
    )
}

export default HomeTemplate