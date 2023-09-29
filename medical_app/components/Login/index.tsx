import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Button,
  TextInput,
  Title,
  Provider as PaperProvider,
} from 'react-native-paper';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const Login = ({navigation}: LoginProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleLogin = () => {
    navigation.navigate('Home');
    console.log(`Logging in with Email: ${email}, Password: ${password}`);
  };

  const handleSignup = () => {
    console.log(`Signing up with Email: ${email}, Password: ${password}`);
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Title>{isLogin ? 'Login' : 'Signup'}</Title>
        <TextInput
          label="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          label="Password"
          value={password}
          secureTextEntry
          onChangeText={text => setPassword(text)}
          style={styles.input}
        />
        <Button
          mode="contained"
          onPress={isLogin ? handleLogin : handleSignup}
          style={styles.button}>
          {isLogin ? 'Login' : 'Signup'}
        </Button>
        <Button onPress={toggleForm} style={styles.toggleButton}>
          {isLogin ? 'Switch to Signup' : 'Switch to Login'}
        </Button>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    width: '100%',
    marginBottom: 16,
  },
  button: {
    width: '100%',
    marginTop: 8,
  },
  toggleButton: {
    marginTop: 16,
  },
});

export default Login;
