import { StyleSheet } from "react-native";

export const stylesEx1 = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  question: {
    alignSelf: "flex-start",
    justifyContent: "flex-start",
    textAlign: "left",
    fontSize: 22,
    fontFamily: "sans-serif-medium",
    marginBottom: 10,
    padding: 10,
    color: "black",
  },

  image: {
    height: 160,
    width: 140,
    flex: 1,
    borderRadius: 7,
  },

  buttonSup: {
    flexDirection: "row",
    flex: 1,
    marginHorizontal: 10,
  },

  button: {
    flex: 1,
    borderRadius: 100,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginHorizontal: 5,
  },

  nomImage: {
    margin: 5,
    fontSize: 15,
    color: "black",
    textAlign: "center",
  },

  nomSeul: {
    margin: 5,
    fontSize: 20,
    color: "#000",
    textAlign: "center",
  },

  fondNom: {
    flex: 1,
    borderColor: "#e68a00",
    borderRadius: 7,
    borderWidth: 4,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
    height: 90,
    width: 140,
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

  citation: {
    fontStyle: "italic",
    fontSize: 18,
  },

  fondCitation: {
    paddingTop: 10,
    paddingBottom: 15,
    paddingHorizontal: 30,
    backgroundColor: "#e8d9d0",
    borderRadius: 40,
    marginBottom: 30,
    marginHorizontal: 10,
  },

  imageBG: {
    width: "100%",
    height: "100%",
  },
});
