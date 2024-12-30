import React from 'react';

const TeamScoreBox = ({ teamName, score, overs, logo, isReversed = false }) => {
  // Format team name if it has 3 or more words
  const formatTeamName = (name) => {
    if (!name) return '';
    
    // Clean the input string
    const cleanName = name.trim().replace(/\s+/g, ' ');
    const words = cleanName.split(' ').filter(word => word.length > 0);
    
    console.log('Team name processing:', {
      original: name,
      cleaned: cleanName,
      wordCount: words.length,
      words: words
    });

    if (words.length >= 4) {
      const initials = words
        .map(word => word.charAt(0))
        .join('')
        .toUpperCase();
      
      console.log('Converting to initials:', {
        from: cleanName,
        to: initials
      });
      
      return initials;
    }
    
    return cleanName;
  };

  const displayName = formatTeamName(teamName);

  // Debug log the input and output
  console.log('TeamScoreBox render:', {
    input: teamName,
    formatted: displayName,
    isReversed
  });

  return (
    <div className={`flex items-center gap-6 ${isReversed ? 'flex-row-reverse' : 'flex-row'}`}>
      <div className="w-12 h-12 flex-shrink-0">
        {logo && <img src={logo} alt="" className="w-full h-full object-contain" />}
      </div>
      
      <div className={`flex items-baseline gap-3 ${isReversed ? 'flex-row-reverse' : 'flex-row'}`}>
        <div className="text-2xl font-bold text-[#e5e5e5] drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)]" title={teamName}>
          {displayName}
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-8xl font-bold text-[#e5e5e5] tracking-tight leading-none
              drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)]">
            {score}
          </span>
          <span className="text-2xl text-gray-400">({overs} ov)</span>
        </div>
      </div>
    </div>
  );
};

export default TeamScoreBox; 