import React from "react";
import { VStack, Center, Image, Button, Text } from "native-base";
import { useNavigation } from '@react-navigation/native';
import { colors } from "../../styles/base";

export function Preload() {
    const navigation = useNavigation();

    function handleScreen(screen: any) {
        navigation.navigate(screen)
    }

    const logoDev = require('../../assets/img/findDev-logo.png');

    return(
        <Center
            height='full'
            _dark={{
                bg: colors.bgDark
            }}
            _light={{
                bg: colors.blue1
            }}
        >
            <VStack
                space={5}
                width="full"
                padding={15}
                mt={5}
            >
                <Center>
                    <Image
                        source={logoDev}
                        size={40}
                        alt="logo"
                        m={4}
                    />
                </Center>
                <Button 
                    onPress={() => handleScreen('Login')}
                    size="lg"
                    bg={colors.white}
                    mt={10}
                >
                    <Text color={colors.black}>Login</Text>
                </Button>
                <Button 
                    onPress={() => handleScreen('Home')}
                    variant="outline"
                    size="lg"
                >
                    <Text color={colors.white}>Criar Conta</Text>
                </Button>
            </VStack>
        </Center>
    );
}