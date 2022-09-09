import React from "react";
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
         AlertDialog } from "native-base";
import { MaterialIcons } from '@expo/vector-icons/'

import { useNavigation } from '@react-navigation/native';

export function Login() {
    const navigation = useNavigation();

    function handleScreen(screen: any) {
        navigation.navigate(screen)
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
                bg: "#282b30"
            }}
            _light={{
                bg: "#044D65"
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
                                    color="#FF3030"
                                />
                                <Text style={{color:'#FF3030', fontWeight:'700', fontSize:20, marginVertical:20}}>ATENÇÃO</Text>

                                <Text style={{fontWeight:'700', fontSize:18, marginBottom:10}}>Você deve preencher o campo de login e senha para prosseguir</Text>
                            </Center>

                            <Button 
                                _dark={{
                                    color: "primary.50",
                                    bg: "#0498B7"
                                }}
                                _light={{
                                    color: "#36393e",
                                    bg:"#0498B7"
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
                    bg: "#fff"
                }}
                _dark={{
                    bg: "#424549"
                }}
            >

            <ScrollView>

                <FormControl>
                    <Input 
                        placeholder="email@email.com"
                        InputLeftElement={
                            <Icon as={<MaterialIcons name="person" />}
                                size={5}
                                ml="2"
                                mr="2"
                                color="muted.400"
                            />
                        }
                        mb={3}
                        variant="outline" 
                        fontSize={20}
                        _dark={{
                            color: "primary.50"
                        }}
                        _light={{
                            color: "#36393e"
                        }}
                    />
                </FormControl>

                <FormControl>
                    <Input 
                        type={show ? "text" : "password"}
                        InputRightElement={
                            <Pressable onPress={() => setShow(!show)}>
                                <Icon as={
                                    <MaterialIcons name={show ? "visibility" : "visibility-off"} />
                                } 
                                size={5}
                                mr="2"
                                color="muted.400" />
                            </Pressable>
                        }
                        InputLeftElement={
                            <Icon as={<MaterialIcons name="lock-outline" />}
                                size={5}
                                ml="2"
                                mr="2"
                                color="muted.400"
                            />
                        }
                        placeholder="Password" 
                        variant="outline" 
                        fontSize={20}
                        _dark={{
                            color: "primary.50"
                        }}
                        _light={{
                            color: "#36393e"
                        }}
                    />
                </FormControl>

                <Flex direction="row-reverse" m="2">
                    <Text style={{color:'#0498B7', fontWeight:'700'}}>Esqueceu sua senha?</Text>
                </Flex>

                <HStack>
                    <Checkbox.Group onChange={setGroupValues} value={groupValues} accessibilityLabel="choose numbers">
                        <Checkbox value="one" m={2}>
                            <Text style={{fontWeight:'700'}}>Lembrar meu login</Text>
                        </Checkbox>
                    </Checkbox.Group>
                </HStack>

                <Button 
                    // onPress={() => handleScreen('Home')}
                    onPress={() => setIsOpen(!isOpen)}
                    endIcon={<Icon as={MaterialIcons} name="send" size="sm" />}
                    size="lg"
                    mt={5}
                    mb={5}
                    _dark={{
                        color: "primary.50",
                        bg: "#0498B7"
                    }}
                    _light={{
                        color: "#36393e",
                        bg:"#0498B7"
                    }}
                >
                    Login
                </Button>

                <HStack space={3} justifyContent="center" alignItems="center">
                    <Flex direction="row" mb="1.0" mt="1.0">
                        <Divider my="3" _light={{
                            bg: "muted.200"
                        }} _dark={{
                            bg: "muted.500"
                        }} />
                    </Flex>
                    <Text>Or</Text>
                    <Flex direction="row" mb="1.0" mt="1.0">
                        <Divider my="3" _light={{
                            bg: "muted.200"
                        }} _dark={{
                            bg: "muted.500"
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
                        <Text style={{color:'#0498B7', fontWeight:'700'}}>SingUp</Text>
                    </Text>
                </Center>

            </ScrollView>
            </VStack>
        </Center>
    );
}