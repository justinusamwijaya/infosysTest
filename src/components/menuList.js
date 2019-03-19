import React from 'react';
import { PictureIcon, Card } from './basic'

export const MenuList = () => {
    return (
        <Card width='90%' height='40px' style={menuListStyle} >
            <PictureIcon/>
        </Card>
    )
}

const menuListStyle = { 
    display:'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingLeft: 10,
    borderTop: 'none',
    borderRadius: 0,
    borderLeft: 'none',
    borderRight: 'none'
}