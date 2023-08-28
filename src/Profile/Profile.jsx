import PropTypes from 'prop-types';
import {
  ProfileCard,
  Description,
  Avatar,
  UserName,
  UserTag,
  UserLocation,
  StatsList,
  Items,
  Label,
  Quantity,
} from './Profile.styled';

export function Profile({
  username = 'User Name',
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <ProfileCard>
      <Description>
        <Avatar src={avatar} alt="User avatar" width={100} height={100} />
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </Description>

      <StatsList>
        <Items>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </Items>
        <Items>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </Items>
        <Items>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </Items>
      </StatsList>
    </ProfileCard>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
