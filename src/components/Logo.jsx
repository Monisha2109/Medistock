function Logo({ size = 36 }) {
  return (
    <img
      src="/images/medistock_logo.png"
      alt="MediStock logo"
      style={{ width: size, height: "auto" }}
      className="object-contain"
    />
  );
}

export default Logo;
