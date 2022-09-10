import { Button, Text } from "react-native";
import { Center, View } from "native-base";
import { useNavigation } from "@react-navigation/native";

export default function App() {
  const navigation = useNavigation();

  return (
    <View>
      <Center safeArea height="100%">
        <Text style={{ fontWeight: "700", fontSize: 32, lineHeight: 40 }}>
          HOME | Find Devs App
        </Text>
        <Button title="Buscar" onPress={() => navigation.navigate("Buscar")} />
      </Center>
    </View>
  );
}
