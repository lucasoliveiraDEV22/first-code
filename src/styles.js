import styled from "styled-components";
import Background from "./assets/background1.svg";

export const Container = styled.div`
  background: url("${Background}");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const Image = styled.img`
  margin-top: 30px;
`;

export const ContainerItems = styled.div`
  width: 414px;
  height: 896px;
  background: linear-gradient(
    157.44deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );
  display: flex;
  flex-direction: column;
  padding: 50px 36px;
  border-radius: 61px 61px 0px 0px;
`;

export const H1 = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 40px;
  margin-bottom: 80px;
  /* identical to box height */

  text-align: center;

  color: #ffffff;

`;

export const InputLabel = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  width: 47px;
  height: 22px;
  color: #eeeeee;
  /* identical to box height, or 122% */

  display: flex;
  align-items: center;
  letter-spacing: -0.408px;
  padding-left: 25px;
`;

export const Input = styled.input`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  border: none;
  outline: none;
  width: 342px;
  height: 58px;
  margin-bottom: 34px;
  padding-left: 25px;
  color: #ffffff;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
`;

export const Button = styled.button`
  width: 342px;
  height: 74px;
  left: 35px;
  top: 497px;

  /* Templates 5/Color 1 */
  background: rgba(0, 0, 0, 0.8);
  border-radius: 14px;
  border: none;
  cursor: pointer;
  outline: none;
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 28px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  &:hover {
    opacity: 0.5;
  }
  &:active {
    opacity: 0.8;
  }
`;
export const User = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 342px;   
  height: 58px;

  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;

  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;

  margin-top: 30px;

  color: #ffffff;

  button{
    background:none;
    border:none;
    cursor: pointer;
  }
`;
