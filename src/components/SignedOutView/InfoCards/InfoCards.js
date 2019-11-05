import React from 'react'
import dashboard from '../../../images/dashboard.png'
import myprogress from '../../../images/myprogress.png'
import myteam from '../../../images/myteam.png'
import documents from '../../../images/documents.png'

const InfoCards = () => {
  const infoCards = [
    {
      id: 0,
      header: 'Dashboard',
      cardDetails: `Check the overall progress of your project and team members. 
                    It also gives you the estimate of how long will it take to complete the project.`,
      image: dashboard
    },
    {
      id: 1,
      header: 'My Progress',
      cardDetails: `Check the progress of your tasks and work accordingly.
                    Create your tasks, and mark them completed, you've got it all.`,
      image: myprogress
    },
    {
      id: 2,
      header: 'My Team',
      cardDetails: `View your teammates and check what tasks they're upto by clicking on the profile button.`,
      image: myteam
    },
    {
      id: 3,
      header: 'Documents',
      cardDetails: `Upload the documents of your project and share them with your team.
                    Know who uploaded the photo and when did they upload it.`,
      image: documents
    }
  ]
  return (
    <>
      {
        infoCards.map(card => (
          <div key={card.id} className="card">
            <img className="image" src={card.image} alt={card.header} />
            <div className="card-header">
              <h3 className="card-header-title">{card.header}</h3>
            </div>
            <div className="card-content">
              <p className="card-details">
                {card.cardDetails}
              </p>
            </div>
          </div>
        ))
      }
    </>
  )
}

export default InfoCards
