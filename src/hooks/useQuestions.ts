import { CanceledError } from "axios";
import apiClient from "../services/api-client";
import { useEffect, useState } from "react";

export interface Question {
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

interface Response {
  response_code: number;
  results: Question[];
}
const useQuestion = (category: number | null) => {
  const [data, setdata] = useState(<Question[]>[]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get<Response>("", { params: { amount: 10, category: category } })
      .then((res) => {
        setdata(res.data.results);
        setIsLoading(false);
        console.log(data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err);
        setIsLoading(false);
      });
  }, [category]);
  console.log(data);
  return { data, error, isLoading };
};

export default useQuestion;
