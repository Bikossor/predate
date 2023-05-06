// https://kulshekhar.github.io/ts-jest/docs/getting-started/presets/#advanced
import type { JestConfigWithTsJest } from "ts-jest";
import { defaults as tsjPreset } from "ts-jest/presets";

const config: JestConfigWithTsJest = {
  transform: {
    ...tsjPreset.transform,
  },
};

export default config;
