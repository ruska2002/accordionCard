import "./moduleCard.css";
import Woman from "../../public/images/back2.svg";
import Accordion from "./Accordion";
import styled from "styled-components";
import Cube from "../../public/images/cubeSmall.png";

export default function Card() {
  return (
    <Container>
      <Illustration src={Woman} alt="woman illustration" />
      <Box src={Cube} />
      <Heading>FAQ</Heading>
      <Accordion />
    </Container>
  );
}

const Container = styled.main`
  background-color: white;
  padding: 13.2rem 2.4rem 4.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  border-radius: 23px;
  background-image: url("/images/mobileLine.svg");
  background-repeat: no-repeat;
  position: relative;
  background-position: left 55% top -6px;

  @media only screen and (min-width: 90rem) {
    padding: 6.5rem 9.5rem 8.3rem 47.5rem;
    background-image: url("/images/desktopLine.svg"), url("/images/back.svg");
    background-position: left -2rem top 0, left 0 top 8rem;
  }
`;

const Illustration = styled.img`
  position: absolute;
  top: 0;
  left: 35px;
  transform: translateY(-58%);
  width: 23.7rem;
  @media only screen and (min-width: 90rem) {
    display: none;
  }
`;

const Heading = styled.h1`
  color: #1e1f36;
  font-size: 3.2rem;
  font-weight: 700;
  @media only screen and (min-width: 90rem) {
    margin-left: -22rem;
  }
`;

const Box = styled.img`
  display: none;
  @media only screen and (min-width: 90rem) {
    display: block;
    position: absolute;
    top: 50%;
    left: -7rem;
  }
`;
