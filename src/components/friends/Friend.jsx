import React from "react";
import PropTypes from 'prop-types'
import { Online, Avatar, Name } from './Friends.styled'


export const Friend = ({isOnline, avatar, name}) => {
    return (
        <>
            <Online selected={isOnline===true}> </Online>
            <Avatar src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
        </>
    )
}

Friend.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}