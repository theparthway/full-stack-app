import { useState } from "react";
import { QrReader } from 'react-qr-reader';

const ScanPage = () => {
  const [data, setData] = useState("no result");

  const handleScan = (res, err) => {
    if (!!res) {
      setData(res?.text);
    }

    if (!!err) {
      console.error(err);
    }
  }

  return (
    <>
      <QrReader 
      onResult={handleScan}
      />

      <p>{data}</p>
    </>
  )
}

export default ScanPage;