import { makeStyles } from  '@material-ui/core/styles'

const centeredStyleObj = {
    display : 'flex',
    justifyContent : 'center'
}

export default makeStyles({
    container : {
        height : '90vh',
        flexDirection : 'column',
        alignItems : 'center',
        ...centeredStyleObj,
    },
    cardContainer : {
        ...centeredStyleObj,
        flexDirection : 'column',
        padding : '3em'
    },
    titleContainer : {
        marginBottom : '1em'
    },
    title : {
        marginRight : '.2em'
    },
    btnContainer : {
        ...centeredStyleObj,
        marginTop : '1em'
    },
    btnSearch : {
        marginLeft : '1em'
    },
    movieIcon : {
        fontSize : '3em'
    }

})