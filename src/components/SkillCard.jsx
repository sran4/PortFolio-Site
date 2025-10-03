const SkillCard = ({ icon, skillName, description, progress }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-[#fce8d4] dark:border-gray-600 p-4">
      <div className="flex gap-3">
        <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-b from-[#fdeddd] to-[#ffffff] dark:from-gray-700 dark:to-gray-600 rounded-[7px]">
          {icon}
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <p className="text-[13px] text-black dark:text-white font-medium">
              {skillName}
            </p>
            <p className="text-xs text-secondary font-medium">{progress} %</p>
          </div>

          <div className="w-full bg-background dark:bg-gray-700 rounded-md h-[5px] relative mt-2">
            <div
              className="bg-primary h-[5px] rounded-md"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      <p className="text-xs text-gray-600 dark:text-gray-300 leading-5 mt-2">
        {description}
      </p>
    </div>
  );
};

export default SkillCard;
