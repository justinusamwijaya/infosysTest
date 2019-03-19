import React from 'react';

export const Button = ({type, color, onClick, children}) => {
    return (
        <button type={type} style={{ ...styles[type, color], borderRadius: 5, height: 30, width: 100, fontSize: 16 }} onClick = {onClick} >{children}</button>
    )
}

const styles = {
    success: {
        backgroundColor: 'green',
        color: 'white'
    },
    fail: {
        backgroundColor: 'red',
        color: 'white'
    }
}