import React from 'react'

export default function Header() {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        background: "rgba(255,255,255,0.75)",
        padding: "1rem",
        top: 0,
        width: "100vw",
        zIndex: 10,
      }}
    >
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/media">Media Gallery</a>
      <a href="/corporate">Corporate</a>
      <a href="/contact">Contact</a>
    </div>
  );
}
