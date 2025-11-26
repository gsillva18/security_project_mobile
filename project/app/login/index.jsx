import React, { useState } from "react";
import {
  View, Text, TouchableOpacity, Image, TextInput, Alert
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
//import { GoogleSignin } from "@react-native-google-signin/google-signin";
import styles from "./style";

//Nesta tela eu estou fazendo o login!
export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  async function loginGoogle() {
    console.log("Fazendo login com o google!")
    /*
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      await AsyncStorage.setItem("@user", JSON.stringify(userInfo.user));

      navigation.replace("UserScreen");

    } catch (e) {
      console.log(e);
      Alert.alert("Erro", "Não foi possível entrar com o Google.");
    }
      */
  }

  async function loginEmailSenha() {
    if (!email || !senha) {
      return Alert.alert("Erro", "Preencha email e senha.");
    }

    console.log("Acabei de fazer login com o email e senha!")
    setLoading(true);

    try {
      //fazer chamada da api aqui para fazer login
      const resp = await fetch("https://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha })
      });

      const dados = await resp.json();

      if (!resp.ok) {
        setLoading(false);
        return Alert.alert("Erro", dados.mensagem);
      }

      await AsyncStorage.setItem("@user", JSON.stringify(dados.usuario));
      setLoading(false);

      navigation.replace("questions");

    } catch (error) {
      setLoading(false);
      Alert.alert("Erro", "Falha ao conectar ao servidor.");
    }
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png" }}
        style={styles.logo}
      />

      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.subtitle}>Entre com Google ou Email/Senha</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#888"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#888"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity
        style={[styles.button, styles.emailButton]}
        onPress={loginEmailSenha}
      >
        <Text style={styles.buttonText}>
          {loading ? "Entrando..." : "Login com Email"}
        </Text>
      </TouchableOpacity>

      <Text style={{ marginVertical: 20, fontSize: 16 }}>ou</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={loginGoogle}
      >
        <Text style={styles.buttonText}>Entrar com Google</Text>
      </TouchableOpacity>
    </View>
  );
}
