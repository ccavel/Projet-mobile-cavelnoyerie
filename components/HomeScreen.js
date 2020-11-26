import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
  Button,
  IconComponent
} from "react-native";
import { Audio } from "expo-av";

export default class HomeScreen extends React.Component {
  // <IconComponent name={"md-planet"} size={25} color={"#e91e63"}></IconComponent>
  constructor(props) {
    super(props);
    global.scoreEx2;
    global.scoreEx1;
    global.randomCit = 0;
    this.state = { isPlaying: false };
  }
  async loadAudio() {
    this.soundObject = new Audio.Sound();
    try {
      await this.soundObject.loadAsync({
        uri:
          "http://lerieur.com/wp-content/uploads/2019/01/musique-intro-kaamelott.mp3?_=1"
      });
       await this.soundObject.playAsync();
    } catch (e) {
      console.log("ERROR Loading Audio", e);
    }
    console.log(this.props.navigate);
  }

  toggleAudioPlayback() {
    this.setState({ isPlaying: !this.state.isPlaying }, () =>
      this.state.isPlaying
        ? this.soundObject.playAsync()
        : this.soundObject.stopAsync()
    );
    return "";
  }

  componentDidMount() {
    this.loadAudio();
  }
  componentWillUnmount() {
    this.soundObject.stopAsync();
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <ImageBackground
          source={require("../assets/poster.jpg")}
          style={{ width: "100%", height: "100%" }}
        >
          <View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("MyAccount")}
              style={{
                backgroundColor: "#fff",
                width: 120,
                height: 46,
                alignSelf: "flex-end",
                justifyContent: "center",
                margin: 5,
                opacity: 0.75,
                borderRadius: 5
              }}
            >
              <Text
                style={{
                  flex: 1,
                  padding: 5,
                  textAlign: "center",
                  fontWeight: "600"
                }}
              >
                {" "}
                Accéder à {"\n"} mon compte
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
