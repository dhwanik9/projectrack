import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'


const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_MEASUREMENT_ID
}

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig)
    this.auth = app.auth()
    this.provider = new app.auth.GoogleAuthProvider()
    this.db = app.firestore()
  }

  authenticate = () => this.auth.signInWithPopup(this.provider)

  getUserId = () => {
    return this.auth.currentUser ? true : false
  }

  getUserdata = () => {
    const userData = {
      uid: this.auth.currentUser.uid,
      name: this.auth.currentUser.displayName,
      email: this.auth.currentUser.email,
      photoUrl: this.auth.currentUser.photoURL
    }
    return userData
  }

  signOut = () => this.auth.signOut()

  storeUserData = ( userDetails, skills ) =>
    this.db.collection("users").doc(this.auth.currentUser.uid).update({
      role: userDetails.role,
      description: userDetails.description,
      skills,
    })

  storeProjectData = ( userData, projectDetails, technologies, uuid ) =>
    this.db.collection("projects").doc(userData.uid).set({
      pid: uuid,
      createdBy: userData.uid,
      title: projectDetails.title,
      description: projectDetails.description,
      completeBy: projectDetails.completeBy,
      completed: 0,
      remaining: 0,
      technologies,
    })

  fetchUserData = () => {
    let name = ""
    this.db.collection("users").doc(this.auth.currentUser.uid).get()
    .then(data => {
      name = data.data().name
    })
    .catch(error => {
      alert(error)
    })
    return name
  }

}

export default new Firebase()