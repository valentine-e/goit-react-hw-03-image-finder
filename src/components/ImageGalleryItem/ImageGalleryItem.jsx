import style from './ImageGalleryItem.module.css';

export const ImageGalleryItem = () => {
  return (
    <li className={style.ImageGalleryItem}>
      <img className={style.ImageGalleryItemImage} src="" alt="" />
    </li>
  );
};
