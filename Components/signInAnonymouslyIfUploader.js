import { auth, signInAnonymously } from './firebase'

const signInAnonymouslyIfUploader = (isUploader) => {
  if (isUploader) {
    return signInAnonymously(auth);
  }
  return Promise.resolve(); // Return a resolved promise for non-uploaders
};

export default signInAnonymouslyIfUploader;
