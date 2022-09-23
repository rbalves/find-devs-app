import { Button, Center, Text, VStack } from "native-base";
import React from "react";

import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

export function Home() {
  const navigation = useNavigation();

  function handleScreen(screen: any) {
    navigation.navigate(screen);
  }

  return (
    <Center
      height="full"
      _dark={{
        bg: "#282b30",
      }}
      _light={{
        bg: "#044D65",
      }}
    >
      <VStack space={5} width="full" padding={15} mt={5}>
        <Center>
          <Text style={styles.text}>HOME</Text>
          {/* <Spinner color="cyan.500" size="lg" m="2" /> */}
        </Center>
        
        <Button
          onPress={() => handleScreen("Profile")}
          bg="blue.500"
          width="full"
          mt={5}
        >
          <Text>Profile</Text>
        </Button>
        <Button
          onPress={() => handleScreen("Developers")}
          bg="blue.500"
          color="white"
          width="full"
          mt={5}
        >
          <Text>Developers</Text>
        </Button>
        <Button
          onPress={() => handleScreen("Search")}
          bg="blue.500"
          width="full"
          mt={5}
        >
          <Text>Buscar</Text>
        </Button>
      </VStack>
    </Center>
  );
}
