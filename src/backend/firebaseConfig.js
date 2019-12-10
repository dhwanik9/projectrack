import app, { firestore, storage } from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'
import 'firebase/firebase-storage'


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
    this.storage = storage()
    this.storageRef = app.storage()
    this.ref = this.storageRef.ref()

  }

  authenticate = () => this.auth.signInWithPopup(this.provider)

  getUserId = () => {
    return this.auth.currentUser ? true : false
  }

  signOut = () => this.auth.signOut()

  storeUserData = ( user, userDetails, skills ) =>
    this.db.collection("users").doc(user.uid).set({
      uid: user.uid,
      name: user.name,
      email: user.email,
      photoUrl: user.photoUrl,
      role: userDetails.role,
      description: userDetails.description,
      skills,
      accountSetUp: false,
    })

  storeProjectData = ( uid, projectDetails, technologies, uuid ) =>
    this.db.collection("projects").doc(uid).set({
      pid: uuid,
      createdBy: uid,
      title: projectDetails.title,
      description: projectDetails.description,
      completeBy: projectDetails.completeBy,
      completed: 0,
      remaining: 0,
      technologies,
    })
  
  storeTaskData = (uid) => 
    this.db.collection("tasks").doc(uid).set({
      tasks: []
    })

  updateTaskData = (uid, tasks) => 
    this.db.collection("tasks").doc(uid).update({
      tasks: firestore.FieldValue.arrayUnion(tasks)
    })
  
  storeCompletedTaskData = (uid) =>
    this.db.collection("completedTasks").doc(uid).set({
      tasks: []
    })

  updateCompletedTaskData = (uid, tasks) =>
    this.db.collection("completedTasks").doc(uid).update({
      tasks: firestore.FieldValue.arrayUnion(tasks)
    }) 
    
  storeDocumentData = (uid) =>
    this.db.collection("documents").doc(uid).set({
      documents: []
    })

  updateDocumentData = (uid, file) =>
    this.db.collection("documents").doc(uid).update({
      documents: firestore.FieldValue.arrayUnion(file)
    })

  fetchUserData = (uid) => 
    this.db.collection("users").doc(uid).get()

  fetchProjectData = (uid) => 
    this.db.collection("projects").doc(uid).get()

  fetchTeamData = (tid) => 
    this.db.collection("teams").doc(tid).get()

  fetchTaskData = (uid) => 
    this.db.collection("tasks").doc(uid)

  fetchCompletedTaskData = (uid) => 
    this.db.collection("completedTasks").doc(uid)

  fetchDocumentData = (uid) =>
  this.db.collection("documents").doc(uid)

}

export default new Firebase()