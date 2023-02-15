import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

function WeekHeader({DayComponent}) {

  return (
    <View style={styles.dayOfWeekHeader}>
      <DayComponent>M</DayComponent>
      <DayComponent>T</DayComponent>
      <DayComponent>W</DayComponent>
      <DayComponent>T</DayComponent>
      <DayComponent>F</DayComponent>
      <DayComponent>S</DayComponent>
      <DayComponent>S</DayComponent>
    </View>
  )

}

const styles = StyleSheet.create({
  dayOfWeekHeader: {
    display: "flex",
    flexDirection: "row",
  },
});

export default WeekHeader;