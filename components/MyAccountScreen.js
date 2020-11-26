import React, { Component } from "react";
import { ImageBackground, Text, View, Image, ScrollView } from "react-native";
import { stylesMyAccount } from "../styles/styleMyAccount";
import Dialog from "react-native-dialog";
const theUsers = [
  {
    email: "chevalier.au.lion@gmail.com",
    mdp: "Mécréant",
    pseudo: "PetitPédestre",
    score1: 0,
    score2: 0,
  },
  {
    email: "karadoc.adoc@gmail.com",
    mdp: "LaPoulette",
    pseudo: "KaradocDu33",
    score1: 4,
    score2: 2,
  },
  {
    email: "maitresse2.0@gmail.com",
    mdp: "PensezPouvoir",
    pseudo: "LaPlusBelle",
    score1: 2,
    score2: 3,
  },
  {
    email: "asterixme.legaulois@gmail.com",
    mdp: "Obe",
    pseudo: "LeMoustachu",
    score1: 5,
    score2: 5,
  },
  { email: "Test", mdp: "Test", pseudo: "Test", score1: 1, score2: 3 },
];

export default class MyAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: "",
      pswd: "",
      indice: 0,
      dialogVisible: true,
      // dialogSignIn: true,
      error: "",
    };
  }

  _isUserValidated() {
    let i = 0;
    while (i < theUsers.length) {
      if (theUsers[i].email == this.state.mail) {
        if (theUsers[i].mdp == this.state.pswd) {
          this.setState({ indice: i });
          return true;
        }
        return false;
      }
      i++;
    }
    return false;
  }

  render() {
    const contentDialog1 = (
      <Dialog.Container visible={this.state.dialogVisible}>
        <Dialog.Title> Messire, vous n'êtes pas connecté !</Dialog.Title>
        <Dialog.Description> {this.state.error} </Dialog.Description>
        <Dialog.Input
          label="Email"
          onChangeText={(mail) => {
            this.setState({ mail });
          }}
        ></Dialog.Input>

        <Dialog.Input
          label="Mdp"
          secureTextEntry={true}
          onChangeText={(pswd) => {
            this.setState({ pswd });
            console.log(this.state.mail);
          }}
        ></Dialog.Input>
        <Dialog.Button
          label="Annuler"
          onPress={() => this.props.navigation.navigate("Bibi")}
        />

        {/* <Dialog.Button
          label="S'inscrire"
          onPress={() =>
            this.setState({ dialogSignIn: true, dialogVisible: false })
          }
        /> */}

        <Dialog.Button
          label="Se connecter"
          onPress={() => {
            console.log("11 :" + this.state.mail + " 12 : " + this.state.pswd);
            console.log(
              "21 :" + theUsers[4].email + " 22 : " + theUsers[4].mdp
            );
            if (this._isUserValidated()) {
              this.setState({ dialogVisible: false });
            } else {
              this.setState({ error: "Mot de passe ou email erroné" });
            }
          }}
        />
      </Dialog.Container>
    );

    // const contentDialog2 = (
    //   <Dialog.Container visible={this.state.dialogSignIn}>
    //     <Dialog.Title> Bienvenue parmi nous mon Seigneur !</Dialog.Title>
    //     <Dialog.Input
    //       label="Email"
    //       onChangeText={mail => {
    //         this.setState({ mail });
    //       }}
    //     ></Dialog.Input>
    //     <Dialog.Input
    //       label="Pseudo"
    //       onChangeText={fakePseudo => {
    //         this.setState({ fakePseudo });
    //       }}
    //     ></Dialog.Input>
    //     <Dialog.Input
    //       label="Mdp"
    //       onChangeText={pswd => {
    //         this.setState({ pswd });
    //       }}
    //     ></Dialog.Input>
    //     <Dialog.Button
    //       label="Annuler"
    //       onPress={() => this.props.navigation.navigate("Bibi")}
    //     />

    //     <Dialog.Button
    //       label="S'inscrire"
    //       onPress={() =>
    //         this.setState({ dialogVisible: false, dialogSignIn: true })
    //       }
    //     />
    //   </Dialog.Container>
    // );

    return (
      <View style={stylesMyAccount.container}>
        <ImageBackground
          source={require("../assets/2928722.jpg")}
          style={{ height: "100%" }}
        >
          <ScrollView>
            {contentDialog1}

            <View style={stylesMyAccount.containerPerso}>
              <Text
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: 15,
                }}
              >
                {" "}
                Preux Chevalier de la Table Ronde{" "}
              </Text>
              <Image
                style={stylesMyAccount.inputImage}
                source={require("../assets/K.png")}
              />
              <Text style={{ fontWeight: "bold", textAlign: "center" }}>
                {theUsers[this.state.indice].pseudo}
              </Text>
              <Text style={{ textAlign: "center", fontStyle: "italic" }}>
                {theUsers[this.state.indice].email}
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: "row",
                marginHorizontal: 30,
                backgroundColor: "#fff",
                borderRadius: 5,
              }}
            >
              <View style={stylesMyAccount.Infographie}>
                <View style={stylesMyAccount.Score}>
                  <Text style={stylesMyAccount.textScore}>
                    {" "}
                    Dernier Score Jeu 1 :{"\n"}
                    <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                      {+theUsers[this.state.indice].score1 + "/5"}
                    </Text>
                  </Text>
                </View>
                <View style={stylesMyAccount.Score}>
                  <Text style={stylesMyAccount.textScore}>
                    {" "}
                    Dernier Score Jeu 2 :{"\n"}
                    <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                      {+theUsers[this.state.indice].score2 + "/5"}
                    </Text>
                  </Text>
                </View>
                <View style={stylesMyAccount.Score}>
                  <Text style={stylesMyAccount.textScore}>
                    {" "}
                    Moyenne : {"\n"}
                    <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                      {(theUsers[this.state.indice].score1 +
                        theUsers[this.state.indice].score1) /
                        2 +
                        "/5"}
                    </Text>
                  </Text>
                </View>
              </View>

              <View style={stylesMyAccount.Infographie}>
                <View style={stylesMyAccount.Score}>
                  <Text style={stylesMyAccount.textScore}>
                    {" "}
                    Nombre de citations aléatoires :
                    <Text style={{ fontWeight: "bold", fontSize: 30 }}>
                      {"\n\n" + global.randomCit}
                    </Text>
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}
