import { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const ScanPage = () => {
  const [data, setData] = useState('No result');

  return (
    <>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.error(error);
          }
        }}
        style={{ width: '100%' }}
        constraints={{ facingMode: 'environment' }}
      />
      <p>{data}</p>
    </>
  );
};

export default ScanPage;