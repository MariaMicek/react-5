import React from 'react'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core'

const styles = {
    button: {
        margin: '20px'
    },
    blue: {
        backgroundColor: 'blue'
    }
}

const MUIButton = (props) => {

    const { classes } = props       //destrukturyzacja

    return (
        <div>
            <Button
                className={classes.button + ' ' + classes.blue}
                variant={'contained'}
            >
                MUIButton
        </Button>
            <Button
                className={classes.button}
                variant={'contained'}
            >
                MUIButton
        </Button>
        </div>
    )
}

export default withStyles(styles) (MUIButton)