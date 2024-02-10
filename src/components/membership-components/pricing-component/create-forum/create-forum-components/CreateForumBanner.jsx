import joinUs from '../../../../../assets/blogs/blog2.png'

const CreateForumBanner = () => {
  return (
    <div className="create-forum-banner-container">
        <div className="create-forum-img">
          <img src={joinUs} alt="forum img" />
        </div>
        <div className="create-forum-banner-text">
          <p>GENERATE FORUMS, ATTEND EVENTS, DISCUSS ON BLOGS AND GET UPDATES ON TECHNOLOGY ADVANCES</p>
        </div>
    </div>
  )
}

export default CreateForumBanner
