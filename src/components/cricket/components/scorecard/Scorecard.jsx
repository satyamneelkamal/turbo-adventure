import React from 'react';

const Scorecard = ({ type, inningsNumber, data }) => {
  console.log(`Scorecard render:`, { type, inningsNumber, data });
  if (!data) return null;

  // Calculate top position based on type
  const getTopPosition = () => {
    switch (type) {
      case 'batting': return 'top-[240px]';
      case 'bowling': return 'top-[240px]';
      case 'partnerships': return 'top-[240px]';
      case 'fallOfWickets': return 'top-[240px]';
      default: return 'top-[240px]';
    }
  };

  const renderPartnershipAndFow = (partnerships, fow) => {
    if (!partnerships?.length && !fow?.length) return null;

    return (
      <div className="px-8">
        <div className="grid grid-cols-[1.4fr_0.6fr] gap-4 -translate-y-[5px]">
          {/* Partnerships Section */}
          <div>
            <div className="flex justify-center items-center 
                         bg-gradient-to-br from-[#0f1631] via-[#162448] to-[#0c1229] 
                         px-6 py-[3.2px] mb-2
                         rounded-lg border border-blue-400/30 
                         shadow-lg shadow-[#090d1f]/50">
              <div className="text-[2.2rem] font-bold text-[#e5e5e5]">
                PARTNERSHIPS
              </div>
            </div>
            <div className="grid grid-cols-[2fr_2fr_0.7fr_0.7fr_0.7fr] gap-1 mb-[1px] px-6 py-[2px]
                         bg-gradient-to-br from-[#0f1631] via-[#141e3d] to-[#0c1229]
                         rounded-lg border border-blue-400/20
                         shadow-md shadow-[#090d1f]/40">
              <div className="text-[1.8rem] font-bold text-[#f1f1f1] 
                          drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]
                          tracking-wide">BATTER 1</div>
              <div className="text-[1.8rem] font-bold text-[#f1f1f1] 
                          drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]
                          tracking-wide">BATTER 2</div>
              <div className="text-[1.8rem] font-bold text-[#f1f1f1] text-center
                          drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]
                          tracking-wide">RUNS</div>
              <div className="text-[1.8rem] font-bold text-[#f1f1f1] text-center
                          drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]
                          tracking-wide">BALLS</div>
              <div className="text-[1.8rem] font-bold text-[#f1f1f1] text-center
                          drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]
                          tracking-wide">SR</div>
            </div>
            <div className="space-y-[0.25px]">
              {data.partnerships?.map((p, index) => (
                <div key={index}
                     className="grid grid-cols-[2fr_2fr_0.7fr_0.7fr_0.7fr] gap-1 px-6 py-[2px]
                            bg-gradient-to-r from-[#0f1631]
                            rounded-lg border border-blue-500/20">
                  <div className="text-[1.8rem] text-[#e5e5e5] truncate">{p.player1}</div>
                  <div className="text-[1.8rem] text-[#e5e5e5] truncate">{p.player2}</div>
                  <div className="text-[1.8rem] text-[#e5e5e5] text-center">{p.runs}</div>
                  <div className="text-[1.8rem] text-[#e5e5e5] text-center">{p.balls}</div>
                  <div className="text-[1.8rem] text-[#e5e5e5] text-center">
                    {((p.runs / p.balls) * 100).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fall of Wickets Section */}
          <div>
            <div className="flex justify-center items-center 
                         bg-gradient-to-br from-[#0f1631] via-[#162448] to-[#0c1229] 
                         px-6 py-[3.2px] mb-2
                         rounded-lg border border-blue-400/30 
                         shadow-lg shadow-[#090d1f]/50">
              <div className="text-[2.2rem] font-bold text-[#e5e5e5]">
                FALL OF WICKETS
              </div>
            </div>
            <div className="grid grid-cols-[1fr_3fr_1fr_1fr] gap-1 mb-[1px] px-6 py-[2px]
                         bg-gradient-to-br from-[#0f1631] via-[#141e3d] to-[#0c1229]
                         rounded-lg border border-blue-400/20
                         shadow-md shadow-[#090d1f]/40">
              <div className="text-[1.8rem] font-bold text-[#f1f1f1] text-center
                          drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]
                          tracking-wide">NO</div>
              <div className="text-[1.8rem] font-bold text-[#f1f1f1]
                          drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]
                          tracking-wide">BATSMEN</div>
              <div className="text-[1.8rem] font-bold text-[#f1f1f1] text-center
                          drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]
                          tracking-wide">SCR</div>
              <div className="text-[1.8rem] font-bold text-[#f1f1f1] text-center
                          drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]
                          tracking-wide">OVR</div>
            </div>
            <div className="space-y-[0.25px]">
              {data.fallOfWickets?.map((w, index) => (
                <div key={index}
                     className="grid grid-cols-[1fr_3fr_1fr_1fr] gap-1 px-6 py-[2px]
                            bg-gradient-to-r from-[#0f1631]
                            rounded-lg border border-blue-500/20">
                  <div className="text-[1.8rem] text-[#e5e5e5] text-center">{w.wicketNumber}</div>
                  <div className="text-[1.8rem] text-[#e5e5e5] truncate whitespace-nowrap overflow-hidden">
                    {w.shortName}
                  </div>
                  <div className="text-[1.8rem] text-[#e5e5e5] text-center">{w.score}</div>
                  <div className="text-[1.8rem] text-[#e5e5e5] text-center">{w.over}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    switch (type) {
      case 'batting':
        return (
          <div className="space-y-12">
            {/* Title Section */}
            <div className="bg-gradient-to-br from-[#1a2442] via-[#1e2845] to-[#141c36] rounded-xl pb-4 backdrop-blur-sm bg-opacity-95">
              {/* Header Row with Title and Summary */}
              <div className="px-8 py-4">
                <div className="flex justify-between items-center 
                             bg-gradient-to-br from-[#0f1631] via-[#162448] to-[#0c1229] 
                             px-6 py-[4px]
                             rounded-lg border border-blue-400/30 
                             shadow-lg shadow-[#090d1f]/50
                             hover:border-blue-400/40 transition-all duration-300">
                  <div className="text-[2.2rem] font-bold text-[#e5e5e5]">
                    {data.teamName} - BATTING
                  </div>
                </div>
              </div>

              {/* Batting Table */}
              <div className="px-8">
                {/* Table Headers */}
                <div className="grid grid-cols-[2.5fr_0.8fr_0.8fr_0.8fr_0.8fr_4fr_1fr] gap-2 
                             mb-[1px] px-6 py-[2px]
                             bg-gradient-to-br from-[#0f1631] via-[#141e3d] to-[#0c1229]
                             rounded-lg border border-blue-400/20
                             shadow-md shadow-[#090d1f]/40">
                  <div className="text-[1.8rem] font-bold text-[#f1f1f1] 
                                drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]
                                tracking-wide">
                    BATTER
                  </div>
                  <div className="text-[1.8rem] font-bold text-[#f1f1f1] text-center
                                drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]
                                tracking-wide">
                    R
                  </div>
                  <div className="text-[1.8rem] font-bold text-[#f1f1f1] text-center
                                drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]
                                tracking-wide">
                    B
                  </div>
                  <div className="text-[1.8rem] font-bold text-[#f1f1f1] text-center
                                drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]
                                tracking-wide">
                    4S
                  </div>
                  <div className="text-[1.8rem] font-bold text-[#f1f1f1] text-center
                                drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]
                                tracking-wide">
                    6S
                  </div>
                  <div className="text-[1.8rem] font-bold text-[#f1f1f1]
                                drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]
                                tracking-wide">
                    DISMISSAL
                  </div>
                  <div className="text-[1.8rem] font-bold text-[#f1f1f1] text-center
                                drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]
                                tracking-wide">
                    SR
                  </div>
                </div>

                {/* Batting Rows */}
                <div className="space-y-0">
                  {data.batting.map((batter, index) => (
                    <div key={index} 
                         className="grid grid-cols-[2.5fr_0.8fr_0.8fr_0.8fr_0.8fr_4fr_1fr] gap-2 
                                 items-center
                                 px-6 py-0
                                 bg-gradient-to-r from-[#0f1631]
                                 rounded-lg
                                 border border-blue-500/20">
                      <div className="text-[1.8rem] text-[#e5e5e5] truncate leading-none 
                                    drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]
                                    font-semibold tracking-wide
                                    relative">
                        {batter.name}
                      </div>
                      <div className="text-[1.8rem] text-[#e5e5e5] text-center
                                    font-bold tracking-wider
                                    drop-shadow-[0_2px_3px_rgba(0,0,0,0.6)]
                                    relative">
                        {batter.runs ?? '-'}
                      </div>
                      <div className="text-[1.8rem] text-[#e5e5e5] text-center">{batter.balls ?? '-'}</div>
                      <div className="text-[1.8rem] text-[#e5e5e5] text-center">{batter.fours ?? '-'}</div>
                      <div className="text-[1.8rem] text-[#e5e5e5] text-center">{batter.sixes ?? '-'}</div>
                      <div className="text-[1.8rem] text-[#e5e5e5]">
                        {batter.dismissal?.split(' ').map((word, i, arr) => (
                          <React.Fragment key={i}>
                            {word}
                            {i < arr.length - 1 && <span className="mx-2"></span>}
                          </React.Fragment>
                        ))}
                      </div>
                      <div className="text-[1.8rem] text-[#e5e5e5] text-center">{batter.strikeRate ?? '-'}</div>
                    </div>
                  ))}
                </div>

                {/* Extras and Total Row */}
                <div className="mt-2 flex justify-between items-center 
                              px-6 py-[4px]
                              bg-gradient-to-br from-[#0f1631] via-[#162448] to-[#0c1229]
                              rounded-lg border border-blue-500/30
                              shadow-lg shadow-[#090d1f]/50
                              hover:border-blue-500/40 transition-all duration-300">
                  <div className="text-[1.8rem] text-[#f1f1f1] font-bold
                                drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]
                                tracking-wide">
                    Extras: <span className="text-[#e5e5e5]">{data.summary.extras.total}</span> 
                    <span className="text-[#e5e5e5] font-normal tracking-normal">
                      (W: {data.summary.extras.wide}, 
                      NB: {data.summary.extras.noBall}, B: {data.summary.extras.bye}, 
                      LB: {data.summary.extras.legBye})
                    </span>
                  </div>
                  <div className="text-[1.8rem] text-[#f1f1f1] font-bold
                                drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]
                                tracking-wide">
                    Total: <span className="text-[#e5e5e5]">{data.summary.score}/{data.summary.wickets}</span>
                    <span className="text-[#e5e5e5] font-normal tracking-normal"> ({data.summary.overs} overs)</span>
                  </div>
                </div>
              </div>

              {renderPartnershipAndFow(data.partnerships, data.fallOfWickets)}
            </div>
          </div>
        );

      case 'bowling':
        return (
          <div className="space-y-12">
            {/* Title Section */}
            <div className="bg-gradient-to-br from-[#1a2442] via-[#1e2845] to-[#141c36] rounded-xl pb-4 backdrop-blur-sm bg-opacity-95">
              <div className="px-8 py-4">
                <div className="flex justify-between items-center 
                             bg-gradient-to-br from-[#0f1631] via-[#162448] to-[#0c1229] 
                             px-6 py-[4px]
                             rounded-lg border border-blue-400/30 
                             shadow-lg shadow-[#090d1f]/50
                             hover:border-blue-400/40 transition-all duration-300">
                  <div className="text-[2.2rem] font-bold text-[#e5e5e5]">
                    {data.teamName} - BOWLING
                  </div>
                </div>
              </div>

              {/* Bowling Table */}
              <div className="px-8">
                {/* Table Headers */}
                <div className="grid grid-cols-[3fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-2 
                             mb-[1px] px-6 py-[2px]
                             bg-gradient-to-br from-[#0f1631] via-[#141e3d] to-[#0c1229]
                             rounded-lg border border-blue-400/20
                             shadow-md shadow-[#090d1f]/40">
                  <div className="text-[1.8rem] font-bold text-[#f1f1f1] 
                                drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]
                                tracking-wide">
                    BOWLER
                  </div>
                  <div className="text-[1.8rem] font-bold text-[#f1f1f1] text-center
                                drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]
                                tracking-wide">
                    O
                  </div>
                  <div className="text-[1.8rem] font-bold text-[#f1f1f1] text-center
                                drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]
                                tracking-wide">
                    M
                  </div>
                  <div className="text-[1.8rem] font-bold text-[#f1f1f1] text-center
                                drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]
                                tracking-wide">
                    R
                  </div>
                  <div className="text-[1.8rem] font-bold text-[#f1f1f1] text-center
                                drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]
                                tracking-wide">
                    W
                  </div>
                  <div className="text-[1.8rem] font-bold text-[#f1f1f1] text-center
                                drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]
                                tracking-wide">
                    WD
                  </div>
                  <div className="text-[1.8rem] font-bold text-[#f1f1f1] text-center
                                drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]
                                tracking-wide">
                    NB
                  </div>
                  <div className="text-[1.8rem] font-bold text-[#f1f1f1] text-center
                                drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]
                                tracking-wide">
                    ECO
                  </div>
                </div>

                {/* Bowling Rows */}
                <div className="space-y-0">
                  {data.bowling.map((bowler, index) => (
                    <div key={index} 
                         className="grid grid-cols-[3fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-2 
                           items-center
                           px-6 py-0
                           bg-gradient-to-r from-[#0f1631]
                           rounded-lg
                           border border-blue-500/20">
                      <div className="text-[1.8rem] text-[#e5e5e5] truncate leading-none 
                                    drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]
                                    font-semibold tracking-wide
                                    relative">
                        {bowler.name}
                      </div>
                      <div className="text-[1.8rem] text-[#e5e5e5] text-center">{bowler.overs}</div>
                      <div className="text-[1.8rem] text-[#e5e5e5] text-center">{bowler.maidens}</div>
                      <div className="text-[1.8rem] text-[#e5e5e5] text-center">{bowler.runs}</div>
                      <div className="text-[1.8rem] text-[#e5e5e5] text-center">{bowler.wickets}</div>
                      <div className="text-[1.8rem] text-[#e5e5e5] text-center">{bowler.wides}</div>
                      <div className="text-[1.8rem] text-[#e5e5e5] text-center">{bowler.noBalls}</div>
                      <div className="text-[1.8rem] text-[#e5e5e5] text-center">{bowler.economy}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'details':
        return (
          <div className="space-y-12">
            {/* Title Section */}
            <div className="bg-gradient-to-br from-[#1a2442] via-[#1e2845] to-[#141c36] 
                          rounded-xl p-4 backdrop-blur-sm bg-opacity-95">
              {/* Main Title */}
              <div className="px-8 py-2">
                <div className="flex justify-between items-center 
                             bg-gradient-to-br from-[#0f1631] via-[#162448] to-[#0c1229] 
                             px-6 py-[4px]
                             rounded-lg border border-blue-400/30 
                             shadow-lg shadow-[#090d1f]/50">
                  <div className="text-[2.2rem] font-bold text-[#e5e5e5]">
                    {data.teamName} - PARTNERSHIPS & FALL OF WICKETS
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="px-8 mt-2">
                <div className="grid grid-cols-[1.4fr_0.6fr] gap-4 -translate-y-[5px]">
                  {/* Partnerships Section */}
                  <div>
                    <div className="flex justify-center items-center 
                                 bg-gradient-to-br from-[#0f1631] via-[#162448] to-[#0c1229] 
                                 px-6 py-[3.2px] mb-2
                                 rounded-lg border border-blue-400/30 
                                 shadow-lg shadow-[#090d1f]/50">
                      <div className="text-[2.2rem] font-bold text-[#e5e5e5]">
                        PARTNERSHIPS
                      </div>
                    </div>
                    <div className="grid grid-cols-[2fr_2fr_0.7fr_0.7fr_0.7fr] gap-1 mb-[1px] px-6 py-[2px]
                                 bg-gradient-to-br from-[#0f1631] via-[#141e3d] to-[#0c1229]
                                 rounded-lg border border-blue-400/20
                                 shadow-md shadow-[#090d1f]/40">
                      <div className="text-[1.8rem] font-bold text-[#f1f1f1] 
                                  drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]
                                  tracking-wide">BATTER 1</div>
                      <div className="text-[1.8rem] font-bold text-[#f1f1f1] 
                                  drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]
                                  tracking-wide">BATTER 2</div>
                      <div className="text-[1.8rem] font-bold text-[#f1f1f1] text-center
                                  drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]
                                  tracking-wide">RUNS</div>
                      <div className="text-[1.8rem] font-bold text-[#f1f1f1] text-center
                                  drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]
                                  tracking-wide">BALLS</div>
                      <div className="text-[1.8rem] font-bold text-[#f1f1f1] text-center
                                  drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]
                                  tracking-wide">SR</div>
                    </div>
                    <div className="space-y-[0.25px]">
                      {data.partnerships?.map((p, index) => (
                        <div key={index}
                             className="grid grid-cols-[2fr_2fr_0.7fr_0.7fr_0.7fr] gap-1 px-6 py-[2px]
                                    bg-gradient-to-r from-[#0f1631]
                                    rounded-lg border border-blue-500/20">
                          <div className="text-[1.8rem] text-[#e5e5e5] truncate">{p.player1}</div>
                          <div className="text-[1.8rem] text-[#e5e5e5] truncate">{p.player2}</div>
                          <div className="text-[1.8rem] text-[#e5e5e5] text-center">{p.runs}</div>
                          <div className="text-[1.8rem] text-[#e5e5e5] text-center">{p.balls}</div>
                          <div className="text-[1.8rem] text-[#e5e5e5] text-center">
                            {((p.runs / p.balls) * 100).toFixed(2)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Fall of Wickets Section */}
                  <div>
                    <div className="flex justify-center items-center 
                                 bg-gradient-to-br from-[#0f1631] via-[#162448] to-[#0c1229] 
                                 px-6 py-[3.2px] mb-2
                                 rounded-lg border border-blue-400/30 
                                 shadow-lg shadow-[#090d1f]/50">
                      <div className="text-[2.2rem] font-bold text-[#e5e5e5]">
                        FALL OF WICKETS
                      </div>
                    </div>
                    <div className="grid grid-cols-[1fr_3fr_1fr_1fr] gap-1 mb-[1px] px-6 py-[2px]
                                 bg-gradient-to-br from-[#0f1631] via-[#141e3d] to-[#0c1229]
                                 rounded-lg border border-blue-400/20
                                 shadow-md shadow-[#090d1f]/40">
                      <div className="text-[1.8rem] font-bold text-[#f1f1f1] text-center
                                  drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]
                                  tracking-wide">NO</div>
                      <div className="text-[1.8rem] font-bold text-[#f1f1f1]
                                  drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]
                                  tracking-wide">BATSMEN</div>
                      <div className="text-[1.8rem] font-bold text-[#f1f1f1] text-center
                                  drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]
                                  tracking-wide">SCR</div>
                      <div className="text-[1.8rem] font-bold text-[#f1f1f1] text-center
                                  drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]
                                  tracking-wide">OVR</div>
                    </div>
                    <div className="space-y-[0.25px]">
                      {data.fallOfWickets?.map((w, index) => (
                        <div key={index}
                             className="grid grid-cols-[1fr_3fr_1fr_1fr] gap-1 px-6 py-[2px]
                                    bg-gradient-to-r from-[#0f1631]
                                    rounded-lg border border-blue-500/20">
                          <div className="text-[1.8rem] text-[#e5e5e5] text-center">{w.wicketNumber}</div>
                          <div className="text-[1.8rem] text-[#e5e5e5] truncate whitespace-nowrap overflow-hidden">
                            {w.shortName}
                          </div>
                          <div className="text-[1.8rem] text-[#e5e5e5] text-center">{w.score}</div>
                          <div className="text-[1.8rem] text-[#e5e5e5] text-center">{w.over}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return <div>Unknown section type: {type}</div>;
    }
  };

  return (
    <>
      {/* Add the backdrop layer that matches MatchBasicInfo.jsx */}
      <div className="fixed inset-x-0 top-[240px] h-[77%] backdrop-blur-md z-30" 
           style={{ background: 'linear-gradient(45deg, darkblue, rgb(20, 3, 3))', opacity: '0.95' }}>
      </div>

      <div className={`fixed inset-x-0 ${getTopPosition()} z-30
                      transition-all duration-500 ease-in-out
                      transform animate-slideIn
                      min-h-[calc(100vh-240px)]
                      px-[1.08rem] py-6
                      overflow-hidden`}>
        {/* Content */}
        <div className="relative w-[1848px] mx-auto backdrop-blur-[2px]">
          {/* Background container with rotation */}
          <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
            <div className="rotating-background opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a2442] via-[#2a3454] to-[#141c36] opacity-95"></div>
          </div>

          <div className="glow-box animated-border-box p-6 animated-content-box premium-box-shadow
                        border-t-0 rounded-b-xl rounded-t-none relative z-10
                        bg-gradient-to-br from-[#1a2442]">
            <div className="relative z-20">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Scorecard; 