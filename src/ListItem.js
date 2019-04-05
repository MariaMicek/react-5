import React from 'react'
import Button from '@material-ui/core/Button'
import userPlaceholder from './user.svg'

const styles = {
    main: {
        display: 'flex',
        width: '70%',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '10px auto'
    },
    img: {
        width: '50px',
        height: '50px',
        borderRadius: '50%'
    },
    button: {
        padding: '5px',
        minWidth: '40px',
        minHeight: '40px'
    }
}

const ListItem = (props) => {

    return (
        <div
            style={styles.main}
        >
            <img
                style={styles.img}
                src={props.user.avatar || userPlaceholder}
                alt={props.user.name}
            />
            <div>
                <p>{props.user.name}</p>
                <p>{props.user.email}</p>
            </div>
            <Button
                style={styles.button}
                variant={'contained'}
                onClick={() => props.deleteUserAndReRender(props.user.uuid)}
            >
                x
            </Button>
        </div>
    )

}

export default ListItem