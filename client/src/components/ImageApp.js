import { fetchImageCollection } from '../actions/osActions'
import { ImageAppCategories } from '../constants/apps'
import Image from './Image.js'
import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import SelectInput from './SelectInput'


// fetch image data from endpoint
	// get images from default bucket

// populate default bucket images

// create functionality to change selector
	// onchange fetch images for that bucket
	// do render process

// on click image, expands for larger view
	// pinch zoom mobile


class ImageApp extends React.Component {
	componentDidMount(){
		console.log("mounted");
		const { dispatch, activeCollection } = this.props

		dispatch(fetchImageCollection(activeCollection))
	}

	buildImageSrc(filename){
		console.log("image src");

		const basePath = 'https://fug-images-paintings.sfo2.digitaloceanspaces.com/';

		return basePath + filename;
	}

	createImages() {
		console.log("create src");

		const imageData = this.props.collections[this.props.activeCollection];

		return !imageData ? "Loading" : imageData.map(image => {
			const imageSrc = this.buildImageSrc(image.Key)
			return <a href={imageSrc} target="_blank"><Image key={image.Key} src={imageSrc} /></a>
		});
	}

	render() {
		console.log("activeCollection: ", this.props.activeCollection);
		return (
			<Fragment>
				<SelectInput selectOptions={ImageAppCategories}></SelectInput>

				<div id="image-app">
					{this.createImages()}
				</div>
			</Fragment>
		)
	}
}

function mapStateToProps(state) {
  const { images } = state
  const { isFetching, collections } = images
	const activeCollection = 'fug-images-paintings'

  return {
		isFetching,
		activeCollection,
		collections
  }
}

export default connect(mapStateToProps)(ImageApp)
