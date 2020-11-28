import React from 'react';

class Details extends React.Component {
    constructor(props) {
        super(props)
        this.state = {name: this.props.name};
    }

    render () {
        // Type your code here...

        

        // Return some JSX here...
        return <div><p>Will add info about {this.state.name} soon...</p></div>;
    }
}

export default Details;