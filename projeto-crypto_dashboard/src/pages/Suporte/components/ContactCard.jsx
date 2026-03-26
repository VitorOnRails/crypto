import { Box, Button, Card, HStack, Input, Stack, Text, Textarea } from "@chakra-ui/react";
import { Field } from "../../../components/ui/field";
import { Checkbox } from "../../../components/ui/checkbox";

const ContactCard = () => {
  return (
<Card.Root variant="dashboard">
          <Card.Body p="0">
            <Text mb="2" color="brand.darkGold" fontWeight="500" fontSize="sm"> 
              Você receberá uma resposta em até 24 horas após o envio.
            </Text>
            <Stack gap="3">
              <HStack gap="4" flexDir={{
                base: "column",
                lg: "row"
              }}
            >
                <Field color="brand.darkGold" label="Nome">
                  <Input
                    color="text.primary"
                    placeholder="Insira seu nome" 
                    borderColor="whiteAlpha.600"
                  />
                </Field>
                <Field color="brand.darkGold" label="Sobrenome">
                  <Input
                    color="text.primary"
                    placeholder="Insira seu sobrenome" 
                    borderColor="whiteAlpha.600"
                  />
                </Field>
              </HStack>
              <Field color="brand.darkGold" label="Email">
                  <Input
                    color="text.primary"
                    placeholder="Insira seu email" 
                    borderColor="whiteAlpha.600"
                  />
                </Field>
                <Field color="brand.darkGold" label="Mensagem">
                  <Textarea
                    color="text.primary"
                    placeholder="Insira sua mensagem..." 
                    borderColor="whiteAlpha.600"
                    rows={2}
                  />
                </Field>
                <Checkbox defaultChecked color="brand.gold"> 
                  Eu concordo com os
                  <Box as="span" color="brand.gold" fontWeight="600">
                  {" "}  Termos & Condições.
                  </Box>
                </Checkbox>
                  <HStack w="full" gap="4" flexDir={{ base: "column", lg: "row" }}>
                    <Button size="sm" fontWeight="600" px="5" bg="brand.gold" borderRadius="1rem" color="brand.bg" w={{ base: "full", lg: "auto" }} _hover={{ bg: "brand.darkGold"}}>
                      Enviar Mensagem
                    </Button>
                    <Button size="sm" fontWeight="600" px="5" variant="outline" borderColor="brand.gold" borderRadius="1rem" color="brand.gold" w={{ base: "full", lg: "auto" }} _hover={{ bg: "brand.bg"}}>
                      Agendar uma reunião
                    </Button>
                  </HStack>
              </Stack>
          </Card.Body>
        </Card.Root>
  );
};

export default ContactCard;