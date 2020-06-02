async function getPedicure() {
    return await fetch('http://localhost:3000/getPedicure')
                        .then((response) => response.json())
                        .then((data) => data);
}