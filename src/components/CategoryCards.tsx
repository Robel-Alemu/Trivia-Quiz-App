import { Card, CardBody, Heading, Img } from "@chakra-ui/react";
import { Categories } from "../utils/categories";
import styles from "../components/CategoryCard.module.css";

interface Props {
  categories: Categories;
  onSeletCategory: (category: number) => void;
}

const CategoryCards = ({ categories, onSeletCategory }: Props) => {
  return (
    <Card
      className={styles.grow}
      borderRadius={15}
      key={categories.id}
      onClick={() => onSeletCategory(categories.category)}
    >
      <Img borderRadius={15} src={categories.image} />
      <CardBody>
        <Heading fontSize="1xl">{categories.name}</Heading>{" "}
      </CardBody>
    </Card>
  );
};

export default CategoryCards;
