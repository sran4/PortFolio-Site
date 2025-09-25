const StatInfoCard = ({ count, label }) => {
  return (
    <div className="flex-1 flex gap-3 md:gap-5 bg-gradient-to-b from-[#fcf4ec] to-[#ffffff] dark:from-gray-800 dark:to-gray-700 rounded-[14px] p-5">
      <h4 className="text-4xl md:text-5xl font-medium text-secondary">
        {count}
      </h4>
      <p className="text-sm md:text-[16px] font-normal text-black dark:text-white leading-6 whitespace-pre-line">
        {label}
      </p>
    </div>
  );
};

export default StatInfoCard;
