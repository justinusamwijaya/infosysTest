import React from 'react';
import { Card } from './basic'

export const FormSection = ({children}) => {
    return (
        <Card height='90%' width='80%' style={style}>
            {children}
        </Card>
    )
}

const style = {
    border: 0,
    borderRadius: 0,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    position: 'fixed',
    padding: '0',
    right: 0,
    bottom: 0
}