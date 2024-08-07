import { forwardRef, useState } from 'react';
import images from '~/asset/images';
import styles from './Image.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.image }, ref) => {
  const [fallback, setFallback] = useState('');
  const handleFallback = () => {
    setFallback(customFallback);
  };

  return (
    <img
      ref={ref}
      src={fallback || src}
      alt={alt}
      className={classNames(styles.wrapper, className)}
      onError={handleFallback}
    />
  );
});

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  fallback: PropTypes.string,
};
export default Image;
