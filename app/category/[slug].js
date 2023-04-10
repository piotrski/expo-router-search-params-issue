import { View, Text, Button } from "react-native";
import { Link, Stack, useSearchParams } from "expo-router";

export default function Category() {
  const { slug } = useSearchParams();
  return (
    <View>
      <Text style={{ fontSize: 24, textAlign: "center" }}>
        Category: {slug}
      </Text>
      <Link href="/post/1" asChild>
        <Button title="Post 1" />
      </Link>
    </View>
  );
}
