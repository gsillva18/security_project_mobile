import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StatusBar,
    Modal,
    TouchableOpacity,
    Image,
    Alert,
} from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';
import { auth } from '../../firebaseConfig';

export default function Home({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);

    // Configuração do login com Google
    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: '769462799087-k7g45obnlj4pjr97dgtd91009n93i2v8.apps.googleusercontent.com', // ID Cliente OAuth do console do Google Cloud
        webClientId: '769462799087-k7g45obnlj4pjr97dgtd91009n93i2v8.apps.googleusercontent.com',
    });

    useEffect(() => {
        if (response?.type === 'success') {
            const { id_token } = response.params;
            const credential = GoogleAuthProvider.credential(id_token);

            signInWithCredential(auth, credential)
                .then(async (result) => {
                    const user = result.user;
                    await AsyncStorage.setItem('@user', JSON.stringify(user)); //para cadastrar o usuário no AsyncStorage
                    setModalVisible(false);
                    navigation.replace('questions'); // navega para a tela de questões, já que conseguiu fazer login
                })
                .catch((error) => {
                    Alert.alert('Erro', 'Falha ao autenticar com o Google.');
                    console.error(error);
                });
        }
    }, [response]);

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#1e1e2f" />

            <Text style={styles.title}>Aplicativo para cadastro de questões</Text>

            <Text style={styles.description}>
                Bem-vindo ao aplicativo de cadastro de questões da melhor forma!
            </Text>

            <TouchableOpacity
                style={styles.loginButton}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.loginButtonText}>Fazer Login</Text>
            </TouchableOpacity>


            <Modal
                visible={modalVisible}
                transparent
                animationType="slide"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Login</Text>
                        <Text style={styles.modalText}>Escolha uma forma de login:</Text>


                        <TouchableOpacity
                            style={styles.googleButton}
                            onPress={() => promptAsync()}
                            disabled={!request}
                        >
                            <Image
                                source={{
                                    uri: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png',
                                }}
                                style={styles.googleLogo}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => setModalVisible(false)}
                            style={styles.closeButton}
                        >
                            <Text style={styles.closeButtonText}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}
