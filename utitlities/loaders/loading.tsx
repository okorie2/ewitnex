/** @jsxImportSource @emotion/react */
import { TailSpin } from 'react-loader-spinner';

interface LoadingType {
  width?: String;
  height?: String;
  tailWidth?: 'string | number';
  tailHeight?: 'string | number';
}

const Loading = ({ width, height, tailWidth, tailHeight }: LoadingType) => {
  return (
    <>
      <div
        css={{
          height: `${height}` || '65vh',
          width: `${width}` || '80vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TailSpin
          color={'#7c35ab'}
          width={tailWidth || 100}
          height={tailHeight || 100}
        />
      </div>
    </>
  );
};
export default Loading;
