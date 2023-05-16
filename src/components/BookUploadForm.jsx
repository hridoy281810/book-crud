import React, { useState } from "react";

const BookUploadForm = () => {
const bookCategories = [
  "fiction",
  "horror",
  "Biography",
  "history",
  "travel",
  "memporis",
  "Science",
  "selp-help",
  "selp-help",
  "selp-help",
  "selp-help",
  "selp-help",
  "selp-help",
]

const [selectBookCategory,setSelectBookCategories] = useState(
  bookCategories[0]
)

const handleChangeSelectedValue = event =>{
  console.log(event.target.value)
  setSelectBookCategories(event.target.value)
}

const handleSubmit = event =>{
  event.preventDefault()

  const form = event.target;
  const bookname = form.bookname.value
  const authorname = form.authorname.value
  const img_url = form.img_url.value
  const categoryName = form.categoryName.value
  const description = form.description.value
  const  pdf_url = form.pdf_url.value
  const dataObj = {
    bookname,
    authorname,
    img_url,
   categoryName,
   description,
   pdf:  pdf_url
  }
  console.log(dataObj)

  fetch(`http://localhost:5000/upload-book`,{
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(dataObj)
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
  })
}
  return (
    <div className="p-3 bg-light">
      <form onSubmit={handleSubmit} class="row g-3">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            Book Name
          </label>
          <input type="text" name="bookname" class="form-control" id="inputEmail4" />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">
            Author Name
          </label>
          <input type="text" name="authorname" class="form-control" id="inputPassword4" />
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">
           Image Url
          </label>
          <input
            type="url"
            name="img_url"
            class="form-control"
            id="inputAddress"
            
          />
        </div>
        

        <div class="col-md-4">
          <label for="inputState" class="form-label">
          Category Name
          </label>
          <select id="inputState" 
          name="categoryName"
          class="form-select"
          value={selectBookCategory}
          onChange={handleChangeSelectedValue}
          >
           {
            bookCategories.map((option) =>(
              <option key={option} value={option}>
                {option}
              </option>
            ))
           }
          </select>
        </div>

        <div class="col-md-6">
          <label for="inputCity" class="form-label">
            Meta Text Description
          </label>
          <textarea type="text"  name="description" class="form-control" id="inputCity" />
        </div>
      
        <div class="col-md-2">
          <label for="inputZip" class="form-label">
          Book PDF Url
          </label>
          <input type="url" name="pdf_url" class="form-control" id="inputZip" />
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">
           Upload Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookUploadForm;
