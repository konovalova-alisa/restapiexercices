
document.getElementById("btn").addEventListener("click", testConnection);
document.getElementById("btn2").addEventListener("click", postOnSpreadsheet);

function testConnection() {
    const url = "https://script.google.com/macros/s/AKfycbw36cJKjwdhkL26TlvqUAQ3oIla6qRY3r_e_TdgHyW6a2tqjJcqf1NlOvadA-FGn1jm/exec";
    fetch(url)
        .then(d => d.json())
        .then(d => {
            document.getElementById("app").textContent = Object.keys(d[1]);
        });
}


function postOnSpreadsheet() {
    const url = "https://script.google.com/macros/s/AKfycbw36cJKjwdhkL26TlvqUAQ3oIla6qRY3r_e_TdgHyW6a2tqjJcqf1NlOvadA-FGn1jm/exec";
    fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({name: "Test Testsson"}) // body data type must match "Content-Type" header
    }
   );
}

