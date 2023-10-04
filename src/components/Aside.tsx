import { Img, VStack } from "@chakra-ui/react";
import welcome from "../assets/welcome3.gif";

const Aside = () => {
  return (
    <VStack marginTop={40}>
      <Img
        marginTop="15%"
        borderRadius={20}
        src={welcome}
        width="300px"
        height="300px"
      />
    </VStack>
  );
};

export default Aside;
