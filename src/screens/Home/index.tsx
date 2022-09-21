import { Button } from "react-native";
import { Center, View } from "native-base";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View>
      <Center safeArea height="100%">
        <Button title="Buscar" onPress={() => navigation.navigate("Buscar")} />
      </Center>
    </View>
  );
}
