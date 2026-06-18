import { useContext } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ProductContext } from "../context/ProductContext";

export default function ProductListScreen({ navigation }) {
  const { products } = useContext(ProductContext);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.cardInfo}>
        <Text style={styles.productName} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={styles.productDesc} numberOfLines={2}>
          {item.description}
        </Text>
        <View style={styles.metaContainer}>
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryText}>{item.category}</Text>
          </View>
          <Text style={styles.productPrice}>R$ {item.price}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 15, paddingBottom: 80 }}
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.fabButton}
          onPress={() => navigation.navigate("Cadastrar Produto")}
        >
          <Text style={styles.fabIcon}>+</Text>
          <Text style={styles.fabText}>Novo Produto</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f3f4f6" },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginBottom: 15,
    borderRadius: 12,
    overflow: "hidden",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  productImage: { width: 100, height: 100, backgroundColor: "#e5e7eb" },
  cardInfo: { flex: 1, padding: 12, justifyContent: "space-between" },
  productName: { fontSize: 16, fontWeight: "bold", color: "#1f2937" },
  productDesc: { fontSize: 13, color: "#6b7280", marginVertical: 4 },
  metaContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  categoryBadge: {
    backgroundColor: "#dbeafe",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  categoryText: { color: "#2563eb", fontSize: 11, fontWeight: "bold" },
  productPrice: { fontSize: 16, fontWeight: "bold", color: "#059669" },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 15,
    backgroundColor: "transparent",
  },
  fabButton: {
    flexDirection: "row",
    backgroundColor: "#2563EB",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  fabIcon: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 8,
    marginTop: -2,
  },
  fabText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
