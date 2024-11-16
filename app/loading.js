export default function LoadingUI() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "3rem",
        padding: 32,
        height: "100vh",
        animation: "blink 1s ease-in-out infinite alternate",
      }}
    >
      <div style={{ height: 75, background: "var(--color-neutral-200)" }} />
      <div style={{ height: 200, background: "var(--color-neutral-200)" }} />
      <div style={{ height: 100, background: "var(--color-neutral-200)" }} />

      <div
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "100vw",
          height: 100,
          background: "var(--color-neutral-200)",
        }}
      />
    </div>
  );
}
