import {SafeAreaView, ScrollView} from 'react-native';
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
    <SafeAreaView>
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
      <ScrollView>
        <COM setAddCard={setAddCard} addCard={addCard} />
        </ScrollView>
    </SafeAreaView>
  );
};
export default Nav;
