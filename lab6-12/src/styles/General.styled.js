import styled from "styled-components";
import {Spinner} from "react-bootstrap";

export const ContainerStyle = styled.div`
  padding: 0px 20px;
  margin: 0 auto;
  max-width: 1110px;
  padding-top: 60px;

`;

export const WrapperToDownFooterStyle = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

export const FilterButtonStyle = styled.button`
  width: 80px;
  margin-right: 20px;
  margin-left: 20px;
  height: 30px;
  padding: 0px;
  border-radius:5px;
  background-color:#660099;
  color:#FFCCFF;
`;

export const SignOutButtonStyle = styled.button`
  width: 80px;
  height: 30px;
  font-size: 14px;
  margin-top:30px;
  padding:0;
  border-radius:5px;
  background-color:#660099;
  color:#FFCCFF;
`;

export const SpinnerBlockStyle = styled.div`
  width: 100%;
  margin-top: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerStyle = styled(Spinner)`
  width: 150px;
  height: 150px;
  color: #5bc0de;
`;
