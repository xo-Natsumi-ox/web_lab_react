import styled from "styled-components";
import {Link} from "react-router-dom";


export const ItemStyle = styled.li`
  border: 2px solid #9900CC;
  border-radius: 10px;
  list-style-type: none;
  width: 300px;
  padding-bottom: 15px;
  margin-left: 10px;
  margin-top: 20px;
  margin-right: 10px;
`;

export const ItemImgStyle = styled.div`
  margin: 25px;
`;


export const ItemTitleStyle = styled.h3`
  margin: 10px 0 5px 0;
  text-align: center;
  font-size: 16px;
`;

export const ItemParagraphStyle = styled.p`
  font-size: 14px;
  padding: 0 20px;
  margin-bottom: 5px;
  text-align: center;
`;

export const ItemButtonsBlockStyle = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ItemButtonStyle = styled.button`
  width: 100px;
  margin-right: 20px;
  margin-left: 20px;
  height: 30px;
  padding: 0px;
  border-radius:5px;
  border-color:#660099;
  background-color:#660099;
  color:#FFCCFF;
`;

export const ItemButtonLinkStyle = styled(Link)`
  margin: 0 5px 0 auto;
`;