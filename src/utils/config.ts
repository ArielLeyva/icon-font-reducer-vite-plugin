import path from "path";
import { IconFontReducerOptions } from "../types";
import { IconFontReducerConfig, loadConfigFromFile } from "icon-font-reducer";

/**
 * Gets the base configuration for the icon font reducer.
 * @param options The options provided to the plugin.
 * @returns The base configuration, or undefined if no config is provided.
 */
export async function getBaseConfig(options: IconFontReducerOptions = {}): Promise<IconFontReducerConfig | undefined> {
  if (options.config == undefined) {
    return undefined;
  }

  if (typeof options.config === "string") {
    // If the config is a string, it could be a path to a config file or a library name.
    if (options.config.endsWith(".js") || options.config.endsWith(".ts") || options.config.includes("/") || options.config.includes("\\")) {
      const fullPath = path.resolve(options.config);
      return await loadConfigFromFile(fullPath);
    } else {
      // Assume it's a library name
      return {
        lib: options.config,
      };
    }
  } else if (typeof options.config === "object") {
    // If the config is an object, return it directly
    return options.config;
  }

  return undefined;
}
