import { style } from "./style";
import React, { useState } from "react";
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  Alert,
  FlatList,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function ConversationalChat() {
  return (
    <LinearGradient
      colors={["#B0D5EF", "#FFE0E0"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1.4, y: 0 }}
      style={style.background}
    >
      
    </LinearGradient>
  );
}
