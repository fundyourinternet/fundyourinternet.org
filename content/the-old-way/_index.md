---
title: "The Old Way"
summary: "What happens when algorithms decide what you see, and what it means for the things you rely on."
strand_title: "The system is working as designed"
strand_teaser: "A local news site earns fractions of a penny per page view from ads. To pay one journalist, they need millions of views a month. That changes what gets written — not because of bad intentions, but because of basic arithmetic."
outline:
  - title: "How Feeds Choose for You"
    icon: "list-filter"
    anchor: "how-feeds-choose"
    description: "What a feed actually is, and why engagement is not the same as enjoyment."
  - title: "What Gets Made (and What Does Not)"
    icon: "newspaper"
    anchor: "what-gets-made"
    description: "The arithmetic of ad-supported content, from newsrooms to the creator economy."
  - title: "What It Costs You"
    icon: "hourglass"
    anchor: "what-it-costs"
    description: "The evidence on wellbeing, attention, and the mechanisms that capture both."
  - title: "How the System Sustains Itself"
    icon: "repeat"
    anchor: "how-it-sustains-itself"
    description: "Why the system persists even when nobody particularly wants it to."
  - title: "Seeing Clearly"
    icon: "eye"
    anchor: "seeing-clearly"
    description: "What changes when you understand the model, and where to go next."
bridges:
  - branch: new-way
    section: A New Way
    url: /a-new-way/
    prompt: "See who is already building alternatives to the ad-driven model."
  - branch: evidence
    section: The Evidence
    url: /the-evidence/
    prompt: "Read the research behind these claims."
---

Most of what you see online is chosen for you. Not by editors, not by your friends, not by the people who made it — by systems designed to keep you looking at the screen for as long as possible. That is not a conspiracy. It is a business model, and it shapes everything. {{< cite "doctorow-enshittification-2023" >}}

{{< outline >}}

## {{< icon "list-filter" >}} How Feeds Choose for You {#how-feeds-choose}

Open any social media app and you will see a feed. It looks like a stream of things people posted, roughly in order. It is not.

What you see is a ranking. Every post, video, and link has been scored by a system that predicts how likely you are to engage with it — to tap, to comment, to share, to keep watching. The posts that score highest appear first. The ones that score lowest disappear, even if the person who posted them intended you to see them. On most platforms, you cannot turn this off. {{< sidenote >}}An algorithm is just a set of rules for making decisions. Your email spam filter is an algorithm. The difference is that a spam filter is designed to help you. A feed algorithm is designed to help the platform.{{< /sidenote >}}

### Engagement is not enjoyment

The ranking optimises for engagement — taps, likes, shares, comments, watch time. But engagement is not the same as enjoyment, and it is definitely not the same as value.

An algorithmic audit of Twitter/X found that engagement-based ranking amplifies emotionally charged, hostile content significantly more than a reverse-chronological feed would. {{< cite "milli-engagement-amplification-2025" >}} Users themselves reported wanting to see *less* of the divisive content that the algorithm was showing them *more* of. The business model and the ranking system are the same thing.

A separate study of 2.7 million tweets found that low-credibility sources performed better in the algorithmic feed than credible ones, with the effect concentrated among high-engagement, high-follower accounts. {{< cite "corsi-twitter-amplification-2024" >}} The algorithm does not know what is true. It knows what gets clicks.

Research on Facebook's ranking system found the same trade-off: weighting engagement signals increases platform engagement but also increases misinformation and polarisation. {{< cite "germano-ranking-engagement-2025" >}} Facebook's own 2018 "Meaningful Social Interactions" update, which prioritised content from friends and family, contributed to increased ideological extremism — because the metric was wrong.

### An old pattern in new clothes

The pattern — free content subsidised by advertising, then advertising reshaping the content — is as old as mass media. Tim Wu traces it from the penny press of the 1830s through radio, television, and into the internet age. {{< cite "wu-attention-merchants-2016" >}} Each new medium attracted an audience with something useful, then turned that audience into a product for advertisers. What makes the internet version distinctive is scale and automation: an algorithmic feed makes millions of ranking decisions per second, for each individual user, with no human oversight of any individual result.

### What the evidence does not show

The story is sometimes told as "algorithms are brainwashing you" or "filter bubbles are polarising the world." The research is more specific.

Four experiments with nearly 9,000 participants found that manipulating YouTube's recommendations to create filter bubbles and rabbit holes had no detectable short-term effect on political attitudes. {{< cite "liu-filter-bubble-2025" >}} The studies on emotional content and misinformation are robust, but the effects are more structural than the broadest claims suggest. Algorithms do not change what you believe overnight. They change what you see, what gets made, and what gets funded — over years, across millions of people, one ranking decision at a time. {{< sidenote >}}For the full research on how algorithmic feeds affect information quality, see [the evidence base](/the-evidence/).{{< /sidenote >}}

## {{< icon "newspaper" >}} What Gets Made (and What Does Not) {#what-gets-made}

A local newspaper earns a fraction of a penny per page view from digital advertising. To pay one journalist's salary, it needs millions of views every month. That is the arithmetic that reshapes what gets written.

### The collapse of local news

The most visible casualty is local journalism. The United States now has 213 counties with no local news source at all — news deserts where no one is covering the school board, the water treatment plant, the local court. In a single recent year, 136 newspapers closed. Web traffic to the 100 largest newspapers plunged 45 per cent over four years. {{< cite "medill-local-news-2025" >}}

The financial picture explains why. Print advertising revenue fell from roughly $49 billion in 2006 to a small fraction of that. Digital advertising was supposed to replace it. It never came close. {{< cite "pew-newspapers-2024" >}}

Globally, print circulation and advertising now account for less than half of publisher revenue for the first time in history. {{< cite "wanifra-press-trends-2025" >}} Over 300 digital news startups have launched in five years, but they are overwhelmingly concentrated in metro areas with educated, affluent populations. The news deserts are not being filled. {{< cite "medill-local-news-2025" >}}

### The creator economy's arithmetic

The "creator economy" is often described as a $250 billion market on its way to $480 billion by 2027. {{< cite "goldmansachs-creator-economy-2025" >}} Of the roughly 8.9 million independent content creators in the United States, 71 per cent earn under $30,000 a year. Only 9 per cent earn more than $100,000. A third make less than $5,000. {{< cite "mbo-creator-economy-2024" >}} For most, "creator" is a side project subsidised by a day job, a partner's income, or savings.

Brand deals account for roughly 70 per cent of creator revenue, which means most creator income depends on the same advertising system that funds the platforms. {{< cite "goldmansachs-creator-economy-2025" >}} {{< sidenote >}}Television still dominates news consumption at a ratio of more than five to one over online sources, which complicates the narrative that algorithmic feeds have replaced traditional media. The shift is real but not as complete as it is sometimes described. {{< cite "yang-platforms-news-2025" >}}{{< /sidenote >}}

### Trained to expect free

Only 17 per cent of people globally say they are willing to pay for online news. Fifty-seven per cent say they will not consider paying anything. Among the non-payers, just 2 per cent say they would pay the price of a full subscription. {{< cite "reuters-digital-news-2024" >}} This is not because people do not value journalism. It is because three decades of ad-supported internet have trained everyone to expect content for free. {{< cite "reuters-digital-news-2025" >}}

The result is a squeeze from both sides. Advertising revenue collapses. Willingness to pay remains low. What survives is whatever can be produced cheaply enough to sustain itself on fractions of pennies per view — or whatever is funded by someone with a reason to fund it that has nothing to do with its quality.

## {{< icon "hourglass" >}} What It Costs You {#what-it-costs}

### The headline claim

The U.S. Surgeon General stated in 2023 that teenagers spending more than three hours a day on social media face double the risk of depression and anxiety symptoms. {{< cite "surgeon-general-social-media-2023" >}} Jonathan Haidt's *The Anxious Generation* catalogued the mechanisms — sleep deprivation, attention fragmentation, social comparison — and argued that smartphones and social media have driven a generational mental health crisis. {{< cite "haidt-anxious-generation-2024" >}}

### The counterweight

A study of 2.4 million people across 168 countries over two decades found only small and inconsistent changes in global wellbeing and mental health — with no consistent link to internet and mobile broadband adoption. {{< cite "vuorre-wellbeing-internet-2024" >}} This is the most comprehensive dataset available, and it does not support the story that the internet is straightforwardly destroying mental health. {{< sidenote >}}Jonathan Haidt's *The Anxious Generation* is the most influential popular account of social media's effect on young people. Vuorre and Przybylski's large-scale study is the most important counterweight. Both are in [the evidence library](/the-evidence/). Reading them together is more useful than reading either alone.{{< /sidenote >}}

The research points not to a wholesale mental health catastrophe but to something more specific: the systematic capture of attention.

### Where the evidence is clearest

Think of a slot machine. You pull the lever not because every pull pays out, but because some pulls do and you cannot predict which. Scrolling a feed works the same way — most posts are forgettable, but sometimes you find something good, and that variable reinforcement keeps you scrolling. {{< cite "sharpe-dopamine-scrolling-2025" >}}

This is distinct from doom-scrolling, which is driven by anxiety. Dopamine-scrolling is driven by the pursuit of novel, rewarding content — the same reward-mechanism design that makes gambling compelling. It is a design pattern, engineered into the product.

Follower counts, engagement metrics, view totals: these are forms of stored attention that platforms monetise and redistribute. {{< cite "heitmayer-attention-economics-2025" >}} Your capacity to focus has been turned into a commodity, bought and sold without your involvement in the transaction.

### A tool that gets worse

When a platform you rely on degrades — more ads, worse recommendations, features removed, communities fragmented — the cost goes beyond annoyance. If you have built habits, relationships, and information routines around that platform, its decline damages your cognitive infrastructure. {{< cite "ardoline-platform-decay-2025" >}}

## {{< icon "repeat" >}} How the System Sustains Itself {#how-it-sustains-itself}

The system sustains itself because every part of it is doing something locally rational. The platform maximises engagement because advertisers pay for it. The creator chases engagement because the algorithm rewards it. You stay because the content is compelling and everyone you know is already there. Together, these produce a system nobody chose and almost nobody is happy with — but that persists because no single participant can change it alone.

### The enshittification cycle

Cory Doctorow named this pattern in 2023. {{< cite "doctorow-enshittification-2023" >}} A platform launches and offers value to attract users. Once they are locked in — their friends are there, their content is there, their habits are built around it — the platform redirects value away from users and toward advertisers and shareholders. Features degrade. Ads multiply. The feed gets noisier. {{< sidenote >}}The word "enshittification" is crude but precise. It describes the specific process by which platforms that start generous become extractive — through the predictable incentives of venture-funded growth. This site uses the term only where the concept is being explained.{{< /sidenote >}}

The platform that once needed you to love it now only needs you to keep using it. The model requires growth, then monetisation, then returns to investors — and if you keep using it, even while complaining, it is working as designed.

### The lock-in is social

You do not stay on a declining platform because the software is good. You stay because the people you know are there. Your group chats, your professional contacts, your community threads — they are all inside the platform, and moving them requires everyone to move at once. That coordination problem is far more powerful than any technical barrier, which is why platforms invest heavily in features that increase your social investment and very little in features that would make it easy to leave.

### Beyond social media

The same pattern — attract, lock in, extract — extends beyond social media. Research on long-term gig workers documents how ride-sharing and delivery platforms follow the identical trajectory: early conditions are generous, and then, once workers depend on the platform for their livelihood, conditions steadily worsen through burden shifting, feature changes, and market manipulation. {{< cite "maffie-enshittification-work-2026" >}} The underlying logic applies to any platform business that grows by subsidising one side of a market.

### Not a conspiracy

The system does not require your ignorance. It just does not require your awareness. It operates in the open, documented in earnings calls and annual reports, visible to anyone who looks. Most people do not look because the system is designed to be frictionless — to require no thought, no decision, no awareness of the transaction taking place.

But once you do see it — once you understand that the problem is not any one platform but the business model beneath it — something shifts. If the problem is the funding model, then anything funded differently is worth a look. That is not idealism. It is arithmetic. {{< sidenote >}}If you are thinking "so what *is* funded differently?" — that is exactly what [A New Way](/a-new-way/) covers.{{< /sidenote >}}

## {{< icon "eye" >}} Seeing Clearly {#seeing-clearly}

None of what you have just read is secret. It is documented in research, earnings reports, and public statements. What the system does not do is make itself legible. There is no moment, using any platform, where it pauses to explain what it is doing and why. You are never asked to consent to the transaction in which your attention is sold. You are simply enrolled in it, by default, the moment you open the app.

### What changes

Knowing this does not mean you stop using the internet. The internet is full of things worth your time — communities, tools, knowledge, creative work that matters to you. The point is to see the difference between content you chose and content that was chosen for you.

You can notice when you are scrolling from habit rather than interest. You can recognise the pull of variable reinforcement — the "just one more" feeling that has nothing to do with whether the next post will actually be worth your time. You can distinguish between a platform that is serving you and one that is extracting from you.

These are small shifts in perception that, once made, cannot be unmade. It is like knowing that supermarkets place sweets at the checkout. You still buy sweets sometimes. But you buy them because you decided to, not because a system put them in your path at the moment you were least likely to think about it. The goal is not purity. It is awareness.

### What awareness does not solve

Interventions that change how people use social media do improve wellbeing, particularly for depression. {{< cite "vanolst-social-media-interventions-2023" >}} Individual action matters. But the structural problems described here — the misaligned incentives, the degradation of public-interest content, the extraction cycles — require structural responses. {{< cite "hari-stolen-focus-2022" >}} {{< sidenote >}}The front page of this site asks you to pick one thing you rely on online and find out if you can support it. That is the practice version of the understanding this section has outlined. [Start here](/) if you have not already.{{< /sidenote >}}

Those responses already exist. In dozens of communities — open source, journalism, podcasting, the decentralised web — people are building direct relationships between the people who make things and the people who value them. A pattern, emerging independently in different places, grounded in a simple premise: if the problem is the business model, try a different business model.

That is the next thread. {{< sidenote >}}Everything in this section is grounded in research. If you want to follow any claim to its source, or cite something yourself, the full library is at [The Evidence](/the-evidence/).{{< /sidenote >}}
