import React from 'react';

export const TextBox = ({style, type, onChange, placeholder}) => {
    return (
        <input style={{ ...basicStyle, style }} type={type} onChange={onChange}  placeholder={placeholder}/>
    )
}

const basicStyle= {
    width: '100%',
    textAlign:'center',
    fontSize: 16,
    padding: 5,
    border: '1px solid black',
    marginBottom: 20,
    borderRadius: 5,
}