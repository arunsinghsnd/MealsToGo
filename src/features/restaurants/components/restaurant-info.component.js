import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    openingNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Title style={styles.title}>{name}</Title>
    </Card>
  );
};

export default RestaurantInfo;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cover: {
    padding: 20,
    backgroundColor: "white",
  },
  title: {
    padding: 16,
  },
});
