import { Text, View, ScrollView, Image } from 'react-native';
import React, { useEffect } from 'react';
import Input from '../Components/Input';
import AntDesign from '@expo/vector-icons/AntDesign';
import Button from '../Components/Button';
import { mainStyles } from '../maincss';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useAuth } from '../Context/Auth';

const Login = ({ navigation }) => {
  const { handleLogin, handleChange, state } = useAuth();

  // Uncomment this if you want to navigate to Home on successful login
  // useEffect(() => {
  //   if (state.isNavigate) {
  //     navigation.navigate("Home");
  //   }
  // }, [state.isNavigate, navigation]);

  return (
    <ScrollView style={[mainStyles.bgWhite, { padding: 15 }]}>
      {/* Main container */}
      <View style={[mainStyles.container, mainStyles.flexCenter, mainStyles.paddingV, mainStyles.paddingH, { height: 650 }]}>
        <View style={[mainStyles.flexCenter]}>
          {/* Heading and image container */}
          <View style={[mainStyles.flexRow, mainStyles.flexCenter]}>
            <View>
              <Text style={{ fontSize: 20, fontWeight: "bold", color: "#A2AD91" }}>SIGN IN </Text>
            </View>
            <View>
              <Image source={require("../../assets/profile.png")} style={[mainStyles.imgWidth]} />
            </View>
          </View>

          {/* Input container */}
          <View style={[mainStyles.width100]}>
            {/* Mobile no */}
            <View style={[mainStyles.flexRow, mainStyles.flexCenter, mainStyles.padding, { gap: 2 }]}>
              <AntDesign name="phone" size={24} color="#A2AD91" />
              <Text>+91</Text>
              <Input placeholder="Mobile No" onChangeText={(e) => handleChange(e, "mobile")} />
            </View>
            {/* Password */}
            <View style={[mainStyles.flexRow, mainStyles.flexCenter, mainStyles.padding]}>
              <Image source={require("../../assets/padlock.png")} style={[mainStyles.imgIconW]} />
              <Input placeholder="Password" onChangeText={(e) => handleChange(e, "password")} secureTextEntry={true} />
            </View>
            {/* Button */}
            <Button source={require("../../assets/log-in.png")} onPress={handleLogin} name="SIGN IN" navigation={navigation} />

            {/* Redirect */}
            <View style={[mainStyles.flexRow, mainStyles.flexCenter, mainStyles.padding, mainStyles.gap, mainStyles.marginV, { marginVertical: 20 }]}>
              <Text style={{ fontSize: 15 }}>Don't Have An Account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text style={{ borderBottomWidth: 2, borderColor: "gray", fontSize: 15, color: "#2E69A8" }}>REGISTER FIRST</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
