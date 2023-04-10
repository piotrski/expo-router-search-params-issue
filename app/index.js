import { View, Text, Button } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View>
      <Text style={{ fontSize: 24, textAlign: "center" }}>Index</Text>
      <Link href="/category/Test" asChild>
        <Button title="Navigate to category" />
      </Link>
    </View>
  );
}
