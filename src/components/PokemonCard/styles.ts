import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    maxWidth: "48%",
    flex: 0.5,
    position: "relative",
    flexDirection: "column",
    margin: 4,
    width: 100,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    backgroundColor: "#ffffff20",
    borderRadius: 999,
    padding: 2,
    width: 90,
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 12,
    marginBottom: 8,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: "cover",
  },
  indexText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 12,
    textTransform: "capitalize",
  },
  nameText: {
    fontFamily: "Poppins",
    fontWeight: "bold",
    color: "white",
    fontSize: 16,
    textTransform: "capitalize",
  },
});
