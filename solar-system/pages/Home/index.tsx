import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

const Home = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/Background.png')}
        style={styles.backgroundImage}>
        <View style={styles.containerTitle}>
          <Text style={styles.subtitle}>Aperte o cinto</Text>
          <Text style={styles.title}>
            Comece sua jornada pelo sistema solar.
          </Text>
        </View>
        <View style={styles.containerButton}>
          <Text style={styles.buttonTitle}>Pronto para a decolagem?</Text>
          <RectButton>
            <LinearGradient
              colors={['#EF5F53', '#FA8F70']}
              start={[0, 0]}
              end={[1, 0]}
              style={styles.button}>
              <Text style={styles.buttonText}>Começar agora</Text>
              <Image source={require('../../assets/Forward.png')} />
            </LinearGradient>
          </RectButton>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    paddingHorizontal: 24,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },

  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#151515',
  },

  subtitle: {
    fontSize: 16,
    color: '#ffffff',
    opacity: 0.65,
  },

  title: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 32,
    color: '#FFFFFF',
    textAlign: 'center',
  },

  containerTitle: {
    alignItems: 'center',
  },
  containerButton: {
    paddingTop: 246,
    alignItems: 'center',
  },

  buttonTitle: {
    fontSize: 14,
    color: '#FFFFFF',
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 16,
    paddingVertical: 16,
    paddingHorizontal: 32,
    flexDirection: 'row',
    textAlign: 'center',
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    paddingRight: 16,
  },
});

export default Home;
