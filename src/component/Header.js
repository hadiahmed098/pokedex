import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props)
        
    }

    render () {
        const header = 
        <div className="header">
            <h1><a className="header-link" href="/">PokeDex Pokemon Viewer</a></h1>
            <h3>Developed during Software Saturdays Fall 2020</h3>
            <h3>For more information, visit <a href="https://purdueieee.org/software">our website</a>.</h3>
            <hr />
        </div>;
        return header;
    }
}

export default Header;