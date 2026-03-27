import { Box, Flex, Icon, Stack, Text } from "@chakra-ui/react";

const SupportCard = ({ leftComponent, icon, title, text, alignItems = "flex-start" }) => {
  return (
    <Flex flexDir={{
            base: "column",
            lg: "row",
          }}
          gap="6"
          align={alignItems}
        >
            <Stack maxW="24rem">
              <Icon size="md" color="text.secondary" boxSize="6" as={icon} />
              <Text as="h1" fontWeight="600" textStyle="h1" color="brand.gold">
                {title}
              </Text>
              <Text fontWeight="500" fontSize="sm" color="brand.darkGold">
                {text}
              </Text>
            </Stack>
            <Box maxW="35rem" w="full">
                {leftComponent}
            </Box>
    </Flex>
  );
};

export default SupportCard;