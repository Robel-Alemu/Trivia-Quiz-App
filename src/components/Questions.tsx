import useQuestion, { Question } from "../hooks/useQuestions";

interface Props {
  data: Question[];
}
const Questions = ({ data }: Props) => {
  return (
    <>
      <div>
        <h1>{data[0].question}</h1>
        <p>{data[0].correct_answer}</p>
        {data[0].incorrect_answer.map((answer: string) => (
          <p>{answer}</p>
        ))}
      </div>
    </>
  );
};

export default Questions;
