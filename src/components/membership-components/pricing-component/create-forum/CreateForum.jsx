import './CreateForum.css'
// import CreateForumTitlte from './create-forum-components/title-component/CreateForumTitlte'
import CreateForumBanner from './create-forum-components/CreateForumBanner'
import CreateDiscussion from './create-forum-components/CreateDiscussion'
import Recommended from './create-forum-components/Recommended'
import TitleComp from './create-forum-components/title-component/TitleComp'

const CreateForum = () => {
  return (
    <div className='create-forum-container'>
      <TitleComp/>
      <CreateForumBanner/>
      <CreateDiscussion/>
      <Recommended/>
    </div>
  )
}

export default CreateForum
