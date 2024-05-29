import React from "react";
import { View, Image, Text } from "react-native";
import { styles } from "./styles";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/pokemon-log.png")}
        resizeMode="cover"
        style={styles.logo}
      />
    </View>
  );
};

export default Header;
