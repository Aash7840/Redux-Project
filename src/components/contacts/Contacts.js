import React,{useState} from 'react'
import { useSelector } from 'react-redux';
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deletecontact } from '../../action/ActionContact';
//  using template litrals in line 40
const Contacts = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.contacts)
    return (
        <div>
            <table class="table shadow">
                <thead className="bg-primary text-white">
                    <tr>
                        <th>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" 
                               
                                />
                                <label className="custom-control-label" ></label>
                            </div>

                        </th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>E-mail</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        contacts.map((contact) => (
                            <tr>
                                <th scope="row"><div className="custom-control custom-checkbox">
                                    <input id="selectAll" type="checkbox" className="custom-control-input" />
                                    <label htmlFor="selectAll" className="custom-control-label" ></label>
                                </div></th>
                                <td> <Avatar className="mr-2" name={contact.name} size="40" round={true} /> {contact.name}</td>
                                <td>{contact.phone}</td>
                                <td>{contact.email}</td>
                                <td className="Action">
                                    <Link to={`/edit/contact/${contact.id}`}>

                                        <span className="material-icons mr-2">edit</span>
                                    </Link>
                                    <Link to="/">
                                        <span className="material-icons" onClick={() => dispatch(deletecontact(contact.id))}>remove_circle</span>
                                    </Link>
                                </td>
                            </tr>
                        ))





                    }

                </tbody>
            </table>
        </div>
    )
}

export default Contacts
