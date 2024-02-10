// import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {interviewData} from '../../../../../Helpers/interviews/interview'

const YoutubeVideosLeft = () => {

  return (
    <div className='interview-data-container'>
    <div className='interview-data'>
      {interviewData.map(myData => (
        <Link to='' className="blog-data" key={myData.id}>
            <div className="image image-container">
                <img src={myData.image} alt="event 1" />
            </div>
            <div className="blog-details">
                <div className="details">
                    <p className='blog-title-par'>{myData.title}</p>
                    <p>{myData.date}</p>
                    <p>{myData.description}</p>
                </div>
            </div>
        </Link>
      ))}
    </div>
    <button className='load-more-btn'>Load More....</button>
    </div>
  )
}

export default YoutubeVideosLeft
