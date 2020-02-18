import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './DialogItem.module.css';

const DialogItem = (props) => {
    return (
        <div>
            <NavLink to={`/dialogs/${props.id}`} className={s.dialog} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}
export default DialogItem;