import React from 'react'
import CreateForumTitlte from './CreateForumTitlte'
import Congrats from './Congrats'

const TitleComp = () => {
  return (
    <div className='create-forum-title'>
      <CreateForumTitlte/>
      <Congrats/>
    </div>
  )
}

export default TitleComp
