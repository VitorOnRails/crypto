import { Card, Grid, HStack, Icon, Stack, Text, Button } from "@chakra-ui/react"
import { HiCurrencyDollar, HiArrowDownLeft, HiArrowUpRight } from "react-icons/hi2"

const Transactions = ({ transactions }) => {

    const getIcon = (type) => {
    switch (type) {
      case "deposit": return HiCurrencyDollar;
      case "buy": return HiArrowDownLeft;
      case "sell": return HiArrowUpRight;
      default: return HiCurrencyDollar;
    }
  };

  return (
    <Card.Root h="full" variant="dashboard">
        <Card.Body p={{ base: 6, md: 0}}>
                <Text fontSize="sm" fontWeight="600" color="text.secondary" mb={{ base: 6, lg: "2"}}>
                    Transações Recentes...
                </Text>
            <Stack gap="4">
                {transactions.map((item) => (
            <HStack key={item.id} justify="space-between">
            <HStack gap="4">
                <Grid boxSize="10" borderRadius="full" placeItems="center" bg="brand.bg">
                    <Icon as={getIcon(item.type)} color="brand.gold" boxSize="6" />
                </Grid>
                <Stack gap="0">
                <Text fontSize="sm" color="text.secondary" fontWeight="600">
                    {item.label}
                </Text>
                <Text fontSize="xs" color="text.secondary" fontWeight="600">
                    {item.timestamp}
                </Text>
            </Stack>
            </HStack>
                <Text fontSize="sm" color={item.amount.includes("-") ? "red.400" : "green.400"} fontWeight="600" textAlign="right">
                    {item.amount}
                </Text>
            </HStack>
            ))}
            </Stack>
        </Card.Body>
        <Card.Footer pb="1" px="1">
            <Button cursor="pointer" bg="brand.gold" color="brand.bg" fontWeight="600" borderColor="brand.gold" borderRadius="lg" mt="3" w="full" _hover={{ bg: "brand.darkGold" }}>
                Ver todas as transações
            </Button>
        </Card.Footer>
    </Card.Root>
  );
};

export default Transactions;