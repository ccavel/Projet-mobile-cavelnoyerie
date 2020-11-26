import{StyleSheet} from "react-native";

export const stylesHome = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center"
    },
    
    infosContainer: {
      margin: 30
    },

    name: {
      fontSize: 18,
      fontWeight: "700",
      marginBottom: 10
    },

    description: {
      marginBottom: 10
    },
    
    button: {
      borderWidth: 1,
      borderColor: "#000",
      borderRadius: 3,
      padding: 5,
      justifyContent: "center",
      alignItems: "center"
    }
  });