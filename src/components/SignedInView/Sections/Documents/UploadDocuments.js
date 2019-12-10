import React, { useState } from 'react'
import firebase from '../../../../backend/firebaseConfig'

const UploadDocuments = () => {
  const [upload, setUpload] = useState(false)
  const [progress, setProgress] = useState(0)
  const uid = localStorage.getItem("uid")
  
  const handleUpload = (file) => {
    if(Math.floor(file.size / 1024) < 1024 && file.type === "application/pdf")
    {
      firebase.ref.child(`${uid}/${file.name}`).put(file)
      .then(snapshot => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        const fileObj = {
          name: file.name,
          size: file.size,
          uploadedOn: new Date().toLocaleString()
        }
        setUpload(true)
        setProgress(`Uploaded: ${progress}%`)
        firebase.updateDocumentData(uid, fileObj)
      })
    } else {
      setProgress("File should be less than 1MB & in PDF format.")
      setUpload(true)
    }
  }

  return (
    <div className="upload-documents">
      <input 
      type="file" 
      onChange={ (e) => handleUpload(e.target.files[0]) }
      className="upload-document" />
      {
        upload ? (
          <span style={{ display: 'inline-block', marginLeft: '8px'}}>{ progress }</span>
        ) : (
          <span>{}</span>
        )
      }
    </div>
  )
}

export default UploadDocuments
