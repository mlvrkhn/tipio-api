class BrregAPI {
    url = 'https://data.brreg.no/enhetsregisteret/api/enheter/';
    corsUrl = 'https://cors-anywhere.herokuapp.com/';

    getRepos = (query) => {
        // return fetch(`${this.corsUrl}${this.url}enheter/${query}`)
        return fetch(`${this.corsUrl}${this.url}${query}`)
            .then((resp) => {
                if (!resp.ok) {
                    Promise.reject('Promise rejected by BrregAPI');
                }
                return resp.json();
            })
            .then((data) => {
                console.log(data);
            });
    };
}

export default BrregAPI;

// https://data.brreg.no/enhetsregisteret/api/enheter?navn
//
// fetch('http://example.com/movies.json')
//     .then((response) => response.json())
//     .then((data) => console.log(data));
