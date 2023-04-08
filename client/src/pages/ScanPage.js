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
      setData(res?.text);
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
      {store.tickets && store.tickets.map(ticket => {
          return <div key={ticket._id}>
            <h4>{ticket.firstName}</h4>
            <h4>{ticket.lastName}</h4>
            <button onClick={() => {store.deleteTicket(ticket._id)}}>Delete</button>
          </div>
        })}
    </>
  )
}

export default ScanPage;