import { HStack, Icon, Stack, Text, Tag, Button } from "@chakra-ui/react"
import { IoIosInformationCircleOutline } from "react-icons/io";
import { HiChevronDoubleDown, HiChevronDoubleUp } from "react-icons/hi";


const BalanceSection = ({ wallet, btc, totalBalance }) => {

    const formatBRL = (val) => {
        return new Intl.NumberFormat("pt-BR", {
            style: "currency",  
            currency: "BRL",
        }).format(val);
    };

    const formatBTC = (val) => {
        return Number(val).toLocaleString("pt-BR", {
            minimumFractionDigits: 8,
            maximumFractionDigits: 8
        });
    };

  return (
    <Stack justify="space-between" w="full" bg="brand.cardBg" border="1px solid" borderColor="whiteAlpha.200" borderRadius="lg" p="6"
    flexDir={{
        base: "column",
        lg: "row",
    }}
    align={{
        base: "flex-start",
        lg: "center",
    }}
    gap={{ base: "6", lg: "0" }} 
    >
     <Stack>
        <HStack color="text.secondary">
            <Text fontSize="sm" fontWeight="medium">Valor Total da Carteira</Text>
            <Icon fontSize="1.20rem" as={IoIosInformationCircleOutline} />
        </HStack>
        <Text textStyle="h2" fontWeight="bold" color="text.primary">
            {formatBRL(totalBalance)}
        </Text>
     </Stack>

     <Stack>
      <Text fontSize="sm" fontWeight="medium" color="text.secondary">Saldo em BTC</Text>
      <HStack>
        <Text textStyle="h2" fontWeight="bold" color="text.primary">
           {formatBTC(btc)}
        </Text>
        <Tag.Root size="sm" bg="whiteAlpha.200" borderRadius="full" px="2">
            <Tag.Label fontWeight="bold" color="brand.gold" textStyle="xs">BTC</Tag.Label>
        </Tag.Root>
       </HStack>
     </Stack>

     <Stack>
        <Text color="text.secondary" fontSize="sm" fontWeight="medium">Saldo em Conta</Text>
        <HStack gap="2">
          <Text textStyle="h2" fontWeight="bold" color="text.primary">
            {formatBRL(wallet)}
          </Text>
          <Tag.Root size="sm" bg="whiteAlpha.200" borderRadius="full" px="2">
            <Tag.Label color="gray.400" fontWeight="bold" textStyle="xs">BRL</Tag.Label>
          </Tag.Root>
        </HStack>
      </Stack>

    <Stack flexDir={{ base: "column", lg: "row" }} gap="4" w={{ base: "full", lg: "auto" }}>
        <Button fontWeight="600" px="5" bg="brand.gold" borderRadius="1rem" color="brand.bg" w={{ base: "full", lg: "auto" }} _hover={{ 
      bg: "brand.darkGold"}}>
        <Icon as={HiChevronDoubleDown} />
        Depositar
      </Button>
        <Button fontWeight="600" px="5" variant="outline" borderColor="brand.gold" borderRadius="1rem" color="brand.gold" w={{ base: "full", lg: "auto" }} _hover={{ 
      bg: "brand.bg"}}>
        <Icon as={HiChevronDoubleUp} />
        Sacar
      </Button>
     </Stack>
    </Stack>
  );
};

export default BalanceSection;