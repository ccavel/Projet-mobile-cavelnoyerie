import { StyleSheet, ImageBackgroundProperties } from "react-native";

// https://docs.expo.io/versions/latest/sdk/font/  pour télécharger des polices

export const stylesRandom = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  infosContainer: {
    margin: 30,
  },

  backgroundQuote: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: "#e8d9d0",
    opacity: 0.85,
    borderRadius: 10,
    marginBottom: 100,
  },

  quote: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 10,
    //fontFamily: "serif",
    fontFamily: "Didot-Italic",
    fontStyle: "italic",
  },

  author: {
    fontSize: 18,
    fontWeight: "800",
    marginBottom: 2,
    textAlign: "right",
    fontFamily: "Didot-Bold",
  },

  livre: {
    fontSize: 17,
    fontWeight: "800",
    marginBottom: 10,
    textAlign: "right",
    fontFamily: "Didot-Bold",
    color: "#9e0000",
  },

  textBtn: {
    color: "white",
    fontFamily: "Thonburi-Bold",
  },

  button: {
    borderWidth: 1,
    borderColor: "#fff",
    backgroundColor: "#000",
    borderRadius: 5,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 60,
    marginTop: 100,
    fontSize: 20,
    shadowColor: "#e8d9d0",
    opacity: 0.75,
    shadowOffset: { width: 5, height: 8 },
    shadowOpacity: 0.8,
  },

  image: {
    width: 400,
    height: 700,
  },
});
