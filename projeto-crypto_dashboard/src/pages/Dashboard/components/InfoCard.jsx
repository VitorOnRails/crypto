import { Card, Stack, Tag, Text } from "@chakra-ui/react"

const InfoCard = ({ imgURL, text, tagLabel, inverted = false}) => {
    
    const tagsBgColor = inverted ? "brand.bg" : "brand.darkGold";
    const tagsColor = inverted ? "brand.gold" : "brand.bg";
    const textColor = inverted ? "brand.bg" : "brand.darkGold";
    const bgColor = inverted ? "transparent" : "brand.bg";
    const borderColor = inverted ? "brand.bg" : "brand.bg";

  
    return (
    <Card.Root variant="dashboard" p="3" h="full" bgImage={`url(${imgURL})`} bgColor={bgColor} bgSize="cover" borderRadius="2xl" borderColor={borderColor} bgRepeat="no-repeat">
        <Card.Body p="0">
            <Stack gap="2">
                <Tag.Root color={tagsColor} bg={tagsBgColor} borderRadius="full" w="fit-content">
                    <Tag.Label fontWeight="600">
                        {tagLabel}
                    </Tag.Label>
                </Tag.Root>
                <Text color={textColor} textStyle="h6" alignItems="center" fontWeight="500">
                    {text}
                </Text>
            </Stack>
        </Card.Body>
    </Card.Root>
  );
};

export default InfoCard;