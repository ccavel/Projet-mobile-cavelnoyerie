import React, { Component } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  Image,
  ImageBackground,
} from "react-native";
import { listePersonnage, getRandomQuote1Perso } from "../helpers/kaamapi";
import Dialog from "react-native-dialog";

import { stylesEx1 } from "../styles/styleEx1";

var listePersonnageModified = new Array();

export default class Ex1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabPerso: [
        { nom: "1", image: "" },
        { nom: "2", image: "" },
        { nom: "3", image: "" },
        { nom: "4", image: "" },
      ],
      citation: "",
      reponse: "",
      dialogVisible: false,
      counter: 0,
      textRep: "",
      nbPoints: 0,
    };
  }
  _setAllPerso = () => {
    //On copie le tableau listePersonnage
    for (let i = 0; i < listePersonnage.length; i++) {
      listePersonnageModified[i] = listePersonnage[i];
    }

    //var perso = { nom: "", image: "" };
    var tabVidePerso = [];
    var id;

    //On récupère 4 personnages random
    for (let j = 0; j < 4; j++) {
      id = Math.floor(Math.random() * listePersonnageModified.length);
      tabVidePerso[j] = listePersonnageModified[id];

      listePersonnageModified.splice(id, 1);
    }
    this.setState({ tabPerso: tabVidePerso });

    //récupération de la bonne réponse (nom du perso qui dit la citation)
    var cit = Math.floor(Math.random() * 3);
    this.setState({ reponse: tabVidePerso[cit].nom });

    getRandomQuote1Perso(tabVidePerso[cit].nom).then((quote) =>
      this.setState({ citation: `${quote.citation}` })
    );
  };

  lesPropositions = () => {
    var lesPersos = [
      this.state.tabPerso[0].nom,
      this.state.tabPerso[1].nom,
      this.state.tabPerso[2].nom,
      this.state.tabPerso[3].nom,
    ];

    var AnswerNega =
      "MAUVAISE réponse :/ \n\n La bonne réponse était " + this.state.reponse;

    var leretour = [
      {
        perso: lesPersos[0],
        answer: AnswerNega,
      },
      {
        perso: lesPersos[1],
        answer: AnswerNega,
      },
      {
        perso: lesPersos[2],
        answer: AnswerNega,
      },
      {
        perso: lesPersos[3],
        answer: AnswerNega,
      },
    ];
    for (let i = 0; i < leretour.length; i++) {
      if (leretour[i].perso == this.state.reponse) {
        leretour[i].answer = "BONNE réponse !!!!";
      }
    }
    return leretour;
  };

  closeDialog = () => {
    this.setState({ dialogVisible: false });
    if (this.state.counter == 5) {
      global.scoreEx1 = this.state.nbPoints;
      this.setState({ counter: 0, nbPoints: 0 });
      this.props.navigation.navigate("LetsPlayALittleGame");
    } else {
      this._setAllPerso();
    }
  };

  selectAnswer = (rep) => {
    const ans = this.lesPropositions()[rep].answer;
    this.setState({
      textRep: ans,
    });
    console.log(this.state.textRep);
    if (ans[0] == "B") {
      this.setState({
        counter: this.state.counter + 1,
        dialogVisible: true,
        nbPoints: this.state.nbPoints + 1,
      });
    } else {
      this.setState({ counter: this.state.counter + 1 });
      this.setState({ dialogVisible: true });
    }
  };

  componentDidMount() {
    this._setAllPerso();
  }

  render() {
    let description = "C'est une " + this.state.textRep.toString();

    const contentDialog = (
      <Dialog.Container visible={this.state.dialogVisible}>
        <Dialog.Title> Je veux pas faire ma raclette mais ...</Dialog.Title>
        <Dialog.Description>{description}</Dialog.Description>
        <Dialog.Button label="OK, next !" onPress={this.closeDialog} />
      </Dialog.Container>
    );

    const unTableau = this.lesPropositions();
    var contentAnswer = [0, 1, 2, 3];

    if (global.level == 0) {
      for (let id = 0; id < 4; id++) {
        contentAnswer[id] = (
          <View style={stylesEx1.container}>
            <TouchableOpacity
              onPress={() => this.selectAnswer(id)}
              style={stylesEx1.button}
            >
              <View>
                <Image
                  style={stylesEx1.image}
                  source={
                    this.state.tabPerso[id].image
                      ? { uri: `${this.state.tabPerso[id].image}` }
                      : null
                  }
                />
              </View>
              <Text style={stylesEx1.nomImage}>{unTableau[id].perso}</Text>
            </TouchableOpacity>
          </View>
        );
      }
    } else if (global.level == 1) {
      for (let id = 0; id < 4; id++) {
        contentAnswer[id] = (
          <View style={stylesEx1.container}>
            <TouchableOpacity
              onPress={() => this.selectAnswer(id)}
              style={stylesEx1.button}
            >
              <View>
                <Image
                  style={stylesEx1.image}
                  source={
                    this.state.tabPerso[id].image
                      ? { uri: `${this.state.tabPerso[id].image}` }
                      : null
                  }
                />
              </View>
              <Text style={stylesEx1.nomImage}></Text>
            </TouchableOpacity>
          </View>
        );
      }
    } else {
      for (let id = 0; id < 4; id++) {
        contentAnswer[id] = (
          <View style={stylesEx1.container}>
            <TouchableOpacity
              onPress={() => this.selectAnswer(id)}
              style={stylesEx1.button}
            >
              <View style={stylesEx1.fondNom}>
                <Text style={stylesEx1.nomSeul}>{unTableau[id].perso}</Text>
              </View>
            </TouchableOpacity>
          </View>
        );
      }
    }

    return (
      <View style={stylesEx1.container}>
        <ImageBackground
          source={require("../assets/wall6.jpg")}
          style={stylesEx1.imageBG}
        >
          <ScrollView>
            {contentDialog}
            {this._setAllPerso}
            <View style={stylesEx1.container}>
              <View style={stylesEx1.container}>
                <Text style={stylesEx1.question}>
                  Qui est l'auteur de cette citation ?
                </Text>
                <View style={stylesEx1.fondCitation}>
                  <Text style={stylesEx1.citation}>{this.state.citation}</Text>
                </View>
              </View>
              <View style={stylesEx1.buttonSup}>
                {contentAnswer[0]}
                {contentAnswer[1]}
              </View>
              <View style={stylesEx1.buttonSup}>
                {contentAnswer[2]}
                {contentAnswer[3]}
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}
