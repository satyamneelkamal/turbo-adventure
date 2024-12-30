const InfoBox = ({ label, value, show = true }) => {
  if (!show) return null;

  return (
    <div className="relative group overflow-hidden min-w-0 flex-1
                  bg-gradient-to-br from-[#0f1423] via-[#151b2e] to-[#0f1423]
                  backdrop-blur-xl backdrop-saturate-150
                  border border-blue-400/20
                  shadow-[rgba(0,0,0,0.56)_0px_22px_70px_4px]
                  rounded-xl">
      <div className="flex items-stretch h-full w-full">
        <div className="bg-[#0f1423] px-4 py-[0.7rem] flex items-center border-r border-blue-400/20 shrink-0">
          <span className="text-[1.8rem] text-[#e5e5e5] font-medium whitespace-nowrap">
            {label}
          </span>
        </div>
        <div className="flex-1 px-4 py-[0.7rem] flex items-center justify-end min-w-0">
          <span className="text-[1.8rem] text-[#e5e5e5] text-right whitespace-nowrap overflow-hidden text-ellipsis">
            {value}
          </span>
        </div>
      </div>
    </div>
  );
};

export default InfoBox; 