const ProjecCard = ({ imgUrl, title, tags, technologies }) => {
  // Use technologies if available, otherwise fall back to tags, or empty array
  const displayTags = technologies || tags || [];

  return (
    <div className="h-full bg-white dark:bg-[#121212] rounded-xl overflow-hidden shadow-md mx-2">
      <img
        src={imgUrl}
        alt={title}
        className="w-full h-72 md:h-80 object-cover"
      />

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
      </div>
    </div>
  );
};

export default ProjecCard;
