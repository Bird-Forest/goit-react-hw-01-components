import styled from 'styled-components';
import { getRandomHexColor } from '../helper/randomColor';

export const TitleStat = styled.h2`
  font-size: 28px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  color: #006633;

  text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
    1px 1px 1px rgba(0, 0, 0, 0.5), 2px 2px 2px rgba(0, 102, 51, 0),
    2px 2px 2px rgba(0, 102, 51, 0);

  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
`;

export const StatList = styled.ul`
  display: flex;
  max-width: 360px;
  background-color: #4aff9e;
  border: 1px solid #e9eef3;
  border-radius: 5px;
  box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.75);
  margin-top: 0;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 30px;
  padding: 10px;
`;
export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  width: 100%;
  height: 100%;

  color: #fff;
  background-color: ${props => getRandomHexColor(props.id)};
  padding-top: 10px;
  padding-bottom: 10px;
`;
export const StatLabel = styled.span`
  font-size: 12px;
  font-weight: 500;
`;
export const StatPercentage = styled.span`
  font-size: 16px;
  font-weight: 700;
`;
