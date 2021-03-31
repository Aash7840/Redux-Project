import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getContact, updatecontact  } from '../../action/ActionContact';
import { useHistory, useParams } from 'react-router-dom'
import shortid from "shortid";

const EditContact = () => {
    let { id } = useParams();
    let history = useHistory();
    const dispatch = useDispatch();
    const contact = useSelector((state)=>state.contacts.contact);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() =>{
        if(contact !=null){
            setName(contact.name);
            setPhone(contact.phone);
            setEmail(contact.email);
        }
        dispatch(getContact(id));
    },[contact]);

    const onUpdateContact = (e) => {
        e.preventDefault();

        const Update_Contact =  Object.assign(contact, {name: name, phone: phone, email: email})
        dispatch(updatecontact(Update_Contact));
        history.push("/")

    }
     
  

    return (
        <div className="card border-0 shadow">
            <div className="card-header">Update Contact</div>
            <div className="card-body">
                <form onSubmit= {(e) => onUpdateContact(e)} >
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <button className="btn btn-warning">Update Contact</button>
                </form>
            </div>

        </div>
    )
}

export default EditContact

