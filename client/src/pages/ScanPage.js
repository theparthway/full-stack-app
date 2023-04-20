import { useState } from "react";
import { QrReader } from 'react-qr-reader';
import axios from 'axios';

const ScanPage = () => {
  const [data, setData] = useState("no result");
  const [startScan, setStartScan] = useState(false);
  
  let dat;
  let gotTickets = false;
  
  const handleScan = async (res, err) => {
    if (!gotTickets) {
      dat = await axios.get('/tickets', { withCredentials: true });
      console.log("retrieved all tickets");
      gotTickets = true;
    }


    if (!!res) {
      const filt = dat.data.tickets.filter(ticket => {return ticket._id === res?.text});
      console.log(filt);
      setData(filt[0]["firstName"]);

      setStartScan(false);

      // setData(res?.text);
    }
  }


  return (
    <>


      <button onClick={() => {
        setStartScan(!startScan);
      }}>
        {startScan ? "Stop Scan" : "Start Scan"}
      </button>

      {startScan && (
        <>
          <QrReader 
          onResult={handleScan}
          constraints={{facingMode: 'environment'}}
          />
        </>
      )}

      <p>{data}</p>
    </>
  )
}

export default ScanPage;