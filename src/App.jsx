import axios from 'axios'
import { useEffect, useState } from 'react'


function App() {

  const postLink = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts"
  const initialposts = {
    author: "",
    title: "",
    body: "",
    public: false,

  }


  const [postData, setpostData] = useState(initialposts)



  const handleChange = (e) => {
    console.log(e.target.value)

    const { name, value, type, checked } = e.target

    setpostData({ ...postData, [name]: type === "checkbox" ? checked : value })
    console.log(postData)
  }

  const sendPost = (event) => {

    event.preventDefault();



    axios
      .post(postLink, postData)
      .then(resp => {
        console.log(resp)

        if (resp.data.id) {
          setpostData(initialposts)
        }


      })

  }

  return (
    <>
      <div className="container">

        <h1 className='text-center py-4'>React Post Form </h1>

        <div className="row d-flex justify-content-center">
          <form className='col-10' onSubmit={sendPost}>
            <div className="mb-3">
              <label htmlFor="author" className="form-label">Author</label>
              <input type="text" className="form-control" id="author" name="author" value={postData.author} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Title</label>
              <input type="text" className="form-control" id="title" name="title" value={postData.title} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="text-area" className="form-label">Post content</label>
              <textarea className="form-control" id="text-area" rows="3" name="body" value={postData.body} onChange={handleChange} ></textarea>




            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" name="public" checked={postData.public} onChange={handleChange} />
              <label className="form-check-label" htmlFor="exampleCheck1" >Public</label>
            </div>
            <button type="submit" className="btn btn-primary " >Submit</button>
          </form>
        </div>


      </div>
    </>
  )
}

export default App
