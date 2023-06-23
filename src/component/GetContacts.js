import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { deleteContact, getContacts, contactSelectors } from '../features/contact/contactSlice'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const GetContact = () => {

    const dispatch = useDispatch();
    const contacts = useSelector(contactSelectors.selectAll);
    const [contactsData, setContactsData] = useState([]);

    useEffect(() => {
        dispatch(getContacts());
    }, [dispatch]);
    
    return (
    <div className='box mt-5'>
        <Link to="/contacts/add" class="button is-success">Add new</Link>
        <table className='table is-striped is-fullwidth'>
            <thead class="thead-dark">
                <tr>
                    <th>No</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>photo</th>
                    <th>Actions</th>
                </tr>
            </thead>
                <tbody>
                    {contacts.map((contact, index) => (
                    <tr key= {contact.id}>
                    <td>{index + 1}</td>
                    <td>{contact.firstName}</td>
                    <td>{contact.lastName}</td>
                    <td>{contact.age}</td>
                    <td><img src={contact.photo} width={50}/></td>
                    <td>
                        <Link to={`/contacts/update/${contact.id}`} className='button is-primary is-small'>Edit</Link>
                        <button onClick={() => dispatch(deleteContact(contact.id))} className='button is-danger is-small'>Delete</button>
                    </td>
                </tr>
                    ))}
                </tbody>
        </table>
    </div>
  )
}

export default GetContact;
