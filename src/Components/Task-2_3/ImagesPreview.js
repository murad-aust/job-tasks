import React, { useState } from 'react';
import ReactImageUploading from 'react-images-uploading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../Task-1/Navbar/Navbar';

const style = {
   
    backgroundColor: '#EEF5F3',
    minHeight: '100vh'

}

const ImagesPreview = () => {

    const [images, setImages] = useState([]);
    const maxNumber = 100;
   
    const onChange = (imageList, addUpdateIndex) => {
      // data for submit
      console.log(imageList, addUpdateIndex);
      setImages(imageList);
    };
    return (
        <section style={style} >
        <div  className='container' >
            <Navbar></Navbar>
        <ReactImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          
          
          <div className="upload__image-wrapper text-center my-5">
              <div className="d-flex justify-content-center mt-3">
                    <button className="btn btn-primary"
                    onClick={onImageUpload}
                    {...dragProps}
                    >
                    <FontAwesomeIcon icon={faCloudUploadAlt} />  Upload Image
                    </button>
              </div>
              <div className='row'>
                    {imageList.map((image, index) => (
                        <div key={index} className="col-md-3 imgPreview mt-5">
                        <img src={image['data_url']} alt="" width="200" />
                        <div>
                            <button style={{width:'200px'}} className="btn btn-danger mt-1" onClick={() => onImageRemove(index)}>Remove</button>
                        </div>
                        </div>
                    ))}
              </div>
          </div>
        )}
      </ReactImageUploading>  
    </div>
    </section>
    );
};

export default ImagesPreview;