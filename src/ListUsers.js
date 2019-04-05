import React from 'react'
import List from './List'
import { loadUsers, deleteUser } from './logic.js'

class ListUsers extends React.Component {
    state = {
        users: loadUsers(),
    }

    deleteUserAndReRender = (uuid) => {
        deleteUser(uuid)

        this.setState({
            users: loadUsers(),
        })
    }

    render() {
        return (
            <div>
                <List
                    deleteUserAndReRender={this.deleteUserAndReRender}
                    users={this.state.users}
                />
            </div>
        )
    }
}

export default ListUsers
