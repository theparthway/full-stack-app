import React from 'react'
import ticketsStore from '../stores/ticketsStore'

function CreateTicket() {
    const store = ticketsStore();

  return (
    <div className='px-40 py-10 text-center'>
    <h2 className='text-4xl py-5'>create ticket</h2>


    <form onSubmit={store.createTicket}>
      <input required placeholder='First Name' className='mb-5 w-64 h-11 rounded-lg text-center' onChange={store.handleFormUpdate} id="firstName" name="firstName" value={store.form.firstName} />
      <br />

      <input required placeholder='Last Name' className='mb-5 w-64 h-11 rounded-lg text-center' id="lastName" name="lastName" value={store.form.lastName} onChange={store.handleFormUpdate} />
      <br />

      <label className='mx-5'>Gender</label>
      <select className='my-5 w-24 rounded-lg text-center bg-gray-700 text-white' name="gender" onChange={store.handleFormUpdate} value={store.form.gender}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <br />

      <label className='mx-5'>Sold by</label>
      <select className='my-5 w-24 rounded-lg text-center bg-gray-700 text-white' name="soldBy" onChange={store.handleFormUpdate} value={store.form.soldBy}>
        <option value="abhinay">Abhinay</option>
        <option value="parth">Parth</option>
        <option value="reuben">Reuben</option>
      </select>
      <br />

      <label className='mx-5'>Payment mode</label>
      <select className='my-5 w-24 rounded-lg text-center bg-gray-700 text-white' name="payment" onChange={store.handleFormUpdate} value={store.form.payment}>Payment to {store.form.soldBy}
        <option value="cash">Cash</option>
        <option value="online">Online</option>
      </select>
      <br/>

      <label className='mx-5' value={store.label}></label>

      <button className='bg-gray-700 text-white hover:bg-white hover:text-gray-700 h-10 w-20 rounded-md' type="submit">Submit</button>
    </form>
  </div>
  )
}

export default CreateTicket