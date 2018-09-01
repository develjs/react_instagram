import React, { Component } from 'react';
import links from '../theme/assets/links';

const LANGS_LINK = 'https://datahub.io/core/language-codes/r/language-codes.json'; // {"English": "English", "alpha2": "en",...}

export default class Footer extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            langs: [ {"English": "English", "alpha2": "en"} ]
        }
    }
    
    componentDidMount(){
        fetch(LANGS_LINK)
        .then(res=>res.json())
        .then(data=>{
            this.setState({ langs: data })
        })
    }
    
    render () {
        let { langs } = this.state;
    
        return (
            <footer className="footer" role="contentinfo">
                <ul className=""> 
                {
                    links.map(link => ( <li key= {link.id}>
                        { link.message=='Language'
                            ? <>
                                <span>{link.message}
                                    <select aria-label="Switch Display Language" className=""> {
                                        langs.map(lang => (
                                            <option key={lang.alpha2} value={lang.alpha2}>{lang.English}</option>
                                        ))
                                    } </select>
                                </span>
                            </>
                            : <a href="#">{link.message}</a>
                        }
                    </li> ))
                }
                </ul>
        
            </footer>
        );
    }
}
