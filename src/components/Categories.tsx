import { SimpleGrid } from "@chakra-ui/react";
import categories from "../utils/categories";
import CategoryCards from "./CategoryCards";

const Categories = () => {
  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={8}
      >
        {" "}
        {categories.map((category) => (
          <CategoryCards categories={category} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default Categories;
