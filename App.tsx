/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {Component} from 'react';
import {View, StyleSheet, ViewStyle, Text, TextStyle, ActivityIndicator} from 'react-native';
// @ts-ignore
import DefaultPreference from 'react-native-default-preference';

import {Button} from "./src/common/components/Button";
import {Colors} from "./src/common/core/colors";
import {localization} from "./src/common/localization/localization";

interface IState {
    currentLanguage: string;
}

class App extends Component <IState> {

    state = {
        currentLanguage: "",
    };

    componentDidMount(): void {
        DefaultPreference.get('language').then((value: string) => {
            console.log(value);
            if (value) {
                localization.common.setLanguage(value);
                console.log(localization.common.getLanguage());
                this.setState({currentLanguage: value});
            } else {
                this.setState({currentLanguage: localization.common.getLanguage()});
            }

        });
    }

    render(): JSX.Element {
        if (this.state.currentLanguage) {
            return (
                <View style={styles.container}>
                    <View style={styles.buttons}>
                        <Button title={localization.common.en}
                                active={this.state.currentLanguage === localization.common.en}
                                onLanguageChange={this.setLanguage}/>
                        <Button title={localization.common.ru}
                                active={this.state.currentLanguage === localization.common.ru}
                                onLanguageChange={this.setLanguage}/>
                        <Button title={localization.common.hi}
                                active={this.state.currentLanguage === localization.common.hi}
                                onLanguageChange={this.setLanguage}/>
                    </View>
                    <View>
                        <Text style={styles.text}>
                            {localization.common.phrase}
                        </Text>
                    </View>
                </View>
            );
        } else
            return (
                <View style={styles.container}>
                    <ActivityIndicator size="large"/>
                </View>
            )


    }

    private setLanguage = (language: string): void => {
        localization.common.setLanguage(language);
        DefaultPreference.set('language', language);
        this.setState({currentLanguage: language});

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.white,
    } as ViewStyle,
    buttons: {
        flexDirection: "row",
        marginBottom: 20,
    } as ViewStyle,
    text: {
        fontSize: 20,
    } as TextStyle,
});

export default App;
