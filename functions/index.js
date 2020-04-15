

const admin = require('firebase-admin');
const functions = require('firebase-functions');

admin.initializeApp(functions.config().firebase);

let db = admin.firestore();
exports.getExcel = functions.https.onRequest(async (req, res) => {
   
    try {

        let docRef = db.collection('answers')
        res.send()
        
    }
    catch (e) {
        console.log(e)
    }})
exports.submitAns = functions.https.onRequest(async (req, res) => {
    const timestamp = Date.now().toString()
    console.log(req.body["0"])
    try {
        let docRef = db.collection('answers').doc(timestamp);
        let setDoc = docRef.set(req.body);
    }
    catch (e) {
        console.log(e)
    }
    res.send("Dziekuje za udzial w ankiecie!")
});
