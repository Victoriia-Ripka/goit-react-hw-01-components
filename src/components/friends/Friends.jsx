import React from "react";
import PropTypes from 'prop-types'
import { Friend } from './Friend'

export const FriendList = ( {friends} ) => {
    return (
        <ul className="friend-list">
            {friends.map(friend => (
                <li className="item" key={friend.id}>
                    <Friend 
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    />
                </li>
            ))}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        })
    )
}