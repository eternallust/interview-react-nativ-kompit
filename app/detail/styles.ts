import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  safeAreaView: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 20,
    flex: 1,
  },
  logo: {
    width: 100,
    height: 50,
  },

  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  headerContainer: {
    flexBasis: "40%",
    position: "relative",
  },
  headerContent: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pokemonName: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    textTransform: "capitalize",
  },
  typeContainer: {
    flexDirection: "row",
    gap: 8,
    marginTop: 12,
  },
  typeBadge: {
    backgroundColor: "#ffffff50",
    borderRadius: 20,
    alignSelf: "flex-start",
  },
  typeText: {
    paddingVertical: 8,
    paddingHorizontal: 32,
    fontWeight: "bold",
    color: "white",
    textTransform: "capitalize",
  },
  pokemonId: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    textTransform: "capitalize",
  },
  pokemonImage: {
    height: 280,
    width: 280,
    position: "absolute",
    bottom: 0,
    marginBottom: -80,
    zIndex: 2,
  },
  detailsContainer: {
    flexBasis: "60%",
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 80,
    paddingBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 12,
  },
  spriteContainer: {
    flexDirection: "row",
    gap: 12,
  },
  spriteBox: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    height: 80,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
  },
  spriteImage: {
    height: 80,
    width: 80,
  },
  abilitiesContainer: {
    marginTop: 12,
    flexDirection: "row",
    gap: 8,
    flexWrap: "wrap",
  },
  abilityBadge: {
    paddingVertical: 8,
    paddingHorizontal: 32,
    alignSelf: "flex-start",
    borderRadius: 100,
  },
  abilityText: {
    color: "white",
    fontWeight: "bold",
  },
  favoriteButton: {
    bottom: 0,
    position: "absolute",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
  },
  favoriteButtonText: {
    fontWeight: "bold",
    color: "white",
  },
});
