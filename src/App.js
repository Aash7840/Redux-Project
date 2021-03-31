import React from 'react';
import './App.scss';
import Navbar from './components/layout/Navbar';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import { Provider } from 'react-redux';
import store from './Store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EditContact from './components/contacts/EditContact';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />

          <div className="container">
            <div className="py-3">
              <Switch>
                            <Route exact path ="/" component={Contacts} />
                            <Route exact path="/add/contact" component={AddContact} />
                            <Route exact path="/edit/contact/:id" component={EditContact} />
                           
              </Switch>

            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
