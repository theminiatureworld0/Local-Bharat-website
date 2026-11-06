export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
  className = "",
}) {
  const isCenter = align === "center";

  return (
    <div
      className={`max-w-2xl mb-8 sm:mb-10 ${
        isCenter ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium tracking-wide mb-2.5 ${
            dark
              ? "bg-white/10 text-[#D8A97C] border border-white/15"
              : "bg-[#FBF6EE] text-[#B5532F] border border-[#E4D3BD]"
          }`}
        >
          <span>✦</span>
          <span>{eyebrow}</span>
        </div>
      )}
      {title && (
        <h2
          className={`font-serif text-xl sm:text-2xl md:text-3xl font-normal tracking-normal leading-snug ${
            dark ? "text-white" : "text-[#2E1A12]"
          }`}
        >
          {title}
        </h2>
      )}
      {description && (
        <p
          className={`mt-2.5 text-xs sm:text-sm leading-relaxed font-light ${
            dark ? "text-white/75" : "text-[#7B5C4B]"
          }`}
        >
          {description}
        </p>
      )}
      <div
        className={`mt-3.5 h-[2px] w-12 ${
          dark ? "bg-[#B5532F]" : "bg-[#B5532F]"
        } ${isCenter ? "mx-auto" : "mr-auto"}`}
      />
    </div>
  );
}
