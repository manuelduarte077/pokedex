import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

const Loading = () => {
  return (
    <View style={styles.activityContainer}>
      <ActivityIndicator size={50} color="grey" />
      <Text>Loading...</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  activityContainer: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
  },
});
