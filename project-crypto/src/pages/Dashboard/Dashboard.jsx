import { useEffect, useState } from "react";
import Dash_layout from "../../components/Dash_layout";
import BalanceSection from "./components/BalanceSection";
import MarketSection from "./components/MarketSection";
import { Center, Grid, GridItem, Spinner } from "@chakra-ui/react";
import Transactions from "./components/Transactions";
import InfoCard from "./components/InfoCard";

const Dashboard = () => {

  const [btcPrice, setBtcPrice] = useState(null);
  const [priceChange, setPriceChange] = useState(null);
  const [priceHistory, setPriceHistory] = useState([]);
  const [tabData, setTabData] = useState("1D");
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchBtcData = async () => {

      let interval = "1h";
      let limit = "24";

      if (tabData === "1W") {
        interval = "1d";
        limit = 7;
      } else if (tabData === "1M") {
        interval = "1d";
        limit = 30;
      } else if (tabData === "1Y") {
        interval = "1M";
        limit = 12;
      }

      
      try {
        const responseTicker = await fetch(
          "https://api3.binance.com/api/v3/ticker/24hr?symbol=BTCBRL"
        );
        const data = await responseTicker.json();

        const responseHistory = await fetch(
          `https://api3.binance.com/api/v3/klines?interval=${interval}&limit=${limit}&symbol=BTCBRL`
        );
        const dataHistory = await responseHistory.json();
        const history = dataHistory.map((item) => ({
          x: Number(item[0]),
          y: parseFloat(item[4])
        }));
        
        setBtcPrice(parseFloat(data.lastPrice));
        setPriceChange(parseFloat(data.priceChangePercent));
        setPriceHistory(history);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar dados na Binance:", error);
        setLoading(false);
      };
    };
    fetchBtcData();
  }, [tabData]);

  const userData = {
    walletBalance: 5600,
    btcBalance: 2.00455218,

    userTransactions: [
    {
      id: 1,
      type: "deposit",
      label: "Depósito - BRL",
      amount: "+ R$ 2.900,00",
      timestamp: "13 de Março, 14:30",
    },
    {
      id: 2,
      type: "buy",
      label: "Compra - BTC",
      amount: "- R$ 353.712,00",
      timestamp: "12 de Março, 09:15",
    },
    {
      id: 3,
      type: "sell",
      label: "Venda - BTC",
      amount: "+ R$ 356.412,00",
      timestamp: "11 de Março, 19:25",
    },
  ],
};

   const totalBalance = btcPrice ? userData.walletBalance + (userData.btcBalance * btcPrice) : 0;

  if (loading) {
    return (
      <Dash_layout title="Central">
        <Center h="200px"><Spinner color="brand.gold" /></Center>
      </Dash_layout>
    );
  }

  return (
    <Dash_layout title="Central">
    <Grid gridTemplateColumns={{
        base: "repeat(1, 1fr)",
        xl: "repeat(2, 1fr)",
    }}
    gap="6"
    w="full"
    >
      <GridItem colSpan={{
        base: 1,
        xl: 2,
      }}
    >
        <BalanceSection wallet={userData.walletBalance} btc={userData.btcBalance} totalBalance={totalBalance} />
      </GridItem>
      <GridItem colSpan={1}>
        <MarketSection btcPrice={btcPrice} priceChange={priceChange} priceHistory={priceHistory} tabData={tabData} setTabData={setTabData} />
      </GridItem>
      <GridItem colSpan={1}>
        <Transactions transactions={userData.userTransactions} />
      </GridItem>
      <GridItem colSpan={1}>
        <InfoCard imgURL="/loans.svg" text="Mantenha suas Finanças em Dia." 
        tagLabel="Crédito"
      />
      </GridItem>
      <GridItem colSpan={1}>
        <InfoCard imgURL="/contact.svg" text="Conheça mais sobre nossos serviços falando com a gente."
        tagLabel="Contato"
        inverted={true}
      />
      </GridItem>
    </Grid>
    </Dash_layout>
  );
};

export default Dashboard;