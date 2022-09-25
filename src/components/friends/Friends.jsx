import React from "react";
import PropTypes from 'prop-types'
import { Friend } from './Friend'
import { ListOfFiends, ItemofFriends} from './Friends.styled'

export const FriendList = ( {friends} ) => {
    return (
        <ListOfFiends>
            {friends.map(friend => (
                <ItemofFriends key={friend.id}>
                    <Friend 
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    />
                </ItemofFriends>
            ))}
        </ListOfFiends>
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