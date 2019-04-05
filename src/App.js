import React from 'react'
// import Buttons from './Buttons';
import './logic'
import AddUser from './AddUser'
import ListUsers from './ListUsers'

import { BrowserRouter, Route, Link } from 'react-router-dom'

const App = () => (
    <div>
        {/* <Buttons /> */}
        <BrowserRouter>
            <ul>
                <li>
                    <Link to={'/'}>
                        LISTA
                    </Link>
                </li>
                <li>
                    <Link to={'/add-user'}>
                        DODAJ UŻYTKOWNIKA
                    </Link>
                </li>
            </ul>
            <Route exact path='/' component={ListUsers} />
            <Route exact path='/add-user' component={AddUser} />
        </BrowserRouter>
    </div>
)

export default App