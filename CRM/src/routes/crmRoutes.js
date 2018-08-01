import { addNewContact, getContacts, getContactByID, updateContact, deleteContact } from '../controllers/crmController';

const routes = (app) => {
    app.route('/contact')
    .get((req, res, next) => {
        //middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, getContacts)
    
    // POST endpoint
    .post(addNewContact);

    app.route('/contact/:contactId')
    // GET one by ID
    .get(getContactByID)

    .put(updateContact)

    .delete(deleteContact);
}

export default routes;