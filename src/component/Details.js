import React from 'react';

class Details extends React.Component {
    constructor(props) {
        super(props)
        this.state = {name: this.props.name};

        this.goBack = this.goBack.bind(this);
    }

    goBack() {
        this.props.sendData(null);
    }

    render () {
        const detailView = 
        <div>
            <div><p>Will add info about {this.state.name} soon...</p></div>
            <div className="button" onClick={this.goBack}><span className="button-text"><b>Back</b></span></div>
        </div>;

        

        // Return some JSX here...
        return detailView;
    }
}

export default Details;