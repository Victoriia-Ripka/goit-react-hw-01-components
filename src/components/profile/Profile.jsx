import React from 'react';
import PropTypes from 'prop-types'
import { Card, Avatar, MainCard, Name, Info, List, ListItem, NumberText, NumberInfo} from './Profile.styled'

export const Profile = ( data ) => {
    const { avatar, username, tag, location, stats } = data
    return (
        <Card>
            <MainCard>
                <Avatar
                  src={avatar}
                  alt="User avatar"
                  className="avatar"
                />
                <Name className="name">{username}</Name>
                <Info className="tag">@{tag}</Info>
                <Info className="location">{location}</Info>
            </MainCard>
            <List>
                <ListItem>
                  <NumberText>Followers</NumberText>
                  <NumberInfo>{stats.followers}</NumberInfo>
                </ListItem>
                <ListItem>
                  <NumberText>Views</NumberText>
                  <NumberInfo>{stats.views}</NumberInfo>
                </ListItem>
                <ListItem>
                  <NumberText>Likes</NumberText>
                  <NumberInfo>{stats.likes}</NumberInfo>
                </ListItem>
            </List>
        </Card>
    );
}


Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired,
    }),
}