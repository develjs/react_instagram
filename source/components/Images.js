// Core
import React, { Component } from 'react';

// Instruments
import images from '../theme/assets/images';

// Components
import Image from './Image';

export default class Images extends Component {
    render () {
        const imagesJSX = images.map((image) => {
            return (
                <Image key = { image.id } public = { image.public } src = { image.src } />
            );
        });

        return <div className = 'images'>{imagesJSX}</div>;
    }
}
