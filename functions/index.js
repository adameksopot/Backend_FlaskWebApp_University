

const admin = require('firebase-admin');// importy zaleznosci
const functions = require('firebase-functions');// importy zaleznosci 

admin.initializeApp(functions.config().firebase); //logowanie jako admin

let db = admin.firestore(); // referencja do bazy danych aby nie pisac admin firestory
exports.getExcel = functions.https.onRequest(async (req, res) => {

    try {

        let docRef = db.collection('answers')
        res.send()

    }
    catch (e) {
        console.log(e)
    }
})
// exports to eksportowanie do firebase funkcji (upublicznianie)
exports.submitAns = functions.https.onRequest(async (req, res) => {
    const timestamp = Date.now().toString() //unikalne id dokumentu

    let docRef = db
        .collection('answers')
        .doc(timestamp) //twprze nowy dokument
        .set(req.body) // odpowiedzi 
        .catch(console.warn);

    res.send("Dziekuje za udzial w ankiecie!") // strona.html
});


// 