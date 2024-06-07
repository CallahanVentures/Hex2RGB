# Color Converter

This project is a simple color converter built with Next.js. It allows users to pick a color, see its RGB and HEX values, and convert between these formats.

## Features

- Color Picker: Select a color and automatically see its RGB and HEX values.
- HEX Textbox: Enter a HEX value and see the corresponding RGB values.
- RGB Textboxes: Enter RGB values and see the corresponding HEX value.
- Live validation and conversion.
- Responsive design.

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/CallahanVentures/Portfolio/tree/main/color-converter.git
   cd color-converter

   ```

2. Install dependencies:

```sh
npm install
```

3. Run the development server

```sh
Copy code
npm run dev
Open your browser and navigate to http://localhost:3000 to see the app in action.
```

## Usage

- Color Picker: Use the color picker to select a color. The corresponding RGB and HEX values will be displayed.
- HEX Textbox: Enter a HEX value to see the corresponding RGB values. Only valid HEX values are accepted.
- RGB Textboxes: Enter RGB values to see the corresponding HEX value. Only valid RGB values are accepted.

## Project Structure

- pages/index.tsx: The main page of the application containing the color converter components.
- scripts/color-converter.ts: Utility functions for converting between HEX and RGB values.
- styles/globals.css: Global styles for the application.

## NextUI Components

- Input: Used for the color picker, HEX, and RGB inputs.
- Card: A container for the main content.
- Spacer: Adds spacing between elements.
- Link: A navigation link to Callahan Ventures.

## Utility Functions

- Hex2RGB: Converts a HEX value to an RGB object.
- RGB2Hex: Converts RGB values to a HEX string.
