import ticketsStore from "../stores/ticketsStore";
import QR from "./QR";

export default function Tickets() {
    const store = ticketsStore();

    return (
        <div className="px-40 py-10">
        <h2 className=" text-4xl py-5">tickets:</h2>
        <table className="border-2 border-black text-center">
          <thead className="border-2 border-black"><tr><th className="px-32">First Name</th><th className="px-32">Last Name</th><th className="px-10">Ticket QR</th><th className="px-16">Delete</th></tr></thead>
          {store.tickets && store.tickets.map(ticket => {
            return (
              <tbody className="my-4" key={ticket._id}>
                <tr>
                  <td><h4>{ticket.firstName}</h4></td>
                  <td><h4>{ticket.lastName}</h4></td>
                  <td><QR id={ticket._id} /></td>
                  <td><button className="bg-gray-700 text-white rounded-md hover:bg-slate-500 hover:text-black h-10 w-20" onClick={() => {store.deleteTicket(ticket._id)}}>Delete</button></td>
                </tr>
              </tbody>
            )
          })}
        </table>
      </div>
    )
}