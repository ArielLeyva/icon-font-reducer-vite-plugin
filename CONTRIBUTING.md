# Contributing to vite-plugin-icon-font-reducer

Thank you for your interest in contributing to `vite-plugin-icon-font-reducer`!

Contributions of all kinds are welcome — bug reports, feature requests, performance improvements, documentation updates, compatibility fixes, and pull requests.

This document explains how to contribute effectively to the project.

---

# About the Project

`vite-plugin-icon-font-reducer` is a Vite integration for:

[icon-font-reducer](https://github.com/ArielLeyva/icon-font-reducer?utm_source=chatgpt.com)

The plugin scans your application during production builds, detects used icon classes, generates subsetted font files, and replaces the original font assets in the Vite bundle.

Most font parsing and subsetting logic is implemented in the core library, while this repository focuses on:

* Vite integration
* Bundle asset replacement
* Build pipeline compatibility
* Source scanning
* Plugin configuration and DX

---

# Reporting Issues

When reporting an issue, include:

* A clear description of the problem
* Your `vite-plugin-icon-font-reducer` version
* Your Vite version
* Your Node.js version
* Your package manager and version
* Your operating system
* Your plugin configuration
* Steps to reproduce
* Relevant logs or error messages
* Whether you are using:

  * a preset
  * inline config
  * a config file
* Whether the issue occurs during:

  * development
  * production build
  * SSR build

Minimal reproduction repositories are highly appreciated.

---

# Requesting Features

Feature requests are welcome.

Before opening a feature request:

1. Search existing issues first
2. Clearly explain the problem or limitation
3. Describe your use case
4. Explain how the feature would improve the plugin

Examples of useful proposals:

* Support for additional icon libraries
* Better framework compatibility
* Build performance improvements
* Source scanning improvements
* Multi-font support
* Better asset matching logic

---

# Development Setup

Clone the repository and install dependencies:

```bash
git clone https://github.com/ArielLeyva/vite-plugin-icon-font-reducer.git

cd vite-plugin-icon-font-reducer

npm install
```

---

# Running the Plugin Locally

Build the plugin:

```bash
npm run build
```

Watch mode during development:

```bash
npm run dev
```

---

# Testing the Plugin

The recommended way to test contributions is using the local playground or a real Vite project.

Typical workflow:

```bash
npm run build
```

Then use the generated `dist` build in a real Vite application.

You can install the plugin locally using:

```bash
cd path/to/real/vite/project
npm install absolute/path/to/vite-plugin-icon-font-reducer
```

or import the generated ESM build directly during development.

---

# Pull Requests

Pull requests are greatly appreciated.

To help keep reviews efficient:

---

## 1. Fork the Repository

Create your own branch from `main`.

---

## 2. Keep PRs Focused

Each PR should address a single issue, feature, or improvement.

Large unrelated PRs are difficult to review and maintain.

---

## 3. Follow Existing Conventions

Keep code style and structure consistent with the project.

The plugin is written in:

* TypeScript
* ESM
* Vite plugin conventions

---

## 4. Update Documentation

If your changes affect:

* configuration
* usage
* supported environments
* plugin behavior
* build output

please update the README and relevant documentation.

---

## 5. Test Your Changes

Before submitting a PR:

* Test in a real Vite project
* Test production builds
* Test asset replacement behavior
* Verify generated font files
* Verify hashed asset filenames still work correctly
* Test on multiple icon libraries if applicable

---

## 6. Write a Clear PR Description

Explain:

* what changed
* why the change is needed
* implementation details if relevant
* potential breaking changes

Screenshots, logs, and reproduction repositories are welcome.

---

# Related Project

Many configuration and library-related improvements belong in the core project:

[icon-font-reducer](https://github.com/ArielLeyva/icon-font-reducer?utm_source=chatgpt.com)

If your contribution involves:

* font parsing
* glyph extraction
* subset generation
* CLI behavior
* library presets

consider whether the change should also be contributed to the core library.

---

# Code of Conduct

Be respectful, constructive, and collaborative.

Contributors of all backgrounds and experience levels are welcome.

---

# License

By contributing to `vite-plugin-icon-font-reducer`, you agree that your contributions will be licensed under the MIT License.
