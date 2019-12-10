import React from 'react'
import UploadDocuments from './UploadDocuments'
import UploadedDocuments from './UploadedDocuments'

const Documents = () => {
  document.title = "Documents"

  return (
    <div className="documents">
      <h2 style={{marginTop: '0'}}>Upload Document</h2>
      <UploadDocuments />
      <h2>Documents</h2>
      <UploadedDocuments />
    </div>
  )
}

export default Documents
