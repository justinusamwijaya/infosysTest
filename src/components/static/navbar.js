import React from 'react';

export const Navbar = ({logo}) => {
    return (
        <header style={styles.navbar}>
          <img style={styles.img} src={logo} alt="logo" />
        </header>
    )
}
const styles = {
    navbar: {
        position: 'fixed',
        top: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        height: '10%',
        borderBottom: 'solid black 1px',
    },
    img: {
        maxWidth: '100%',
        maxHeight: '100%'
    }
}