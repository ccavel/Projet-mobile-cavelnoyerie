import{StyleSheet} from "react-native";

export const stylesMyAccount = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
     //   alignItems: "center",
        backgroundColor: "lightgrey"
      },
      inputImage: {
        borderBottomWidth: 1,
        width: 100,
        height: 100,
        marginBottom: 20,
        alignSelf: "center"
      },
      containerPerso: {
        flex: 1,
        backgroundColor: "#fff",
        marginVertical : 5,
        marginHorizontal: 30,
        padding: 4,
        borderRadius:5,
        marginTop: 60, 
        marginBottom: 30
      },
      Infographie: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#fff", 
        margin : 5,
        padding: 4,
        borderRadius:5

      },
      Score: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin : 4,
        borderWidth: 1, 
        borderColor: "#000",
        borderRadius:5
      },
      textScore : {
        flex: 1,
        textAlign: "center",
        padding : 10
      },
  });