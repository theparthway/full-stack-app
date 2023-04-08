import { useState } from "react";
import { QrReader } from 'react-qr-reader';
import ticketsStore from "../stores/ticketsStore";

const ScanPage = () => {
  const [data, setData] = useState("no result");

  const store = ticketsStore();

  const handleScan = (res, err) => {
    if (!!res) {
      // setData(res?.text);
      setData(store.fetchTicket(res?.text));
    }

    if (!!err) {
      console.error(err);
    }
  }

  // const constraints = {
  //   facingMode: { exact: "user" },
  // };
  

  return (
    <>
      <QrReader 
      onResult={handleScan}
      constraints={{facingMode: 'environment'}}
      />

      <p>{data}, {store.ticket}</p>
    </>
  )
}

export default ScanPage;