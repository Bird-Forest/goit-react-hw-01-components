import { styled } from 'styled-components';

export const FriendList = styled.ul`
  display: flex;
  flex-direction: column;
  max-width: 360px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
`;

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /* max-width: 360px; */
  width: 100%;
  height: 50px;
  background-color: #4aff9e;
  border: 1px solid #e9eef3;
  border-radius: 5px;
  box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.75);
  margin-top: 0;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 10px;
`;

export const FriendAvatar = styled.img`
  display: block;
  width: 50px;
  height: 50px;
  /* border: 1px solid;
  box-shadow: 2px 3px 5px 1px #227549; */
  border-radius: 50%;
  object-fit: cover;
  margin-left: 10px;
  margin-right: 40px;
`;

export const FriendName = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: #006633;
  margin-right: auto;
`;
export const FriendStatus = styled.span`
  background: ${props => (props.$isOnline ? 'green' : 'red')};
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 20px;
`;
