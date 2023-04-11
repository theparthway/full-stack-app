import { useEffect } from 'react';
import Tickets from '../components/Tickets';
import ticketsStore from '../stores/ticketsStore';


function TicketsPage() {
    const store = ticketsStore();

    useEffect(() => {
      store.fetchTickets();
    }, []);


    return (
        <div>
            <Tickets />
        </div>
  )
}

export default TicketsPage