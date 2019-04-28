import { fetchImageCollection } from '../actions/osActions'
import { ImageAppCategories } from '../constants/apps'
import Image from './Image.js'
import Link from './Link.js'
import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import SelectInput from './SelectInput'

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

		const basePath = `https://${this.props.activeCollection}.sfo2.digitaloceanspaces.com/`;

		return basePath + filename;
	}

	createImages() {
		console.log("create src");

		const imageData = this.props.collections[this.props.activeCollection];

		return !imageData ? "Loading" : imageData.map(image => {
			const imageSrc = this.buildImageSrc(image.Key)
			return (
				<Link key={imageSrc} href={imageSrc} target='_blank'>
					<Image key={image.Key} src={imageSrc} />
				</Link>
			)
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
  const { isFetching, collections, activeCollection } = images

  return {
		isFetching,
		activeCollection,
		collections
  }
}

export default connect(mapStateToProps)(ImageApp)
