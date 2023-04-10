import { View, Text, Button } from "react-native";
import { Link, useRouter, useSearchParams } from "expo-router";

export default function Post() {
  const { id } = useSearchParams();
  const { back } = useRouter();
  return (
    <View>
      <Text style={{ fontSize: 24, textAlign: "center" }}>Post id: {id}</Text>
      <Link href="/" asChild>
        <Button title="Go home" />
      </Link>
      <Button title="Go back" onPress={back} />
    </View>
  );
}
