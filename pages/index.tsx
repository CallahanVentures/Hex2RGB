import React, { useState, ChangeEvent } from "react";
import Head from "next/head";
import { Input, Card, Spacer } from "@nextui-org/react";
import { Hex2RGB, RGB2Hex } from "../scripts/color-converter";

const Home: React.FC = () => {
  const [rgb, setRgb] = useState({ r: "", g: "", b: "" });
  const [hex, setHex] = useState("#ffffff");
  const [error, setError] = useState("");

  const inputStyles = {
    color: "rgb(var(--foreground-rgb))",
    backgroundColor: "rgba(var(--background-start-rgb), 0.8)",
    border: "1px solid rgba(var(--foreground-rgb), 0.3)",
  };

  const handleColorChange = (e: ChangeEvent<HTMLInputElement>): void => {
    try {
      const hexValue = e.target.value;
      setHex(hexValue);
      const { r, g, b } = Hex2RGB(hexValue);
      setRgb({ r: r.toString(), g: g.toString(), b: b.toString() });
      setError("");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    }
  };

  const handleHexChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const hexValue = e.target.value.replace(/[^a-fA-F0-9]/g, "").slice(0, 6);
    try {
      setHex(`#${hexValue}`);
      const { r, g, b } = Hex2RGB(`#${hexValue}`);
      setRgb({ r: r.toString(), g: g.toString(), b: b.toString() });
      setError("");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    }
  };

  const handleRgbChange = (e: ChangeEvent<HTMLInputElement>): void => {
    try {
      const { name, value } = e.target;
      const newRgb = { ...rgb, [name]: value };
      setRgb(newRgb);
      const r = parseInt(newRgb.r);
      const g = parseInt(newRgb.g);
      const b = parseInt(newRgb.b);
      if (!isNaN(r) && !isNaN(g) && !isNaN(b)) {
        const hexValue = RGB2Hex(r, g, b);
        setHex(hexValue);
        setError("");
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    }
  };

  return (
    <div>
      <Head>
        <title>Color Converter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <Card>
          <div style={{ padding: "20px", maxWidth: "400px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <img
                src="/Logo.png"
                alt="Company Logo"
                style={{ height: "50px", marginRight: "10px" }}
              />
              <h1>Color Converter using NextJS</h1>
            </div>
            <p>Pick a color to see its RGB and HEX values</p>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <Spacer y={1} />
            <Input
              fullWidth
              label="Color Picker"
              type="color"
              value={hex}
              onChange={handleColorChange}
              style={inputStyles}
            />
            <Spacer y={1} />
            <Input
              fullWidth
              label="HEX"
              type="text"
              value={hex}
              onChange={handleHexChange}
              style={inputStyles}
            />
            <Spacer y={1} />
            <Input
              label="R"
              type="number"
              name="r"
              value={rgb.r}
              onChange={handleRgbChange}
              placeholder="R"
              fullWidth
              style={inputStyles}
            />
            <Spacer y={0.5} />
            <Input
              label="G"
              type="number"
              name="g"
              value={rgb.g}
              onChange={handleRgbChange}
              placeholder="G"
              fullWidth
              style={inputStyles}
            />
            <Spacer y={0.5} />
            <Input
              label="B"
              type="number"
              name="b"
              value={rgb.b}
              onChange={handleRgbChange}
              placeholder="B"
              fullWidth
              style={inputStyles}
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Home;
