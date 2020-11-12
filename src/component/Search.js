import React from 'react';

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
        // This code is provided, it can be complicated
        const url = "https://pokeapi.co/api/v2/pokemon/" + this.state.value; // URL of the API
        const response = await fetch(url); // Get the data from the PokeAPI
          
        console.log(response);

        if(response.statusText === "Not Found") {
            this.setState(
                {
                    result: <div className="pokecard">Not Found!</div>
                }
            );
        } else {
            const responseJSON = await response.json(); // Turn the data into a JSON object that we can use
            this.setState(
                {
                    result: <div className="pokecard">
                    <img src={responseJSON.sprites.front_default} alt={responseJSON.species.name} title={responseJSON.species.name} />
                    <h4>{responseJSON.species.name.charAt(0).toUpperCase() + responseJSON.species.name.slice(1)}</h4>
                    <p>Height: {responseJSON.height}</p>
                    <p>Weight: {responseJSON.weight}</p>
                    <p>Base XP: {responseJSON.base_experience}</p>
                </div>
                }
            );
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