// Import dependencies
const algoliasearch = require('algoliasearch');
const admin = require('firebase-admin');

// Algolia setup
const ALGOLIA_APP_ID = 'ZNVM513MG7';
const ALGOLIA_ADMIN_KEY = '490f9acd2e46f97227da3e1b2c3ad6e5';
const ALGOLIA_INDEX_NAME = 'newsletter';
const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_ADMIN_KEY);
const index = client.initIndex(ALGOLIA_INDEX_NAME);

// Firebase setup
const serviceAccount = require('./path/to/your/firebase-service-account.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

// Function to fetch text data from Firebase
async function fetchTextData() {
    const db = admin.firestore();
    const texts = [];
    const snapshot = await db.collection('pdfTexts').get();
    snapshot.forEach(doc => {
        texts.push({ id: doc.id, text: doc.data().text });
    });
    return texts;
}

// Function to split text into chunks
const ALGOLIA_MAX_SIZE = 10000; // Adjust as per Algolia's limits
function splitTextIntoChunks(text) {
    let chunks = [];
    let currentChunk = '';
    text.split(/\s+/).forEach(word => {
        if (currentChunk.length + word.length > ALGOLIA_MAX_SIZE) {
            chunks.push(currentChunk);
            currentChunk = '';
        }
        currentChunk += word + ' ';
    });
    if (currentChunk.length > 0) {
        chunks.push(currentChunk);
    }
    return chunks;
}

// Function to process and send data to Algolia
async function processAndIndexData() {
    const textData = await fetchTextData();
    for (const data of textData) {
        const chunks = splitTextIntoChunks(data.text);
        for (let i = 0; i < chunks.length; i++) {
            const record = {
                objectID: data.id + '-' + i,
                content: chunks[i]
                // Add other metadata if necessary
            };
            await index.saveObject(record);
        }
    }
}

// Execute the main function
processAndIndexData()
    .then(() => console.log('Data processed and indexed in Algolia.'))
    .catch(err => console.error('Error processing data:', err));
