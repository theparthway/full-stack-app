import ticketsStore from "../stores/ticketsStore";

export default function Tickets() {
    const store = ticketsStore();

    return (
        <div>
        <h2>tickets:</h2>
        {store.tickets && store.tickets.map(ticket => {
          return <div key={ticket._id}>
            <h4>{ticket.firstName}</h4>
            <h4>{ticket.lastName}</h4>
            <button onClick={() => {store.deleteTicket(ticket._id)}}>Delete</button>
          </div>
        })}
      </div>
    )
}