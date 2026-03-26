import { Badge, Table, Text } from "@chakra-ui/react"

const TransactionTable = ({ filter, search }) => {

  const transactions = [
    {
    id: "005",
    name: "Depósito em Reais",
    date: "2026-03-13",
    time: "14:30",
    type: "Depósito",
    amount: "+ R$ 2.900,00",
    status: "Concluído",
  },
  {
    id: "004",
    name: "Compra de Bitcoin",
    date: "2026-03-12",
    time: "09:15",
    type: "Troca",
    amount: "- R$ 353.712,00",
    status: "Concluído",
  },
  {
    id: "003",
    name: "Venda de Bitcoin",
    date: "2026-03-11",
    time: "19:25",
    type: "Troca",
    amount: "+ R$ 356.412,00",
    status: "Concluído",
  },
  {
    id: "002",
    name: "Saque para Banco",
    date: "2026-03-10",
    time: "08:45",
    type: "Saque",
    amount: "- R$ 1.200,00",
    status: "Pendente",
  },
  {
    id: "001",
    name: "Depósito em Reais",
    date: "2026-03-09",
    time: "16:10",
    type: "Depósito",
    amount: "+ R$ 500,00",
    status: "Cancelado",
  },
];

  const filterTransactions = transactions.filter((row) => {
    const tabMatching = filter === "Tudo" ? true : row.type === filter;

    const searchMatching = row.name.toLowerCase().includes(search.toLowerCase())
    || row.id.includes(search);

    return tabMatching && searchMatching;
  });

  return (
    <Table.ScrollArea bg="brand.cardBg" color="text.primary">
        <Table.Root variant="line" color="text.primary">
          <Table.Header>
            <Table.Row bg="brand.cardBg">
              <Table.ColumnHeader color="brand.gold">Transação</Table.ColumnHeader>
              <Table.ColumnHeader color="brand.gold">Data & Hora</Table.ColumnHeader>
              <Table.ColumnHeader color="brand.gold">Tipo</Table.ColumnHeader>
              <Table.ColumnHeader color="brand.gold">Valor</Table.ColumnHeader>
              <Table.ColumnHeader color="brand.gold">Situação</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
        <Table.Body>
          {filterTransactions.map((row) => (
            <Table.Row key={row.id}>
              <Table.Cell fontWeight="500" bg="brand.cardBg">
                {row.name}
              </Table.Cell>
              <Table.Cell bg="brand.cardBg">
                <Text fontSize="sm" fontWeight="500">
                  {row.date}
                </Text>
                <Text color="text.secondary" fontSize="sm" fontWeight="400">
                  {row.time}
                </Text>
              </Table.Cell>
              <Table.Cell bg="brand.cardBg" fontWeight="500">
                {row.type}
              </Table.Cell>
              <Table.Cell bg="brand.cardBg" color={row.amount.includes("-") ? "red.400" : "green.400"} fontWeight="600">
                {row.amount}
              </Table.Cell>
              <Table.Cell bg="brand.cardBg">
                <Badge variant="subtle" fontWeight="600" borderRadius="full" colorPalette={
                  row.status === "Concluído" ? "green" :
                  row.status === "Pendente" ? "yellow" :
                  row.status === "Cancelado" ? "red" : "gray"
                }
              >
                {row.status}
                </Badge>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        </Table.Root>
    </Table.ScrollArea>
  );
};

export default TransactionTable;