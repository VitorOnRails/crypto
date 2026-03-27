import { CloseButton, Drawer, Portal } from "@chakra-ui/react"
import SideBar from "./SideBar";


const SideDrawer = ({ open, setOpen}) => {

  console.log("O Drawer recebeu open como:", open);

  return (
    <Drawer.Root placement="left" open={open} onOpenChange={(e) => setOpen(e.open)}>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content w="auto" h="100vh"
             _open={{
            animationName: "slide-from-left-full", 
            animationDuration: "moderate",
        }}
            _closed={{ 
            animationName: "slide-to-left-full", 
            animationDuration: "moderate",
      }}
          >
          <Drawer.CloseTrigger position="absolute" asChild >
            <CloseButton size="md" _hover={{ bg: "gray.600" }} />
          </Drawer.CloseTrigger>
            <Drawer.Body p="0" >
                <SideBar />
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};

export default SideDrawer;