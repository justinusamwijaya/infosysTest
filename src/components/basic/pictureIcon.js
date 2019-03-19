import React from 'react';

export const PictureIcon = ({src, alt}) => {
    return src || alt? (
        <img style={style} src={src} alt={alt}/>
    ) : (<img style={style} src="https://cdn1.iconfinder.com/data/icons/avatar-1-2/512/User2-512.png"/>)
}

const style = {
    width: 20,
    height: 20,
    borderRadius: 100
}