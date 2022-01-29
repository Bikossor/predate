// https://kulshekhar.github.io/ts-jest/docs/getting-started/presets/#advanced
import type { InitialOptionsTsJest } from "ts-jest";
import { defaults as tsjPreset } from "ts-jest/presets";

const config: InitialOptionsTsJest = {
  transform: {
    ...tsjPreset.transform,
  },
};

export default config;
