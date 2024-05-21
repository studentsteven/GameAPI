// const express = require('express');
// const app = express();
// app.use(express.json());

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//     console.log("Server Listening on PORT:", port);
// });

// app.get("/status", (request, response) => {
//     const status = {
//        "Status": "Running"
//     };
//     response.send(status);
// });

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const index = {
        "running": "GameAPI is running!"
    };
    res.send(index);
})

app.get('/feitje', (req, res) => {
    const feitjes = [
        "Eerste game ooit gemaakt, heette 'Tennis For Two'. Dit is spel is in 1958 gemaakt door William Higinbotham.",
        "Minecraft is het bestverkochte spel aller tijden, met meer dan 200 miljoen verkochte exemplaren wereldwijd.",
        "Duke Nukem Forever heeft een record voor de langste ontwikkelingstijd van een videogame, namelijk 14 jaar (1997-2011).",
        "Het iconische ontwerp van Pac-Man is gebaseerd op een pizza met een ontbrekend stuk. De bedenker, Toru Iwatani, werd geïnspireerd tijdens het eten van pizza.",
        "Voordat Mario zijn eigen serie had, maakte hij zijn eerste verschijning in het spel 'Donkey Kong' uit 1981, waar hij bekend stond als 'Jumpman'.",
        "Het eerste spel met een vrouwelijke protagonist was 'Metroid' uit 1986, waarin Samus Aran de hoofdrol speelt. Het verrassende aan het spel was dat spelers pas aan het einde ontdekten dat Samus een vrouw was.",
        "The Elder Scrolls II: Daggerfall (1996) heeft een van de grootste open werelden in een videogame, met een kaart die ongeveer 161.600 vierkante kilometer groot is.",
        "Het prijzengeld voor esports is de afgelopen jaren explosief gegroeid. In 2019 had het spel 'Dota 2' het grootste prijzengeld ooit voor een enkel toernooi, met meer dan $34 miljoen bij The International 2019.",
        "In 1993 nam de Russische kosmonaut Aleksandr Serebrov een Game Boy met het spel Tetris mee naar de Mir-ruimtestation, waardoor Tetris het eerste computerspel werd dat in de ruimte werd gespeeld.",
        "Toen Pokémon Go in 2016 werd gelanceerd, veroorzaakte het een wereldwijde hype. In de eerste maand werd het meer dan 100 miljoen keer gedownload en genereerde het meer dan $200 miljoen aan inkomsten.",
        "In het spel Katamari Damacy kun je uiteindelijk zo groot worden dat je hele continenten en planeten kunt oprollen, waardoor het een van de spellen is met de grootste speelbare karakters."
    ];
    const randomFeitje = feitjes[Math.floor(Math.random() * feitjes.length)];

    const feitje = {
        "feitje": "Feitje: " + randomFeitje
    };

    res.send(feitje);
})

app.get("/status", (req, res) => {
    const status = {
       "status": "Running"
    };
    res.send(status);
});

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})