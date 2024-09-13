import React, { memo } from 'react';
import Image from 'next/image';

const ImageCollage = memo(({ images }: { images: string[] }) => (
  <div className="mb-4 overflow-hidden rounded-lg">
    {images.length === 1 && (
      <Image
        src={images[0]}
        alt="Experience"
        width={600}
        height={400}
        className="w-full object-cover"
      />
    )}
    {images.length === 2 && (
      <div className="flex space-x-1">
        <Image
          src={images[0]}
          alt="Experience 1"
          width={300}
          height={400}
          className="w-1/2 object-cover"
        />
        <Image
          src={images[1]}
          alt="Experience 2"
          width={300}
          height={400}
          className="w-1/2 object-cover"
        />
      </div>
    )}
    {images.length === 3 && (
      <div className="grid grid-cols-2 gap-1">
        <Image
          src={images[0]}
          alt="Experience 1"
          width={300}
          height={400}
          className="col-span-2 w-full object-cover"
        />
        <Image
          src={images[1]}
          alt="Experience 2"
          width={300}
          height={200}
          className="w-full object-cover"
        />
        <Image
          src={images[2]}
          alt="Experience 3"
          width={300}
          height={200}
          className="w-full object-cover"
        />
      </div>
    )}
  </div>
));

ImageCollage.displayName = 'ImageCollage';

export default ImageCollage;
