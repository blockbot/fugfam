import { fetchImageCollection } from '../actions/osActions'
import { ImageAppCategories } from '../constants/apps'
import Image from './Image.js'
import Link from './Link.js'
import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import SelectInputContainer from '../containers/SelectInputContainer'
import '../../../assets/scss/imageApp/image-app.scss'

// on click image, expands for larger view
	// pinch zoom mobile

class ImageApp extends React.Component {
	constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(activeCollection) {
		const { dispatch } = this.props

		dispatch(fetchImageCollection(activeCollection))
  }

	componentDidMount(){
		const { dispatch, activeCollection } = this.props

		dispatch(fetchImageCollection(activeCollection))
	}

	buildImageSrc(filename){
		const basePath = `https://${this.props.activeCollection}.sfo2.cdn.digitaloceanspaces.com/`;

		return basePath + filename;
	}

	createImages() {
		const imageData = this.props.collections[this.props.activeCollection];

		return !imageData ? "Loading" : imageData.map(image => {
			const imageSrc = this.buildImageSrc(image.Key)
			return (
				<Link key={imageSrc} href={imageSrc} target='_blank'>
					<span className="image-container">
						<Image key={image.Key} src={imageSrc} />
					</span>
				</Link>
			)
		});
	}

	render() {
		return (
			<Fragment>
				<div className='app-bar'>
					<SelectInputContainer selectOptions={ImageAppCategories} onChange={this.handleChange}></SelectInputContainer>
				</div>

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
