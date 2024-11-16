export default function LoadingUI() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100svh",
        padding: 32,
        paddingBottom: 0,
        position: "relative",
        animation: "blink 1s ease-in-out infinite alternate",
      }}
    >
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div
          style={{
            background: "var(--color-neutral-200)",
            width: 64,
            height: 64,
            borderRadius: "50%",
          }}
        />
      </div>
      <div
        style={{
          width: 400,
          height: 200,
          background: "var(--color-neutral-200)",
          marginTop: 100,
        }}
      />
    </div>
  );
}
