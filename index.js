//dołączenie modułów http, https i moment-timezone do źródła
const http = require("http")
const https = require("https")
const moment = require('moment-timezone');

//stała określająca port, na którym będzie nasłuchiwał serwer
const port = 3000

//zmienne, w których będą przechowywane: adres IP oraz strefa czasowa
var ip = ''
var timezone = ''

//uzyskanie adresu IP i strefy czasowej za pomocą API
http.get({
    host: 'ip-api.com',
    path: '/json'
}, function(response) {
    response.on('data', function(d) {
        data = JSON.parse(d)
        ip = data.query
        timezone = data.timezone
    });
});

//utworzenie serwera HTTP: ustawienie kodu statusu na 200, ustawienie typu zawartości na HTML oraz wysłanie kodu strony HTML pokazującej adres IP i uzyskaną za pomocą strefy czasowej aktualną datę i godzinę w tej strefie
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader("Content-Type", "text/html")

    res.end(
        '<html><body>Adres IP klienta: ' + ip + '<br>Data i godzina u klienta: ' + moment().tz(timezone).format('DD.MM.YYYY HH:mm:ss') + '<body><html>'
    )
})

//uruchomienie nasłuchiwania serwera: utworzenie stałych zawierających poszczególne części daty i godziny za pomocą obiektu typu Date oraz wysłanie na konsolę informacji o zadaniu i autorze, daty uruchomienia i portu nasłuchiwania
server.listen(port, () => {
    let date = new Date()
    let day = ("0" + date.getDate()).slice(-2)
    let month = ("0" + (date.getMonth() + 1)).slice(-2);
    let year = date.getFullYear();
    let hours = ("0" + date.getHours()).slice(-2)
    let minutes = ("0" + date.getMinutes()).slice(-2)
    let seconds = ("0" + date.getSeconds()).slice(-2)

    console.log('Zadanie 1')
    console.log('Autor: Kornel Szarapajew')
    console.log('Data uruchomienia: ' + day + "." + month + "." + year + " " + hours + ":" + minutes + ":" + seconds)
    console.log(`Serwer nasłuchuje na porcie ${port}`)
})
