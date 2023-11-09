// import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
// import style from './ImageGallery.module.css';

// export const ImageGallery = () => {
//   return (
//     <ul className={style.gallery}>
//       <li className={style.ImageGalleryItem}>
//         <img className={style.ImageGalleryItemImage} src="" alt="" />
//       </li>
//     </ul>
//   );
// };
import axios from 'axios';
import { Component } from 'react';

// axios.defaults.baseURL =
//   'https://pixabay.com/api/?q=cat&page=1&key=33584802-e836107f470a1a46170cd6658&image_type=photo&orientation=horizontal&per_page=12';

export class ImageGallery extends Component {
  componentDidMount() {
    const response = axios.get(
      'https://pixabay.com/api/?{this.props.request}=cat&page=1&key=33584802-e836107f470a1a46170cd6658&image_type=photo&orientation=horizontal&per_page=12'
    );
    return response;
  }

  render() {
    // const { images } = this.state;
    return (
      <ul>
        {this.props.images.map(({ id, webformatURL, title }) => (
          <li key={id}>
            <img src={webformatURL} alt={title}></img>
          </li>
        ))}
      </ul>
    );
  }
}
