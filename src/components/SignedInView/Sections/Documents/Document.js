import React, { useState, useEffect } from 'react'
import firebase from '../../../../backend/firebaseConfig'
import back from '../../../../images/back.png'
import { Link } from 'react-router-dom'

const Document = ({ member }) => {
  const [documents, setDocuments] = useState([])
  const [documentUrl, setDocumentUrl] = useState([])

  useEffect(() => {
    firebase.fetchDocumentData(member.uid)
    .onSnapshot(doc => { 
      setDocuments(d => [...d, ...doc.data().documents])
    })
  }, [member.uid])

  if(documentUrl.length === 0) {
    documents.map(doc => {
      firebase.ref.child(`${member.uid}/${doc.name}`).getDownloadURL()
      .then(url => {
        setDocumentUrl(u => [...u, {url, name: doc.name, size: doc.size, uploadedOn: doc.uploadedOn}])
      })
      return 0
    })
  }

  return (
    <div className="document">
      <Link to="/app/documents">
        <img src={back} alt="Go Back" style={{height: '24px', width: '24px', marginRight: '24px', marginBottom: '-4px'}} />
      </Link>
      <h2 style={{marginTop: 0, display: 'inline-block'}}>{member.name}</h2>
      <div>
        {
          documentUrl.map(url => (
            <a 
              key={url.url} 
              href={url.url} 
              target="_blank"
              rel="noopener noreferrer"
              className="document-link">
                <b>File:</b> { url.name } <br />
                <b>Size:</b> { `${Math.floor(url.size / 1024)}KB` } <br />
                <b>Uploaded On:</b> {  url.uploadedOn } <br />
            </a>
          ))
        }
      </div>
    </div>
  )
}

export default Document
