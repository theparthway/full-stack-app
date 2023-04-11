import React from 'react'
import ticketsStore from '../stores/ticketsStore'

function CreateTicket() {
    const store = ticketsStore();

  return (
    <div>
    <h2>create ticket</h2>
    <form onSubmit={store.createTicket}>
      <input onChange={store.handleFormUpdate} name="firstName" value={store.form.firstName} />
      <input name="lastName" value={store.form.lastName} onChange={store.handleFormUpdate} />
      <select name="gender" onChange={store.handleFormUpdate} value={store.form.gender}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <select name="soldBy" onChange={store.handleFormUpdate} value={store.form.soldBy}>
        <option value="abhinay">Abhinay</option>
        <option value="parth">Parth</option>
        <option value="reuben">Reuben</option>
      </select>
      <select name="payment" onChange={store.handleFormUpdate} value={store.form.payment}>Payment to {store.form.soldBy}
        <option value="cash">Cash</option>
        <option value="online">Online</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  </div>
  )
}

export default CreateTicket