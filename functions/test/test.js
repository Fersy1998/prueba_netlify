const admin = require('firebase-admin');
const serviceAccount = require('./credentials.json') // Update this to your file

// Initialise the admin with the credentials
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:'https://appland-e-commerce-ec53d.firebaseio.com'
})

const db = admin.firestore()

exports.handler = async (event, context, callback) => {
  await db.collection('COLLECTION').add({
    name: 'Test'
  })

  return callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      data: `Test data added successfully`
    })
  })
}