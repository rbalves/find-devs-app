import React, { useState } from "react";
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

const SignUp = () => {
  const [userData, setUserData] = useState<IRegisterData>({
    username: "",
    password: "",
    email: "",
    phone_number: "",
  });
  const [isConfirmCode, setIsConfirmCode] = useState(false);
  const [isLoad, setIsload] = useState(false);

  async function signUp(userData: IRegisterData) {
    const { username, email, password, phone_number } = userData;
    setIsload(!isLoad);
    try {
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email,
          phone_number,
        },
        autoSignIn: {
          enabled: true,
        },
      });
      setIsConfirmCode(!isConfirmCode);
    } catch (error) {
      console.error("Falha no cadastro", error);
    } finally {
      setIsload(false);
      console.log("encerrado");
    }
  }

  async function confirmSignUp(userData: IRegisterData) {
    setIsload(!isLoad);
    const { username, code } = userData;
    try {
      Auth.confirmSignUp(username, code);
      console.log("Confirmado com sucesso!");
    } catch (error) {
      console.error("Erro ao confirmar", error);
    } finally {
      setIsload(false);
      console.log("encerrado");
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "position"}
      style={styles.container}
    >
      <>
        {isLoad ? (
          <View style={styles.container}>
            <View style={styles.formContent}>
              <Text style={styles.textTitle}>Aguarde Carregando...</Text>
            </View>
          </View>
        ) : (
          <>
            {!isConfirmCode ? (
              <View style={styles.formContent}>
                <Text style={styles.textTitle}>Cadastrar</Text>
                <Text>Informe seu nome de usuário</Text>
                <TextInput
                  style={styles.inputText}
                  placeholder="Informe seu nome de usuário"
                  onChangeText={(text) =>
                    setUserData({ ...userData, username: text.toLowerCase() })
                  }
                  value={userData.username}
                  keyboardType="email-address"
                />
                <Text>Informe seu email</Text>
                <TextInput
                  style={styles.inputText}
                  placeholder="Informe seu email"
                  onChangeText={(text) =>
                    setUserData({ ...userData, email: text.toLowerCase() })
                  }
                  value={userData.email}
                  keyboardType="email-address"
                />
                <Text>Informe sua senha</Text>
                <TextInput
                  style={styles.inputText}
                  placeholder="Informe sua senha"
                  onChangeText={(text) =>
                    setUserData({ ...userData, password: text.toLowerCase() })
                  }
                  value={userData.password}
                  secureTextEntry={true}
                />
                <Text>Informe seu telefone</Text>
                <TextInput
                  style={styles.inputText}
                  placeholder="Informe seu telefone"
                  onChangeText={(text) =>
                    setUserData({
                      ...userData,
                      phone_number: text.toLowerCase(),
                    })
                  }
                  value={userData.phone_number}
                  keyboardType="numeric"
                />
                <Button title="Cadastrar" onPress={() => signUp(userData)} />
              </View>
            ) : (
              <View style={styles.formContent}>
                <Text style={styles.textTitle}>Confirmar código</Text>
                <Text>Informe seu código</Text>
                <TextInput
                  style={styles.inputText}
                  placeholder="Informe seu código"
                  onChangeText={(text) =>
                    setUserData({ ...userData, code: text })
                  }
                  value={userData.code}
                  keyboardType="numeric"
                />
                <Button
                  title="Confirmar"
                  onPress={() => confirmSignUp(userData)}
                />
              </View>
            )}
          </>
        )}
      </>
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

export default SignUp;
