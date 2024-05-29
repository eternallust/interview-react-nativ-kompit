import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

interface Props {
  abilityName: string;
  backgroundColor: string;
}

const AbilityBadge = ({ abilityName, backgroundColor }: Props) => {
  return (
    <View
      style={[
        styles.abilityBadge,
        {
          backgroundColor,
        },
      ]}
    >
      <Text style={styles.abilityText}>{abilityName}</Text>
    </View>
  );
};

export default AbilityBadge;
