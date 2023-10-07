import { Entypo } from "@expo/vector-icons";
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuProvider,
  MenuTrigger,
} from "react-native-popup-menu";
import styles from "./simplemenu.style";
   const SimpleMenu = () => {
    return (
      <MenuProvider style={styles.container}>
        <Menu>
          <MenuTrigger
            customStyles={{
              triggerWrapper: {
                top: -20,
              },
            }}
          >
            <Entypo name="dots-three-vertical" size={24} color="black" />
          </MenuTrigger>
          <MenuOptions>
            <MenuOption onSelect={() => alert(`Save`)} text="Save" />
            <MenuOption onSelect={() => alert(`Delete`)} text="Delete" />
          </MenuOptions>
        </Menu>
      </MenuProvider>
    );
   };
   
   export default SimpleMenu;