import { useEffect, useState } from "react";
import { QrReader } from 'react-qr-reader';
import ticketsStore from "../stores/ticketsStore";

const ScanPage = () => {
  const [data, setData] = useState("no result");

  const store = ticketsStore();

  useEffect(() => {
    store.fetchTickets();
  }, []);

  const handleScan = (res, err) => {
    if (!!res) {
      // setData(res?.text);
      setData(store.tickets.filter(ticket => {return ticket._id === res?.text}));
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

      <p>{data}</p>
    </>
  )
}

export default ScanPage;