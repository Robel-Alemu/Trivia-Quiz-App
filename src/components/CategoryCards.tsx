import { Card, CardBody, Heading, Image, Img } from "@chakra-ui/react";
import { Categories } from "../utils/categories";
import film from "../assets/denise-jans-tV80374iytg-unsplash.jpg";
interface Props {
  categories: Categories;
  onSeletCategory: (category: number) => void;
}

const CategoryCards = ({ categories, onSeletCategory }: Props) => {
  return (
    <Card
      borderRadius={10}
      key={categories.id}
      onClick={() => onSeletCategory(categories.category)}
    >
      <Img borderRadius={10} src={categories.image} />
      <CardBody>
        <Heading fontSize="1xl">{categories.name}</Heading>{" "}
      </CardBody>
    </Card>
  );
};

export default CategoryCards;
