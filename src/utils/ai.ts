/* eslint-disable sonarjs/no-duplicate-string */

export const getAiFollowUpSteps = (content: string): {
    title: string;
    actions: string;
}[] => {
  const theMap: {
    [paragraph: string]: {
        title: string;
        actions: string;
    }[]
  } = {
    'to create a hyper-specific': [
      {
        title: 'marketer',
        actions: `I've created a potential mood board for the single release that tailors to the audience. 
        
        Here's the link: https://moodboard.tapped.ai/drake-42267246`,
      },
      {
        title: 'booking agent',
        actions: `I've created an EPK for you to send to venues that tailor to this audience. 
        
        Here's the link: https://epk.tapped.ai/drake-42267246`,
      },
    ],
    'launch a contest': [
      {
        title: 'social media manager',
        actions: `I've created a few of the image and captions for you to use on social media. 
        
        Here's the link: https://socialmedia.tapped.ai/drake-42267246`,
      },
    ],
    'create a series': [
      {
        title: 'social media manager',
        actions: `we don't support video just yet but herex's a reference to popular tiktok dances currently 
        
        https://www.steezy.co/posts/7-tiktok-dance-moves-you-can-learn-at-home`,
      },
    ],
    'host a live': [
      {
        title: 'social media manager',
        actions: `To run a Twitter Q&A, you can: 
        1. Ask people to tweet their questions using a specified hashtag.
        2. Log into your Twitter account and search for the hashtag.
        3. Retweet the question before replying.
        4. Reply using the Q&A hashtag in your answer.
        5. Respond to your audience as they're answering the questions.
        6. Brainstorm potential questions.
        7. Add your favorite questions to your Bookmarks.
        Here are some other tips for running a Twitter Q&A: 
        1. Send out a “Welcome!” Tweet and instructional Tweets.
        2. Tweet the TweetChat questions at least 10 minutes apart.
        3. Use a picture to draw attention to your post.
        4. Follow along by searching for the hashtag that you are using.
        5. Don't start the tweet with an @reply, as those will only be seen by users who follow you and the user who the @reply is directed to.
        6. Prepare answers in advance to give the whole Q&A a good pace. 
        here's a good reference https://passion.digital/blog/how-to-run-a-successful-twitter-qa/`,
      },
    ],
    'partner with popular': [
      {
        title: 'stylist',
        actions: `your public appearance is going to be crucial for this release. 
        
        here are some potential styles for you to wear https://stylist.tapped.ai/drake-42267246`,
      },
    ],
    'reach out to': [
      {
        title: 'marketer',
        actions: 'blah blah',
      },
    ],
    'create limited edition': [
      {
        title: 'marketer',
        actions: 'blah blah',
      },
    ],
    'pitch the single': [
      {
        title: 'marketer',
        actions: 'blah blah',
      },
    ],
    'arrange interviews with': [
      {
        title: 'marketer',
        actions: 'blah blah',
      },
    ],
    'collaborate with music': [
      {
        title: 'marketer',
        actions: `here are the most popular playlists for your genre and vibe: Late 90s/Early 2000s ESSENTIAL JAMS: By Gabrielle Langhorn, this playlist includes songs like "Gin and Juice" by Snoop Dogg, "Candy Shop" by 50 Cent, and "End of the Road" by Boyz II Men. 
        I Miss Y2K Pop Songs Playlist: This YouTube playlist includes songs like "Shape of My Heart" by the Backstreet Boys, "Foolish" by Ashanti, "What A Girl Wants" by Christina Aguilera, and "Rock Your Body" by Justin Timberlake. 
        I Miss Y2K Pop: This Apple Music playlist has 86 songs and lasts 5 hours and 37 minutes. 
        Y2K Aesthetic: This Spotify playlist includes songs from the late 90s and early 2000s in the Y2K aesthetic, including pop, electronic, big beat, and R&B. 
        90s to Y2K Pop: This Spotify playlist includes early 2000s and 90s music, with more pop and hip-hop than rock. 
        Y2K 90s through early 20s: This Amazon Music playlist is fan-made. 
        90s/Y2K: This Amazon Music playlist is fan-made.
        
        I've created a playlist pitch for you here https://playlistpitch.tapped.ai/drake-42267246 
        
        nagivate here to create share your playlist pitches to the correct curators`,
      },
    ],
  };

  const contentList = content.split(' ');
  const firstFourWords = contentList.slice(0, 4).join(' ').toLowerCase().trim();
  const followUpSteps = theMap[firstFourWords];

  return followUpSteps ?? null;
};
