import axios from 'axios';
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
import { useState, useEffect } from 'react';

const Gallery = (props) => {
  const cloudName = "dfmhpldkl";
  const [images, setImages] = useState({ resources: [] });

  useEffect(()=>{
    const fetchImages = async ()=> {
      const result = await axios.get(`http://res.cloudinary.com/${cloudName}/image/list/${props.type}.json`);
      setImages(result.data);
    }

    fetchImages();
  }, []);

  return (
    <CloudinaryContext cloudName={`${cloudName}`}>
        {images.resources.map(image => (
          <div className="responsive" key={image.public_id}>
              <div className="img">
                  <a target="_blank" href={`https://res.cloudinary.com/${cloudName}/image/upload/${image.public_id}.${image.format}`}>
                      <Image publicId={image.public_id}>
                          <Transformation
                              crop="fit"
                              width="414"
                              dpr="auto"
                              responsive_placeholder="blank"
                          />
                      </Image>
                  </a>
                  <div className="desc">Created at {image.created_at}</div>
              </div>
          </div>
        ))}
    </CloudinaryContext>
  )
};

export default Gallery;
