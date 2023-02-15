import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';

function WeekView({DayView}) {

  const [selected, select] = useState(false);


  return (
    <View style={styles.week}>
      <DayView selected={selected} onPress={() => select(!selected)}>1</DayView>
      <DayView selected={selected} onPress={() => select(!selected)}>2</DayView>
      <DayView selected={selected} onPress={() => select(!selected)}>3</DayView>
      <DayView selected={selected} onPress={() => select(!selected)}>4</DayView>
      <DayView selected={selected} onPress={() => select(!selected)}>5</DayView>
      <DayView selected={selected} onPress={() => select(!selected)}>6</DayView>
      <DayView selected={selected} onPress={() => select(!selected)}>7</DayView>
    </View>
  )

}

const styles = StyleSheet.create({

  week: {
    display: "flex",
    flexDirection: "row",
  }

});

export default WeekView;