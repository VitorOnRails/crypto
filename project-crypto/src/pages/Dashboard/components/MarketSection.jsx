import { HStack, Icon, Stack, Text, Button, Card, Box } from "@chakra-ui/react"
import { HiChevronDoubleDown, HiChevronDoubleUp, HiPlus, HiMinus } from "react-icons/hi";
import { graphicConfig } from "./GraphicConfig";
import { useMemo } from "react";
import Chart from "react-apexcharts";

const MarketSection = ({ btcPrice, priceChange,  priceHistory, tabData, setTabData }) => {

    const isPositive = priceChange >= 0;
    const graphicColor = isPositive ? "#48BB78" : "#F56565";

    const filterTabs = [
        { label: "1 Dia", value: "1D" },
        { label: "1 Sem.", value: "1W" },
        { label: "1 Mês", value: "1M" },
        { label: "1 Ano", value: "1Y" },
    ];

    const graphicOptions = useMemo(() => ({
        ...graphicConfig,
        colors: [graphicColor],
    }), [graphicColor]);


    const colors = isPositive ? "green.500" : "red.500";
    const statusIcon = isPositive ? HiChevronDoubleUp : HiChevronDoubleDown;
    const statusPrefix = isPositive ? "+" : "";
  
    const formatBRL = (val) => {
        return new Intl.NumberFormat("pt-BR", {
            style: "currency",  
            currency: "BRL",
        }).format(val);
    };
  
  return (
  <Card.Root variant="dashboard" h="full">
      <Card.Body p="0">
        <Stack gap="2" w="full">
          <Stack w="full" justify="space-between" 
            direction={{ base: "column", lg: "row" }}
            align={{ base: "flex-start", lg: "center" }}
            gap={{ base: 4, lg: 10 }}
          >
            <Stack gap="1">
              <Text fontSize="sm" fontWeight="medium" color="text.secondary">
                Preço Atual:
              </Text>
              <HStack gap="2">
                <Text textStyle="h2" fontWeight="bold" color="text.primary">
                    {formatBRL(btcPrice)}
                </Text>
                <HStack color={colors} fontWeight="bold" fontSize="sm" mb="1">
                  <Icon as={statusIcon} />
                  <Text>
                    ({statusPrefix}{priceChange?.toFixed(2)}%)
                  </Text>
                </HStack>
              </HStack>
            </Stack>
            <Stack direction={{ base: "column", lg: "row" }} w={{ base: "full", lg: "auto" }} gap="4">
              <Button size="sm" bg="brand.gold" color="brand.bg" px="5" fontWeight="600" borderRadius="lg" _hover={{ bg: "brand.darkGold" }}>
                <Icon as={HiPlus} /> 
                Comprar
              </Button>
              <Button size="sm" variant="outline" borderColor="brand.gold" color="brand.gold" px="5" fontWeight="600" borderRadius="lg" _hover={{ bg: "brand.bg" }}>
                <Icon as={HiMinus} /> 
                Vender
              </Button>
            </Stack>
          </Stack>
          <HStack justify="flex-end">
            <HStack bg="brand.cardBg" gap="2" mt={{ base: 2, lg: 0 }}>
                {filterTabs.map((tab) => (
                    <Button key={tab.value} size={{ base: "md", lg: "sm"}} textStyle="h5" fontSize="xs" borderRadius="xl" 
                    variant="outline" color={tabData === tab.value ? "brand.gold" : "text.secondary"} 
                    borderColor={tabData === tab.value ? "brand.gold" : "brand.darkGold"}
                    onClick={() => setTabData(tab.value)}
                    _hover={{ bg: "brand.bg" }}
                    >
                      {tab.label}
                    </Button>
                ))}
            </HStack>
          </HStack>
          <Box h={{ base: "8rem", lg: "8rem" }} minH={{ base: "10rem", lg: "auto" }} w="full">
            <Chart 
              options={graphicOptions}
              series={[{ name: "BTC (BRL)", data: priceHistory }]} 
              type="area" 
              height="110%"
            />
          </Box>
        </Stack> 
      </Card.Body>
    </Card.Root>
  );
};

export default MarketSection;