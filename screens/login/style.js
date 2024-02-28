import { StyleSheet } from "react-native";


export const style = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: -70,
  },
  textContainer:{
    marginTop: -20,
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'gray'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    width: '90%',
  },
  input: {
    backgroundColor: '#ECEEF3',
    width: '85%',
    height: 65,
    marginBottom: 15,
    color: '#222',
    fontSize: 15,
    borderRadius: 25,
    padding: 15,
    elevation: 3,
  },
  btnSubmit: {
    backgroundColor: '#7AAAE6',
    width: '85%',
    height: 65,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  submitText: {
    color: '#FFF',
    fontSize: 18,
  },
  btnforgotPassword:{
    marginTop:20,
  },
  textForgotPassword:{
    color: '#7AAAE6',
    fontWeight: 'bold',
  },

  viewRegister: {
    marginTop: 90,
    flexDirection: 'row', 
    alignItems: 'center', 
  },

  textRegister:{
    color: 'gray'
  },
  btnRegister:{
    marginLeft: 7,
    color: '#7AAAE6',
    fontWeight: 'bold',
  }
});