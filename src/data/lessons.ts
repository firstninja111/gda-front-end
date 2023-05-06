const GDA_VIDEOS = ''

export const lessons = [
  {
    title: 'Basic Principles',
    hero_url: '/gda/heros/hero1.jpg',
    // hero_url: "https://empower-content-resources.s3.amazonaws.com/uploads/content_resource/file/128/hero1.jpg",
    lessonNo: '1',
    takeAways: [
      'Cognitions are the thoughts or ideas that run through our minds',
      'Our cognitions (thoughts) have a major effect on how we feel (emotions) and how we act (behavior)',
      'Events stimulate cognitions which lead to emotions which are followed by actions',
      'Cognitive therapy self-help methods teach you how to recognize and change distorted thinking',
    ],
    units: [
      {
        title: 'What is Cognitive Therapy?',
        unitNo: '1',
        content: [
          {
            type: 'video',
            videos: {
              1: {
                id: '1539270806001',
                poster: '/gda/content/posters/rushing-l1-u1.jpg',
                src: `${GDA_VIDEOS}1539270806001` + `.mp4`,
              },
              2: {
                id: '1799091054001',
                poster: '/gda/content/posters/wright-l1-u1.jpg',
                src: `${GDA_VIDEOS}1799091054001` + `.mp4`,
              },
            },
          },
          {
            type: 'text',
            html: `
						<p>People with depression or anxiety tend to have negatively distorted thoughts.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>What is Cognitive Therapy?</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Cognitive therapy is a proven method that helps reduce the symptoms of depression and anxiety.</p>
						<p>The term cognitive-behavior therapy (CBT) is also used to describe this powerful method because it helps people change both their thinking (cognitions) and their behavior.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>What is a Cognition?</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Cognition = a thought or thought processes</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>A Useful Approach</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>In this program, we use the terms cognitive therapy, cognitive-behavior therapy, and CBT to mean the same thing – a very effective approach to reduce depression and anxiety and improve your ability to solve problems.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Let’s learn the difference between thoughts and emotions.</p>
						`,
          },
        ],
      },
      {
        title: "Thoughts and Emotions: What's the Difference?",
        unitNo: '2',
        content: [
          {
            type: 'video',
            videos: {
              1: {
                id: '1523020350001',
                poster: '/gda/content/posters/rushing-l1-u2.jpg',
                src: `${GDA_VIDEOS}1523020350001` + `.mp4`,
              },
              2: {
                id: '1799091053001',
                poster: '/gda/content/posters/wright-l1-u1.jpg',
                src: `${GDA_VIDEOS}1799091053001` + `.mp4`,
              },
            },
          },
          {
            type: 'text',
            html: `
						<p>Cognitive-behavior therapy (CBT) teaches us that how we think about the events in our lives is one of the main influences on our emotions (or how we feel), and our behavior (or how we act).</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Summary Points:</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<bl>
						<li>A thought is an idea, an evaluation, or a conclusion.</li>
						<li>An emotion is a feeling.</li>
						<li>Emotions are reactions to thoughts.</li>
						</bl>
								`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Let’s meet Lisa, the main character in our story.</p>
						`,
          },
        ],
      },
      {
        title: 'Introducing Lisa',
        unitNo: '3',
        content: [
          {
            type: 'video',
            videos: {
              1: {
                id: '1523038846001',
                poster: '/gda/content/posters/rushing-l1-u3.jpg',
                src: `${GDA_VIDEOS}1523038846001` + `.mp4`,
              },
              2: {
                id: '1799129531001',
                poster: '/gda/content/posters/wright-l1-u3.jpg',
                src: `${GDA_VIDEOS}1799129531001` + `.mp4`,
              },
            },
          },
          {
            type: 'text',
            html: `
						<p>Meet Lisa, a woman who is struggling with depression and anxiety. In the first scene, you’ll see how Lisa’s depression influences her reaction to a visit from a friend.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Keep in Mind...</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>When you watch Lisa and Abby, see if you can observe:</p>
						<bl>
						<li>What are Lisa’s thoughts?</li>
						<li>What emotions does she have in response to her thoughts?</li>
						<li>What are the relationships between the events in the scene and Lisa’s thoughts, emotions, and behavior?</li>
						</bl>`,
          },
        ],
      },
      {
        title: "What's an Automatic Thought?",
        unitNo: '4',
        content: [
          {
            type: 'video',
            videos: {
              1: {
                id: '1523038853001',
                poster: '/gda/content/posters/rushing-l1-u4.jpg',
                src: `${GDA_VIDEOS}1523038853001` + `.mp4`,
              },
              2: {
                id: '1799129529001',
                poster: '/gda/content/posters/wright-l1-u4.jpg',
                src: `${GDA_VIDEOS}1799129529001` + `.mp4`,
              },
            },
          },
          {
            type: 'text',
            html: `
						<p>Lisa is having a number of negative thoughts that are fueling her depression. This series of videos illustrates and explains how negative thoughts often have an automatic quality.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Automatic Thoughts</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Automatic thoughts are usually private and are not evaluated carefully.</p>
						<p>These automatic thoughts strongly influence our emotions.</p>
						`,
          },
        ],
        quizzes: [
          {
            quiz_id: 1,
            title: "What's an automatic thought?",
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 1,
                name: 'A private thought that occurs rapidly.',
                correct: true,
                selected_text:
                  'Correct! Automatic thoughts usually occur rapidly, and we can fall into the trap of not checking them out to see if they are accurate.',
                unselected_text:
                  'Automatic thoughts usually occur rapidly, and we can fall into the trap of not checking them out to see if they are accurate.',
              },
              {
                quiz_option_id: 2,
                name: 'A really strong emotion.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 3,
                name: 'Something that has little impact on how we feel.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          // "user_quiz"=>{"quiz_id"=>"1", "user_id"=>"108", "quiz_answers_attributes"=>{"0"=>{"quiz_option_id"=>"2"}}}
        ],
      },
      {
        title: 'Events, Thoughts, Emotions, and Behaviors',
        unitNo: '5',
        content: [
          {
            type: 'video',
            videos: {
              1: {
                id: '1539270807001',
                poster: '/gda/content/posters/rushing-l1-u5.jpg',
                src: `${GDA_VIDEOS}1539270807001` + `.mp4`,
              },
              2: {
                id: '1799129527001',
                poster: '/gda/content/posters/wright-l1-u5.jpg',
                src: `${GDA_VIDEOS}1799129527001` + `.mp4`,
              },
            },
          },
          {
            type: 'title',
            html: `
						<h3>The Effects of Lisa's Thinking</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>This scene illustrates the relationship between events, thoughts, feelings, and behavior.</p>
						<p><strong>Event</strong>: Abby visits and offers to help.</p>
						<p><strong>Thoughts</strong>: “Everybody knows I’ve failed. Even my friends realize how bad things are. They’re just trying to be nice. How could anything help? It’s hopeless.”</p>
						<p><strong>Emotions</strong>: Lisa’s depressed mood increases.</p>
						<p><strong>Behavior</strong>: Lisa declines Abby’s offer of support.</p>
						`,
          },
        ],
      },
      {
        title: 'Lisa Starts to Feel Better',
        unitNo: '6',
        content: [
          {
            type: 'video',
            videos: {
              1: {
                id: '1539268891001',
                poster: '/gda/content/posters/rushing-l1-u6.jpg',
                src: `${GDA_VIDEOS}1539268891001` + `.mp4`,
              },
              2: {
                id: '1799125099001',
                poster: '/gda/content/posters/rushing-l1-u6.jpg',
                src: `${GDA_VIDEOS}1799125099001` + `.mp4`,
              },
            },
          },
          {
            type: 'text',
            html: `
						<p>This video demonstrates how healthier automatic thoughts make a big difference in how Lisa responds to Abby.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Results of Lisa's Changed Thinking</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>In this version of the scene, LIsa’s thoughts were much less negative. As a result, Lisa’s mood lifted, and she was able to accept her friend’s support.</p>
						<p><strong>Event:</strong> Abby visits Lisa and offers to help.</p>
						<p><strong>Thoughts:</strong> Lisa thinks: &ldquo;I guess I do look depressed, but it&rsquo;s good to know that my friends still believe in me. They haven&rsquo;t turned their backs on me, even though I&rsquo;ve been down. I have to figure out how I can let them help, without turning them off. I better tell Abby how much I appreciate the support.&rdquo;</p>
						<p><strong>Emotions:</strong> Lisa&rsquo;s depressed mood improves.</p>
						<p><strong>Behavior:</strong> Lisa accepts Abby&rsquo;s offer of support.</p>
						`,
          },
        ],
      },
      {
        title: 'Recognize and Change Your Negative Thinking',
        unitNo: '7',
        content: [
          {
            type: 'video',
            videos: {
              1: {
                id: '1539270810001',
                poster: '/gda/content/posters/rushing-l1-u7.jpg',
                src: `${GDA_VIDEOS}1539270810001` + `.mp4`,
              },
              2: {
                id: '1799129525001',
                poster: '/gda/content/posters/wright-l1-u7.jpg',
                src: `${GDA_VIDEOS}1799129525001` + `.mp4`,
              },
            },
          },
          {
            type: 'text',
            html: `
						<p>Cognitive therapy is used to change negatively biased automatic thoughts. Cognitive therapy can also help people cope when their negative thoughts are in fact true.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Coming Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Next we&rsquo;ll work on three exercises that will help you record your thoughts and work toward changing them. The first exercise is to create a <strong>Personal List of Positive Automatic Thoughts</strong>.</p>
						`,
          },
        ],
        practices: [
          { practiceId: 0, reviewNo: 1 },
          { practiceId: 1, reviewNo: 2 },
          { practiceId: 2, reviewNo: 3 },
        ],
      },
      {
        title: "Reviewing What You've Learned",
        unitNo: '8',
        content: [
          {
            type: 'video',
            videos: {
              1: {
                id: '1539268890001',
                poster: '/gda/content/posters/rushing-l1-u8.jpg',
                src: `${GDA_VIDEOS}1539268890001` + `.mp4`,
              },
              2: {
                id: '1799137383001',
                poster: '/gda/content/posters/wright-l1-u8.jpg',
                src: `${GDA_VIDEOS}1799137383001` + `.mp4`,
              },
            },
          },
          {
            type: 'title',
            html: `
						<h3>Understanding Basic Principles</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Do you think you understand the basic principles in this lesson? This review of the basic principles of CBT will let you check on your progress.
						`,
          },
        ],
        quizzes: [
          {
            quiz_id: 6,
            title: "Select Lisa's Positive Automatic Thoughts",
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 22,
                name: "Everybody knows I've failed. How could anything help?",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 23,
                name: "It's good to know that my friends still believe in me. I'd better tell Abby how much I appreciate the support.",
                correct: true,
                selected_text: "That's right. You chose the positive (healthy) automatic thoughts for Lisa.",
                unselected_text: 'These are the positive (healthy) automatic thoughts for Lisa.',
              },
            ],
          },
          {
            quiz_id: 7,
            title: 'Which of the following is an example of a positive thought (cognition)?',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 24,
                name: '"He always puts me down."',
                correct: false,
                selected_text: 'Always feeling "put down" is a classic example of *negative* thinking.',
                unselected_text: '',
              },
              {
                quiz_option_id: 25,
                name: '"I can handle this situation."',
                correct: true,
                selected_text: 'Good! You picked a positive cognition.',
                unselected_text: 'This is an example of a positive thought.',
              },
              {
                quiz_option_id: 26,
                name: '"I mess everything up."',
                correct: false,
                selected_text:
                  'This is a negative statement. It sounds as though this person is trying to take too much responsibility on his or her shoulders.',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 8,
            title: 'Pick the automatic thought that would most likely make you feel anxious.',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 27,
                name: '"He always puts me down."',
                correct: false,
                selected_text:
                  "Believing that you're put down is usually a sign of depression, rather than anxiety. This type of belief is usually associated with features of depression such as low self-esteem and hopelessness.",
                unselected_text: '',
              },
              {
                quiz_option_id: 28,
                name: '"Things can get better if I keep trying."',
                correct: false,
                selected_text: 'Good! You picked a positive cognition.',
                unselected_text:
                  'This thought sounds somewhat hopeful. If you think, "Things can get better if I keep trying", your anxiety probably would be reduced.',
              },
              {
                quiz_option_id: 29,
                name: '"I can\'t handle it!"',
                correct: true,
                unselected_text: "Usually, you feel anxious when you think you can't manage a situation.",
                selected_text:
                  'This thought sounds somewhat hopeful. If you think, "Things can get better if I keep trying", your anxiety probably would be reduced.',
              },
            ],
          },
          {
            quiz_id: 9,
            title: 'Which of these answers best describes automatic thoughts?',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 30,
                name: 'Automatic thoughts just pop into our minds, without being checked out.',
                correct: true,
                selected_text:
                  "Right! Automatic thoughts just pop into your head, and you usually don't stop to check them out.",
                unselected_text:
                  "Automatic thoughts just pop into your head, and you usually don't stop to check them out.",
              },
              {
                quiz_option_id: 31,
                name: 'Automatic thoughts are almost always positive or helpful.',
                correct: false,
                selected_text: "It would make things easier if this were true, but unfortunately it's not.",
                unselected_text: '',
              },
              {
                quiz_option_id: 32,
                name: 'Automatic thoughts have little to do with how we feel.',
                correct: false,
                unselected_text: '',
                selected_text: 'Automatic thoughts play a major role in determining how we feel.',
              },
            ],
          },
          {
            quiz_id: 10,
            title: 'The word "cognitive" is used to describe:',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 33,
                name: 'Our thinking',
                correct: true,
                selected_text: 'Yes. Cognitions are the thoughts that control how we feel and behave.',
                unselected_text: 'Cognitions are the thoughts that control how we feel and behave.',
              },
              {
                quiz_option_id: 34,
                name: 'Our behaviors',
                correct: false,
                selected_text:
                  'The word "cognitive" is used to describe thoughts or ideas in our minds. These thoughts affect how we behave.',
                unselected_text: '',
              },
              {
                quiz_option_id: 35,
                name: 'Our feelings',
                correct: false,
                unselected_text: '',
                selected_text:
                  'Feelings are our basic emotions (moods) like sadness, fear or happiness. Feelings are controlled by cognitions.',
              },
            ],
          },
          {
            quiz_id: 11,
            title: 'One of the most basic skills used in cognitive therapy involves learning how to:',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 36,
                name: 'Ignore feelings',
                correct: false,
                selected_text:
                  "Once you learn to become aware of how you think about things, you're on the road to making changes in how you feel and what you do.",
                unselected_text: '',
              },
              {
                quiz_option_id: 37,
                name: 'Recognize and change distorted thinking',
                correct: true,
                selected_text:
                  "That's it. Once you learn to become aware of how you think about things, you're on the road to making changes in how you feel and what you do.",
                unselected_text:
                  "Once you learn to become aware of how you think about things, you're on the road to making changes in how you feel and what you do.",
              },
              {
                quiz_option_id: 38,
                name: 'Hide from your negative thoughts',
                correct: false,
                unselected_text: '',
                selected_text:
                  "It's usually not a good idea to try to run away from your negative thoughts. They always seem to keep coming back – unless you start to change them.",
              },
            ],
          },
        ],
      },
      {
        title: 'Lesson 1 Summary',
        unitNo: '9',
        content: [
          {
            type: 'title',
            html: `
						<h3>Practice: One of the Most Important Things You Can Do</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Remember that the Practice exercises are a key part of this program to overcome depression and anxiety.
						<p>At the end of each lesson, we will make some suggestions for Practice exercises that you can do between lessons to build your skills in using cognitive-behavior therapy.</p>
						`,
          },
          {
            type: 'text',
            html: `
						<div class="takeaways">
						<h3>Summary Points:</h3>
						<bl>
						<li>Our cognitions (thoughts) have a major effect on how we feel (emotions) and how we act (behavior).</li>
						<li>Events → Thoughts → Emotions → Behavior. Events stimulate thoughts, that lead to emotions, that are followed by behaviors.</li>
						<li>Cognitive therapy teaches how to recognize and change distorted thinking.</li>
						</bl>
						</div>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>We’ll explain some different ways you can complete the Practice exercises.</p>
						`,
          },
        ],
      },
      {
        title: 'Sharing Your Progress',
        unitNo: '10',
        content: [
          {
            type: 'title',
            html: `
						<h3>Sharing Your Exercises with Your Doctor or Therapist</h3>
						`,
          },

          {
            type: 'text',
            html: `
						<p>If you are receiving treatment for emotional distress, we recommend that you take your completed exercises to your appointments with your doctor or therapist.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Option 1: Complete Exercises Online</h3>
						`,
          },

          {
            type: 'text',
            html: `
						<p>Print out your exercises from the Practice section, or ask your doctor or therapist to log on to Good Days Ahead to review the exercises you have completed.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Option 2: Print and Complete Offline</h3>
						`,
          },

          {
            type: 'text',
            html: `
						<p>You can print out the exercises so that you can use a pen or pencil to practice even if you are away from a computer. Then, take the completed exercises to your treatment session.
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },

          {
            type: 'text',
            html: `
						<p>On the next page, you’ll find the recommended Practice or “homework” exercises for Lesson 1.</p>
						`,
          },
        ],
      },
      {
        title: 'Recommended Exercises for Lesson 1',
        unitNo: '11',
        content: [
          {
            type: 'title',
            html: `
						<h3>Exercises</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<ol>
						<li>Read over the Tips for Basic Principles.</li>
						<li>Add some thoughts to your Personal List of Positive Thoughts or make other changes that you think might help.</li>
						<li>Work on your Personal List of Negative Thoughts. Choose a few of the thoughts that you could change.</li>
						<li>Then write down some new, healthier thoughts in the exercise Positive Changes in Your Thinking.</li>
						</ol>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Reminder:</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>You can do Practice exercises later by visiting either of these two places:</p>
						<bl>
						<li>Lesson 1 Overview page</li>
						<li>Lesson 1 Exercises in the “Practice” section</li>
						</bl>
		
						<p>We hope you enjoy doing the Practice exercises and that they help you build your skills in using cognitive therapy.</p>
						`,
          },
        ],
      },
    ],
    practices: [
      { practiceId: 0, reviewNo: 1 },
      { practiceId: 1, reviewNo: 2 },
      { practiceId: 2, reviewNo: 3 },
      { practiceId: 18, reviewNo: -1 },
    ],
  },

  {
    title: 'Identifying Thoughts',
    hero_url: '/gda/heros/hero2.jpg',
    // hero_url: "https://empower-content-resources.s3.amazonaws.com/uploads/content_resource/file/129/her02.jpg",
    lessonNo: '2',
    takeAways: [
      'How to recognize automatic thoughts and begin to change them',
      'How to accurately identify the emotions that are stirred up by your automatic thoughts',
      'How to rate the strength of your automatic thoughts and emotions',
      'How to use the first 4 steps of a Thought Change Record (TCR)',
    ],
    units: [
      {
        title: 'The Impact of Automatic Thoughts',
        unitNo: '1',
        subtitle: 'The Way You Think Affects How You Feel',
        content: [
          {
            type: 'video',
            videos: {
              1: {
                id: '1540693523001',
                poster: '/gda/content/posters/rushing-l2-u1.jpg',
                src: `${GDA_VIDEOS}1540693523001` + `.mp4`,
              },
              2: {
                id: '1799125095001',
                poster: '/gda/content/posters/wright-l2-u1.jpg',
                src: `${GDA_VIDEOS}1799125095001` + `.mp4`,
              },
            },
          },
          {
            type: 'text',
            html: `
						<h3>Summary Points:</h3>
						<p>Automatic thoughts are private thoughts that:</p>
						<bl>
						<li>Happen quickly</li>
						<li>Are part of our “self-talk” – the inner thoughts we rarely speak out loud to others</li>
						<li>Have a strong influence on our emotions and how we act</li>
						<li>May be negative or distorted</li>
						</bl>	`,
          },
        ],
      },
      {
        title: 'Three Steps to Changing Automatic Thoughts',
        unitNo: '2',
        content: [
          {
            type: 'video',
            videos: {
              1: {
                id: '1540644768001',
                poster: '/gda/content/posters/rushing-l2-u2.jpg',
                src: `${GDA_VIDEOS}1540644768001` + `.mp4`,
              },
              2: {
                id: '1799137381001',
                poster: '/gda/content/posters/wright-l2-u2.jpg',
                src: `${GDA_VIDEOS}1799137381001` + `.mp4`,
              },
            },
          },
          {
            type: 'title',
            html: `
						<h3>The Goal of This Lesson</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>The 3 steps that you will use to change negative automatic thoughts are:</p>
						<img src="/gda/images/Identify-Label-Modify.png" alt="Identify Label Modify" />
						<p>Our goal for this lesson is to learn the first step: how to identify automatic thoughts.</p>
						`,
          },
        ],
      },
      {
        title: 'Identifying Automatic Thoughts',
        unitNo: '3',
        content: [
          {
            type: 'video',
            videos: {
              1: {
                id: '1540644767001',
                poster: '/gda/content/posters/rushing-l2-u3.jpg',
                src: `${GDA_VIDEOS}1540644767001` + `.mp4`,
              },
              2: {
                id: '1540644767001',
                poster: '/gda/content/posters/wright-l2-u3.jpg',
                src: `${GDA_VIDEOS}1540644767001` + `.mp4`,
              },
            },
          },
          {
            type: 'title',
            html: `
						<h3>While you watch the video of Lisa...</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>See if you can identify her automatic thoughts. Also notice her emotions and physical reactions.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>A Clue for Detecting Automatic Thoughts</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>One of the most important clues that you are having automatic thoughts is the sudden appearance of a strong emotion or a feeling of physical tension.</p>
						`,
          },
          {
            type: 'text',
            html: `
						<div class="takeaways">
						<h3>Summary Points</h3>
						<bl>
						<li>The steps in changing Automatic Thoughts are learning to identify, label, and modify automatic thoughts.</li>
						<li>Strong emotions or physical tension are clues that automatic thoughts have just occurred.</li>
						</bl>
						</div>`,
          },
        ],
        quizzes: [
          {
            quiz_id: 2,
            title: "What were Lisa's emotions and physical reactions to the negative automatic thoughts?",
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 4,
                name: 'Angry and Relaxed',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 5,
                name: 'Anxious, Sad, and Tense',
                correct: true,
                selected_text: "Correct! You spotted Lisa's emotions and physical reactions. Now we can move on.",
                unselected_text: 'Lisa was anxious, sad, and tense.   Now we can move on.',
              },
              {
                quiz_option_id: 6,
                name: 'Happy and Tense',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 7,
                name: 'Angry, Sad, and Calm',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
        ],
      },
      {
        title: '"Tuning In" to Automatic Thoughts',
        unitNo: '4',
        content: [
          {
            type: 'video',
            videos: {
              1: {
                id: '1540693519001',
                poster: '/gda/content/posters/rushing-l2-u4.jpg',
                src: `${GDA_VIDEOS}1540693519001` + `.mp4`,
              },
              2: {
                id: '1799129523001',
                poster: '/gda/content/posters/wright-l2-u4.jpg',
                src: `${GDA_VIDEOS}1799129523001` + `.mp4`,
              },
            },
          },
          {
            type: 'title',
            html: `
						<h3>Identifying, or "tuning in" to automatic thoughts involves:</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<ol>
						<li>Recognizing your automatic thoughts</li>
						<li>Examining their accuracy</li>
						</ol>`,
          },
          {
            type: 'title',
            html: `
						<h3>Coming Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Next, let’s learn to use one of the most powerful self-help methods from cognitive therapy – the Thought Change Record.</p>
						`,
          },
        ],
      },
      {
        title: 'Using the Thought Change Record',
        unitNo: '5',
        content: [
          {
            type: 'text',
            html: `
						<p>One way to identify and quiet your negative inner dialogue is to use a technique called the Thought Change Record (TCR).</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>The TCR Can Help You:</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<ol>
						<li>Recognize your automatic thoughts</li>
						<li>Reduce distressing emotions by modifying your automatic thoughts</li>
						<li>Learn to recognize common errors in your thinking that are associated with depression and anxiety</li>
						<li>Improve your ability to effectively cope with the stressful events in your life</li>
						</ol>	`,
          },
          {
            type: 'title',
            html: `
						<h3>The First Four Steps of the TCR</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<bl>
						<li>Step 1: Identify an <strong>event</strong> that stimulated automatic thoughts</li>
						<li>Step 2: Identify <strong>automatic</strong> thoughts</li>
						<li>Step 3: Measure the <strong>strength</strong> of the automatic thoughts</li>
						<li>Step 4: Identify <strong>emotions</strong> triggered by the automatic thoughts and rate <strong>strength</strong> of the emotions</li>
						</bl>	`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Let’s go through the TCR step by step, starting with <strong>Step 1: Event</strong>.</p>
						`,
          },
        ],
      },
      {
        title: 'TCR Step 1: Event',
        unitNo: '6',
        content: [
          {
            type: 'title',
            html: `
						<h3>Record the Event</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>In Step 1, you briefly describe an event or memory of an event that triggered automatic thoughts.</p>
						<p>You’ll be able to fill out your own TCR after a few more pages.</p>
						`,
          },
          {
            type: 'image',
            images: {
              src: '/gda/images/lesson-2-unit-6.png',
              alt: 'lesson-2-unit-6 Image',
            },
          },
          {
            type: 'title',
            html: `
						<h3>Common Situations (Events) that Trigger Automatic Thoughts</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<bl>
						<li>You might have negative automatic thoughts in situations where your performance may be judged. Examples could include interviews for jobs, presenting a report, or public speaking.</li>
						<li>Negative automatic thoughts might be stirred up when you are in situations where you are evaluating your abilities or competence. Examples could include judgments you make about your intelligence, job skills, athleticism, or ability to stick with tasks until they are complete.</li>
						<li>You might have negative automatic thoughts about your appearance when you are in social situations.</li>
						</bl>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>We’ll review Step 2, where you will learn how to add automatic thoughts to the TCR.</p>
						`,
          },
        ],
      },
      {
        title: 'TCR Step 2: Thoughts',
        unitNo: '7',
        content: [
          {
            type: 'title',
            html: `
						<h3>Record the Automatic Thoughts</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>In Step 2 of the Thought Change Record, you are prompted to write down the automatic thoughts that came up in response to this event. There might be one or more thoughts to consider.</p>
						`,
          },
          {
            type: 'image',
            images: {
              src: '/gda/images/lesson-2-unit-7.png',
              alt: 'lesson-2-unit-7 Image',
            },
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>In Step 3, you can measure how strongly you believe these automatic thoughts. Again, we’ll show you an example of an entry on a TCR.</p>
						`,
          },
        ],
      },
      {
        title: 'TCR Step 3: Thought Strength',
        unitNo: '8',
        content: [
          {
            type: 'title',
            html: `
						<h3>Measure the Strength of Your Belief in Your Automatic Thoughts</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>After you write down the thoughts, you can rate how much you believed them at the time they occurred. We’ll use a scale from 0-10.</p>
						<bl>
						<li>0 = You didn’t believe the thoughts at all</li>
						<li>5 = You believed them somewhat</li>
						<li>10 = You believed them completely</li>
						</bl>	`,
          },
          {
            type: 'image',
            images: {
              src: '/gda/images/lesson-2-unit-8.png',
              alt: 'lesson-2-unit-8 Image',
            },
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>In Step 4, emotions and their intensity are recorded in the TCR.
						`,
          },
        ],
      },
      {
        title: 'TCR Step 4: Emotions',
        unitNo: '9',
        content: [
          {
            type: 'title',
            html: `
				<h3>Identify Emotions</h3>
				`,
          },
          {
            type: 'text',
            html: `
						<p>In this section of the TCR, you’ll be prompted to identify your emotional reactions, such as anxiety, anger, or sadness.</p>
						`,
          },
          {
            type: 'title',
            html: `
				<h3>Measure the Intensity of Your Emotions</h3>
				`,
          },
          {
            type: 'text',
            html: `
						<p>After you select your emotional reaction, measure the intensity of each emotion by rating each from 0-10.</p>
						<bl>
						<li>0 = the emotion is not present</li>
						<li>10 = highest intensity</li>
						</bl>
						<p>Check out the next demonstration of ratings of emotions.</p>
						`,
          },
          {
            type: 'image',
            images: {
              src: '/gda/images/lesson-2-unit-9.png',
              alt: 'lesson-2-unit-9 Image',
            },
          },
        ],
      },
      {
        title: "Lisa's Thought Change Record",
        unitNo: '10',
        content: [
          {
            type: 'text',
            html: `
						<p>Good job. Now that you’ve learned the first 4 steps of the TCR, you have the tools to IDENTIFY your automatic thoughts. Let’s see if we can use these tools to help Lisa create a TCR.</p>
						`,
          },
          {
            type: 'image',
            images: {
              src: '/gda/images/Identify-Label-Modify.png',
              alt: 'Identify Label Modify',
            },
          },
          {
            type: 'video',
            videos: {
              1: {
                id: '1540644767001',
                poster: '/gda/content/posters/rushing-l2-u10.jpg',
                src: `${GDA_VIDEOS}1540644767001` + `.mp4`,
              },
              2: {
                id: '1540644767001',
                poster: '/gda/content/posters/wright-l2-u10.jpg',
                src: `${GDA_VIDEOS}1540644767001` + `.mp4`,
              },
            },
          },
          {
            type: 'text',
            html: `
						<p>Watch the video again if you’d like to review Lisa’s situation before she changes her thinking. Otherwise, let’s get started with Lisa’s TCR.</p>
						`,
          },
        ],
        quizzes: [
          {
            quiz_id: 3,
            title: "The event that stimulated Lisa's automatic thoughts in this scene was:",
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 8,
                name: 'Her depression got worse. ',
                correct: false,
                selected_text: 'Her depression did not get worse in this scene.',
                unselected_text: '',
              },
              {
                quiz_option_id: 9,
                name: 'Her desk was messy. ',
                correct: false,
                selected_text:
                  "Lisa's desk could use some attention, but this problem wasn't the event that directly triggered her automatic thought.",
                unselected_text: '',
              },
              {
                quiz_option_id: 10,
                name: 'Her supervisor called about a project. ',
                correct: true,
                selected_text:
                  "That's right! Her supervisor's call was the event that set off Lisa's automatic thoughts.",
                unselected_text: "Lisa's supervisor's call was the event that set off Lisa's automatic thoughts",
              },
              {
                quiz_option_id: 11,
                name: 'Her friends were critical.',
                correct: false,
                selected_text: " Lisa's friends have been supportive.",
                unselected_text: '',
              },
            ],
          },
        ],
      },
      {
        title: "Lisa's TCR: Event",
        unitNo: '11',
        content: [
          {
            type: 'title',
            html: `
						<h3>Step 1: Identify the Event</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Lisa’s supervisor’s call was the event that set off her automatic thoughts. This is how Lisa would have filled out her TCR for the Event section.</p>
						`,
          },
          {
            type: 'image',
            images: {
              src: '/gda/images/lesson-2-unit-11.png',
              alt: 'lesson-2-unit-11 Image',
            },
          },

          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>We’ll identify Lisa’s automatic thoughts that resulted from her supervisor’s call.</p>
						`,
          },
        ],
        quizzes: [
          {
            quiz_id: 5,
            title: 'What automatic thoughts did Lisa have?',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 18,
                name: "I'm glad he's coming. I need his help... let's get to work. ",
                correct: false,
                selected_text: 'You picked a series of positive automatic thoughts.',
                unselected_text: '',
              },
              {
                quiz_option_id: 19,
                name: 'The Crenshaw project is coming along okay... I wonder what he wants to talk about. ',
                correct: false,
                selected_text:
                  "It would be nice if Lisa had these positive thoughts. But, she's thinking much more negatively at this point in time.",
                unselected_text: '',
              },
              {
                quiz_option_id: 20,
                name: "He's always meddling. Can't he do his own work without bothering me? ... I guess I'll just have to put up with him. ",
                correct: false,
                selected_text:
                  'These kind of automatic thoughts would stimulate anger at her boss. Instead we are looking for the automatic thoughts that made Lisa blame herself and feel depressed.',
                unselected_text: '',
              },
              {
                quiz_option_id: 21,
                name: "He knows I can't handle things anymore... I might as well quit now and save him the trouble of firing me. ",
                correct: true,
                selected_text: "Good job. You found Lisa's negative automatic thoughts.",
                unselected_text: "These were Lisa's negative automatic thoughts.",
              },
            ],
          },
        ],
      },
      {
        title: "Lisa's TCR: Automatic Thoughts",
        unitNo: '12',
        content: [
          {
            type: 'title',
            html: `
						<h3>Step 2: Recording Lisa's Automatic Thoughts</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Lisa’s automatic thoughts are shown below.</p>
						`,
          },
          {
            type: 'image',
            images: {
              src: '/gda/images/lesson-2-unit-12.png',
              alt: 'lesson-2-unit-12 Image',
            },
          },
        ],
      },
      {
        title: "Lisa's TCR: Belief in Automatic Thoughts",
        unitNo: '13',
        content: [
          {
            type: 'title',
            html: `
						<h3>Step 3: How Much Did Lisa Believe These Automatic Thoughts?</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Lisa doesn’t believe these automatic thoughts completely. She still has some doubts. On this TCR, we estimate her strength of belief to be 8.5 out of 10.</p>
						`,
          },
          {
            type: 'image',
            images: {
              src: '/gda/images/lesson-2-unit-13.png',
              alt: 'lesson-2-unit-13 Image',
            },
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Let’s identify Lisa’s emotions during the scene in her office.</p>
						`,
          },
        ],
        quizzes: [
          {
            quiz_id: 29,
            title: "Lisa's emotional and physical response can best be described as:",
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 85,
                name: 'Anxious, sad, tense ',
                correct: true,
                selected_text: 'Nice work. You recognized that Lisa had a mixture of emotions.',
                unselected_text: 'Lisa had a mixture of emotions including anxiety, sadness, and tension.',
              },
              {
                quiz_option_id: 86,
                name: 'Angry, relaxed ',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 87,
                name: 'Happy, tense ',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 88,
                name: 'Angry, sad, calm ',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
        ],
      },
      {
        title: "Lisa's TCR: Emotions",
        unitNo: '14',
        content: [
          {
            type: 'title',
            html: `
						<h3>Step 4: Identify Emotions</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>This screen shows the emotions Lisa noted on her TCR.</p>
						`,
          },
          {
            type: 'image',
            images: {
              src: '/gda/images/lesson-2-unit-14.png',
              alt: 'lesson-2-unit-14 Image',
            },
          },
          {
            type: 'title',
            html: `
						<h3>Your Turn with the TCR</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Now that you’ve had an opportunity to practice helping Lisa with the first 4 steps of the TCR, you can use this valuable method for a situation in your own life.</p>
						`,
          },
        ],
        practices: [{ practiceId: 3, reviewNo: 1 }],
      },
      {
        title: "Reviewing What You've Learned",
        unitNo: '15',
        content: [
          {
            type: 'text',
            html: `
						<p>Are you ready to use the ideas in this lesson to attack your own problems? Let’s pause for a moment so you can check your progress.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Try to have some fun with the review questions. If you treat them like “brain teasers,” you’ll find that the questions can be interesting and stimulating.</p>
						<p>Don’t worry if you don’t get all of the answers correct. Experimenting with new ideas is one of the best ways to learn.</p>
						`,
          },
        ],
        quizzes: [
          {
            quiz_id: 30,
            title: 'The steps in changing automatic thoughts are:',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 89,
                name: 'Review, Reflect, Reduce',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 90,
                name: 'Think, Act, Feel',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 91,
                name: 'Identify, Label, Modify',
                correct: true,
                selected_text:
                  "It's good to see that you remember the three steps of changing automatic thoughts. If you practice these steps, you'll get to the point where you'll start to \"automatically\" correct your distorted thinking.",
                unselected_text: 'These are the three steps of changing automatic thoughts.',
              },
              {
                quiz_option_id: 92,
                name: 'Feel, Think, Edit',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 31,
            title: 'What may be the most important benefit of identifying automatic thoughts?:',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 93,
                name: 'Automatic thoughts help us control our emotions.',
                correct: false,
                selected_text:
                  'The most important benefit of identifying automatic thoughts is that it opens the door to developing a more rational thinking style. As people modify their negative automatic thoughts, they often notice a reduction in upsetting emotions such as sadness, anger, or anxiety.',
                unselected_text: '',
              },
              {
                quiz_option_id: 94,
                name: 'When automatic thoughts are identified, you always feel better.',
                correct: false,
                selected_text:
                  "When people identify negative automatic thoughts they often begin to feel better. But, they don't always feel better. In fact, recognizing automatic thoughts may get people in touch with some of their painful emotions. And for a while they may feel a bit worse until they learn to turn their negative automatic thoughts in a healthier direction.",
                unselected_text: '',
              },
              {
                quiz_option_id: 95,
                name: 'Identifying the thoughts in your mind can reverse the mistakes of the past. ',
                correct: false,
                selected_text:
                  "No matter how much work you do with your automatic thoughts, you can't turn back the clock to change what happened in the past. However, cognitive therapy can help you cope better with past events and to function better in the here-and-now.",
                unselected_text: '',
              },
              {
                quiz_option_id: 96,
                name: 'Recognizing automatic thoughts is the first step in developing rational thoughts that can help you cope with problems.',
                correct: true,
                selected_text:
                  "You're on target with this answer. If you can identify negative automatic thoughts, you can then learn to develop rational thoughts that will help you overcome depression and anxiety.",
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 32,
            title: 'One of the best clues that automatic thoughts are occurring is:',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 97,
                name: 'Getting distracted',
                correct: false,
                selected_text:
                  'It is possible that automatic thoughts might distract you, make you less alert, or in some cases even give you a sense of relief. But the best clue is that levels of emotions or physical tension are increased.',
                unselected_text: '',
              },
              {
                quiz_option_id: 98,
                name: 'Increased levels of emotion or physical tension',
                correct: true,
                selected_text:
                  'Good work. In this lesson of the program you were taught that our cognitions (thoughts) drive our emotions. Strong emotional or physical reactions are great clues that automatic thoughts have just occurred.',
                unselected_text: '',
              },
              {
                quiz_option_id: 99,
                name: 'Experiencing a sense of relief',
                correct: false,
                selected_text:
                  'It is possible that automatic thoughts might distract you, make you less alert, or in some cases even give you a sense of relief. But the best clue is that levels of emotions or physical tension are increased.',
                unselected_text: '',
              },
              {
                quiz_option_id: 100,
                name: 'Reduced alertness',
                correct: false,
                selected_text:
                  'It is possible that automatic thoughts might distract you, make you less alert, or in some cases even give you a sense of relief. But the best clue is that levels of emotions or physical tension are increased.',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 33,
            title: 'The Thought Change Record contains all of the following parts except:',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 101,
                name: 'Automatic Thoughts',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 102,
                name: '"To Do" List',
                correct: true,
                selected_text:
                  'You\'re right. A "to do" list might be helpful in some situations. Also, setting goals can be an important part of working toward positive changes. However, the Thought Change Record doesn\'t include these items.',
                unselected_text:
                  'A "to do" list might be helpful in some situations. Also, setting goals can be an important part of working toward positive changes. However, the Thought Change Record doesn\'t include these items.',
              },
              {
                quiz_option_id: 103,
                name: 'Emotions',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 104,
                name: 'Event',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
        ],
      },
      {
        title: 'Lesson 2 Summary',
        unitNo: '16',
        content: [
          {
            type: 'image',
            images: {
              src: '/gda/images/Identify-Label-Modify.png',
              alt: 'Identify Label Modify',
            },
          },
          {
            type: 'text',
            html: `
						<p>Nice work on Lesson 2!</p>
						`,
          },
          {
            type: 'text',
            html: `
						<div class="takeaways">
						<h3>Summary Points</h3>
						<bl>
						<li>We all have lots of automatic thoughts.</li>
						<li>If you “tune in” to your automatic thoughts, you can see how these thoughts drive your emotions and your actions.</li>
						<li>The Thought Change Record (TCR) is one of the most useful methods of cognitive therapy.</li>
						<li>TCRs can help you organize and practice effective ways of changing negative, self-defeating, or unhelpful thoughts.</li>
						</bl>
						</div>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Let’s review your list of recommended exercises for Lesson 2.</p>
						`,
          },
        ],
      },
      {
        title: 'Recommended Exercises for Lesson 2',
        unitNo: '17',
        content: [
          {
            type: 'title',
            html: `
						<h3>Recommended Exercises</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<ol>
						<li>Read the Tips for Identifying Automatic Thoughts</li>
						<li>Review the First 4 Steps of the TCR exercise that you completed in this lesson.</li>
						<li>Practice using the First 4 Steps of the TCR exercise for other situations in your life.</li>
						</ol>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Practice Is a Key Part of This Program</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>We highly recommend that you complete additional exercises for “homework” between lessons. You can do exercises now or come back at any time to complete them. Just click on the Practice tab to find the exercises.</p>
					`,
          },
        ],
      },
    ],
    practices: [
      { practiceId: 3, reviewNo: 1 },
      { practiceId: 19, reviewNo: -1 },
    ],
  },

  {
    title: 'Labeling Thoughts',
    hero_url: '/gda/heros/hero3.jpg',
    // hero_url: "https://empower-content-resources.s3.amazonaws.com/uploads/content_resource/file/130/hero3.jpg",
    lessonNo: '3',
    takeAways: [
      'How to spot cognitive errors- the traps in thinking that can fuel depression and anxiety',
      'How to define and recognize the six major types of cognitive errors: <br> &#187; Ignoring the evidence <br> &#187; Jumping to conclusions <br> &#187; Overgeneralizing <br> &#187; Magnifying or minimizing <br> &#187; Personalizing <br> &#187; All or none thinking',
      'How to label the cognitive errors in your own automatic thoughts',
    ],
    units: [
      {
        title: 'Spotting Cognitive Errors',
        subtitle: '',
        unitNo: '1',
        content: [
          {
            type: 'text',
            html: `
						<p>In this lesson, you’ll build valuable skills for <strong>labeling</strong> the cognitive errors in your automatic thoughts. Spotting and changing these errors in thinking can be a big help in gaining power over depression and anxiety.</p>
						`,
          },
          {
            type: 'video',
            videos: {
              1: {
                id: '1540665858001',
                poster: '/gda/content/posters/rushing-l3-u1.jpg',
                src: `${GDA_VIDEOS}1540665858001` + `.mp4`,
              },
              2: {
                id: '1799137380001',
                poster: '/gda/content/posters/wright-l3-u1.jpg',
                src: `${GDA_VIDEOS}1799137380001` + `.mp4`,
              },
            },
          },
          {
            type: 'text',
            html: `
						<p>Let’s get started by finding out what happens when Lisa’s automatic thoughts don’t change when her supervisor comes to her office.</p>								
						`,
          },
        ],
      },
      {
        title: "Lisa's Negative Automatic Thoughts",
        unitNo: '2',
        subtitle: '',
        content: [
          {
            type: 'video',
            videos: {
              1: {
                id: '1540665858001',
                poster: '/gda/content/posters/rushing-l3-u2.jpg',
                src: `${GDA_VIDEOS}1540693518001` + `.mp4`,
              },
              2: {
                id: '1540665858001',
                poster: '/gda/content/posters/wright-l3-u2.jpg',
                src: `${GDA_VIDEOS}1540693518001` + `.mp4`,
              },
            },
          },
          {
            type: 'title',
            html: `
						<h3>The Effects of Negative, Dysfunctional Thinking</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Lisa had extremely negative automatic thoughts that made her nervous, depressed, and tense.  And then she acted in a negative, self-defeating way.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>It’s time now for you to help Lisa turn her dysfunctional thinking around, but first you need some background information.</p>
						`,
          },
        ],
      },
      {
        title: "Lisa's Background",
        unitNo: '3',
        subtitle: '',
        content: [
          {
            type: 'title',
            html: `
						<h3>A Happy Family and Successful Career</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Lisa is usually an active woman who balances her marriage and family relationships with a career as a “middle manager.” She’s worked for the same firm for nine years and has consistently gotten job evaluations in the above average to excellent range.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Lisa at Work</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Lisa’s boss, Tom, likes her ability to understand their clients’ needs and to make solid business plans. Also, Lisa has been praised by clients many times for her capacity to communicate clearly, her knack for finding solutions to difficult problems, and her friendly attitude.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Since Becoming Depressed...</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Since she has become depressed, Lisa has been having a crisis of confidence. She doesn’t have as much energy to give to her projects, and she sometimes has a hard time concentrating on her work. As a result, she has fallen behind schedule on the “Crenshaw Project,” her current major assignment. Now it seems like success is impossible.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>In Lisa's Eyes</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Lisa sees the Crenshaw project as probably being more than she can handle. However, she is actually doing a fairly good job. Her plans for the project make good sense, and she has been making progress on several fronts.</p>
						`,
          },
        ],
      },
      {
        title: 'Things Can Seem Worse Than They Really Are',
        unitNo: '4',
        subtitle: '',
        content: [
          {
            type: 'title',
            html: `
						<h3>Underestimating Abilities</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>When people become depressed or anxious, they often view their problems as being significantly worse than is actually the case, and they usually underestimate their ability to cope with tough decisions.</p>
						<p>Also, depression can make one forget personal strengths that can be used to resolve challenging problems.</p>
						`,
          },
          {
            type: 'video',
            videos: {
              1: {
                id: '1540644765001',
                poster: '/gda/content/posters/rushing-l3-u4.jpg',
                src: `${GDA_VIDEOS}1540644765001` + `.mp4`,
              },
              2: {
                id: '1799137379001',
                poster: '/gda/content/posters/wright-l3-u4.jpg',
                src: `${GDA_VIDEOS}1799137379001` + `.mp4`,
              },
            },
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>You’ll have the chance to learn how to label Lisa’s automatic thoughts and help her start climbing out of depression.</p>
						`,
          },
        ],
      },
      {
        title: 'About Cognitive Errors',
        unitNo: '5',
        subtitle: '',
        content: [
          {
            type: 'text',
            html: `
						<p>Errors or mistakes in thinking are called cognitive errors. When you label your automatic thoughts, you try to spot what type of distortions or errors in thinking have occurred.</p>
						`,
          },
          {
            type: 'video',
            videos: {
              1: {
                id: '1540693517001',
                poster: '/gda/content/posters/rushing-l3-u5.jpg',
                src: `${GDA_VIDEOS}1540693517001` + `.mp4`,
              },
              2: {
                id: '1799129522001',
                poster: '/gda/content/posters/wright-l3-u5.jpg',
                src: `${GDA_VIDEOS}1799129522001` + `.mp4`,
              },
            },
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>We’ll learn about the six types of cognitive errors that may be occurring in your automatic thoughts.</p>
						`,
          },
        ],
      },
      {
        title: 'The Six Types of Cognitive Errors',
        unitNo: '6',
        subtitle: '',
        content: [
          {
            type: 'video',
            videos: {
              1: {
                id: '1540665855001',
                poster: '/gda/content/posters/rushing-l3-u6.jpg',
                src: `${GDA_VIDEOS}1540665855001` + `.mp4`,
              },
              2: {
                id: '1799137378001',
                poster: '/gda/content/posters/wright-l3-u6.jpg',
                src: `${GDA_VIDEOS}1799137378001` + `.mp4`,
              },
            },
          },
          {
            type: 'title',
            html: `
						<h3>Six Types of Cognitive Errors</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<ol>
						<li>Ignoring the Evidence</li>
						<li>Jumping to Conclusions</li>
						<li>Overgeneralizing</li>
						<li>Magnifying or Minimizing</li>
						<li>Personalizing</li>
						<li>All or None Thinking</li>
						</ol>
    				`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>We’ll learn about each of these cognitive errors, starting with Ignoring the Evidence.</p>
						`,
          },
        ],
      },
      {
        title: 'Ignoring the Evidence',
        unitNo: '7',
        subtitle: '',
        content: [
          {
            type: 'text',
            html: `
						<p>This cognitive error has been called “the mental filter” because you screen out valuable information about topics such as:</p>
						<ol>
						<li>positive experiences from your past</li>
						<li>your strengths</li>
						<li>support that others can give</li>
						</ol>
						<p>When you Ignore the Evidence, you make a judgment (usually about your shortcomings or about something you think you can’t do) without looking at all the information.</p>
						<p>Can you think of examples in your life where you’ve witnessed this?</p>
						`,
          },
        ],
      },
      {
        title: 'Jumping to Conclusions',
        unitNo: '8',
        subtitle: '',
        content: [
          {
            type: 'text',
            html: `
						<p>Depressed and anxious people often Jump to Conclusions. They immediately think of the worst interpretations of situations. Once these negative images come into their minds, they become certain that they will come true.</p>
						<p>Another form of Jumping to Conclusions is the tendency to immediately think that others see you in a negative light. Have you ever done this? If you Jump to Conclusions, you may feel overwhelmed or hopeless and give up trying.</p>
						`,
          },
        ],
      },
      {
        title: 'Overgeneralizing',
        unitNo: '9',
        subtitle: '',
        content: [
          {
            type: 'text',
            html: `
						<p>Sometimes we can let a single problem mean so much to us that it colors our view of everything in our lives. We can give a small difficulty or flaw so much significance that it seems to define the entire picture. This type of cognitive error is called Overgeneralizing.</p>
						<p>When you Overgeneralize, it is like putting a drop of red paint in a large can of white paint and having the paint turn an intense red instead of the lightest shade of pink.</p>
						<p>If you can recognize Overgeneralizing, you can limit the spread of negativity and develop a rational perspective on your problems.</p>
						<p>Do you have the tendency to Overgeneralize?</p>					
						`,
          },
        ],
      },
      {
        title: 'Magnifying or Minimizing',
        unitNo: '10',
        subtitle: '',
        content: [
          {
            type: 'text',
            html: `
						<p>One of the most common cognitive errors is Magnifying or Minimizing the significance of things in your life. When you are depressed or anxious, you often Magnify your faults and Minimize your strengths.</p>
						<p>You also can Magnify the risks or difficulties in situations and Minimize the options or resources you have to manage the problem.</p>
						<p>An extreme form of Magnifying is sometimes called “Catastrophizing.” When you “catastrophize,” you automatically think that the worst possible thing will happen.</p>
						<p>Does this cognitive error ever give you trouble?</p>
						`,
          },
        ],
      },
      {
        title: 'Personalizing',
        unitNo: '11',
        subtitle: '',
        content: [
          {
            type: 'text',
            html: `
						<p>Another cognitive error that can make things worse is to get caught up in taking personal blame for everything that seems to go wrong. Personalizing is a classic feature of anxiety and depression.</p>
						<p>When you Personalize, you accept full responsibility for a troubling situation or problem even when there isn’t good evidence to back your conclusion. This type of cognitive error undermines your self-esteem and makes you more depressed.</p>
						<p>Of course, you need to accept responsibility when you have made mistakes. Owning up to problems can help you start to turn things around. However, when you are Personalizing, you are putting yourself down unnecessarily.</p>
						<p>Can you think of examples in your life where Personalizing has increased your distress?</p>			`,
          },
        ],
      },
      {
        title: 'All or None Thinking',
        unitNo: '12',
        subtitle: '',
        content: [
          {
            type: 'text',
            html: `
						<p>Have you ever had thoughts like these: “Nothing ever goes my way . . . He’s always right . . . There’s no way I could handle it . . . I always mess it up . . . Everything is going wrong?”</p>	
						<p>These cognitions are examples of one of the most damaging of the cognitive errors: All or None Thinking.</p>
						<p>When you let All or None Thinking go unchecked, you see the world in absolute terms. Everything is completely black or white – all good or all bad. You believe that others are doing great and you are doing just the opposite.</p>
						<p>All or None Thinking can also interfere with your working on tasks. Imagine what would happen if you thought you had to achieve 100% success or you shouldn’t even try at all. It’s usually better to set reasonable goals and to realize we are rarely complete successes or complete failures.</p>
						<p>How much has All or None Thinking affected your life?</p>
						`,
          },
        ],
      },
      {
        title: "Finding Lisa's Cognitive Errors",
        unitNo: '13',
        subtitle: '',
        content: [
          {
            type: 'video',
            videos: {
              1: {
                id: '1540644767001',
                poster: '/gda/content/posters/rushing-l3-u13.jpg',
                src: `${GDA_VIDEOS}1540644767001` + `.mp4`,
              },
              2: {
                id: '1540644767001',
                poster: '/gda/content/posters/wright-l3-u13.jpg',
                src: `${GDA_VIDEOS}1540644767001` + `.mp4`,
              },
            },
          },
          {
            type: 'text',
            html: `
						<p>Now, let’s go back over the scene where Lisa meets her supervisor so we can label the cognitive errors in Lisa’s automatic thoughts.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>It's Not Always Easy...</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>When you try to identify cognitive errors, you’ll find that it’s not always so easy to spot the exact type of distorted thinking that’s occurring.</p>
						<p>There can be overlap between cognitive errors, and there may be occasions when the definitions don’t seem to quite fit.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Start to Recognize Dysfunctional Thinking</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Don’t get discouraged if your responses to the questions about cognitive errors don’t always agree with the answers given in this program. The main point of labeling cognitive errors is to help you start to recognize dysfunctional thinking. You’ll be on the way to a more accurate and healthy style of thinking just by recognizing that <strong>any</strong> cognitive errors are happening.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Let’s try labeling the cognitive errors in Lisa’s automatic thoughts.</p>
						`,
          },
        ],
        quizzes: [
          {
            quiz_id: 4,
            title: 'What kind of cognitive errors are in the statement? "He knows I\'m in trouble',
            instruction: 'Select all that apply.',
            options: [
              {
                quiz_option_id: 12,
                name: 'Ignoring the Evidence',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 13,
                name: 'Overgeneralizing',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 14,
                name: 'Magnifying or Minimizing',
                correct: true,
                selected_text:
                  'This automatic thought is also a good example of another cognitive error – Magnifying. Lisa thinks she\'s "in trouble" when the situation probably isn\'t that bad.',
                unselected_text:
                  'This automatic thought is also a good example of another cognitive error – Magnifying. Lisa thinks she\'s "in trouble" when the situation probably isn\'t that bad.',
              },
              {
                quiz_option_id: 15,
                name: 'Personalizing',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 16,
                name: 'All or None Thinking',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 17,
                name: 'Jumping to Conclusions',
                correct: true,
                selected_text:
                  "Correct. Lisa is Jumping to Conclusions with this automatic thought. She doesn't really know what Tom thinks.",
                unselected_text:
                  "Lisa was Jumping to Conclusions with this automatic thought. She doesn't really know what Tom thinks.",
              },
            ],
          },
        ],
      },
      {
        title: 'Challenges of Labeling Cognitive Errors',
        unitNo: '14',
        subtitle: '',
        content: [
          {
            type: 'title',
            html: `
						<h3>Rest Assured...</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Studies have shown that even highly experienced cognitive therapists sometimes disagree on which cognitive errors are involved with specific automatic thoughts.</p>
						<p>So don’t get upset if you selected cognitive errors that are different from the ones noted here. Even if your choices didn’t agree exactly with the cognitive errors selected by the authors, you were thinking in the right direction.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Let’s go on to label another one of Lisa’s automatic thoughts. Remember, most automatic thoughts have more than one cognitive error.</p>
						`,
          },
        ],
        quizzes: [
          {
            quiz_id: 12,
            title: 'What kind of cognitive errors are in this statement? "I can\'t handle things anymore.',
            instruction: 'Select all that apply.',
            options: [
              {
                quiz_option_id: 39,
                name: 'Ignoring the Evidence',
                correct: true,
                selected_text: "You're right! Lisa is Ignoring the Evidence that she can still do lots of things well.",
                unselected_text: 'Lisa is Ignoring the Evidence that she can still do lots of things well.',
              },
              {
                quiz_option_id: 40,
                name: 'Jumping to Conclusions',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 41,
                name: 'Overgeneralizing',
                correct: true,
                selected_text:
                  "You're on target! It would help if Lisa could start to address her specific problems instead of making inaccurate, overgeneralized statements about losing the capacity to manage anything in her life.",
                unselected_text:
                  'It would help if Lisa could start to address her specific problems instead of making inaccurate, overgeneralized statements about losing the capacity to manage anything in her life.',
              },
              {
                quiz_option_id: 42,
                name: 'Magnifying or Minimizing',
                correct: true,
                selected_text:
                  'Correct! This statement also Magnifies her difficulties way out of proportion. Although Lisa is having some problems with work, she is greatly exaggerating her dilemma when she says "I can\'t handle things anymore."',
                unselected_text:
                  'This statement also Magnifies her difficulties way out of proportion. Although Lisa is having some problems with work, she is greatly exaggerating her dilemma when she says "I can\'t handle things anymore."',
              },
              {
                quiz_option_id: 43,
                name: 'Personalizing',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 44,
                name: 'All or None Thinking',
                correct: true,
                selected_text:
                  'This automatic thought has an absolute, All or None quality. The words "can\'t" and "anymore" indicate a 100% negative evaluation of Lisa\'s capacity to handle things. She would be in a much better position to manage her work problem if she could develop a more balanced view of the situation.',
                unselected_text:
                  'This automatic thought has an absolute, All or None quality. The words "can\'t" and "anymore" indicate a 100% negative evaluation of Lisa\'s capacity to handle things. She would be in a much better position to manage her work problem if she could develop a more balanced view of the situation.',
              },
            ],
          },
        ],
      },
      {
        title: 'Overlap Between Cognitive Errors',
        unitNo: '15',
        subtitle: '',
        content: [
          {
            type: 'text',
            html: `
						<p>Labeling these automatic thoughts demonstrates that often there is a good deal of overlap between cognitive errors, and many times you can find a number of cognitive errors in a single automatic thought.</p>
						<p>You’ll be making good progress if you can recognize the damaging effects of any of the cognitive errors, and if you start to look for these types of problems in your own thinking.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Summary Points</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>To benefit from the labeling exercises, it is not necessary that you identify each and every cognitive error.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Let’s try labeling the cognitive errors in one more of Lisa’s automatic thoughts.</p>
						`,
          },
        ],
        quizzes: [
          {
            quiz_id: 13,
            title:
              'What kind of cognitive errors are in the statement? "The Crenshaw project hasn\'t gone anywhere, and it\'s all my fault."',
            instruction: 'Select all that apply.',
            options: [
              {
                quiz_option_id: 45,
                name: 'Ignoring the Evidence',
                correct: true,
                selected_text:
                  "Good job. Lisa seems to Ignore the Evidence a good deal of the time. In this case she's not recognizing that she has made some progress on the Crenshaw project.",
                unselected_text:
                  "Lisa seems to Ignore the Evidence a good deal of the time. In this case she's not recognizing that she has made some progress on the Crenshaw project.",
              },
              {
                quiz_option_id: 46,
                name: 'Jumping to Conclusions',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 47,
                name: 'Overgeneralizing',
                correct: false,
                selected_text:
                  "You're on target! It would help if Lisa could start to address her specific problems instead of making inaccurate, overgeneralized statements about losing the capacity to manage anything in her life.",
                unselected_text:
                  'It would help if Lisa could start to address her specific problems instead of making inaccurate, overgeneralized statements about losing the capacity to manage anything in her life.',
              },
              {
                quiz_option_id: 48,
                name: 'Magnifying or Minimizing',
                correct: true,
                selected_text:
                  'Correct! Lisa is Magnifying the seriousness of the problem when she says the project "hasn\'t gone anywhere."',
                unselected_text:
                  'Lisa is Magnifying the seriousness of the problem when she says the project "hasn\'t gone anywhere."',
              },
              {
                quiz_option_id: 49,
                name: 'Personalizing',
                correct: true,
                selected_text:
                  'You got it! This automatic thought is a classic example of Personalizing. The statement "It\'s all my fault" indicates that Lisa is taking all of the blame for the problem.',
                unselected_text:
                  'This automatic thought is a classic example of Personalizing. The statement "It\'s all my fault" indicates that Lisa is taking all of the blame for the problem.',
              },
              {
                quiz_option_id: 50,
                name: 'All or None Thinking',
                correct: true,
                selected_text:
                  "Yes, this is another cognitive error in Lisa's thinking. When she says \"The Crenshaw project hasn't gone anywhere and it's all my fault,\" she is using absolute terms to describe her difficulties.",
                unselected_text:
                  'When Lisa says "The Crenshaw project hasn\'t gone anywhere and it\'s all my fault," she is using absolute terms to describe her difficulties.',
              },
            ],
          },
        ],
      },
      {
        title: 'Putting Skills into Action',
        unitNo: '16',
        subtitle: '',
        content: [
          {
            type: 'text',
            html: `
						<p>You’ve done a nice job labeling Lisa’s cognitive errors. Did this exercise help you think about how cognitive errors might be having an impact in your own life?</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>You can start to apply what you’ve learned about cognitive errors.</p>
						`,
          },
        ],
        practices: [{ practiceId: 4, reviewNo: 1 }],
      },
      {
        title: "Reviewing What You've Learned",
        unitNo: '17',
        subtitle: '',
        content: [
          {
            type: 'text',
            html: `
						<p>It’s time now for a few review questions to help build your skills in identifying cognitive errors.</p>
						`,
          },
        ],
        quizzes: [
          {
            quiz_id: 34,
            title: 'Which of the following was not one of the six cognitive errors defined in this lesson?',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 105,
                name: 'All or None Thinking',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 106,
                name: 'Ignoring the Evidence',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 107,
                name: 'Sweeping',
                correct: true,
                selected_text:
                  'Good job. You identified some of the cognitive errors that were covered in this lesson. All or none thinking, ignoring the evidence, and magnifying and minimizing can play a major role in keeping people depressed or anxious. The main object of labeling cognitive errors is for you to recognize and start to change distorted thinking.',
                unselected_text: 'This was the correct response.',
              },
              {
                quiz_option_id: 108,
                name: 'Magnifying or Minimizing',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 35,
            title:
              'If you tend to "take blame for everything that goes wrong", you may be a victim which cognitive error?',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 109,
                name: 'Ignoring the Evidence',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 110,
                name: 'Overgeneralizing',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 111,
                name: 'Jumping to Conclusions',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 112,
                name: 'Personalizing',
                correct: true,
                selected_text:
                  "Good choice! Taking blame for everything that goes wrong is a classic example of Personalizing. Remember that it's not really so important that you label cognitive errors exactly. Just try to recognize that cognitive errors are occurring and you'll be on the way to a healthier style of thinking.",
                unselected_text:
                  'The correct response was Personalizing (taking excessive blame for things that go wrong).',
              },
            ],
          },
          {
            quiz_id: 36,
            title: 'Label Cognitive Errors Based on this Situation: ',
            subtitle:
              "Alex is a school teacher who has suffered from depression. When Alex is depressed, he has much stronger self-critical thoughts. For example he thinks \"I'm a lousy teacher...I don't really have anything to say to these students.\" Actually, Alex is a highly rated teacher and students seem to really like his classes. When he isn't depressed, he doesn't have the negative, self-condemning thoughts about his effectiveness as a teacher. What cognitive errors seem to be involved in the thoughts: \"I'm a lousy teacher...I don't really have anything to say to these students?\" Select all that apply.",
            options: [
              {
                quiz_option_id: 113,
                name: 'Ignoring the Evidence',
                correct: true,
                selected_text:
                  'Correct! Alex is surely Ignoring the Evidence of the positive feedback he has received in the past.',
                unselected_text:
                  'Alex is surely is ignoring evidence of the positive feedback he has received in the past.',
              },
              {
                quiz_option_id: 114,
                name: 'Jumping to Conclusions',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 115,
                name: 'Overgeneralizing',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 116,
                name: 'Magnifying or Minimizing',
                correct: true,
                selected_text: 'Correct! Alex is minimizing his strengths as a teacher.',
                unselected_text: 'Alex is minimizing his strengths as a teacher.',
              },
              {
                quiz_option_id: 117,
                name: 'Personalizing',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 118,
                name: 'All or None Thinking',
                correct: true,
                selected_text:
                  'You got it. There is an "All or None" quality to his thinking when Alex says "I don\'t have anything to say to these students."',
                unselected_text:
                  'There is an "All or None" quality to his thinking when Alex says "I don\'t have anything to say to these students."',
              },
            ],
          },
          {
            quiz_id: 37,
            title: 'Label the Cognitive Error Based on this Situation: ',
            subtitle:
              'Tabitha has been having problems in her relationship with her 15-year-old daughter, Clarice. As commonly happens during the teen age years, Clarice gets irritable and lashes out at Tabitha when boundaries are placed on her activities. In one recent example, Tabitha asked Clarice to return from a party by 10:30 PM on a Friday night. When Clarice appeared at 1 AM, Tabitha asked her "Where have you been?" Clarice\'s angry reply was "You never let me have any fun...my friends don\'t have to put up with parents that want to control every little thing they do!" When Clarice says "You never let me have any fun," which of the cognitive errors is she using most strongly?',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 119,
                name: 'Jumping to Conclusions',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 120,
                name: 'Ignoring the Evidence',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 121,
                name: 'All or None Thinking',
                correct: true,
                selected_text:
                  'Yes. You spotted the cognitive error that was doing the most damage in fueling Clarice\'s anger and making the argument with her mother more difficult to resolve. When you use words such as "never" or "always," you are probably falling victim to All or None Thinking.',
                unselected_text:
                  'Clarice may have been having some of the other cognitive errors, but there is a very strong "All or None" quality to her thinking in this example.',
              },
              {
                quiz_option_id: 122,
                name: 'Magnifying or Minimizing',
                correct: false,
                selected_text: 'Correct! Alex is minimizing his strengths as a teacher.',
                unselected_text: 'Alex is minimizing his strengths as a teacher.',
              },
              {
                quiz_option_id: 123,
                name: 'Personalizing',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
        ],
      },
      {
        title: 'Lesson 3 Summary',
        unitNo: '18',
        subtitle: '',
        content: [
          {
            type: 'text',
            html: `
						<p>In this lesson, you learned how to identify errors in thinking that can play such a big role in depression and anxiety.</p>
						`,
          },
          {
            type: 'text',
            html: `
						<div class="takeaways">
						<h3>Summary Points</h3>
						<bl>
						<li>Cognitive errors are foes of rational thinking. If cognitive errors go unchecked, they often make negative automatic thoughts more intense and difficult to change.</li>
						<li>There are six major types of cognitive errors – ignoring the evidence, jumping to conclusions, overgeneralizing, magnifying or minimizing, personalizing, and all or none thinking.</li>
						<li>You don’t need to label cognitive errors just right to get benefit from spotting them.</li>
						<li>The Thought Change Record (TCR) is a good place to practice labeling cognitive errors. By using the TCR, you can learn to recognize these errors in thinking as soon as they occur so that you can “nip them in the bud.”</li>
						</bl>
						</div>		`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>We’ll suggest some Practice exercises that can help solidify your skills in labeling cognitive errors.</p>
						`,
          },
        ],
      },
      {
        title: 'Recommended Exercises for Lesson 3',
        unitNo: '19',
        subtitle: '',
        content: [
          {
            type: 'title',
            html: `
						<h3>To Be Really Effective</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Most people need regular practice at identifying and labeling automatic thoughts before they can effectively use cognitive therapy methods to control depression and anxiety.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Recommended Exercises</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<ol>
						<li>Read the Tips for Labeling Cognitive Errors.</li>
						<li>Practice using the Labeling Cognitive Errors exercise.</li>
						<li>Start at least one new Thought Change Record and then label the cognitive errors in your automatic thoughts.</li>
						</ol>
						`,
          },
        ],
      },
    ],
    practices: [
      { practiceId: 4, reviewNo: 1 },
      { practiceId: 20, reviewNo: -1 },
      { practiceId: 21, reviewNo: -1 },
    ],
  },

  {
    title: 'Modifying Thoughts',
    hero_url: '/gda/heros/hero4.jpg',
    // hero_url: "https://empower-content-resources.s3.amazonaws.com/uploads/content_resource/file/131/hero4.jpg",
    lessonNo: '4',
    takeAways: [
      'How to modify your automatic thoughts',
      'How to check the accuracy of your automatic thoughts',
      'How to develop rational alternatives to your automatic thoughts',
      'How to use a Thought Change Record to change your automatic thoughts',
    ],
    units: [
      {
        title: 'Learning to Modify Automatic Thoughts',
        unitNo: '1',
        subtitle: '',
        content: [
          {
            type: 'video',
            videos: {
              1: {
                id: '1540644764001',
                poster: '/gda/content/posters/rushing-l4-u1.jpg',
                src: `${GDA_VIDEOS}1540644764001` + `.mp4`,
              },
              2: {
                id: '1799125093001',
                poster: '/gda/content/posters/wright-l4-u1.jpg',
                src: `${GDA_VIDEOS}1799125093001` + `.mp4`,
              },
            },
          },

          {
            type: 'text',
            html: `
						<p>Now it’s time to learn some powerful methods that can be used to modify automatic thoughts.</p>
						<p>Let’s get started!</p>			`,
          },
        ],
      },
      {
        title: 'Developing a Healthier Style of Thinking',
        unitNo: '2',
        subtitle: '',
        content: [
          {
            type: 'video',
            videos: {
              1: {
                id: '1540644763001',
                poster: '/gda/content/posters/rushing-l4-u2.jpg',
                src: `${GDA_VIDEOS}1540644763001` + `.mp4`,
              },
              2: {
                id: '1799129521001',
                poster: '/gda/content/posters/wright-l4-u2.jpg',
                src: `${GDA_VIDEOS}1799129521001` + `.mp4`,
              },
            },
          },
          {
            type: 'title',
            html: `
						<h3>What is a Rational Thought?</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Rational thoughts are accurate or realistic.</p>
						<p>The Alternative Thoughts section of the Thought Change Record is used to note the modifications that you make to your automatic thoughts so they become more rational.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Let’s explore some of the techniques that you can use to modify your thinking to build up your rational thoughts.</p>
						<ol>
						<li>Examining the Evidence</li>
						<li>Listing Alternatives</li>
						</ol>
						`,
          },
        ],
      },
      {
        title: 'Examining the Evidence',
        unitNo: '3',
        subtitle: '',
        content: [
          {
            type: 'video',
            videos: {
              1: {
                id: '1540693513001',
                poster: '/gda/content/posters/rushing-l4-u3.jpg',
                src: `${GDA_VIDEOS}1540693513001` + `.mp4`,
              },
              2: {
                id: '1799129519001',
                poster: '/gda/content/posters/wright-l4-u3.jpg',
                src: `${GDA_VIDEOS}1799129519001` + `.mp4`,
              },
            },
          },

          {
            type: 'title',
            html: `
						<h3>What is "Examining the Evidence"?</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Examining the evidence is a technique for modifying automatic thoughts. It involves treating a specific thought like a theory instead of an established fact.</p>
						<p>This technique encourages you to weigh the evidence. Does the evidence support your automatic thought, or disprove its validity?</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Together, let’s try examining the evidence for Lisa’s automatic thought, “I can’t handle things anymore”.</p>
						`,
          },
        ],

        quizzes: [
          {
            quiz_id: 14,
            title: 'Examine the Evidence for: "I can\'t handle things anymore.',
            subtitle:
              'Does the following statement "The project plans are in good shape" support Lisa\'s thought (Evidence For), or does it help disprove her thought (Evidence Against)?',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 51,
                name: "Evidence For: This statement supports Lisa's automatic thought",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 52,
                name: "Evidence Against: This statement disproves Lisa's automatic thought",
                correct: true,
                selected_text:
                  "You're right! The fact that the project plans are in good shape would indicate that Lisa can handle things.",
                unselected_text:
                  'The fact that the project plans are in good shape would indicate that Lisa can handle things.',
              },
            ],
          },
          {
            quiz_id: 15,
            title: 'Examine the Evidence for: "I can\'t handle things anymore.',
            subtitle:
              'Does the statement "I\'ve slowed down" support Lisa\'s thought (Evidence For), or does it help disprove her thought (Evidence Against)?',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 53,
                name: "Evidence For: This statement supports Lisa's automatic thought",
                correct: true,
                selected_text:
                  "Yes, the fact that Lisa has slowed down could be considered evidence for Lisa's automatic thought.",
                unselected_text:
                  "The fact that Lisa has slowed down could be considered evidence for Lisa's automatic thought.",
              },
              {
                quiz_option_id: 54,
                name: "Evidence Against: This statement disproves Lisa's automatic thought",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 16,
            title: 'Examine the Evidence for: "I can\'t handle things anymore.',
            subtitle:
              'Does this statement "Some work is getting done" support Lisa\'s thought (Evidence For), or does it help disprove her thought (Evidence Against)?',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 55,
                name: "Evidence For: This statement supports Lisa's automatic thought",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 56,
                name: "Evidence Against: This statement disproves Lisa's automatic thought",
                correct: true,
                selected_text:
                  "Correct! Lisa is getting some work done, so this would help disprove her thought that she can't handle things anymore.",
                unselected_text:
                  "Lisa is getting some work done, so this would help disprove her thought that she can't handle things anymore.",
              },
            ],
          },
          {
            quiz_id: 17,
            title: 'Examine the Evidence for: "I can\'t handle things anymore.',
            subtitle:
              'Does this statement "Others follow my directions" support Lisa\'s thought (Evidence For), or does it help disprove her thought (Evidence Against)?',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 57,
                name: "Evidence For: This statement supports Lisa's automatic thought",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 58,
                name: "Evidence Against: This statement disproves Lisa's automatic thought",
                correct: true,
                selected_text: "Right! This statement disproves Lisa's automatic thought.",
                unselected_text: "This statement disproves Lisa's automatic thought.",
              },
            ],
          },
        ],
      },
      {
        title: "Examining the Evidence for Lisa's Thought",
        unitNo: '4',
        subtitle: '',
        content: [
          {
            type: 'text',
            html: `
						<p>Below you’ll see a sample exercise of Examining the Evidence. Later, you’ll have an opportunity to examine the evidence for your own thoughts.</p>
						`,
          },
          {
            type: 'image',
            images: {
              src: '/gda/images/lesson-4-unit-4-1.png',
              alt: 'lesson-4-unit-4-1 Image',
            },
          },
          {
            type: 'image',
            images: {
              src: '/gda/images/lesson-4-unit-4-2.png',
              alt: 'lesson-4-unit-4-2 Image',
            },
          },
          {
            type: 'title',
            html: `
						<h3>Moving Ahead</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Let’s continue examining the evidence for Lisa’s automatic thought.</p>
						`,
          },
        ],
        quizzes: [
          {
            quiz_id: 18,
            title: 'Examine the Evidence for: "I can\'t handle things anymore.',
            subtitle:
              'Does this statement "I\'m having trouble making decisions" support Lisa\'s thought (Evidence For), or does it help disprove her thought (Evidence Against)?',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 59,
                name: "Evidence For: This statement supports Lisa's automatic thought",
                correct: true,
                selected_text:
                  "You're right. If Lisa was having trouble making decisions it might give some support to the thought \"I can't handle things anymore.",
                unselected_text:
                  'If Lisa was having trouble making decisions it might give some support to the thought "I can\'t handle things anymore.',
              },
              {
                quiz_option_id: 60,
                name: "Evidence Against: This statement disproves Lisa's automatic thought",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 19,
            title: 'Examine the Evidence for: "I can\'t handle things anymore.',
            subtitle:
              'Does this statement "I have lots of positive work experiences" support Lisa\'s thought (Evidence For), or does it help disprove her thought (Evidence Against)?',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 61,
                name: "Evidence For: This statement supports Lisa's automatic thought",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 62,
                name: "Evidence Against: This statement disproves Lisa's automatic thought",
                correct: true,
                selected_text:
                  "You got it. Lisa's positive experiences are evidence against her believing that she can't handle things anymore.",
                unselected_text:
                  "Lisa's positive experiences are evidence against her believing that she can't handle things anymore.",
              },
            ],
          },
          {
            quiz_id: 20,
            title: 'Examine the Evidence for: "I can\'t handle things anymore.',
            subtitle:
              'Does this statement "I still have creative ideas" support Lisa\'s thought (Evidence For), or does it help disprove her thought (Evidence Against)?',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 63,
                name: "Evidence For: This statement supports Lisa's automatic thought",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 64,
                name: "Evidence Against: This statement disproves Lisa's automatic thought",
                correct: true,
                selected_text:
                  "Yes, this is Evidence Against. This statement does not support her belief that she can't handle things anymore.",
                unselected_text:
                  "This is Evidence Against. This statement does not support her belief that she can't handle things anymore.",
              },
            ],
          },
          {
            quiz_id: 24,
            title: 'Examine the Evidence for: "I can\'t handle things anymore.',
            subtitle:
              'Does this statement "I know how to do my job" support Lisa\'s thought (Evidence For), or does it help disprove her thought (Evidence Against)?',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 71,
                name: "Evidence For: This statement supports Lisa's automatic thought",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 72,
                name: "Evidence Against: This statement disproves Lisa's automatic thought",
                correct: true,
                selected_text:
                  "Correct. This statement of confidence disproves Lisa's automatic thought \"I can't handle things anymore.",
                unselected_text:
                  "This statement of confidence disproves Lisa's automatic thought \"I can't handle things anymore.",
              },
            ],
          },
        ],
      },
      {
        title: 'Sample Exercise: Examining the Evidence',
        unitNo: '5',
        subtitle: '',
        content: [
          {
            type: 'title',
            html: `
						<h3>A Completed Exercise</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Take a look at how the evidence for Lisa’s automatic thought is displayed in two columns.</p>
						<p>As you’ll see below, Lisa has found much more evidence disproving her automatic thought than proving it.</p>
						`,
          },
          {
            type: 'image',
            images: {
              src: '/gda/images/lesson-4-unit-5.png',
              alt: 'lesson-4-unit-5 Image',
            },
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Before we go on, we’ll pause to talk about situations where one has to confront serious real-life problems. Lisa’s difficulties are significant, but they aren’t as bad as some people (maybe you) have to face.</p>
						`,
          },
        ],
      },
      {
        title: 'What if the Evidence Supports the Thought?',
        unitNo: '6',
        subtitle: '',
        content: [
          {
            type: 'text',
            html: `
						<p>Sometimes when you examine the evidence you’ll find there is a real chance that upsetting things are actually true. It might be that you actually could lose your job or that your spouse could leave you. Maybe you really do have some personal habits you need to change.</p>
						<p>However, even if you do have these kinds of problems, cognitive therapy self-help methods can still help. Remember, depression and anxiety cause you to ignore your strengths and magnify your weaknesses. Following the principles of cognitive therapy can help you cope with big problems instead of giving up.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Putting Your Skills Into Action</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>You’ve done a fine job with learning how to examine the evidence. A good way to be sure you really understand something is to put it into practice.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>We’ll examine the evidence for some of your automatic thoughts.</p>
						`,
          },
        ],
        practices: [{ practiceId: 5, reviewNo: 1 }],
      },
      {
        title: 'Finding Rational Alternative Thoughts',
        unitNo: '7',
        subtitle: '',
        content: [
          {
            type: 'video',
            videos: {
              1: {
                id: '1540665852001',
                poster: '/gda/content/posters/rushing-l4-u7.jpg',
                src: `${GDA_VIDEOS}1540665852001` + `.mp4`,
              },
              2: {
                id: '1799129518001',
                poster: '/gda/content/posters/wright-l4-u7.jpg',
                src: `${GDA_VIDEOS}1799129518001` + `.mp4`,
              },
            },
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>The next series of questions will help you identify and record some rational alternatives that could help Lisa.</p>
						`,
          },
        ],
        quizzes: [
          {
            quiz_id: 21,
            title: 'Automatic thought: "I can\'t handle things anymore.',
            subtitle:
              'Do you think this alternative thought would be helpful to Lisa? "I can get things accomplished if I keep trying."?',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 65,
                name: "Yes, that's a helpful alternative thought",
                correct: true,
                selected_text:
                  "You're right. This is a more constructive, rational way of thinking about the situation.",
                unselected_text:
                  'This is a more constructive, rational way of thinking about the situation and might make Lisa feel better.',
              },
              {
                quiz_option_id: 66,
                name: "No, that's not a helpful alternative thought",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 22,
            title: 'Automatic thought: "I can\'t handle things anymore.',
            subtitle: 'Do you think this alternative thought would be helpful to Lisa? "I can handle anything."',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 67,
                name: "Yes, that's a helpful alternative thought",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 68,
                name: "No, that's not a helpful alternative thought",
                correct: true,
                selected_text:
                  'Good work. Lisa would just be fooling herself if she put this alternative on her list. None of us are so competent that we can "handle anything." It would be better if Lisa developed an alternative statement that reflects what she actually can do.',
                unselected_text:
                  'Lisa would just be fooling herself if she put this alternative on her list. None of us are so competent that we can "handle anything." It would be better if Lisa developed an alternative statement that reflects what she actually can do.',
              },
            ],
          },
          {
            quiz_id: 23,
            title: 'Automatic thought: "I can\'t handle things anymore.',
            subtitle:
              'Do you think this alternative thought would be helpful to Lisa? "I still know a lot about how to do this job."',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 69,
                name: "Yes, that's a helpful alternative thought",
                correct: true,
                selected_text:
                  "You're on target. Lisa has many job skills that she can use to help cope with the situation.",
                unselected_text: 'Lisa has many job skills that she can use to help cope with the situation.',
              },
              {
                quiz_option_id: 70,
                name: "No, that's not a helpful alternative thought",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 25,
            title: 'Automatic thought: "I can\'t handle things anymore.',
            subtitle:
              'Do you think this alternative thought would be helpful to Lisa? "I can accomplish some tasks successfully."',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 73,
                name: "Yes, that's a helpful alternative thought",
                correct: true,
                selected_text: "That's right. You seem to have a good grasp of the material in this lesson.",
                unselected_text: 'This positive alternative thought will likely help Lisa feel better.',
              },
              {
                quiz_option_id: 74,
                name: "No, that's not a helpful alternative thought",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
        ],
      },
      {
        title: "Lisa's Rational Alternative Thoughts",
        unitNo: '8',
        subtitle: '',
        content: [
          {
            type: 'title',
            html: `
						<h3>Lisa's Completed Exercise</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Lisa’s completed Rational Alternatives exercise is shown below.</p>
						<p>To the right of Lisa’s rational alternative thoughts are numbers representing her “Strength of Belief” in her alternative thoughts.</p>
						<p>You’ll have an opportunity to rate the strength of belief in each of your alternative thoughts when you complete this exercise for yourself later in the lesson.</p>
						`,
          },
          {
            type: 'image',
            images: {
              src: '/gda/images/lesson-4-unit-8.png',
              alt: 'lesson-4-unit-8 Image',
            },
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Let’s look at the positive effects of changing thinking.</p>
						`,
          },
        ],
      },
      {
        title: 'Positive Effects of Changing Thinking',
        unitNo: '9',
        subtitle: '',
        content: [
          {
            type: 'video',
            videos: {
              1: {
                id: '1540693510001',
                poster: '/gda/content/posters/rushing-l4-u9.jpg',
                src: `${GDA_VIDEOS}1540693510001` + `.mp4`,
              },
              2: {
                id: '1799137377001',
                poster: '/gda/content/posters/wright-l4-u9.jpg',
                src: `${GDA_VIDEOS}1799137377001` + `.mp4`,
              },
            },
          },
          {
            type: 'title',
            html: `
						<h3>Next up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Let’s get some practical suggestions for how to best develop rational ways of thinking.</p>
						`,
          },
        ],
      },
      {
        title: 'Tips for Developing Rational Alternatives',
        unitNo: '10',
        subtitle: '',
        content: [
          {
            type: 'video',
            videos: {
              1: {
                id: '1540665850001',
                poster: '/gda/content/posters/rushing-l4-u10.jpg',
                src: `${GDA_VIDEOS}1540665850001` + `.mp4`,
              },
              2: {
                id: '1799125090001',
                poster: '/gda/content/posters/wright-l4-u10.jpg',
                src: `${GDA_VIDEOS}1799125090001` + `.mp4`,
              },
            },
          },

          {
            type: 'title',
            html: `
						<h3>Techniques for Changing Your Thinking</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Before you start writing out rational alternatives to your own automatic thoughts, it could help to take time to learn more about ways to develop a realistic and effective thinking style.</p>
						<p>The tips on the following page are also included in the Practice section so you can review them later.</p>
						`,
          },
        ],
      },
      {
        title: 'Suggestions for Finding Rational Alternatives',
        unitNo: '11',
        subtitle: '',
        content: [
          {
            type: 'title',
            html: `
						<h3>Imagine How You Would Think if You Weren't Depressed</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Because depression usually puts a negatively biased filter on thinking, it can help to think back to the times before you became depressed. Or, you can try to remember intervals where depression went away or was not causing much of a problem. Using this perspective of a person who isn’t depressed, what rational alternatives come to mind?</p>
						<p>A good strategy is to think of times in your life when positive things were happening. If you can let the positive memories flow through you, at least temporarily, you may be able to see alternatives that will help you change your automatic thoughts.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Get an Outsider's Perspective</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Another great way to broaden your perspective is to think about what a positive, but objective, person might say about you. Imagine that you had a personal coach who would “tell it like it is” but would always be looking for rational alternatives to negative automatic thoughts. What would your coach be telling you?</p>
						<p>You could also imagine that you had a scientist or a detective working with you to look for balanced and accurate alternatives to automatic thoughts. This person would be very objective in looking for the “evidence.” What evidence would this person find that could support some helpful alternatives to replace troublesome automatic thoughts?</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Brainstorm</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>When you try to generate alternatives, do you ever fall into the trap of thinking “Yes, but…?” One of the pitfalls in working to develop a healthier thinking style is that good ideas can get rejected immediately. Depression and anxiety can lead to a sense that change will be extremely difficult or even impossible. Thus, alternatives that may have some merit are minimized or quickly discarded. Brainstorming can be a helpful way to break through this barrier</p>
						<p>So, spend some time brainstorming for alternatives to negative automatic thoughts. Just write down any idea that comes to mind. Temporarily suspend the “but” from your “Yes, but…” statements. After you explore lots of possibilities, you can try to settle on some alternatives that you believe are accurate and will help you overcome depression and anxiety.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Listen to Positive People in Your Life</h3>				
						`,
          },
          {
            type: 'text',
            html: `
						<p>People who suffer from depression and related problems often turn inward and listen primarily, or sometimes completely, to their negative self-talk in making judgments about themselves. They may minimize or downplay supportive comments from people who care about them. Or, they may be hesitant to ask for feedback or constructive suggestions.</p>
						<p>Of course, there is the possibility that a person you ask may make critical or unhelpful comments. However, there may be opportunities in your life for asking positive, caring people to help you see your situation in accurate and affirming ways.</p>
						<p>In the first scene in this computer program, Abby tried to help Lisa see that her situation wasn’t as negative as Lisa painted it. However, Lisa’s depression made it hard for her to listen to Abby and accept a more realistic viewpoint. Do you have positive people in your life who could help you see healthy alternatives to negative automatic thoughts? </p>
						`,
          },
        ],
      },
      {
        title: 'Putting Thought Changing Skills into Action',
        unitNo: '12',
        subtitle: '',
        content: [
          {
            type: 'title',
            html: `
						<h3>Alternative Thoughts Can Be Empowering Thoughts</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>When you replace negatively distorted automatic thoughts with rational thoughts, it can often empower you to overcome difficulties and gain the strength to solve problems. So, try to use the exercises in Good Days Ahead to build your skills in thinking as rationally as possible.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Let’s move ahead now to write out rational alternatives for some of your own automatic thoughts.</p>
						`,
          },
        ],
        practices: [{ practiceId: 6, reviewNo: 1 }],
      },
      {
        title: 'Building Effective TCRs',
        unitNo: '13',
        subtitle: '',
        // photos here
        content: [
          {
            type: 'title',
            html: `
						<h3>We've Accomplished A Lot!</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>You’re coming along nicely with writing rational alternatives to your automatic thoughts.</p>
						<p>In lessons 2, 3, and 4 we have learned about ways to Identify » Label » and Modify Automatic Thoughts.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Combine These Skills in One Thought Change Record</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Soon we will have an opportunity to practice using the full TCR where you will find all of these steps combined into one exercise. It’s a highly effective method for transforming negative thinking and lifting your mood.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>We’ll take a look at a scene of Lisa and her husband Ben. Then we’ll build a full TCR to help Lisa manage the problems she’s facing.</p>
						`,
          },
        ],
      },
      {
        title: 'Learning from Lisa and Ben',
        unitNo: '14',
        subtitle: '',
        content: [
          {
            type: 'video',
            videos: {
              1: {
                id: '1540665865001',
                poster: '/gda/content/posters/rushing-l4-u14.jpg',
                src: `${GDA_VIDEOS}1540665865001` + `.mp4`,
              },
              2: {
                id: '1799137376001',
                poster: '/gda/content/posters/wright-l4-u14.jpg',
                src: `${GDA_VIDEOS}1799137376001` + `.mp4`,
              },
            },
          },
          {
            type: 'text',
            html: `
						<p>In this scene, you can see Lisa having an argument with her husband, Ben. And you can spot automatic thoughts that are giving her trouble. Later you can use a TCR to help Lisa cope with the situation.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>In order to help Lisa manage this situation better, you’ll need to: Identify » Label » Modify her automatic thoughts.</p>
						<p>But first, you’ll need some background information about Lisa and Ben.</p>
						`,
          },
        ],
      },
      {
        title: 'Lisa and Ben',
        unitNo: '15',
        subtitle: '',
        content: [
          {
            type: 'title',
            html: `
						<h3>Background Information</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Lisa and Ben don’t have an ideal marriage, but there are many positive features of their relationship. They’ve been married for 12 years and have two school-age children.</p>
						<p>Lisa and Ben both get along well with the children. There don’t seem to be many conflicts in this area of family life. Lisa and Ben also have lots of shared interests like reading, going to the movies, and taking long walks.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>A Good and Committed Relationship</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>For the most part, their intimate relations have been good. However, sometimes tiredness, irritability, and anger have interfered with their ability to be close.</p>
						<p>Despite the pressures of careers and family, they have remained committed to one another and have tried hard to make their marriage work.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Ben Can Be Insensitive and Demanding</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Ben does tend to be short-tempered at times. He can be insensitive to Lisa’s needs, particularly when he is feeling stress from work.</p>
						<p>Ben also is very demanding of himself and others. He pushes himself to be the best that he can be. His critical comments can really knock down Lisa’s self-esteem.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Lisa's Growing Insecurity</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Lisa has been growing more insecure about her marriage. She’s been getting so down on herself that she’s started to take all of Ben’s criticisms completely “to heart.”</p>
						<p>Although Ben could be more understanding, he’s basically a supportive husband and has remained faithful to her.</p>
						`,
          },
        ],
      },
      {
        title: 'Lisa and Ben: Additional Information',
        unitNo: '16',
        subtitle: '',
        content: [
          {
            type: 'title',
            html: `
						<h3>Cognitive Therapy for Communication Problems</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>It would probably help for Lisa and Ben to see a cognitive therapist together. And it would be a good idea for Ben to join his wife in learning the self-help methods of cognitive therapy. They could both find out how to identify distortions in the way that they communicate.</p>
						<p>You’ve probably already guessed that Ben has his own automatic thoughts and cognitive errors.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Ben's Cognitive Errors</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>When Lisa gets depressed, he misinterprets her behavior (such as tiredness and lack of interest) as meaning that she doesn’t care or that she’s not supporting his career.</p>
						<p>After he jumps to these conclusions, he gets angry and is more likely to say things that make Lisa feel worse.</p>
						<p>Even if marital cognitive therapy can’t be arranged, you can still make positive changes by focusing on your own cognitions, feelings, and behavior.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Let’s try to help Lisa recognize the distorted thoughts that are putting a strain on her marriage and are worsening her depression.</p>
						`,
          },
        ],
        quizzes: [
          {
            quiz_id: 26,
            title: "The event that stimulated Lisa's automatic thoughts in this scene was:",
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 75,
                name: 'Being too busy.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 76,
                name: 'Preparing for a party.',
                correct: true,
                selected_text: "You got it. Lisa and Ben were preparing for Ben's office party.",
                unselected_text: 'Lisa was preparing for a party.',
              },
              {
                quiz_option_id: 77,
                name: 'Ben has another woman.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 78,
                name: 'Low self-esteem.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
        ],
      },
      {
        title: "Lisa's TCR: Event",
        unitNo: '17',
        subtitle: '',
        content: [
          {
            type: 'text',
            html: `
						<p>Great. We’ve identified the event that stimulated Lisa’s automatic thoughts.</p>
						`,
          },
          {
            type: 'image',
            images: {
              src: '/gda/images/lesson-4-unit-17.png',
              alt: 'lesson-4-unit-17 Image',
            },
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Let’s continue filling out the TCR.</p>
						`,
          },
        ],
        quizzes: [
          {
            quiz_id: 27,
            title: "Lisa's automatic thoughts in this situation were:",
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 79,
                name: "This dress is too tight... I'd better change quickly so we can make this party.",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 80,
                name: "Ben's always pressuring me... I wish he'd relax. These social things aren't as important as he thinks.",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 81,
                name: "I can't do anything right. All I ever do is drag him down and make things worse.",
                correct: true,
                selected_text: "Correct! You've identified Lisa's automatic thought.",
                unselected_text: "This was Lisa's automatic thought in this scenario.",
              },
              {
                quiz_option_id: 82,
                name: "Another dumb party. I'd rather just sit at home and watch a movie... I bet Ben feels the same way.",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
        ],
      },
      {
        title: "Lisa's TCR: Automatic Thoughts",
        unitNo: '18',
        subtitle: '',
        content: [
          {
            type: 'text',
            html: `
						<p>We’re building Lisa’s TCR by adding automatic thoughts.</p>
						`,
          },
          {
            type: 'image',
            images: {
              src: '/gda/images/lesson-4-unit-18.png',
              alt: 'lesson-4-unit-18 Image',
            },
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Next, let’s evaluate the strength of Lisa’s automatic thoughts.</p>
						`,
          },
        ],
      },
      {
        title: "Lisa's TCR: Thought Strength",
        unitNo: '19',
        subtitle: '',
        content: [
          {
            type: 'text',
            html: `
						<p>Lisa’s rating of the strength of her thoughts is shown on this TCR.</p>
						`,
          },
          {
            type: 'image',
            images: {
              src: '/gda/images/lesson-4-unit-19.png',
              alt: 'lesson-4-unit-19 Image',
            },
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Let’s identify Lisa’s emotions as she prepared for Ben’s office party.</p>
						`,
          },
        ],
        quizzes: [
          {
            quiz_id: 42,
            title: "Lisa's emotional and/or physical response can best be described as:",
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 144,
                name: 'Angry, calm',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 145,
                name: 'Sad, anxious',
                correct: true,
                selected_text: 'You got it. Lisa was sad and anxious.',
                unselected_text: 'Lisa was sad and anxious.',
              },
              {
                quiz_option_id: 146,
                name: 'Happy, excited',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 147,
                name: 'Angry, anxious',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
        ],
      },
      {
        title: "Lisa's TCR: Emotions",
        unitNo: '20',
        subtitle: '',
        content: [
          {
            type: 'text',
            html: `
						<p>Good. You’ve identified Lisa’s automatic thoughts and recognized how negative automatic thoughts stir up painful emotions.</p>
						`,
          },
          {
            type: 'image',
            images: {
              src: '/gda/images/lesson-4-unit-20.png',
              alt: 'lesson-4-unit-20 Image',
            },
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Lisa is having some troubling automatic thoughts. Let’s see if we can help her out by labeling her cognitive errors.</p>
						<p>Remember that it’s not that important that you get the answers “just right.”.</p>
						`,
          },
        ],
        quizzes: [
          {
            quiz_id: 43,
            title:
              'Select the cognitive errors that you think are involved in the following automatic thought: "I can\'t do anything right.',
            instruction: 'Select all that apply.',
            options: [
              {
                quiz_option_id: 148,
                name: 'Ignoring the Evidence',
                correct: true,
                selected_text:
                  "You're right! This is a classic case of Ignoring the Evidence. The background information indicates that Lisa has made many solid contributions to her marriage.",
                unselected_text:
                  'This is a classic case of Ignoring the Evidence. The background information indicates that Lisa has made many solid contributions to her marriage.',
              },
              {
                quiz_option_id: 149,
                name: 'Jumping to Conclusions',
                correct: false,
                selected_text: 'You got it. Lisa was sad and anxious.',
                unselected_text: 'Lisa was sad and anxious.',
              },
              {
                quiz_option_id: 150,
                name: 'Overgeneralizing',
                correct: true,
                selected_text:
                  'Lisa seems to be Overgeneralizing because she is telling herself she "can\'t do anything right.',
                unselected_text:
                  'Lisa seems to be Overgeneralizing because she is telling herself she "can\'t do anything right.',
              },
              {
                quiz_option_id: 151,
                name: 'Magnifying or Minimizing',
                correct: true,
                selected_text: "Correct! Lisa seems to be Magnifying because she's exaggerating her difficulties.",
                unselected_text: "Lisa seems to be Magnifying because she's exaggerating her difficulties.",
              },
              {
                quiz_option_id: 152,
                name: 'Personalizing',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 153,
                name: 'All or None Thinking',
                correct: true,
                selected_text:
                  'Lisa does appear to be using All or None Thinking with the thought: "I can\'t do anything right." The word "anything" has an absolute, All or None quality.',
                unselected_text:
                  'Lisa does appear to be using All or None Thinking with the thought: "I can\'t do anything right." The word "anything" has an absolute, All or None quality.',
              },
            ],
          },
          {
            quiz_id: 44,
            title:
              'Select the cognitive errors that you think are involved in the following automatic thought: "All I ever do is drag him down and make things worse.',
            instruction: 'Select all that apply.',
            options: [
              {
                quiz_option_id: 154,
                name: 'Ignoring the Evidence',
                correct: true,
                selected_text:
                  'Lisa is ignoring the evidence that she is making many positive contributions in her relationship with Ben.',
                unselected_text:
                  'Lisa is ignoring the evidence that she is making many positive contributions in her relationship with Ben.',
              },
              {
                quiz_option_id: 155,
                name: 'Jumping to Conclusions',
                correct: false,
                selected_text:
                  'There are many cognitive errors in this automatic thought, but jumping to conclusions doesn’t appear to be one of them.',
                unselected_text: '',
              },
              {
                quiz_option_id: 156,
                name: 'Overgeneralizing',
                correct: true,
                selected_text:
                  'Instead of focusing on the specific problem of not feeling like going to the party, Lisa has fallen into the trap of overgeneralized thinking. It would help if she could target the specific problem and then work on a solution.',
                unselected_text:
                  'Instead of focusing on the specific problem of not feeling like going to the party, Lisa has fallen into the trap of overgeneralized thinking. It would help if she could target the specific problem and then work on a solution.',
              },
              {
                quiz_option_id: 157,
                name: 'Magnifying or Minimizing',
                correct: true,
                selected_text:
                  'Lisa is magnifying the problem when she says that all she ever does is drag Ben down and make things worse.',
                unselected_text:
                  'Lisa is magnifying the problem when she says that all she ever does is drag Ben down and make things worse.',
              },
              {
                quiz_option_id: 158,
                name: 'Personalizing',
                correct: true,
                selected_text:
                  'Lisa appears to be personalizing because she is taking too much of the blame for the problem. At first, Ben is irritable and pushy about the party. And he isn’t sensitive to Lisa’s feelings.',
                unselected_text:
                  'Lisa appears to be personalizing because she is taking too much of the blame for the problem. At first, Ben is irritable and pushy about the party. And he isn’t sensitive to Lisa’s feelings.',
              },
              {
                quiz_option_id: 159,
                name: 'All or None Thinking',
                correct: true,
                selected_text:
                  'When Lisa says that all she ever does is drag Ben down, she’s a victim of absolute thinking – a style of thinking that stirs up very intense emotions and rarely helps her solve problems.',
                unselected_text:
                  'When Lisa says that all she ever does is drag Ben down, she’s a victim of absolute thinking – a style of thinking that stirs up very intense emotions and rarely helps her solve problems.',
              },
            ],
          },
        ],
      },
      {
        title: "Lisa's TCR: Cognitive Errors",
        unitNo: '21',
        subtitle: '',
        content: [
          {
            type: 'text',
            html: `
						<p>Great. We’ve helped Lisa label her automatic thoughts with cognitive errors. This is how Lisa’s TCR would appear.</p>
						`,
          },
          {
            type: 'image',
            images: {
              src: '/gda/images/lesson-4-unit-21.png',
              alt: 'lesson-4-unit-21 Image',
            },
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>We’ll move on to find some rational alternatives to Lisa’s negative automatic thoughts.</p>
						`,
          },
        ],
        quizzes: [
          {
            quiz_id: 45,
            title:
              'Finding Rational Alternatives	Which of the following thoughts is NOT a rational alternative for Lisa\'s automatic thought: "I can\'t do anything right"?',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 160,
                name: '"I do many things right."',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 161,
                name: "I've supported Ben a lot.",
                correct: false,
                selected_text: 'You got it. Lisa was sad and anxious.',
                unselected_text: 'Lisa was sad and anxious.',
              },
              {
                quiz_option_id: 162,
                name: '"I do everything right."',
                correct: true,
                selected_text:
                  "Correct! Although this thought sounds positive, it's a form of extreme thinking that won't be helpful to Lisa. No one can do everything right.",
                unselected_text:
                  "Although this thought sounds positive, it's a form of extreme thinking that won't be helpful to Lisa. No one can do everything right.",
              },
              {
                quiz_option_id: 163,
                name: '"I\'m a good mother."',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 164,
                name: '"Ben needs to relax and not jump on me so much."',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 46,
            title:
              'Finding Rational Alternatives	Which of the following thoughts is NOT a rational alternative for Lisa\'s automatic thought: "All I ever do is drag him down and make things worse."?',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 165,
                name: '"My depression is a stress on everybody, but it’s not my fault that I’m depressed."',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 166,
                name: '"I haven\'t been much of a wife to him."',
                correct: false,
                selected_text:
                  "You got it! This is not a rational alternative that would benefit Lisa's thinking and well-being.",
                unselected_text:
                  "This is not a rational alternative that would benefit Lisa's thinking and well-being.",
              },
              {
                quiz_option_id: 167,
                name: '"I’m trying to do my share. It’s the depression that’s dragging me down."',
                correct: true,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 168,
                name: '"I’ve given Ben lots of support through the years."',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
        ],
      },
      {
        title: "Lisa's TCR: Rational Alternatives",
        unitNo: '22',
        subtitle: '',
        content: [
          {
            type: 'text',
            html: `
						<p>Let’s take a look at the rational alternatives on Lisa’s TCR.</p>
						`,
          },
          {
            type: 'image',
            images: {
              src: '/gda/images/lesson-4-unit-22.png',
              alt: 'lesson-4-unit-22 Image',
            },
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>We’ll work on the final step in completing a TCR – recording the Outcome of changing automatic thoughts.</p>
						`,
          },
        ],
      },
      {
        title: 'Recording the Outcome of a TCR',
        unitNo: '23',
        subtitle: '',
        content: [
          {
            type: 'title',
            html: `
						<h3>Rate Changes in Automatic Thoughts and Emotions</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>In the first part of the Outcome section, you’ll rate the strength of your belief in your automatic thoughts and the intensity of your emotions again to see how much progress has been made. Usually, there is a reduction in painful emotions if there have been significant changes in automatic thoughts.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Record Changes in Behavior</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Are you coping better? Have you thought of ideas for positive steps to take? If so, record the changes in the second part of the Outcome section.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>We’ll take a look at the progress Lisa noted in the Outcome section of her TCR.</p>
						`,
          },
        ],
      },
      {
        title: "Lisa's TCR: Outcome",
        unitNo: '24',
        subtitle: '',
        content: [
          {
            type: 'text',
            html: `
						<p>Lisa is definitely making progress. Her mood has improved, and she has thought of a possible solution for the problem of attending the party with Ben.</p>
						`,
          },
          {
            type: 'image',
            images: {
              src: '/gda/images/lesson-4-unit-24-1.png',
              alt: 'lesson-4-unit-24-1 Image',
            },
          },
          {
            type: 'image',
            images: {
              src: '/gda/images/lesson-4-unit-24-2.png',
              alt: 'lesson-4-unit-24-2 Image',
            },
          },

          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Let’s take a look at Lisa’s TCR Summary screen to get a big picture of the changes in her thinking, emotions, and behavior.</p>
						`,
          },
        ],
      },
      {
        title: "Lisa's TCR: Summary",
        unitNo: '25',
        subtitle: '',
        content: [
          {
            type: 'text',
            html: `
						<p>The Summary screen of the TCR shows all of the changes that have been made.</p>
						`,
          },
          {
            type: 'image',
            images: {
              src: '/gda/images/lesson-4-unit-25.png',
              alt: 'lesson-4-unit-25 Image',
            },
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>We’ll see a video of Lisa and Ben that demonstrates the benefits of changing automatic thoughts.</p>
						`,
          },
        ],
      },
      {
        title: 'A Better Outcome',
        unitNo: '26',
        subtitle: '',
        content: [
          {
            type: 'video',
            videos: {
              1: {
                id: '1540665850001',
                poster: '/gda/content/posters/rushing-l4-u26.jpg',
                src: `${GDA_VIDEOS}1540665863001` + `.mp4`,
              },
              2: {
                id: '1540665858001',
                poster: '/gda/content/posters/wright-l4-u26.jpg',
                src: `${GDA_VIDEOS}1540665863001` + `.mp4`,
              },
            },
          },
          {
            type: 'title',
            html: `
						<h3>Benefits of the TCR</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Lisa appeared to gain strength by going through the steps of identifying, labeling, and modifying automatic thoughts on a TCR.</p>
						<p>Are you ready to put this valuable tool to work in your own life?</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>We’re nearing the end of this lesson on changing automatic thoughts. So let’s wrap up with a quick review.</p>
						`,
          },
        ],
        quizzes: [
          {
            quiz_id: 38,
            title: 'Select the least effective method to modify automatic thoughts:',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 124,
                name: 'Examining the Evidence',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 125,
                name: 'Identifying Automatic Thoughts',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 126,
                name: 'Personalizing',
                correct: true,
                selected_text:
                  'Correct! Personalizing is a cognitive error that leads to distorted thinking. This approach is not an effective way to modify automatic thoughts.',
                unselected_text:
                  'Personalizing is a cognitive error that leads to distorted thinking. This approach is not an effective way to modify automatic thoughts.',
              },
              {
                quiz_option_id: 127,
                name: 'Listing Rational Alternatives',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 128,
                name: 'Using a Thought Change Record',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 39,
            title: 'Select the One Best Answer',
            subtitle:
              'Sam was reeling from the effects of a difficult day. He had been working as hard as he could, but he missed a deadline. One of his associates on the project didn\'t say anything to him, but appeared to be very irritated. Sam was really getting down on himself and started to have automatic thoughts such as "I blew it again." A particularly effective alternative for this automatic thought might be:',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 129,
                name: "I didn't do anything to deserve criticism.",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 130,
                name: 'He gets upset way too easily. Everybody misses deadlines.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 131,
                name: "I missed the deadline, but I can learn from the experience. I'll need to start earlier next time. Overall, I'm doing well with the job. Keep your head up and get the work done.",
                correct: true,
                selected_text:
                  'Good Job! You probably recognized that some of the other alternatives seem to create problems of their own. For example, if you thought "He gets upset too easily...Everybody misses deadlines," you may be trying to ignore the problem or place too much blame on somebody else. If you actually did miss a deadline, you probably need to pay attention to the situation and deal with it directly.',
                unselected_text:
                  'This choice was the most effective alternative thought. Some of the other alternatives seem to create problems of their own. For example, if you thought "He gets upset too easily...Everybody misses deadlines," you may be trying to ignore the problem or place too much blame on somebody else. If you actually did miss a deadline, you probably need to pay attention to the situation and deal with it directly.',
              },
              {
                quiz_option_id: 132,
                name: "I'm mostly doing OK, so I just need to let the problem pass and not worry about it.",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 133,
                name: "I almost got it finished. There is no need for anyone to get upset. I'll get it done soon. Why does anyone need to make such a big deal out of these things?",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 40,
            title: 'The Thought Change Record (TCR) can help do all but which of the following things?',
            subtitle: 'The Thought Change Record (TCR) can help do all but which of the following things?',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 134,
                name: 'Organize your day in an efficient manner',
                correct: true,
                selected_text:
                  "You're right. The TCR can do lots of things, but it isn't designed to help you organize your day. The TCR can help you tune in to automatic thoughts. If you can start recognizing automatic thoughts and spot cognitive errors, you can learn to cope better with situations that stir up painful emotions. And, you can rate your emotions and see them change in a positive direction. In the next lesson, we'll show you effective tools for organizing your day in a way that can help lift your mood and give you more self-confidence.",
                unselected_text:
                  "The TCR can do lots of things, but it isn't designed to help you organize your day. The TCR can help you tune in to automatic thoughts. If you can start recognizing automatic thoughts and spot cognitive errors, you can learn to cope better with situations that stir up painful emotions. And, you can rate your emotions and see them change in a positive direction. In the next lesson, we'll show you effective tools for organizing your day in a way that can help lift your mood and give you more self-confidence.",
              },
              {
                quiz_option_id: 135,
                name: 'Tune in to automatic thoughts',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 136,
                name: 'Learn to cope better with upsetting situations',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 137,
                name: 'Rate the strength of emotions and see them change',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 138,
                name: 'Spot cognitive errors',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 41,
            title: "Liz's TCR",
            subtitle:
              "Liz completed a Thought Change Record but didn't notice any significant change in the intensity of her upsetting emotions. Her TCR focused on her reactions to a call from her boyfriend. After he told her he would be coming home late from work again, she had automatic thoughts such as \"He's too busy for me - I don't have any place in his life - He doesn't really care about me - He just cares about his job and hanging out with his friends watching sports on TV - I'll never be happy with a man.\" In the rational thoughts column she wrote \"It's the truth - this relationship is going nowhere.\" If you were coaching Liz on how to work on rational alternatives that could help her cope with the situation and feel less depressed, which of the following strategies do you think might work best?",
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 139,
                name: 'Review her automatic thoughts to see if they are completely accurate. Check to see if any cognitive errors could be making her feel worse than she needs to feel.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 140,
                name: 'Examine the evidence for the automatic thoughts and check for cognitive errors. Try to find the truth in her assessment of the situation with her boyfriend. Help her think through her options for dealing with the relationship problem.',
                correct: true,
                unselected_text:
                  'This was the the answer that we think gives Liz the best chance of finding rational alternatives for managing the problem with her boyfriend.',
                selected_text:
                  'Good work. You were able to see that several of the responses had some positive features but didn\'t do the best job of helping Liz sort out the reality of her dilemma and think through ways to manage the problem with her boyfriend. Because there may have been some truth in her conclusion about the relationship "going nowhere," she needed to check the evidence closely and then consider options for managing this problem.',
              },
              {
                quiz_option_id: 141,
                name: 'Tell her to get out of the relationship and to not waste time with a guy like this.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 142,
                name: "Because Liz wasn't able to see her extreme thinking, let her know that she is magnifying the problem out of proportion.",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 143,
                name: "Step back and try another Thought Change Record. Maybe she'll get some help from this method the next time.",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
        ],
      },
      {
        title: "Reviewing What You've Learned",
        unitNo: '27',
        subtitle: '',
        content: [
          {
            type: 'text',
            html: `
						<p>It’s time for you to try completing a full TCR. Select a situation that has caused some distress. Then use the TCR to help you change your automatic thoughts and cope better with the situation.</p>
						`,
          },
        ],
        practices: [{ practiceId: 7, reviewNo: 1 }],
      },
      {
        title: 'Lesson 4 Summary',
        unitNo: '28',
        subtitle: '',
        content: [
          {
            type: 'title',
            html: `
						<h3>What You've Learned About Modifying Automatic Thoughts</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>In this lesson, you’ve learned how to act like an unbiased judge by examining the evidence for your automatic thoughts. And you’ve also learned to develop rational alternatives that will help you move away from the dysfunctional style of thinking that is common in depression and anxiety.</p>
						<p>We hope that using these effective methods will make a big difference in your life.</p>
						`,
          },
          {
            type: 'text',
            html: `
						<div class="takeaways">
						<h3>Summary Points</h3>
						<bl>
						<li>When you examine the evidence, you look very objectively at the facts that either support or fail to support your automatic thoughts.</li>
						<li>Evidence that seems at first to support negative automatic thoughts can often prove to be loaded with errors in thinking. TCRs are one of the best ways to develop more rational thoughts.</li>
						<li>You can also try to open your mind to the possibilities, think like a good coach or other helpful advisor, do some brainstorming, or follow the other tips that were provided in this lesson.</li>
						</bl>
						</div>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Let’s review the list of recommended exercises for Lesson 4. Try to take advantage of the opportunity to practice these skills while they are fresh in your mind.</p>
						`,
          },
        ],
      },
      {
        title: 'Recommended Exercises for Lesson 4',
        unitNo: '29',
        subtitle: '',
        content: [
          {
            type: 'title',
            html: `
						<h3>To Be Really Effective</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Most people need regular practice in changing automatic thoughts to get the most from cognitive therapy methods to control depression and anxiety.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Recommended Exercises</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<ol>
						<li>Read the Tips for Examining the Evidence.</li>
						<li>Use the Examining the Evidence exercise to evaluate at least one of your troubling automatic thoughts.</li>
						<li>Work with the Rational Alternatives exercise to develop new thoughts that are more helpful and constructive alternatives to your negative automatic thoughts.</li>
						<li>Bring it all together by completing at least one full TCR.</li>
						<li>Review Practical Suggestions for Developing Rational Alternatives.</li>
						</ol>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Now let’s return to the Homepage so you can decide what to do next.</p>
						`,
          },
        ],
      },
    ],
    practices: [
      { practiceId: 29, reviewNo: -1 },
      { practiceId: 5, reviewNo: 1 },
      { practiceId: 6, reviewNo: 1 },
      { practiceId: 7, reviewNo: 1 },
      { practiceId: 22, reviewNo: -1 },
    ],
  },

  {
    title: 'Taking Action',
    hero_url: '/gda/heros/hero5.jpg',
    // hero_url: "https://empower-content-resources.s3.amazonaws.com/uploads/content_resource/file/132/hero5.jpg",
    lessonNo: '5',
    takeAways: [
      'How to build your energy and interest in life.',
      'How to increase your sense of pleasure in your daily activities.',
      'How to use an Activity Schedule to have more productive and enjoyable days.',
    ],
    units: [
      {
        title: 'Learning to Take Action',
        unitNo: '1',
        subtitle: '',
        content: [
          {
            type: 'video',
            videos: {
              1: {
                id: '1540644799001',
                poster: '/gda/content/posters/rushing-l5-u1.jpg',
                src: `${GDA_VIDEOS}1540644799001` + `.mp4`,
              },
              2: {
                id: '1824567379001',
                poster: '/gda/content/posters/wright-l5-u1.jpg',
                src: `${GDA_VIDEOS}1824567379001` + `.mp4`,
              },
            },
          },
          {
            type: 'title',
            html: `
						<h3>The Link Between Thoughts and Behavior</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Our <strong>thinking</strong> influences our <strong>behavior</strong>, and our <strong>behavior</strong> influences our <strong>thinking</strong>.</p>
						<p>Change can occur by modifying either how we think or how we act.</p>
					`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Let’s take a look at how Lisa is doing before she starts to monitor and change negative behavior.</p>
						`,
          },
        ],
      },
      {
        title: "Abby's Visit",
        unitNo: '2',
        subtitle: '',
        content: [
          {
            type: 'video',
            videos: {
              1: {
                id: '1540693549001',
                poster: '/gda/content/posters/rushing-l5-u2.jpg',
                src: `${GDA_VIDEOS}1540693549001` + `.mp4`,
              },
              2: {
                id: '1540693549001',
                poster: '/gda/content/posters/wright-l5-u2.jpg',
                src: `${GDA_VIDEOS}1540693549001` + `.mp4`,
              },
            },
          },
          {
            type: 'title',
            html: `
						<h3>Starting Somewhere</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Abby seems to be right. Lisa needs to start somewhere.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Three Steps for Changing Behavior</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<ol>
						<li>Monitor</li>
						<li>Plan</li>
						<li>Act</li>
						</ol>
						<p>The first step is to begin to monitor behavior.  There are a variety of methods for monitoring actions or activities. One of the most useful ways is an Activity Schedule.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>We’ll take a look at an Activity Schedule and learn how to use it.</p>
						`,
          },
        ],
      },
      {
        title: 'Getting Familiar with the Activity Schedule',
        unitNo: '3',
        subtitle: '',
        content: [
          {
            type: 'title',
            html: `
						<h3>An Activity Schedule can help you:</h3>	
						`,
          },
          {
            type: 'text',
            html: `
						<bl>
						<li>observe how you spend your day, and</li>
						<li>gain insight on your behavior.</li>
						</bl>
						<p>You’ll start with listing and rating your morning activities.  Then you’ll move on to your afternoon and evening hours.</p>
						`,
          },
          {
            type: 'image',
            images: {
              src: '/gda/images/lesson-5-unit-3.png',
              alt: 'lesson-5-unit-3 Image',
            },
          },
          {
            type: 'title',
            html: `
						<h3>How to Complete an Activity Schedule</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<ol>
						<li><b>Write down your activities</b> for each hour.</li>
						<li>Rate each activity for <b>mastery</b> on a 0-10 scale. Mastery means how well you have done the activity. A zero would mean you were unable to complete the activity with any skill or competence. A ten would mean you completely mastered the activity.</li>
						<li>Rate each activity for the amount of <b>pleasure</b> or enjoyment that it brought you. Use a 0-10 scale. A zero would mean you received no pleasure or enjoyment from the activity. A ten would mean you experienced complete or maximum pleasure.</li>
						<li>Based on the mastery and pleasure ratings, choose whether or not you want to do more, less, or the same of that activity in the future.</li>
						</ol>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Tip!</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Try to fill out the activity schedule as close in time to the events as possible. It can be easy to forget exactly how you felt during specific activities unless you log them shortly after they occurred.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Coming Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>You’ll have a chance to fill out an Activity Schedule of your own in just a bit.</p>
						<p>But first, let’s assume that Lisa has learned how to use an Activity Schedule. </p>
						`,
          },
        ],
      },
      {
        title: 'Starting to Spot Patterns of Behavior',
        unitNo: '4',
        subtitle: '',
        content: [
          {
            type: 'video',
            videos: {
              1: {
                id: '1540693548001',
                poster: '/gda/content/posters/rushing-l5-u4.jpg',
                src: `${GDA_VIDEOS}1540693548001` + `.mp4`,
              },
              2: {
                id: '1540693548001',
                poster: '/gda/content/posters/wright-l5-u4.jpg',
                src: `${GDA_VIDEOS}1540693548001` + `.mp4`,
              },
            },
          },
          {
            type: 'text',
            html: `
						<p>In this scene, Lisa opens up to Abby about using an Activity Schedule.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Summary Points</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>As Lisa notes, the Activity Schedule helps you:</p>
						<ol>
						<li>Recognize activities that you do well, or make you feel better.</li>
						<li>Identify activities that give you problems – ones you’ll need to approach in a different way.</li>
						<li>Recognize the thoughts you have about your daily activities.</li>
						</ol>
						`,
          },
          {
            type: 'image',
            images: {
              src: '/gda/images/lesson-5-unit-4.png',
              alt: 'lesson-5-unit-4 Image',
            },
          },

          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Let’s take a look at Lisa’s completed Activity Schedule.</p>
						`,
          },
        ],
      },
      {
        title: "Lisa's Activity Schedule",
        unitNo: '5',
        subtitle: '',
        content: [
          {
            type: 'text',
            html: `
						<p>Notice how Lisa rated some activities with low numbers on Mastery or Pleasure, while other activities had much higher ratings.</p>
						`,
          },
          {
            type: 'image',
            images: {
              src: '/gda/images/lesson-5-unit-5.png',
              alt: 'lesson-5-unit-5 Image',
            },
          },
          {
            type: 'title',
            html: `
						<h3>Benefits of Using the Activity Schedule</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<bl>
						<li>One of the benefits of activity scheduling is recognizing ways in which you are capable of doing things well or experiencing enjoyment.</li>
						<li>Another benefit is learning how to plan changes that can increase your sense of mastery or pleasure.</li>
						</bl>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Remember there are 3 steps to changing behavior:</p>
						<ol>
						<li>Monitor</li>
						<li>Plan</li>
						<li>Act</li>
						</ol>
						<p>Now let’s move on to the 2nd step – <strong>Plan</strong>.</p>
						`,
          },
        ],
      },
      {
        title: 'Different Ways of Taking Action',
        unitNo: '6',
        subtitle: '',
        content: [
          {
            type: 'video',
            videos: {
              1: {
                id: '1540665885001',
                poster: '/gda/content/posters/rushing-l5-u6.jpg',
                src: `${GDA_VIDEOS}1540665885001` + `.mp4`,
              },
              2: {
                id: '1540665885001',
                poster: '/gda/content/posters/wright-l5-u6.jpg',
                src: `${GDA_VIDEOS}1540665885001` + `.mp4`,
              },
            },
          },
          {
            type: 'title',
            html: `
						<h3>Plan Ways to Take Action Using the Activity Schedule</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<ol>
						<li>Identifying the types of activities you would like to <strong>increase or decrease</strong>.</li>
						<li>Identifying particularly challenging or difficult activities that may require a special <strong>Action Plan</strong>.</li>
						</ol>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Let’s review Lisa’s Activity Schedule and help her develop an Action Plan.</p>
						`,
          },
        ],
      },
      {
        title: 'Activity Schedule Creates Positive Changes',
        unitNo: '7',
        subtitle: '',
        content: [
          {
            type: 'title',
            html: `
						<h3>What Actions Should Lisa Take?</h3>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Activities to Increase</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>An example of the type of activity you might like to increase might be “watch daughter at swim meet.” Lisa rated this activity with an 8 for mastery and a 9 for pleasure. She also could try to arrange her schedule to go out more with her children.</p>
						`,
          },
          {
            type: 'image',
            images: {
              src: '/gda/images/lesson-5-unit-7-1.png',
              alt: 'lesson-5-unit-7-1 Image',
            },
          },
          {
            type: 'title',
            html: `
						<h3>Activities to Decrease</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Lisa rated “sit alone in the kitchen, can’t get going” with 2 for mastery and a 0 for pleasure. This is the type of activity she should try to decrease.</p>
						`,
          },
          {
            type: 'image',
            images: {
              src: '/gda/images/lesson-5-unit-7-2.png',
              alt: 'lesson-5-unit-7-2 Image',
            },
          },
          {
            type: 'title',
            html: `
						<h3>Activities to Stay the Same</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Other activities such as “lunch, do dishes” (rated 7 on mastery and 3 on pleasure) are fairly neutral and may not require any major changes.</p>
						<p>It’s usually recommended that you don’t try to modify everything at once.</p>
						`,
          },
          {
            type: 'image',
            images: {
              src: '/gda/images/lesson-5-unit-7-3.png',
              alt: 'lesson-5-unit-7-3 Image',
            },
          },
          {
            type: 'title',
            html: `
						<h3>Activities that Deserve Special Attention</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Some of the activities are creating special problems for Lisa.</p>
						<p>For example, she rated “try to organize home office” with a 2 for mastery and a 0 for pleasure. Lisa wouldn’t be able to handle this situation simply by deciding to do more or less of it. She needs to learn ways of improving her chances for success.</p>
						`,
          },
          {
            type: 'image',
            images: {
              src: '/gda/images/lesson-5-unit-4.png',
              alt: 'lesson-5-unit-4 Image',
            },
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>In the next series of questions, we’ll advise Lisa to do more, less, or about the same amount of the activities. Later on, we’ll learn how to address the activities that require “special attention.”</p>
						`,
          },
        ],
        quizzes: [
          {
            quiz_id: 50,
            title: 'Daily Activity Schedule: Saturday',
            subtitle:
              'Should Lisa do More, Less or the Same amount of this type of activity? 7-8 AM: Wake up, shower, get breakfast; Mastery: 8; Pleasure: 4',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 175,
                name: 'More',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 176,
                name: 'Less',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 177,
                name: 'Same',
                correct: true,
                selected_text:
                  "You got it. This activity was associated with a good deal of mastery and some pleasure. But it is an activity that only can be done once a day, so Lisa probably couldn't benefit by doing more of it.",
                unselected_text:
                  "This activity was associated with a good deal of mastery and some pleasure. But it is an activity that only can be done once a day, so Lisa probably couldn't benefit by doing more of it.",
              },
            ],
          },
          {
            quiz_id: 51,
            title: 'Daily Activity Schedule: Saturday',
            subtitle:
              "Should Lisa do More, Less or the Same amount of this type of activity? 8-9 AM: Sit in kitchen, can't get going; Mastery: 2; Pleasure: 0",
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 178,
                name: 'More',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 179,
                name: 'Less',
                correct: true,
                selected_text:
                  "Right. Sitting alone in the kitchen and feeling stuck doesn't seem to be helping Lisa at all. It is likely that doing less of this type of activity and finding something else to do would be a worthwhile change in Lisa's daily schedule.",
                unselected_text:
                  "Sitting alone in the kitchen and feeling stuck doesn't seem to be helping Lisa at all. It is likely that doing less of this type of activity and finding something else to do would be a worthwhile change in Lisa's daily schedule.",
              },
              {
                quiz_option_id: 180,
                name: 'Same',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 52,
            title: 'Daily Activity Schedule: Saturday',
            subtitle:
              'Should Lisa do More, Less or the Same amount of this type of activity? 9-10 AM: Try to pick up house; Mastery: 6; Pleasure: 3',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 181,
                name: 'More',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 182,
                name: 'Less',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 183,
                name: 'Same',
                correct: true,
                selected_text:
                  "Good choice. There's no pleasure now for Lisa in trying to pick up her house. But, she mastered it fairly well, and it is a task that needs to be done. So, she elected to keep this type of activity at about the same frequency in her schedule.",
                unselected_text:
                  "There's no pleasure now for Lisa in trying to pick up her house. But, she mastered it fairly well, and it is a task that needs to be done. So, she elected to keep this type of activity at about the same frequency in her schedule.",
              },
            ],
          },
          {
            quiz_id: 53,
            title: 'Daily Activity Schedule: Saturday',
            subtitle:
              'Should Lisa do More, Less or the Same amount of this type of activity? 10-11 AM: Watch TV; Mastery: 3; Pleasure: 1',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 184,
                name: 'More',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 185,
                name: 'Less',
                correct: true,
                selected_text:
                  "Correct. There's probably no great problem with spending some time watching TV. However, Lisa ranked this activity low on both mastery and pleasure. Her mind was drifting while she watched TV. Because the ratings were so low, Lisa concluded that watching TV at that time of day wasn't doing anything for her, and she would try to do less of it.",
                unselected_text:
                  "There's probably no great problem with spending some time watching TV. However, Lisa ranked this activity low on both mastery and pleasure. Her mind was drifting while she watched TV. Because the ratings were so low, Lisa concluded that watching TV at that time of day wasn't doing anything for her, and she would try to do less of it.",
              },
              {
                quiz_option_id: 186,
                name: 'Same',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 54,
            title: 'Daily Activity Schedule: Saturday',
            subtitle:
              'Should Lisa do More, Less or the Same amount of this type of activity? 11 AM - 12 PM: Gardening; Mastery: 8; Pleasure: 7',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 187,
                name: 'More',
                correct: true,
                selected_text:
                  "You're right! It looks like gardening is a very positive activity for Lisa. She wouldn't be able to garden all day long, but she might do a bit more of it on the weekends. Also, she could develop other hobbies or interests that could be stimulating and interesting.",
                unselected_text:
                  "It looks like gardening is a very positive activity for Lisa. She wouldn't be able to garden all day long, but she might do a bit more of it on the weekends. Also, she could develop other hobbies or interests that could be stimulating and interesting.",
              },
              {
                quiz_option_id: 188,
                name: 'Less',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 189,
                name: 'Same',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 55,
            title: 'Daily Activity Schedule: Saturday',
            subtitle:
              'Should Lisa do More, Less or the Same amount of this type of activity? 12-1 PM: Lunch, do dishes; Mastery: 7; Pleasure: 3',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 190,
                name: 'More',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 191,
                name: 'Less',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 192,
                name: 'Same',
                correct: true,
                selected_text:
                  "You got it. This is another activity like getting up, getting a shower, and eating breakfast. Lisa probably can't do more of it to make her feel better, but if she didn't stick with her routine for meals and daily chores, she might feel worse.",
                unselected_text:
                  "This is another activity like getting up, getting a shower, and eating breakfast. Lisa probably can't do more of it to make her feel better, but if she didn't stick with her routine for meals and daily chores, she might feel worse.",
              },
            ],
          },
          {
            quiz_id: 61,
            title: 'Daily Activity Schedule: Saturday',
            subtitle:
              'Should Lisa do More, Less or the Same amount of this type of activity? 1-2 PM: Try to organize home office; Mastery: 2; Pleasure: 0',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 208,
                name: 'More',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 209,
                name: 'Less',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 210,
                name: 'Same',
                correct: true,
                selected_text:
                  "Good choice. Many people might suggest that Lisa spend less time trying to organize her home office because she rated it so low on mastery and pleasure. Yet, totally avoiding this important task might make her feel more depressed in the long-run. Her difficulty with the office seems to need a special action plan. We'll work on this later. For the time being, Lisa thinks that she'll try to spend about the same amount of time trying to tackle the problem with her home office.",
                unselected_text:
                  "Many people might suggest that Lisa spend less time trying to organize her home office because she rated it so low on mastery and pleasure. Yet, totally avoiding this important task might make her feel more depressed in the long-run. Her difficulty with the office seems to need a special action plan. We'll work on this later. For the time being, Lisa thinks that she'll try to spend about the same amount of time trying to tackle the problem with her home office.",
              },
            ],
          },
          {
            quiz_id: 113,
            title: 'Daily Activity Schedule: Saturday',
            subtitle:
              'Should Lisa do More, Less or the Same amount of this type of activity? 2-3 PM: Watch daughter at swim meet; Mastery: 8; Pleasure: 9',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 353,
                name: 'More',
                correct: true,
                selected_text:
                  "Nice work. As we've noted before, Lisa seems to respond very positively to the time she spends with her daughter. Doing more of this type of activity appears to be an excellent idea.",
                unselected_text:
                  "As we've noted before, Lisa seems to respond very positively to the time she spends with her daughter. Doing more of this type of activity appears to be an excellent idea.",
              },
              {
                quiz_option_id: 354,
                name: 'Less',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 355,
                name: 'Same',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
        ],
      },
      {
        title: "Lisa's Plan of Action for a Saturday",
        unitNo: '8',
        subtitle: '',
        content: [
          {
            type: 'title',
            html: `
						<h3>Insights from Lisa's Activity Schedule</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>The summary from Lisa’s Activity Schedule is shown below.</p>
						`,
          },
          {
            type: 'image',
            images: {
              src: 'https://empower-content-resources.s3.amazonaws.com/uploads/content_resource/file/31/L5-8_ActivitySchedule.jpg',
              alt: 'L5 8 activityschedule',
            },
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>We’ll ask you a few more questions so we can plan some changes for Lisa’s Monday at work.</p>
						`,
          },
        ],
        quizzes: [
          {
            quiz_id: 56,
            title: 'Daily Activity Schedule: Monday at Work',
            subtitle:
              'Should Lisa do More, Less or the Same amount of this type of activity? 7-8 AM: Wake up, get dressed, drive to work; Mastery: 7; Pleasure: 3',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 193,
                name: 'More',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 194,
                name: 'Less',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 195,
                name: 'Same',
                correct: true,
                selected_text:
                  "Correct. Lisa needs to wake up in the morning and get to work. She's doing OK with this activity and will keep doing it at the same level. As she works with cognitive therapy to overcome depression, her enjoyment of the morning routine of getting to work may improve.",
                unselected_text:
                  "Lisa needs to wake up in the morning and get to work. She's doing OK with this activity and will keep doing it at the same level. As she works with cognitive therapy to overcome depression, her enjoyment of the morning routine of getting to work may improve.",
              },
            ],
          },
          {
            quiz_id: 57,
            title: 'Daily Activity Schedule: Monday at Work',
            subtitle:
              'Should Lisa do More, Less or the Same amount of this type of activity? 8-9 AM: Sit at desk worrying, not being constructive; Mastery: 2; Pleasure: 1',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 196,
                name: 'More',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 197,
                name: 'Less',
                correct: true,
                selected_text:
                  "Correct! Lisa isn't getting a very good start to her day when she just sits at her desk and worries. If she could use cognitive therapy skills to modify automatic thoughts and reduce her worry, she might be able to be more productive at work and feel better about the time she spends there.",
                unselected_text:
                  "Lisa isn't getting a very good start to her day when she just sits at her desk and worries. If she could use cognitive therapy skills to modify automatic thoughts and reduce her worry, she might be able to be more productive at work and feel better about the time she spends there.",
              },
              {
                quiz_option_id: 198,
                name: 'Same',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 58,
            title: 'Daily Activity Schedule: Monday at Work',
            subtitle:
              'Should Lisa do More, Less or the Same amount of this type of activity? 9-10 AM: Get organized, make plans; Mastery: 6; Pleasure: 5',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 199,
                name: 'More',
                correct: true,
                selected_text:
                  "That's it. It is interesting to note that when Lisa starts to get organized and make some plans she enjoys her work more. Do you notice this type of reaction in your own life? When you begin to tackle problems and get things accomplished does your mood improve?",
                unselected_text:
                  'It is interesting to note that when Lisa starts to get organized and make some plans she enjoys her work more. Do you notice this type of reaction in your own life? When you begin to tackle problems and get things accomplished does your mood improve?',
              },
              {
                quiz_option_id: 200,
                name: 'Less',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 201,
                name: 'Same',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 59,
            title: 'Daily Activity Schedule: Monday at Work',
            subtitle:
              'Should Lisa do More, Less or the Same amount of this type of activity? 10-11 AM: Meet with work team, make assignments; Mastery: 7; Pleasure: 5 ',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 202,
                name: 'More',
                correct: true,
                selected_text:
                  "Correct. Again, Lisa's ratings of mastery and pleasure go up when she begins to accomplish tasks. It appears that the quiet times when she is alone, full of worry, and can't seem to get in gear are harder for her than times when she can get engaged in her work. Fortunately, her work seems to give her a sense of enjoyment.",
                unselected_text:
                  "Again, Lisa's ratings of mastery and pleasure go up when she begins to accomplish tasks. It appears that the quiet times when she is alone, full of worry, and can't seem to get in gear are harder for her than times when she can get engaged in her work. Fortunately, her work seems to give her a sense of enjoyment.",
              },
              {
                quiz_option_id: 203,
                name: 'Less',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 204,
                name: 'Same',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 60,
            title: 'Daily Activity Schedule: Monday at Work',
            subtitle:
              'Should Lisa do More, Less or the Same amount of this type of activity? 11-12 PM: Skipped "optional" meeting; Mastery: 2; Pleasure: 1 ',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 205,
                name: 'More',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 206,
                name: 'Less',
                correct: true,
                selected_text:
                  'Good choice. Lisa\'s mastery and pleasure ratings certainly took a "nose dive" when she skipped a meeting and spent the hour alone in her office.',
                unselected_text:
                  'Lisa\'s mastery and pleasure ratings certainly took a "nose dive" when she skipped a meeting and spent the hour alone in her office.',
              },
              {
                quiz_option_id: 207,
                name: 'Same',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 108,
            title: 'Daily Activity Schedule: Monday at Work',
            subtitle:
              'Should Lisa do More, Less or the Same amount of this type of activity? 12-1 PM: Lunch, background reading on project ; Mastery: 7; Pleasure: 5 ',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 338,
                name: 'More',
                correct: true,
                selected_text:
                  "You got it. Lisa probably didn't need to eat more lunch! But, having a stimulating and interesting activity to do at lunch or at other times of the day might be a good thing to build into her schedule. The background reading appeared to be constructive, and it also generated some enjoyment.",
                unselected_text:
                  "Lisa probably didn't need to eat more lunch! But, having a stimulating and interesting activity to do at lunch or at other times of the day might be a good thing to build into her schedule. The background reading appeared to be constructive, and it also generated some enjoyment.",
              },
              {
                quiz_option_id: 339,
                name: 'Less',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 340,
                name: 'Same',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
        ],
      },
      {
        title: "Lisa's Plan of Action for a Monday",
        unitNo: '9',
        subtitle: '',
        content: [
          {
            type: 'title',
            html: `
						<h3>Good Job!</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>You’re making choices that will help Lisa get the work situation under better control.</p>
						`,
          },
          {
            type: 'image',
            images: {
              src: 'https://empower-content-resources.s3.amazonaws.com/uploads/content_resource/file/34/L5-9_ActivitySchedule.jpg',
              alt: 'L5 9 activityschedule',
            },
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Let’s skip ahead and help Lisa put together an Activity Schedule for the evening hours on this same Monday.</p>
						`,
          },
        ],
        quizzes: [
          {
            quiz_id: 109,
            title: 'Daily Activity Schedule: Monday After Work',
            subtitle:
              'Should Lisa do More, Less or the Same amount of this type of activity? 6-7 PM: A short walk and then dinner (take out food Ben picked up after work); Mastery: 6; Pleasure: 5',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 341,
                name: 'More',
                correct: true,
                selected_text:
                  'The short walk is probably a good idea. If Lisa did more of this it might help with the depression. If she exercised more she might grow to rate it even higher on mastery and pleasure. The take out food on a busy school night seemed to work out OK for Lisa and her family.',
                unselected_text:
                  'The short walk is probably a good idea. If Lisa did more of this it might help with the depression. If she exercised more she might grow to rate it even higher on mastery and pleasure. The take out food on a busy school night seemed to work out OK for Lisa and her family.',
              },
              {
                quiz_option_id: 342,
                name: 'Less',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 343,
                name: 'Same',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 110,
            title: 'Daily Activity Schedule: Monday After Work',
            subtitle:
              'Should Lisa do More, Less or the Same amount of this type of activity? 7-8 PM: Talk with kids about school work; Mastery: 7; Pleasure: 3',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 344,
                name: 'More',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 345,
                name: 'Less',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 346,
                name: 'Same',
                correct: true,
                selected_text:
                  'Correct. Talking with her kids about school work has been a fairly routine activity for Lisa. She gets some enjoyment out of it and feels like it is something she is good at doing. She can help keep them on track to get their assignments done on time and to do well in school. Lisa believed that she should keep doing this activity at about the same level.',
                unselected_text:
                  'Talking with her kids about school work has been a fairly routine activity for Lisa. She gets some enjoyment out of it and feels like it is something she is good at doing. She can help keep them on track to get their assignments done on time and to do well in school. Lisa believed that she should keep doing this activity at about the same level.',
              },
            ],
          },
          {
            quiz_id: 111,
            title: 'Daily Activity Schedule: Monday After Work',
            subtitle:
              'Should Lisa do More, Less or the Same amount of this type of activity? 8-9 PM: Internet search on ideas for a fund raiser; Mastery: 3 ; Pleasure: 2',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 347,
                name: 'More',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 348,
                name: 'Less',
                correct: true,
                selected_text:
                  "Good choice. As you'll learn later in this program, Lisa has been worrying about a fund raiser that she volunteered to help organize. At this point in time, doing an internet search seemed to be overwhelming. It made her worry more, and she wasn't able to focus very well on the search. Lisa might need to step back for a while until she feels better or until she can figure out another way to get some productive work done on the fund raiser.",
                unselected_text:
                  "As you'll learn later in this program, Lisa has been worrying about a fund raiser that she volunteered to help organize. At this point in time, doing an internet search seemed to be overwhelming. It made her worry more, and she wasn't able to focus very well on the search. Lisa might need to step back for a while until she feels better or until she can figure out another way to get some productive work done on the fund raiser.",
              },
              {
                quiz_option_id: 349,
                name: 'Same',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 112,
            title: 'Daily Activity Schedule: Monday After Work',
            subtitle:
              'Should Lisa do More, Less or the Same amount of this type of activity? 9-11 PM: Watching TV with Ben; Mastery: 6; Pleasure: 4',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 350,
                name: 'More',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 351,
                name: 'Less',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 352,
                name: 'Same',
                correct: true,
                selected_text:
                  "Some people might suggest that Lisa spend less time watching TV because she doesn't usually get a lot of pleasure from it. Yet, at this time of day when she is tired from all of the other activities of a busy workday, winding down with some TV programs may be a reasonable way to spend a couple hours before she goes to bed. As Lisa works toward overcoming depression, it might be useful to think of some alternative evening activities for workdays such as hobbies, reading, or communicating with friends that could build her sense of mastery and pleasure.",
                unselected_text:
                  "Some people might suggest that Lisa spend less time watching TV because she doesn't usually get a lot of pleasure from it. Yet, at this time of day when she is tired from all of the other activities of a busy workday, winding down with some TV programs may be a reasonable way to spend a couple hours before she goes to bed. As Lisa works toward overcoming depression, it might be useful to think of some alternative evening activities for workdays such as hobbies, reading, or communicating with friends that could build her sense of mastery and pleasure.",
              },
            ],
          },
        ],
      },
      {
        title: 'Recommending a Plan of Action',
        unitNo: '10',
        subtitle: '',
        content: [
          {
            type: 'text',
            html: `
						<p>You’ve done an excellent job helping Lisa use an Activity Schedule.</p>
						<p>After using an Activity Schedule, Lisa should be better equipped to make choices that will result in more satisfying days.</p>
						`,
          },
          {
            type: 'image',
            images: {
              src: 'https://empower-content-resources.s3.amazonaws.com/uploads/content_resource/file/35/L5-10_ActivitySchedule.jpg',
              alt: 'L5 10 activityschedule',
            },
          },
          {
            type: 'video',
            videos: {
              1: {
                id: '1540665893001',
                poster: '/gda/content/posters/rushing-l5-u10.jpg',
                src: `${GDA_VIDEOS}1540665893001` + `.mp4`,
              },
              2: {
                id: '1824572308001',
                poster: '/gda/content/posters/wright-l5-u10.jpg',
                src: `${GDA_VIDEOS}1824572308001` + `.mp4`,
              },
            },
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>In the next series of screens, you’ll be introduced to the <strong>Principles of Taking Action</strong>. </p>
						<p>Select True or False to give your opinion of the suggestion on the screen.</p>
						`,
          },
        ],
        quizzes: [
          {
            quiz_id: 47,
            title: 'Principles of Taking Action',
            subtitle: 'You should: Delay getting started until you think you are ready to reach all your goals.',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 169,
                name: 'True',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 170,
                name: 'False',
                correct: true,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 48,
            title: 'Principles of Taking Action',
            subtitle: 'You should: Pick areas of change with high chances of success.',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 171,
                name: 'True',
                correct: true,
                selected_text:
                  'Correct. To get going when you seem to be stalled, it can help to target a goal that is achievable and will build your sense of confidence and success.',
                unselected_text:
                  'To get going when you seem to be stalled, it can help to target a goal that is achievable and will build your sense of confidence and success.',
              },
              {
                quiz_option_id: 172,
                name: 'False',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 49,
            title: 'Principles of Taking Action',
            subtitle: 'You should: Take on the toughest tasks first.',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 173,
                name: 'True',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 174,
                name: 'False',
                correct: true,
                selected_text:
                  "You're on target with this answer. It can occasionally work out fine if you take on the hardest part of the challenge first, but most of the time a step-by-step plan will be more effective.",
                unselected_text:
                  'It can occasionally work out fine if you take on the hardest part of the challenge first, but most of the time a step-by-step plan will be more effective.',
              },
            ],
          },
          {
            quiz_id: 62,
            title: 'Principles of Taking Action',
            subtitle: 'You should: Ask for help from your therapist, family, or friends if you need it.',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 211,
                name: 'True',
                correct: true,
                selected_text:
                  'Correct. If you are stuck in depression and are having trouble taking action, a "helping hand" may be just what is needed. Remember that depression and anxiety are illnesses. It\'s not your fault. There is no shame in asking a trusted and positive person for help.',
                unselected_text:
                  'If you are stuck in depression and are having trouble taking action, a "helping hand" may be just what is needed. Remember that depression and anxiety are illnesses. It\'s not your fault. There is no shame in asking a trusted and positive person for help.',
              },
              {
                quiz_option_id: 212,
                name: 'False',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 63,
            title: 'Principles of Taking Action',
            subtitle: 'You should: Develop specific problem-solving strategies for difficult or challenging tasks.',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 213,
                name: 'True',
                correct: true,
                selected_text:
                  'Correct. This is another good principle to keep in mind when you are trying to take action. If a task is especially challenging or complex, you may need to break it down into components and work on specific plans to manage each of these pieces of the problem.',
                unselected_text:
                  'This is another good principle to keep in mind when you are trying to take action. If a task is especially challenging or complex, you may need to break it down into components and work on specific plans to manage each of these pieces of the problem.',
              },
              {
                quiz_option_id: 214,
                name: 'False',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 64,
            title: 'Principles of Taking Action',
            subtitle: 'You should: Believe that doing it alone is usually best.',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 215,
                name: 'True',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 216,
                name: 'False',
                correct: true,
                selected_text:
                  'Way to go. Many of us have a basic belief that we should "do it alone." Sticking rigidly to such a belief can leave you feeling isolated and overwhelmed by tasks, especially if you are suffering from depression and anxiety.',
                unselected_text:
                  'Many of us have a basic belief that we should "do it alone." Sticking rigidly to such a belief can leave you feeling isolated and overwhelmed by tasks, especially if you are suffering from depression and anxiety.',
              },
            ],
          },
          {
            quiz_id: 65,
            title: 'Principles of Taking Action',
            subtitle: 'You should: Record changes in your behavior and thinking after you take an action.',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 217,
                name: 'True',
                correct: true,
                selected_text:
                  'You got it. Many research studies have shown that recording the results of your actions can help you make positive changes that will be more likely to last. The principle of logging or recording (sometimes called self-monitoring) can help people stick with exercise programs, diets, and many other healthy changes they try to make in their lives.',
                unselected_text:
                  'Many research studies have shown that recording the results of your actions can help you make positive changes that will be more likely to last. The principle of logging or recording (sometimes called self-monitoring) can help people stick with exercise programs, diets, and many other healthy changes they try to make in their lives.',
              },
              {
                quiz_option_id: 218,
                name: 'False',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 66,
            title: 'Principles of Taking Action',
            subtitle: 'You should: Forget about your automatic thoughts, just act.',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 219,
                name: 'True',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 220,
                name: 'False',
                correct: true,
                selected_text:
                  "Yes, you're correct again. If automatic thoughts are getting in the way of taking action, it usually helps to try to recognize and change them.",
                unselected_text:
                  'If automatic thoughts are getting in the way of taking action, it usually helps to try to recognize and change them.',
              },
            ],
          },
          {
            quiz_id: 67,
            title: 'Principles of Taking Action',
            subtitle: 'You should: View difficulties in taking action as learning opportunities.',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 221,
                name: 'True',
                correct: true,
                selected_text:
                  "Nice job. We hope that you'll find opportunities to learn from your difficulties in taking action and that cognitive therapy will help you move forward in your path to recovery.",
                unselected_text:
                  "We hope that you'll find opportunities to learn from your difficulties in taking action and that cognitive therapy will help you move forward in your path to recovery.",
              },
              {
                quiz_option_id: 222,
                name: 'False',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
        ],
      },
      {
        title: 'Principles of Taking Action',
        unitNo: '11',
        subtitle: '',
        content: [
          {
            type: 'title',
            html: `
						<h3>Principles of Taking Action</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<ol>
						<li>Set reasonable goals for change.</li>
						<li>Start with actions that seem manageable – ones that have a good chance for success.</li>
						<li>Make small changes at first.</li>
						<li>Ask for help if you need it.</li>
						<li>Monitor your automatic thoughts about actions for change. Modify negative thoughts if they occur.</li>
						<li>If you have trouble, step back and try to learn from the experience.</li>
						<li>Develop specific problem-solving strategies for difficult or challenging tasks.</li>
						<li>Give yourself credit for successes and be understanding if things don’t go as planned.</li>	
						</ol>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>We’ll learn what happens when Lisa puts her plans into action.</p>
						`,
          },
        ],
      },
      {
        title: 'Moderate Changes',
        unitNo: '12',
        subtitle: '',
        content: [
          {
            type: 'text',
            html: `
						<p>In the next scene, you’ll see Lisa talking with Abby after she makes a modest number of positive changes in her Activity Schedule.</p>
						<p>After you watch this video, you’ll be able to see what happens when Lisa is able to make more extensive changes.</p>
						`,
          },
          {
            type: 'video',
            videos: {
              1: {
                id: '1540644789001',
                poster: '/gda/content/posters/rushing-l5-u12.jpg',
                src: `${GDA_VIDEOS}1540644789001` + `.mp4`,
              },
              2: {
                id: '1540644789001',
                poster: '/gda/content/posters/wright-l5-u12.jpg',
                src: `${GDA_VIDEOS}1540644789001` + `.mp4`,
              },
            },
          },

          {
            type: 'text',
            html: `
						<p>In this video, Lisa is taking some positive steps, but still has some work to do. Here is Lisa’s Activity Schedule with the modest number of changes.</p>
						`,
          },
          {
            type: 'image',
            images: {
              src: 'https://empower-content-resources.s3.amazonaws.com/uploads/content_resource/file/40/L5-12_ActivitySchedule-less.jpg',
              alt: 'L5 12 activityschedule less',
            },
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Let’s see what happens when Lisa is able to make more significant changes in her behavior.</p>
						`,
          },
        ],
      },
      {
        title: 'Significant Progress',
        unitNo: '13',
        subtitle: '',
        content: [
          {
            type: 'video',
            videos: {
              1: {
                id: '1540693542001',
                poster: '/gda/content/posters/rushing-l5-u13.jpg',
                src: `${GDA_VIDEOS}1540693542001` + `.mp4`,
              },
              2: {
                id: '1540693542001',
                poster: '/gda/content/posters/wright-l5-u13.jpg',
                src: `${GDA_VIDEOS}1540693542001` + `.mp4`,
              },
            },
          },
          {
            type: 'text',
            html: `
						<p>In this encouraging scene, Lisa has been able to use activity scheduling to make some major changes in her daily routines. Notice the corresponding changes in her completed Activity Schedules</p>
						`,
          },
          {
            type: 'image',
            images: {
              src: 'https://empower-content-resources.s3.amazonaws.com/uploads/content_resource/file/41/L5-13_ActivitySchedule-more.jpg',
              alt: 'L5 13 activityschedule more',
            },
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Now its your turn to use this powerful cognitive therapy method.</p>
						`,
          },
        ],
        practices: [{ practiceId: 8, reviewNo: 1 }],
      },
      {
        title: 'Summary for Lesson 5',
        unitNo: '14',
        subtitle: '',
        content: [
          {
            type: 'title',
            html: `
						<h3>What You've Learned </h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Lesson 5 taught you how to do activity scheduling with mastery and pleasure ratings – one of the best self-help strategies for overcoming problems with low energy and lack of interest.</p>
						<p>You can use activity scheduling for a day, a part of a day, or an entire week. Just pick the amount of time that seems to work best for you, and give it a try!</p>
						`,
          },
          {
            type: 'text',
            html: `
						<div class="takeaways">
						<h3>Summary Points</h3>
						<p>Principles of Taking Action</p>
						<ol>
						<li>Set reasonable goals for change.</li>
						<li>Start with actions that seem manageable – ones that have a good chance for success.</li>
						<li>Make small changes at first.</li>
						<li>Ask for help if you need it.</li>
						<li>Monitor your automatic thoughts about actions for change. Modify negative thoughts if they occur.</li>
						<li>If you have trouble, step back and try to learn from the experience.</li>
						<li>Develop specific problem-solving strategies for difficult or challenging tasks.</li>
						<li>Give yourself credit for successes and be understanding if things don’t go as planned.</li>
						</ol>
						</div>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Let’s review the recommended exercises for Lesson 5.</p>
						`,
          },
        ],
      },
      {
        title: 'Recommended Exercises for Lesson 5',
        unitNo: '15',
        subtitle: '',
        content: [
          {
            type: 'title',
            html: `
						<h3>To Be Really Effective</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>We hope the Activity Scheduling method is already starting to help you.</p>
						<p>The Practice section of Good Days Ahead can be used any time to develop Activity Schedules and to use them to plan for change. You can also print out Activity Schedules to take them with you wherever you go.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Recommended Exercises</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Review and update an Activity Schedule. Complete additional activity schedules as needed to motivate yourself to change your behavior in a positive direction.</p>
						`,
          },
        ],
      },
    ],
    practices: [
      { practiceId: 8, reviewNo: 1 },
      { practiceId: 23, reviewNo: -1 },
    ],
  },

  {
    title: 'Step-by-Step',
    hero_url: '/gda/heros/hero6.jpg',
    // hero_url: "https://empower-content-resources.s3.amazonaws.com/uploads/content_resource/file/133/hero6.jpg",
    lessonNo: '6',
    takeAways: [
      'How to accomplish challenging or effortful tasks by organizing a step-by-step plan.',
      'How to use the step-by-step approach to overcome procrastination.',
    ],
    units: [
      {
        title: 'Introducing the Step-by-Step Approach',
        unitNo: '1',
        subtitle: '',
        content: [
          {
            type: 'video',
            videos: {
              1: {
                id: '1549157385001',
                poster: '/gda/content/posters/rushing-l6-u1.jpg',
                src: `${GDA_VIDEOS}1549157385001` + `.mp4`,
              },
              2: {
                id: '1824567885001',
                poster: '/gda/content/posters/wright-l6-u1.jpg',
                src: `${GDA_VIDEOS}1824567885001` + `.mp4`,
              },
            },
          },
          {
            type: 'text',
            html: `
						<p>One of the most useful methods for changing behavior is the step-by-step approach.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>We’ll see an example of Lisa using the step-by-step approach.</p>
						`,
          },
        ],
      },
      {
        title: 'A Step at a Time',
        unitNo: '2',
        subtitle: '',
        content: [
          {
            type: 'video',
            videos: {
              1: {
                id: '1540693541001',
                poster: '/gda/content/posters/rushing-l6-u2.jpg',
                src: `${GDA_VIDEOS}1540693541001` + `.mp4`,
              },
              2: {
                id: '1824572306001',
                poster: '/gda/content/posters/wright-l6-u2.jpg',
                src: `${GDA_VIDEOS}1824572306001` + `.mp4`,
              },
            },
          },
          {
            type: 'text',
            html: `
						<p>When you completed an Activity Schedule, you may have noted that some of the activities may have needed a “special action plan.” The step-by-step approach can be an excellent tool to use in coping with these sorts of challenges.</p>
    				`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>You’ll learn how to put step-by-step plans into action.</p>
						`,
          },
        ],
      },
      {
        title: 'How to Use the Step-by-Step Approach',
        unitNo: '3',
        subtitle: '',
        content: [
          {
            type: 'title',
            html: `
						<h3>Step By Step</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p><span class="spanStep">Step 1:</span> <strong>Identify an activity</strong> that seems difficult or challenging.</p>
						<p><span class="spanStep">Step 2:</span> <strong>List the steps</strong> required to manage the situation.</p>
						<p><span class="spanStep">Step 3:</span> <strong>Identify small steps</strong> that can be handled without too much trouble.</p>
						<p><span class="spanStep">Step 4:</span> <strong>Start with small successes.</strong> Begin with the least difficult steps.</p>
						<p><span class="spanStep">Step 5:</span> <strong>Take on larger or more challenging steps</strong> as you gain confidence and experience.</p>
						<p><span class="spanStep">Step 6:</span> <strong>Monitor your thoughts</strong> about the activities, and use cognitive therapy skills to modify negative thoughts.</p>
						<p><span class="spanStep">Step 7:</span> <strong>Give yourself credit</strong> for the progress.</p>
						<p><span class="spanStep">Step 8:</span> <strong>Try another strategy</strong> if you are having difficulty completing the steps. For example, review the problem and take smaller steps, obtain instruction or advice.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>What If I Already Know About the Step-by-Step Approach?</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>The step-by-step approach is a “common sense” method that most people have used for facing obstacles at some time in their lives.</p>
						<p>Unfortunately, when we get depressed or anxious we can have trouble implementing these helpful strategies. Also, many people have never learned how to fully use the step-by-step approach.</p>
						<p>People who use behavioral methods such as the step-by-step approach often get substantial relief from symptoms and gain mastery over their problems. So please try to learn from Lisa’s example and take time to practice using the step-by-step approach in your own life.</p>
						`,
          },
        ],
      },
      {
        title: 'Identifying the Problem',
        unitNo: '4',
        subtitle: '',
        content: [
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>You’ll have a chance to choose some actions Lisa might take to solve the problem with her home office.</p>
						`,
          },
          {
            type: 'video',
            videos: {
              1: {
                id: '1540665882001',
                poster: '/gda/content/posters/rushing-l6-u4.jpg',
                src: `${GDA_VIDEOS}1540665882001` + `.mp4`,
              },
              2: {
                id: '1824567378001',
                poster: '/gda/content/posters/wright-l6-u4.jpg',
                src: `${GDA_VIDEOS}1824567378001` + `.mp4`,
              },
            },
          },
          {
            type: 'text',
            html: `
						<p>This video shows Lisa struggling to get her home office in order. After you watch these videos, you can begin to help her use the step-by-step approach.</p>
						`,
          },
        ],
        quizzes: [
          {
            quiz_id: 116,
            title: 'Select Yes if You Think Lisa Should:',
            subtitle: 'Put off dealing with the problem.',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 356,
                name: 'Yes',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 357,
                name: 'No',
                correct: true,
                selected_text:
                  "You're right. Avoiding the problem won't help. The home office situation will just get worse until Lisa develops a strategy for handling it.",
                unselected_text:
                  "Avoiding the problem won't help. The home office situation will just get worse until Lisa develops a strategy for handling it.",
              },
            ],
          },
          {
            quiz_id: 118,
            title: 'Select Yes if You Think Lisa Should:',
            subtitle: 'Modify automatic thoughts.',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 362,
                name: 'Yes',
                correct: true,
                selected_text:
                  'Correct. It would help if Lisa tried to change her negative automatic thoughts. Then she would have more confidence about being able to accomplish the task.',
                unselected_text: 'It would help if Lisa tried to change her automatic thoughts.',
              },
              {
                quiz_option_id: 363,
                name: 'No',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 127,
            title: 'Select Yes if You Think Lisa Should:',
            subtitle: 'Increase motivation by getting angry at herself.',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 387,
                name: 'Yes',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 388,
                name: 'No',
                correct: true,
                selected_text:
                  "Good choice. Getting angry at herself probably wouldn't help Lisa solve the problem. Sometimes self-directed anger can make people want to change. But usually when anger is turned inward it just makes the situation worse. Cognitive therapy methods such as modifying automatic thoughts can help you reduce hurtful anger.",
                unselected_text:
                  "Getting angry at herself probably wouldn't help Lisa solve the problem. Sometimes self-directed anger can make people want to change. But usually when anger is turned inward it just makes the situation worse. Cognitive therapy methods such as modifying automatic thoughts can help you reduce hurtful anger.",
              },
            ],
          },
          {
            quiz_id: 128,
            title: 'Select Yes if You Think Lisa Should:',
            subtitle: "Do the task on her own to show that she doesn't need Ben's help.",
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 389,
                name: 'Yes',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 390,
                name: 'No',
                correct: true,
                selected_text:
                  'You got it. Some people think that it\'s better to handle this kind of problem without any support from others. Of course there are plenty of things in life that you have to do yourself. However, Ben has offered to help and it would be good for Lisa to at least let him know that she appreciates his kindness. Ignoring Ben or "brushing him off" would just make him angry. How do you think this would affect Ben\'s willingness to help in the future?',
                unselected_text:
                  'Some people think that it\'s better to handle this kind of problem without any support from others. Of course there are plenty of things in life that you have to do yourself. However, Ben has offered to help and it would be good for Lisa to at least let him know that she appreciates his kindness. Ignoring Ben or "brushing him off" would just make him angry. How do you think this would affect Ben\'s willingness to help in the future?',
              },
            ],
          },
        ],
      },
      {
        title: 'Modifying Automatic Thoughts',
        unitNo: '5',
        subtitle: '',
        content: [
          {
            type: 'text',
            html: `
						<p>Let’s review Lisa’s efforts to modify her automatic thoughts. Creating this TCR put Lisa in a better frame of mind to use the step-by-step approach.</p>
						`,
          },
          {
            type: 'image',
            images: {
              src: '/gda/images/lesson-6-unit-5.png',
              alt: 'lesson-6-unit-5 Image',
            },
          },
          {
            type: 'title',
            html: `
						<h3>Lisa's Thought Change Record</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>We moved rapidly through this example of changing automatic thoughts because the main objective of this lesson is to learn the step-by-step approach and other ways of taking action.</p>
						<p>If you’d like to review more detailed exercises on modifying negative thinking, you can revisit Lesson 4, Modifying Automatic Thoughts.</p>
						`,
          },
        ],
      },
      {
        title: 'Listing the Steps',
        unitNo: '6',
        subtitle: '',
        content: [
          {
            type: 'video',
            videos: {
              1: {
                id: '1540665878001',
                poster: '/gda/content/posters/rushing-l6-u6.jpg',
                src: `${GDA_VIDEOS}1540665878001` + `.mp4`,
              },
              2: {
                id: '1824567882001',
                poster: '/gda/content/posters/wright-l6-u6.jpg',
                src: `${GDA_VIDEOS}1824567882001` + `.mp4`,
              },
            },
          },
          {
            type: 'text',
            html: `
						<p>Now we’ll return to the home office to see what happens when Lisa has a healthier attitude about the problem.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Lisa's Task List</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Here are some of the steps that Lisa wrote down in her notebook:</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Problem:</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Get home office under control.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Steps:</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<bl>
						<li>Clean office</li>
						<li>Go through mail</li>
						<li>Balance checkbook and pay bills</li>
						<li>Practice new computer program</li>
						<li>Write thank you notes for birthday gifts</li>
						<li>Write choir fund raising letter</li>
						<li>Plan food for next month’s neighborhood picnic</li>
						</bl>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Rating the Difficulty of the Steps</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Lisa ranked each part of the task for degree of difficulty on a 0-10 scale (0=easiest, 10=hardest) and also noted which tasks might need to be broken down into even smaller steps.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>We’ll learn how Lisa broke her tasks down into smaller, more manageable steps.</p>
						`,
          },
        ],
      },
      {
        title: 'Organizing the Steps',
        unitNo: '7',
        subtitle: '',
        content: [
          {
            type: 'title',
            html: `
						<h3>How Lisa Broke the Task Down into Steps</h3>
						`,
          },
          {
            type: 'video',
            videos: {
              1: {
                id: '1540644782001',
                poster: '/gda/content/posters/rushing-l6-u7.jpg',
                src: `${GDA_VIDEOS}1540644782001` + `.mp4`,
              },
              2: {
                id: '1824567376001',
                poster: '/gda/content/posters/wright-l6-u7.jpg',
                src: `${GDA_VIDEOS}1824567376001` + `.mp4`,
              },
            },
          },
          {
            type: 'title',
            html: `
						<h3>Tips for Using the Step-by-Step Approach</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<ol>
						<li>Start with things that are <strong>rated low on degree of difficulty</strong>.</li>
						<li><strong>Plan a sequence</strong> where success in one area will help you with the next.</li>
						<li><strong>You can delay steps</strong> that aren’t very important or don’t need to be accomplished right away.</li>
						<li>Break areas down into <strong>small, specific steps</strong> that you can manage one at a time.</li>
						</ol>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>On the next screen, you’ll see the steps that Lisa listed to put her home office back in shape.</p>
						`,
          },
        ],
      },
      {
        title: 'Making Choices and Getting Going',
        unitNo: '8',
        subtitle: '',
        content: [
          {
            type: 'title',
            html: `
						<h3>Working Out a Solution</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Lisa thought that four of the steps needed to be broken down into smaller steps. She also remembered that Ben offered to help.</p>
						<bl>
						<li>Clean office </li>
						<li>Go through mail</li>
						<li>Balance checkbook</li>
						<li>Write fundraising letter</li>
						</bl>
						<p>Next we’ll see how Lisa divides each of these items up into smaller steps.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Organizing the Steps</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>It works best just to organize the steps in a way that makes sense and then begin to take action. If you run into obstacles, you can always review the situation and start again.</p>
						`,
          },
        ],
      },
      {
        title: "Lisa's Progress",
        unitNo: '9',
        subtitle: '',
        content: [
          {
            type: 'video',
            videos: {
              1: {
                id: '1540693536001',
                poster: '/gda/content/posters/rushing-l6-u9.jpg',
                src: `${GDA_VIDEOS}1540693536001` + `.mp4`,
              },
              2: {
                id: '1824567375001',
                poster: '/gda/content/posters/wright-l6-u9.jpg',
                src: `${GDA_VIDEOS}1824567375001` + `.mp4`,
              },
            },
          },
          {
            type: 'text',
            html: `
						<p>In this video, you’ll see how Lisa got her home office back in order with the step-by-step approach.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>How Lisa Broke Up Her Tasks Into Smaller Steps</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Notice how Lisa considered the level of difficulty for each step and put them in an order that made sense for completing the task.</p>
						`,
          },
          {
            type: 'image',
            images: {
              src: 'https://empower-content-resources.s3.amazonaws.com/uploads/content_resource/file/42/L6-9_stepbystep.jpg',
              alt: 'L6 9 stepbystep',
            },
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Let’s learn how to get creative with the Step-by-Step approach.</p>
						`,
          },
        ],
      },
      {
        title: 'Getting Creative',
        unitNo: '10',
        subtitle: '',
        content: [
          {
            type: 'video',
            videos: {
              1: {
                id: '1540665874001',
                poster: '/gda/content/posters/rushing-l6-u10.jpg',
                src: `${GDA_VIDEOS}1540665874001` + `.mp4`,
              },
              2: {
                id: '1824572303001',
                poster: '/gda/content/posters/wright-l6-u10.jpg',
                src: `${GDA_VIDEOS}1824572303001` + `.mp4`,
              },
            },
          },
          {
            type: 'text',
            html: `
						<p>Learn how you can be creative in using the step-by-step approach and how you might be able to enjoy using this effective cognitive therapy method.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>You can use the step-by-step method to start working on one of your own problems now. We recommend that you do at least one step-by-step exercise before you finish Lesson 6.</p>
						`,
          },
        ],
        practices: [{ practiceId: 9, reviewNo: 1 }],
      },
      {
        title: "Reviewing What You've Learned",
        unitNo: '11',
        subtitle: '',
        content: [
          {
            type: 'title',
            html: `
						<h3>Making Progress</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>You’ve been working hard on learning how to Take Action. Would you like to check on your progress?</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>The review questions should give you an idea of what you have accomplished and also point out areas for further study.</p>
						`,
          },
        ],
        quizzes: [
          {
            quiz_id: 117,
            title: 'The relationship between thoughts and behavior (actions) can be described as:',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 358,
                name: 'Thoughts and behavior are the products of emotions.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 359,
                name: 'You must take action to generate thoughts.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 360,
                name: "Thoughts and behavior don't affect one another very much.",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 361,
                name: 'Thoughts and behavior have a strong influence on one another.',
                correct: true,
                selected_text:
                  "You're right. Your cognitions (thoughts) have a very strong influence on how you feel and how you act. Also, the actions that you take (your behavior) can affect the way that you think about yourself.",
                unselected_text:
                  'Your cognitions (thoughts) have a very strong influence on how you feel and how you act. Also, the actions that you take (your behavior) can affect the way that you think about yourself.',
              },
            ],
          },
          {
            quiz_id: 119,
            title: 'The three phases of changing behavior are:',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 364,
                name: 'Revise, list, and examine',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 365,
                name: 'Push, pull, and carry',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 366,
                name: 'Monitor, plan, and act',
                correct: true,
                selected_text:
                  "You got it. In cognitive therapy, people are taught that the first step toward changing behavior is to monitor or log your actions. This step alone has been shown to be effective in promoting positive change. If you take a good look at what you are doing now, it may prompt you to make healthy modifications in your behavior. The second step is to organize plans to make changes. Then it's time to take the third step – put your ideas into action!",
                unselected_text:
                  "In cognitive therapy, people are taught that the first step toward changing behavior is to monitor or log your actions. This step alone has been shown to be effective in promoting positive change. If you take a good look at what you are doing now, it may prompt you to make healthy modifications in your behavior. The second step is to organize plans to make changes. Then it's time to take the third step – put your ideas into action!",
              },
              {
                quiz_option_id: 367,
                name: 'Confront, challenge, and act',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 120,
            title: 'Mastery ratings on an Activity Schedule are used to indicate:',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 368,
                name: 'Your level of frustration',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 369,
                name: 'How well you performed an activity',
                correct: true,
                selected_text:
                  "Excellent choice. Mastery ratings are done to give you a measure of your performance. These ratings can help you give yourself credit when it's due and also help you select areas for improvement.",
                unselected_text:
                  "Mastery ratings are done to give you a measure of your performance. These ratings can help you give yourself credit when it's due and also help you select areas for improvement.",
              },
              {
                quiz_option_id: 370,
                name: 'Your level of enjoyment',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 371,
                name: 'How much you want to change',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 121,
            title: 'Activity Scheduling can help you with which of the following actions?',
            instruction: 'Select all that apply.',
            options: [
              {
                quiz_option_id: 372,
                name: 'Identify areas of strength or competence',
                correct: true,
                selected_text: 'Correct',
                unselected_text: '',
              },
              {
                quiz_option_id: 373,
                name: 'Become a stronger procrastinator',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 374,
                name: 'Identify activities that give you pleasure',
                correct: true,
                selected_text: 'Correct',
                unselected_text: '',
              },
              {
                quiz_option_id: 375,
                name: 'Do more activities that are helpful to you',
                correct: true,
                selected_text: 'Correct',
                unselected_text: '',
              },
              {
                quiz_option_id: 376,
                name: 'Put your responsibilities aside',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 122,
            title: 'About Activity Scheduling',
            subtitle:
              "Activity scheduling will usually stimulate you to make improvements in the way that you use your time. First you monitor the mastery and pleasure associated with activities. Next you review the record to plan the changes that you think will help. Finally, you revise your schedule to make more room for activities that will give you a boost in overcoming depression and anxiety. Let's try another quiz question.",
          },
          {
            quiz_id: 123,
            title: 'Good strategies for Taking Action include:',
            instruction: 'Select all that apply.',
            options: [
              {
                quiz_option_id: 377,
                name: 'If possible, ignore worries and concerns – just get going and take action!',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 378,
                name: 'Pick areas of change with high chances for success',
                correct: true,
                selected_text: 'Correct',
                unselected_text: '',
              },
              {
                quiz_option_id: 379,
                name: 'Take on toughest tasks first',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 380,
                name: 'Do it alone if you can',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 381,
                name: 'Monitor automatic thoughts about actions for change',
                correct: true,
                selected_text: 'Correct',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 124,
            title: 'About Taking Action',
            instruction:
              "The Principles of Taking Action include ideas such as: 1) planning changes with a high chance of success, and 2) monitoring automatic thoughts about the actions you take. Other useful principles include asking for help when you need it and viewing problems as learning opportunities. Although it might be tempting to ignore your worries and concerns, it usually works better to acknowledge them and figure out an effective way to cope with them. Let's move on to the final quiz in this series.",
          },
          {
            quiz_id: 125,
            title: 'When you use the Step-by-Step approach it helps to:',
            instruction: 'Select all that apply.',
            options: [
              {
                quiz_option_id: 382,
                name: 'List steps that might be required to manage the situation',
                correct: true,
                selected_text: 'Correct',
                unselected_text: '',
              },
              {
                quiz_option_id: 383,
                name: 'Give yourself credit for progress',
                correct: true,
                selected_text: 'Correct',
                unselected_text: '',
              },
              {
                quiz_option_id: 384,
                name: 'Put off taking action until all of your energy returns',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 385,
                name: 'Begin with some of the least difficult steps',
                correct: true,
                selected_text: 'Correct',
                unselected_text: '',
              },
              {
                quiz_option_id: 386,
                name: 'Let your emotions tell you what to do',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
        ],
      },
      {
        title: 'Summary',
        unitNo: '12',
        subtitle: '',
        content: [
          {
            type: 'title',
            html: `
						<h3>You're Building Valuable Skills</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>The review questions have been completed, and it looks like you are learning a lot about how to use behavior change methods from cognitive therapy in your path to wellness.</p>
						`,
          },
          {
            type: 'text',
            html: `
						<div class="takeaways">
						<h3>Summary Points</h3>
						<bl>
						<li>The step-by-step approach is a common sense strategy that people can use to accomplish tasks.</li>
						<li>If you’re having problems with feeling overwhelmed, or find that you are putting off tasks that you would like to complete, the step-by-step approach could help you reach your goals.</li>
						</bl>
						</div>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Check out the list of recommended exercises for Lesson 6. Be sure to practice these new skills while they are fresh in your mind. It can make a big difference!</p>
						`,
          },
        ],
      },
      {
        title: 'Recommended Exercises for Lesson 6',
        unitNo: '13',
        subtitle: '',
        content: [
          {
            type: 'title',
            html: `
						<h3>Recommended Exercises:</h3>
						`,
          },
          {
            type: 'text',
            html: `
            <ol>
						<li>Review and update a Step-by-Step exercise.</li>
            <li> Do additional Step-by-Step exercises to tackle challenging problems.</li>
            </ol>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Upcoming Lesson</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>The next lesson will help you understand attitudes and beliefs that control your thinking and your self-esteem. While you go through this lesson, try to keep an open mind about your ability to change. Ways of thinking that have caused problems in the past can be changed so that you can be a happier and more productive person.</p>
						<p>Now that you’ve completed Lesson 6, you can go back to the Homepage to decide what to do next.</p>
						`,
          },
        ],
      },
    ],
    practices: [{ practiceId: 9, reviewNo: 1 }],
  },

  {
    title: 'Changing Schemas',
    hero_url: '/gda/heros/hero7.jpg',
    // hero_url: "https://empower-content-resources.s3.amazonaws.com/uploads/content_resource/file/134/hero7.jpg",
    lessonNo: '7',
    takeAways: [
      'How to recognize the schemas (core beliefs) that control your self-esteem.',
      'How to spot and effectively use your positive core beliefs.',
      'How to change negative core beliefs so that you feel better and gain coping skills for lifes problems.',
    ],
    units: [
      {
        title: 'What is a Schema?',
        unitNo: '1',
        subtitle: '',
        content: [
          {
            type: 'video',
            videos: {
              1: {
                id: '1540744601001',
                poster: '/gda/content/posters/rushing-l7-u1.jpg',
                src: `${GDA_VIDEOS}1540744601001` + `.mp4`,
              },
              2: {
                id: '1824572355001',
                poster: '/gda/content/posters/wright-l7-u1.jpg',
                src: `${GDA_VIDEOS}1824572355001` + `.mp4`,
              },
            },
          },
          {
            type: 'text',
            html: `
						<p>A schema is a core belief or assumption that organizes and controls how we think about ourselves and the events of our lives.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Goals for This Lesson:</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<ol>
						<li>Define schemas</li>
						<li>Understand the relationship between automatic thoughts and schemas</li>
						<li>Recognize methods of uncovering and changing schemas</li>
						</ol>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Let’s learn about positive schemas.</p>
						`,
          },
        ],
      },
      {
        title: 'Gaining Strength from Positive Schemas',
        unitNo: '2',
        subtitle: '',
        content: [
          {
            type: 'video',
            videos: {
              1: {
                id: '1540723922001',
                poster: '/gda/content/posters/rushing-l7-u2.jpg',
                src: `${GDA_VIDEOS}1540723922001` + `.mp4`,
              },
              2: {
                id: '1824567422001',
                poster: '/gda/content/posters/wright-l7-u2.jpg',
                src: `${GDA_VIDEOS}1824567422001` + `.mp4`,
              },
            },
          },
          {
            type: 'text',
            html: `
						<p>Positive schemas help us have healthy self-esteem and face the challenges of life.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Examples of Positive Schemas</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<bl>
						<li>No matter what happens, I can manage somehow.</li>
						<li>If I work at something, I can master it.</li>
						<li>I’m a survivor.</li>
						<li>Others can trust me.</li>
						<li>I’m lovable.</li>
						<li>If I prepare in advance, I usually do better.</li>
						</bl>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Let’s learn about negative schemas.</p>
						`,
          },
        ],
      },
      {
        title: 'The Damaging Effects of Negative Schemas',
        unitNo: '3',
        subtitle: '',
        content: [
          {
            type: 'video',
            videos: {
              1: {
                id: '1540739164001',
                poster: '/gda/content/posters/rushing-l7-u3.jpg',
                src: `${GDA_VIDEOS}1540739164001` + `.mp4`,
              },
              2: {
                id: '1824567421001',
                poster: '/gda/content/posters/wright-l7-u3.jpg',
                src: `${GDA_VIDEOS}1824567421001` + `.mp4`,
              },
            },
          },
          {
            type: 'text',
            html: `
						<p>Learn how negative or maladaptive schemas can knock us down, undermine our self-esteem, and make it hard to use our strengths.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Examples of Negative Schemas</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<bl>
						<li>I must be perfect to be accepted.</li>
						<li>I’m a fake.</li>
						<li>If I choose to do something, I must succeed.</li>
						<li>Without a woman (man), I’m nothing.</li>
						<li>I can never be comfortable around others.</li>
						<li>The world is too frightening for me.</li>
						</bl>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>We’ll learn about the relationship between automatic thoughts and schemas.</p>
						`,
          },
        ],
      },
      {
        title: 'Schemas and Automatic Thoughts',
        unitNo: '4',
        subtitle: '',
        content: [
          {
            type: 'video',
            videos: {
              1: {
                id: '1540744599001',
                poster: '/gda/content/posters/rushing-l7-u4.jpg',
                src: `${GDA_VIDEOS}1540744599001` + `.mp4`,
              },
              2: {
                id: '1824567922001',
                poster: '/gda/content/posters/wright-l7-u4.jpg',
                src: `${GDA_VIDEOS}1824567922001` + `.mp4`,
              },
            },
          },
          {
            type: 'text',
            html: `
						<p>Learn how schemas act as the core beliefs that drive our automatic thoughts.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Dig Below Your Automatic Thoughts to Find Schemas</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Because schemas are the underlying beliefs or rules that govern our thinking, they are at the root of the automatic thoughts that occur in daily life.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>We’ll learn from Lisa and Ben how schemas influence automatic thoughts.</p>
						`,
          },
        ],
      },
      {
        title: "An Example from Lisa's Life",
        unitNo: '5',
        subtitle: '',
        content: [
          {
            type: 'video',
            videos: {
              1: {
                id: '1540739163001',
                poster: '/gda/content/posters/rushing-l7-u5.jpg',
                src: `${GDA_VIDEOS}1540739163001` + `.mp4`,
              },
              2: {
                id: '1824567420001',
                poster: '/gda/content/posters/wright-l7-u5.jpg',
                src: `${GDA_VIDEOS}1824567420001` + `.mp4`,
              },
            },
          },
          {
            type: 'text',
            html: `
						<p>Check out this illustration of a schema that was causing problems for Lisa.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Identifying Lisa's Schema</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Lisa didn’t realize it at the time, but an underlying schema was behind her negative automatic thoughts. See if you can spot the schema that was giving Lisa trouble.</p>
						`,
          },
        ],
        quizzes: [
          {
            quiz_id: 68,
            title: "A schema that might explain Lisa's automatic thoughts would be:",
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 223,
                name: 'The world is a dangerous place.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 224,
                name: "No matter what I do, I'll never succeed.",
                correct: true,
                selected_text:
                  "You're on target! Because she believes \"No matter what I do, I'll never succeed,\" Lisa responded in a negatively distorted way to Ben's criticism. Her automatic thoughts are all about failure – the basic theme of the underlying schema.",
                unselected_text:
                  'Because she believes "No matter what I do, I\'ll never succeed," Lisa responded in a negatively distorted way to Ben\'s criticism. Her automatic thoughts are all about failure – the basic theme of the underlying schema.',
              },
              {
                quiz_option_id: 225,
                name: "I'm ugly.",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 226,
                name: "I'm unlovable.",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
        ],
      },
      {
        title: 'Another Example of a Negative Schema',
        unitNo: '6',
        subtitle: '',
        content: [
          {
            type: 'video',
            videos: {
              1: {
                id: '1540644767001',
                poster: '/gda/content/posters/rushing-l7-u6.jpg',
                src: `${GDA_VIDEOS}1540644767001` + `.mp4`,
              },
              2: {
                id: '1540644767001',
                poster: '/gda/content/posters/wright-l7-u6.jpg',
                src: `${GDA_VIDEOS}1540644767001` + `.mp4`,
              },
            },
          },
          {
            type: 'text',
            html: `
						<p>This scene from earlier in the program also illustrates how schemas influence automatic thoughts. See if you can spot the schema that influenced Lisa’s reactions to her boss.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Can you help Lisa identify her underlying schema?</p>
						`,
          },
        ],
        quizzes: [
          {
            quiz_id: 69,
            title: "A schema that might explain Lisa's automatic thoughts would be:",
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 227,
                name: "If I'm not perfect, I'm a failure.",
                correct: true,
                selected_text:
                  "Good job. This schema is an example of an underlying belief that is hypercritical and overly demanding. If Lisa can't perform at her usual perfectionistic standard, then she believes that she's a total failure.",
                unselected_text:
                  "This schema is an example of an underlying belief that is hypercritical and overly demanding. If Lisa can't perform at her usual perfectionistic standard, then she believes that she's a total failure.",
              },
              {
                quiz_option_id: 228,
                name: 'They can knock me down, but not out.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 229,
                name: "I'm stupid.",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 230,
                name: "I can't trust others.",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
        ],
      },
      {
        title: 'Finding Schemas',
        unitNo: '7',
        subtitle: '',
        content: [
          {
            type: 'text',
            html: `
						<p>Underlying negative schemas set us up for trouble when we receive criticism or have difficulty performing up to our standards.</p>
						<p>Schemas are often absolute, demanding, or hypercritical.</p>
						`,
          },
          {
            type: 'video',
            videos: {
              1: {
                id: '1540723920001',
                poster: '/gda/content/posters/rushing-l7-u7.jpg',
                src: `${GDA_VIDEOS}1540723920001` + `.mp4`,
              },
              2: {
                id: '1824572352001',
                poster: '/gda/content/posters/wright-l7-u7.jpg',
                src: `${GDA_VIDEOS}1824572352001` + `.mp4`,
              },
            },
          },
          {
            type: 'text',
            html: `
						<p>Get some tips on how to find your underlying schemas.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>The next series of questions will help you  find the schemas driving your automatic thoughts. This section may be more challenging than other portions of the program.</p>
						<p>But don’t worry if it seems difficult to spot the schemas at first.</p>
						<p>With practice, you’ll learn many ways to change your schemas.</p>	
					`,
          },
        ],
        quizzes: [
          {
            quiz_id: 70,
            title: 'Which Schema Likely Underlies These Automatic Thoughts?',
            subtitle: '"I don\'t measure up... I have to turn things around soon... No one will want me."',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 231,
                name: "If I don't have a woman/man, I'm nothing.",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 232,
                name: "I'm a survivor.",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 233,
                name: 'To be accepted, I must be successful in everything I do.',
                correct: true,
                selected_text:
                  'Correct! The schema "To be accepted, I must be successful in everything I do" can drive automatic thoughts about not being wanted unless performance is at the highest level. This schema is so rigid and demanding that it can set a person up for trouble when things don\'t go as well as planned.',
                unselected_text:
                  'The schema "To be accepted, I must be successful in everything I do" can drive automatic thoughts about not being wanted unless performance is at the highest level. This schema is so rigid and demanding that it can set a person up for trouble when things don\'t go as well as planned.',
              },
              {
                quiz_option_id: 234,
                name: "I'm stupid.",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 235,
                name: 'I can solve lots of problems, if I put my mind to it.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 71,
            title: 'Which Schema Likely Underlies These Automatic Thoughts?',
            subtitle: '"I\'m doing O.K. now... Her coldness doesn\'t hurt as much."',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 236,
                name: "If I don't have a woman/man, I'm nothing.",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 237,
                name: "I'm a survivor.",
                correct: true,
                selected_text:
                  'Nice work. You\'re learning how to spot underlying schemas. The core belief, "I\'m a survivor," would be likely to encourage positive thoughts such as "I\'m doing OK now... Her coldness doesn\'t hurt as much."',
                unselected_text:
                  'The core belief, "I\'m a survivor," would be likely to encourage positive thoughts such as "I\'m doing OK now... Her coldness doesn\'t hurt as much."',
              },
              {
                quiz_option_id: 238,
                name: 'To be accepted, I must be successful in everything I do.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 239,
                name: "I'm stupid.",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 240,
                name: 'I can solve lots of problems, if I put my mind to it.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 72,
            title: 'Which Schema Likely Underlies These Automatic Thoughts?',
            subtitle:
              "\"She's down on me... It's just a matter of time before she leaves... I'll fall apart...My life will be ruined.\"",
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 241,
                name: "If I don't have a woman/man, I'm nothing.",
                correct: true,
                selected_text:
                  '"If I don\'t have a woman/man, I\'m nothing" is a very common core belief. If you had this type of schema and experienced relationship problems, you might have automatic thoughts such as these.',
                unselected_text:
                  '"If I don\'t have a woman/man, I\'m nothing" is a very common core belief. If you had this type of schema and experienced relationship problems, you might have automatic thoughts such as these.',
              },
              {
                quiz_option_id: 242,
                name: "I'm a survivor.",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 243,
                name: 'To be accepted, I must be successful in everything I do.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 244,
                name: "I'm stupid.",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 245,
                name: 'I can solve lots of problems, if I put my mind to it.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 73,
            title: 'Which Schema Likely Underlies These Automatic Thoughts?',
            subtitle: '"I messed up again... Everybody else does things the right way... They all know I\'m a loser."',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 246,
                name: "If I don't have a woman/man, I'm nothing.",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 247,
                name: "I'm a survivor.",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 248,
                name: 'To be accepted, I must be successful in everything I do.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 249,
                name: "I'm stupid.",
                correct: true,
                selected_text:
                  'You\'re right! If you had the negative schema "I\'m stupid," you could have many negative automatic thoughts about messing up or thinking that other people are more intelligent or better than you.',
                unselected_text:
                  'If you had the negative schema "I\'m stupid," you could have many negative automatic thoughts about messing up or thinking that other people are more intelligent or better than you.',
              },
              {
                quiz_option_id: 250,
                name: 'I can solve lots of problems, if I put my mind to it.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 74,
            title: 'Which Schema Likely Underlies These Automatic Thoughts?',
            subtitle: "Times are tough, but I think I can manage... Just buckle down and you'll get through.",
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 251,
                name: "If I don't have a woman/man, I'm nothing.",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 252,
                name: "I'm a survivor.",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 253,
                name: 'To be accepted, I must be successful in everything I do.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 254,
                name: "I'm stupid.",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 255,
                name: 'I can solve lots of problems, if I put my mind to it.',
                correct: true,
                selected_text:
                  'You\'re doing well with this exercise. Positive schemas such as "I can solve lots of problems, if I put my mind to it" can stimulate healthy responses to difficult or stressful situations. In this example, the positive schema produced adaptive automatic thoughts such as "Times are tough, but I think I can manage."',
                unselected_text:
                  'Positive schemas such as "I can solve lots of problems, if I put my mind to it" can stimulate healthy responses to difficult or stressful situations. In this example, the positive schema produced adaptive automatic thoughts such as "Times are tough, but I think I can manage."',
              },
            ],
          },
        ],
      },
      {
        title: 'Identifying Positive and Negative Schemas',
        unitNo: '8',
        subtitle: '',
        content: [
          {
            type: 'title',
            html: `
						<h3>Finding Schemas</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>In the next exercise, you’ll create a Personal List of Negative Schemas. Then you’ll develop a Personal List of Positive Schemas.</p>
						<p>These lists should help you work on:</p>
						<ol>
						<li>modifying the core beliefs that are causing trouble, and</li>
						<li>using positive schemas to your advantage.</li>
						</ol>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Identifying Negative Schemas</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>To find core beliefs to add to your Personal List of Negative Schemas, you can look for patterns of automatic thoughts.</p>
						<p>Another way of finding schemas is to think back to the time that you were growing up to remember strong beliefs or attitudes that you acquired along the way.</p>
						<p>It also could be helpful to look at a checklist of commonly held core beliefs.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Identifying Positive Schemas</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>All of us have positive schemas about our strengths and our capacities to manage the challenges of life. When people are depressed, they often have trouble recognizing their positive or adaptive schemas.</p>
						<p>If you can spot some of these healthy core beliefs and let them give you direction, you’ll probably have improved self-esteem and you will gain power against depression and anxiety.</p>
						<p>So, be sure to take time to generate a Personal List of Positive Schemas.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Let’s get going with generating your schema lists. These lists will help you stay on target for making changes that will work.</p>
						`,
          },
        ],
        practices: [
          { practiceId: 10, reviewNo: 1 },
          { practiceId: 11, reviewNo: 2 },
        ],
      },
      {
        title: 'How to Modify Schemas',
        unitNo: '9',
        subtitle: '',
        content: [
          {
            type: 'text',
            html: `
						<p>Nice work on creating your schema lists.</p>
						<p>People have a tendency to forget about their schemas, even when these core beliefs are having a powerful influence on feelings and behavior. Thus, we strongly recommend you review your schema lists on a regular basis. You can find your personal schema lists in the Practice section of Good Days Ahead.</p>
						<p>Let’s move on to learn how to modify schemas.</p>
						`,
          },
          {
            type: 'video',
            videos: {
              1: {
                id: '1549157384001',
                poster: '/gda/content/posters/rushing-l7-u9.jpg',
                src: `${GDA_VIDEOS}1549157384001` + `.mp4`,
              },
              2: {
                id: '1824572351001',
                poster: '/gda/content/posters/wright-l7-u9.jpg',
                src: `${GDA_VIDEOS}1824572351001` + `.mp4`,
              },
            },
          },
          {
            type: 'title',
            html: `
						<h3>Three Ways You Can Modify Schemas</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<bl>
						<li>Examining the evidence</li>
						<li>Finding alternatives</li>
						<li>Listing advantages and disadvantages</li>
						</bl>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>To prepare for some practice on modifying schemas, let’s review background information on Lisa.</p>
						`,
          },
        ],
      },
      {
        title: 'Background Information on Lisa',
        unitNo: '10',
        subtitle: '',
        content: [
          {
            type: 'video',
            videos: {
              1: {
                id: '1549182154001',
                poster: '/gda/content/posters/rushing-l7-u10.jpg',
                src: `${GDA_VIDEOS}1549182154001` + `.mp4`,
              },
              2: {
                id: '1824572349001',
                poster: '/gda/content/posters/wright-l7-u10.jpg',
                src: `${GDA_VIDEOS}1824572349001` + `.mp4`,
              },
            },
          },
          {
            type: 'title',
            html: `
						<h3>A Negative Schema Starts in Childhood</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>You will probably remember from previous lessons that Lisa is a very competent person. She’s balanced a good family life with a successful career. However, she has some underlying thoughts that set her up for depression.</p>
						<p>Even during early childhood, Lisa thought that she didn’t quite “measure up.”</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Lisa's Upbringing</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Lisa’s mother and father were hard working people who demanded much from themselves and expected their children to make the most out of their lives. They gave Lisa lots of positive feedback. However, they also let her know when she wasn’t doing her best. Lisa began to believe that any mistake or any lack of achievement meant that she had failed her parents.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>High Expectations</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Lisa is trying to do her best in her multiple roles of wife, mother, and worker. She also wants to be a good friend and involved in her community. On top of all this, her husband Ben has perfectionist and demanding attitudes that are similar to the ones held by Lisa’s parents.</p>
						<p>Everything can go along fairly well until Lisa can’t perform at the level that she expects of herself. Then her underlying beliefs about being a failure come to the surface, and she starts to become depressed.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>What Lisa Needs to Do</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Lisa needs to recognize that she can change her unrealistic standards and her belief that she has failed. Although her parents and her husband have always had high expectations, they certainly don’t see Lisa as a failure if she doesn’t reach perfection. They can be hypercritical, but they also give Lisa a great deal of support.</p>
						<p>One of the most important things that Lisa can do to change her negative schema is to alter the absolute quality of her maladaptive belief. She’s made mistakes like everyone else, but this doesn’t mean she’s a failure.</p>
						<p>Lisa needs to accept that her strengths as a wife, mother, and worker indicate that she’s not a failure – even if she doesn’t reach “perfection.”</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Let’s learn how to examine the evidence for schemas.</p>
						`,
          },
        ],
      },
      {
        title: 'Examining the Evidence for Schemas',
        unitNo: '11',
        subtitle: '',
        content: [
          {
            type: 'text',
            html: `
						<p>The next step involves trying to act like a scientist. You treat the schema like a theory – an idea that may or may not be true. Your job is to collect as much evidence as you can to prove or disprove the theory. Try to be creative and keep an open mind.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Identifying Cognitive Errors</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Most of the time you should be able to find evidence that will help you disprove or modify negative schemas. However, you also may find evidence that seems to support (at least at first) a schema that is giving you trouble.</p>
						<p>Sometimes the evidence that appears to back a dysfunctional schema is actually false evidence. So you will need to use what you know about cognitive errors to check out your evidence.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>After Correcting for Cognitive Errors...</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>You may still find evidence that seems true for a negative schema. If this situation occurs, try the following:</p>
						<ol>
						<li><strong>Balance the evidence for and against the schema.</strong>. Usually there is enough evidence against the negative schema to justify modifications.</li>
						<li><strong>Identify things about yourself that you would like to change.</strong>. Take a problem solving attitude instead of putting yourself down. Cognitive therapy procedures such as the step-by-step approach can help you act differently.</li>
						<li>If you’re involved in cognitive therapy or other professional counseling, <strong>ask your therapist to suggest ways to change</strong> both your schemas and your behavior.</li>
						</ol>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>In the next series of questions, you will be asked to note whether a statement provides “Evidence For” or “Evidence Against” a core belief.</p>
						<p>At first, making these choices may seem tricky. You’ll be selecting positive statements that are evidence against a negative schema. Try to concentrate on the statements, and before long you’ll be making good progress with examining the evidence.</p>
						`,
          },
        ],
        quizzes: [
          {
            quiz_id: 75,
            title: 'Examine the Evidence for the Schema: "If I\'m Not Perfect, I\'m a Failure."',
            subtitle:
              "Does the following statement \"I've made mistakes before that haven't led to failure\" support Lisa's schema (Evidence For), or does it help disprove her schema (Evidence Against)?",
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 256,
                name: 'Evidence For',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 257,
                name: 'Evidence Against',
                correct: true,
                selected_text:
                  "You chose the correct response. Part of building healthy self-esteem is learning to accept some of the mistakes we've made while giving ourselves due credit for our positive contributions.",
                unselected_text:
                  "Part of building healthy self-esteem is learning to accept some of the mistakes we've made while giving ourselves due credit for our positive contributions.",
              },
            ],
          },
          {
            quiz_id: 76,
            title: 'Examine the Evidence for the Schema: "If I\'m Not Perfect, I\'m a Failure."',
            subtitle:
              'Does the following statement "Having flaws doesn\'t make you a failure" support Lisa\'s schema (Evidence For), or does it help disprove her schema (Evidence Against)?',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 258,
                name: 'Evidence For',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 259,
                name: 'Evidence Against',
                correct: true,
                selected_text:
                  'That\'s right. We all have flaws or things we can\'t do as well as others. Everyone would be a "failure" if we each had to reach perfection to achieve success.',
                unselected_text:
                  'We all have flaws or things we can\'t do as well as others. Everyone would be a "failure" if we each had to reach perfection to achieve success.',
              },
            ],
          },
          {
            quiz_id: 77,
            title: 'Examine the Evidence for the Schema: "If I\'m Not Perfect, I\'m a Failure."',
            subtitle:
              'Does the following statement "Others may judge me by perfectionist standards" support Lisa\'s schema (Evidence For), or does it help disprove her schema (Evidence Against)?',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 260,
                name: 'Evidence For',
                correct: true,
                selected_text:
                  "You got it. It could be true that others judge Lisa by perfectionistic standards. However, she may be using cognitive errors such as magnifying or ignoring the evidence in finding support for this schema. Even if other people have very high standards it doesn't mean that they think Lisa is a \"failure\" if she doesn't reach perfection. Also, it's possible that other people judge her less harshly than she thinks. This is an example of evidence that at first seems to support a negative schema. This type of evidence can appear much weaker after you take a close look at it.",
                unselected_text:
                  "It could be true that others judge Lisa by perfectionistic standards. However, she may be using cognitive errors such as magnifying or ignoring the evidence in finding support for this schema. Even if other people have very high standards it doesn't mean that they think Lisa is a \"failure\" if she doesn't reach perfection. Also, it's possible that other people judge her less harshly than she thinks. This is an example of evidence that at first seems to support a negative schema. This type of evidence can appear much weaker after you take a close look at it.",
              },
              {
                quiz_option_id: 261,
                name: 'Evidence Against',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 78,
            title: 'Examine the Evidence for the Schema: "If I\'m Not Perfect, I\'m a Failure."',
            subtitle:
              'Does the following statement "It\'s human to make mistakes" support Lisa\'s schema (Evidence For), or does it help disprove her schema (Evidence Against)?',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 262,
                name: 'Evidence For',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 263,
                name: 'Evidence Against',
                correct: true,
                selected_text:
                  'Yes. It could help Lisa to recognize that we are all in the same boat in making mistakes in life.',
                unselected_text:
                  'It could help Lisa to recognize that we are all in the same boat in making mistakes in life.',
              },
            ],
          },
          {
            quiz_id: 79,
            title: 'Examine the Evidence for the Schema: "If I\'m Not Perfect, I\'m a Failure."',
            subtitle:
              'Does the following statement "I wasn\'t a perfect child, and my parents still love me" support Lisa\'s schema (Evidence For), or does it help disprove her schema (Evidence Against)?',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 264,
                name: 'Evidence For',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 265,
                name: 'Evidence Against',
                correct: true,
                selected_text:
                  "That's right. Lisa could think back over her life to see positive evidence that she has been accepted without having to achieve perfection.",
                unselected_text:
                  'Lisa could think back over her life to see positive evidence that she has been accepted without having to achieve perfection.',
              },
            ],
          },
          {
            quiz_id: 80,
            title: 'Examine the Evidence for the Schema: "If I\'m Not Perfect, I\'m a Failure."',
            subtitle:
              'Does the following statement "I can feel like a failure if I make small mistakes or I don\'t meet my goals" support Lisa\'s schema (Evidence For), or does it help disprove her schema (Evidence Against)?',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 266,
                name: 'Evidence For',
                correct: true,
                selected_text:
                  "That's right. Although feeling like a \"failure\" doesn't mean you are one, Lisa recognizes that this schema will be hard to shake. At least for the time being, she'll probably have thoughts of failure when she doesn't perform up to her usual standards. Lisa needs to work on ways of coping with her shortcomings without beating herself up.",
                unselected_text:
                  "Although feeling like a \"failure\" doesn't mean you are one, Lisa recognizes that this schema will be hard to shake. At least for the time being, she'll probably have thoughts of failure when she doesn't perform up to her usual standards. Lisa needs to work on ways of coping with her shortcomings without beating herself up.",
              },
              {
                quiz_option_id: 267,
                name: 'Evidence Against',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 81,
            title: 'Examine the Evidence for the Schema: "If I\'m Not Perfect, I\'m a Failure."',
            subtitle:
              'Does the following statement "I haven\'t been a perfect mother, but I still have a good relationship with my children" support Lisa\'s schema (Evidence For), or does it help disprove her schema (Evidence Against)?',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 268,
                name: 'Evidence For',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 269,
                name: 'Evidence Against',
                correct: true,
                selected_text:
                  "Correct. Having a good relationship with her children, is strong evidence that Lisa isn't a failure. When you examine the evidence, it can help to look at many different areas of your life, including your relationships, to see if absolute statements such as \"If I'm not perfect, I'm a failure\" are true.",
                unselected_text:
                  "Having a good relationship with her children, is strong evidence that Lisa isn't a failure. When you examine the evidence, it can help to look at many different areas of your life, including your relationships, to see if absolute statements such as \"If I'm not perfect, I'm a failure\" are true.",
              },
            ],
          },
          {
            quiz_id: 82,
            title: 'Examine the Evidence for the Schema: "If I\'m Not Perfect, I\'m a Failure."',
            subtitle:
              'Does the following statement "Basically, I\'m a solid person" support Lisa\'s schema (Evidence For), or does it help disprove her schema (Evidence Against)?',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 270,
                name: 'Evidence For',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 271,
                name: 'Evidence Against',
                correct: true,
                selected_text:
                  "You're making excellent progress with examining the evidence. If Lisa can recognize and give herself credit for her positives, the schema about perfectionism and failure will probably lose power.",
                unselected_text:
                  'If Lisa can recognize and give herself credit for her positives, the schema about perfectionism and failure will probably lose power.',
              },
            ],
          },
        ],
      },
      {
        title: 'Examining the Evidence for Schemas',
        unitNo: '12',
        subtitle: '',
        content: [
          {
            type: 'title',
            html: `
						<h3>Nice Work!</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>You’ve done a fine job with examining the evidence. Here’s a summary of the exercise.</p>
						`,
          },
          {
            type: 'image',
            images: {
              src: '/gda/images/lesson-7-unit-12.png',
              alt: 'lesson-7-unit-12 Image',
            },
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Let’s go on to another method of changing schemas – listing advantages and disadvantages.</p>
						`,
          },
        ],
      },
      {
        title: 'Advantages and Disadvantages of Schemas',
        unitNo: '13',
        subtitle: '',
        content: [
          {
            type: 'title',
            html: `
						<h3>Many Schemas Have Both Advantages and Disadvantages</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>For example, let’s look at the schema: “If I choose to do something, I must succeed”.</p>
				
						<p><strong>Advantages</strong>:</p>
						<bl>
						<li>making you work very hard.</li>
						<li>possibly increasing the chances of “success.”</li>
						</bl>
		
						<p><strong>Disadvantages</strong>:</p>
						<bl>
						<li>making you feel like a failure if you don’t have complete success at everything you do.</li>
						<li>making you shy away from trying new things when you are not sure of success.</li>
						</bl>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Dealing with Extremely Negative Schemas</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Some schemas are so completely negative that it is hard to imagine that they have any advantages. Examples of these types of schemas include: “I’m a fake” or “Nobody could ever love me.”</p>
						<p>However, the listing advantages and disadvantages exercise can be helpful even when negative schemas do not have any advantages. In this situation, the exercise shows you where the schema is causing trouble. Knowing this information is an important step in planning for change.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>How this Exercise Works</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>The listing advantages and disadvantages technique involves writing down a schema and then listing advantages and disadvantages in two different columns.</p>
						<p>To do this exercise, try to think of:</p>
						<bl>
						<li>any benefits this schema might provide</li>
						<li>any downsides this schema has for you.</li>
						</bl>
						<p>It works best if you try to be as creative and open in your thinking as possible. Put down any thoughts that come to mind.</p>
						<p>The more ideas you generate, the more likely you are to understand the full impact of your schemas.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>You’ll have the chance to list advantages and disadvantages of your personal schemas later in the program. First let’s practice using this technique on Lisa’s schema “If I’m not perfect, I’m a failure.”</p>
						`,
          },
        ],
        quizzes: [
          {
            quiz_id: 83,
            title: 'Listing the Advantages and Disadvantages of "If I\'m Not Perfect, I\'m a Failure."',
            subtitle: 'Is the statement "I set impossible standards" an advantage or disadvantage?',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 272,
                name: 'Advantage',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 273,
                name: 'Disadvantage',
                correct: true,
                selected_text:
                  "That's right. This schema can make you set your standards so high that you are almost always unhappy with yourself. Wouldn't it be better to have a schema that would encourage hard efforts without requiring perfection?",
                unselected_text:
                  "This schema can make you set your standards so high that you are almost always unhappy with yourself. Wouldn't it be better to have a schema that would encourage hard efforts without requiring perfection?",
              },
            ],
          },
          {
            quiz_id: 84,
            title: 'Listing the Advantages and Disadvantages of "If I\'m Not Perfect, I\'m a Failure."',
            subtitle: 'Is the statement "I feel terrible if I fall short of my goals" an advantage or disadvantage?',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 274,
                name: 'Advantage',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 275,
                name: 'Disadvantage',
                correct: true,
                selected_text:
                  "That's the right answer. Feeling terrible is a clear disadvantage of having a schema that requires perfection.",
                unselected_text:
                  'Feeling terrible is a clear disadvantage of having a schema that requires perfection.',
              },
            ],
          },
          {
            quiz_id: 85,
            title: 'Listing the Advantages and Disadvantages of "If I\'m Not Perfect, I\'m a Failure."',
            subtitle: 'Is the statement "Perfectionism drives me to work very hard" an advantage or disadvantage?',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 276,
                name: 'Advantage',
                correct: true,
                selected_text:
                  "Nice job. You've recognized a possible advantage of this schema. Can you think of possible ways to modify the schema and still hold on to its positive features?",
                unselected_text:
                  'Being driven to work very hard might be a possible advantage. Can you think of possible ways to modify the schema and still hold on to its positive features?',
              },
              {
                quiz_option_id: 277,
                name: 'Disadvantage',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 86,
            title: 'Listing the Advantages and Disadvantages of "If I\'m Not Perfect, I\'m a Failure."',
            subtitle: 'Is the statement "I drive myself too hard" an advantage or disadvantage?',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 278,
                name: 'Advantage',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 279,
                name: 'Disadvantage',
                correct: true,
                selected_text:
                  "You're on target with this one. People who have schemas about perfectionism often drive themselves so hard that they suffer from excessive tension and stress.",
                unselected_text:
                  'People who have schemas about perfectionism often drive themselves so hard that they suffer from excessive tension and stress.',
              },
            ],
          },
          {
            quiz_id: 87,
            title: 'Listing the Advantages and Disadvantages of "If I\'m Not Perfect, I\'m a Failure."',
            subtitle: 'Is the statement "I\'ve had success in many things" an advantage or disadvantage?',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 280,
                name: 'Advantage',
                correct: true,
                selected_text:
                  "Yes. You've correctly identified a possible advantage of this schema. But success can come at a price if perfectionism goes unchecked. When we work on modifying schemas, we'll ask you to think of possible ways to change schemas so that the advantages can be retained while the disadvantages can be minimized.",
                unselected_text:
                  "Although you didn't choose the correct response this time, you'll have plenty of other chances to consider advantages and disadvantages of schemas.",
              },
              {
                quiz_option_id: 281,
                name: 'Disadvantage',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 88,
            title: 'Listing the Advantages and Disadvantages of "If I\'m Not Perfect, I\'m a Failure."',
            subtitle:
              'Is the statement "I get tense and don\'t enjoy myself like I should" an advantage or disadvantage?',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 282,
                name: 'Advantage',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 283,
                name: 'Disadvantage',
                correct: true,
                selected_text:
                  "This is another example of a disadvantage of Lisa's perfectionistic schema. Because she always has to perform at such high standards, she has trouble relaxing and enjoying her life as it is.",
                unselected_text:
                  "This is another example of a disadvantage of Lisa's perfectionistic schema. Because she always has to perform at such high standards, she has trouble relaxing and enjoying her life as it is.",
              },
            ],
          },
          {
            quiz_id: 89,
            title: 'Listing the Advantages and Disadvantages of "If I\'m Not Perfect, I\'m a Failure."',
            subtitle: 'Is the statement "I stretch to reach high goals and standards" an advantage or disadvantage?',
            instruction: '',
            options: [
              {
                quiz_option_id: 284,
                name: 'Advantage',
                correct: true,
                selected_text:
                  "Good job. You've recognized another potential positive of Lisa's schema. Are you starting to think of some of your own schemas that may have both positive and negative features?",
                unselected_text:
                  "This statement is actually another potential positive of Lisa's schema. Are you starting to think of some of your own schemas that may have both positive and negative features?",
              },
              {
                quiz_option_id: 285,
                name: 'Disadvantage',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 90,
            title: 'Listing the Advantages and Disadvantages of "If I\'m Not Perfect, I\'m a Failure."',
            subtitle: 'Is the statement "I get irritable when I push myself to extremes" an advantage or disadvantage?',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 286,
                name: 'Advantage',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 287,
                name: 'Disadvantage',
                correct: true,
                selected_text:
                  "This schema can make Lisa push herself to the point that she becomes irritable and short-tempered around others. It's important to recognize that our maladaptive schemas can have negative effects on our relationships. But, if we change our schemas we can become more comfortable with ourselves and improve how we get along with friends, family and co-workers.",
                unselected_text:
                  "This schema can make Lisa push herself to the point that she becomes irritable and short-tempered around others. It's important to recognize that our maladaptive schemas can have negative effects on our relationships. But, if we change our schemas we can become more comfortable with ourselves and improve how we get along with friends, family and co-workers.",
              },
            ],
          },
        ],
      },
      {
        title: 'Advantages and Disadvantages of Schemas',
        unitNo: '14',
        subtitle: '',
        content: [
          {
            type: 'title',
            html: `
						<h3>You're Making Good Progress</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>You seem to be really catching on to the methods of changing schemas. Here’s a summary of the results of this exercise.</p>
						`,
          },
          {
            type: 'image',
            images: {
              src: '/gda/images/lesson-7-unit-14-2.png',
              alt: 'lesson-7-unit-14-2 Image',
            },
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>We’ll learn how to develop realistic alternatives to negative schemas.</p>
						`,
          },
        ],
      },
      {
        title: 'Developing Alternative Schemas',
        unitNo: '15',
        subtitle: '',
        content: [
          {
            type: 'text',
            html: `
						<p>The procedure for developing alternative schemas involves trying to think of possible modifications of a schema that would make it more adaptive (or helpful) for you.</p>
						<p>You could start with noting a few modifications that require only some minor changes of the schema. Then you could list other alternatives that have moderate levels of change. Finally, you could write out new schemas that depart dramatically from the old ones.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Keeping an Open Mind</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>The most important thing that you can do to develop alternative schemas is to keep an open mind. Because you’ve believed your old schemas to be absolutely true, you have followed them blindly no matter where they have taken you. The list of alternative schemas is your chance to experiment with new ideas that can make a real difference in how you think and feel.</p>
						<p>After you develop a list of alternative schemas, you can start to check them out to see if any of them make more sense than the old ones. New schemas need to be practiced regularly in order to make them a permanent part of your thinking.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>We’ll give you some tips for finding rational alternatives to maladaptive schemas. You can review the tips anytime in the Practice section of Good Days Ahead.</p>
						`,
          },
        ],
      },
      {
        title: 'Finding Alternatives to Negative Schemas',
        unitNo: '16',
        subtitle: '',
        content: [
          {
            type: 'text',
            html: `
						<p>These tips are adapted with permission from:</p>

						<strong>Breaking Free from Depression: Pathways to Wellness</strong> by<br>
						Jesse H. Wright, M.D., Ph.D. and Laura Wright McCray, M.D.
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Spot "If-Then Statements"</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Do you have any schemas that are “if-then” rules? Some examples are “If people knew me, they wouldn’t like me… If I choose to do something, I must do it perfectly… Without a man, I’m a failure… If I take on a task, I probably won’t finish it.”</p>
						<p>Can you see the problem with “if-then” rules? If the first part of the statement occurs, then you can be trapped into responding in ways that erode your self-esteem and interfere with positive coping.</p>
						<p>Try to recognize any of your “if-then” rules that could be changed as you move forward on your path to wellness.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Identify Extremes in Thinking</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>If your negatively toned schemas contain absolute words such as “never,” “must,” “can’t,” “everything,” or “always,” you will have excellent opportunities for making productive changes. Could you downtune the “all or none” quality of these statements?</p>
						<p>Perhaps changing a few words in a schema would make it a much more reasonable rule for guiding your life. For example, a change in the schema “I must always be in control” to “I would like to be in control in situations where control is very important” makes this rule more flexible and less absolute.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Think Towards the Future</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Try to imagine how your life might work out differently if you changed a schema. For example, if you had a schema about needing to always be in control and you could loosen the grip of this schema, what healthy changes might you see? How would your behavior change around your family and friends or your co-workers? Would you be less driven and tense? Could you enjoy life more? Would you put less strain on your physical health?</p>
						<p>There can be big payoffs in changing schemas. Thinking ahead to see positive outcomes can help you stay motivated to work on modifying core beliefs.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Learn from Others</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>If you are fortunate enough to have a good marriage or a long-standing relationship, you may be able to learn some new ways of thinking from this person.</p>
						<p>Or perhaps your children can teach you to see the world differently. How are your friends influencing your thinking? Take some time to talk with people you can trust to weigh the merits of possible changes in your rules of thinking.</p>
						<p>Others may be able to see potentials for change that are not apparent to you or can give you valuable feedback on some ideas that you are considering.</p>
						`,
          },
        ],
      },
      {
        title: 'Listing Alternative Schemas',
        unitNo: '17',
        subtitle: '',
        content: [
          {
            type: 'title',
            html: `
						<h3>Suggestions for Working with a List of Alternative Schemas</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<ol>
						<li>Try to <strong>write out multiple ideas for small changes</strong> instead of plans for just a few large ones. Your schemas have been with you a long time. It’s unlikely you will be able to make sweeping changes all at once. Also, some schemas may only need minor revisions to become more useful.</li>
						<li><strong>Avoid modifications that are clearly unrealistic.</strong> For example, you would be fooling yourself if you tried to change the schema “I’m stupid” to “I’m a genius.”</li>
						<li><strong>Review your list of alternative schemas on a regular basis.</strong> New ideas may come to mind.</li>
						<li>Think of different situations where you can apply modified schemas and then <strong>try out your new ideas in real life</strong>.</li>
						<li>When you find an alternative schema that works for you, <strong>practice it over and over</strong> until it becomes an “automatic” part of your thinking.</li>
						</ol>
					`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Before working on your own schemas, you can get some experience by helping Lisa develop alternatives to her schema about perfection.</p>
						`,
          },
        ],
        quizzes: [
          {
            quiz_id: 91,
            title: 'Evaluate Alternatives to the Schema:"If I\'m Not Perfect, I\'m a Failure."',
            subtitle: 'Is "Having flaws doesn\'t make you a failure" a good alternative schema for Lisa?',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 288,
                name: "Yes, it's a good alternative schema",
                correct: true,
                selected_text:
                  "Yes, that's right. Judging yourself a failure because of flaws or mistakes ignores the fact that all of us have imperfections. It helps to look at all the information before you come down too hard on yourself. Try to recognize your strengths and the many positive things that you have done.",
                unselected_text:
                  'Judging yourself a failure because of flaws or mistakes ignores the fact that all of us have imperfections. It helps to look at all the information before you come down too hard on yourself. Try to recognize your strengths and the many positive things that you have done.',
              },
              {
                quiz_option_id: 289,
                name: "No, it's not a good alternative schema",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 92,
            title: 'Evaluate Alternatives to the Schema:"If I\'m Not Perfect, I\'m a Failure."',
            subtitle: 'Is "I can work hard without trying to be perfect" a good alternative schema for Lisa?',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 290,
                name: "Yes, it's a good alternative schema",
                correct: true,
                selected_text:
                  'This is a useful revision because it challenges the linkage between working hard and trying to be "perfect." When you start to change schemas it\'s a good idea to make modifications that retain the valuable parts of the old belief. In this case the modified schema still promotes the adaptive trait of hard work. However, the new schema suggests that searching for perfection doesn\'t have to be the primary motivation for personal effort.',
                unselected_text:
                  'This is a useful revision because it challenges the linkage between working hard and trying to be "perfect." When you start to change schemas it\'s a good idea to make modifications that retain the valuable parts of the old belief. In this case the modified schema still promotes the adaptive trait of hard work. However, the new schema suggests that searching for perfection doesn\'t have to be the primary motivation for personal effort.',
              },
              {
                quiz_option_id: 291,
                name: "No, it's not a good alternative schema",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 93,
            title: 'Evaluate Alternatives to the Schema:"If I\'m Not Perfect, I\'m a Failure."',
            subtitle: 'Is "If I seek perfection, I\'ll be a better person" a good alternative schema for Lisa?',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 292,
                name: "Yes, it's a good alternative schema",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 293,
                name: "No, it's not a good alternative schema",
                correct: true,
                selected_text:
                  "You're right. This attempt at modifying the schema probably won't help. It's true that striving for perfection can have certain advantages (as you found out earlier), but this revision doesn't change Lisa's need to meet perfectionistic standards. How could she rewrite her schema so that it supports personal improvement but doesn't demand perfection?",
                unselected_text:
                  "This attempt at modifying the schema probably won't help. It's true that striving for perfection can have certain advantages (as you found out earlier), but this revision doesn't change Lisa's need to meet perfectionistic standards. How could she rewrite her schema so that it supports personal improvement but doesn't demand perfection?",
              },
            ],
          },
          {
            quiz_id: 94,
            title: 'Evaluate Alternatives to the Schema:"If I\'m Not Perfect, I\'m a Failure."',
            subtitle: 'Is "You can make mistakes and still reach your goals" a good alternative schema for Lisa?',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 294,
                name: "Yes, it's a good alternative schema",
                correct: true,
                selected_text:
                  "You're getting the idea. This statement modifies Lisa's schema in a positive direction. The revision tells her that she doesn't have to be perfect all the time to achieve success.",
                unselected_text:
                  "This statement modifies Lisa's schema in a positive direction. The revision tells her that she doesn't have to be perfect all the time to achieve success.",
              },
              {
                quiz_option_id: 295,
                name: "No, it's not a good alternative schema",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 95,
            title: 'Evaluate Alternatives to the Schema:"If I\'m Not Perfect, I\'m a Failure."',
            subtitle: 'Is "Don\'t set high standards" a good alternative schema for Lisa?',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 296,
                name: "Yes, it's a good alternative schema",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 297,
                name: "No, it's not a good alternative schema",
                correct: true,
                selected_text:
                  "You're on target. This modification is an example of going too far in altering a schema. It's doubtful that Lisa could give up all her high standards. Less extreme revisions of the schema are needed.",
                unselected_text:
                  "This modification is an example of going too far in altering a schema. It's doubtful that Lisa could give up all her high standards. Less extreme revisions of the schema are needed.",
              },
            ],
          },
          {
            quiz_id: 96,
            title: 'Evaluate Alternatives to the Schema:"If I\'m Not Perfect, I\'m a Failure."',
            subtitle: 'Is "I can set high standards but not require perfection" a good alternative schema for Lisa?',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 298,
                name: "Yes, it's a good alternative schema",
                correct: true,
                selected_text:
                  'Good job. You\'re choosing modifications that will give Lisa a more adaptive schema. Setting high standards doesn\'t mean that Lisa has to drive herself to reach "perfection."',
                unselected_text:
                  'This would be a helpful modification. Setting high standards doesn\'t mean that Lisa has to drive herself to reach "perfection."',
              },
              {
                quiz_option_id: 299,
                name: "No, it's not a good alternative schema",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 97,
            title: 'Evaluate Alternatives to the Schema:"If I\'m Not Perfect, I\'m a Failure."',
            subtitle:
              'Is "You can learn from your mistakes and end up a better person" a good alternative schema for Lisa?',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 300,
                name: "Yes, it's a good alternative schema",
                correct: true,
                selected_text:
                  'You got it. This revision stresses the healthy side of making mistakes. The new schema could help Lisa to take chances and not worry about always having everything "just right." It\'s hard to grow as a person if you\'re afraid of making mistakes.',
                unselected_text:
                  'This revision stresses the healthy side of making mistakes. The new schema could help Lisa to take chances and not worry about always having everything "just right." It\'s hard to grow as a person if you\'re afraid of making mistakes.',
              },
              {
                quiz_option_id: 301,
                name: "No, it's not a good alternative schema",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 98,
            title: 'Evaluate Alternatives to the Schema:"If I\'m Not Perfect, I\'m a Failure."',
            subtitle: 'Is "I can be a success no matter what I do" a good alternative schema for Lisa?',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 302,
                name: "Yes, it's a good alternative schema",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 303,
                name: "No, it's not a good alternative schema",
                correct: true,
                selected_text:
                  "You're right. Lisa would be fooling herself if she tried to adopt this belief. It's the opposite of her original schema \"If I'm not perfect, I'm a failure.\" This revision is unrealistic because it eliminates her need to perform at any level or to reach any goals to believe that she's succeeding.",
                unselected_text:
                  "Lisa would be fooling herself if she tried to adopt this belief. It's the opposite of her original schema \"If I'm not perfect, I'm a failure.\" This revision is unrealistic because it eliminates her need to perform at any level or to reach any goals to believe that she's succeeding.",
              },
            ],
          },
          {
            quiz_id: 99,
            title: 'Evaluate Alternatives to the Schema:"If I\'m Not Perfect, I\'m a Failure."',
            subtitle: 'Is "I can get more done if I don\'t worry about perfection" a good alternative schema for Lisa?',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 304,
                name: "Yes, it's a good alternative schema",
                correct: true,
                selected_text:
                  'Right again. Measuring your performance all the time takes a lot of energy. Also, worrying about doing things "just right" can make you tense and overly cautious. A better strategy is to set reasonable standards that will let you enjoy yourself, be creative, and reach your potential.',
                unselected_text:
                  'Measuring your performance all the time takes a lot of energy. Also, worrying about doing things "just right" can make you tense and overly cautious. A better strategy is to set reasonable standards that will let you enjoy yourself, be creative, and reach your potential.',
              },
              {
                quiz_option_id: 305,
                name: "No, it's not a good alternative schema",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 100,
            title: 'Evaluate Alternatives to the Schema:"If I\'m Not Perfect, I\'m a Failure."',
            subtitle:
              'Is "I can accept myself as I am but still work toward improvement" a good alternative schema for Lisa?',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 306,
                name: "Yes, it's a good alternative schema",
                correct: true,
                selected_text:
                  "That's right. This modification could help Lisa a great deal. She could start to like herself more, enjoy her current life to a much greater extent, and show self-confidence around others. At the same time, she could set realistic and meaningful goals for the future.",
                unselected_text:
                  'This modification could help Lisa a great deal. She could start to like herself more, enjoy her current life to a much greater extent, and show self-confidence around others. At the same time, she could set realistic and meaningful goals for the future.',
              },
              {
                quiz_option_id: 307,
                name: "No, it's not a good alternative schema",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
        ],
      },
      {
        title: 'Listing Alternative Schemas',
        unitNo: '18',
        subtitle: '',
        content: [
          {
            type: 'title',
            html: `
						<h3>Good Job!</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>You’re building excellent skills for overcoming depression and anxiety. The complete list of useful alternatives for Lisa’s schema is shown below.</p>
						`,
          },
          {
            type: 'image',
            images: {
              src: 'https://empower-content-resources.s3.amazonaws.com/uploads/content_resource/file/48/L7_Alternatives_1.jpg',
              alt: 'L7 alternatives 1',
            },
          },
          {
            type: 'title',
            html: `
						<h3>A Challenge with Great Rewards</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Although it can be challenging to identify and change negative schemas, the payoff can be big. If your schemas become more positive and adaptive, you will probably be much less depressed and anxious. And a healthy set of schemas can help you stay well once you achieve recovery.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>We’ll learn how to develop an action plan to put your revised schemas to work.</p>
						`,
          },
        ],
      },
      {
        title: 'Developing an Action Plan',
        unitNo: '19',
        subtitle: '',
        content: [
          {
            type: 'video',
            videos: {
              1: {
                id: '1540693591001',
                poster: '/gda/content/posters/rushing-l7-u19.jpg',
                src: `${GDA_VIDEOS}1540693591001` + `.mp4`,
              },
              2: {
                id: '1824567919001',
                poster: '/gda/content/posters/wright-l7-u19.jpg',
                src: `${GDA_VIDEOS}1824567919001` + `.mp4`,
              },
            },
          },
          {
            type: 'text',
            html: `
						<p>Developing an action plan is an important way to put your revised schemas to work.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>How to Develop an Action Plan</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>The three most important words in making effective changes in schemas are Practice, Practice, Practice. Because maladaptive schemas are often deeply held, you’ll need to repeatedly try out modified schemas in real-life situations to make these healthier core beliefs stick.</p>
				
						<p>These tips may help you create effective action plans to put revised schemas to work.</p>
						<bl>
						<li>Try to select specific, practical, and reasonable steps that you can take. </li> 
						<li>The self-help methods you learned in earlier lessons can help with putting changed core beliefs into action. For example, you could do a Thought Change Record. Or, you could use the step-by-step method to assist you with following a plan.</li> 
						<li>Take advantage of your strengths and your positive core beliefs in your action plans. You can review your Personal List of Positive Schemas (located in the Practice section) to get ideas.</li>
						<li>If you have difficulties in putting plans into action, try to give yourself credit for the efforts you are making instead of putting yourself down for not achieving your goal. It is difficult to change long-standing patterns of thinking and behaving.</li> 
						<li>Step back to think about how you might overcome barriers to successfully implementing an action plan. Then edit the plan to give it a better chance to work.</li>
						</bl>
						
						<p>Adapted from <strong>Breaking Free from Depression: Pathways to Wellness</strong> by Drs. Jesse H. Wright and Laura Wright McCray.<p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Getting Help with Your Schemas</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Professional therapy can be an especially effective way of uncovering and changing schemas. Cognitive therapists specialize in helping people develop a healthier thinking style. But other therapists also can assist you in modifying your schemas. If you have underlying rules of thinking that are giving you trouble, and you are not receiving professional therapy, it may be time to consider getting help.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Let’s start working on modifying some of your negative core beliefs and the schemas that are dragging you down and standing in the way of your happiness and well-being.</p>
						`,
          },
        ],
      },
      {
        title: 'Changing Your Own Schemas',
        unitNo: '20',
        subtitle: '',
        content: [
          {
            type: 'video',
            videos: {
              1: {
                id: '1540739161001',
                poster: '/gda/content/posters/rushing-l7-u20.jpg',
                src: `${GDA_VIDEOS}1540739161001` + `.mp4`,
              },
              2: {
                id: '1824572348001',
                poster: '/gda/content/posters/wright-l7-u20.jpg',
                src: `${GDA_VIDEOS}1824572348001` + `.mp4`,
              },
            },
          },
          {
            type: 'text',
            html: `
						<p>Are you ready to work on developing healthier schemas?</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>The next series of exercises will help you:<p>
						<bl>
						<li>Select a schema you want to change</li>
						<li>Examine the evidence</li>
						<li>List advantages and disadvantages</li>
						<li>Find rational alternatives</li>
						<li>Develop effective action plans to put the revised schemas to work</li>
						</bl>
						`,
          },
        ],
        practices: [{ practiceId: 12, reviewNo: 1 }],
      },
      {
        title: "Reviewing What You've Learned",
        unitNo: '21',
        subtitle: '',
        content: [
          {
            type: 'title',
            html: `
						<h3>Schemas: A Review</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Do you think you understand how to recognize and change schemas? Your answers to the review questions will help you target areas for future study.</p>
						<p>First we’ll practice identifying schemas in Lisa’s cognitions. Then we’ll go through a series of basic questions about modifying schemas.</p>
						`,
          },
          {
            type: 'video',
            videos: {
              1: {
                id: '1545603030001',
                poster: '/gda/content/posters/rushing-l7-u21.jpg',
                src: `${GDA_VIDEOS}1545603030001` + `.mp4`,
              },
              2: {
                id: '1545603030001',
                poster: '/gda/content/posters/wright-l7-u21.jpg',
                src: `${GDA_VIDEOS}1545603030001` + `.mp4`,
              },
            },
          },
          {
            type: 'text',
            html: `
						<p>Let’s go back to the scene where Lisa tries to organize her home office. Your job will be to try to find the underlying schemas that are influencing Lisa’s behavior.</p>
    				`,
          },
        ],
        quizzes: [
          {
            quiz_id: 101,
            title: "Pick the schema that is most likely to be operating in Lisa's situation:",
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 308,
                name: 'If I choose to do anything, I must succeed.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 309,
                name: 'I can handle anything.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 310,
                name: "I'm a loser.",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 311,
                name: 'To accomplish anything, I must be in control.',
                correct: true,
                selected_text:
                  'That\'s right! People who have schemas like "to accomplish anything, I must be in control" can have real problems when they get in situations where total control isn\'t possible. They may work too hard to always be in control, or they may give up trying if they believe that control is impossible.',
                unselected_text:
                  'People who have schemas like "to accomplish anything, I must be in control" can have real problems when they get in situations where total control isn\'t possible. They may work too hard to always be in control, or they may give up trying if they believe that control is impossible.',
              },
              {
                quiz_option_id: 312,
                name: "I'm a survivor.",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
        ],
      },
      {
        title: "Reviewing Schemas: Lisa's Examples",
        unitNo: '22',
        subtitle: '',
        content: [
          {
            type: 'title',
            html: `
						<h3>Do You Have Some Ideas for Positive Changes?</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>What kind of modifications do you think would help this schema become more functional?</p>
						<p>It would probably be a good idea to alter this schema to make it less absolute, while still placing some value on personal control.</p>
						`,
          },
          {
            type: 'video',
            videos: {
              1: {
                id: '1545587203001',
                poster: '/gda/content/posters/rushing-l7-u22.jpg',
                src: `${GDA_VIDEOS}1545587203001` + `.mp4`,
              },
              2: {
                id: '1545587203001',
                poster: '/gda/content/posters/wright-l7-u22.jpg',
                src: `${GDA_VIDEOS}1545587203001` + `.mp4`,
              },
            },
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
    				`,
          },
          {
            type: 'text',
            html: `
						<p>Now let’s see if you can identify a schema when Lisa has a healthier set of automatic thoughts.</p>
						`,
          },
        ],
        quizzes: [
          {
            quiz_id: 102,
            title: "Pick the schema that is most likely to be operating in Lisa's situation:",
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 313,
                name: "I'm a loser.",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 314,
                name: 'I can handle anything.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 315,
                name: 'I must be perfect to be accepted.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 316,
                name: 'I can handle most things, if I keep trying.',
                correct: true,
                selected_text:
                  "Way to go! You noticed that this adaptive schema could help Lisa keep trying even when things aren't going as well as expected.",
                unselected_text:
                  "This adaptive schema could help Lisa keep trying even when things aren't going as well as expected.",
              },
              {
                quiz_option_id: 317,
                name: "I'm a friendly person.",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
        ],
      },
      {
        title: 'Advantages of Finding Positive Schemas',
        unitNo: '23',
        subtitle: '',
        content: [
          {
            type: 'text',
            html: `
						<p>Recovery from depression or anxiety can be accelerated if you can recognize and use your positive schemas. Sometimes several adaptive schemas are involved with positive automatic thoughts.</p>
						<p>For example, schemas such as “I’m a solid person” or “I deserve to be respected for who I am” would help Lisa to be more accepting of herself as she works to recover from depression.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Did you enjoy trying to identify schemas in Lisa’s automatic thoughts?</p>
						<p>It looks like you are learning how to spot these types of cognitions. Let’s see how you do with some more review questions.</p>
						`,
          },
        ],
        quizzes: [
          {
            quiz_id: 103,
            title: 'A schema can be defined as:',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 318,
                name: 'A strong emotional experience.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 319,
                name: 'An underlying attitude or rule.',
                correct: true,
                selected_text:
                  "That's right. A schema is an underlying attitude or rule that we assume to be true. One of the main objectives of cognitive therapy is to uncover and change negatively distorted schemas.",
                unselected_text:
                  'A schema is an underlying attitude or rule that we assume to be true. One of the main objectives of cognitive therapy is to uncover and change negatively distorted schemas.',
              },
              {
                quiz_option_id: 320,
                name: 'A pattern of negative behavior.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 321,
                name: 'A repetitive problem in a relationship.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 104,
            title: 'An adaptive schema is one that:',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 322,
                name: 'Causes problems in behavior.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 323,
                name: 'Is rooted in negative childhood experiences.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 324,
                name: 'Gets stronger when you are depressed.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 325,
                name: 'Helps you cope with your problems.',
                correct: true,
                selected_text:
                  'Nice work! Adaptive schemas are helpful basic attitudes or rules. These positive schemas promote healthy self-esteem and good problem solving skills.',
                unselected_text:
                  'Adaptive schemas are helpful basic attitudes or rules. These positive schemas promote healthy self-esteem and good problem solving skills.',
              },
            ],
          },
          {
            quiz_id: 105,
            title: 'Which of the following is not an accepted method of identifying schemas?',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 326,
                name: 'Controlling your emotions.',
                correct: true,
                selected_text:
                  "You correctly recognized that all three of the other choices are good ways of finding schemas. Controlling your emotions isn't a particularly useful way of identifying cognitions. In fact, strong emotions may indicate that important schemas are present.",
                unselected_text:
                  "Controlling your emotions isn't a particularly useful way of identifying cognitions. In fact, strong emotions may indicate that important schemas are present.",
              },
              {
                quiz_option_id: 327,
                name: 'Reading about the experience of others.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 328,
                name: 'Looking for patterns of automatic thoughts.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 329,
                name: 'Reviewing a list of common schemas.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 167,
            title: 'The relationship between schemas and automatic thoughts can be described as follows:',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 537,
                name: 'The two have little influence on one another.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 538,
                name: 'Both are the products of emotions.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 539,
                name: 'Schemas underlie automatic thoughts.',
                correct: true,
                selected_text: 'Correct. Schemas are the basic rules or assumptions that drive our automatic thoughts.',
                unselected_text: 'Schemas are the basic rules or assumptions that drive our automatic thoughts.',
              },
              {
                quiz_option_id: 540,
                name: 'Schemas are products of automatic thoughts.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 107,
            title: 'One of the best methods of changing schemas is:',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 334,
                name: 'Listing emotions',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 335,
                name: 'Hanging on to old attitudes',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 336,
                name: 'Examining the evidence',
                correct: true,
                selected_text:
                  "You're doing well. One of the recommended ways to modify schemas is to examine the evidence.",
                unselected_text: 'One of the recommended ways to modify schemas is to examine the evidence.',
              },
              {
                quiz_option_id: 337,
                name: 'Defending your way of seeing things',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 129,
            title: 'Good ways to develop alternative schemas include all but which one of the following?',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 391,
                name: 'Be creative and keep and open mind.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 392,
                name: 'Develop schemas that minimize your weaknesses.',
                correct: true,
                selected_text:
                  "You found it! Trying to alter a negative schema by writing an unrealistically positive schema won't work. You're much better off with the strategy of developing accurate schemas. Negative distortions should be corrected, but don't twist the facts to build yourself up. If you discover actual problems in the way that you function, you'll need a plan for change.",
                unselected_text:
                  "Trying to alter a negative schema by writing an unrealistically positive schema won't work. You're much better off with the strategy of developing accurate schemas. Negative distortions should be corrected, but don't twist the facts to build yourself up. If you discover actual problems in the way that you function, you'll need a plan for change.",
              },
              {
                quiz_option_id: 393,
                name: 'Try changes that make the schema work better.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 394,
                name: 'Practice new schemas over and over.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 130,
            title: 'Which revision of the schema "I can\'t finish anything" would be most helpful?',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 395,
                name: "I'll try anything.",
                correct: false,
                selected_text:
                  'This revision is much too dramatic. The attitude "I\'ll try anything" could create real problems for a person who experiences difficulty in completing projects.',
                unselected_text: '',
              },
              {
                quiz_option_id: 396,
                name: "Don't try unless you're sure you can finish.",
                correct: false,
                selected_text:
                  'If you adopted this schema, you would probably start to avoid opportunities to learn and grow. Setting a standard of "finishing everything" is unrealistic. Sometimes it\'s wise to drop a project or an activity if you decide your energies could be better spent on something else.',
                unselected_text: '',
              },
              {
                quiz_option_id: 397,
                name: "I'll improve my ability to finish things.",
                correct: true,
                selected_text:
                  'You made the right choice. This revision corrects the absolute statement "I can\'t finish anything," and it also acknowledges a problem that may need to be overcome. A person with a schema about not being able to "finish anything" probably has had some difficulty in completing projects. However, it\'s doubtful that he or she would have had no success in finishing activities. This person might benefit from using techniques such as the step-by-step approach to work on task completion skills. Making progress in changing behavior could lead to further positive revisions in the schema.',
                unselected_text:
                  'A person with a schema about not being able to "finish anything" probably has had some difficulty in completing projects. However, it\'s doubtful that he or she would have had no success in finishing activities. This person might benefit from using techniques such as the step-by-step approach to work on task completion skills. Making progress in changing behavior could lead to further positive revisions in the schema.',
              },
              {
                quiz_option_id: 398,
                name: 'I can finish everything I start.',
                correct: false,
                selected_text:
                  'This is an unrealistically positive schema. Who can finish everything that they start? Trying to change a negative schema to its exact opposite is rarely helpful.',
                unselected_text: '',
              },
            ],
          },
        ],
      },
      {
        title: 'Lesson 7 Summary',
        unitNo: '24',
        subtitle: '',
        content: [
          {
            type: 'title',
            html: `
						<h3>You're Making Excellent Progress</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>You’ve learned a lot in Lesson 7. And you’re poised to make many more gains in developing adaptive schemas.Take a moment to review the Summary Points before you move on.</p>
						`,
          },
          {
            type: 'text',
            html: `
						<div class="takeaways">
						<h3>Summary Points</h3>
						<bl>
						<li>Schemas (or core beliefs) are the basic rules or attitudes that <strong>govern our thinking and regulate our self-esteem</strong>.</li>
						<li>All of us have a combination of negative (or maladaptive) schemas and positive (or adaptive) schemas.  <strong>Cognitive therapy methods can help you uncover, strengthen, and effectively use your positive schemas</strong>. And cognitive therapy methods can help you change your negative schemas so they stop pulling you down.</li>
						<li>Once you identify schemas that are causing problems, you can modify them by using effective methods such as <strong>examining the evidence, listing advantages and disadvantages, and finding rational alternatives</strong>.</li>
						<li>To make your changes stick, it is important to <strong>develop specific plans to put your revised schemas into action</strong> in everyday life.</li>
						</bl>
						</div>
						`,
          },
        ],
      },
      {
        title: 'Recommended Exercises for Lesson 7',
        unitNo: '25',
        subtitle: '',
        content: [
          {
            type: 'text',
            html: `
						<p>These exercises are designed to help strengthen your skills in identifying and changing schemas. Because your schemas have been with you for a long time, it may take repeated practice to make changes that will give you long-lasting benefit. You can come back to Good Days Ahead at any time to practice these exercises.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Recommended Exercises:</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<ol>
						<li>Read the Tips for Finding Alternatives to Negative Schemas.</li>
						<li>Review and update your Personal List of Negative Schemas.</li>
						<li>Review and update your Personal List of Positive Schemas.</li>
						<li>Using the Changing Schemas exercise, choose two or more negative schemas from your list. Go through all the steps in the exercise to evaluate and change your schemas.</li>
						</ol>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Let’s return to the Homepage so you can decide what to do next.</p>
						`,
          },
        ],
      },
    ],
    practices: [
      { practiceId: 10, reviewNo: 1 },
      { practiceId: 11, reviewNo: 2 },
      { practiceId: 12, reviewNo: 1 },
      { practiceId: 24, reviewNo: -1 },
    ],
  },

  {
    title: 'Putting It Together I',
    hero_url: '/gda/heros/hero8.jpg',
    // hero_url: "https://empower-content-resources.s3.amazonaws.com/uploads/content_resource/file/135/hero8.jpg",
    lessonNo: '8',
    takeAways: [
      'How much progress you have made in learning cognitive therapy methods',
      'How to strengthen your skills for identifying and changing automatic thoughts.',
      'How to develop effective coping plans for problems in your life',
    ],
    units: [
      {
        title: 'Putting It All Together',
        unitNo: '1',
        subtitle: '',
        content: [
          {
            type: 'video',
            videos: {
              1: {
                id: '1540739160001',
                poster: '/gda/content/posters/rushing-l8-u1.jpg',
                src: `${GDA_VIDEOS}1540739160001` + `.mp4`,
              },
              2: {
                id: '1824572347001',
                poster: '/gda/content/posters/wright-l8-u1.jpg',
                src: `${GDA_VIDEOS}1824572347001` + `.mp4`,
              },
            },
          },
          {
            type: 'title',
            html: `
						<h3>Our Goals for This Lesson:</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<ol>
						<li>Strengthen your cognitive therapy skills</li>
						<li>Learn how to develop effective coping plans.</li>
						</ol>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Do you think you understand how to use cognitive therapy? Let’s go back over the main segments of the program to check out what you’ve learned.</p>
						<p>You’ll be asked to answer some of the review questions that you’ve seen previously. Also, you will find new questions, self-help exercises, and helpful tips.</p>	
						`,
          },
        ],
        quizzes: [
          {
            quiz_id: 131,
            title: 'The steps in changing automatic thoughts are:',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 399,
                name: 'Spot, examine, dismiss',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 400,
                name: 'Think, act, feel',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 401,
                name: 'Identify, label, modify',
                correct: true,
                selected_text:
                  "It's good to see you remember the three steps of changing automatic thoughts. If you practice these steps, you'll get to the point where you'll start to \"automatically\" correct your distorted thinking.",
                unselected_text: 'The correct answer for this question is: Identify, label and modify.',
              },
              {
                quiz_option_id: 402,
                name: 'Feel, think, change',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 132,
            title: 'Automatic thoughts are:',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 403,
                name: 'Out of our control',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 404,
                name: 'Beyond our awareness',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 405,
                name: 'Always damaging',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 406,
                name: 'Private thoughts that are often negatively distorted',
                correct: true,
                selected_text:
                  "That's right. You remembered that automatic thoughts are usually not spoken out loud. Automatic thoughts are part of our private inner dialogue. These cognitions are often negatively distorted in states of anxiety or depression. However, automatic thoughts are more balanced when you are feeling well. Recognizing and changing negative automatic thoughts is one of the main goals of cognitive therapy.",
                unselected_text:
                  'Automatic thoughts are part of our private inner dialogue. These cognitions are often negatively distorted in states of anxiety or depression. However, automatic thoughts are more balanced when you are feeling well. Recognizing and changing negative automatic thoughts is one of the main goals of cognitive therapy.',
              },
            ],
          },
          {
            quiz_id: 133,
            title: 'One of the best clues that automatic thoughts are occurring is:',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 407,
                name: 'Strong emotion or physical tension',
                correct: true,
                selected_text:
                  'Correct. In the first lesson of the program you were taught that our cognitions (thoughts) drive our emotions. Strong emotional or physical reactions are great clues that automatic thoughts have just occurred.',
                unselected_text:
                  'In the first lesson of the program you were taught that our cognitions (thoughts) drive our emotions. Strong emotional or physical reactions are great clues that automatic thoughts have just occurred.',
              },
              {
                quiz_option_id: 408,
                name: 'Forgetfulness',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 409,
                name: 'Distraction',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 410,
                name: 'A steady mood',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 134,
            title: 'Tuning In',
            subtitle:
              'You can reduce feelings of depression or anxiety by "tuning in" to your automatic thoughts. The "tuning in" process involves all but which one of the following:',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 411,
                name: 'Recognizing automatic thoughts',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 412,
                name: 'Shutting off automatic thoughts',
                correct: true,
                selected_text:
                  "Good job. Although you eventually want to reduce negative automatic thoughts, trying to force them out of your mind doesn't usually work. In cognitive therapy, you learn how to spot negative automatic thoughts and develop a more realistic style of thinking.",
                unselected_text:
                  "Although you eventually want to reduce negative automatic thoughts, trying to force them out of your mind doesn't usually work. In cognitive therapy, you learn how to spot negative automatic thoughts and develop a more realistic style of thinking.",
              },
              {
                quiz_option_id: 413,
                name: 'Writing down automatic thoughts',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 414,
                name: 'Examining the accuracy of automatic thoughts',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 135,
            title: 'The Thought Change Record contains all but which one of the following parts?',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 415,
                name: 'Automatic Thoughts',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 416,
                name: 'Problem List',
                correct: true,
                selected_text:
                  "Correct. A problem list could be helpful in some situations. But the Thought Change Record doesn't include a specific section on developing a problem list. The six parts of the Thought Change Record are: Event, Automatic Thoughts, Emotions, Labeling Cognitive Errors, Rational Thoughts, and Outcome.",
                unselected_text:
                  "A problem list could be helpful in some situations. But the Thought Change Record doesn't include a specific section on developing a problem list. The six parts of the Thought Change Record are: Event, Automatic Thoughts, Emotions, Labeling Cognitive Errors, Rational Thoughts, and Outcome.",
              },
              {
                quiz_option_id: 417,
                name: 'Rational Thoughts',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 418,
                name: 'Event',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 419,
                name: 'Emotions',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 136,
            title: 'Which of the following is not a cognitive error?',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 420,
                name: 'All or none thinking',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 421,
                name: 'Ignoring the evidence',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 422,
                name: 'Sweeping',
                correct: true,
                selected_text:
                  'Good job. "Sweeping" is not one of the errors in thinking described in Good Days Ahead. All or none thinking, ignoring the evidence, magnifying and minimizing, and personalizing are cognitive errors that people learn to identify in cognitive therapy. Do you remember the other cognitive errors? In just a few minutes, you\'ll have the opportunity to practice labeling cognitive errors in Lisa\'s automatic thoughts.',
                unselected_text:
                  "All or none thinking, ignoring the evidence, magnifying and minimizing, and personalizing are cognitive errors that people learn to identify in cognitive therapy. Do you remember the other cognitive errors? In just a few minutes, you'll have the opportunity to practice labeling cognitive errors in Lisa's automatic thoughts.",
              },
              {
                quiz_option_id: 423,
                name: 'Magnifying and minimizing',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 424,
                name: 'Personalizing',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 137,
            title: 'When you label cognitive errors, it helps to take all but which one of these actions?',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 425,
                name: 'Recognize that you are using distorted thinking',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 426,
                name: 'Practice this skill repeatedly',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 427,
                name: 'Think of changes you can make',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 428,
                name: 'Name all the cognitive errors',
                correct: true,
                selected_text:
                  "It isn't important to name each and every cognitive error for all of your automatic thoughts or to get all of the labels \"just right.\" The purpose of labeling cognitive errors is simply to help you recognize your distorted thinking. The best way to approach the labeling exercises is to relax and just try to pick out a few cognitive errors. You'll start to have more rational thoughts if you can identify any cognitive errors in your automatic thoughts. Once you detect cognitive errors, you'll probably begin to think of positive changes you can make in your thinking.",
                unselected_text:
                  "It isn't important to name each and every cognitive error for all of your automatic thoughts or to get all of the labels \"just right.\" The purpose of labeling cognitive errors is simply to help you recognize your distorted thinking. The best way to approach the labeling exercises is to relax and just try to pick out a few cognitive errors. You'll start to have more rational thoughts if you can identify any cognitive errors in your automatic thoughts. Once you detect cognitive errors, you'll probably begin to think of positive changes you can make in your thinking.",
              },
              {
                quiz_option_id: 429,
                name: 'Give yourself credit for making progress',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 138,
            title: 'Procedures for examining the evidence include all but which one of the following?',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 430,
                name: 'Opening your mind to look at multiple possibilities',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 431,
                name: 'Putting evidence aside if it supports a negative automatic thought',
                correct: true,
                selected_text:
                  'Although it might be tempting to try to discard evidence or put it aside when it seems to support a negative automatic thought, you would be fooling yourself if you did this. When you do find some evidence that negative cognitions are accurate, you can do three things: 1) balance the "evidence for" versus the "evidence against," 2) look for cognitive errors in your "evidence for" the automatic thought, and 3) work out a plan that will help you reverse the problem.',
                unselected_text:
                  'Although it might be tempting to try to discard evidence or put it aside when it seems to support a negative automatic thought, you would be fooling yourself if you did this. When you do find some evidence that negative cognitions are accurate, you can do three things: 1) balance the "evidence for" versus the "evidence against," 2) look for cognitive errors in your "evidence for" the automatic thought, and 3) work out a plan that will help you reverse the problem.',
              },
              {
                quiz_option_id: 432,
                name: 'Acting like a scientist who collects data to prove or disprove a theory',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 433,
                name: 'Taking an honest and realistic look at a situation',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 434,
                name: 'Using two columns to list evidence for and against an automatic thought',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 139,
            title:
              'Good methods of finding rational alternatives to automatic thoughts include all but which one of the following?',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 435,
                name: 'Making very strong positive statements about yourself',
                correct: true,
                selected_text:
                  'There are a number of ways to develop rational alternatives to automatic thoughts. You should try to take your "blinders" off and be open to a wide range of options. However, "making very strong positive statements" could backfire if these statements don\'t ring true or are off-putting to others.',
                unselected_text:
                  'There are a number of ways to develop rational alternatives to automatic thoughts. You should try to take your "blinders" off and be open to a wide range of options. However, "making very strong positive statements" could backfire if these statements don\'t ring true or are off-putting to others.',
              },
              {
                quiz_option_id: 436,
                name: 'Asking people you trust for their ideas',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 437,
                name: 'Examining the evidence for your automatic thoughts',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 438,
                name: 'Imagining what a good coach might say to you',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 439,
                name: 'Identifying your strengths and personal resources',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
        ],
      },
      {
        title: 'Strengthening Your Skills',
        unitNo: '2',
        subtitle: '',
        content: [
          {
            type: 'text',
            html: `
						<p>You’ve completed the review questions on Changing Automatic Thoughts, and it looks like you’ve come a long way.</p>
						<p>Let’s get some more practice working with automatic thoughts by returning to the scene where Lisa is concerned about the Crenshaw project.</p>
						`,
          },
          {
            type: 'video',
            videos: {
              1: {
                id: '1540693518001',
                poster: '/gda/content/posters/rushing-l8-u2.jpg',
                src: `${GDA_VIDEOS}1540693518001` + `.mp4`,
              },
              2: {
                id: '1540693518001',
                poster: '/gda/content/posters/wright-l8-u2.jpg',
                src: `${GDA_VIDEOS}1540693518001` + `.mp4`,
              },
            },
          },
          {
            type: 'text',
            html: `
						<p>Now you’ll have the chance to change two more of Lisa’s dysfunctional thoughts.</p>
						`,
          },
        ],
        quizzes: [
          {
            quiz_id: 140,
            title: "Cognitive Errors in Lisa's Automatic Thought",
            subtitle:
              'Select the cognitive errors that you think are involved in Lisa\'s automatic thought: "He\'s really going to come down on me."',
            instruction: 'Select all that apply.',
            options: [
              {
                quiz_option_id: 440,
                name: 'Ignoring the Evidence',
                correct: true,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 441,
                name: 'Jumping to Conclusions',
                correct: true,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 442,
                name: 'Overgeneralizing',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 443,
                name: 'Magnifying/Minimizing',
                correct: true,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 444,
                name: 'Personalizing',
                correct: true,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 445,
                name: 'All or None Thinking',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 141,
            title:
              'Explanation of the cognitive errors in Lisa\'s automatic thought "He\'s really going to come down on me."',
            subtitle:
              'The most obvious cognitive error here is "jumping to conclusions". Because Lisa jumped to the conclusion that Tom would be very critical of her job performance, she put herself down unnecessarily in front of her boss. Lisa also seems to be "ignoring evidence" that she and Tom have had a good working relationship and that Tom has often been willing to help. Other cognitive errors that we identified in this example are "magnifying" the situation out of proportion and taking excessive personal responsibility ("personalizing") for the Crenshaw Project. Lisa doesn\'t seem to be overgeneralizing the problem to other areas of her life. And this automatic thought doesn\'t appear to have the absolute qualities of all or none thinking. Don\'t worry if you didn\'t choose all of the correct responses. Picking cognitive errors is always a "judgment call." Remember, the point of labeling automatic thoughts is simply to recognize that any cognitive errors have occurred.',
            instruction: '',
          },
          {
            quiz_id: 184,
            title:
              'Select the cognitive errors that you think are involved in Lisa\'s automatic thought: "I really blew it this time."',
            instruction: 'Select all that apply.',
            options: [
              {
                quiz_option_id: 592,
                name: 'Ignoring the Evidence',
                correct: true,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 593,
                name: 'Jumping to Conclusions',
                correct: true,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 594,
                name: 'Overgeneralizing',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 595,
                name: 'Magnifying/Minimizing',
                correct: true,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 596,
                name: 'Personalizing',
                correct: true,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 597,
                name: 'All or None Thinking',
                correct: true,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 143,
            title: 'Explanation of the cognitive errors in the thought: "I really blew it this time."',
            subtitle:
              'Virtually all of the cognitive errors seem to be involved in this automatic thought. Lisa is ignoring the evidence that she has actually been making some progress at work. She\'s also jumped to the conclusion that she\'s "blown" the project. In addition, the statement "I really blew it this time" is magnified, overly personalized, and has an all or nothing quality. About the only cognitive error that can be ruled out is overgeneralizing. Lisa is telling herself that she "really blew it this time." So, she isn\'t saying that she always has trouble with her work or that she has problems with everything that she does.',
          },
        ],
      },
      {
        title: 'Modifying Automatic Thoughts',
        unitNo: '3',
        subtitle: '',
        content: [
          {
            type: 'title',
            html: `
						<h3>The Next Step in Helping Lisa</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Let’s move on to examine the evidence for Lisa’s automatic thoughts.</p>
						<p>You’ll need to remember the background information that describes Lisa’s work performance in order to examine the evidence.</p>
						<p>If you recall this information clearly, you can skip ahead to start examining the evidence.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Background Information on Lisa</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Lisa is usually an active woman who balances her marriage and family relationships with a career as a middle manager. She’s worked for the same firm for nine years and has consistently gotten job evaluations in the above average to excellent range.</p>
						<p>Lisa’s boss, Tom, likes her ability to understand their clients’ needs and to make solid business plans. Also, Lisa has been praised by clients many times for her capacity to communicate clearly, her knack for finding solutions to difficult problems, and her friendly attitude.</p>
						<p>Since she has become depressed, Lisa has been having a crisis of confidence. She doesn’t have as much energy to give to her projects, and she sometimes has a hard time concentrating on her work. As a result, she has fallen behind schedule on the “Crenshaw Project,” her current major assignment. Now it seems like success is impossible.</p>
						
						<p>Lisa sees the whole task as probably being more than she can handle. However, she is actually doing a fairly good job. Her plans for the project make good sense, and she has been making progress on several fronts.</p>
						<p>When someone becomes depressed or anxious they often view their problems as being much worse than is actually the case, and they usually underestimate their ability to cope with tough decisions.</p>
						<p>Also, depression can make one forget personal strengths that can be used to resolve challenging problems. You’ll have the chance now to learn about cognitive therapy methods that can help Lisa start climbing out of the depression.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Now let’s move on to examine the evidence for Lisa’s automatic thoughts.</p>
						`,
          },
        ],
        quizzes: [
          {
            quiz_id: 142,
            title: 'Select the "Evidence Against" Lisa\'s Automatic thought: "He\'s really going to come down on me."',
            instruction: 'Select all that apply.',
            options: [
              {
                quiz_option_id: 446,
                name: "Tom hasn't been critical in the past.",
                correct: true,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 447,
                name: "I've been making some progress with the project.",
                correct: true,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 448,
                name: "Tom could be upset that we're behind schedule.",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 449,
                name: 'I have a good track record at work.',
                correct: true,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 450,
                name: 'This project is a big deal for the company.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 451,
                name: 'Tom usually has a helpful attitude.',
                correct: true,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 452,
                name: 'He will probably want to find a solution instead of getting angry.',
                correct: true,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 143,
            title:
              'Explanation of the evidence against Lisa\'s automatic thought: "He\'s really going to come down on me."',
            subtitle:
              "There's lots of evidence that the automatic thought about Tom coming down on her is probably not accurate. Tom hasn't been an overly critical boss in the past, and they have had a good working relationship. Although they are behind schedule, they have been making some progress. And, Lisa's track record suggests that she will be responsible and productive as they face the challenges of the Crenshaw project. Of course there is always the chance that a negative automatic thought is true. If Tom did get upset with Lisa and made some critical remarks, Lisa would need to figure out a way to cope with the problem. Using the skills you have learned for modifying automatic thoughts and using methods such as the Step-by-Step approach can help a great deal with managing difficult situations. Later in this lesson, you'll get experience in developing coping strategies for problems in your life.",
          },
          {
            quiz_id: 178,
            title:
              'Select the statements that are Evidence For Lisa\'s Automatic thought: "I really blew it this time."',
            instruction: 'Select all that apply.',
            options: [
              {
                quiz_option_id: 579,
                name: "The status of the project isn't that bad.",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 580,
                name: 'Others share in the responsibility for the project.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 581,
                name: "I'm significantly behind schedule.",
                correct: true,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 582,
                name: "I've made good plans for the project.",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 583,
                name: "I'm not working up to my potential.",
                correct: true,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 584,
                name: "I've done some good work on the project.",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 585,
                name: 'Nobody has criticized me.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 586,
                name: 'The project can still be a success.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 179,
            title: 'Explanation of the evidence for Lisa\'s automatic thought: "I really blew it this time."',
            subtitle:
              "It would help Lisa to recognize that the negative effects of depression on work performance (falling behind on the schedule, not working up to her potential) don't tell the whole story. She has made some good plans and has accomplished some good work. Other team members share in the responsibility for the project, so she doesn't need to feel alone in taking responsibility for the delays. With the support of Tom and others, Lisa still has the opportunity to bring the project to a successful conclusion.",
          },
        ],
      },
      {
        title: 'Examining the Evidence',
        unitNo: '4',
        subtitle: '',
        content: [
          {
            type: 'title',
            html: `
						<h3>Good Work!</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>You’re getting to be a real expert at examining the evidence.</p>
						<p>Have you been doing the examining the evidence exercises in the Practice section?</p>
						<p>Be sure to keep practicing this skill until it becomes second nature to you. From now on, you will probably stop to ask “what’s the evidence?” before you make definite conclusions.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Let’s take an opportunity to practice examining the evidence for one of your own automatic thoughts.</p>
						`,
          },
        ],
        practices: [{ practiceId: 5, reviewNo: 1 }],
      },
      {
        title: 'Developing Rational Alternatives',
        unitNo: '5',
        subtitle: '',
        content: [
          {
            type: 'title',
            html: `
						<h3>Let's Practice Developing Rational Alternatives</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>If you’re like most people, lots of practice in generating rational alternatives will pay off in a healthier thinking style.</p>
						<p>We’ll start by finding some rational alternatives for one of the thoughts Lisa had when she received the phone call from Tom.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Let’s evaluate the alternatives for one more of Lisa’s automatic thoughts.</p>
						`,
          },
        ],
        quizzes: [
          {
            quiz_id: 144,
            title:
              'Lisa has come up with some alternatives to her automatic thought: "He\'s really going to come down on me."',
            subtitle: 'Select the alternative thoughts that would be helpful to Lisa .',
            instruction: 'Select all that apply.',
            options: [
              {
                quiz_option_id: 453,
                name: 'Tom will want to help find a solution.',
                correct: true,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 454,
                name: "Even if he's upset about the project, he probably won't be overly critical.",
                correct: true,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 455,
                name: 'He will want to get rid of me.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 456,
                name: "If he's critical, I can handle it.",
                correct: true,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 457,
                name: "I'd better find a way to get out of here.",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 458,
                name: 'Tom usually gives me support when I need it.',
                correct: true,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 180,
            title:
              'Explanation of the rational alternatives for Lisa\'s automatic thought: "He\'s really going to come down on me."',
            subtitle:
              "The alternatives that would help Lisa effectively manage the situation emphasize the positive parts of her relationship with Tom, their previous experiences of working productively together, and the potential for working out a solution. The evidence we examined earlier doesn't indicate that Lisa needs to start looking for another job right now. If work problems intensified and there was a significant possibility that she would be fired, Lisa would need to deal with this reality. The alternative about being able to handle critical remarks could be very useful if Tom were to express frustration with Lisa's work performance. Sometimes it can help to think ahead to how you might cope with stresses that could occur in the future. Could you think of some ideas for how Lisa could cope with criticism from Tom?",
          },
        ],
      },
      {
        title: 'Practice with Rational Alternatives',
        unitNo: '6',
        subtitle: '',
        content: [
          {
            type: 'title',
            html: `
						<h3>Practice Developing Rational Alternatives</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Now that you’ve gotten a refresher on how Lisa developed rational alternatives, you can take time to practice developing rational alternatives for some of your own automatic thoughts.</p>
						`,
          },
        ],
        practices: [{ practiceId: 6, reviewNo: 1 }],
      },
      {
        title: 'Positive Effects of Rational Thinking',
        unitNo: '7',
        subtitle: '',
        content: [
          {
            type: 'title',
            html: `
						<h3>Lisa is Making Progress!</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Do you remember how Lisa changed after she modified her automatic thoughts?</p>
						`,
          },
          {
            type: 'video',
            videos: {
              1: {
                id: '1550780754001',
                poster: '/gda/content/posters/rushing-l8-u7.jpg',
                src: `${GDA_VIDEOS}1550780754001` + `.mp4`,
              },
              2: {
                id: '1550780754001',
                poster: '/gda/content/posters/wright-l8-u7.jpg',
                src: `${GDA_VIDEOS}1550780754001` + `.mp4`,
              },
            },
          },
          {
            type: 'text',
            html: `
						<p>Take one more look at the scene between Lisa and Tom to see the positive effects of rational thinking.</p>
						`,
          },

          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Throughout this program, we’ve encouraged you to develop effective coping strategies for the problems you face. The next exercise will help you organize your ideas for managing difficulties or challenges with “coping cards.”</p>
						`,
          },
        ],
      },
      {
        title: 'Using Coping Cards',
        unitNo: '8',
        subtitle: '',
        content: [
          {
            type: 'title',
            html: `
						<h3>A Powerful Method to Help You Change</h3>
						`,
          },
          {
            type: 'video',
            videos: {
              1: {
                id: '1540693589001',
                poster: '/gda/content/posters/rushing-l8-u8.jpg',
                src: `${GDA_VIDEOS}1540693589001` + `.mp4`,
              },
              2: {
                id: '1824567415001',
                poster: '/gda/content/posters/wright-l8-u8.jpg',
                src: `${GDA_VIDEOS}1824567415001` + `.mp4`,
              },
            },
          },
          {
            type: 'text',
            html: `
						<p>Another technique that might have helped Lisa in this situation would have been to use a coping card.</p>
						<p>Coping cards are simple, but powerful self-help tools that capture your best ideas for changing your thinking and managing the problems in your life.</p>
						<p>In this exercise, we’ll help you write out coping cards on your computer. You can also create coping cards using index cards and a pen or pencil. Or, you could even use a business size card if you want to keep it small.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Tips for Developing Coping Cards</h3>				
						`,
          },
          {
            type: 'text',
            html: `
						<ol>
						<li>Target a problem, a situation, or a stressor that you want to manage better.</li>
						<li>Write down this problem at the top of the card.</li>
						<li>Then note healthier thoughts or behaviors that would help you cope with this situation. You can review your self-help exercises from this program to get ideas for changes.</li>
						<li>Coping strategies usually work best if they are specific and give you directions on how to think or act.</li>
						<li>Carry the card with you and use it to remind yourself of the coping methods you want to use.</li>
						</ol>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>We’ll help Lisa design an effective coping card.</p>
						`,
          },
        ],
        quizzes: [
          {
            quiz_id: 145,
            title: 'Select the coping strategies that you think would help Lisa manage her work situation.',
            instruction: 'Select all that apply.',
            options: [
              {
                quiz_option_id: 459,
                name: 'Try to spread the blame around.',
                correct: false,
                selected_text:
                  'Lisa realizes that the responsibility for the Crenshaw project is shared among others in her office. However, attempts to shift blame to others can backfire. Other people could think that Lisa was trying to shirk responsibility for her part of the job.',
                unselected_text: '',
              },
              {
                quiz_option_id: 460,
                name: 'Review Thought Change Record and use it to keep a positive attitude.',
                correct: true,
                selected_text:
                  'Reviewing the Thought Change Record is a good idea. If Lisa keeps her rational alternatives in mind, she will probably be able to limit her negative thinking and feel less depressed.',
                unselected_text:
                  'Reviewing the Thought Change Record is a good idea. If Lisa keeps her rational alternatives in mind, she will probably be able to limit her negative thinking and feel less depressed.',
              },
              {
                quiz_option_id: 461,
                name: 'Keep working steadily even if I get discouraged.',
                correct: true,
                selected_text:
                  'Lisa is coaching herself to keep going even if things get tough at work. This kind of positive self-statement can be much more helpful than the defeated type of thoughts that are common in people with depression and anxiety.',
                unselected_text:
                  'Lisa is coaching herself to keep going even if things get tough at work. This kind of positive self-statement can be much more helpful than the defeated type of thoughts that are common in people with depression and anxiety.',
              },
              {
                quiz_option_id: 462,
                name: 'Ask Tom to bail me out by taking over the work on the Crenshaw project.',
                correct: false,
                selected_text:
                  "Lisa is still making progress with this project. With a better attitude, she can probably get back on track. It is premature to give up on the project and to ask Tom to take over. This type of drastic action should be reserved for situations where the evidence clearly points to a person not being able to accomplish the task. Lisa can accept Tom's offer of help without giving up on the project.",
                unselected_text: '',
              },
              {
                quiz_option_id: 463,
                name: 'Remind myself of my strengths, especially that I know how to do this job.',
                correct: true,
                selected_text:
                  "Keeping one's strengths in mind is almost always an effective coping strategy. Try to capitalize on your strengths as you learn ways to overcome your problems.",
                unselected_text:
                  "Keeping one's strengths in mind is almost always an effective coping strategy. Try to capitalize on your strengths as you learn ways to overcome your problems.",
              },
              {
                quiz_option_id: 464,
                name: "Don't let anybody know that I'm struggling at work.",
                correct: false,
                selected_text:
                  'It is difficult to decide how much to let others know about your problems. Of course, you want to avoid opening yourself up to criticism. However, in this situation Tom has already told Lisa of his concern and has been supportive in offering help. Also, if Lisa tries to take entire responsibility for this project it may worsen the situation. Lisa needs to use an effective style of asking for help from her coworkers. If she can maintain good self-esteem and focus on finding solutions, she will be able to do a better job of enlisting aid from others.',
                unselected_text: '',
              },
              {
                quiz_option_id: 465,
                name: 'Use the whole team to get the job done.',
                correct: true,
                selected_text:
                  'This idea should help Lisa. She can maximize the chances for success by drawing on the strengths of all members of her team.',
                unselected_text:
                  'This idea should help Lisa. She can maximize the chances for success by drawing on the strengths of all members of her team.',
              },
              {
                quiz_option_id: 466,
                name: 'Ask Ben to help out more at home.',
                correct: true,
                selected_text:
                  'This is another excellent idea. If Ben helps more at home, Lisa may have more energy and concentration to apply to the work situation.',
                unselected_text:
                  'This is another excellent idea. If Ben helps more at home, Lisa may have more energy and concentration to apply to the work situation.',
              },
              {
                quiz_option_id: 467,
                name: 'Tell myself that I will succeed if I take it a step at a time.',
                correct: true,
                selected_text:
                  'Lisa is remembering lessons from the step-by-step method and is coaching herself on an effective way to avoid getting overwhelmed by the task she faces. She is making another positive self-statement that is probably accurate. Success is not guaranteed, but Lisa has effectively managed these types of projects in the past.',
                unselected_text:
                  'Lisa is remembering lessons from the step-by-step method and is coaching herself on an effective way to avoid getting overwhelmed by the task she faces. She is making another positive self-statement that is probably accurate. Success is not guaranteed, but Lisa has effectively managed these types of projects in the past.',
              },
            ],
          },
        ],
      },
      {
        title: "Lisa's Coping Card",
        unitNo: '9',
        subtitle: '',
        content: [
          {
            type: 'video',
            videos: {
              1: {
                id: '1540723916001',
                poster: '/gda/content/posters/rushing-l8-u9.jpg',
                src: `${GDA_VIDEOS}1540723916001` + `.mp4`,
              },
              2: {
                id: '1540723916001',
                poster: '/gda/content/posters/wright-l8-u9.jpg',
                src: `${GDA_VIDEOS}1540723916001` + `.mp4`,
              },
            },
          },
          {
            type: 'image',
            images: {
              src: '/gda/images/lesson-8-unit-9-1.png',
              alt: 'lesson-8-unit-9-1 Image',
            },
          },
          {
            type: 'image',
            images: {
              src: '/gda/images/lesson-8-unit-9-2.png',
              alt: 'lesson-8-unit-9-2 Image',
            },
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Now, you’ll have an opportunity to create coping cards for yourself.</p>
						`,
          },
        ],
        practices: [{ practiceId: 13, reviewNo: 1 }],
      },
      {
        title: 'Getting the Most from Coping Cards',
        unitNo: '10',
        subtitle: '',
        content: [
          {
            type: 'video',
            videos: {
              1: {
                id: '1540739158001',
                poster: '/gda/content/posters/rushing-l8-u10.jpg',
                src: `${GDA_VIDEOS}1540739158001` + `.mp4`,
              },
              2: {
                id: '1824572345001',
                poster: '/gda/content/posters/wright-l8-u10.jpg',
                src: `${GDA_VIDEOS}1824572345001` + `.mp4`,
              },
            },
          },
          {
            type: 'text',
            html: `
						<p>We hope that you enjoy writing coping cards, and that this method will give you a big boost in overcoming your problems.</p>
						<p>It can be very helpful to carry coping cards with you to remind you of the key actions you can take to manage difficulties in your life. We recommend that you develop a series of coping cards and that you keep them close at hand.</p>
						`,
          },

          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>To continue your progress, you’ll need to keep practicing ways of changing your automatic thoughts. Here are some pointers that should help you put it all together.</p>
						`,
          },
        ],
      },
      {
        title: 'Tips for Changing Automatic Thoughts',
        unitNo: '11',
        subtitle: '',
        content: [
          {
            type: 'title',
            html: `
						<h3>Stay on the Lookout for Negative Automatic Thoughts</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Some of the things that can help you spot automatic thoughts are:</p>
						<bl>
						<li>Recognizing that strong emotions are stimulated by automatic thoughts.</li>
						<li>Observing that you use intense or absolute words (for example: “I failed again—-She hates me—-”he controls everything I do—-I can’t do anything right').</li>
						<li>Realizing that you are physically tense.</li>
						<li>Identifying stressful situations that trigger automatic thoughts.</li>
						</bl>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>How to "Tune-In"</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>If you have trouble in “tuning in” to your automatic thoughts, you can try to imagine yourself back in a situation that caused distress. Picture the main characters and the setting just like you’re seeing a video replay of the scene.</p>
						<p>The method of using your imagination to get back in touch with automatic thoughts is sometimes called “imagery.” Many individuals have found that “imagery” can help them recall important automatic thoughts.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Keep Practicing with the TCR and Other Exercises</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Regular practice with the Thought Change Record, Examining the Evidence, and other exercises found in the Practice section will really pay off.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Use Your Sense of Humor</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Do you think you could get to the point that automatic thoughts or cognitive errors seem almost funny when they occur? Cognitive errors can be so extreme that you might be able to laugh a bit when you catch yourself jumping to conclusions, overgeneralizing, or using all or nothing thinking.</p>
						<p>Laughter can be an antidote to depression and anxiety.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Good Ways to Develop Rational Thoughts</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<bl>
						<li>Think back to times before you were depressed or anxious, and identify positive or adaptive thoughts you had then.</li>
						<li>Imagine that you are one of your friends or family who know you well. What strengths or positive features would this person see in you?</li>
						<li>Use the brainstorming technique to free up your thinking.</li>
						<li>Identify and reduce cognitive errors in your automatic thoughts.</li>
						<li>Give yourself a “homework assignment” to practice rational thinking. Choose a specific situation where you can apply what you have learned.</li>
						</bl>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Putting Coping Cards to Work</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>A coping card is a great way to remember a healthier way of thinking and to practice putting these constructive thoughts into action. You can use the Coping Card exercise in the Practice section to generate and organize your cards.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Review the Work that You've Done in Cognitive Therapy</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Even if you believe that you have recovered from depression or anxiety, it’s a good idea to go back over what you have learned so you’ll be prepared to handle future problems.</p>
						<p>If you find that you are getting depressed or anxious again, you can get yourself back on track by reviewing your cognitive therapy materials and using these skills.</p>
						`,
          },
        ],
      },
      {
        title: 'Taking Action',
        unitNo: '12',
        subtitle: '',
        content: [
          {
            type: 'title',
            html: `
						<h3>Are You Ready to Review How to Take Action?</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>The next section will help reinforce the key methods you have learned for becoming more active, building interest and energy,  and tackling challenging tasks.</p>
						<p>If you have been having a problem with being stuck in a rut of inactivity or procrastination, the methods reviewed here from Lessons 5 and 6 could help you get going again.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Let’s work with a few quiz questions to stimulate your thinking. The goals are to test and reinforce your knowledge of cognitive therapy methods for taking action.</p>
						`,
          },
        ],
        quizzes: [
          {
            quiz_id: 146,
            title: 'The relationship between thoughts and behavior (actions) can be described as:',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 468,
                name: 'Thoughts and behavior are the products of emotions.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 469,
                name: 'Your behavior has limited influence on the way you think.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 470,
                name: 'Thoughts and behavior are not linked.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 471,
                name: 'Thoughts and behavior have a strong influence on one another.',
                correct: true,
                selected_text:
                  "Yes, you are on target. Cognitions (thoughts) have a very strong influence on how you feel and how you act. Also, the actions that you take (your behavior) can affect the way that you think about yourself. In cognitive therapy it's important to work on improving both thoughts and behavior. Positive changes in one of these elements will usually bring about good effects in the other.",
                unselected_text:
                  "Cognitions (thoughts) have a very strong influence on how you feel and how you act. Also, the actions that you take (your behavior) can affect the way that you think about yourself. In cognitive therapy it's important to work on improving both thoughts and behavior. Positive changes in one of these elements will usually bring about good effects in the other.",
              },
            ],
          },
          {
            quiz_id: 147,
            title: 'To promote recovery from depression you might try to:',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 472,
                name: 'Pay little attention to mastering daily activities.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 473,
                name: 'Focus only on the things that are giving you the most trouble.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 474,
                name: 'Stay mostly to yourself until you are feeling better.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 475,
                name: 'Schedule more pleasurable activities.',
                correct: true,
                selected_text:
                  "Most people with depression have a reduced ability to enjoy themselves. If you don't enjoy things as much anymore, you may start to withdraw from meaningful activities. Giving up your interests just makes things worse. In cognitive therapy, you use Activity Scheduling to increase the amount of pleasure that you get from your daily routine. Usually activity scheduling is needed most when you are very depressed and you can't seem to pull out of a deep rut. However, paying attention to how you schedule your time is a good idea no matter how you feel.",
                unselected_text:
                  "Most people with depression have a reduced ability to enjoy themselves. If you don't enjoy things as much anymore, you may start to withdraw from meaningful activities. Giving up your interests just makes things worse. In cognitive therapy, you use Activity Scheduling to increase the amount of pleasure that you get from your daily routine. Usually activity scheduling is needed most when you are very depressed and you can't seem to pull out of a deep rut. However, paying attention to how you schedule your time is a good idea no matter how you feel.",
              },
            ],
          },
          {
            quiz_id: 148,
            title: 'The three phases of changing behavior are:',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 476,
                name: 'Revise, list, and examine',
                correct: false,
                selected_text: 'Nice try, but the correct answer is "monitor, plan, and act."',
                unselected_text: '',
              },
              {
                quiz_option_id: 477,
                name: 'Push, pull, and solve',
                correct: false,
                selected_text: 'Nice try, but the correct answer is "monitor, plan, and act."',
                unselected_text: '',
              },
              {
                quiz_option_id: 478,
                name: 'Monitor, plan, and act',
                correct: true,
                selected_text: 'Good work! You correctly recognized the three phases of changing behavior.',
                unselected_text: '',
              },
              {
                quiz_option_id: 479,
                name: 'Confront, assert, and resolve',
                correct: false,
                selected_text: 'Nice try, but the correct answer is "monitor, plan, and act."',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 149,
            title: 'Activity scheduling can help you with all but which one of the following actions?',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 480,
                name: 'Identify areas of strength or competence',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 481,
                name: 'Defend your way of doing things',
                correct: true,
                selected_text:
                  "Yes, you recognized that activity scheduling isn't a good way of defending the ways you are doing things. In fact, activity scheduling will usually stimulate you to make improvements in the way that you use your time. First you monitor the mastery and pleasure associated with activities. Next you review the record to plan the changes that you think will help. Then it's time to Take Action!",
                unselected_text:
                  "Activity scheduling isn't a good way of defending the ways you are doing things. In fact, activity scheduling will usually stimulate you to make improvements in the way that you use your time. First you monitor the mastery and pleasure associated with activities. Next you review the record to plan the changes that you think will help. Then it's time to Take Action!",
              },
              {
                quiz_option_id: 482,
                name: 'Identify activities that give you pleasure',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 483,
                name: 'Do more activities that are helpful to you',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 484,
                name: 'Organize your day',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 150,
            title: 'When you use the step-by-step approach it helps to do all but which one of the following:',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 485,
                name: 'List steps that might be required to manage the situation',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 486,
                name: 'Give yourself credit for progress',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 487,
                name: 'Let your emotions tell you what to do',
                correct: true,
                selected_text:
                  'Emotions can sometimes lead you astray. For example if you felt sad and reasoned that you were too sad to get out of bed and start the day, you might retreat from the world. Doing this for several days would probably deepen depression. All of the other responses to this question are components of the step-by-step approach – a method that can help you overcome depression and other problems.',
                unselected_text:
                  'Emotions can sometimes lead you astray. For example if you felt sad and reasoned that you were too sad to get out of bed and start the day, you might retreat from the world. Doing this for several days would probably deepen depression. All of the other responses to this question are components of the step-by-step approach – a method that can help you overcome depression and other problems.',
              },
              {
                quiz_option_id: 488,
                name: 'Begin with some of the least difficult steps',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 489,
                name: 'Break steps down into smaller steps if needed',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 151,
            title: 'Good strategies for Taking Action include all but which one of the following:',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 490,
                name: 'Pick targets for change with high chances for success',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 491,
                name: 'Do it alone if you can',
                correct: true,
                selected_text:
                  'Lots of people fall into the trap of not asking for help when it is needed. It may be tempting to try to "do it alone." But if you are feeling depressed or anxious, a trusted helper may be able to give you the boost you need to move toward recovery. Is there a positive person in your life who could help you break out of the rut of depression or help you overcome a challenge?',
                unselected_text:
                  'Lots of people fall into the trap of not asking for help when it is needed. It may be tempting to try to "do it alone." But if you are feeling depressed or anxious, a trusted helper may be able to give you the boost you need to move toward recovery. Is there a positive person in your life who could help you break out of the rut of depression or help you overcome a challenge?',
              },
              {
                quiz_option_id: 492,
                name: 'Develop specific problem solving strategies for challenging tasks',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 493,
                name: 'Monitor automatic thoughts about actions for change',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 494,
                name: 'Set achievable goals that will build your confidence and skills',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 152,
            title: 'The least effective method for goal setting in this list is:',
            subtitle: '',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 495,
                name: 'Put your shortcomings aside, focus on your strengths',
                correct: true,
                selected_text:
                  "We haven't specifically discussed how to set effective goals yet in this program, but you've probably learned enough by now to use a cognitive therapy approach to goal setting. The strategy in this list that isn't compatible with cognitive therapy is \"put your shortcomings aside, focus on your strengths.\" Although we encourage you to identify and use strengths, you would be deceiving yourself if you tried to ignore your shortcomings or other problems.",
                unselected_text:
                  "We haven't specifically discussed how to set effective goals yet in this program, but you've probably learned enough by now to use a cognitive therapy approach to goal setting. The strategy in this list that isn't compatible with cognitive therapy is \"put your shortcomings aside, focus on your strengths.\" Although we encourage you to identify and use strengths, you would be deceiving yourself if you tried to ignore your shortcomings or other problems.",
              },
              {
                quiz_option_id: 496,
                name: 'Have reasonable expectations of what you can accomplish',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 497,
                name: 'Use cognitive therapy methods to develop rational goals',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 498,
                name: 'Revise goals if they are not working for you',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 499,
                name: 'Develop both short-term and long-term goals',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
        ],
      },
      {
        title: 'Tips for Setting Effective Goals',
        unitNo: '13',
        subtitle: '',
        content: [
          {
            type: 'title',
            html: `
						<h3>Goal Setting Methods</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Let’s take a look at some tips for setting effective goals.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Be Honest with Yourself When You Set Goals</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Take a balanced view of your strengths and weaknesses, and then set reasonable goals that help you focus on making productive changes.</p>
						<p>It won’t help to ignore your shortcomings or to downplay real problems in your environment. Try to set goals that will allow you to build up your strengths as you tackle your difficulties.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Count on Yourself to Make the Changes</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>If your goals are directed primarily at getting others to change, you’ll probably be disappointed. It works much better to set goals for your own personal improvement or to develop goals that will help you cope better with the behavior of others.</p>
						<p>If you begin to change, you may find that relationships with other people will also start to improve.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Rational Thinking is Required for Rational Goals</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>If you have negatively distorted thoughts, you probably will have trouble setting constructive goals. Hopelessness, helplessness, or low self-esteem will interfere with your view of what you can accomplish.</p>
						<p>Using cognitive therapy techniques such as the Thought Change Record can prepare you to develop effective goals.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Set Clear Goals</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Clearly stated goals will give you an accurate picture of what you want to accomplish, and will keep you on target as you make changes in how you think and act.</p>
						<p>On the other hand, vague or overgeneralized goals may get you confused or interfere with your progress.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Set Goals that You Can Achieve</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>When you are depressed or anxious it’s probably best to focus primarily on manageable short-term goals.</p>
						<p>For example, you might want to set goals for changing your daily activity schedule, building up your self-esteem, or tackling one of your current problems.</p>
						<p>Usually it’s wise to have a series of short and long-term goals. The long-term goals, such as completing your education or getting a new job, can be balanced with more readily achievable short-term goals.</p>
						`,
          },
        ],
      },
      {
        title: 'Lesson 8 Summary',
        unitNo: '14',
        subtitle: '',
        content: [
          {
            type: 'title',
            html: `
						<h3>What You've Accomplished</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Congratulations! You’ve gained a great deal of knowledge for using cognitive therapy methods to overcome depression and anxiety.</p>
						<p>You’ve shown that you understand the key principles for changing automatic thoughts and taking action, and you’ve put these principles to work in your own life.</p>				
						<p>Keep practicing so that cognitive therapy methods stay with you and help you for many years to come.</p>
						`,
          },
          {
            type: 'text',
            html: `
						<div class="takeaways">
						<h3>Summary Points</h3>
						<bl>
						<li>Three of the core methods for changing automatic thoughts are:<br> 1) labeling cognitive errors,<br> 2) examining the evidence,<br> and 3) developing rational alternatives.</li>
						<li>Repeated use of Thought Change Records can help make rational thinking a central part of your life.</li>
						<li>Coping Cards can help you transfer the benefits of cognitive therapy into everyday life.</li>
						<li>Some of the most useful ways to counter low energy, diminished interest, and problems completing tasks are Activity Scheduling and the Step-by-Step approach.</li>
						<li>Cognitive therapy principles can help you set and reach effective goals.</li>
						</bl>
						</div>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Let’s review the recommended exercises for this Lesson.</p>
						`,
          },
        ],
      },
      {
        title: 'Recommended Exercises for Lesson 8',
        unitNo: '15',
        subtitle: '',
        content: [
          {
            type: 'text',
            html: `
						<p>How much have you used the Practice section of Good Days Ahead? Are you using cognitive therapy methods for situations in your own life? Research on cognitive therapy has shown that people who do “homework” to practice their skills get the most from this scientifically proven form of therapy.</p>
						<p>We hope that you will take the opportunity to use the Practice section to put cognitive therapy into action. The next series of exercises will help you do this.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Recommended Exercises:</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<ol>
						<li>Review the Tips for Changing Automatic Thoughts and the Tips for Setting Effective Goals.</li>
						<li>Update your Personal Lists of Negative and Positive Automatic Thoughts with changes you’ve made since you started using Good Days Ahead.</li>
						<li>Write out one or more Thought Change Records for situations where a TCR could help.</li>
						<li>Use the Examining the Evidence exercise to evaluate at least one of your troubling automatic thoughts.</li>
						<li>Develop one or more coping cards that will help you manage or solve problems.</li>
						<li>Work with the Rational Alternatives exercise to develop constructive alternatives to your negative automatic thoughts.</li>
						</ol>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Let’s return to the Homepage so you can decide what to do next.</p>
						`,
          },
        ],
      },
    ],
    practices: [
      { practiceId: 1, reviewNo: 1 },
      { practiceId: 0, reviewNo: 1 },
      { practiceId: 7, reviewNo: 1 },
      { practiceId: 5, reviewNo: 1 },
      { practiceId: 13, reviewNo: 1 },
      { practiceId: 25, reviewNo: -1 },
      { practiceId: 26, reviewNo: -1 },
    ],
  },
  {
    title: 'Putting It Together II',
    hero_url: '/gda/heros/hero9.jpg',
    // hero_url: "https://empower-content-resources.s3.amazonaws.com/uploads/content_resource/file/136/hero9.jpg",
    lessonNo: '9',
    takeAways: [
      'How to strengthen your skills for taking action',
      'How to plan for making behavioral changes',
      'How much progress you have made in learning to change schemas',
      'How to continue your progress in developing healthy schemas',
    ],
    units: [
      {
        title: 'Building on Your Progress',
        subtitle: '',
        unitNo: '1',
        content: [
          {
            type: 'title',
            html: `
						<h3>Strengthening Your Cognitive Therapy Skills</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>In this final part of Good Days Ahead, we’ll focus on sharpening your abilities to use some of the most powerful cognitive therapy methods for overcoming depression and anxiety.</p>
						<p>Our goals are to help you refine and strengthen your skills for:</p>
						<bl>
						<li>Taking Action</li>
						<li>Changing Schemas</li>
						</bl>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Helping Lisa Take Action</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Next, we’ll take a few moments to go back over the scene where Lisa is getting ready for a party.</p>
						<p>In previous exercises with this scene, we’ve worked on helping Lisa change her negative automatic thoughts. This time we’ll take a closer look at <strong>the way she acts.</strong></p>
						`,
          },
          {
            type: 'video',
            videos: {
              1: {
                id: '1545587226001',
                poster: '/gda/content/posters/rushing-l9-u1.jpg',
                src: `${GDA_VIDEOS}1545587226001` + `.mp4`,
              },
              2: {
                id: '1545587226001',
                poster: '/gda/content/posters/wright-l9-u1.jpg',
                src: `${GDA_VIDEOS}1545587226001` + `.mp4`,
              },
            },
          },
          {
            type: 'text',
            html: `
						<p>Try to watch Lisa carefully so that you can identify her negative or maladaptive behaviors.</p>
						`,
          },
        ],
        quizzes: [
          {
            quiz_id: 153,
            title: 'In this scene, Lisa:',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 500,
                name: 'Stands up for herself',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 501,
                name: 'Demonstrates good problem solving skills',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 502,
                name: "Acts like she's defeated by the situation",
                correct: true,
                selected_text:
                  "That's right. Lisa engages in several negative behaviors in this scene. She acts like she's helpless to manage the situation. Instead of trying to find a satisfactory solution to the problem, Lisa gives up and tells Ben to go to the party alone.",
                unselected_text:
                  "Lisa engages in several negative behaviors in this scene. She acts like she's helpless to manage the situation. Instead of trying to find a satisfactory solution to the problem, Lisa gives up and tells Ben to go to the party alone.",
              },
              {
                quiz_option_id: 503,
                name: '	Shows that she can be assertive',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 504,
                name: 'Gets support to help her manage the problem',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
        ],
      },
      {
        title: 'Using a Behavior Change Planner',
        unitNo: '2',
        subtitle: '',
        content: [
          {
            type: 'title',
            html: `
						<h3>Organize a Plan for Change</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Let’s try to help Lisa make plans to manage this situation more effectively by using the <strong>Behavior Change Planner</strong>. This self-help tool can help you organize a plan for change.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>How to Use the Behavior Change Planner</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<bl>
						<li>Step 1: Monitor your behavior closely. List one behavior you would like to change.</li>
						<li>Step 2: Write out a plan of action. List 1-5 specific things you will do to change. Try to identify practical actions you can take.</li>
						<li>Step 3: Put your plan into action. Record the changes you actually make. You can come back to the <strong>Practice</strong> section anytime to make notes on your progress or to make revisions that will help make your plan a success.</li>	
						</bl>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>We’ll work on helping Lisa with behaving more effectively when Ben pressured her to attend the party. One of the problems that she might have identified is “acting in a defeated manner.”</p>
						`,
          },
        ],
        quizzes: [
          {
            quiz_id: 154,
            title: "Lisa's Action Plan",
            subtitle:
              'Answer Yes if you would like to add this item to Lisa\'s plan for action: "Tell Ben to "get lost"."',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 505,
                name: 'Yes',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 506,
                name: 'No',
                correct: true,
                selected_text:
                  "It might be tempting to unload on Ben and tell him to get lost. He's irritable and insensitive in this scene. But, an angry outburst from Lisa could make the situation worse.",
                unselected_text:
                  "It might be tempting to unload on Ben and tell him to get lost. He's irritable and insensitive in this scene. But, an angry outburst from Lisa could make the situation worse.",
              },
            ],
          },
          {
            quiz_id: 155,
            title: "Lisa's Action Plan",
            subtitle:
              'Answer Yes if you would like to add this item to Lisa\'s plan for action: "Label and modify automatic thoughts."',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 507,
                name: 'Yes',
                correct: true,
                selected_text:
                  "It's almost always useful to try to change automatic thoughts if they are stirring up painful emotions such as tension, anxiety, or sadness.",
                unselected_text:
                  "It's almost always useful to try to change automatic thoughts if they are stirring up painful emotions such as tension, anxiety, or sadness.",
              },
              {
                quiz_option_id: 508,
                name: 'No',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 156,
            title: "Lisa's Action Plan",
            subtitle:
              'Answer "Yes" if you would like to add this item to Lisa\'s plan for action: "Blow off steam by throwing pillows or other things in the bedroom."',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 509,
                name: 'Yes',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 510,
                name: 'No',
                correct: true,
                selected_text:
                  'Although it can be good to express emotions so that they are not always stuffed inside, it seems unlikely that throwing things will help Lisa manage this situation.',
                unselected_text:
                  'Although it can be good to express emotions so that they are not always stuffed inside, it seems unlikely that throwing things will help Lisa manage this situation.',
              },
            ],
          },
          {
            quiz_id: 157,
            title: "Lisa's Action Plan",
            subtitle:
              'Answer Yes if you would like to add this item to Lisa\'s plan for action: "Ask Ben to help with the kids."',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 511,
                name: 'Yes',
                correct: true,
                selected_text:
                  'Even though Ben is tense and irritable himself, he might respond favorably to a reasonable request for help.',
                unselected_text:
                  'Even though Ben is tense and irritable himself, he might respond favorably to a reasonable request for help.',
              },
              {
                quiz_option_id: 512,
                name: 'No',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 158,
            title: "Lisa's Action Plan",
            subtitle:
              'Answer Yes if you would like to add this item to Lisa\'s plan for action: "Explain the problem to Ben and ask him to be more understanding."',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 513,
                name: 'Yes',
                correct: true,
                selected_text:
                  "A careful explanation and a request for support may not always work. However, the overall quality of Lisa's relationship with Ben suggests that there is a good chance that he would listen to her and respond favorably.",
                unselected_text:
                  "A careful explanation and a request for support may not always work. However, the overall quality of Lisa's relationship with Ben suggests that there is a good chance that he would listen to her and respond favorably.",
              },
              {
                quiz_option_id: 514,
                name: 'No',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 159,
            title: "Lisa's Action Plan",
            subtitle:
              'Answer Yes if you would like to add this item to Lisa\'s plan for action: "Make Ben feel sorry for me."',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 515,
                name: 'Yes',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 516,
                name: 'No',
                correct: true,
                selected_text: 'Making people feel sorry for you is rarely helpful.',
                unselected_text: 'Making people feel sorry for you is rarely helpful.',
              },
            ],
          },
          {
            quiz_id: 160,
            title: "Lisa's Action Plan",
            subtitle:
              'Answer Yes if you would like to add this item to Lisa\'s plan for action: "Tell Ben all my automatic thoughts."',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 517,
                name: 'Yes',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 518,
                name: 'No',
                correct: true,
                selected_text:
                  'A certain amount of discretion is needed in telling others about your automatic thoughts. Stop and think about the impact of automatic thoughts before expressing them out loud.',
                unselected_text:
                  'A certain amount of discretion is needed in telling others about your automatic thoughts. Stop and think about the impact of automatic thoughts before expressing them out loud.',
              },
            ],
          },
          {
            quiz_id: 161,
            title: "Lisa's Action Plan",
            subtitle:
              'Answer Yes if you would like to add this item to Lisa\'s plan for action: "Use a problem solving attitude."',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 519,
                name: 'Yes',
                correct: true,
                selected_text: 'Lisa could clearly benefit from considering possible solutions to the problem.',
                unselected_text: 'Lisa could clearly benefit from considering possible solutions to the problem.',
              },
              {
                quiz_option_id: 520,
                name: 'No',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 162,
            title: "Lisa's Action Plan",
            subtitle:
              'Answer Yes if you would like to add this item to Lisa\'s plan for action: "Downplay the problem, and focus on something else."',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 521,
                name: 'Yes',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 522,
                name: 'No',
                correct: true,
                selected_text:
                  "Sometimes it can be helpful to try to stop worrying so much about a problem – especially if it is a minor issue that doesn't have any great impact on you or others. However, the argument with Ben is a significant one, and probably needs to be addressed directly.",
                unselected_text:
                  "Sometimes it can be helpful to try to stop worrying so much about a problem – especially if it is a minor issue that doesn't have any great impact on you or others. However, the argument with Ben is a significant one, and probably needs to be addressed directly.",
              },
            ],
          },
          {
            quiz_id: 163,
            title: "Lisa's Action Plan",
            subtitle:
              'Answer Yes if you would like to add this item to Lisa\'s plan for action: "Go to the party for a short while."',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 523,
                name: 'Yes',
                correct: true,
                selected_text:
                  'Attending the party for a limited amount of time might be a good way for Lisa and Ben to compromise in solving their problem.',
                unselected_text:
                  'Attending the party for a limited amount of time might be a good way for Lisa and Ben to compromise in solving their problem.',
              },
              {
                quiz_option_id: 524,
                name: 'No',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
        ],
      },
      {
        title: "Lisa's Plan of Action",
        unitNo: '3',
        subtitle: '',
        content: [
          {
            type: 'title',
            html: `
						<h3>You're Making Good Choices</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>You’ve identified a plan for action that looks very promising.</p>
						<p>An appropriate and well placed request for help from Ben is definitely in order.</p>
						<p>But, it is rarely a helpful idea to tell someone all of your automatic thoughts. A good dose of discretion is usually advisable. If Lisa uses a clear-headed, problem solving attitude, her plan will probably yield positive results.</p>
						`,
          },
          {
            type: 'video',
            videos: {
              1: {
                id: '1540665863001',
                poster: '/gda/content/posters/rushing-l9-u3.jpg',
                src: `${GDA_VIDEOS}1540665863001` + `.mp4`,
              },
              2: {
                id: '1540665863001',
                poster: '/gda/content/posters/wright-l9-u3.jpg',
                src: `${GDA_VIDEOS}1540665863001` + `.mp4`,
              },
            },
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Let’s move on to the third section of the Behavior Change Planner.</p>
						<p>This step involves recording the things that you actually do to put your plan into action.</p>
						<p>In the next series of quiz questions, you’ll be asked whether or not you think that Lisa made these changes in her behavior.</p>
						`,
          },
        ],
        quizzes: [
          {
            quiz_id: 164,
            title: "Lisa's Behavior Changes",
            subtitle: 'Select the changes you think Lisa made in her behavior.',
            instruction: 'Select all that apply.',
            options: [
              {
                quiz_option_id: 525,
                name: 'I helped find a compromise solution',
                correct: true,
                selected_text: 'Correct.',
                unselected_text: '',
              },
              {
                quiz_option_id: 526,
                name: 'I modified my automatic thoughts.',
                correct: true,
                selected_text: 'Correct.',
                unselected_text: '',
              },
              {
                quiz_option_id: 527,
                name: 'I clearly explained the situation to Ben.',
                correct: true,
                selected_text: 'Correct.',
                unselected_text: '',
              },
              {
                quiz_option_id: 528,
                name: 'I put Ben down for being so critical.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 529,
                name: 'I told Ben some specific things he could do to help.',
                correct: true,
                selected_text: 'Correct.',
                unselected_text: '',
              },
              {
                quiz_option_id: 530,
                name: 'I let all my feelings out.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 531,
                name: 'I made Ben responsible for solving the problem.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 532,
                name: "I acted like Ben's behavior didn't bother me at all.",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 165,
            title: "Lisa's Behavior Changes",
            subtitle:
              'Lisa made many positive changes that helped her manage the situation effectively. After she reduced the negatively toned features of her automatic thoughts, she was able to have a productive discussion with Ben that led to a reasonable solution.',
            instruction: 'Select all that apply.',
          },
        ],
      },
      {
        title: "A Summary of Lisa's Plan",
        unitNo: '4',
        subtitle: '',
        content: [
          {
            type: 'title',
            html: `
						<h3>Good Work in Helping Lisa</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>You’ve done a nice job using the Behavior Change Planner.</p>
						<p>If you have learned how to modify automatic thoughts, monitor behavior, and make plans for change, you’ll have plenty of ideas to record on this form.</p>
						`,
          },
          {
            type: 'image',
            images: {
              src: '/gda/images/lesson-9-unit-4-1.png',
              alt: 'lesson-9-unit-4-1 Image',
            },
          },
          {
            type: 'image',
            images: {
              src: '/gda/images/lesson-9-unit-4-2.png',
              alt: 'lesson-9-unit-4-2 Image',
            },
          },
          {
            type: 'image',
            images: {
              src: '/gda/images/lesson-9-unit-4-3.png',
              alt: 'lesson-9-unit-4-3 Image',
            },
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>It’s time to use the Behavior Change Planner to work on some of the stressful situations that you may be facing.</p>
						<p>Remember, the Behavior Change Planner is also included in the Practice section, so that you can use this tool at any time.</p>
						`,
          },
        ],
        practices: [{ practiceId: 14, reviewNo: 1 }],
      },
      {
        title: 'Tips for Taking Action',
        unitNo: '5',
        subtitle: '',
        content: [
          {
            type: 'title',
            html: `
						<h3>Use the Three Steps</h3>
    				`,
          },
          {
            type: 'text',
            html: `
						<p>Use the three steps for taking action – <strong>monitor, plan, and act</strong> – when you want to change your behavior.</p>	
    				`,
          },
          {
            type: 'title',
            html: `
						<h3>Activity Scheduling</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Activity scheduling is an extremely powerful technique that can be used to counter states of deep depression and to overcome problems with decreased interest, low productivity, or poor self-esteem.</p>
						<p>After you start to improve, you probably won’t need to carefully record all of your activities. However, you may want to continue to use activity scheduling for some special purposes such as reducing procrastination or increasing your level of efficiency.</p>
						<p>Also, you may find activity scheduling helpful if you start to slip back into depression.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Step-by-Step Approach</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>The step-by-step approach is one of the fundamental cognitive therapy procedures for taking action.</p>
						<p> When you utilize the step-by-step approach, you may need a detailed plan like the one Lisa used to manage the problem with her home office. But, sometimes a less complex plan will get the job done. For example, you might have to list only a few steps for tasks such as “cleaning the hall closet.”</p>
						<p>Tasks that are particularly challenging or complex, such as “getting a new job” may require a carefully laid out plan with multiple steps.</p>
						<p>No matter how difficult the task, the same basic principles of using the step-by-step approach always apply.</p>
						<bl>
						<li> Step 1: Identify an action or task that seems difficult or challenging.</li>
						<li> Step 2: List the steps that might be required to manage the situation.</li>
						<li> Step 3: Identify small steps that can be handled without too much trouble.</li>
						<li> Step 4: Begin with the least difficult steps.</li>				
						<li> Step 5: Take on larger or more challenging steps as you gain confidence and experience.</li>
						<li> Step 6: Monitor your thoughts about taking the steps and use what you’ve learned in cognitive therapy to modify negative thoughts.</li>
						<li> Step 7: Give yourself credit for the progress you are making.</li>
						<li> Step 8: If you are having difficulty completing the steps, review the problem and develop another strategy (for example, take smaller steps, obtain instruction or advice, modify your thinking).</li>
						</bl>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>For Phobias or Panic Attacks</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>People who have phobias or panic attacks may find the step-by-step approach particularly useful in overcoming their fears. If you have this type of problem, you can attack your fears in step-wise fashion.</p>
						<p>For example, if you were afraid of crowds, you could set up a step-by-step method of getting used to the situation and gaining confidence that you could be around large groups of people. You might start with going to a small meeting where only a few people would be expected to be present. Then you could practice being in groups of gradually increasing size until you become comfortable with large crowds.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Behavior Change Planner and Coping Cards</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Use the Behavior Change Planner as a method of focusing your efforts on taking action. Writing your plans down can be a big help in getting things done.</p>
						<p>After you develop your ideas, you can use Coping Cards to help you carry out your plans.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Try to Set Rational Goals for Taking Action</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>You might remember that we reviewed Tips for Setting Goals in the last lesson. You’ll have a greater chance of reaching your objectives if you follow these guidelines.</p>
						`,
          },
        ],
      },
      {
        title: 'Changing Schemas',
        unitNo: '6',
        subtitle: '',
        content: [
          {
            type: 'title',
            html: `
						<h3>Strengthening Your Skills for Changing Schemas</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>In Lesson 7, you learned the basic principles for changing schemas. But, making effective changes in negative core beliefs may take some time and effort.</p>
						<p>This final section of Good Days Ahead will help you measure your progress in learning to modify schemas and will give you opportunities to practice putting your schema-changing skills to work.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>We’ll ask you some questions to check your understanding of the basic principles of changing schemas and to help solidify your knowledge of cognitive therapy methods.</p>
						`,
          },
        ],
        quizzes: [
          {
            quiz_id: 166,
            title: 'A schema can be defined as:',
            subtitle: '',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 533,
                name: 'A strong emotional experience.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 534,
                name: 'An underlying attitude or rule.',
                correct: true,
                selected_text:
                  "That's right. A schema is an underlying attitude or rule that we assume to be true. One of the main objectives of cognitive therapy is to uncover and change negatively distorted schemas.",
                unselected_text:
                  'A schema is an underlying attitude or rule that we assume to be true. One of the main objectives of cognitive therapy is to uncover and change negatively distorted schemas.',
              },
              {
                quiz_option_id: 535,
                name: 'A pattern of negative behavior.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 536,
                name: 'A repetitive problem in a relationship.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 167,
            title: 'The relationship between schemas and automatic thoughts can be described as follows:',
            instruction: 'Select one response below',
            options: [
              {
                quiz_option_id: 537,
                name: 'The two have little influence on one another.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 538,
                name: 'Both are the products of emotions.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 539,
                name: 'Schemas underlie automatic thoughts.',
                correct: true,
                selected_text: 'Schemas are the basic rules or assumptions that drive our automatic thoughts.',
                unselected_text: 'Schemas are the basic rules or assumptions that drive our automatic thoughts.',
              },
              {
                quiz_option_id: 540,
                name: 'Schemas are products of automatic thoughts.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 168,
            title:
              'Some maladaptive schemas have both disadvantages and advantages. What can you do to modify a schema that has advantages?',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 541,
                name: 'Forget about the advantages',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 542,
                name: 'Focus only on the disadvantages of the schema',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 543,
                name: 'Exaggerate the disadvantages of the schema',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 544,
                name: 'Account for the advantages when you revise the schema',
                correct: true,
                selected_text:
                  "Effective modifications of maladaptive schemas deal with both the disadvantages and advantages of these cognitions. We often hang on to maladaptive schemas because they have features that make us work hard, strive for perfection, or seek acceptance. It's usually a good idea to make changes that retain some of the advantages of the schema",
                unselected_text:
                  "Effective modifications of maladaptive schemas deal with both the disadvantages and advantages of these cognitions. We often hang on to maladaptive schemas because they have features that make us work hard, strive for perfection, or seek acceptance. It's usually a good idea to make changes that retain some of the advantages of the schema",
              },
            ],
          },
          {
            quiz_id: 169,
            title: 'Which of the following is not an accepted method of identifying schemas?',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 545,
                name: 'Controlling your emotions.',
                correct: true,
                selected_text:
                  "You correctly recognized that all three of the other choices are good ways of finding schemas. Controlling your emotions isn't a particularly useful way of identifying cognitions. In fact, strong emotions may indicate that important schemas are present.",
                unselected_text:
                  "Controlling your emotions isn't a particularly useful way of identifying cognitions. In fact, strong emotions may indicate that important schemas are present.",
              },
              {
                quiz_option_id: 546,
                name: 'Reading about the experience of others.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 547,
                name: 'Looking for patterns of automatic thoughts.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 548,
                name: 'Reviewing a list of common schemas.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 170,
            title: 'Some good ways to modify schemas include:',
            instruction: 'Select all that apply.',
            options: [
              {
                quiz_option_id: 549,
                name: 'Identifying and listing your schemas',
                correct: true,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 550,
                name: 'Examining the evidence',
                correct: true,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 551,
                name: 'Defending your way of seeing things',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 552,
                name: 'Hanging on to old attitudes',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 553,
                name: 'Listing advantages and disadvantages',
                correct: true,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 171,
            title: 'Feedback on Good Ways to Modify Schemas',
            subtitle:
              'Often simply identifying and listing schemas will get the change process started. You also can work with two of the most valuable techniques for modifying schemas - Examining the Evidence and Listing Advantages and Disadvantages.',
          },
          {
            quiz_id: 181,
            title: 'Which of the following ideas would be helpful in developing alternative schemas?',
            instruction: 'Select all that apply.',
            options: [
              {
                quiz_option_id: 587,
                name: 'Focus only on your positive schemas',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 588,
                name: 'Think of a variety of changes that might make the schema work better',
                correct: true,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 589,
                name: 'Practice new schemas over and over',
                correct: true,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 590,
                name: 'Try to prove that your way is usually right',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 591,
                name: '"Brainstorm" for new ideas',
                correct: true,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 182,
            title: 'Feedback on Helpful Ideas for Developing Alternative Schemas',
            subtitle:
              "You'll have the most success at revising schemas if you keep an open mind and look at a wide range of alternatives. Also, regular practice at using new schemas in real life situations will help you make changes that last.",
          },
        ],
      },
      {
        title: 'Helping Lisa',
        unitNo: '7',
        subtitle: '',
        content: [
          {
            type: 'title',
            html: `
						<h3>Getting More Experience</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Now it’s time to get some more experience with spotting and modifying schemas. We’ll go back to the scene where Lisa is trying to organize her home office.</p>
						<p>First we’ll try to spot possible underlying schemas for Lisa’s automatic thoughts.</p>
						`,
          },
          {
            type: 'video',
            videos: {
              1: {
                id: '1545603030001',
                poster: '/gda/content/posters/rushing-l9-u7.jpg',
                src: `${GDA_VIDEOS}1545603030001` + `.mp4`,
              },
              2: {
                id: '1545603030001',
                poster: '/gda/content/posters/wright-l9-u7.jpg',
                src: `${GDA_VIDEOS}1545603030001` + `.mp4`,
              },
            },
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>You’ll be able to look at some schemas that might have been having an impact on Lisa.</p>
						`,
          },
        ],
        quizzes: [
          {
            quiz_id: 172,
            title: 'Select any schemas that you think might be operating in this situation.',
            instruction: 'Select all that apply.',
            options: [
              {
                quiz_option_id: 554,
                name: 'I never can be comfortable around others.',
                correct: false,
                selected_text: 'Sorry! Try another one.',
                unselected_text: '',
              },
              {
                quiz_option_id: 555,
                name: "Accepting help means you're weak.",
                correct: true,
                selected_text:
                  "Lisa also could have this schema. She doesn't seem to be responding very favorably to Ben's offer to help. Many of us have dysfunctional attitudes about accepting help from others. Somehow we have developed the idea that it's better to do things \"on our own.\" Taking this attitude to extremes can interfere with getting help when we need it.",
                unselected_text:
                  "Lisa also could have this schema. She doesn't seem to be responding very favorably to Ben's offer to help. Many of us have dysfunctional attitudes about accepting help from others. Somehow we have developed the idea that it's better to do things \"on our own.\" Taking this attitude to extremes can interfere with getting help when we need it.",
              },
              {
                quiz_option_id: 556,
                name: 'Everything must be under control.',
                correct: true,
                selected_text:
                  'That\'s right. An underlying schema about needing total control can cause serious problems when things aren\'t going the way you want. People who believe that all things must be in order at all times can be overwhelmed when it seems like their lives are "out of control."',
                unselected_text:
                  'An underlying schema about needing total control can cause serious problems when things aren\'t going the way you want. People who believe that all things must be in order at all times can be overwhelmed when it seems like their lives are "out of control."',
              },
              {
                quiz_option_id: 557,
                name: "If people knew me, they wouldn't like me.",
                correct: false,
                selected_text: "We haven't seen any evidence that Lisa believes others don't like her.",
                unselected_text: '',
              },
              {
                quiz_option_id: 558,
                name: "I'm responsible for keeping everything under control.",
                correct: true,
                selected_text:
                  'Good choice! Lisa may have an underlying rule that tells her that she is always the one who must keep situations under control. Persons who have these types of schemas may take excessive personal responsibility for maintaining order. Also, they may have trouble trusting others to "do things right."',
                unselected_text:
                  'Lisa may have an underlying rule that tells her that she is always the one who must keep situations under control. Persons who have these types of schemas may take excessive personal responsibility for maintaining order. Also, they may have trouble trusting others to "do things right."',
              },
            ],
          },
        ],
      },
      {
        title: 'Finding Multiple Schemas',
        unitNo: '8',
        subtitle: '',
        content: [
          {
            type: 'title',
            html: `
						<h3>When More Than One Schema is at Work</h3>
    				`,
          },
          {
            type: 'text',
            html: `
						<p>In this example, we were able to identify several possible underlying schemas. Often more than one schema can be behind a series of negative automatic thoughts.</p>
						<p>You’ll find it easier to make major changes if you are able to recognize the different schemas that are influencing your thoughts and behavior.</p>
						<p>Remember that the Practice section has self-help exercises that will help you identify and change your schemas.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>We’ll take some time to return to a key exercise from Lesson 7: developing a <strong>Personal List of Positive Schemas.</strong></p>
						<bl>
						<li>Have you made any changes that can be recorded?</li>
						<li>Are any of these schemas playing a bigger role in controlling your thinking and your moods?</li>
						<li>Can you identify some additional positive schemas?</li>
						</bl>
						`,
          },
        ],
        practices: [{ practiceId: 15, reviewNo: 1 }],
      },
      {
        title: 'Using Positive Schemas',
        unitNo: '9',
        subtitle: '',
        content: [
          {
            type: 'title',
            html: `
						<h3>Keep Your Positive Schemas in Mind</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>As we move ahead to work on changing negative schemas, we hope that you won’t forget to give your positive core beliefs “top of mind awareness.” They can help you overcome negative thinking and guide you in your path to recovery.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>We’ll work on changing Lisa’s schema: “Everything must be under control.” First we’ll examine the evidence.</p>
						`,
          },
        ],
        quizzes: [
          {
            quiz_id: 173,
            title: 'Select the answers that provide good Evidence For the schema "Everything must be under control."',
            instruction: 'Select all that apply.',
            options: [
              {
                quiz_option_id: 559,
                name: "It's impossible to control everything.",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 560,
                name: 'Life is full of things that are out of my control.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 561,
                name: "I've handled many situations where everything wasn't under control.",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 562,
                name: 'I feel anxious if it seems like things are out of order.',
                correct: true,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 563,
                name: 'I can tolerate things being somewhat out of control.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 564,
                name: "No matter how hard I try, I can't control everything.",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 565,
                name: "I don't really need absolute control of everything around me.",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 174,
            title: 'Evidence For the Schema "Everything Must Be Under Control"',
            subtitle:
              'There\'s plenty of evidence to be found against this schema. The statement "everything must be in control" is very absolute and demanding. It ignores the fact that there are many things in life that are either completely out of our control or can only be brought under a limited amount of control. This schema sets you up for trouble when something interferes with you exerting your normal level of control or when you go overboard in trying to control things. We can find out more about the negative effects of this schema by *listing advantages and disadvantages*.',
          },
          {
            quiz_id: 175,
            title: 'Select the answers that are Advantages for the schema "Everything must be under control."',
            instruction: 'Select all that apply.',
            options: [
              {
                quiz_option_id: 566,
                name: "I feel like I'm failing if things aren't under total control.",
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 567,
                name: 'This schema makes me very tense.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 568,
                name: 'I try hard to keep everything in order.',
                correct: true,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 569,
                name: 'I get overly worried when there are lots of "loose ends."',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 570,
                name: 'I can get overwhelmed if things seem out of control.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 571,
                name: 'I usually have things in good shape.',
                correct: true,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 572,
                name: 'I may seem overly controlling to others.',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 176,
            title: 'Advantages For the Schema "Everything Must Be Under Control."',
            subtitle:
              'As you can see, this schema has many more disadvantages than advantages. Unless Lisa can feel like she is in total control of everything around her, she gets anxious and tense. At times she may try too hard to control things and exhaust herself in the effort. On the other hand, she may feel so badly when the situation seems "out of control" that she may be tempted to just give up. Of course we all need to feel like our lives are under a *reasonable* level of control. Techniques such as the Step-by-Step approach can help you gain better control of difficult situations. The most important question here is: Are you able to strive for a reasonable level of control? Some *alternative* schemas should help. So, let\'s see what we can do.',
          },
          {
            quiz_id: 177,
            title:
              'Choose the answers that provide good rational alternatives to the schema: "Everything must be under control."',
            instruction: 'Select all that apply.',
            options: [
              {
                quiz_option_id: 573,
                name: 'I would like to have things under control.',
                correct: true,
                selected_text: 'This revision eliminates the "must" statement and makes the schema less absolute.',
                unselected_text: 'This revision eliminates the "must" statement and makes the schema less absolute.',
              },
              {
                quiz_option_id: 574,
                name: 'I should give up trying to control anything.',
                correct: false,
                selected_text:
                  "It's doubtful that Lisa, or anyone else for that matter, could totally give up trying to exert control. This modification is an example of a change that goes too far in the opposite direction.",
                unselected_text: '',
              },
              {
                quiz_option_id: 575,
                name: 'I can control everything within my power.',
                correct: false,
                selected_text:
                  'Although this alternative steps back a bit from the original schema (which stated that she must control everything), it still is too extreme.',
                unselected_text: '',
              },
              {
                quiz_option_id: 576,
                name: "I can tolerate things that aren't totally under control.",
                correct: true,
                selected_text:
                  "For most situations in life, we are never fully in control. Who ever knows for sure what will happen next? The best that we can do is to accept our limitations and try to be comfortable with the level of control that we can achieve. Lisa's statement that she can tolerate less than total control is a good step forward. The revised schema emphasizes her ability to cope with the anxiety of not having things under absolute control.",
                unselected_text:
                  "For most situations in life, we are never fully in control. Who ever knows for sure what will happen next? The best that we can do is to accept our limitations and try to be comfortable with the level of control that we can achieve. Lisa's statement that she can tolerate less than total control is a good step forward. The revised schema emphasizes her ability to cope with the anxiety of not having things under absolute control.",
              },
              {
                quiz_option_id: 577,
                name: "I can accept myself when I don't have everything in control.",
                correct: true,
                selected_text:
                  "Most people with schemas about control get angry at themselves when things don't seem to be in proper order. Putting yourself down doesn't help you handle situations where you think that things are out of control. Instead, you could try to set reasonable expectations for a healthy level of control and then use cognitive therapy techniques to meet your goals.",
                unselected_text:
                  "Most people with schemas about control get angry at themselves when things don't seem to be in proper order. Putting yourself down doesn't help you handle situations where you think that things are out of control. Instead, you could try to set reasonable expectations for a healthy level of control and then use cognitive therapy techniques to meet your goals.",
              },
              {
                quiz_option_id: 578,
                name: 'I want to have a reasonable amount of control over my life.',
                correct: true,
                selected_text:
                  'This alternative schema would be much more adaptive than the original rule: "everything must be under control."',
                unselected_text:
                  'This alternative schema would be much more adaptive than the original rule: "everything must be under control."',
              },
            ],
          },
        ],
      },
      {
        title: 'Recording Your Progress in Changing Schemas',
        unitNo: '10',
        subtitle: '',
        content: [
          {
            type: 'title',
            html: `
						<h3>The Benefits of Recording Changes</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Research has shown that people who monitor and record their efforts to change often get better results. So, we’ve designed a brief exercise that will help you track your efforts to develop a healthier style of thinking.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Negative Schema Update Exercise</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>The next exercise will help you evaluate your progress in changing schemas and make notes on any additional steps you may want to take.</p>
						`,
          },
        ],
        practices: [{ practiceId: 16, reviewNo: 1 }],
      },
      {
        title: 'Introduction to the Schema Change Log',
        unitNo: '11',
        subtitle: '',
        content: [
          {
            type: 'video',
            videos: {
              1: {
                id: '1540739146001',
                poster: '/gda/content/posters/rushing-l9-u11.jpg',
                src: `${GDA_VIDEOS}1540739146001` + `.mp4`,
              },
              2: {
                id: '1824567918001',
                poster: '/gda/content/posters/wright-l9-u11.jpg',
                src: `${GDA_VIDEOS}1824567918001` + `.mp4`,
              },
            },
          },
          {
            type: 'text',
            html: `
							<p>People who log their efforts to change can make more progress.</p>
							`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>We’ll take a look at how Lisa has been tracking her progress in changing schemas.</p>
						`,
          },
        ],
      },
      {
        title: 'Following Up with Lisa and Ben',
        unitNo: '12',
        subtitle: '',
        content: [
          {
            type: 'video',
            videos: {
              1: {
                id: '1540739145001',
                poster: '/gda/content/posters/rushing-l9-u12.jpg',
                src: `${GDA_VIDEOS}1540739145001` + `.mp4`,
              },
              2: {
                id: '1540739145001',
                poster: '/gda/content/posters/wright-l9-u12.jpg',
                src: `${GDA_VIDEOS}1540739145001` + `.mp4`,
              },
            },
          },
          {
            type: 'text',
            html: `
						<p>Watch how Lisa uses the Schema Change Log and shares her experience with Ben.</p>
						`,
          },
        ],
      },
      {
        title: 'Wrapping Up',
        unitNo: '13',
        subtitle: '',
        content: [
          {
            type: 'title',
            html: `
						<h3>You've Come a Long Way</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>A pat on the back is definitely in order. You are almost finished with Lesson 9 and appear to have had good success in learning effective self-help methods of cognitive therapy.</p>
						<p>To wrap up our work on Lesson 9, we’ll do two more things. First we’ll briefly review your Personal List of Negative Schemas to see how much change has occurred so far. Then we’ll conclude the program with a few suggestions for how to get the most out of your efforts to change schemas.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Let’s do a quick check-up using the Schema Change Log to see how many of your negative schemas have started to change.</p>
						`,
          },
        ],
        practices: [{ practiceId: 17, reviewNo: 1 }],
      },
      {
        title: 'Tips for Changing Schemas',
        unitNo: '14',
        subtitle: '',
        content: [
          {
            type: 'title',
            html: `
						<h3>Identify Schemas in Several Different Ways</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>First, look for schemas in patterns of automatic thoughts. Schemas are the basic attitudes or rules that underlie our automatic thoughts. Another good way to recognize schemas is to read about the experiences of others.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>List of Recommended Self-Help Books</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<bl>
						<li>Barlow DH, Craske MG: Mastery of Your Anxiety and Panic. Oxford University Press, 2007</li>
						<li>Basco MR: Never Good Enough. The Free Press, 1999</li>
						<li>Burns DD: Feeling Good. Avon Books, 1999</li>
						<li>Greenberger D, Padesky CA: Mind Over Mood. Guilford Press, 1995</li>
						<li>Wright JH, Basco MR: Getting Your Life Back: The Complete Guide to Recovery from Depression. Touchstone, 2002</li>
						<li>Wright JH, McCray LW: Breaking Free from Depression: Pathways to Wellness. Guilford Press, 2011</li>
						</bl>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Other Ways to Identify Schemas</h3>
    				`,
          },
          {
            type: 'text',
            html: `
  					<p>You also can identify personal schemas by completing checklists such as the one contained in this learning program.</p>
						<p>The most powerful and thorough way to uncover schemas is to be involved in cognitive therapy. Your therapist will point out possible schemas and suggest exercises to help you learn more about your basic attitudes.</p>
  					`,
          },
          {
            type: 'title',
            html: `
						<h3>Using Your Positive and Negative Schema Lists</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Take the time to review and revise your Personal Lists of Adaptive and Maladaptive Schemas. Add any newly uncovered schemas as soon as you identify them.</p>
						<p>Remember negative schemas are often below the surface. They may be relatively dormant or inactive when you are feeling well. However, they can resurface when you are under stress or when you become depressed or anxious.</p>
						<p>Keeping a list will help you to recall your schemas and stay focused on change. Even if you have recovered from depression or anxiety, it will still help you to work on your Schema Lists.</p>
						<p>As you revise your schemas, you’ll probably be able to handle stress better, feel less tense or driven, and have improved self-esteem.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Remember the Tips for Finding Rational Alternatives</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<ol>
						<li>Brainstorm to open up your mind to a wide range of possibilities.</li>
						<li>Spot “If-Then” statements.</li>
						<li>Identify extremes in thinking – watch for absolute words such as “always” or “never.”</li>
						<li>Think toward the future – imagine yourself having adaptive, positive core beliefs to replace maladaptive, negative schemas.</li>
						<li>Learn from others – listen to positive people in your life, read about how others have found ways to develop healthy core beliefs, check some of the self-help books recommended in this program.</li>
						</ol>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Rehearse Your New Schemas</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Sometimes it’s difficult to immediately put a modified schema into action in real life situations.</p>
						<p>In this case, it may be helpful to use a technique called cognitive-behavioral rehearsal to get you ready to use your alternative schema. When you perform cognitive-behavioral rehearsal, you think through a scene in advance to prepare for what to expect.</p>
						<p>Championship athletes often use a similar technique to visualize the challenges of an upcoming event. For example, a downhill skier might imagine skiing on a specific course under a variety of conditions so that she or he is fully prepared for what might happen.</p>
						<p>You can do the same type of advance planning for handling the possible uncertainties of using a new schema. Try to visualize various scenes where the revised schema might cause you to act differently. Then practice how you could respond.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Track Use of Your New Schemas</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>If you want to make fundamental changes in your schemas, you’ll need to actually use the new beliefs repeatedly in real life situations.</p>
						<p>A Negative Schema Update is included in the exercises to help you keep track of your efforts to use new schemas in daily life.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Give Yourself Credit for Effort</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>The final tip is to give yourself credit for all the efforts that you have made.</p>
						<p>You’ve worked hard, and many new things have been learned. If you recognize your gains, you’ll have greater confidence to keep stretching to reach your goals.</p>
						<p>It helps to pause on occasion to tell yourself that you’ve done a good job or that you have accomplished something important.</p>
						`,
          },
        ],
      },
      {
        title: 'Lesson 9 Summary',
        unitNo: '15',
        subtitle: '',
        content: [
          {
            type: 'title',
            html: `
						<h3>How Well Do You Understand the Key Principles of Cognitive Therapy?</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Have you learned the basics of cognitive therapy? Can you put the lessons to use in your own life?  Will you be able to continue your progress?</p>
						<p>We hope that you can answer yes to all three questions and that you can give yourself credit for a job well done.</p>
						`,
          },
          {
            type: 'video',
            videos: {
              1: {
                id: '1540693577001',
                poster: '/gda/content/posters/rushing-l9-u15.jpg',
                src: `${GDA_VIDEOS}1540693577001.mp4`,
              },
              2: {
                id: '1824567414001',
                poster: '/gda/content/posters/wright-l9-u15.jpg',
                src: `${GDA_VIDEOS}1824567414001.mp4`,
              },
            },
          },
          {
            type: 'text',
            html: `
						<p>Good bye and we wish you the best of luck.</p>
						`,
          },
          {
            type: 'text',
            html: `
						<div class="takeaways">
						<h3>Summary Points</h3>
						<bl>
						<li>Some of the most powerful cognitive therapy tools for taking action are Activity Scheduling, the Step-by-Step approach, and using a Behavioral Change Planner.</li>
						<li>It can take time and effort to change schemas. However, there are many benefits in developing schemas that will give you a healthy direction for life.</li>
						<li>To change schemas, it can help to Examine the Evidence, weigh Advantages and Disadvantages, develop Rational Alternatives, and create Action Plans.</li>
						<li>You’ve made lots of progress, and you should now have effective cognitive therapy skills that you can use to overcome depression and anxiety.</li>
						<li>Continued practice can help you hold on to your cognitive therapy skills and make them an even stronger part of your efforts to get well and stay well.</li>
						</bl>
						</div>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Let’s review the recommended exercises for this lesson.</p>
						`,
          },
        ],
      },
      {
        title: 'Recommended Exercises for Lesson 9',
        unitNo: '16',
        subtitle: '',
        content: [
          {
            type: 'title',
            html: `
						<h3>A Final List of Suggested Homework</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Let’s take a look at the last set of practice exercises.</p>
						<p>You can do any of the exercises in Good Days Ahead, by going to the Practice section.</p>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Recommended Exercises</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<ol>
						<li>Review an Activity Schedule that you have completed or start a new activity schedule.</li>
						<li>Read the Tips for Taking Action and the Tips for Changing Schemas.</li>
						<li>Use the Behavioral Change Planner to create at least one more plan to act in ways that help you pull out of depression or reduce anxiety.</li>
						<li>Use the Changing Schemas exercise to choose at least one negative schema that you want to change.</li>
						<li>Use the Negative Schema Update exercise to make notes on your progress.</li>
						<li>Use the Schema Change Log to record any progress on changing your schemas.</li>
						<li>Tune in to your positive schemas by reviewing the list you developed earlier in the program. Then try to think of other positive core beliefs that you could add to the list.</li>
						</ol>
						`,
          },
          {
            type: 'title',
            html: `
						<h3>Next Up</h3>
						`,
          },
          {
            type: 'text',
            html: `
						<p>Congratulations for finishing all 9 lessons of Good Days Ahead! Next, we’ll ask you a few questions about your experiences using Good Days Ahead.</p>
						`,
          },
        ],
        quizzes: [
          {
            quiz_id: 187,
            title: 'How much did Good Days Ahead help you?',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 600,
                name: 'Not at all',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 601,
                name: 'A little',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 602,
                name: 'A moderate amount',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 603,
                name: 'Much',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 604,
                name: 'A great deal',
                correct: true,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 188,
            title: 'How much did you like using the program?',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 605,
                name: 'Not at all',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 606,
                name: 'A little',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 607,
                name: 'A moderate amount',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 608,
                name: 'Much',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 609,
                name: 'A great deal',
                correct: true,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 189,
            title: 'How much would you recommend that other people use Good Days Ahead?',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 610,
                name: 'Not at all',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 611,
                name: 'A little',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 612,
                name: 'A moderate amount',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 613,
                name: 'Much',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 614,
                name: 'A great deal',
                correct: true,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 190,
            title: 'How much do you like computers?',
            instruction: 'Select one response below.',
            options: [
              {
                quiz_option_id: 615,
                name: 'Not at all',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 616,
                name: 'A little',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 617,
                name: 'A moderate amount',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 618,
                name: 'Much',
                correct: false,
                selected_text: '',
                unselected_text: '',
              },
              {
                quiz_option_id: 619,
                name: 'A great deal',
                correct: true,
                selected_text: '',
                unselected_text: '',
              },
            ],
          },
          {
            quiz_id: 191,
            title: 'Thanks for your feedback!',
            subtitle:
              "You've done a great job working through Good Days Ahead.	We hope that you've had a good experience in using this program and that it has helped you gain skills that will make a positive difference in your life.	Now that you've completed the final lesson of Good Days Ahead, we'll return you to the homepage.",
          },
        ],
      },
    ],
    practices: [
      { practiceId: 8, reviewNo: 1 },
      { practiceId: 12, reviewNo: 1 },
      { practiceId: 14, reviewNo: 1 },
      { practiceId: 16, reviewNo: 1 },
      { practiceId: 27, reviewNo: -1 },
      { practiceId: 28, reviewNo: -1 },
    ],
  },
]
