import { makeStyles } from '@material-ui/core/styles'

export default makeStyles({
    root : {
        width : '90%',
        margin : 'auto',
        marginBottom : '1.5em',
    },
    gridItem : {
        padding : '.5em',
    },
    gridContainer : {
        display : 'grid',
        gridTemplateColumns : 'repeat(12, 1fr)',
        gap : '.5em',
        padding : '1em',
    },
    image : {
        display: 'block',
        width : 200,
        margin: 'auto'

    },
    
})