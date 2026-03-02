import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function signup1() {
  const [name, setname] = useState<string>("");
  const [email, setemail] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const [confirmPass, setconfirmPass] = useState<string>("");
  const [phone, setphone] = useState<string>("");
  const [dob, setdob] = useState<string>("");
  const [check, setcheck] = useState<boolean>(false);

  const validname = name.length>3
  const validemail = email.length>5
  const validpass = password.length>6
  const validconfirmpass = password === confirmPass
  const validphone = phone.length>9

  const buttonEnable = validname && validemail && validpass && validconfirmpass && validphone && check

  return (
    <View style={styles.mainView}>
      <Text style={styles.textStyle}>signUp1</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setname}
        style={styles.inputStyle}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setemail}
        style={styles.inputStyle}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setpassword}
        style={styles.inputStyle}
      />
      <TextInput
        placeholder="Confirm Password"
        value={confirmPass}
        onChangeText={setconfirmPass}
        style={styles.inputStyle}
      />
      <TextInput
        placeholder="Phone"
        keyboardType="numeric"
        value={phone}
        onChangeText={setphone}
        style={styles.inputStyle}
      />
      <TextInput
        placeholder="DOB"
        value={dob}
        onChangeText={setdob}
        style={styles.inputStyle}
      />
      <View style={styles.term}>
        <Pressable
          onPress={()=>setcheck(prev => !prev)}
          >
            <MaterialIcons style={styles.icon} name={check ? "check-box": "check-box-outline-blank"} size={18}  />
          </Pressable>
        <Text>accepting the term</Text>
      </View>
      <Pressable 
      disabled={!buttonEnable}
      style={buttonEnable?styles.pressableEnable :styles.pressable}>
        <Text style={styles.textStyle1}>Submit</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    padding: 32,
  },
  textStyle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 42,
  },
  inputStyle: {
    marginTop: 32,
    padding: 6,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    height: 32,
  },
  pressable: {
    width: "100%",
    backgroundColor: "#C9BE7F",
    padding: 12,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 24,
  },
  pressableEnable: {
    width: "100%",
    backgroundColor: "#10C367",
    padding: 12,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 24,
  },
  textStyle1: {
    fontSize: 18,
    fontWeight: "medium",
  },
  term: {
    marginTop: 12,
    flexDirection: "row",
  },
  icon: {
    marginRight: 6,
  },
});
