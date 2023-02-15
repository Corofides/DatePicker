import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

function DayOfWeek({children}) {

  return (
    <View style={styles.dayOfWeek}>
      <Text style={styles.dayOfWeekText}>{children}</Text>
    </View>
  )

}

const styles = StyleSheet.create({
  dayOfWeek: {
    width: 40,
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  dayOfWeekText: {
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 20,
    color: "#444444"
  }
});

export default DayOfWeek;