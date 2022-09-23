import {
  Button,
  Heading,
  HStack,
  ScrollView,
  Text,
  VStack,
  Wrap,
} from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";

import { colors } from "../../styles/base";

const Search = () => {
  return (
    <>
      <ScrollView>
        <VStack mt={8} mr={4} ml={4} space={8}>
          <Heading>Assuntos</Heading>
          <HStack>
            <Wrap direction="row" justifyContent={"space-between"}>
              <Button
                padding={4}
                _text={{
                  color: colors.gray1,
                }}
                _light={{
                  bg: colors.blue5,
                }}
                borderRadius={20}
              >
                TAG NAME
              </Button>
            </Wrap>
          </HStack>
        </VStack>
        <VStack mt={8} mr={4} ml={4} space={8}>
          <Heading>Tecnologias</Heading>
          <Wrap direction="row" justifyContent={"space-between"}></Wrap>
        </VStack>
        <VStack mt={8} mr={4} ml={4} space={8}>
          <Heading>Localização</Heading>
          <Wrap direction="row" justifyContent={"space-between"}></Wrap>
        </VStack>
      </ScrollView>
      <VStack
        alignItems="center"
        position="absolute"
        bottom={16}
        right={0}
        left={0}
      >
        <TouchableOpacity
          style={{
            shadowColor: "rgba(0,0,0, .4)", // IOS
            shadowOffset: { height: 1, width: 1 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS
            backgroundColor: colors.success,
            elevation: 2, // Android
            height: 48,
            width: 343,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            borderRadius: 5,
          }}
        >
          <Text color={colors.white}>Buscar</Text>
        </TouchableOpacity>
      </VStack>
    </>
  );
};

export default Search;
