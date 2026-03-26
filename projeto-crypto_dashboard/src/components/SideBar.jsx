import { Box, Heading, HStack, Icon, Stack, Text, VStack } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { GrTransaction } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { Link, useLocation } from 'react-router-dom';

const SideBar = () => {

  const location = useLocation();

  console.log(location);

  const activeLink = (link) => {
    return location.pathname === link;
  };

  const navLinks = [
    {
      icon: RxDashboard,
      nome: "Central",
      link: "/central",
    },
    {
      icon: GrTransaction,
      nome: "Transações",
      link: "/transacoes",
    },
];

  return (
    <Stack bg="brand.bg" borderRight="1px solid" borderColor="whiteAlpha.200" justifyContent="space-between" pb="4" h="full" w={{
      base: "full",
      lg: "16rem",
    }} 
    boxShadow={{
      base:"none",
      lg: "sm",
    }}>
    <Box>
    <Heading textAlign="left" fontSize="1.50rem" as="h1" px="8" pt={{
      base: "4.00rem",
      lg: "1.25rem",
    }}>Crypto Finance</Heading>
    <VStack align="stretch" gap="3" mt="6" mx="6">
      {
       navLinks.map((nav) => (
        <Link to={nav.link} key={nav.nome}>
          <HStack key={nav.nome} py="4" px="4" gap="2" borderRadius="10px" bg={activeLink(nav.link) ? "brand.darkGold" : "brand.bg"} color={activeLink(nav.link) ? "brand.bg" : "#797E82"} _hover={{bg: "brand.darkGold", color: "brand.bg"}}>
            <Icon as={nav.icon} />
            <Text fontSize="14px" fontWeight="medium">{nav.nome}</Text>
          </HStack>
        </Link>
      ))}
      </VStack>
    </Box>
      <Box mt="6" mx="3">
        <Link to="/suporte">
          <HStack  py="4" px="4" borderRadius="10px" bg={activeLink("/suporte") ? "brand.darkGold" : "brand.bg"} color={activeLink("/suporte") ? "brand.bg" : "#797E82"} _hover={{bg: "brand.darkGold", color: "brand.bg"}}>
            <Icon as={BiSupport} />
            <Text fontSize="14px" fontWeight="bold">Suporte</Text>
          </HStack>
        </Link>
      </Box>
    </Stack>
    );
  };

export default SideBar;