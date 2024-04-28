import { StyleSheet, Text, View } from "react-native";
import ImageDetail from "../components/ImageDetail";
export default function ImageScreen() {
  return (
    <View>
      <Text>Images</Text>
      <ImageDetail
        imageSource={require("../../assets/pic-1.jpeg")}
        title="Image 1"
      />
      <ImageDetail
        imageSource={require("../../assets/pic-2.jpeg")}
        title="Image 2"
      />
      <ImageDetail
        imageSource={require("../../assets/pic-3.jpeg")}
        title="Image 3"
      />
    </View>
  );
}

const styles = StyleSheet.create({});
