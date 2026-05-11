![Vite compatibility](https://registry.vite.dev/api/badges?package=vite-plugin-icon-font-reducer&tool=vite)

# vite-plugin-icon-font-reducer

A Vite plugin that automatically reduces icon font files during production builds using [icon-font-reducer](https://github.com/ArielLeyva/icon-font-reducer).

The plugin scans your application source code, detects the icon classes being used, generates subsetted font files, and replaces the original font assets in the final Vite bundle.

## Features

* Automatically reduces icon font files during Vite builds
* Replaces original bundled font assets with optimized subsets
* Supports inline config, config files, and library presets
* Built on top of the core [icon-font-reducer CLI/library](https://github.com/ArielLeyva/icon-font-reducer)

1. [Installation][installation]
1. [Usage][usage]
    1. [Using a preset][using-a-preset]
    1. [Using a config file][using-a-config-file]
    1. [Using inline configuration][using-inline-configuration]
1. [Options][options]
1. [Supported Libraries][supported-libraries]
1. [Related Project][related-project]
1. [License][license]

## Installation

```bash
npm install vite-plugin-icon-font-reducer
```

## Usage

### Using a preset
You can use any of the icon libraries supported by `icon-font-reducer`. Check out the available libraries [here](https://github.com/ArielLeyva/icon-font-reducer#available-libs).

```ts
import { defineConfig } from 'vite';
import iconFontReducer from 'vite-plugin-icon-font-reducer';

export default defineConfig({
  plugins: [
    iconFontReducer({
      config: 'materialdesign',
    }),
  ],
});
```

### Using a config file
You can use a configuration file from `icon-font-reducer`. Check out the configuration [here](https://github.com/ArielLeyva/icon-font-reducer#configuration).

```ts
import { defineConfig } from 'vite';
import iconFontReducer from 'vite-plugin-icon-font-reducer';

export default defineConfig({
  plugins: [
    iconFontReducer({
      config: './icon-font-reducer.config.js',
    }),
  ],
});
```

### Using inline configuration
You can use a valid configuration from `icon-font-reducer`. Check out the configuration [here](https://github.com/ArielLeyva/icon-font-reducer#configuration).

```ts
import { defineConfig } from 'vite';
import iconFontReducer from 'vite-plugin-icon-font-reducer';

export default defineConfig({
  plugins: [
    iconFontReducer({
      config: {
        origin: {
          css: './node_modules/@mdi/font/css/materialdesignicons.css',
          fonts: './node_modules/@mdi/font/fonts',
        },

        expression: {
          classes: /mdi-[a-z0-9-]+/g,
          files: /\.(woff2?|ttf|eot|svg)$/i,
        },

        selector: '.mdi::before',
        property: 'content',
      },

      debug: true,
    }),
  ],
});
```

> You can configure other libraries not supported by `icon-font-reducer`; see how to work with custom libraries [here](https://github.com/ArielLeyva/icon-font-reducer#working-with-a-custom-library).

---

## Options

| Option   | Type                      | Description                                               |
| -------- | ------------------------- | --------------------------------------------------------- |
| `config` | `string \| IconFontReducerConfig` | Library preset, config file path, or inline configuration |
| `debug`  | `boolean`                 | Logs font replacement actions during build                |

---

# Supported Libraries

Library support is provided by the core [icon-font-reducer project](https://github.com/ArielLeyva/icon-font-reducer).

Supported libraries and presets may include:

| Name | Lib ID |
|----------|-----------|
| [Material Design Icons](https://pictogrammers.com/library/mdi/) | `materialdesign` |
| [Bootstrap Icons](https://icons.getbootstrap.com/) | `bootstrap` |
| [Remix Icons](https://remixicon.com/) | `remix` |
| [CoreUI Icons](https://coreui.io/icons/) | `coreui-linear \| coreui-brand` |
| [FontAwesome (Free)](https://fontawesome.com/) | `font-awesome-free` |
| [LineAwesome](https://icons8.com/line-awesome/) | `line-aswesome` |
| [Lineicons](https://lineicons.com/) | `line-icons` |
| [Lucide (Static)](https://lucide.dev/guide/static/font/) | `lucide-static` |

See the official compatibility list and preset configuration examples in:

* [Supported Libraries Documentation](https://github.com/ArielLeyva/icon-font-reducer#supported-libraries)
* [Configuration Guide](https://github.com/ArielLeyva/icon-font-reducer#configuration)

---

# Related Project

Core library and CLI:

[icon-font-reducer](https://github.com/ArielLeyva/icon-font-reducer?utm_source=chatgpt.com)

---

# License

MIT

[installation]: #installation
[usage]: #usage
[using-a-preset]: #using-a-preset
[using-a-config-file]: #using-a-config-file
[using-inline-configuration]: #using-inline-configuration
[options]: #options
[supported-libraries]: #supported-libraries
[related-project]: #related-project
[license]: #license
