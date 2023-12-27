import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { doc, setDoc, getFirestore } from 'firebase/firestore';

class FirebaseAuthService {
  auth = getAuth();
  firestore = getFirestore();

  async createAccount({ email, password, name }) {
    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      const user = userCredential.user;
      
      if (user) {
        await this.createUserProfile(user.uid, { email, name });
        return this.getCurrentUser();
      } else {
        return null;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      return userCredential.user;
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    return new Promise((resolve, reject) => {
      const unsubscribe = onAuthStateChanged(this.auth, (user) => {
        unsubscribe();
        resolve(user);
      }, reject);
    });
  }

  async logout() {
    try {
      await signOut(this.auth);
    } catch (error) {
      console.log("FirebaseAuthService :: logout :: error", error);
    }
  }

  async createUserProfile(uid, { email, name }) {
    const userDoc = {
      uid,
      email,
      name,
      // Add other fields as needed
    };

    try {
      const userRef = doc(this.firestore, 'users', uid);
      await setDoc(userRef, userDoc);
    } catch (error) {
      console.log("FirebaseAuthService :: createUserProfile :: error", error);
    }
  }
}

const firebaseAuthService = new FirebaseAuthService();
export default firebaseAuthService;
