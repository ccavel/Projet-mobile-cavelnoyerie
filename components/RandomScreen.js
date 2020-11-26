import React, { Component } from "react";
import {
  ImageBackground,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
} from "react-native";
import { getRandomQuote } from "../helpers/kaamapi";
import { stylesRandom } from "../styles/styleRandom";
import { Audio } from "expo-av";

export default class RandomScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      citation: "",
      personnage: "",
      saison: "",
      isPlaying: true,
    };
  }
  _getRandomQuoteWithFeedback = () => {
    this.setState({ isLoading: true });
    getRandomQuote()
      .then((quote) =>
        this.setState({
          citation: `${quote.citation}`,
          personnage: `${quote.personnage}`,
          saison: `${quote.saison}`,
          episode: `${quote.episode}`,
        })
      )
      .then(() => (global.randomCit += 1));
    this.toggleAudioPlayback();
  };

  //==================================================================
  // Gestion des composants audio
  //==================================================================
  async loadAudio() {
    this.soundObject = new Audio.Sound();
    try {
      await this.soundObject.loadAsync({
        uri: "https://kaamelott-soundboard.2ec0b4.fr/sounds/a_roulettes.mp3",
      });
    } catch (e) {
      console.log("ERROR Loading Audio", e);
    }
  }

  toggleAudioPlayback() {
    this.setState({ isPlaying: !this.state.isPlaying }, () => {
      return (
        this.state.isPlaying
          ? this.soundObject.playAsync()
          : this.soundObject.stopAsync(),
        this.soundObject.playAsync()
      );
    });
  }
  componentDidMount() {
    this.loadAudio();
  }
  //==================================================================
  //==================================================================

  componentDidMount() {
    this._getRandomQuoteWithFeedback();
    this.loadAudio();
  }

  render() {
    const content = (
      <ScrollView>
        <View style={stylesRandom.infosContainer}>
          <TouchableOpacity
            onPress={this._getRandomQuoteWithFeedback}
            style={stylesRandom.button}
          >
            <Text style={stylesRandom.textBtn}>A ROULEEEETTTTES !!!!!</Text>
          </TouchableOpacity>

          <View style={stylesRandom.backgroundQuote}>
            <Text style={stylesRandom.quote}>« {this.state.citation} »</Text>
            <Text style={stylesRandom.author}>{this.state.personnage}</Text>
            <Text style={stylesRandom.livre}>{this.state.saison}</Text>
          </View>
        </View>
      </ScrollView>
    );

    return (
      <View style={stylesRandom.container}>
        <ImageBackground
          source={require("../assets/wall5.jpg")}
          style={stylesRandom.image}
        >
          {content}
        </ImageBackground>
      </View>
    );
  }
}
