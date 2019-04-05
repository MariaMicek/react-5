import React from 'react'
import ListItem from './ListItem'

const List = (props) => {
    return (
        <div>
            {
                props.users.map(
                    user => (
                        <ListItem
                            deleteUserAndReRender={props.deleteUserAndReRender}
                            key={user.uuid}
                            user={user}
                        />
                    )
                )
            }
        </div>
    )
}

export default List