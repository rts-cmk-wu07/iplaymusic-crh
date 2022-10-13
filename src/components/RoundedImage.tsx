function RoundedImage({
  imageSource,
  alt,
  className,
}: {
  imageSource: string;
  alt: string;
  className?: string;
}) {
  return (
    <img
      className={`rounded-lg h-full ${className}`}
      src={imageSource}
      alt={`${alt} album cover`}
      title={`${alt} album cover`}
    />
  );
}

export default RoundedImage;
