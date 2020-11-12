// This function will get data from the PokeAPI.
// Copy and paste it wherever you may need to.
// MODIFY the parts that say to modify something.

// Use async so your page can continue loading
async getAPIData() {
    // This code is provided, it can be complicated
    const url = "https://pokeapi.co/api/v2/pokemon"/* MODIFY this url to match the data you want */; // URL of the API
    const response = await fetch(url); // Get the data from the PokeAPI
    const responseJSON = await response.json(); // Turn the data into a JSON object that we can use
    
    const responsePokemon = responseJSON.results.map((item) => /* MODIFY to map the results to something */);
    
    this.setState(
        {
            /* MODIFY the state with the API data */
        }
    );
}