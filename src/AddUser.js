import React from 'react'
import { User, saveUser } from './logic.js'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const styles = {
    input: {
        margin: '10px'
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        margin: '10px',
        height: '45px'
    }
}

class AddUser extends React.Component {
    state = {
        name: '',
        email: '',
        avatar: ''
    }

    inputChangeHandler = (statePropName) => (event) => this.setState({
        [statePropName]: event.target.value
    })

    buttonClickHandler = () => {
        if (!this.state.name) return
        if (!this.state.email) return

        const user = new User(this.state.name, this.state.email, this.state.avatar)
        saveUser(user)
    }

    render() {
        return (
            <div
            style={styles.container}            
            >
                <TextField
                    style={styles.input}
                    id={'outlined-dense'}
                    label={'Wpisz imię'}
                    margin={'dense'}
                    variant={'outlined'}
                    value={this.state.value}
                    onChange={this.inputChangeHandler('name')}
                />
                <TextField
                    style={styles.input}
                    id={'outlined-dense'}
                    label={'Wpisz e-mail'}
                    margin={'dense'}
                    variant={'outlined'}
                    value={this.state.value}
                    onChange={this.inputChangeHandler('email')}
                />
                <TextField
                    style={styles.input}
                    id={'outlined-dense'}
                    label={'Wpisz URL zdjęcia'}
                    margin={'dense'}
                    variant={'outlined'}
                    value={this.state.value}
                    onChange={this.inputChangeHandler('avatar')}
                />
                <Button
                    style={styles.button}
                    variant={'contained'}
                    size={'large'}
                    onClick={() => this.buttonClickHandler()}
                >
                    DODAJ
                </Button>
            </div>
        )
    }
}

export default AddUser