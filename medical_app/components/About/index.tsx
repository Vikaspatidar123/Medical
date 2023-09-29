import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Box, Button} from '@react-native-material/core';
type AboutProps = NativeStackScreenProps<RootStackParamList, 'About'>;
const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    flex: 1,
  },
  stretch: {
    height: 160,
    resizeMode: 'stretch',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
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
});
const About = ({route}: AboutProps) => {
  const {addCard} = route.params;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const keys = Object.keys(addCard || {});
  const total = keys.reduce((prev, acc) => {
    return prev + addCard[acc].count * addCard[acc].prise;
  }, 0);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          {keys.map(item => {
            return (
              <Box key={item} h={190} style={styles.box}>
                <View>
                  <Image
                    source={{
                      uri: addCard[item].url,
                    }}
                    style={styles.stretch}
                  />
                  <View style={styles.row}>
                    <Text>{addCard[item].name}</Text>
                    <Text>
                      Quantity:
                      {`${addCard[item].count} X ${addCard[item].prise}`}
                    </Text>
                    <Text>
                      Total:{addCard[item].prise * addCard[item].count}
                    </Text>
                  </View>
                </View>
              </Box>
            );
          })}
        </View>
      </ScrollView>
      <Button
        title={`Total Pay ${total}`}
        onPress={() => navigation.navigate('Home')}
      />
    </SafeAreaView>
  );
};

export default About;
