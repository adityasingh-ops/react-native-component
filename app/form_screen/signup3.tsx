import useDebounce from "@/Hooks/useDebounce";
import { SignUpType } from "@/types/sign_up";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useState } from "react";
import {
    ActivityIndicator,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

export default function Signup3() {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [isloading, setIsLoading] = useState(false);
  const [form, setForm] = useState<SignUpType>({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    dob: "",
    checkbox: false,
  });
  const [touched, settouched] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
    phone: false,
    dob: false,
  });
  const takenName = ["admin", "user", "hello"];
  const { debounceValue: debounceUserName, isloading: usernameLoading } =
    useDebounce(form.username, 800);
  const { debounceValue: debounceEmail, isloading: emailLoading } = useDebounce(
    form.email,
    800,
  );
  const errors = {
    name:
      form.name.length > 0 && form.name.length < 4
        ? "name should be greater then 4"
        : "",
    username:
      debounceUserName && takenName.includes(debounceUserName.toLowerCase())
        ? "username already taken"
        : "",
    email:
      debounceEmail && !emailRegex.test(debounceEmail)
        ? "Enter a valid Email"
        : "",
    pass:
      form.password.length > 0 && form.password.length < 6
        ? "password should be greater then 6"
        : "",
    confirmPassword:
      form.password !== form.confirmPassword ? "passwords do not match" : "",
    phone:
      form.phone.length > 0 && form.phone.length < 10
        ? "phone number should be 10 digits"
        : "",
  };
  const enableButton =
    !errors.name &&
    !errors.username &&
    !errors.email &&
    !errors.pass &&
    !errors.confirmPassword &&
    !errors.phone &&
    form.checkbox &&
    form.name &&
    form.username &&
    form.email;

  // making only name username and email as compulsory orther only checks on error considering all possibility
  return (
    <View style={styles.mainView}>
      <Text style={styles.headingText}>SignUp3</Text>
      <TextInput
        style={styles.inputStyle}
        placeholder="Name"
        value={form.name}
        onChangeText={(text) => setForm((prev) => ({ ...prev, name: text }))}
        onBlur={() => settouched((prev) => ({ ...prev, name: true }))}
      />
      {touched.name && errors.name && (
        <Text style={styles.errorText}>{errors.name}</Text>
      )}
      <View>
        <TextInput
          style={styles.inputStyle}
          placeholder="UserName"
          value={form.username}
          onChangeText={(text) =>
            setForm((prev) => ({ ...prev, username: text }))
          }
        />
        {usernameLoading && debounceUserName && (
          <ActivityIndicator
            style={{ position: "absolute", right: 12, top: 14 }}
          />
        )}
      </View>
      {errors.username && (
        <Text style={styles.errorText}>{errors.username}</Text>
      )}
      <View>
        <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          value={form.email}
          onChangeText={(text) => setForm((prev) => ({ ...prev, email: text }))}
          onBlur={() => settouched((prev) => ({ ...prev, email: true }))}
        />
        {emailLoading && debounceEmail && (
          <ActivityIndicator
            style={{ position: "absolute", right: 12, top: 14 }}
          />
        )}
      </View>
      {touched.email && errors.email && (
        <Text style={styles.errorText}>{errors.email}</Text>
      )}

      <TextInput
        style={styles.inputStyle}
        placeholder="Password"
        value={form.password}
        onChangeText={(text) =>
          setForm((prev) => ({ ...prev, password: text }))
        }
        onBlur={() => settouched((prev) => ({ ...prev, password: true }))}
      />
      {touched.password && errors.pass && (
        <Text style={styles.errorText}>{errors.pass}</Text>
      )}
      <TextInput
        style={styles.inputStyle}
        placeholder="ConfirmPassword"
        value={form.confirmPassword}
        onChangeText={(text) =>
          setForm((prev) => ({ ...prev, confirmPassword: text }))
        }
        onBlur={() =>
          settouched((prev) => ({ ...prev, confirmPassword: true }))
        }
      />
      {touched.confirmPassword && errors.confirmPassword && (
        <Text style={styles.errorText}>{errors.confirmPassword}</Text>
      )}
      <TextInput
        style={styles.inputStyle}
        placeholder="Phone"
        value={form.phone}
        onChangeText={(text) => setForm((prev) => ({ ...prev, phone: text }))}
        onBlur={() => settouched((prev) => ({ ...prev, phone: true }))}
      />
      {touched.phone && errors.phone && (
        <Text style={styles.errorText}>{errors.phone}</Text>
      )}
      <TextInput
        style={styles.inputStyle}
        placeholder="DOB"
        value={form.dob}
        onChangeText={(text) => setForm((prev) => ({ ...prev, dob: text }))}
        onBlur={() => settouched((prev) => ({ ...prev, dob: true }))}
      />
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
            ? { backgroundColor: "green" }
            : { backgroundColor: "yellow" },
        ]}
      >
        {isloading ? <ActivityIndicator /> : <Text>Submit</Text>}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    margin: 24,
    padding: 12,
  },
  headingText: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 32,
  },
  inputStyle: {
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    marginVertical: 18,
    padding: 8,
    fontSize: 16,
  },
  errorText: {
    color: "red",
    fontSize: 8,
    marginTop: -18,
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
