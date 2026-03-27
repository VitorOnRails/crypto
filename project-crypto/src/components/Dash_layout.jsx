import { Box, Container, Flex } from "@chakra-ui/react";
import TopNav from "./TopNav";
import SideBar from "./SideBar";
import SideDrawer from "./SideDrawer";
import { useState } from "react";

const Dash_layout = ({ title, children }) => {

  const [open, setOpen] = useState(false);


  return (
    <Flex>
       <Box 
       display={{
        base: "none",
        lg: "flex"
       }}
       >
        <SideBar />
        </Box>
        <SideDrawer open={open} setOpen={setOpen} />
        <Box flexGrow={1}>
          <TopNav title={title} onClick={() => {
            console.log("Botão clicado!");
            setOpen(true); }} />
          <Container overflowX="hidden" overflowY="auto" h="calc(100vh - 64px)" maxW="8xl" px="9">
            <Box mt="6" px="2">
            {children}
            </Box>
          </Container>
        </Box>
      </Flex>
  );
};

export default Dash_layout;