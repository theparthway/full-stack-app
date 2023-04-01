import { useEffect } from 'react';
import Tickets from '../components/Tickets';
import CreateTicket from '../components/CreateTicket';
import ticketsStore from '../stores/ticketsStore';


function TicketsPage() {
    const store = ticketsStore();

    useEffect(() => {
      store.fetchTickets();
    }, []);


    return (
        <div>
            <Tickets />
            <CreateTicket />
        </div>
  )
}

export default TicketsPage