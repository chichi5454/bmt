// import ForumForm from '../../create-forum-components/forum-form/Documents'
import InterviewRight from './InterviewRight'
import Documents from '../../../create-forum/create-forum-components/forum-form/Documents'

const InterviewBody = () => {
  return (
    <>
    <h1 className="my-title">Interviews</h1>
    <div className='forum-form-container interview-container'>
      <InterviewRight/>
      <Documents/>
    </div>
    </>
  )
}

export default InterviewBody
