async function getNails() {
    return await fetch('http://localhost:3000/nails')
                        .then((response) => response.json())
                        .then((data) => data);
}