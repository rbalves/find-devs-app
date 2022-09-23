import React from 'react'
import { ScrollView, VStack, HStack, Stack, Image, Text } from "native-base";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { spacings, colors, typography, fontConfig } from "../../styles/base";

const Profile = () => {
  return (
    <VStack flex={1} margin={spacings.xsmall} space={spacings.small}>
      <HStack alignItems="center" marginTop={spacings.xsmall}>
        <Stack>
          <Image
            alt="Developer profile image"
            height={68}
            width={68}
            borderRadius={50}
            marginRight={spacings.xxsmall}
            source={{
              uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
            }}
          ></Image>
        </Stack>
        <VStack>
          <Text
            fontFamily={fontConfig.heading.bold}
            {...typography.subtitleMedium}
            lineHeight={0}
            color={colors.gray1}
          >
            Fernanda Ribeiro
          </Text>
          <Text
            fontFamily={fontConfig.heading.bold}
            {...typography.bodySmall}
            lineHeight={0}
            color={colors.gray1}
          >
            Front-end Developer
          </Text>
          <HStack alignItems="center" space={1}>
            <MaterialIcons name="place" size={12} color={colors.red1} />
            <Text
              fontFamily={fontConfig.heading.bold}
              {...typography.bodySmall}
              lineHeight={0}
              color={colors.gray1}
            >
              Recife
            </Text>
          </HStack>
        </VStack>
      </HStack>
      <VStack>
        <Text
          fontFamily={fontConfig.heading.bold}
          {...typography.subtitleMedium}
          color={colors.gray1}
          marginBottom={spacings.xxsmall}
        >
          Skills
        </Text>
        <ScrollView maxHeight={200}>
          <HStack flexWrap="wrap" alignItems="flex-start">
            <HStack width="50%" marginBottom={spacings.xxsmall} alignItems="center" space={1}>
              <MaterialIcons name="circle" size={12} color={colors.gray2} />
              <Text
                fontFamily={fontConfig.heading.bold}
                {...typography.subtitleMedium}
                color={colors.gray2}
              >
                React
              </Text>
            </HStack>
            <HStack width="50%" marginBottom={spacings.xxsmall} alignItems="center" space={1}>
              <MaterialIcons name="circle" size={12} color={colors.gray2} />
              <Text
                fontFamily={fontConfig.heading.bold}
                {...typography.subtitleMedium}
                color={colors.gray2}
              >
                VueJs
              </Text>
            </HStack>
            <HStack width="50%" marginBottom={spacings.xxsmall} alignItems="center" space={1}>
              <MaterialIcons name="circle" size={12} color={colors.gray2} />
              <Text
                fontFamily={fontConfig.heading.bold}
                {...typography.subtitleMedium}
                color={colors.gray2}
              >
                Typescript
              </Text>
            </HStack>
            <HStack width="50%" marginBottom={spacings.xxsmall} alignItems="center" space={1}>
              <MaterialIcons name="circle" size={12} color={colors.gray2} />
              <Text
                fontFamily={fontConfig.heading.bold}
                {...typography.subtitleMedium}
                color={colors.gray2}
              >
                CSS
              </Text>
            </HStack>
            <HStack width="50%" marginBottom={spacings.xxsmall} alignItems="center" space={1}>
              <MaterialIcons name="circle" size={12} color={colors.gray2} />
              <Text
                fontFamily={fontConfig.heading.bold}
                {...typography.subtitleMedium}
                color={colors.gray2}
              >
                HTML
              </Text>
            </HStack>
            <HStack width="50%" marginBottom={spacings.xxsmall} alignItems="center" space={1}>
              <MaterialIcons name="circle" size={12} color={colors.gray2} />
              <Text
                fontFamily={fontConfig.heading.bold}
                {...typography.subtitleMedium}
                color={colors.gray2}
              >
                SASS
              </Text>
            </HStack>
          </HStack>
        </ScrollView>
      </VStack>
      <VStack position="absolute" bottom={20}>
        <Text fontFamily={fontConfig.heading.bold} {...typography.linkLarge} color={colors.gray1}>
          Termos e políticas
        </Text>
        <Text fontFamily={fontConfig.heading.bold} {...typography.linkLarge} color={colors.gray1}>
          Perguntas frequentes
        </Text>
        <Text fontFamily={fontConfig.heading.bold} {...typography.linkLarge} color={colors.gray1}>
          Suporte
        </Text>
      </VStack>
      <VStack alignItems="center" position="absolute" bottom={0} right={0} left={0}>
        <TouchableOpacity
          style={{
            shadowColor: "rgba(0,0,0, .4)", // IOS
            shadowOffset: { height: 1, width: 1 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS
            backgroundColor: "#fff",
            elevation: 2, // Android
            height: 45,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            borderRadius: 5,
          }}
        >
          <Text
            fontFamily={fontConfig.heading.bold}
            {...typography.subtitleMedium}
            color={colors.danger}
          >
            Sair
          </Text>
        </TouchableOpacity>
      </VStack>
    </VStack>
  );
};

export default Profile;
