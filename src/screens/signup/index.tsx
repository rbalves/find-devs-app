import {
  Button,
  Center,
  FormControl,
  Icon,
  Image,
  Input,
  Pressable,
  ScrollView,
  Spinner,
  Text,
  VStack,
} from "native-base";
import React, { useRef, useState } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";

import { MaterialIcons } from "@expo/vector-icons/";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../styles/base";

import { Auth } from "aws-amplify";

export function SignUp() {
  const navigation = useNavigation();

  function handleScreen(screen: any) {
    navigation.navigate(screen);
  }

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
          phone_number: "+55" + phone_number,
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
      navigation.reset({
        routes: [{ name: "Login" }],
      });
      console.log("Confirmado com sucesso!");
    } catch (error) {
      console.error("Erro ao confirmar", error);
    } finally {
      setIsload(false);
      console.log("encerrado");
    }
  }

  const logoDev = require("../../assets/img/findDev-logo.png");
  const [show, setShow] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef(null);

  return (
    <Center
      height="full"
      _dark={{
        bg: colors.bgDark,
      }}
      _light={{
        bg: colors.blue1,
      }}
    >
      <VStack space={5} width="full" padding={15} mt={5}>
        <Center>
          <Image source={logoDev} size={40} alt="logo" m={4} />
          <Text
            style={{
              color: colors.white,
              fontWeight: "700",
              fontSize: 22,
              marginBottom: 10,
            }}
          >
            CRIAR CONTA
          </Text>
        </Center>
      </VStack>

      <VStack
        space={5}
        width="full"
        height="full"
        flex={2}
        paddingX={5}
        paddingTop={10}
        borderTopLeftRadius={15}
        borderTopRightRadius={15}
        _light={{
          bg: colors.white,
        }}
        _dark={{
          bg: colors.gray3,
        }}
      >
        <ScrollView>
          {isLoad ? (
            <Center>
              <Text>Aguarde Carregando...</Text>
              <Spinner color="cyan.500" size="lg" m="2" />
            </Center>
          ) : (
            <>
              {!isConfirmCode ? (
                <>
                  <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "position"}
                    style={{ flex: 1 }}
                  >
                    <FormControl>
                      <Input
                        placeholder="Informe seu nome de usuário"
                        onChangeText={(text) =>
                          setUserData({ ...userData, username: text })
                        }
                        value={userData.username}
                        keyboardType="email-address"
                        InputLeftElement={
                          <Icon
                            as={
                              <MaterialIcons name="face-retouching-natural" />
                            }
                            size={5}
                            ml="2"
                            mr="2"
                            color={colors.gray4}
                          />
                        }
                        mb={5}
                        mt={2}
                        variant="outline"
                        fontSize={20}
                        _dark={{
                          color: colors.white,
                        }}
                        _light={{
                          color: colors.gray2,
                        }}
                      />
                    </FormControl>

                    <FormControl>
                      <Input
                        placeholder="Informe seu email"
                        onChangeText={(text) =>
                          setUserData({ ...userData, email: text })
                        }
                        value={userData.email}
                        InputLeftElement={
                          <Icon
                            as={<MaterialIcons name="mail" />}
                            size={5}
                            ml="2"
                            mr="2"
                            color={colors.gray4}
                          />
                        }
                        mb={5}
                        mt={2}
                        variant="outline"
                        fontSize={20}
                        _dark={{
                          color: colors.white,
                        }}
                        _light={{
                          color: colors.gray2,
                        }}
                      />
                    </FormControl>

                    <FormControl>
                      <Input
                        placeholder="Informe sua senha"
                        onChangeText={(text) =>
                          setUserData({ ...userData, password: text })
                        }
                        value={userData.password}
                        type={show ? "text" : "password"}
                        InputRightElement={
                          <Pressable onPress={() => setShow(!show)}>
                            <Icon
                              as={
                                <MaterialIcons
                                  name={show ? "visibility" : "visibility-off"}
                                />
                              }
                              size={5}
                              mr="2"
                              color={colors.gray4}
                            />
                          </Pressable>
                        }
                        InputLeftElement={
                          <Icon
                            as={<MaterialIcons name="lock-outline" />}
                            size={5}
                            ml="2"
                            mr="2"
                            color={colors.gray4}
                          />
                        }
                        mb={5}
                        mt={2}
                        variant="outline"
                        fontSize={20}
                        _dark={{
                          color: colors.white,
                        }}
                        _light={{
                          color: colors.gray2,
                        }}
                      />
                    </FormControl>

                    <FormControl>
                      <Input
                        placeholder="Informe seu telefone"
                        onChangeText={(text) =>
                          setUserData({
                            ...userData,
                            phone_number: text,
                          })
                        }
                        value={userData.phone_number}
                        keyboardType="numeric"
                        InputLeftElement={
                          <Icon
                            as={<MaterialIcons name="phone-android" />}
                            size={5}
                            ml="2"
                            mr="2"
                            color={colors.gray4}
                          />
                        }
                        mb={5}
                        mt={2}
                        variant="outline"
                        fontSize={20}
                        _dark={{
                          color: colors.white,
                        }}
                        _light={{
                          color: colors.gray2,
                        }}
                      />
                    </FormControl>

                    <Button
                      onPress={() => signUp(userData)}
                      endIcon={
                        <Icon as={MaterialIcons} name="send" size="sm" />
                      }
                      size="lg"
                      mt={3}
                      mb={5}
                      _dark={{
                        color: colors.white,
                        bg: colors.blue2,
                      }}
                      _light={{
                        color: colors.white,
                        bg: colors.blue3,
                      }}
                    >
                      Registrar
                    </Button>
                  </KeyboardAvoidingView>
                </>
              ) : (
                <>
                  <Text>Informe seu código</Text>
                  <FormControl>
                    <Input
                      placeholder="Informe seu código"
                      onChangeText={(text) =>
                        setUserData({ ...userData, code: text })
                      }
                      value={userData.code}
                      keyboardType="numeric"
                      InputLeftElement={
                        <Icon
                          as={<MaterialIcons name="code" />}
                          size={5}
                          ml="2"
                          mr="2"
                          color={colors.gray4}
                        />
                      }
                      mb={5}
                      mt={2}
                      variant="outline"
                      fontSize={20}
                      _dark={{
                        color: colors.white,
                      }}
                      _light={{
                        color: colors.gray2,
                      }}
                    />
                  </FormControl>

                  <Button
                    onPress={() => confirmSignUp(userData)}
                    endIcon={<Icon as={MaterialIcons} name="send" size="sm" />}
                    size="lg"
                    mt={5}
                    mb={5}
                    _dark={{
                      color: colors.white,
                      bg: colors.blue2,
                    }}
                    _light={{
                      color: colors.white,
                      bg: colors.blue3,
                    }}
                  >
                    Confirmar
                  </Button>
                </>
              )}
            </>
          )}
        </ScrollView>
      </VStack>
    </Center>
  );
}
