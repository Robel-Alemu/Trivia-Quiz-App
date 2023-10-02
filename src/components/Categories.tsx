import { Grid, GridItem, Show, SimpleGrid } from "@chakra-ui/react";
import categories from "../utils/categories";
import CategoryCards from "./CategoryCards";
import { useState } from "react";
import useQuestion from "../hooks/useQuestions";
import Questions from "./Questions";

const Categories = () => {
  const [category, setCategory] = useState<number | null>(null);
  const asideWidth = category == null ? "30%" : "";
  const { data } = useQuestion(category);
  console.log(data);
  if (data && category) {
    return <Questions data={data} />;
  }
  return (
    <>
      <Grid
        templateAreas={{
          base: `"main"`,
          lg: ` " aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: asideWidth + "1fr",
        }}
      >
        <Show above="lg"></Show>

        <GridItem area="main" marginRight={3} marginBottom={10}>
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
        </GridItem>
      </Grid>
    </>
  );
};

export default Categories;
