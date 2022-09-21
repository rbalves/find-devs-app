import React, { useEffect } from "react";
import { VStack, Center, Text, Spinner } from "native-base";
import { useNavigation } from '@react-navigation/native';

export function Home() {
    const navigation = useNavigation();
    const logoDev = require('../../assets/img/findDev-logo.png');
 
    return(
        <Center
            height='full'
            _dark={{
                bg: "#282b30"
            }}
            _light={{
                bg: "#044D65"
            }}
        >
            <VStack
                space={5}
                width="full"
                padding={15}
                mt={5}
            >
                <Center>
                    <Text>HOME</Text>
                    <Spinner color="cyan.500" size="lg" m="2" />
                </Center>
            </VStack>
        </Center>
    );
}