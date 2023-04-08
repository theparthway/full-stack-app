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
      console.log(store.tickets);
      console.log(res.text);
      const dat = store.tickets.filter(ticket => {return ticket._id === res.text});
      setData(dat);
    }

    if (!!err) {
      console.error(err);
      setData("error in reading" + err);

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