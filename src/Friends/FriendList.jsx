import PropTypes from 'prop-types';
import friends from '../data/friends.json';
import {
  FriendList,
  FriendItem,
  FriendAvatar,
  FriendName,
  FriendStatus,
} from './FriendList.styled';

export function Friends() {
  return (
    <FriendList>
      {friends.map(({ avatar, name, id, isOnline }) => {
        return (
          <FriendItem key={id}>
            <FriendAvatar src={avatar} alt={name} />
            <FriendName>{name}</FriendName>
            <FriendStatus $isOnline={isOnline}></FriendStatus>
          </FriendItem>
        );
      })}
    </FriendList>
  );
}

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
