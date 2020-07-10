async function getEmployees() {
    return await fetch('/employees')
                        .then((response) => response.json())
                        .then((data) => data);
}
