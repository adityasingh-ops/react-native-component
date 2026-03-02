import useDebounce from "@/Hooks/useDebounce";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useRef, useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function SignUp4() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleCon, setIsVisibleCon] = useState(false);
  const [isloading, setIsLoading] = useState(false);
  const usernameRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const confirmPasswordRef = useRef<TextInput>(null);
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    dob: "",
    checkbox: false,
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
    phone: false,
    dob: false,
  });
  const { debounceValue: debounceUsername, isloading: usernameLoading } =
    useDebounce(form.username, 900);
  const { debounceValue: debounceEmail, isloading: emailLoading } = useDebounce(
    form.email,
    900,
  );
  const regexString = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const taken = ["admin", "adi", "singh"];
  const errors = {
    name:
      form.name.length > 0 && form.name.length < 3
        ? "*name should be greater then 3 letter"
        : "",
    email:
      debounceEmail && !regexString.test(debounceEmail)
        ? "*enter a valid email"
        : "",
    username:
      debounceUsername && taken.includes(debounceUsername.toLowerCase())
        ? "*Username already taken"
        : "",
    password:
      form.password.length > 0 && form.password.length < 6
        ? "Password should be greater then 6"
        : "",
    confirmpassword:
      form.confirmPassword.length > 0 && form.password !== form.confirmPassword
        ? "Both should match"
        : "",
  };
  const enableButton =
    !errors.name &&
    !errors.username &&
    !errors.email &&
    !errors.password &&
    !errors.confirmpassword &&
    form.checkbox &&
    form.name &&
    form.username &&
    form.email;
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.mainView}>
          <Text style={styles.headerText}>SignUp4</Text>
          <TextInput
            style={styles.inputField}
            autoCapitalize="none"
            placeholder="Name*"
            value={form.name}
            onSubmitEditing={() => usernameRef.current?.focus()}
            onChangeText={(text) =>
              setForm((prev) => ({ ...prev, name: text }))
            }
            onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
          />
          {touched.name && errors.name && (
            <Text style={styles.errorText}>{errors.name}</Text>
          )}
          <View>
            <TextInput
              style={styles.inputField}
              autoCapitalize="none"
              ref={usernameRef}
              autoCorrect={false}
              placeholder="UserName*"
              value={form.username}
              onSubmitEditing={() => emailRef.current?.focus()}
              onChangeText={(text) =>
                setForm((prev) => ({ ...prev, username: text }))
              }
            />
            {usernameLoading && debounceUsername && (
              <ActivityIndicator style={styles.inputIcon} />
            )}
            {!errors.username &&
              !usernameLoading &&
              form.username.length > 0 && (
                <MaterialIcons
                  name="check"
                  size={24}
                  style={styles.inputIcon}
                />
              )}
          </View>
          {errors.username && (
            <Text style={styles.errorText}>{errors.username}</Text>
          )}
          <View>
            <TextInput
              style={styles.inputField}
              autoCapitalize="none"
              ref={emailRef}
              autoCorrect={false}
              placeholder="Email*"
              keyboardType="email-address"
              onSubmitEditing={() => passwordRef.current?.focus()}
              value={form.email}
              onChangeText={(text) =>
                setForm((prev) => ({ ...prev, email: text }))
              }
              onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
            />
            {emailLoading && debounceEmail && (
              <ActivityIndicator style={styles.inputIcon} />
            )}
            {!errors.email && !emailLoading && form.email.length > 0 && (
              <MaterialIcons name="check" size={24} style={styles.inputIcon} />
            )}
          </View>
          {touched.email && errors.email && (
            <Text style={styles.errorText}>{errors.email}</Text>
          )}
          <View>
            <TextInput
              style={styles.inputField}
              placeholder="Password*"
              ref={passwordRef}
              secureTextEntry={!isVisible}
              value={form.password}
              onSubmitEditing={() => confirmPasswordRef.current?.focus()}
              onChangeText={(text) =>
                setForm((prev) => ({ ...prev, password: text }))
              }
              onBlur={() => setTouched((prev) => ({ ...prev, password: true }))}
            />
            {!isVisible ? (
              <MaterialIcons
                onPress={() => setIsVisible((prev) => !prev)}
                name="visibility"
                size={24}
                style={styles.inputIcon}
              />
            ) : (
              <MaterialIcons
                onPress={() => setIsVisible((prev) => !prev)}
                name="visibility-off"
                size={24}
                style={styles.inputIcon}
              />
            )}
          </View>
          {touched.password && errors.password && (
            <Text style={styles.errorText}>{errors.password}</Text>
          )}
          <View>
            <TextInput
              style={styles.inputField}
              placeholder="ConfirmPassword*"
              ref={confirmPasswordRef}
              secureTextEntry={!isVisibleCon}
              value={form.confirmPassword}
              onChangeText={(text) =>
                setForm((prev) => ({ ...prev, confirmPassword: text }))
              }
              onBlur={() =>
                setTouched((prev) => ({ ...prev, confirmPassword: true }))
              }
            />
            {!isVisibleCon ? (
              <MaterialIcons
                onPress={() => setIsVisibleCon((prev) => !prev)}
                name="visibility"
                size={24}
                style={styles.inputIcon}
              />
            ) : (
              <MaterialIcons
                onPress={() => setIsVisibleCon((prev) => !prev)}
                name="visibility-off"
                size={24}
                style={styles.inputIcon}
              />
            )}
          </View>
          {touched.confirmPassword && errors.confirmpassword && (
            <Text style={styles.errorText}>{errors.confirmpassword}</Text>
          )}
          <View style={styles.term}>
            <Pressable
              onPress={() =>
                setForm((prev) => ({ ...prev, checkbox: !prev.checkbox }))
              }
            >
              <MaterialIcons
                style={styles.icon}
                size={24}
                name={form.checkbox ? "check-box" : "check-box-outline-blank"}
              />
            </Pressable>
            <Text>accepting the term</Text>
          </View>
          <Pressable
            onPress={() => {
              setIsLoading(true);
              setTimeout(() => {
                console.log("pressed");
                setIsLoading(false);
              }, 900);
            }}
            disabled={!enableButton}
            style={[
              styles.submitButton,
              enableButton
                ? { backgroundColor: "#16BE48" }
                : { backgroundColor: "#DAA6A6" },
            ]}
          >
            {isloading ? <ActivityIndicator /> : <Text>Submit</Text>}
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    margin: 12,
    padding: 24,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 32,
  },
  inputField: {
    borderWidth: 1,
    borderColor: "grey",
    margin: 12,
    padding: 12,
    borderRadius: 12,
  },
  errorText: {
    marginHorizontal: 18,
    color: "red",
    fontSize: 8,
    marginTop: -12,
  },
  test: {
    backgroundColor: "red",
  },
  inputIcon: {
    position: "absolute",
    right: 18,
    top: "50%",
    transform: [{ translateY: -12 }],
  },
  submitButton: {
    width: "100%",
    borderRadius: 12,
    alignItems: "center",
    marginVertical: 12,
    paddingVertical: 12,
  },
  term: {
    marginTop: 12,
    flexDirection: "row",
  },
  icon: {
    marginRight: 6,
  },
});
