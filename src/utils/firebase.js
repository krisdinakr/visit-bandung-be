import admin from 'firebase-admin';
import { v4 as uuidv4 } from 'uuid';

const firebase = async ({ filename, path, mimetype }) => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const day = new Date().getDate();
  const tokenId = uuidv4();
  const filePath = `places/${year}-${month}-${day}-${filename}`;

  if (admin.apps.length === 0) {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        privateKey: process.env.FIREBASE_PRIVATE_KEY,
        clientEmail: process.env.FIREBASE_EMAIL_CLIENT,
      }),
      storageBucket: process.env.FIREBASE_BUCKET_NAME,
    });
  }

  const myBucket = admin.storage().bucket().name;

  await admin.storage().bucket().upload(path, {
    destination: filePath,
    contentType: mimetype,
    public: true,
    gzip: true,
    metadata: {
      metadata: { firebaseStorageDownloadTokens: tokenId },
    },
  });

  const createPersistentDownloadUrl = (bucket, pathToFile, downloadToken) => `https://firebasestorage.googleapis.com/v0/b/${bucket}/o/${encodeURIComponent(pathToFile)}?alt=media&token=${downloadToken}`;

  return createPersistentDownloadUrl(myBucket, filePath, tokenId);
};

export default firebase;
