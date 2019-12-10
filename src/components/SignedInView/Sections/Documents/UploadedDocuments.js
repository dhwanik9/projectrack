import React from 'react'
import { Link } from 'react-router-dom'

const UploadedDocuments = () => {
  const members = []
  const memberCount = localStorage.getItem("memberCount")

  for(let i = 0; i < memberCount; i++) {
    members.push(JSON.parse(localStorage.getItem(`member${i}`)))
  }

  return (
    <div className="uploaded-documents">
      {
        members.map(member => (
          <Link 
            to={`/app/${member.name}/`} 
            key={ member.uid }
            className="document-link" >
            { member.name }
          </Link>
        ))
      }
    </div>
  )
}

export default UploadedDocuments
