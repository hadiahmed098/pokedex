import React from 'react';

class Details extends React.Component {
    constructor(props) {
        super(props)
        this.state = 
        {
            name: this.props.name,
            img: "",
            id: 0,
            base_xp: 0,
            height: 0,
            weight: 0,
            abilities: [],
            games: [],
            moves: [],
            stats: []
        };

        this.goBack = this.goBack.bind(this);
        this.getAPIData = this.getAPIData.bind(this);
    }

    goBack() {
        this.props.sendData(null);
    }

    async getAPIData() {
        // This code is provided, it can be complicated
        const url = "https://pokeapi.co/api/v2/pokemon/" + this.state.name; // URL of the API
        const response = await fetch(url); // Get the data from the PokeAPI
        const responseJSON = await response.json(); // Turn the data into a JSON object that we can use

        // Pre-process the data for formatting
        const abilities = responseJSON.abilities.map(element => <li>{element.ability.name}</li>);
        const games = responseJSON.game_indices.map(element => <li>{element.version.name}</li>);
        const moves = responseJSON.moves.map(element => <li>{element.move.name}</li>); // A lot of good info is stripped here
        const stats = responseJSON.stats.map(element => {
            return <li>{element.stat.name}:
                <ul>
                    <li>Base: {element.base_stat}</li>
                    <li>Effort: {element.effort}</li>
                </ul>
            </li>;
        });

        this.setState(
            {
                id: responseJSON.id,
                img: responseJSON.sprites.front_default,
                base_xp: responseJSON.base_experience,
                height: responseJSON.height,
                weight: responseJSON.weight,
                abilities: abilities,
                games: games,
                moves: moves,
                stats: stats,
            }
        );
    }

    componentDidMount() {
        this.getAPIData();
    }

    render () {
        const detailView = 
        <div>
            <div>
                <h1>{this.state.name.charAt(0).toUpperCase() + this.state.name.slice(1)}</h1>
                <img src={`https://pokeres.bastionbot.org/images/pokemon/${this.state.id}.png`} alt={this.state.name} width={"96px"} height={"auto"}/>
                <h2>Basic Information</h2>
                    <p>PokeDex ID: {this.state.id}</p>
                    <p>Height: {this.state.height}</p>
                    <p>Weight: {this.state.weight}</p>
                    <p>Base XP: {this.state.base_xp}</p>
                <h2>Abilities</h2>
                    <ul>
                        {this.state.abilities}
                    </ul>
                <h2>Games Found</h2>
                    <ul>
                        {this.state.games}
                    </ul>
                <h2>Possible Moves</h2>
                    <ul>
                        {this.state.moves}
                    </ul>
                <h2>Base Stats</h2>
                    <ul>
                        {this.state.stats}
                    </ul>
            </div>
            <div className="button" onClick={this.goBack}><span className="button-text"><b>Back</b></span></div>
        </div>;

        // Return some JSX here...
        return detailView;
    }
}

export default Details;