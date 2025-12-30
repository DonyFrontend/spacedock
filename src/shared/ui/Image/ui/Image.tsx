import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';

type ImageProps = {
  imageUrl: string;
}

const Image = ({ imageUrl }: ImageProps) => {
  const cld = new Cloudinary({ cloud: { cloudName: 'dthqqetyt' } });


  const img = cld
    .image(imageUrl)
    .format('auto')
    .quality('auto')
    .resize(auto().gravity(autoGravity()))

  return (<AdvancedImage cldImg={img} />);
}

export default Image