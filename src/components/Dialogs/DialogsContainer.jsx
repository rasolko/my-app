import React from 'react';
import { addMessageCreator, updateNewMessageBodyCreator } from './../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewTextMessage: (text) => {
            dispatch(updateNewMessageBodyCreator(text));
        },
        sendMessage: () => {
            dispatch(addMessageCreator());
        }
    }
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs);