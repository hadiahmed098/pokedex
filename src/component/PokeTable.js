import React from 'react';
import PokeCard from './PokeCard';

class PokeTable extends React.Component {
    constructor(props) {
        super(props)

        this.state = {pokemon: [], offset: 0};
        this.getAPIData = this.getAPIData.bind(this);
    }

    // Use async so your page can continue loading
    async getAPIData() {
        // This code is provided, it can be complicated
        const url = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=" + this.state.offset; // URL of the API
        console.log(url);
        const response = await fetch(url); // Get the data from the PokeAPI
        const responseJSON = await response.json(); // Turn the data into a JSON object that we can use
        
        const responseCards = responseJSON.results.map((item) => <PokeCard key={item.name} name={item.name} url={item.url} />);
        
        this.setState(
            {
                pokemon: this.state.pokemon.concat(responseCards),
                offset: this.state.offset + 10
            }
        );
    }

    componentDidMount() {
        this.getAPIData();
    }

    render () {
        // Type your code here...
        const pokeTable = 
        <div>
        <div className="poketable">
            {this.state.pokemon}
        </div>
        <div className="button" onClick={this.getAPIData}><span className="button-text"><b>Load more...</b></span></div>
        </div>;
        

        // Return some JSX here...
        return pokeTable;
    }
}

export default PokeTable;