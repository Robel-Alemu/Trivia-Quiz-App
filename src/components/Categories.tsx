import { SimpleGrid } from "@chakra-ui/react";
import categories from "../utils/categories";
import CategoryCards from "./CategoryCards";
import { useState } from "react";
import useQuestion from "../hooks/useQuestions";
import Questions from "./Questions";

const Categories = () => {
  const [category, setCategory] = useState<number | null>(null);
  const { data } = useQuestion(category);
  console.log(data);
  if (data && category) {
    return <Questions data={data} />;
  }
  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={8}
      >
        {" "}
        {categories.map((category) => (
          <CategoryCards
            key={category.id}
            onSeletCategory={(category) => setCategory(category)}
            categories={category}
          />
        ))}
      </SimpleGrid>
    </>
  );
};

export default Categories;
