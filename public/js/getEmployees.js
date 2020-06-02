async function getEmployees() {
    return await fetch('http://localhost:3000/getEmployees')
                        .then((response) => response.json())
                        .then((data) => data);
}