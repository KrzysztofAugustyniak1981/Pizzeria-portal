import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './PageNav.scss'

const PageNav = () => (
    <nav>
        <div>
            <NavLink exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active' className={styles.navLink}>Home</NavLink>
        </div>
        <div>
            <NavLink to={`${process.env.PUBLIC_URL}/login`} activeClassName='active' className={styles.navLink}>Login</NavLink>
            <NavLink exact to={`${process.env.PUBLIC_URL}/waiter`} activeClassName='active' className={styles.navLink}>Waiter</NavLink>
            <NavLink to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active' className={styles.navLink}>Kitchen</NavLink>
            <NavLink exact to={`${process.env.PUBLIC_URL}/tables`} activeClassName='tables' className={styles.navLink}>Tables</NavLink>
        </div>
    </nav>
);

export default PageNav; 