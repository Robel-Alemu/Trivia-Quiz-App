import { Card, CardBody, Heading } from "@chakra-ui/react";
import React from "react";
import { Categories } from "../utils/categories";
interface Props {
  categories: Categories;
}

const CategoryCards = ({ categories }: Props) => {
  return (
    <Card>
      <CardBody>
        <Heading fontSize="1xl">{categories.name}</Heading>{" "}
      </CardBody>
    </Card>
  );
};

export default CategoryCards;
