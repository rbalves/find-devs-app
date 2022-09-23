import { Divider } from "native-base";
import React from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import useGetDevelopers from "../../hooks/useGetDevelopers";
import useFavorites from "../../hooks/useGetFavorites";
import store from "../../store";
import {
  addFavorite,
  removeFavorite,
} from "../../store/modules/favorites/reducer";
import { colors, spacings, typography } from "../../styles/base";
import styles from "./styles";

const Developer = () => {
  const { developers } = useGetDevelopers();

  const [devs] = Object.values(developers);

  const { favorites } = useFavorites();

  const handleHeartClick = (id: number) => {
    store.dispatch(isFavorite(id) ? removeFavorite(id) : addFavorite(id));
  };

  const isFavorite = (id: number) => {
    return favorites.includes(id);
  };

  return (
    <SafeAreaView style={{ margin: spacings.small }}>
      <ScrollView>
        <View style={{ marginBottom: spacings.large }}>
          <Text style={typography.headlineMedium}>Desenvolvedores</Text>
        </View>
        <Divider color={colors.blue1} />
        {devs.map(({ id, photo, name, description }) => {
          return (
            <Pressable onPress={() => console.log({ id })}>
              <View style={styles.card} key={id}>
                <View style={{ ...styles.column, flex: 2 }}>
                  <Image source={{ uri: photo }} style={styles.image} />
                </View>
                <View
                  style={{
                    ...styles.column,
                    flex: 3,
                    flexDirection: "column",
                    justifyContent: "space-around",
                    height: 125,
                  }}
                >
                  <View>
                    <Text style={typography.subtitleLarge}>{name}</Text>
                  </View>
                  <View>
                    <Text style={typography.bodySmall}>{description}</Text>
                  </View>
                </View>
                <Pressable
                  onPress={() => handleHeartClick(id)}
                  style={{ ...styles.column, alignItems: "center" }}
                >
                  <AntDesign
                    name={isFavorite(id) ? "heart" : "hearto"}
                    size={24}
                    color={colors.red1}
                  />
                </Pressable>
              </View>
              <Divider color={colors.blue1} />
            </Pressable>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Developer;
