// Story
import React, { Component } from 'react';

export default (props) => {
    return (
        <>
            <div className=""><img className="" src={props.src} alt={props.message}/></div>
            <span className="">{props.message}</span>
        </>
    )

}
