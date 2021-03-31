// actions
import { CREATE_CONTACT,UPDATE_CONTACT, DELETE_CONTACT } from '../constant/Type'
import { GET_CONTACT } from '../constant/Type'

export const ActionContact = (contact) => {
    return {
      type: CREATE_CONTACT,
      payload: contact,
    }
}


export const getContact = (id) => ({
  type: GET_CONTACT,
  payload:id,
})

 export const updatecontact = (contact) => ({
  type: UPDATE_CONTACT,
  payload: contact,
})

export const deletecontact = (id) => ({
  type: DELETE_CONTACT,
  payload:id,
})


//rxa