import React from 'react';
import PokeCard from './PokeCard';

class Search extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {value: "", result:[] };
        this.getAPIData = this.getAPIData.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    // Use async so your page can continue loading
    async getAPIData() {
        let dropdown = document.getElementById("search-type");
        let search_type = dropdown.value;

        if(search_type === "pokemon") {
            const url = "https://pokeapi.co/api/v2/pokemon/" + this.state.value; // URL of the API
            const response = await fetch(url); // Get the data from the PokeAPI

            if(response.statusText === "Not Found") {
                this.setState(
                    {
                        result: <div className="pokecard">Not Found!</div>
                    }
                );
            } else {
                this.setState(
                    {
                        result: <PokeCard key={this.state.value} name={this.state.value} url={"https://pokeapi.co/api/v2/pokemon/" + this.state.value} />
                    }
                );
            }
        } else {
            const url = "https://pokeapi.co/api/v2/type/" + this.state.value; // URL of the API
            const response = await fetch(url); // Get the data from the PokeAPI

            if(response.statusText === "Not Found") {
                this.setState(
                    {
                        result: <div className="pokecard">Not Found!</div>
                    }
                );
            } else {
                const responseJSON = await response.json();
                const pokemon = responseJSON.pokemon.map((element) => <PokeCard key={element.pokemon.name} name={element.pokemon.name} url={element.pokemon.url} />);
                this.setState(
                    {
                        result: pokemon
                    }
                );
            }
        }        
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSearch(event) {
        event.preventDefault();
        if(this.state.value !== "") {
            this.getAPIData();
        }
    }

    render () {
        // Type your code here...
        const search = 
        <div className="search">
            <div className="searchbar">
                <span className="searchbutton" onClick={this.handleSearch}><b>Search</b></span>
                <input className="searchfield" type="text" value={this.state.value} onChange={this.handleChange} placeholder="Query..." />
                <select name="search-type" id="search-type">
                    <option value="pokemon">Pokemon</option>
                    <option value="type">Type</option>
                </select>
            </div>
            <div className="searchresult">
                {this.state.result}
            </div>
        </div>

        // Return some JSX here...
        return search;
    }
}

export default Search;