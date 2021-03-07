


function testConnection() {
    const url = "https://script.google.com/macros/s/AKfycbw36cJKjwdhkL26TlvqUAQ3oIla6qRY3r_e_TdgHyW6a2tqjJcqf1NlOvadA-FGn1jm/exec";
    fetch(url)
        .then(d => d.json())
        .then(d => {
            document.getElementById("app").textContent = d[0].status;
        });
}



document.getElementById("btn").addEventListener("click", testConnection);