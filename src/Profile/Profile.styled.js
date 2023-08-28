import styled from 'styled-components';

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 360px;
  background-color: #4aff9e;
  border: 1px solid #e9eef3;
  border-radius: 5px;
  box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.75);

  margin-top: 50px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 30px;
  padding-top: 20px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #006633;
`;

export const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border: 3px solid rgb(51, 255, 119);
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 2px 3px 5px 1px #227549;
  margin-bottom: 20px;
`;

export const UserName = styled.p`
  font-size: 28px;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 10px;
  text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
    1px 1px 1px rgba(0, 0, 0, 0.5), 2px 2px 2px rgba(0, 102, 51, 0),
    2px 2px 2px rgba(0, 102, 51, 0);
`;

export const UserTag = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 10px;
`;

export const UserLocation = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 10px;
`;

export const StatsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 0;
  margin: 0;
`;

export const Items = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 120px;
  text-align: center;
`;

export const Label = styled.span`
  font-size: 16px;
  font-weight: 400;
  padding-top: 10px;
`;

export const Quantity = styled.span`
  font-size: 20px;
  font-weight: 500;
  padding-bottom: 10px;
`;
