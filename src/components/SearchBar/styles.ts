import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  errorText: {
    color: "red",
  },
  button: {
    backgroundColor: "#FFA800",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
  },
});
