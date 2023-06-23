import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router'; 
import { saveContact } from '../features/contact/contactSlice';

const AddContact = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [photo, setPhoto] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const addNewContact = async (e) => {
        e.preventDefault();
        await dispatch(saveContact({firstName, lastName, age, photo}));
        alert("New contacts added.");
        navigate("/contacts");
    }

  return (
    <div>
        <form onSubmit={addNewContact}>
            <div className="field">
                <label className="label">First Name</label>
                <div className="control">
                    <input type="text" 
                    className="input" 
                    placeholder='First Name'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}/>
                </div>
            </div>
            <div className="field">
                <label className="label">Last Name</label>
                <div className="control">
                    <input type="text" 
                    className="input" 
                    placeholder='Last Name'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}/>
                </div>
            </div>
            <div className="field">
                <label className="label">Age</label>
                <div className="control">
                    <input type="text" 
                    className="input" 
                    placeholder='Age'
                    value={age}
                    onChange={(e) => setAge(e.target.value)}/>
                </div>
            </div>
            <div className="field">
                <label className="label">Photo</label>
                <div className="control">
                    <input type="text" 
                    className="input" 
                    placeholder='Photo'
                    value={photo}
                    onChange={(e) => setPhoto(e.target.value)}/>
                </div>
            </div>
            <div className="field">
                <button className='button is-warning'>Create</button>
            </div>
        </form> 
    </div>
  )
}

export default AddContact;
