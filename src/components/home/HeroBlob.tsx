import "../../styles/hero-blob.css";

export default function HeroBlob() {
  return (
    <div aria-hidden="true" className="hero-blob-wrap hero-blob-wrap--inner">
      <div className="hero-blob hero-blob--a hero-blob--md" />
      <div className="hero-blob hero-blob--b hero-blob--md" />
      <div className="hero-blob hero-blob--c hero-blob--md" />
    </div>
  );
}
