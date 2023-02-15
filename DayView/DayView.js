import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


function DayView({selected = false, onPress = () => {}, children = ""}) {

  const dayInnerStyles = [styles.DayInner];
  const dayTextStyles = [styles.DayText];

  if (selected) {
    dayInnerStyles.unshift(styles.DayHighlight);
    dayTextStyles.push(styles.DaySelectedText);
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.Day}>
        <View style={dayInnerStyles}>
          <Text style={dayTextStyles}>{children}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Day: {
    height: 40,
    width: 40,
  },
  DayInner: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  DayHighlight: {
    backgroundColor: "red"
  },
  DayText: {
    fontSize: 14,
    fontWeight: "400",
    color: "#444444",
  },
  DaySelectedText: {
    color: "#ffffff"
  }
});

export default DayView;