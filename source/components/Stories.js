// Stories
import React, { Component } from 'react';
import Story from './Story';
import stories from '../theme/assets/stories';


export default class Stories extends Component {
    render () {
        return (
            <ul className="stories" >
                {
                    stories.map(story=>(
                        <li key={story.id} className="story">
                            <Story src={story.src} message={story.message}/>
                        </li>
                    ))
                }
                <li>
                    <button tabIndex="-1">
                        <div></div>
                    </button>
                </li>
            </ul>
        )
    }
}
