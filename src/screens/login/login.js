import React from "react";
import { View, KeyboardAvoidingView, TextInput, TouchableOpacity, Text, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { style } from "./style";


export default function LoginScreen() {
 
  return (

    <LinearGradient colors={['#B0D5EF', '#FFE0E0']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1.4, y: 0 }}
      style={style.background}>

      <View style={style.containerLogo}>
        <Image source={require('../../assets/logo.png')} />
      </View>
      <View style={style.container}>
      <Text style={style.textContainer} >Sign in to continue</Text>
      
        <TextInput
          label="email"
          style={style.input}
          placeholder="Email"
          autoCorrect={false}
          onChangeText={() => { }}
        />
        <TextInput
          style={style.input}
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={() => { }}
        />

        <TouchableOpacity style={style.btnSubmit}>
          <Text style={style.submitText}>Sign in</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.btnforgotPassword}>
          <Text style={style.textForgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>

        <View style={style.viewRegister}>
        <Text style={style.textRegister}>Don't have any account?</Text>
        <TouchableOpacity>
          <Text style={style.btnRegister}>Register </Text>
        </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>

  );
}
