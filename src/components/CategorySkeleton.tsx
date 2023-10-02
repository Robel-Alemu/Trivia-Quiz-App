import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const CategorySkeleton = () => {
  return (
    <>
      <Card>
        <Skeleton height="170px" />
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Card>
    </>
  );
};

export default CategorySkeleton;
