import React from 'react';
import { Card } from './basic'
import { MenuList } from './menuList'

export const Menu = () => {
    return (
        <Card height='90%' width='20%' style={style}>
            <MenuList/>
            <MenuList/>
            <MenuList/>
            <MenuList/>
            <MenuList/>
            <MenuList/>
        </Card>
    )
}

const style = {
    borderLeft: 'none',
    borderTop:'none',
    borderBottom: 'none',
    borderRadius: 0,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    position: 'fixed',
    padding: '0',
    left: 0,
    bottom: 0
}