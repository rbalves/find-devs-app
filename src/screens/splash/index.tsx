import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { Center, Image, Spinner, VStack } from "native-base";
import React, { useEffect } from "react";

import { colors } from "../../styles/base";

export function Splash() {
  const navigation = useNavigation();
  const logoDev = require("../../assets/img/findDev-logo.png");

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem("token");

      if (token) {
        await AsyncStorage.setItem("token", token);

        navigation.reset({
          index: 0,
          routes: [{ name: "Login" }],
        });
      } else {
        navigation.navigate("Preload");
      }
    };
    checkToken();
  }, []);

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
          <Spinner color="cyan.500" size="lg" m="2" />
        </Center>
      </VStack>
    </Center>
  );
}
