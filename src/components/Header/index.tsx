import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useRouter } from "expo-router";

const Header = ({ goBack }: { goBack?: () => void }) => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => (goBack ? goBack() : router.back())}>
        <Image
          source={require("../../assets/images/back.png")}
          resizeMode="cover"
          style={{ height: 20, width: 20 }}
        />
      </TouchableOpacity>

      <Image
        source={require("../../assets/images/pokemon-log.png")}
        resizeMode="cover"
        style={styles.logo}
      />
      <TouchableOpacity onPress={() => router.push("/favorites")}>
        <Image
          source={require("../../assets/images/star.png")}
          resizeMode="cover"
          style={{ height: 24, width: 24 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
