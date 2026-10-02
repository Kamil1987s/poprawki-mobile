import type { ImgHTMLAttributes } from 'react';

const images = {
  "hero": {
    "width": 1920,
    "height": 1280,
    "widths": [
      960,
      1280,
      1920
    ]
  },
  "coast": {
    "width": 1600,
    "height": 900,
    "widths": [
      480,
      800,
      1200
    ]
  },
  "pets": {
    "width": 800,
    "height": 611,
    "widths": [
      480,
      800
    ]
  },
  "groups": {
    "width": 800,
    "height": 533,
    "widths": [
      480,
      800
    ]
  },
  "airport": {
    "width": 800,
    "height": 534,
    "widths": [
      480,
      800
    ]
  },
  "people": {
    "width": 800,
    "height": 533,
    "widths": [
      480,
      800
    ]
  },
  "car": {
    "width": 1792,
    "height": 1024,
    "widths": [
      480,
      800,
      1200
    ]
  }
} as const;
type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet' | 'width' | 'height'> & {
  name: keyof typeof images;
  sizes: string;
  pictureClassName?: string;
};

export default function ResponsiveImage({ name, sizes, pictureClassName, ...props }: Props) {
  const image = images[name];
  const srcSet = (format: string) => image.widths.map(width => `/images/${name}-${width}.${format} ${width}w`).join(', ');
  return (
    <picture className={pictureClassName}>
      <source type="image/avif" srcSet={srcSet('avif')} sizes={sizes} />
      <source type="image/webp" srcSet={srcSet('webp')} sizes={sizes} />
      <img {...props} src={`/images/${name}-${image.widths[image.widths.length - 1]}.jpg`}
        srcSet={srcSet('jpg')} sizes={sizes} width={image.width} height={image.height} />
    </picture>
  );
}
