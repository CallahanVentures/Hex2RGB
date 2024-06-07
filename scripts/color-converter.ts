export function Hex2RGB(hex: string): {
  r: number;
  g: number;
  b: number;
  a?: number;
} {
  // Validate hex argument using type and regex
  if (
    typeof hex !== "string" ||
    !/^#?([a-fA-F0-9]{3}|[a-fA-F0-9]{4}|[a-fA-F0-9]{6}|[a-fA-F0-9]{8})$/.test(
      hex
    )
  ) {
    throw new Error(
      "A valid hex code must be 3, 4, 6, or 8 hexadecimal characters, optionally preceded by a '#'."
    );
  }

  // Remove the leading hashtag if present using regex
  hex = hex.replace(/^#/, "");

  // If the hex is in the short form (#RGB or #RGBA), convert it to the long form (#RRGGBB or #RRGGBBAA)
  if (hex.length === 3 || hex.length === 4) {
    hex = hex
      .split("")
      .map((char) => char + char)
      .join("");
  }

  // Convert the hex string into a hexadecimal integer by specifying base 16 as the second argument
  let bigint = parseInt(hex, 16);

  // Extract the red component
  let r = (bigint >> 16) & 255;

  // Extract the green component
  let g = (bigint >> 8) & 255;

  // Extract the blue component
  let b = bigint & 255;

  // Extract the alpha component if present
  let a = hex.length === 8 ? (bigint & 255) / 255 : undefined;

  // Return an object containing the red, green, blue, and optionally alpha values
  return a !== undefined ? { r, g, b, a } : { r, g, b };
}

export function RGB2Hex(r: number, g: number, b: number): string {
  // Ensures the red value is within the valid range (0-255)
  r = Math.max(0, Math.min(255, r));

  // Ensures the green value is within the valid range (0-255)
  g = Math.max(0, Math.min(255, g));

  // Ensures the blue value is within the valid range (0-255)
  b = Math.max(0, Math.min(255, b));

  // Converts the red value to a 2-digit hexadecimal string
  let hexR = r.toString(16).padStart(2, "0");

  // Converts the green value to a 2-digit hexadecimal string
  let hexG = g.toString(16).padStart(2, "0");

  // Converts the blue value to a 2-digit hexadecimal string
  let hexB = b.toString(16).padStart(2, "0");

  // Returns a concatenation of the hexadecimal strings for R(ed), G(reen), and B(lue) with a hashtag at the beginning
  return `#${hexR}${hexG}${hexB}`;
}
