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
import { style } from "./style";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Adicione lógica de validação de email e senha aqui
    const emailTest = "kelvin@gmail.com"; // Defina um email temporário para teste
    const passwordTest = "123"; // Defina uma senha temporária para teste

    if (email === emailTest && password === passwordTest) {
      // Simulação de autenticação bem-sucedida
      Alert.alert("Login bem-sucedido", "Você está logado!");
    } else {
      setError("Email ou senha inválidos.");
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
