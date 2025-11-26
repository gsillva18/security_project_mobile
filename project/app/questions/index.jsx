import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';

export default function Questions({ navigation }) {

    const [user, setUser] = useState(null);

    const handleLogout = async () => {
        await AsyncStorage.removeItem('@user');
        navigation.replace('login');
    };



    // Simulação de conexão com o banco de dados
    const [questions, setQuestions] = useState([
        {
            id: '1',
            titulo: 'O que é IoB?',
            categoria: 'Fundamentos de Informática',
            nivel: 'Fácil',
        },
        {
            id: '2',
            titulo: 'Explique o conceito criptografia assimétrica',
            categoria: 'Segurança',
            nivel: 'Médio',
        },
        {
            id: '3',
            titulo: 'O que é o teste unitário?',
            categoria: 'Teste',
            nivel: 'Fácil',
        },
    ]);


    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.titulo}</Text>
            <Text style={styles.cardSubtitle}>Categoria: {item.categoria}</Text>
            <Text style={styles.cardLevel}>Nível: {item.nivel}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#1e1e2f" />

            <Text style={styles.header}>Questões</Text>

            {questions.length > 0 ? (
                <FlatList
                    data={questions}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    contentContainerStyle={styles.listContainer}
                />
            ) : (
                <Text style={styles.emptyText}>Nenhuma questão cadastrada ainda.</Text>
            )}

            <TouchableOpacity
                style={styles.addButton}
                onPress={() => alert('Aqui seria para desenvolver uma função de cadastro de questão!')}
            >
                <Text style={styles.addButtonText}>Adicionar</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.addButton}
                onPress={() => handleLogout()}
            >
                <Text style={styles.logoutButtonText}>Sair</Text>
            </TouchableOpacity>
        </View>
    );
}
