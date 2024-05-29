import React from "react";
import { View, Image } from "react-native";
import { styles } from "./style";

interface Props {
  uri: string;
}

const SpriteCard = ({ uri }: Props) => {
  return (
    <View style={styles.spriteBox}>
      <Image source={{ uri }} style={styles.spriteImage} />
    </View>
  );
};

export default SpriteCard;
