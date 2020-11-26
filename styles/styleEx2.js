import { StyleSheet } from "react-native";

export const stylesEx2 = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  imageBG: {
    width: "100%",
    height: "100%",
  },

  contTextImage: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "stretch",
  },

  question: {
    fontWeight: "800",
    alignSelf: "flex-start",
    justifyContent: "flex-start",
    textAlign: "left",
    fontSize: 22,
    fontFamily: "sans-serif-medium",
    marginBottom: 40,
    padding: 10,
  },

  image: {
    height: 70,
    width: 60,
    flex: 1,
    alignSelf: "baseline",
  },

  button: {
    flex: 1,
    backgroundColor: "#e8d9d0",
    borderRadius: 40,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginHorizontal: 5,
    fontSize: 12,
  },

  proposition: {
    margin: 5,
    fontSize: 12,
    color: "black",
    textAlign: "center",
  },

  containerButton: {
    flexDirection: "row",
    flex: 1,
  },

  buttonReload: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 2,
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    fontSize: 20,
  },
});
