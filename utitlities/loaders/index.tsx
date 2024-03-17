/** @jsxImportSource @emotion/react */

import Logo from '@/components/logo';
import { TailSpin } from 'react-loader-spinner';

interface LoaderType {
  background?: string;
  color?: string;
  width?: string | number;
  height?: string | number;
  coverWidth?: string;
  coverHeight?: string;
}

const Loader = ({
  color,
  width,
  height,
  background,
  coverWidth,
  coverHeight,
}: LoaderType) => {
  return (
    <div
      css={{
        height: coverWidth || '100vh',
        width: coverHeight || '100vw',
        display: 'grid',
        placeItems: 'center',
        background: background || 'white',
      }}
    >
      <TailSpin
        color={color || '#7c35ab'}
        width={width || 150}
        height={height || 150}
      />
    </div>
  );
};

export default Loader;
