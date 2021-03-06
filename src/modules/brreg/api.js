class BrregAPI {
    url = 'https://data.brreg.no/enhetsregisteret/api/enheter';
    corsUrl = 'https://cors-anywhere.herokuapp.com/';

    getRegister = (query) => {
        const formattingFreeQuery = query.replace(/[^0-9.]/g, '');

        const getIpQuery = () => {
            let queryUrl = '';
            if (Number(formattingFreeQuery)) {
                queryUrl = `${this.url}?organisasjonsnummer=${formattingFreeQuery}`;
            } else {
                queryUrl = `${this.url}?navn=${query}`;
            }
            return queryUrl;
        };
        return (
            fetch(getIpQuery())
                // .then(this.handleErrors)
                .then((resp) => resp.json())
        );
    };

    // * optional error handling * //
    // handleErrors(resp) {
    //     if (!resp.ok) {
    //         throw Error(resp.statusText);
    //     }
    //     return resp;
    // }
}

export default BrregAPI;
