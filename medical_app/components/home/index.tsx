/* eslint-disable react/no-unstable-nested-components */
import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import {Box, Button} from '@react-native-material/core';
import {SegmentedButtons} from 'react-native-paper';

import {data} from '../data';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  box: {
    backgroundColor: '#faf089',
    borderRadius: 4,
    margin: 8,
    cursor: 'pointer',
    elevation: 2,
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowColor: 'red',
    // shadowOpacity:0.1,
    shadowRadius: 6,
  },
  stretch: {
    height: 120,
    resizeMode: 'stretch',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
interface CardCountState {
  [key: number]: number;
}
const Home = ({addCard,setAddCard}) => {
  const [value, setValue] = React.useState('');
  const [revealed, setRevealed] = useState(false);
  const [cardCount, setCardCount] = useState<CardCountState>({});
  // const [addCard, setAddCard] = useState<CardCountState>({});
  const onCount = (sin: 'plus' | 'minus', id: number) => {
    if (sin === 'plus') {
      setCardCount(prev => ({
        ...prev,
        [id]: (prev[id] || 0) + 1,
      }));
    } else if (cardCount[id] > 0) {
      setCardCount(prev => ({
        ...prev,
        [id]: (prev[id] || 0) - 1,
      }));
    }
  };
  return (
    <SafeAreaView>
      <ScrollView>
        {/* <Backdrop
          revealed={revealed}
          header={
            <AppBar
              title="Shree Ganesh"
              centerTitle={true}
              leading={props => (
                <IconButton
                  // icon={props => <Icon name="menu" {...props} />}
                  onPress={() => setRevealed(prevState => !prevState)}
                  {...props}
                />
              )}
              trailing={
                <Avatar
                  image={{uri: 'https://mui.com/static/images/avatar/1.jpg'}}
                  size={32}
                />
              }
            />
          }
          backLayer={<View style={{height: 50}} />}>
          <BackdropSubheader title="Subheader" />
        </Backdrop> */}
        <View>
          {/* <Button
            title={`Card (${Object.keys(addCard).length})`}
            onPress={() => navigation.navigate('About', {addCard})}
          /> */}
          <View style={styles.container}>
            {data.map(item => {
              return (
                <Box key={item.id} w={180} h={200} style={styles.box}>
                  <View>
                    <Image
                      source={{
                        uri: item.url,
                      }}
                      style={styles.stretch}
                    />

                    <View style={styles.row}>
                      <Text>{item.name}</Text>
                      <Text>Prise:{item.prise}</Text>
                    </View>
                    <View style={styles.row}>
                      <Button
                        title="-"
                        color="#fff"
                        onPress={() => onCount('minus', item.id)}
                      />
                      <Text>{cardCount?.[item.id] || 1}</Text>
                      <Button
                        color="#fff"
                        title="+"
                        onPress={() => onCount('plus', item.id)}
                      />
                    </View>
                    <Button
                      title="Add to Card"
                      onPress={() => {
                        setAddCard(prev => ({
                          ...prev,
                          [item.id]: {
                            ...item,
                            count: cardCount[item.id] || 1,
                          },
                        }));
                      }}
                    />
                  </View>
                </Box>
              );
            })}
          </View>
        </View>
      </ScrollView>
      {/* <SegmentedButtons
        value={value}
        onValueChange={setValue}
        buttons={[
          {
            value: 'walk',
            label: 'Walking',
          },
          {
            value: 'train',
            label: `Card (${Object.keys(addCard).length})`,
          },
          {value: 'order', label: 'Order'},
        ]}
      /> */}
    </SafeAreaView>
  );
};
export default Home;
