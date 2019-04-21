import React, { Fragment } from 'react';
import SelectInput from './SelectInput';
import { ImageAppCategories } from '../constants/apps';

// fetch image data from endpoint
	// get images from default bucket

// populate default bucket images

// create functionality to change selector
	// onchange fetch images for that bucket
	// do render process

// on click image, expands for larger view
	// pinch zoom mobile
class ImageApp extends React.Component {
	render() {
		return (
			<Fragment>
				<SelectInput selectOptions={ImageAppCategories}></SelectInput>

				<div id="image-app">
					<img src="https://fug-images-paintings.sfo2.digitaloceanspaces.com/fugfam-big-poppy-bday.jpg" width="133" height="100" />
				</div>
			</Fragment>
		);
	}
}

export default ImageApp;
