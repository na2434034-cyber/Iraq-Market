import { View, Text, StyleSheet } from 'react-native';

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>حول التطبيق</Text>
      <Text style={styles.text}>
        تطبيق Iraq Market تم تصميمه لعرض المتاجر، الخرائط، تسجيل الدخول،
        والتصفح بسهولة مع تصميم بسيط وألوان بنفسجية جميلة.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#6a0dad',
    marginBottom: 10,
    textAlign: 'center'
  },
  text: {
    fontSize: 18,
    lineHeight: 26,
    textAlign: 'center'
  }
});
