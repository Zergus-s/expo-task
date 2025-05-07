import { Reactotron as ReactotronType } from "reactotron-core-client";
import Reactotron from "reactotron-react-native";
import { reactotronRedux } from "reactotron-redux";

declare global {
  interface Console {
    tron: typeof Reactotron;
  }
}

const reactotron = Reactotron.configure({
  name: "ExpoTaskApp",
  host: "localhost",
})
  .useReactNative()
  .use(reactotronRedux())
  .connect();

if (__DEV__) {
  console.tron = reactotron;
  reactotron.clear?.();
}

export default reactotron as unknown as typeof Reactotron & ReactotronType;
