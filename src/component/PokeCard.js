import React from 'react';

class PokeCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {name: this.props.name, height: 0, weight: 0, basexp: 0, imgsrc: ""};

        this.getAPIData = this.getAPIData.bind(this);
    }

    // Use async so your page can continue loading
    async getAPIData() {
        // This code is provided, it can be complicated
        const url = this.props.url; // URL of the API
        const response = await fetch(url); // Get the data from the PokeAPI
        const responseJSON = await response.json(); // Turn the data into a JSON object that we can use
        
        this.setState(
            {
                height: responseJSON.height,
                weight: responseJSON.weight,
                basexp: responseJSON.base_experience,
                imgsrc: responseJSON.sprites.front_default,
            }
        );
    }

    componentDidMount() {
        this.getAPIData();
    }

    render () {
        // Type your code here...
        const pokeCard = 
        <div className="pokecard">
            <img src={this.state.imgsrc} alt={this.state.name} title={this.state.name} />
            <h4>{this.state.name.charAt(0).toUpperCase() + this.state.name.slice(1)}</h4>
            <p>Height: {this.state.height}</p>
            <p>Weight: {this.state.weight}</p>
            <p>Base XP: {this.state.basexp}</p>
        </div>;
        

        // Return some JSX here...
        return pokeCard;
    }
}

export default PokeCard;