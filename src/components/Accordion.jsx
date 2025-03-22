import redLine from "../../public/Path 2.png";
import { useState } from "react";
import questions from "./questions.json";
import styled from "styled-components";

export default function Accordion() {
  const [active, setActive] = useState(null);

  return (
    <Question>
      {questions.map((question, index) => (
        <QuestionAnswerDiv
          className={active === index ? "active" : "nonactive"}
          key={index}
          onClick={() => setActive(active === index ? null : index)}
        >
          <QuestionHeader isActive={active === index}>
            {" "}
            {question.text}
            <img
              src={redLine}
              alt="arrow"
              style={{
                transform: active === index ? "rotate(180deg)" : "none",
                transition: "transform 0.3s ease",
              }}
            />
          </QuestionHeader>
          {active === index && (
            <Answer>
              <span>{question.minitext}</span>
            </Answer>
          )}
        </QuestionAnswerDiv>
      ))}
    </Question>
  );
}

const Question = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.9rem;
`;

const QuestionAnswerDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  width: 28rem;
  cursor: pointer;
  padding-bottom: 1.6rem;
  border-bottom: 1px solid #e8e8ea;
`;

const QuestionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ isActive }) => (isActive ? "#1E1F36" : "#4b4c5f")};
  font-size: 1.3rem;
  font-weight: ${({ isActive }) => (isActive ? "700" : "400")};
  transition: 0.1s;
  @media only screen and (min-width: 90rem) {
    &:hover {
      color: #f47b56;
    }
  }
`;

const Answer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-top: 1px solid #e8e8ea;
  padding-top: 0.5rem;
  color: #787887;
  font-size: 12px;
  font-weight: 400;
`;
