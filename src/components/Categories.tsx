import { Grid, GridItem, Heading, Show, SimpleGrid } from "@chakra-ui/react";
import categories from "../utils/categories";
import CategoryCards from "./CategoryCards";
import { useState } from "react";
import useQuestion from "../hooks/useQuestions";
import Questions from "./Questions";
import Aside from "./Aside";

const Categories = () => {
  const [category, setCategory] = useState<number | null>(null);
  const asideWidth = category == null ? "40%" : "";
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
        <Show above="lg">
          <Aside />
        </Show>

        <GridItem area="main" marginRight={3}>
          <Heading textAlign="center" margin={10}>
            Please select a category
          </Heading>
          <SimpleGrid
            columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
            padding="10px"
            // marginY="5%"
            // overflow="hidden"
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
