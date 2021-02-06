import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet , Image} from 'react-native';
import firebase from "firebase"

export default class loginScreen extends React.Component{
    constructor(){
        super();
        this.state={
            emailId : "",
            password:""
        }
    }

    login=async(emailId,password)=>{
        if(emailId && password){
            try{
                const response = await firebase.auth().signInWithEmailAndPassword(emailId,password);
                if(response){
                    this.props.navigation.navigate('Write')
                }
            }
        
        catch(error){
            console.log(error.code);
                switch(error.code){
                    case 'auth/user-not-found': Alert.alert(" The User doesn't exist");
                    console.log("User doesn't exist")
                    break;
                    case 'auth/wrong-password' : Alert.alert("Incorrect Password has been entered")
                    console.log("Incorrect Password");
                    break;
                    case 'auth/invalid-email' : Alert.alert("Email Address is not formatted properly")
                }
        }
        
    }
}


render(){
    return(
        <KeyboardAvoidingView style={{alignItems:"center",marginTop:20,backgroundColor:"#32a89e"}}>
            <View>
                <Image source={require('../assets/img.jpg')} style={{width:300,height:300}}/>
                <Text style={{textAlign:"center",fontSize:35}}>Bed time Stories </Text>
            </View>

            <View>
                <TextInput style={styles.login} placeholder="enter email id" keyboardType="email-address" onChangeText={(text)=>{
                    this.setState({
                        emailId:text
                    })
                }}/>

                <TextInput  style={styles.login} placeholder="enter password" secureTextEntry={true} onChangeText={(text)=>{
                    this.setState({
                        password:text
                    })
                }}/>
            </View>

            <View>
                <TouchableOpacity onPress={()=>{this.login(this.state.emailId,this.state.password)}} style={{height:40,width:60,borderWidth:1,marginTop:20,paddingTop:5,borderRadius:5}} >
                    <Text style={{textAlign:"center"}}>Login</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}  
        
    


}


const styles = StyleSheet.create({
    login:{
        width:350,
        height:70,
        borderWidth : 2,
        fontSize:20,
        margin:10,
        paddingLeft:10
    }
})