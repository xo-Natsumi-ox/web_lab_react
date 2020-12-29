import styled from "styled-components";

export const CartItemLiStyle = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  border: 2px solid #660099;
  border-radius: 5px;
  list-style-type: none;
  margin-top: 30px;
`;

export const CartItemImgStyle = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  height: 100%;
`;

export const CartItemTitleStyle = styled.h5`
  width: 500px;
`;

export const CartItemCounterStyle = styled.div`
  display: flex;
`;

export const CartItemPriceDeleteBlockStyle = styled.div`
  display: flex;
  margin-right:20px;
  margin-left:60px;
`;

export const CartItemButtonStyle = styled.button`
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border-radius:5px;
  background-color:#660099;
  color:#FFCCFF;
`;

export const CartItemCountNumStyle = styled.p`
  margin: 0 10px;
`;

export const CartItemPriceStyle = styled.p`
  margin: 0 20px 0 auto;
`;