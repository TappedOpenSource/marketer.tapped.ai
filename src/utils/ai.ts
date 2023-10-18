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
    'launch a contest on': [
      {
        title: 'social media manager',
        actions: `I've created a few of the image and captions for you to use on social media. 
        
        Here's the link: https://socialmedia.tapped.ai/drake-42267246`,
      },
    ],
    'create a series of': [
      {
        title: 'social media manager',
        actions: `we don't support video just yet but herex's a reference to popular tiktok dances currently 
        
        https://www.steezy.co/posts/7-tiktok-dance-moves-you-can-learn-at-home`,
      },
    ],
    'host a live twitter': [
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
    'partner with popular fashion': [
      {
        title: 'stylist',
        actions: `your public appearance is going to be crucial for this release. 
        
        here are some potential styles for you to wear https://stylist.tapped.ai/drake-42267246`,
      },
    ],
    'reach out to nostalgic': [
      {
        title: 'marketer',
        actions: `we have a CRM of potential brands that might be great for you to work with.
        
        here's a potential email pitch template to use 

        "Subject: Exciting Partnership Opportunity - Amplify Your Brand with My Music

        Dear [Brand Contact's Name],
        
        I hope this email finds you well. I'm [Your Name], a [Your Genre] musician with a passion for [briefly mention your style, your values, or what sets you apart]. I'm reaching out because I believe there's a fantastic opportunity for us to collaborate and create something truly exceptional.
        
        As I prepare to release my upcoming album, [Album Name], I've been captivated by your brand's unique style, commitment to quality, and your ability to connect with your audience on a profound level. I believe that our shared dedication to creativity, authenticity, and self-expression makes us a perfect fit for a collaboration.
        
        Here's how I envision our partnership:
        
        [Detail how your music aligns with the brand]: My music [mention specific elements in your music that resonate with the brand's values or aesthetic], creating a powerful synergy that can resonate with our target audiences.
        
        [Propose the partnership concept]: I propose the creation of a limited-edition clothing line inspired by the themes and aesthetics of my album. This collaboration would not only be an exciting venture for both of us but also an opportunity to engage our fans in a unique way.
        
        [Mention your audience and reach]: My fan base includes [number] of dedicated followers who actively engage with my music and content on platforms like [list your social media profiles]. This partnership could expose your brand to a wider, music-loving audience.
        
        [Benefits for the brand]: Highlight how this partnership can benefit the clothing brand - increased brand visibility, the chance to tell a unique story, or the potential for increased sales.
        
        I'd love to discuss this opportunity further, share more about my music, and hear your thoughts on how we can collaborate for mutual success. Whether it's through exclusive merchandise, social media campaigns, or other creative ideas, I'm open to exploring various possibilities.
        
        Please let me know if you're interested and when you're available for a brief call or meeting. I'm excited about the potential of this partnership and look forward to the opportunity to work together to create something truly remarkable."

        navigate here to reach out to those brands https://crm.tapped.ai/drake-42267246
        `,
      },
    ],
    'create limited edition merchandise': [
      {
        title: 'marketer',
        actions: `we don't create merch for you now but here are some references for getting started with merch
        
        https://splice.com/blog/how-to-make-sell-merch-as-an-artist/`,
      },
    ],
    'pitch the single to': [
      {
        title: 'marketer',
        actions: 'head over to our pitch studio to pitch to the right curators https://pitch.tapped.ai/drake-42267246',
      },
    ],
    'arrange interviews with popular': [
      {
        title: 'marketer',
        actions: `Some noteworthy podcasts in the space are

        "Song Exploder": Hosted by Hrishikesh Hirway, this podcast features musicians breaking down their songs, explaining the creative process, and sharing insights into the music-making journey.

        "Dissect": This podcast, hosted by Cole Cuchna, delves deep into the meaning and stories behind iconic albums and songs, analyzing the lyrics, music, and cultural context.
        
        "Switched on Pop": Nate Sloan and Charlie Harding discuss the art and science of pop music, dissecting popular songs and exploring the musical techniques used in their creation.
        
        "The Joe Rogan Experience": While this podcast covers a wide range of topics, Joe Rogan occasionally hosts musicians and bands for in-depth conversations about their music and careers.
        
        "Tiny Desk Concerts" by NPR Music: While not a traditional podcast, NPR's Tiny Desk Concert series features live performances from a wide variety of artists. They sometimes discuss their work in brief interviews.
        
        "The Songwriting Podcast": This podcast, hosted by Bruce Wawrzyniak, features songwriters discussing their creative process, inspiration, and techniques for crafting songs.
        
        "Broken Record": Hosted by Malcolm Gladwell, Rick Rubin, and Bruce Headlam, this podcast explores the stories behind iconic music and musicians.
        
        "Disgraceland": This podcast, hosted by Jake Brennan, delves into the dark and often scandalous stories of famous musicians and bands.
        
        "The Trap Set with Joe Wong": This podcast features in-depth interviews with drummers and musicians from various genres, exploring their artistic journeys and experiences.
        
        "Sound Opinions": Jim DeRogatis and Greg Kot review and discuss the latest music releases, interview artists, and delve into the music industry.        

        check out our CRM to reach out to these podcasts https://crm.tapped.ai/drake-42267246
        `,
      },
    ],
    'collaborate with music streaming': [
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
    'reach out to popular': [
      {
        title: 'marketer',
        actions: `Some noteworthy channels in the space are
        
        Anthony Fantano (The Needle Drop): Anthony Fantano is a well-respected music critic known for his in-depth album reviews and opinionated reactions.

Shawn Cee: Shawn Cee provides reviews, reactions, and discussions on a wide range of music genres, often with a humorous and engaging style.

ARTV (Beyond ARTV): Jon Denton, also known as ARTV, offers album reviews, countdowns, and reactions to various music genres.

Lost in Vegas: These two friends, George and Ryan, react to and analyze songs from different genres, offering their unique perspective as two individuals with different musical tastes.

Trap Lore Ross: Trap Lore Ross delves into the backstories of various hip-hop and rap artists, providing context and analysis for their music and careers.

Rick Beato: Rick Beato is a musician and producer who offers insightful analysis, reactions, and tutorials on music theory, songwriting, and production.

BIGQUINT: BIGQUINT delivers animated and passionate reactions to hip-hop and rap music, often creating entertaining content through his emotional responses.

Todd in the Shadows: Todd provides pop song reviews with a humorous and satirical approach, often focusing on mainstream music hits.

Pitchfork: Pitchfork is a well-established music publication that also has a YouTube channel where they review and discuss various music releases.

theneedledrop (FANTANO): In addition to his main channel, Anthony Fantano has a second channel where he shares quicker reactions to new songs and albums.

        Check out our CRM to reach out to these channels https://crm.tapped.ai/drake-42267246
`,
      },
    ],
  };

  const contentList = content.split(/(\s+)/).filter((e) => e.trim().length > 0);
  const firstFourWords = contentList.slice(0, 4).join(' ').toLowerCase().trim();
  //   console.log({ firstFourWords });
  const followUpSteps = theMap[firstFourWords];

  return followUpSteps ?? null;
};
