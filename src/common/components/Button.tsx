import React, {PureComponent} from "react";
import {Text, TouchableOpacity, TouchableHighlightProps, StyleSheet, ViewStyle, TextStyle} from "react-native";
import {Colors} from "../core/colors";

interface IProps extends TouchableHighlightProps {
    title: string;
    active?: boolean;
    onLanguageChange: (language: string) => void;
    children?: JSX.Element | JSX.Element[];
}

export class Button extends PureComponent<IProps> {
    render(): JSX.Element {
        const {title, active, onLanguageChange, ...props} = this.props;
        let styleBtn = [styles.button];
        if (active)
            styleBtn.push(styles.active);
        let styleText = active ? styles.textActive : styles.text;

        return (
        <TouchableOpacity {...props} style={[styleBtn, props.style]} onPress={() => onLanguageChange(title)}>
            <Text style={styleText}>
                {title}
            </Text>
        </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.white,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginHorizontal: 5,
    } as ViewStyle,
    active: {
        backgroundColor: Colors.blue,
    } as ViewStyle,
    textActive: {
        color: Colors.white,
    } as TextStyle,
    text: {
        color: Colors.black,
    } as TextStyle,
});
