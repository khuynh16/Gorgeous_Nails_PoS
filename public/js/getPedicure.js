async function getPedicure() {
    return await fetch('/pedicure')
                        .then((response) => response.json())
                        .then((data) => data);
}