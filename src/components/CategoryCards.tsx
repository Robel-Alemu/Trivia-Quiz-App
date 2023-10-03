import { Box, Card, CardBody, Heading, Img } from "@chakra-ui/react";
import { Categories } from "../utils/categories";
import styles from "../components/CategoryCard.module.css";

interface Props {
  categories: Categories;
  onSeletCategory: (category: number) => void;
}

const CategoryCards = ({ categories, onSeletCategory }: Props) => {
  return (
    <Box
      borderRadius={10}
      borderColor="whiteAlpha.900"
      overflow="hidden"
      className={styles.grow}
    >
      <Card
        backgroundColor="#3c8ca7"
        key={categories.id}
        onClick={() => onSeletCategory(categories.category)}
      >
        <Img borderRadius={10} src={categories.image} />
        <CardBody backgroundColor="#3c8ca7">
          <Heading backgroundColor="#3c8ca7" fontSize="1xl">
            {categories.name}
          </Heading>
        </CardBody>
      </Card>
    </Box>
  );
};

export default CategoryCards;
