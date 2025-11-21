import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import '../firebaseConfig';

export default function Login() {
  const router = useRouter();
  const auth = getAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        Alert.alert("نجاح", "تم تسجيل الدخول!");
        router.push('/');
      })
      .catch((err) => Alert.alert("خطأ", err.message));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>تسجيل الدخول</Text>

      <TextInput
        style={styles.input}
        placeholder="البريد الإلكتروني"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="كلمة المرور"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={login}>
        <Text style={styles.buttonText}>تسجيل الدخول</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.back()}>
        <Text style={{ marginTop: 10, color: '#6a0dad' }}>رجوع</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#6a0dad',
    marginBottom: 20
  },
  input: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#6a0dad',
    borderRadius: 10,
    padding: 10,
    marginTop: 10
  },
  button: {
    width: '90%',
    backgroundColor: '#6a0dad',
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 15
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold'
  }
});
