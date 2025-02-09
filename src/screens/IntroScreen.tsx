import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Define los nombres de las pantallas
type RootStackParamList = {
  Intro: undefined;
  LoginScreen: undefined;
};

// Definir los props para la pantalla
type Props = NativeStackScreenProps<RootStackParamList, 'Intro'>;

const IntroScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      {/* Imagen superior */}
      <Image source={require('../assets/images/intro-image.jpg')} style={styles.image} />

      {/* Texto de bienvenida */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Explore Beyond: Your Gateway to Adventure</Text>
        <Text style={styles.subtitle}>
          Unveil the world's wonders with our travel app, designed for the modern-day explorer.
        </Text>
      </View>

      {/* Indicadores de paginación */}
      <View style={styles.pagination}>
        <View style={[styles.dot, styles.activeDot]} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>

      {/* Botón de Continuar */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 40,
    },
    image: {
        width: '100%',
        height: '55%',
        resizeMode: 'cover',
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000',
    },
    subtitle: {
        fontSize: 14,
        textAlign: 'center',
        color: '#666',
        marginTop: 10,
    },
    pagination: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#ccc',
        marginHorizontal: 4,
    },
    activeDot: {
        backgroundColor: '#4CAF50',
    },
    button: {
        backgroundColor: '#4CAF50',
        paddingVertical: 15,
        paddingHorizontal: 80,
        borderRadius: 30,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default IntroScreen;
