import React from 'react';

export const Card = ({children, style, width, height}) => {
    return (
        <div style={{ ...basicStyle, ...style, width, height }}>
            {children}
        </div>
    )
}

const basicStyle = {
    border: '1px black solid',
    borderRadius: 5,
    paddingBottom: 5,
    paddingTop: 5,
}