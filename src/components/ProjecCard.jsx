const ProjecCard = ({
  imgUrl,
  title,
  tags,
  technologies,
  githubUrl,
  liveUrl,
}) => {
  // Use technologies if available, otherwise fall back to tags, or empty array
  const displayTags = technologies || tags || [];

  // Derive alternative formats from conventional naming (same base name)
  const basePath = imgUrl.replace(/\.(png|jpe?g|webp|avif)$/i, "");
  const avifUrl = `${basePath}.avif`;
  const webpUrl = `${basePath}.webp`;

  return (
    <div className="h-full bg-white dark:bg-[#121212] rounded-xl overflow-hidden shadow-md mx-2">
      <picture>
        <source srcSet={avifUrl} type="image/avif" />
        <source srcSet={webpUrl} type="image/webp" />
        <img
          src={webpUrl}
          alt={title}
          className="w-full h-72 md:h-80 object-cover"
          loading="lazy"
          decoding="async"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </picture>

      <div className="px-4 py-5">
        <h3 className="text-base font-semibold line-clamp-2 overflow-hidden text-ellipsis">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {displayTags.map((tag, index) => (
            <span
              key={index}
              className="text-xs text-secondary bg-orange-100 dark:bg-[#1e1e1e] px-3 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-3 mt-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-white bg-gradient-primary px-3 py-2 rounded"
            >
              View Code
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-secondary border border-orange-200 dark:border-white/10 px-3 py-2 rounded"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjecCard;
