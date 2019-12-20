import React from "react";
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableHighlightProps,
  TouchableOpacity,
  ViewStyle
} from "react-native";
import { Colors } from "../core/colors";

interface IProps extends TouchableHighlightProps {
  title: string;
  active?: boolean;
  onLanguageChange: (language: string) => void;
  children?: JSX.Element | JSX.Element[];
}

export const CustomBtn = (props: IProps): JSX.Element => {
  const { title, active, onLanguageChange } = props;
  let styleBtn = [styles.button];
  if (active) styleBtn.push(styles.active);
  let styleText = active ? styles.textActive : styles.text;

  return (
    <TouchableOpacity
      {...props}
      style={[styleBtn, props.style]}
      onPress={() => onLanguageChange(title)}
    >
      <Text style={styleText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.white,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 5
  } as ViewStyle,
  active: {
    backgroundColor: Colors.blue
  } as ViewStyle,
  textActive: {
    fontSize: 20,
    color: Colors.white
  } as TextStyle,
  text: {
    fontSize: 20,
    color: Colors.black
  } as TextStyle
});
