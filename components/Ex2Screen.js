import React, { Component } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  ImageBackground,
} from "react-native";
import {
  listePersonnage,
  getRandomQuote1Perso,
  getAllQuote1Perso,
} from "../helpers/kaamapi";
import Dialog from "react-native-dialog";
import ImageModal from "react-native-image-modal";

import { stylesEx2 } from "../styles/styleEx2";

var listePersonnageModified = new Array();
export default class Ex2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabPerso: [],
      c1: "",
      c2: "",
      c3: "",
      c4: "",
      tabCit: [],
      dialogVisible: false,
      score: 0,
      textRep: "",
      counter: 1,
      version: "Quelle citation a été dite par",
      persoQuestion: "",
      imagePerso:
        "data:image/jpeg;base64,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",
    };
  }

  _loadGame = () => {
    if (global.level == 0) {
      this._setAllPersoDebutant();
    } else if (global.level == 1) {
      this._setAllPersoInter();
    } else {
      this._setAllPersoExpert();
    }
    console.log("level : " + global.level);
  };

  _setAllPersoInter = () => {
    //On copie le tableau listePersonnage
    var quest = [
      "Quelle citation a été dite par",
      "Quelle citation N'a PAS été dite par",
    ];

    for (let i = 0; i < listePersonnage.length; i++) {
      listePersonnageModified[i] = listePersonnage[i];
    }
    var tabVidePerso = ["", "", "", ""];
    var id;
    this.setState({ counter: this.state.counter + 1 });
    console.log(this.state.counter);
    console.log(this.state.counter % 2);

    if (this.state.counter % 2 == 0) {
      //On est dans la configuration "Quelle citation a été dite par"
      this.setState({ version: quest[0] });

      console.log("if");
      //On récupère 4 personnages random
      for (let j = 0; j < 4; j++) {
        id = Math.floor(Math.random() * listePersonnageModified.length);
        tabVidePerso.splice(j, 1, listePersonnageModified[id].nom);
        if (j == 0) {
          this.setState({ imagePerso: `${listePersonnageModified[id].image}` });
        }
        listePersonnageModified.splice(id, 1);
      }
      this.setState({ tabPerso: tabVidePerso, persoQuestion: tabVidePerso[0] });
      //on a sauvegardé les 4 perso et celui qui sera dans la question (le perso0)
      //on récupère 1 citation aléatoire dite par chaque personnage
      getRandomQuote1Perso(tabVidePerso[0]).then((quote) =>
        this.setState({ c1: `${quote.citation}` })
      ); //c'est donc la citation c1, dite par le perso0, qui constitue la bonne réponse
      getRandomQuote1Perso(tabVidePerso[1]).then((quote) =>
        this.setState({ c2: `${quote.citation}` })
      );
      getRandomQuote1Perso(tabVidePerso[2]).then((quote) =>
        this.setState({ c3: `${quote.citation}` })
      );
      getRandomQuote1Perso(tabVidePerso[3]).then((quote) =>
        this.setState({ c4: `${quote.citation}` })
      );
    } else {
      //On est dans la configuration "Quelle citation N'a PAS été dite par"
      this.setState({ version: quest[1] });
      console.log("else");

      //On récupère 2 personnages random
      for (let j = 0; j < 2; j++) {
        id = Math.floor(Math.random() * listePersonnageModified.length);
        tabVidePerso.splice(j, 1, listePersonnageModified[id].nom);
        if (j == 0) {
          this.setState({ imagePerso: `${listePersonnageModified[id].image}` });
        }
        listePersonnageModified.splice(id, 1);
      }
      //On rempli le tableau 1x4 de telle sorte que tabVide=[perso1, perso0, perso1, perso1]
      tabVidePerso.splice(2, tabVidePerso[0]);
      tabVidePerso.splice(3, tabVidePerso[0]);
      this.setState({ tabPerso: tabVidePerso, persoQuestion: tabVidePerso[0] });
      //on récupère 1 citation aléatoire pour perso0 qu'on met en c1 car le joueur doit tjr cliquer sur c1

      getRandomQuote1Perso(tabVidePerso[1]).then((quote) =>
        this.setState({ c1: `${quote.citation}` })
      );
      //on veut récupérer 3 citations aléatoires différentes pour perso1
      //on récupère tout d'abord le tableau contenant toutesles citation de perso0
      getAllQuote1Perso(tabVidePerso[0]).then((quotes) =>
        this.setState({
          tabCit: this.randomize(quotes), //on mélange le tableau
          c2: this.state.tabCit[0], //on sauvegarde les 3 première citations
          c3: this.state.tabCit[1],
          c4: this.state.tabCit[2],
        })
      );
    }
  };

  _setAllPersoExpert = () => {
    //On copie le tableau listePersonnage
    for (let i = 0; i < listePersonnage.length; i++) {
      listePersonnageModified[i] = listePersonnage[i];
    }
    var tabVidePerso = ["", "", "", ""];
    var id;
    this.setState({ counter: this.state.counter + 1 });

    //On est dans la configuration "Quelle citation a été dite par"
    this.setState({ version: "Quelle citation a été dite par" });

    //On récupère 4 personnages random
    for (let j = 0; j < 4; j++) {
      id = Math.floor(Math.random() * listePersonnageModified.length);
      tabVidePerso.splice(j, 1, listePersonnageModified[id].nom);
      if (j == 0) {
        this.setState({ imagePerso: `${listePersonnageModified[id].image}` });
      }
      listePersonnageModified.splice(id, 1);
    }
    this.setState({ tabPerso: tabVidePerso, persoQuestion: tabVidePerso[0] });
    //on a sauvegardé les 4 perso et celui qui sera dans la question (le perso0)
    //on récupère 1 citation aléatoire dite par chaque personnage
    getRandomQuote1Perso(tabVidePerso[0]).then((quote) =>
      this.setState({ c1: `${quote.citation}` })
    ); //c'est donc la citation c1, dite par le perso0, qui constitue la bonne réponse
    getRandomQuote1Perso(tabVidePerso[1]).then((quote) =>
      this.setState({ c2: `${quote.citation}` })
    );
    getRandomQuote1Perso(tabVidePerso[2]).then((quote) =>
      this.setState({ c3: `${quote.citation}` })
    );
    getRandomQuote1Perso(tabVidePerso[3]).then((quote) =>
      this.setState({ c4: `${quote.citation}` })
    );
  };

  _setAllPersoDebutant = () => {
    console.log("debutant");
    console.log("score : " + this.state.score);
    console.log("counter : " + this.state.counter);

    //On copie le tableau listePersonnage
    for (let i = 0; i < listePersonnage.length; i++) {
      listePersonnageModified[i] = listePersonnage[i];
    }
    var tabVidePerso = ["", "", "", ""];
    var id;
    this.setState({ counter: this.state.counter + 1 });

    //On est dans la configuration "Quelle citation N'a PAS été dite par"
    this.setState({ version: "Quelle citation n'a PAS été dite par" });

    //On récupère 2 personnages random
    for (let j = 0; j < 2; j++) {
      id = Math.floor(Math.random() * listePersonnageModified.length);
      tabVidePerso.splice(j, 1, listePersonnageModified[id].nom);
      if (j == 0) {
        this.setState({ imagePerso: `${listePersonnageModified[id].image}` });
      }
      listePersonnageModified.splice(id, 1);
    }
    //On rempli le tableau 1x4 de telle sorte que tabVide=[perso1, perso0, perso1, perso1]
    tabVidePerso.splice(2, tabVidePerso[0]);
    tabVidePerso.splice(3, tabVidePerso[0]);
    this.setState({ tabPerso: tabVidePerso, persoQuestion: tabVidePerso[0] });
    //on récupère 1 citation aléatoire pour perso0 qu'on met en c1 car le joueur doit tjr cliquer sur c1

    getRandomQuote1Perso(tabVidePerso[1]).then((quote) =>
      this.setState({ c1: `${quote.citation}` })
    );
    //on veut récupérer 3 citations aléatoires différentes pour perso1
    //on récupère tout d'abord le tableau quotes contenant toutes les citations du perso0
    getAllQuote1Perso(tabVidePerso[0]).then((quotes) =>
      this.setState({
        tabCit: this.randomize(quotes), //on mélange le tableau
        c2: this.state.tabCit[0], //on sauvegarde les 3 première citations
        c3: this.state.tabCit[1],
        c4: this.state.tabCit[2],
      })
    );
  };

  closeDialog = () => {
    if (this.state.counter == 5) {
      this.props.navigation.navigate("LetsPlayALittleGame");
      this.setState({ counter: 0 });
      global.scoreEx2 = this.state.score;
    } else {
      this._loadGame();
    }
    this.setState({ dialogVisible: false });
  };

  //fonction pour mélanger un tableau (algorithme de Fisher)
  randomize = (tab) => {
    var i, j, tmp;
    for (i = tab.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      tmp = tab[i];
      tab[i] = tab[j];
      tab[j] = tmp;
    }
    return tab;
  };

  uneCitation = () => {
    //on crée un nouveau tableau de citation mélangé aléatoirement
    var tabCit = [this.state.c1, this.state.c2, this.state.c3, this.state.c4];
    tabCit = this.randomize(tabCit);
    var AnswerNega =
      'MAUVAISE réponse :/ \n\n La bonne réponse était "' +
      this.state.c1.substr(1, 70) +
      '..."';
    //pour chacune des citation réordonnées, on leur attribue une réponse négative et un nombre de point nul
    var leretour = [
      {
        cit: tabCit[0],
        answer: AnswerNega,
        score: 0,
      },
      {
        cit: tabCit[1],
        answer: AnswerNega,
        score: 0,
      },
      {
        cit: tabCit[2],
        answer: AnswerNega,
        score: 0,
      },
      {
        cit: tabCit[3],
        answer: AnswerNega,
        score: 0,
      },
    ];
    //on modifie le tableau pour sauvegarder la bonne réponse, en changeant le texte et le nombre de point
    for (let i = 0; i < leretour.length; i++) {
      if (tabCit[i] == this.state.c1) {
        leretour[i].answer = "BONNE réponse !!!!";
        leretour[i].score = 1;
      }
    }
    return leretour;
  };

  componentDidMount() {
    this._setAllPersoInter();
    this._setAllPersoDebutant();
    this._setAllPersoExpert();
    this._loadGame();
  }

  render() {
    const contentDialog = (
      <Dialog.Container visible={this.state.dialogVisible}>
        <Dialog.Title> Je veux pas faire ma raclette mais ...</Dialog.Title>
        <Dialog.Description>
          C'est une {`${this.state.textRep}`}
        </Dialog.Description>
        <Dialog.Button label="OK, next !" onPress={this.closeDialog} />
      </Dialog.Container>
    );

    const unTableau = this.uneCitation();

    const contentAnswer1 = (
      <View style={stylesEx2.container}>
        <TouchableOpacity
          onPress={() =>
            this.setState({
              dialogVisible: true,
              textRep: unTableau[0].answer,
              score: unTableau[0].score + this.state.score,
            })
          }
          style={stylesEx2.button}
        >
          <Text style={stylesEx2.proposition}>{unTableau[0].cit}</Text>
        </TouchableOpacity>
      </View>
    );

    const contentAnswer2 = (
      <View style={stylesEx2.container}>
        <TouchableOpacity
          onPress={() =>
            this.setState({
              dialogVisible: true,
              textRep: unTableau[1].answer,
              score: unTableau[1].score + this.state.score,
            })
          }
          style={stylesEx2.button}
        >
          <Text style={stylesEx2.proposition}>{unTableau[1].cit}</Text>
        </TouchableOpacity>
      </View>
    );

    const contentAnswer3 = (
      <View style={stylesEx2.container}>
        <TouchableOpacity
          onPress={() =>
            this.setState({
              dialogVisible: true,
              textRep: unTableau[2].answer,
              score: unTableau[2].score + this.state.score,
            })
          }
          style={stylesEx2.button}
        >
          <Text style={stylesEx2.proposition}>{unTableau[2].cit}</Text>
        </TouchableOpacity>
      </View>
    );

    const contentAnswer4 = (
      <View style={stylesEx2.container}>
        <TouchableOpacity
          onPress={() =>
            this.setState({
              dialogVisible: true,
              textRep: unTableau[3].answer,
              score: unTableau[3].score + this.state.score,
            })
          }
          style={stylesEx2.button}
        >
          <Text style={stylesEx2.proposition}>{unTableau[3].cit}</Text>
        </TouchableOpacity>
      </View>
    );

    return (
      <View style={stylesEx2.container}>
        <ImageBackground
          source={require("../assets/wall6.jpg")}
          style={stylesEx2.imageBG}
        >
          <ScrollView>
            {contentDialog}
            <View>
              <View style={stylesEx2.contTextImage}>
                <View style={stylesEx2.container}>
                  <Text style={stylesEx2.question}>
                    {this.state.version} {this.state.persoQuestion} ?
                  </Text>
                </View>
                <View>
                  <ImageModal
                    resizeMode="contain"
                    imageBackgroundColor="transparent"
                    style={stylesEx2.image}
                    source={{ uri: `${this.state.imagePerso}` }}
                  />
                </View>
              </View>

              {contentAnswer1}
              {contentAnswer2}
              {contentAnswer3}
              {contentAnswer4}
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}
