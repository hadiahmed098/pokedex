import React from 'react';

class PokeCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {name: this.props.name, height: 0, weight: 0, basexp: 0, imgsrc_mF: "", imgsrc_mB: "", imgsrc_sF: "", imgsrc_sB: "",
                        maintype: "",
                        front: true, readmore: false};

        this.getAPIData = this.getAPIData.bind(this);
        this.swapImages = this.swapImages.bind(this);
        this.readMore = this.readMore.bind(this);
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
                imgsrc_mF: responseJSON.sprites.front_default,
                imgsrc_mB: responseJSON.sprites.back_default,
                imgsrc_sF: responseJSON.sprites.front_shiny,
                imgsrc_sB: responseJSON.sprites.back_shiny,
                imgsrc_left: responseJSON.sprites.front_default,
                imgsrc_right: responseJSON.sprites.front_shiny,
                maintype: responseJSON.types[0].type.name,
            }
        );
    }

    componentDidMount() {
        this.getAPIData();
    }

    swapImages() {
        this.setState({
            front: !this.state.front
        });
    }

    readMore() {
        this.setState({readmore: !this.state.readmore});
    }

    render () {
        // Get the images of the pokemon
        const front_img = <div><img src={this.state.imgsrc_mF} alt={this.state.name}/><img src={this.state.imgsrc_sF} alt={this.state.name}/></div>;
        const back_img = <div><img src={this.state.imgsrc_mB} alt={this.state.name}/><img src={this.state.imgsrc_sB} alt={this.state.name}/></div>

        // Get the background style
        let bg_color = {"background-color": "white"};
        switch (this.state.maintype) {
            case "normal": bg_color["background-color"] = "#969696"; break;
            case "fire": bg_color["background-color"] = "#db7f58"; break;
            case "water": bg_color["background-color"] = "#90aaf5"; break;
            case "grass": bg_color["background-color"] = "#85cc99"; break;
            case "electric": bg_color["background-color"] = "#fae891"; break;
            case "ice": bg_color["background-color"] = "#b7edeb"; break;
            case "fighting": bg_color["background-color"] = "#d96a6a"; break;
            case "flying": bg_color["background-color"] = "#d7b2ed"; break;
            case "poison": bg_color["background-color"] = "#ad6f9c"; break;
            case "ground": bg_color["background-color"] = "#e3e1a3"; break;
            case "bug": bg_color["background-color"] = "#d5e096"; break;
            case "rock": bg_color["background-color"] = "#bfb36b"; break;
            case "psychic": bg_color["background-color"] = "#bd82a3"; break;
            case "ghost": bg_color["background-color"] = "#9882bd"; break;
            case "dark": bg_color["background-color"] = "#a69265"; break;
            case "steel": bg_color["background-color"] = "#d9d9d9"; break;
            case "fairy": bg_color["background-color"] = "#ffe8f9"; break;
            case "dragon": bg_color["background-color"] = "#9e5ecc"; break;
            case "unknown": bg_color["background-color"] = "#00000"; break;
            case "shadow": bg_color["background-color"] = "#00000"; break;        
            default:
                break;
        }


        // Card to display
        const pokeCard = 
        <div className="pokecard" style={bg_color} onClick={this.readMore}>
            <div onMouseOver={this.swapImages} onMouseOut={this.swapImages}>
                {this.state.front ? front_img : back_img }
            </div>
            <h4>{this.state.name.charAt(0).toUpperCase() + this.state.name.slice(1)}</h4>
            <p>Height: {this.state.height}</p>
            <p>Weight: {this.state.weight}</p>
            <p>Base XP: {this.state.basexp}</p>
            <p>Type: {this.state.maintype.charAt(0).toUpperCase() + this.state.maintype.slice(1)}</p>
            {/*this.state.readmore ? <a className="readmore-link" href={"details?poke="+this.state.name}><div className="readmore">Read More</div></a> : <div></div>*/}
        </div>;
        

        // Return some JSX here...
        return pokeCard;
    }
}

export default PokeCard;