import React from "react";
import PropTypes from 'prop-types'

export const Friend = ({isOnline, avatar, name}) => {
    return (
        <>
            <span className="status">{isOnline}</span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </>
    )
}

Friend.propsType = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}