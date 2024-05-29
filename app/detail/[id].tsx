import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams } from "expo-router";
import { ActivityIndicator, Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { usePokemonApi } from "@/src/api/hooks/usePokemonApi";
import { useQuery } from "@tanstack/react-query";
import { POKEMON_TYPE_COLORS } from "@/src/constants/Colors";
import PokemonDetailHeader from "./components/PokemonDetailHeader";
import PokemonDetailContent from "./components/PokemonDetailContent";

export default function Detail() {
  const { id } = useLocalSearchParams();
  const { getPokemonDetail } = usePokemonApi();

  const { data, isLoading, error } = useQuery({
    queryKey: ["pokemonDetail", id],
    queryFn: () => getPokemonDetail(id as string),
  });

  return (
    <LinearGradient
      colors={["#4c669f", "#3b5998", "#192f6a"]}
      style={styles.linearGradient}
    >
      <SafeAreaView
        style={[
          styles.safeAreaView,
          {
            backgroundColor:
              POKEMON_TYPE_COLORS[String(data?.types[0].type.name)] ||
              "transparent",
          },
        ]}
      >
        {isLoading ? (
          <View style={styles.loadingContainer}>
            <Image
              source={require("../../src/assets/images/pokemon-log.png")}
              resizeMode="cover"
              style={styles.logo}
            />
            <ActivityIndicator size="large" color="#FFA800" />
          </View>
        ) : (
          <View>
            <PokemonDetailHeader data={data} id={String(id)} />
            <PokemonDetailContent data={data} id={String(id)} />
          </View>
        )}
      </SafeAreaView>
    </LinearGradient>
  );
}
