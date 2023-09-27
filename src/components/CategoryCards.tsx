import { Card, CardBody, Heading } from "@chakra-ui/react";
import { Categories } from "../utils/categories";

interface Props {
  categories: Categories;
  onSeletCategory: (category: number) => void;
}

const CategoryCards = ({ categories, onSeletCategory }: Props) => {
  return (
    <Card
      key={categories.id}
      onClick={() => onSeletCategory(categories.category)}
    >
      <CardBody>
        <Heading fontSize="1xl">{categories.name}</Heading>{" "}
      </CardBody>
    </Card>
  );
};

export default CategoryCards;
