const url = "https://api.first.org/data/v1/countries";

function send (url) {
    fetch(url)
    .then(response => {
        if (response.status === 200) return response.json();
            else console.log(`We have error, status code: ${statusCode}`);
    })
    .then(json => console.log(JSON.stringify(json)))
    .catch(err => console.log(err));
}

send(url);