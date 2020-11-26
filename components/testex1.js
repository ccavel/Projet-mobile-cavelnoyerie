import React, { Component } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  Button,
  Image,
} from "react-native";
import { listePersonnage, getRandomQuote1Perso } from "../helpers/kaamapi";
import Dialog from "react-native-dialog";
//import ImageModal from "react-native-image-modal";

import { stylesEx2 } from "../styles/styleEx2";

var listePersonnageModified = new Array();

export default class PlayScreen extends React.Component {
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
  static navigationOptions = {
    title: "Jeu n°1",
  };
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
    //var compt = this.state.counter + 1;
    //this.setState({ dialogVisible: false, counter: compt });
    this.setState({ dialogVisible: false });
    if (this.state.counter == 5) {
      this.setState({ nbPoints: 0, counter: 0 });
      this.props.navigation.navigate("Play");
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
      this.setState({ nbPoints: this.state.nbPoints + 1 }, () => {
        this.setState({ counter: this.state.counter + 1 });
        this.setState({ dialogVisible: true });
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
    const contentDialog = (
      <Dialog.Container visible={this.state.dialogVisible}>
        <Dialog.Title> Je veux pas faire ma raclette mais ...</Dialog.Title>
        <Dialog.Description>
          C'est une {`${this.state.textRep.toString()}`}
        </Dialog.Description>
        <Dialog.Button label="OK, next !" onPress={this.closeDialog} />
      </Dialog.Container>
    );

    const contentReload = (
      <View style={stylesEx2.containerButton}>
        <TouchableOpacity
          onPress={() => this._setAllPerso()}
          style={stylesEx2.buttonReload}
        >
          <Text>
            {">>"} Votre score : {this.state.nbPoints}/{this.state.counter}{" "}
            {"<<"}
          </Text>
        </TouchableOpacity>
      </View>
    );

    const unTableau = this.lesPropositions();
    var contentAnswer = [0, 1, 2, 3];

    if (global.level == 0) {
      for (let id = 0; id < 4; id++) {
        contentAnswer[id] = (
          <View style={stylesEx2.container}>
            <TouchableOpacity
              onPress={() => this.selectAnswer(id)}
              style={stylesEx2.button}
            >
              <View>
                <Image
                  style={stylesEx2.image}
                  source={{ uri: `${this.state.tabPerso[id].image}` }}
                />
              </View>
              <Text style={stylesEx2.proposition}>{unTableau[id].perso}</Text>
            </TouchableOpacity>
          </View>
        );
      }
    } else if (global.level == 1) {
      for (let id = 0; id < 4; id++) {
        contentAnswer[id] = (
          <View style={stylesEx2.container}>
            <TouchableOpacity
              onPress={() => this.selectAnswer(id)}
              style={stylesEx2.button}
            >
              <View>
                <Image
                  style={stylesEx2.image}
                  source={{ uri: `${this.state.tabPerso[id].image}` }}
                />
              </View>
            </TouchableOpacity>
          </View>
        );
      }
    } else {
      for (let id = 0; id < 4; id++) {
        contentAnswer[id] = (
          <View style={stylesEx2.container}>
            <TouchableOpacity
              onPress={() => this.selectAnswer(id)}
              style={stylesEx2.button}
            >
              <Text style={stylesEx2.proposition}>{unTableau[id].perso}</Text>
            </TouchableOpacity>
          </View>
        );
      }
    }

    return (
      <View style={stylesEx2.container}>
        <ScrollView>
          {contentDialog}
          {this._setAllPerso}
          <View style={stylesEx2.container}>
            <View style={stylesEx2.container}>
              <Text style={stylesEx2.question}>
                Qui est l'auteur de cette citation ?{this.state.citation}
              </Text>
            </View>

            {contentAnswer[0]}
            {contentAnswer[1]}
            {contentAnswer[2]}
            {contentAnswer[3]}
          </View>
          {contentReload}
        </ScrollView>
      </View>
    );
  }
}
