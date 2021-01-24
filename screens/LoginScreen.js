import React, { useState } from "react";
import { StyleSheet, View, Text, KeyboardAvoidingView } from "react-native";
import { Button, Image, Input } from "react-native-elements";
import { LOGO_IMAGE } from "../images/images";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
      <Image style={{ width: 200, height: 220 }} source={{ uri: LOGO_IMAGE }} />

      <View>
        <Input
          placeholder="Email"
          autoFocus
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <Input
          placeholder="Password"
          secureTextEntry
          autoFocus
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <Button containerStyle={styles.button} title="Login" />

      <Button containerStyle={styles.button} title="Register" type="outline" />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
  button: {
    width: 200,
    marginTop: 10,
  },
});
