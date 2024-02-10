// import ForumForm from '../../create-forum-components/forum-form/Documents'
import YoutubeVideosLeft from './YoutubeVideosLeft'
import Documents from '../../create-forum/create-forum-components/forum-form/Documents'

const YoutubeVideosBody = () => {
  return (
    <>
    <h1 className="my-title">Youtube Videos</h1>
    <div className='forum-form-container interview-container'>
      <YoutubeVideosLeft/>
      <Documents/>
    </div>
    </>
  )
}

export default YoutubeVideosBody
