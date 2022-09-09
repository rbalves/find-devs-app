import React from "react";
import { VStack, Center, Image, Button, Text } from "native-base";
import { useNavigation } from '@react-navigation/native';

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
                    bg="#fff"
                    mt={10}
                >
                    <Text color='#000'>Login</Text>
                </Button>
                <Button 
                    onPress={() => handleScreen('Home')}
                    variant="outline"
                    size="lg"
                >
                    <Text color='#fff'>Criar Conta</Text>
                </Button>
            </VStack>
        </Center>
    );
}