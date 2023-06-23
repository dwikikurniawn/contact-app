import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate, useParams } from 'react-router';
import { getContacts, contactSelectors, updateContact } from '../features/contact/contactSlice';

const UpdateContact = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [photo, setPhoto] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();

    const contact = useSelector((state) => contactSelectors.selectById(state, id));

    useEffect(() => {
        dispatch(getContacts());
    }, [dispatch]);

    useEffect(() => {
        if(contact){
            setFirstName(contact.firstName);
            setLastName(contact.lastName);
            setAge(contact.age)
            setPhoto(contact.photo)
        }
    }, [contact]);

    const handleUpdate = async(e) => {
        e.preventDefault();
        await dispatch(updateContact({id, firstName, lastName, age, photo}));
        alert("Contact updated.");
        navigate('/contacts')
    }

  return (
    <div>
        <form onSubmit={handleUpdate}>
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
                <button className='button is-warning'>Update</button>
            </div>
        </form> 
    </div>
  )
}

export default UpdateContact;
