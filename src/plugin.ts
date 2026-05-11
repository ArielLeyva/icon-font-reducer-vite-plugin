import path from "path";
import type { Plugin } from "vite";
import { getNonIntercativeConfig, getParsedCss, extractGlyphsCodes, getFontFiles, getSubsetBuffer } from "icon-font-reducer";
import { createMatchers, isExcluded } from "./utils/filters";
import { extractClasses } from "./utils/classes";
import type { IconFontReducerOptions } from "./types";
import { getBaseConfig } from "./utils/config";

/**
 * Main function to create the Vite plugin for icon font reduction.
 * @param options The options for the plugin.
 * @returns The Vite plugin.
 */
export default function iconFontReducer(options: IconFontReducerOptions = {}): Plugin {
  let config: any;
  let excludedMatchers: RegExp[] = [];

  const classes = new Set<string>();

  return {
    name: "vite-plugin-icon-font-reducer",

    apply: "build",

    async buildStart() {
      // Load the base configuration and then the non-interactive configuration
      const base = await getBaseConfig(options);
      config = await getNonIntercativeConfig(base);

      // By default all CSS files are excluded
      excludedMatchers = createMatchers(config.excluded || []);
    },

    transform(code, id) {
      if (isExcluded(id, excludedMatchers)) {
        return null;
      }

      // Find classes in the code using the provided regular expression
      const detected = extractClasses(code, config.expression.classes);
      detected.forEach((cls) => classes.add(cls));

      // Add any additional classes specified in the configuration
      if (config.additional) {
        config.additional.forEach((cls: string) => classes.add(cls));
      }

      return null;
    },

    async generateBundle(_, bundle) {
      // Parse the CSS to extract the glyph codes based on the detected classes and the provided selector and property
      const ast = await getParsedCss(config.origin.css);
      const codes = extractGlyphsCodes(ast, Array.from(classes), config.selector, config.property);

      // Get the font files based on the provided configuration and the regular expression for files
      const fontFiles = await getFontFiles(config.origin.fonts, config.expression.files, false);

      for (const file of fontFiles) {
        if (file.endsWith(".woff") || file.endsWith(".woff2") || file.endsWith(".ttf") || file.endsWith(".otf")) {
          // Get the subset buffer for the font file based on the extracted glyph codes
          const subset = await getSubsetBuffer(file, codes);

          const ext = path.extname(file).slice(1);
          const base = path.basename(file, "." + ext);
          const regex = new RegExp(`${base}.*\\.${ext}$`);

          // Replace the original font file in the bundle with the subset buffer
          for (const key in bundle) {
            const asset = bundle[key];

            if (asset.type === "asset" && regex.test(key)) {
              asset.source = subset;

              if (options.debug) {
                console.log(`[icon-font-reducer] Replaced ${key}`);
              }

              break;
            }
          }
        }
      }
    },
  };
}
