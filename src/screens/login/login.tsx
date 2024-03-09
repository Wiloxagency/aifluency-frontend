import React, { useState } from "react";
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import axios from 'axios';
import { style } from "./style";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [token, setToken] = useState(null);

  const handleLogin = async () => {
    try {
      console.log("Enviando requisição de login...");
      const response = await axios.post('http://192.168.0.101:5000/login', {
        email: email,
        password: password,
      });

      console.log("Resposta do servidor:", response.data);

      const { token, user } = response.data;

      setToken(token);

      Alert.alert("Login bem-sucedido", "Você está logado!");
    } catch (error) {
      console.error("Erro na requisição:", error);

      if (error.response && error.response.data) {
        setError(error.response.data.message);
      } else {
        setError("Erro na requisição. Tente novamente mais tarde.");
      }
    }
  };

  return (
    <LinearGradient
      colors={["#B0D5EF", "#FFE0E0"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1.4, y: 0 }}
      style={style.background}
    >
      <View style={style.containerLogo}>
        <Image source={require("../../assets/logo.png")} />
      </View>
      <View style={style.container}>
        <Text style={style.textContainer}>Sign in to continue</Text>

        <View style={style.input}>
          <Text style={style.label}>Email</Text>
          <TextInput
            style={style.inputText}
            placeholder="friend@studio.com"
            autoCorrect={false}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={style.input}>
          <Text style={style.label}>Senha</Text>
          <TextInput
            style={style.inputText}
            placeholder="********"
            autoCorrect={false}
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        {error ? <Text style={style.errorText}>{error}</Text> : null}

        <TouchableOpacity style={style.btnSubmit} onPress={handleLogin}>
          <Text style={style.submitText}>Sign in</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.btnforgotPassword}>
          <Text style={style.textForgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>

        <View style={style.viewRegister}>
          <Text style={style.textRegister}>Don&apos;t have any account?</Text>
          <TouchableOpacity>
            <Text style={style.btnRegister}>Register </Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}
