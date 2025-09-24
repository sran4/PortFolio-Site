const ContactInfoCard = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-5 bg-orange-50 dark:bg-white/10 rounded border border-orange-100 dark:border-white/10 px-4 py-3 mb-5">
      <div className="w-10 h-10 text-xl text-white flex items-center justify-center bg-gradient-primary rounded-lg">
        {icon}
      </div>

      <p className="text-secondary text-xs md:text-sm">{text}</p>
    </div>
  );
};

export default ContactInfoCard;
