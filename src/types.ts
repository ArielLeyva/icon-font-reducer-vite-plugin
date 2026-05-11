export interface ReducerConfig {
  origin: {
    css: string;
    fonts: string;
  };

  expression: {
    classes: RegExp;
    files: RegExp;
  };

  selector: string;
  property: string;

  excluded?: (string | RegExp)[];
  additional?: string[];
}

export type ReducerConfigInput = string | ReducerConfig;

export interface IconFontReducerOptions {
  config?: ReducerConfigInput;
  debug?: boolean;
}
