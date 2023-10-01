import React from "react";
interface Props {
  score: number;
}

const ResultBoard = ({ score }: Props) => {
  return <div>{score}</div>;
};

export default ResultBoard;
