import Reactotron from "reactotron-react-native";
import { reactotronRedux } from "reactotron-redux";
import { Reactotron as ReactotronType } from "reactotron-core-client";

declare global {
  interface Console {
    tron: typeof Reactotron;
  }
}

const reactotron = Reactotron
  .configure({
    name: "ExpoTaskApp",
    host: "localhost", // Change to your machine's IP if running on device
  })
  .useReactNative()
  .use(reactotronRedux())
  .connect();

if (__DEV__) {
  console.tron = reactotron;
  reactotron.clear?.();
}

export default reactotron as typeof Reactotron & ReactotronType;
