import React, { useState } from "react";
import { VStack,
         Center,
         FormControl,
         Image,
         Input,
         Button,
         Switch,
         Text,
         HStack,
         useColorMode,
         Icon,
         Divider,
         Pressable, 
         ScrollView,
         Flex,
         Checkbox,
         AlertDialog,
         Spinner } from "native-base";
import { MaterialIcons } from '@expo/vector-icons/'

import { useNavigation } from '@react-navigation/native';
import { colors } from "../../styles/base";
import AsyncStorage from '@react-native-async-storage/async-storage';


import { Auth } from "aws-amplify";

export function Login() {
    const navigation = useNavigation();

    function handleScreen(screen: any) {
        navigation.navigate(screen)
    }

    const [userData, setUserData] = useState<IUserData>({
        username: "",
        password: "",
    });
    
    const [isLoad, setIsload] = useState(false);

    async function signIn({ username, password }: IUserData) {
        setIsload(!isLoad);
        try {
          const user = await Auth.signIn(username, password);
          await AsyncStorage.setItem('token', `${user.signInUserSession.accessToken.jwtToken}`);
            navigation.reset({
                routes:[{name:'Home'}]
            });
          console.log("Aeee Logou");
          return user;
        } catch (error) {
          console.error("Erro ao logar", error);
        }
    }

    /** 
     * IMGs 
    */
    const logoDev = require('../../assets/img/findDev-logo.png');
    const facebookIcon = require('../../assets/icons/icons-facebook-48.png');
    const googleIcon = require('../../assets/icons/icons-google-48.png');

    /** 
     * Buttons [ Checkbox, Switch, Eye ]
    */
    const [groupValues, setGroupValues] = React.useState([]);
    const { colorMode, toggleColorMode } = useColorMode();
    const [show, setShow] = React.useState(false);

    /** 
     * Alert
    */
     const [isOpen, setIsOpen] = React.useState(false);
     const onClose = () => setIsOpen(false);
     const cancelRef = React.useRef(null);
    
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
            <Center>
                <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
                    <AlertDialog.Content>
                    <AlertDialog.CloseButton />
                        <AlertDialog.Body>
                            <Center p={5}>
                                <Icon as={<MaterialIcons name="warning" />}
                                    size={10}
                                    ml="2"
                                    mr="2"
                                    color={colors.danger}
                                />
                                <Text style={{color: colors.danger, fontWeight:'700', fontSize:20, marginVertical:20}}>ATENÇÃO</Text>

                                <Text style={{fontWeight:'700', fontSize:18, marginBottom:10}}>Você deve preencher o campo de login e senha para prosseguir</Text>
                            </Center>

                            <Button 
                                _dark={{
                                    color: colors.white,
                                    bg: colors.blue3
                                }}
                                _light={{
                                    color: colors.gray2,
                                    bg: colors.blue3
                                }}
                                onPress={onClose}>
                                Entendi
                            </Button>
                        </AlertDialog.Body>
                    </AlertDialog.Content>
                </AlertDialog>
            </Center>
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
                    <HStack alignItems="center">
                        <Icon as={MaterialIcons} name="brightness-5" size="sm" />    
                        <Switch 
                            isChecked={colorMode === "dark"}
                            onToggle={toggleColorMode}
                            aria-label={
                                colorMode === "dark" ? "Mudar para Light" : "Mudar para dark"
                            } />
                        <Icon as={MaterialIcons} name="brightness-2" size="sm" />
                    </HStack>
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
                    bg: colors.white
                }}
                _dark={{
                    bg: colors.gray3
                }}
            >

            <ScrollView>

                <FormControl>
                    <Input 
                        onChangeText={(text) => setUserData({ ...userData, username: text })}
                        value={userData.username}
                        keyboardType="email-address"
                        placeholder="email@email.com"
                        InputLeftElement={
                            <Icon as={<MaterialIcons name="person" />}
                                size={5}
                                ml="2"
                                mr="2"
                                color={colors.gray4}
                            />
                        }
                        mb={3}
                        variant="outline" 
                        fontSize={20}
                        _dark={{
                            color: colors.white
                        }}
                        _light={{
                            color: colors.gray2
                        }}
                    />
                </FormControl>

                <FormControl>
                    <Input 
                        onChangeText={(text) => setUserData({ ...userData, password: text })}
                        value={userData.password}
                        type={show ? "text" : "password"}
                        InputRightElement={
                            <Pressable onPress={() => setShow(!show)}>
                                <Icon as={
                                    <MaterialIcons name={show ? "visibility" : "visibility-off"} />
                                } 
                                size={5}
                                mr="2"
                                color={colors.gray4} />
                            </Pressable>
                        }
                        InputLeftElement={
                            <Icon as={<MaterialIcons name="lock-outline" />}
                                size={5}
                                ml="2"
                                mr="2"
                                color={colors.gray4}
                            />
                        }
                        placeholder="Password" 
                        variant="outline" 
                        fontSize={20}
                        _dark={{
                            color: colors.white
                        }}
                        _light={{
                            color: colors.gray2
                        }}
                    />
                </FormControl>

                <Flex direction="row-reverse" m="2">
                    <Text style={{color: colors.blue3, fontWeight:'700'}}>Esqueceu sua senha?</Text>
                </Flex>

                <HStack>
                    <Checkbox.Group onChange={setGroupValues} value={groupValues} accessibilityLabel="choose numbers">
                        <Checkbox value="one" m={2}>
                            <Text style={{fontWeight:'700'}}>Lembrar meu login</Text>
                        </Checkbox>
                    </Checkbox.Group>
                </HStack>

                <Button 
                    onPress={() => signIn(userData)}
                    endIcon={
                        isLoad == true ?
                        <Spinner color="cyan.500" size="lg" m="2" />
                        :
                        <Icon as={MaterialIcons} name="send" size="sm" />
                    }
                    size="lg"
                    mt={5}
                    mb={5}
                    _dark={{
                        color: colors.white,
                        bg: colors.blue2
                    }}
                    _light={{
                        color: colors.white,
                        bg:colors.blue3
                    }}
                >
                    Entrar
                </Button>

                <HStack space={3} justifyContent="center" alignItems="center">
                    <Flex direction="row" mb="1.0" mt="1.0">
                        <Divider my="3" _light={{
                            bg: colors.gray4
                        }} _dark={{
                            bg: colors.gray2
                        }} />
                    </Flex>
                    <Text>Or</Text>
                    <Flex direction="row" mb="1.0" mt="1.0">
                        <Divider my="3" _light={{
                            bg: colors.gray4
                        }} _dark={{
                            bg: colors.gray2
                        }} />
                    </Flex>
                </HStack>


                <HStack space={2} justifyContent="center" alignItems="center">
                    <Flex direction="row" mb="1.0" mt="0.5">
                        <Image
                            source={facebookIcon}
                            size={10}
                            alt="Facebook logo"
                            m={4}
                        />
                    </Flex>
                    <Flex direction="row" mb="1.0" mt="0.5">
                        <Image
                            source={googleIcon}
                            size={8}
                            alt="Google logo"
                            m={4}
                        />
                    </Flex>
                </HStack>

                <Center>
                    <Text>
                        Não tem uma conta? 
                        <Text style={{color: colors.blue3, fontWeight:'700'}}>SingUp</Text>
                    </Text>
                </Center>

            </ScrollView>
            </VStack>
        </Center>
    );
}