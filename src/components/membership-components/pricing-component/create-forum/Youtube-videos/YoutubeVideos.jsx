import './YoutubeVideos.css'
import CreateForumTitlte from  '../create-forum-components/title-component/CreateForumTitlte'
import CreateForumBanner from '../create-forum-components/CreateForumBanner'
// import CreateDiscussion from '../create-forum-components/CreateDiscussion'
import Recommended from '../create-forum-components/Recommended'
import YoutubeVideosBody from './YoutubeVideosBody'

const YoutubeVideos = () => {
  return (
    <div className='create-forum-container interview-components'>
      <CreateForumTitlte/>
      <CreateForumBanner/>
      <YoutubeVideosBody/>
      <Recommended/>
    </div>
  )
}

export default YoutubeVideos
