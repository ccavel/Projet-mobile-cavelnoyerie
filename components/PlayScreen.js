import React, { Component } from "react";
import { TouchableOpacity, Text, View, ImageBackground} from "react-native";
import { CheckBox } from "react-native-elements";
import { stylesPlay } from "../styles/stylePlay";

export default class PlayScreen extends React.Component {
  constructor(props) {
    super(props);
    global.level = 2;
    this.state = {
      checked1: false,
      checked2: false,
      checked3: true
    };
  }

  setCheckedBox1 = () => {
    if (this.state.checked2) {
      this.setState({ checked1: true, checked2: false });
    } else if (this.state.checked3) {
      this.setState({ checked1: true, checked3: false });
    } else {
      this.setState(!this.state.checked1);
    }

    global.level = 0;
  };

  setCheckedBox2 = () => {
    if (this.state.checked1) {
      this.setState({ checked2: true, checked1: false });
    } else if (this.state.checked3) {
      this.setState({ checked2: true, checked3: false });
    } else {
      this.setState(!this.state.checked2);
    }
    global.level = 1;
  };

  setCheckedBox3 = () => {
    if (this.state.checked2) {
      this.setState({ checked3: true, checked2: false });
    } else if (this.state.checked1) {
      this.setState({ checked3: true, checked1: false });
    } else {
      this.setState(!this.state.checked3);
    }
    global.level = 2;
  };

  render() {
    return (
      <View style={stylesPlay.container}>
        <ImageBackground
          source={require("../assets/4011.jpg")}
          style={stylesPlay.imageBG}
        >
          <Text style={stylesPlay.text1}>Choisis ton niveau, Chevalier !</Text>
          <View 
            style={stylesPlay.bigContainerCheckBox}
          >
            <CheckBox
              style={stylesPlay.lesCheckBox}
              title="Débutant"
              checked={this.state.checked1}
              onPress={this.setCheckedBox1}
              textStyle={stylesPlay.textCheckBox}
              containerStyle={stylesPlay.containerCheckBox}
              checkedColor="#e8d9d0"
              uncheckedColor="#e8d9d0"
            />
            <CheckBox
              style={stylesPlay.lesCheckBox}
              title="Intermédiaire"
              checked={this.state.checked2}
              onPress={this.setCheckedBox2}
              textStyle={stylesPlay.textCheckBox}
              containerStyle={stylesPlay.containerCheckBox}
              checkedColor="#e8d9d0"
              uncheckedColor="#e8d9d0"
            />
            <CheckBox
              style={stylesPlay.lesCheckBox}
              title="Expert"
              checked={this.state.checked3}
              onPress={this.setCheckedBox3}
              textStyle={stylesPlay.textCheckBox}
              containerStyle={stylesPlay.containerCheckBox}
              checkedColor="#e8d9d0"
              uncheckedColor="#e8d9d0"
            />
          </View>
          <Text style={stylesPlay.text2}>
            Retrouve le personnage à l'origine de la citation !
          </Text>
          <Text style={stylesPlay.text3}>
            Attention, c'est pas si simple...
          </Text>
          <View style={stylesPlay.containerButton}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Ex1")}
              style={stylesPlay.buttonReload}
            >
              <Text style={stylesPlay.proposition}>Faire le Jeu n°1</Text>
            </TouchableOpacity>
          </View>
          <Text style={stylesPlay.text4}>
            Dernier score réalisé : {global.scoreEx1}/5
          </Text>
          <Text style={stylesPlay.text2}>
            Retrouve la citation qui a été dite par le personnage... ou pas !
          </Text>
          <Text style={stylesPlay.text3}>
            En tout cas moi j'ai appris à lire, ben je souhaite ça à personne.
          </Text>

          <View style={stylesPlay.containerButton}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Ex2")}
              style={stylesPlay.buttonReload}
            >
              <Text style={stylesPlay.proposition}>Faire le Jeu n°2</Text>
            </TouchableOpacity>
          </View>
          <Text style={stylesPlay.text4}>
            Dernier score réalisé : {global.scoreEx2}/5
          </Text>
        </ImageBackground>
      </View>
    );
  }
}
