const functions = require('firebase-functions');
const algoliasearch = require('algoliasearch');

// Initialize Algolia, replace with your Algolia config
const algoliaClient = algoliasearch('ZNVM513MG7', '5f7d1e20122bbf30b08b5285daee2123');
const index = algoliaClient.initIndex('newsletter');

exports.indexArticleToAlgolia = functions.firestore
    .document('articles/{articleId}')
    .onWrite((change, context) => {
        const article = change.after.data();
        const articleId = context.params.articleId;

        // Split text into chunks
        const textChunks = splitTextIntoChunks(article.text, 1000); // 1000 is the chunk size

        // Create records for each chunk
        const records = textChunks.map((chunk, index) => {
            return {
                objectID: `${articleId}_${index}`,
                title: article.title,
                text: chunk,
                // include other relevant fields
            };
        });

        // Save to Algolia
        return index.saveObjects(records);
    });

function splitTextIntoChunks(text, chunkSize) {
    const chunks = [];
    for (let i = 0; i < text.length; i += chunkSize) {
        chunks.push(text.substring(i, i + chunkSize));
    }
    return chunks;
}
