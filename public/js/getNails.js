async function getNails() {
    return await fetch('/nails')
                        .then((response) => response.json())
                        .then((data) => data);
}