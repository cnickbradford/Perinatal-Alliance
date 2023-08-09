import React from 'react'
import laptop from '../../images/laptop.jpg'

const OnlineAppointments = () => {
  return (
    <>
      <div className="home-title-container">
        <h1 className="home-content-title">Online Appointments</h1>
      </div>
      <div className="coming-soon-container">
        <h1 className="coming-soon-text">New services are coming soon!</h1>
      </div>
      <div className='review-container'>
        <img src={laptop} alt="Laptop" className='reviews-img'/>
          <h2 className='review-header'>what our customers are saying</h2>
        <div className='reviews-coming-soon-container'>
            <span className='reviews-coming-soon-text'>Reviews coming soon!</span>
        </div>
      </div>
    </>
  );
}

export default OnlineAppointments
