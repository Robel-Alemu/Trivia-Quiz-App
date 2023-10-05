import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const CategorySkeleton = () => {
  return (
    <>
      <Card borderRadius={10}>
        <Skeleton borderRadius={10} height="110px" />
        <CardBody borderRadius={10} bg="#476a88">
          <SkeletonText />
        </CardBody>
      </Card>
    </>
  );
};

export default CategorySkeleton;
