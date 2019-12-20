import React, { PureComponent } from "react";
import {
  View,
  StyleSheet,
  ViewStyle,
  Text,
  TextStyle,
  ActivityIndicator
} from "react-native";
import DefaultPreference from "react-native-default-preference";
import { CustomBtn } from "./src/common/components/CustomBtn";
import { Colors } from "./src/common/core/colors";
import { localization } from "./src/common/localization";

interface IState {
  currentLanguage: string;
}

class App extends PureComponent<IState> {
  state = {
    currentLanguage: ""
  };

  componentDidMount(): void {
    DefaultPreference.get("language").then((value: string) => {
      if (value) {
        localization.setLanguage(value);
        this.setState({ currentLanguage: value });
      } else {
        this.setState({ currentLanguage: localization.getLanguage() });
      }
    });
  }

  private setLanguage = (language: string): void => {
    localization.setLanguage(language);
    DefaultPreference.set("language", language);
    this.setState({ currentLanguage: language });
  };

  render(): JSX.Element {
    const { currentLanguage } = this.state;

    if (!currentLanguage)
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color={"blue"} />
        </View>
      );

    return (
      <View style={styles.container}>
        <View style={styles.buttons}>
          {localization.getAvailableLanguages().map((el: string) => (
            <CustomBtn
              title={el}
              key={el}
              active={currentLanguage === el}
              onLanguageChange={this.setLanguage}
            />
          ))}
        </View>
        <View>
          <Text style={styles.text}>{localization.phrase}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white
  } as ViewStyle,
  buttons: {
    flexDirection: "row",
    marginBottom: 20
  } as ViewStyle,
  text: {
    fontSize: 24
  } as TextStyle
});

export default App;
