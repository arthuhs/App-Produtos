import { Picker } from "@react-native-picker/picker"; // Importando o seletor
import { useContext, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ProductContext } from "../context/ProductContext";

export default function RegisterProductScreen({ navigation }) {
  const { addProduct } = useContext(ProductContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Eletrônicos");
  const [image, setImage] = useState(""); // Estado para a URL da foto

  const handleSave = () => {
    if (name.trim() && price.trim()) {
      addProduct({ name, description, price, category, image });
      navigation.goBack();
    } else {
      alert("⚠️ Preencha os campos obrigatórios.");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.card}>
          <Text style={styles.label}>Nome do Produto</Text>
          <TextInput style={styles.input} value={name} onChangeText={setName} />

          <Text style={styles.label}>Descrição</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            value={description}
            onChangeText={setDescription}
            multiline
            numberOfLines={3}
          />

          <Text style={styles.label}>URL da Imagem</Text>
          <TextInput
            style={styles.input}
            value={image}
            onChangeText={setImage}
            placeholder="Cole o link da foto aqui"
          />

          <Text style={styles.label}>Categoria</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={category}
              onValueChange={(itemValue) => setCategory(itemValue)}
            >
              <Picker.Item label="Eletrônicos" value="Eletrônicos" />
              <Picker.Item label="Móveis" value="Móveis" />
              <Picker.Item label="Vestuário" value="Vestuário" />
              <Picker.Item label="Outros" value="Outros" />
            </Picker>
          </View>

          <Text style={styles.label}>Valor (R$)</Text>
          <TextInput
            style={styles.input}
            value={price}
            onChangeText={setPrice}
            keyboardType="numeric"
          />

          <TouchableOpacity style={styles.button} onPress={handleSave}>
            <Text style={styles.buttonText}>Salvar Produto</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f3f4f6" },
  scrollContent: { padding: 15 },
  card: { backgroundColor: "#fff", padding: 20, borderRadius: 12 },
  label: { fontSize: 14, fontWeight: "600", marginBottom: 6, color: "#4b5563" },
  input: {
    backgroundColor: "#f9fafb",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  textArea: { minHeight: 80 },
  pickerContainer: {
    backgroundColor: "#f9fafb",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 8,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#059669",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: { color: "#ffffff", fontSize: 16, fontWeight: "bold" },
});
