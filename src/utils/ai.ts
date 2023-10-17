
export const getAiFollowUpSteps = (content: string): string | null => {
  const theMap = {
    'to create a hyper-specific': 'blah blah',
    'launch a contest': 'blah blah',
    'create a series': 'blah blah',
    'host a live': 'blah blah',
    'partner with popular': 'blah blah',
    'reach out to': 'blah blah',
    'create limited edition': 'blah blah',
    'pitch the single': 'blah blah',
    'arrange interviews with': 'blah blah',
    'collaborate with music': 'blah blah',
  };

  const contentList = content.split(' ');
  const firstFourWords = contentList.slice(0, 4).join(' ').toLowerCase().trim();
  const followUpSteps = theMap[firstFourWords];

  return followUpSteps ?? null;
};
