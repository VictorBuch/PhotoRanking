import { useState } from "react";
import ImageCluster from "./components/ImageCluster";

function App() {
  const imageFileArr = [];
  const imageBlobs = [];
  const [imageArr, setImageArr] = useState([]);

  function loadImages(e) {
    imageFileArr.push(e.target.files); // gets a file object with all files
    // console.log(imageFileArr[0]); // this gives an image file
    // console.log("File arr length: " + imageFileArr[0].length);

    // Loop trough all the local images and creat blob elements for later use
    for (let i = 0; i < imageFileArr[0].length; i++) {
      imageBlobs.push(URL.createObjectURL(imageFileArr[0][i]));
    }
    setImageArr(imageBlobs); // set the dynamic state array equal to the blobs we just made
  }
  return (
    <div>
      <header>
        <div className="d-flex justify-content-center">
          <label className="btn btn-danger">
            <div>Upload Images</div>
            <input
              id="inputFile"
              className="file-upload"
              type="file"
              accept="image/*"
              onChange={loadImages}
              multiple
            />
          </label>
        </div>
        <div className="container justify-content-center">
          <div className="row  imageDiv">
            <ImageCluster imageArr={imageArr} />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
