import { useState } from "react";
import {
  Button,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { Auth } from "aws-amplify";
import React from "react";

const SignIn = () => {
  const [userData, setUserData] = useState<IUserData>({
    username: "",
    password: "",
  });

  async function signIn({ username, password }: IUserData) {
    try {
      const user = await Auth.signIn(username, password);
      console.log("Aeee Logou", user);
      return user;
    } catch (error) {
      console.error("Erro ao logar", error);
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "position"}
      style={styles.container}
    >
      <View style={styles.formContent}>
        <Text style={styles.textTitle}>Logar</Text>
        <Text>Informe seu nome de usuário</Text>
        <TextInput
          style={styles.inputText}
          placeholder="Informe seu email"
          onChangeText={(text) => setUserData({ ...userData, username: text })}
          value={userData.username}
          keyboardType="email-address"
        />
        <Text>Informe sua senha</Text>
        <TextInput
          style={styles.inputText}
          placeholder="Informe sua senha"
          onChangeText={(text) => setUserData({ ...userData, password: text })}
          value={userData.password}
          secureTextEntry={true}
        />
        <Button title="Entrar" onPress={() => signIn(userData)} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  textTitle: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 22,
  },
  formContent: {
    backgroundColor: "#fff",
    width: "70%",
    height: "60%",
    justifyContent: "center",
    alignItems: "center",
  },
  inputText: {
    backgroundColor: "#f0f0f0",
    width: "90%",
    height: 25,
    margin: 10,
    borderRadius: 22,
    textAlign: "center",
  },
});

export default SignIn();
