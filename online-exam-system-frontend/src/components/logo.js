function Logo ({ src, alt, size = "small" }) {
    return (
        <img
        src={src}
        alt={alt}
        className={`${size === "small" ? "w-[150px]" : "w-[250px]"} mb-5 mx-auto`}
        />
  );
}

export default Logo;