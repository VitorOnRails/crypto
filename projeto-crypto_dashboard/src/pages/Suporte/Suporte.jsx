import { SiMailboxdotorg } from "react-icons/si";
import { TbMessages } from "react-icons/tb";
import Dash_layout from "../../components/Dash_layout";
import ContactCard from "./components/ContactCard";
import SupportCard from "./components/SupportCard";
import InfoCard from "../Dashboard/components/InfoCard";
import { Stack } from "@chakra-ui/react";


const Suporte = () => {
  return (
    <Dash_layout title="Suporte">
      <Stack gap="4">
          <SupportCard 
        leftComponent={<ContactCard />} 
        title="Fale Conosco!" 
        text="Tem alguma dúvida ou quer saber mais? Fique à vontade para falar com a gente." 
        icon={SiMailboxdotorg} 
      />
        <SupportCard
        leftComponent={<InfoCard imgURL="/contact.svg" text="Conheça mais sobre nossos serviços falando com a gente." tagLabel="Contato" inverted={true} />} 
        title="Chat ao Vivo" 
        text="Não pode esperar pela resposta? Fale com a gente agora mesmo." 
        icon={TbMessages}
        alignItems="center"
      />
      </Stack>
    </Dash_layout> 
  );
};

export default Suporte;