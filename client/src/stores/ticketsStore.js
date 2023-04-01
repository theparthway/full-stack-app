import create from 'zustand';
import axios from 'axios';

const ticketsStore = create((set) => ({
    tickets: null,

    form: {
        firstName: '',
        lastName: '',
        gender: ''
    },

    fetchTickets: async () => {
        console.log("before axios request from client");
        const res = await axios.get('/tickets');
        
        console.log("after");
    
        set({tickets: res.data.tickets});
    },

    handleFormUpdate: (e) => {
        const { name, value } = e.target;

        set((state) => {
            return {
                form: {
                    ...state.form,
                    [name]: value
                }
            }
        })
    },

    createTicket: async (e) => {
        e.preventDefault();

        const { form, tickets } = ticketsStore.getState();
    
        const res = await axios.post('/ticket', form);

        set({
            tickets: [...tickets, res.data.ticket],
            form: {
                firstName: "", 
                lastName: ""
            }
        });
    },

    deleteTicket: async (_id) => {
        await axios.delete('/ticket/' + _id);

        const tickets = ticketsStore.getState().tickets;

        const newTickets = tickets.filter(ticket => {
          return ticket._id !== _id;
        });

        set({ tickets: newTickets });
    
    }
}));

export default ticketsStore;