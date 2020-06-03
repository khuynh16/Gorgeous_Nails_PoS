async function getPedicure() {
    return await fetch('http://localhost:3000/pedicure')
                        .then((response) => response.json())
                        .then((data) => data);
}