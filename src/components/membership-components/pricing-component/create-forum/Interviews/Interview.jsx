import './interview.css'
import CreateForumTitlte from  '../create-forum-components/title-component/CreateForumTitlte'
import CreateForumBanner from '../create-forum-components/CreateForumBanner'
// import CreateDiscussion from '../create-forum-components/CreateDiscussion'
import Recommended from '../create-forum-components/Recommended'
import InterviewBody from './interview-components/InterviewBody'

const Interview = () => {
  return (
    <div className='create-forum-container interview-components'>
      <CreateForumTitlte/>
      <CreateForumBanner/>
      <InterviewBody/>
      <Recommended/>
    </div>
  )
}

export default Interview
