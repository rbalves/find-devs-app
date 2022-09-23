import React from "react";

import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { Divider } from "native-base";

import { AntDesign } from "@expo/vector-icons";

import useGetDevelopers from "../../hooks/useGetDevelopers";

import { colors, spacings, typography } from "../../styles/base";
import {
  addFavorite,
  getFavorites,
  removeFavorite,
} from "../../store/modules/favorites/reducer";
import store from "../../store";
import { useSelector } from "react-redux";
import useFavorites from "../../hooks/useGetFavorites";

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

const styles = StyleSheet.create({
  card: {
    padding: 8,
    marginVertical: 4,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  column: {
    flex: 1,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 5,
  },
  text: {
    fontSize: 14,
  },
  title: {
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 23,
    color: "#121214",
  },
});

export default Developer;
