import {SafeAreaView, ScrollView, View, StyleSheet} from 'react-native';
import {Button, SegmentedButtons} from 'react-native-paper';
import React, {useState} from 'react';
import Home from '../home';
import About from '../About';
interface CardCountState {
  [key: number]: number;
}
const Nav = () => {
  const [value, setValue] = React.useState('home');
  const [addCard, setAddCard] = useState<CardCountState>({});

  const MAPPING = {
    home: Home,
    card: About,
  };
  const COM = MAPPING[value];
  return (
    <View style={styles.container}>
      <View style={styles.fixedView}>
        <SegmentedButtons
          value={value}
          onValueChange={setValue}
          buttons={[
            {
              value: 'home',
              label: 'Home',
            },
            {
              value: 'card',
              label: `Card (${Object.keys(addCard).length})`,
            },
            {value: 'home', label: 'Driving'},
          ]}
        />
      </View>
      <View style={styles.scrollableView}>
        <COM setAddCard={setAddCard} addCard={addCard} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fixedView: {
    height: 100, // Set the height you want for the fixed view
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fixedText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollableView: {
    flex: 1,
    // padding: 5, // Add padding to create space between fixed and scrollable views
  },
  card: {
    height: 100, // Set the height you want for each card
    backgroundColor: 'white',
    marginVertical: 8, // Add margin to separate cards
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Nav;
