import { StyleSheet } from "react-native";

export const stylesPlay = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },

  //LE TEXT
  text1: {
    fontSize: 18,
    color: "#000",
    alignSelf: "flex-start",
    marginLeft: 10,
    marginTop: 15,
    marginBottom: 10,
    fontWeight: "700"
  },
  text2: {
    fontSize: 15,
    color: "#000",
    alignSelf: "flex-start",
    marginLeft: 10,
    marginTop: 20,
  },
  text3: {
    fontSize: 12,
    fontStyle: "italic",
    color: "#000",
    alignSelf: "flex-start",
    marginLeft: 10,
    marginBottom: 10,
  },
  text4: {
    fontSize: 12,
    color: "#000",
    alignSelf: "flex-end",
    marginRight: 10,
    marginBottom: 5,
    fontWeight: "bold"
  },

  //LES CHECKBOXs
  lesCheckBox: {
    flex: 1,
    padding: 2,
    borderWidth: 0,
    margin: 3,
    color: "#e8d9d0" 
  },
  textCheckBox: {
    fontSize: 9,
    textAlign: "left",
    color: "#e8d9d0", 
    borderWidth:0
  },
  containerCheckBox: {
    padding: 3,
    margin: 3,
    backgroundColor: "#800000",
    flex:1
  },
bigContainerCheckBox: {
  alignItems: "center",
  flexDirection: "row",
  alignItems: "flex-start",
},

  //LES TOUCHABLE OPACITY
  proposition: {
    fontFamily: "sans-serif-medium",
    fontSize: 20,
    color: "#e8d9d0",
    textAlign: "center",
    opacity: 1,
  },

  containerButton: {
    flexDirection: "row",
    padding: 5,
  },

  buttonReload: {
    flex: 1,
    borderRadius: 2,
    borderColor: "#e8d9d0",
    borderWidth: 2,
    backgroundColor: "#800000",
    padding: 20,
    justifyContent: "center",
    alignItems: "stretch",
    alignSelf: "stretch",
  },

  //LE BG
  imageBG: {
    width: "100%",
    height: "100%",
  },
});
