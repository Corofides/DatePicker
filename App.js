import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Day from './DayView';
import WeekHeader from './WeekHeader';
import DayOfWeek from './DayOfWeek';
import WeekView from "./WeekView/WeekView";

function createDay(label, selected = false, available = true) {

  return {
    label: label,
    selected: selected,
    available: available,
  }

}

export default function App() {

  const tempDaysOfMonth = [];

  for (let i = 0; i < 31; i++) {

    tempDaysOfMonth.push(createDay(i + 1));

  }

  const [daysOfMonth, setDaysOfMonth] = useState(tempDaysOfMonth);



  console.log(daysOfMonth);

  const [selected, select] = useState(false);

  return (
    <View style={styles.container}>


      <View>
        <View style={styles.monthHeader}>
          <View style={styles.changeMonthButton}>
            <Text style={{textAlign: "center"}}>&#60;</Text>
          </View>
          <Text style={styles.monthHeaderText}>April 2023</Text>
          <View style={styles.changeMonthButton}>
            <Text>
              &#62;
            </Text>
          </View>
        </View>

        <WeekHeader DayComponent={DayOfWeek}/>
        <WeekView DayView={Day}/>
        <WeekView DayView={Day}/>
        <WeekView DayView={Day}/>
        <WeekView DayView={Day}/>
        <WeekView DayView={Day}/>
      </View>


      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  changeMonthButton: {
    width: 40,
    minWidth: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  monthHeader: {
    display: "flex",
    flexDirection: "row",
  },
  monthHeaderText: {
    fontSize: 14,
    flex: 1,
    textAlign: "center",
    fontWeight: "400",
  },
  week: {
    display: "flex",
    flexDirection: "row",
  }
});
