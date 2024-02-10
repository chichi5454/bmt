import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { useRef, useState } from 'react';

const ForumForm = () => {
  const inputRef = useRef(null)

  const handleImageClick = () => {
    inputRef.current.click()
  }

  // Get the user inputs
  const [formData, setFormData ] = useState({
    title: '',
    description: '',
  })
  const handleInputs = (e) => {
    const { name, value } = e.target

    setFormData ({
      ...formData, [ name ] : value
    })
  }
  const [ titleErrorMsg, setTitleErrorMsg ] = useState("")
  const [ descErrorMsg, setDescErrorMsg ] = useState("")


  // handle Submit function
  const handleSubmit = (e) => {
    e.preventDefault();

     if (formData.title === '') {
      setTitleErrorMsg('Title is required');
    } else {
      setTitleErrorMsg('');
    }

    if (formData.description === '') {
      setDescErrorMsg('Description is required');
    } else {
      setDescErrorMsg('');
    }
  };

  return (
    <div className='forum-form'>
      <h2>Create A Discussion Forum</h2>
      <form action="" className='create-post-form' onSubmit={handleSubmit}>
        <div className="form-content">
            <label htmlFor="title">Title</label>
            <input 
             value={formData.title}
             onChange={handleInputs}
             className="input" 
             type="text" 
             name='title'
             placeholder='Enter the title' />
             <small style={{color: "red"}}>{titleErrorMsg}</small>
        </div>
        <div className="form-content ">
            <label htmlFor="fileInput" className='upload-image'>
              <span>Upload a banner image</span>
              <input type="file" ref={inputRef} style={{display: "none"}}/>
              <span>
                <AddPhotoAlternateIcon onClick={handleImageClick} className='custom-upload-icon'/>
              </span>
            </label>
        </div>
        <div className="form-content">
            <label htmlFor="title">Description</label>
            <textarea onChange={handleInputs} 
            value={formData.description}
            className="input" 
            name="description" 
            placeholder='Description'></textarea>
            <small style={{color: "red"}}>{descErrorMsg}</small>
        </div>
        <button className="post-btn">Post</button>
      </form>
    </div>
  )
}

export default ForumForm
