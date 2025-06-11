import { useState } from 'react'


function App() {




  return (
    <>
      <div className="container">

        <h1 className='text-center py-4'>React Post Form </h1>

        <div className="row d-flex justify-content-center">
          <form className='col-10'>
            <div className="mb-3">
              <label htmlFor="author" className="form-label">Author</label>
              <input type="text" className="form-control" id="author" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Title</label>
              <input type="text" className="form-control" id="title" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Post content</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">Public</label>
            </div>
            <button type="submit" className="btn btn-primary ">Submit</button>
          </form>
        </div>


      </div>
    </>
  )
}

export default App
