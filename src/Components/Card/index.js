import React from "react";
import styled from "styled-components";
import Image from "react";

const StyledCard = styled.div`
  background-color: black;
  width: 300px;
  height: 400px;
  box-shadow: 5px 10px 8px #888888;
`;

const Card = (props) => {
  return (
    <StyledCard>
      {/* <Image source={props.src} /> */}
      <h1>{props.header}</h1>
      <h2>{props.weather}</h2>
    </StyledCard>
  );
};

export default Card;
