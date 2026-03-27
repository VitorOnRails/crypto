import { Box, Button, HStack, Heading, Icon, Menu } from "@chakra-ui/react"
import { FaCircleUser } from "react-icons/fa6";
import { LiaBarsSolid } from "react-icons/lia";


const TopNav = ({ title, onClick }) => {
  return (
   <Box boxShadow="" bg="brand.bg">
    <HStack maxW="8xl" w="full" mx="auto" h="16" justifyContent="space-between" px="9">
        <Box as="button" onClick={onClick} cursor="pointer" display={{ base: "flex", lg: "none"}}>
            <Icon as={LiaBarsSolid} boxSize="6" />
        </Box>
        <Heading fontWeight="medium" fontSize="2xl">{title}</Heading>
        <Menu.Root positioning={{ placement: "bottom-start", gutter: 4 }}>
        <Menu.Trigger asChild>
        <Button borderRadius="full" p="0" h="10" w="10" bg="#F5A623" color="black" _hover={{ bg: "#D48C1C" }}><Icon as={FaCircleUser} boxSize="8" /></Button>
        </Menu.Trigger>
        <Menu.Positioner>
        <Menu.Content cursor="pointer" minW="50">
            <Menu.Item value="logout" color="red.600" bg="red.50">Logout</Menu.Item>
            <Menu.Item value="support">Suporte</Menu.Item>
        </Menu.Content>
        </Menu.Positioner>
        </Menu.Root>
    </HStack>
   </Box>
  );
};

export default TopNav;