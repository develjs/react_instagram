// Core
import React, { Component } from 'react';

export default class Header extends Component {
    render () {
        return (
            <div className = 'header'>
                <div className = 'logo' />
                <input placeholder = 'Search' type = 'text' />
                <div className = 'nav'>
                    <div className = 'explore' />
                    <div className = 'likes' />
                    <div className = 'settings' />
                </div>
            </div>
        );
    }
}
