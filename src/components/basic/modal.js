import React from 'react';

export const Modal = ({ backgroundClick, children }) => {
    return (
        <div onClick={backgroundClick} style={styles.modalBackground}>
            <div style={styles.modalCardBackground}>
            {children}
            </div>
        </div>
    )
}

const styles = {
    modalBackground:{
        position: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,.2)',
        zIndex: 10001,
    },
    modalCardBackground: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        backgroundColor: 'white',
        borderRadius: 20,
        paddingTop: 20,
        paddingBottom: 30,
        zIndex: 10000,
    }
}