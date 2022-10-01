import { JestConfigWithTsJest } from "ts-jest";

import defaultConfig from "./jest.config.js";
// Can't use this because `"type": "module"` and `"moduleResolution": "node16"`
// import defaultConfig from "./jest.config";

const config: JestConfigWithTsJest = {
  ...defaultConfig,
};

export default config;
