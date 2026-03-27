import { Badge, Button, Card, Flex, Icon, Input, Tabs } from "@chakra-ui/react";
import Dash_layout from "../../components/Dash_layout";
import { InputGroup } from "../../components/ui/input-group";
import { FiDownload, FiSearch  } from "react-icons/fi";
import TransactionTable from "./components/TransactionTable";
import { useState } from "react";

const Transacao = () => {

  const [search, setSearch] = useState("");

  const tabData = [
    {
      name: "Tudo",
      count: 5,
      value: "tudo"
    },
    {
      name: "Depósitos",
      count: 2,
      value: "depositos"
    },
    {
      name: "Saques",
      count: "1",
      value: "saques"
    },
    {
      name: "Trocas",
      count: "2",
      value: "trocas"
    }
  ];

  return (
    <Dash_layout title="Transações">
      <Flex mb="4" justify="flex-end">
        <Button gap="2" variant="outline" borderColor="brand.gold" color="brand.gold" borderRadius="lg" _hover={{ bg: "brand.bg" }}>
          <Icon as={FiDownload} />  
            Exportar Extrato
        </Button>
      </Flex>
        <Card.Root variant="dashboard" borderRadius="1rem">
          <Card.Body p="0">
            <Tabs.Root defaultValue="tudo">
              <Flex justify="space-between" align="center" flexWrap="wrap" gap="4">
                <Tabs.List pt="4">
                  {tabData.map((tab) => (
                    <Tabs.Trigger pb="4" color="brand.darkGold" key={tab.value} value={tab.value}>
                      {tab.name}
                      <Badge ml="2" borderRadius="full" bg="brand.bg" color="brand.gold">
                        {tab.count}
                      </Badge>
                    </Tabs.Trigger>
                  ))}
                </Tabs.List>
                <InputGroup startElement={<Icon as={FiSearch} />} maxW="20rem" pr="6">
                  <Input type="search" borderColor="whiteAlpha.200" placeholder="Pesquisar..." value={search} onChange={(e) => setSearch(e.target.value)} />
                </InputGroup>
              </Flex>
              <Tabs.Content value="tudo" mt="4">
                <TransactionTable filter="Tudo" search={search} />
              </Tabs.Content>

              <Tabs.Content value="depositos" mt="4">
                <TransactionTable filter="Depósito" search={search} />
              </Tabs.Content>

              <Tabs.Content value="saques" mt="4">
                <TransactionTable filter="Saque" search={search} />
              </Tabs.Content>

              <Tabs.Content value="trocas" mt="4">
                <TransactionTable filter="Troca" search={search} />
              </Tabs.Content>
            </Tabs.Root>
          </Card.Body>
        </Card.Root>
    </Dash_layout>
  );
};

export default Transacao;