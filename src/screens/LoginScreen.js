import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function LoginScreen({ navigation }) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.logoContainer}>
        <View style={styles.logoCircle}>
          <Text style={styles.logoText}>📦</Text>
        </View>
        <Text style={styles.appTitle}>Bem-vindo!</Text>
        <Text style={styles.appSubtitle}>Gerencie seus produtos aqui</Text>
      </View>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          value={user}
          onChangeText={setUser}
          placeholder="Usuário"
          placeholderTextColor="#9ca3af"
        />

        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Senha"
          secureTextEntry
          placeholderTextColor="#9ca3af"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Produtos")}
        >
          <Text style={styles.buttonText}>Acessar Sistema</Text>
        </TouchableOpacity>

        {/* Opção de Registro Visual */}
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => alert("Função de registro em breve!")}
        >
          <Text style={styles.registerText}>
            Não tem uma conta? Cadastre-se
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    justifyContent: "center",
    padding: 20,
  },
  logoContainer: { alignItems: "center", marginBottom: 40 },
  logoCircle: {
    width: 80,
    height: 80,
    backgroundColor: "#2563EB",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    elevation: 5,
  },
  logoText: { fontSize: 40 },
  appTitle: { fontSize: 28, fontWeight: "bold", color: "#1f2937" },
  appSubtitle: { fontSize: 16, color: "#6b7280", marginTop: 5 },
  formContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    elevation: 3,
  },
  input: {
    backgroundColor: "#f9fafb",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
    color: "#1f2937",
  },
  button: {
    backgroundColor: "#2563EB",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 5,
  },
  buttonText: { color: "#ffffff", fontSize: 16, fontWeight: "bold" },
  registerButton: { marginTop: 20, alignItems: "center" },
  registerText: { color: "#2563EB", fontSize: 14, fontWeight: "600" },
});
