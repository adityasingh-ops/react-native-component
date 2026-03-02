import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Signup2() {
  const [name, setname] = useState<string>("");
  const [email, setemail] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const [confirmPass, setconfirmPass] = useState<string>("");
  const [phone, setphone] = useState<string>("");
  const [dob, setdob] = useState<string>("");
  const [check, setcheck] = useState<boolean>(false);

  const [touched, settouched] = useState({
    name: false,
    email: false,
    password: false,
    confirmPass: false,
    phone: false,
  });
  const errors = {
    name: name.length > 0 && name.length < 3 ? "there is errror in name " : "",
    email: email.length > 0 && email.length < 6 ? "email is wrong":"",
    password: password.length>0 && password.length < 7 ? "length should be greater then 6":"",
    confirmPass:confirmPass.length > 0 && password !== confirmPass ? "not the same pass":"",
    phone:phone.length>0 && phone.length<11 ? "should be 10":""
  };
  const enableButton = !errors.name && !errors.email && !errors.password && !errors.confirmPass && check && !errors.phone
  return (
    <View style={styles.mainView}>
      <Text style={styles.textStyle}>SingUp2</Text>
      <TextInput
        placeholder="Name"
        onBlur={() => settouched((prev) => ({ ...prev, name: true }))}
        value={name}
        onChangeText={setname}
        style={styles.inputStyle}
      />
      {touched.name && errors.name && (
        <Text style={styles.errorText}>{errors.name}</Text>
      )}
      <TextInput
        placeholder="Email"
        onBlur={()=> settouched((prev) => ({...prev, email:true}))}
        value={email}
        onChangeText={setemail}
        style={styles.inputStyle}
      />
      {touched.email && errors.email && (
        <Text style={styles.errorText}>{errors.email}</Text>
      )}
      <TextInput
        placeholder="Password"
        onBlur={() => settouched((prev) => ({...prev, password:true}))}
        secureTextEntry
        value={password}
        onChangeText={setpassword}
        style={styles.inputStyle}
      />
      {touched.password && errors.password && (
        <Text style={styles.errorText}>{errors.password}</Text>
      )}
      <TextInput
        placeholder="Confirm Password"
        onBlur={() => settouched((prev) => ({...prev, confirmPass:true}))}
        value={confirmPass}
        onChangeText={setconfirmPass}
        style={styles.inputStyle}
      />
      {touched.confirmPass && errors.confirmPass && (
        <Text style={styles.errorText}>{errors.confirmPass}</Text>
      )}
      <TextInput
        placeholder="Phone"
        onBlur={() => settouched((prev) => ({...prev, phone:true}))}
        keyboardType="numeric"
        value={phone}
        onChangeText={setphone}
        style={styles.inputStyle}
      />
      {touched.phone && errors.phone && (
        <Text style={styles.errorText}>{errors.phone}</Text>
      )}
      <TextInput
        placeholder="DOB"
        value={dob}
        onChangeText={setdob}
        style={styles.inputStyle}
      />
      <View style={styles.term}>
        <Pressable onPress={() => setcheck((prev) => !prev)}>
          <MaterialIcons
            style={styles.icon}
            size={24}
            name={check ? "check-box" : "check-box-outline-blank"}
          />
        </Pressable>
        <Text>accepting the term</Text>
      </View>
      <Pressable
        disabled={!enableButton}
        style={enableButton? styles.pressableEnable : styles.pressable}
      >
        <Text>Submit</Text>
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
  errorText: {
    fontSize: 8,
    color: "red",
  },
});
