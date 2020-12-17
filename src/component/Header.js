import React from 'react';

class Header extends React.Component {

    render () {
        const header = 
        <div className="header">
            <h1>PokeDex Pokemon Viewer</h1>
            <a href="https://purdueieee.org/software"><img src="/pokedex/ss-logo.svg" width="10%" height="auto" alt="Software Saturdays Logo"/></a>
            <h3>Developed during Software Saturdays Fall 2020</h3>
            <h3>For more information, visit <a href="https://purdueieee.org/software">our website</a>.</h3>
            <hr />
        </div>;
        return header;
    }
}

export default Header;