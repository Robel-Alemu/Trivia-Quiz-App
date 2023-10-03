import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const CategorySkeleton = () => {
  return (
    <>
      <Card borderRadius={15}>
        <Skeleton borderRadius={15} height="150px" />
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Card>
    </>
  );
};

export default CategorySkeleton;
