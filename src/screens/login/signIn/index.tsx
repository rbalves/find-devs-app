import React, { useState } from "react";
import {
  Button,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  View,
} from "react-native";

import { Auth } from "aws-amplify";

import styles from "./styles";

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

export default SignIn();
