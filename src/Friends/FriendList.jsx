import {
  FriendList,
  FriendItem,
  FriendAvatar,
  FriendName,
  FriendStatus,
} from './FriendList.styled';

export function Friends({ friends }) {
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
