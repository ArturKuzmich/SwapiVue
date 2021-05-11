import axios from 'axios'

const getPeople = (success, fail) => {
    axios
        .get('https://swapi.dev/api/people/') // backend Url
        .then((response) => success(response)) // request success
        .catch((response) => fail(response)) // request fail
};

export { getPeople }