import styled from 'styled-components';

const Featured = styled.div`
  display: flex;
  margin-right: -10px;
  margin-left: -10px;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
`;
const Item = styled.div`
display: flex;
width: 50%;
padding-right: 10px;
padding-left: 10px;
flex-direction: column;
align-items: center;
text-align: center;
`;
const Picture = styled.div`
display: block;
width: 300px;
height: 450px;
background-position; 50% 50%;
background-size: cover;
`;
export { Featured, Item, Picture };
