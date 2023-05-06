export const practices = [
  {
    id: 0,
    title: 'Personal List of Positive Thoughts',
    cognitionType: 'Rpt',
    practice: [
      {
        type: 'description',
        display_name: 'Personal List of Positive Thoughts',
        summary:
          'Try to think back over the past several days and remember some of your positive thoughts that may have lifted your mood. Later, you can return to record more positive thoughts.',
        api_type: 'Rpt',
      },
      {
        type: 'positive-thought',
        fields: [
          'I can be a good friend.',
          'He/she probably does respect me.',
          'I can still laugh at things. A sense of humor helps me cope.',
          'I care about him/her.',
          "I'm working on making things better.",
          'I can cope.',
          'My family loves me.',
          'I can still learn.',
          'There are things I enjoy doing in life.',
          'I can have a positive attitude.',
          'People can usually count on me.',
          'I like people.',
          'There are things that count for me in life.',
          'I have the potential for personal growth.',
        ],
      },
      {
        type: 'summary',
      },
    ],
  },
  {
    id: 1,
    title: 'Personal List of Negative Thoughts',
    cognitionType: 'Rnt',
    practice: [
      {
        type: 'description',
        display_name: 'Personal List of Negative Thoughts',
        summary:
          'Negative thoughts have a great influence on our emotions and behaviors. As you observe your negative thoughts, track them by adding to this list.',
        api_type: 'Rnt',
      },
      {
        type: 'negative-thought',
        fields: [
          'I should be doing better in life.',
          "He/she doesn't understand me.",
          "I've let him/her down.",
          "I just can't enjoy things anymore.",
          'Why am I so weak?',
          'I always keep messing things up.',
          "My life's going nowhere.",
          "I can't handle it.",
          "I'm failing.",
          "It's too much for me.",
          "I don't have much of a future.",
          'Things are out of control.',
          'I feel like giving up.',
          'Something bad is sure to happen.',
          'There must be something wrong with me.',
        ],
      },
      {
        type: 'summary',
      },
    ],
  },
  {
    id: 2,
    title: 'Positive Changes in Your Thinking',
    cognitionType: 'Cnt',
    practice: [
      {
        type: 'description',
        display_name: 'Positive Changes in Your Thinking',
        summary: `Try recording positive changes you could make in your thinking. For example, if you had the thought "I can't handle it" you could say "I'm facing some problems. But if I settle down and keep working, I'll be able to take care of it.`,
        api_type: 'Cnt',
      },
      {
        type: 'change-negative-thoughts',
      },
      {
        type: 'summary',
      },
    ],
  },
  {
    id: 3,
    title: 'First 4 Steps of the TCR',
    cognitionType: 'TcrFourStep',
    practice: [
      {
        type: 'description',
        display_name: 'First 4 Steps of the TCR',
        summary:
          'Start Reflecting on Thoughts and Emotions with the First 4 Steps of the TCR. The Thought Change Record (TCR) is a core exercise in cognitive-behavior therapy that helps you reflect on your negative thinking and come up with healthier alternatives. The First 4 Steps of the TCR help you to identify and measure your thoughts and emotions.',
        api_type: 'TcrFourStep',
      },
      {
        type: 'event-autoThought-strength',
      },
      {
        type: 'emotions',
      },
      {
        type: 'summary',
      },
    ],
  },
  {
    id: 4,
    title: 'Cognitive Errors',
    cognitionType: 'Twce',
    practice: [
      {
        type: 'description',
        display_name: 'Cognitive Errors',
        summary: `When you reflect on your automatic thoughts, you try to spot what type of distortions or errors in thinking have occurred. Often a number of cognitive errors can be identified in a single automatic thought. The main point of labeling cognitive errors is to help you start to recognize dysfunctional thinking. You’ll be on your way to a more accurate and healthy thinking style just by recognizing that any cognitive errors are occurring.`,
        api_type: 'Twce',
      },
      {
        type: 'auto-thought-cog-errors',
      },
      {
        type: 'summary',
      },
    ],
  },
  {
    id: 5,
    title: 'Examining the Evidence',
    cognitionType: 'Ete',
    practice: [
      {
        type: 'description',
        display_name: 'Examining the Evidence',
        summary: `Often times, we believe our negative automatic thoughts without checking whether they are true or not. Use this exercise to check the validity of your automatic thoughts. When you Examine the Evidence, you should try to be as objective as possible. Type in all the evidence from your experiences that you can think of that either supports the automatic thought or suggests that it isn't really true.`,
        api_type: 'Ete',
      },
      {
        type: 'automatic-thought',
      },
      {
        type: 'evidences',
      },
      {
        type: 'cognitive-errors',
      },
      {
        type: 'summary',
      },
    ],
  },
  {
    id: 6,
    title: 'Rational Alternatives',
    cognitionType: 'Rat',
    practice: [
      {
        type: 'description',
        display_name: 'Rational Alternatives',
        summary: `What are some rational alternative thoughts that would be more helpful and constructive replacements for your negative automatic thoughts? As you discover alternatives, you can also rate how strongly you believe these alternatives. Just the process of coming up with alternatives can be a helpful tool to challenge your negative thinking.`,
        api_type: 'Rat',
      },
      {
        type: 'automatic-thought',
      },
      {
        type: 'alternative-thought',
      },
      {
        type: 'summary',
      },
    ],
  },
  {
    id: 7,
    title: 'Thought Change Record (TCR)',
    cognitionType: 'Tcr',
    practice: [
      {
        type: 'description',
        display_name: 'Thought Change Record (TCR)',
        summary: `The TCR is a core exercise in Cognitive Behavior Therapy that helps you reflect on negative thinking. This tool helps you to come up with healthier alternatives by following the steps to Identify, Label and Modify automatic thoughts.`,
        api_type: 'Tcr',
      },
      {
        type: 'event-autoThought-strength',
      },
      {
        type: 'emotions',
      },
      {
        type: 'cognitive-errors',
      },
      {
        type: 'alternative-thought',
      },
      {
        type: 'reevaluate',
      },
      {
        type: 'action-plan',
      },
      {
        type: 'summary',
      },
    ],
  },
  {
    id: 8,
    title: 'Activity Schedule',
    cognitionType: 'activity_schedules',
    practice: [
      {
        type: 'description',
        display_name: 'Activity Schedule',
        summary: `Fill out the Activity Schedule with the activities that fill your day. Then rate your ability and level of enjoyment for each task. This exercise will provide perspective on how you spend your time, what activities you enjoy and what tasks can be difficult for you.`,
        // todo change the api_type
        api_type: 'activity_schedules',
      },
      {
        type: 'select-day',
      },
      {
        type: 'morning',
      },
      {
        type: 'afternoon',
      },
      {
        type: 'evening',
      },
      {
        type: 'summary',
      },
    ],
  },
  {
    id: 9,
    title: 'Step by Step',
    cognitionType: 'tasks',
    practice: [
      {
        type: 'description',
        display_name: 'Step by Step',
        summary: `Identify a task that you would like to complete. Divide the task into several steps that will help you accomplish it. Finally, rate the difficulty of each step. If the difficulty is 5 or above, you might consider breaking the step down into sub-steps. Also, you can order the steps in a way that will increase your chances of success. Sometimes it helps to tackle easier tasks first and build from there.`,
        // todo change the api_type
        api_type: 'tasks',
      },
      {
        type: 'task',
      },
      {
        type: 'list-steps',
      },
      {
        type: 'summary',
      },
    ],
  },
  {
    id: 10,
    title: 'Personal List of Negative Schemas',
    cognitionType: 'Nsr',
    practice: [
      {
        type: 'description',
        display_name: 'Personal List of Negative Schemas',
        summary: 'The purpose of this exercise is to identify and understand your underlying beliefs about yourself.',
        api_type: 'Nsr',
      },
      {
        type: 'negative-schema',
        fields: [
          'I must be perfect to be accepted.',
          'If I choose to do something, I must succeed.',
          'I can never be comfortable around others.',
          "No matter what I do, I won't succeed.",
          "Others can't be trusted.",
          "I'm unlovable.",
          'I can never finish anything.',
          "I'm unattractive.",
          'Other people will always take advantage of me.',
          "If people really knew me, they wouldn't like me.",
          "I'm a fake.",
          "Without a woman (man) I'm nothing.",
          "I'm stupid.",
          ' The world is too frightening for me.',
          'Never show weakness.',
          "If I make one mistake, I'll lose everything.",
          'I must always be in control.',
          'Never show your emotions.',
          "I'm lazy.",
          'To be accepted, I must always please others.',
        ],
      },
      {
        type: 'summary',
      },
    ],
  },
  {
    id: 11,
    title: 'Personal List of Positive Schemas',
    cognitionType: 'Psr',
    practice: [
      {
        type: 'description',
        display_name: 'Personal List of Positive Schemas',
        summary:
          'The purpose of this exercise is to identify your existing positive schemas or underlying beliefs about yourself.',
        api_type: 'Psr',
      },
      {
        type: 'positive-schema',
        fields: [
          'No matter what happens, I can manage somehow.',
          "I'm a survivor.",
          "I'm a solid person.",
          'I like to be challenged.',
          'People respect me.',
          'I care about other people.',
          "I'm intelligent.",
          'The tougher the problem, the tougher I become.',
          "I'm friendly.",
          'Everything will work out all right in the end.',
          'If I work hard at something, I can master it.',
          'Others trust me.',
          'If I prepare in advance, I usually do better.',
          "There's not much that can scare me.",
          'They can knock me down but not out.',
          'I deserve to be respected for who I am.',
          'I can figure things out.',
          'I can learn from my mistakes and be a better person.',
          "I'm a good spouse(and/or parent, child, friend, lover).",
          'I can handle stress.',
        ],
      },
      {
        type: 'summary',
      },
    ],
  },
  {
    id: 12,
    title: 'Changing Schemas',
    cognitionType: 'Csr',
    practice: [
      {
        type: 'description',
        display_name: 'Changing Schemas',
        summary: `To work on changing a negative schema, choose one of your core beliefs from the list you developed earlier or record another schema you want to modify. Follow the steps to examine the evidence, look for advantages and disadvantages, and develop rational alternatives. The final step is to develop a plan to put your revised schema into action.`,
        // todo change api_type
        api_type: 'Csr',
      },
      {
        type: 'schema',
      },
      {
        type: 'schema-evidence',
      },
      {
        type: 'advantage-disadvantange',
      },
      {
        type: 'alternative-schema',
      },
      {
        type: 'schema-action-plan',
      },
      {
        type: 'summary',
      },
    ],
  },
  {
    id: 13,
    title: 'Coping Cards',
    cognitionType: 'coping_cards',
    practice: [
      {
        type: 'description',
        display_name: 'Coping Cards',
        summary: `Use a coping card to capture your best ideas for changing your thinking and managing the problems in your life. Try to carry the card with you and use it to remind yourself of the coping methods you want to use. You can review Thought Change Records, Examining the Evidence Exercises, and other self-help exercises from this program to get ideas for changes.`,
        // todo change api_type
        api_type: 'coping_cards',
      },
      {
        type: 'coping-problem',
      },
      {
        type: 'coping-plan',
      },
      {
        type: 'summary',
      },
    ],
  },
  {
    id: 14,
    title: 'Behavior Change Planner',
    cognitionType: 'behavior_change_plans',
    practice: [
      {
        type: 'description',
        display_name: 'Behavior Change Planner',
        summary: `Follow the three steps for changing behavior in completing this exercise:	1. Monitor 2.Plan 3.Act`,
        // todo change api_type
        api_type: 'behavior_change_plans',
      },
      {
        type: 'behavior-behavior',
      },
      {
        type: 'behavior-plan',
      },
      {
        type: 'behavior-result',
      },
      {
        type: 'summary',
      },
    ],
  },
  {
    id: 15,
    title: 'Positive Schema Update',
    cognitionType: 'Upsr',
    practice: [
      {
        type: 'description',
        display_name: 'Positive Schema Update',
        summary: `Tune in to your positive schemas by reviewing the list you developed earlier in the program. Then try to think of other positive core beliefs that you could add to the list.`,
        // todo change api_type
        api_type: 'Upsr',
      },
      {
        type: 'review-identify',
      },
      {
        type: 'summary',
      },
    ],
  },
  {
    id: 16,
    title: 'Negative Schema Update',
    cognitionType: 'Nsjr',
    practice: [
      {
        type: 'description',
        display_name: 'Negative Schema Update',
        summary: `Select a schema to report on your progress. Just select one schema at a time for the update. We suggest you use this schema update exercise multiple times so you can record your progress on at least 3 of your negative schemas.`,
        // todo change api endpoint
        api_type: 'Nsjr',
      },
      {
        type: 'schema',
      },
      {
        type: 'review-record',
      },
      {
        type: 'summary',
      },
    ],
  },
  {
    id: 17,
    title: 'Schema Change Log',
    cognitionType: 'Sclr',
    practice: [
      {
        type: 'description',
        display_name: 'Schema Change Log',
        summary: `Review your list of negative schemas and reflect on any changes that you have made. Taking note of changes that have reduced the damaging effects of negative schemas can keep you on track toward a more positive future`,
        api_type: 'Sclr',
      },
      {
        type: 'schema-change',
      },
      {
        type: 'summary',
      },
    ],
  },
  {
    id: 18,
    title: 'Tips for Basic Principles',
    isReadingMaterial: true,
    practice: [
      {
        type: 'description',
        display_name: 'Tips for Basic Principles',
      },
      {
        type: 'reading',
        html: `
				<h3>Making Positive Changes in Your Thinking</h3>
				<p>Most people start to look for positive changes they can make in their thinking as soon as they recognize that depression is making them think in a negatively distorted way. Here are some suggestions for ways to cultivate a more realistic and positive thinking style.</p>
				<h3>Try to:</h3>
				<bl>
					<li>Give yourself credit for your strengths.</li>
					<li>Look beyond your present difficulties to see the possibilities for change.</li>
					<li>Think of the positives that your friends and family see in you.</li>
					<li>Remember the positive thoughts that you had before you got depressed.</li>
					<li>Look for the good points in other people.</li>
					<li>Avoid kidding yourself by writing down unrealistic positives.</li>
					<li>Remind yourself that depression is coloring your thinking.</li>
					<li>Do the exercises in this program to develop healthy thoughts.</li>
				</bl>				
				`,
      },
    ],
  },
  {
    id: 19,
    title: 'Tips for Identifying Automatic Thoughts',
    isReadingMaterial: true,
    practice: [
      {
        type: 'description',
        display_name: 'Tips for Identifying Automatic Thoughts',
      },
      {
        type: 'reading',
        html: `
				<h3>How to Use the First 4 Steps of the Thought Change Record</h3>
				<p>When you use a thought record, you should try to write down the actual automatic thoughts that are occurring in a situation. Generally, it’s best to fill out the record as close in time to an event as you can. If you wait too long after an event, you may forget the details of your automatic thoughts. Sometimes it helps to imagine an event again, just as it happened, so you can remember your automatic thoughts in a vivid way. You’ll find that the thought record will be most useful if you can “tune in” to the specific automatic thoughts that are causing trouble.</p>
				
				<h3>The First 4 Steps of the TCR:</h3>
				<bl>
				<li><strong>Step 1: Event</strong> Briefly describe an event, or a memory of an event, that stimulated automatic thoughts.</li>
				<li><strong>Step 2: Automatic Thoughts</strong> Write down your automatic thoughts just as they occurred in the situation.</li>
				<li><strong>Step 3: Thought Strength</strong> Then rate your degree of belief in the automatic thoughts (at the time that they happened) using a 0-100 scale.</li>
				<li><strong>Step 4: Emotions</strong> List your emotions and/or physical reactions. Also, rate the strength of the emotion on a 0-100 scale.</li>
				</bl>
				`,
      },
    ],
  },
  {
    id: 20,
    title: 'Tips for Labeling Cognitive Errors',
    isReadingMaterial: true,
    practice: [
      {
        type: 'description',
        display_name: 'Tips for Labeling Cognitive Errors',
      },
      {
        type: 'reading',
        html: `
				<h3>How to Label Cognitive Errors</h3>
				<p>If you can learn to label cognitive errors, you’ll be well on the way to developing a healthier style of thinking. It would be a good idea to review the definitions of cognitive errors several times so that you are sure you understand the concept of cognitive errors.</p>
				<p>Usually, there is more than one cognitive error involved in a negative automatic thought. Also, there is a good deal of overlap between cognitive errors. Sometimes it may seem difficult to figure out exactly which cognitive errors are in operation. So, don’t worry about getting the labeling “just right.”</p>
				<p>The main point is for you to recognize that you are making mistakes in reasoning. Once you start to recognize cognitive errors, you’ll begin to think in a more rational and effective manner. Try to enjoy your hunt for cognitive errors. You don’t need to correctly identify every cognitive error. The labeling exercises will work just fine if you can spot any cognitive errors in your thinking.</p>
				`,
      },
    ],
  },
  {
    id: 21,
    title: 'Quick Reference: Definitions of Cognitive Errors',
    isReadingMaterial: true,
    practice: [
      {
        type: 'description',
        display_name: 'Quick Reference: Definitions of Cognitive Errors',
      },
      {
        type: 'reading',
        html: `
				<h3>Ignoring the Evidence</h3>
				<p>When you ignore the evidence, you make a judgment (usually about your shortcomings or about something you think you can’t do) without looking at all the information.</p>
				<p>This cognitive error has been called “the mental filter” because you filter, or screen out, valuable information about topics such as:</p>
				
				<bl>
				<li>positive experiences from the past;</li>
				<li>your strengths; and</li>
				<li>support that others can give.</li>
				</bl>

				<p>Instead of looking at a full range of information about the situation and your resources, you dwell on a negative feature or on a single flaw.</p>

				<h3>Jumping to Conclusions</h3>
				<p>Depressed and anxious people often jump to conclusions. They immediately think of the worst possible interpretations of situations. Once these negative images come into their minds, they become certain bad things will happen.</p>
				<p>Another form of jumping to conclusions is the tendency to immediately think that others see you in a negative light. Have you ever done this? If you jump to conclusions, you may feel overwhelmed or hopeless and give up trying.</p>
				
				<h3>Overgeneralizing</h3>
				<p>Sometimes we can let a single problem mean so much to us that it colors our view of everything in our lives. We can give a small difficulty or flaw so much significance that it seems to define the entire picture. This type of cognitive error is call overgeneralizing.</p>

				<h3>Magnifying or Minimizing</h3>
				<p>One of the most common cognitive errors is magnifying or minimizing the significance of things in your life. When you are depressed or anxious, you often magnify your faults and minimize your strengths. You can also magnify the risks of difficulties in situations and minimize the options or resources that you have to manage the problem. Can you think of examples of times when you have done this?</p>
				<p>An extreme form of magnifying is sometimes called “catastrophizing.” When you “catastrophize” you automatically think that the worst possible thing will happen. If you are having a panic attack, your mind races with thoughts like “I’m going to have a heart attack or stroke,” or “I’m going to totally lose control.” Depressed persons may think they are bound to fail or that they are about to lose everything.</p>
				<p>One of the ways to fight anxiety and depression is to spot your tendency to magnify and minimize.</p>
				
				<h3>Personalizing</h3>
				<p>Another way to make things worse is to get caught up in taking personal blame for everything that seems to go wrong. Personalizing is a classic feature of anxiety and depression. When you personalize, you accept full responsibility for a troubling situation or problem even when there isn’t good evidence to back your conclusion. This type of cognitive error undermines your self-esteem and makes you more depressed.</p>
				<p>Of course you need to accept responsibility when you have made mistakes. Owning up to problems can help you start to turn things around. However, if you can recognize the times that you are personalizing, you can avoid putting yourself down unnecessarily, and you can start to develop a healthier style of thinking.</p>

				<h3>All or None Thinking</h3>
				<p>Have you ever had thoughts like these: “Nothing ever goes my way….There’s no way I could handle it.…I always mess up….She’s got it all…Everything is going wrong?” These cognitions are examples of one of the most damaging of the cognitive errors – all or none thinking.</p>
				<p>When you let all or none thinking go unchecked, you see the world in absolute terms. Everything is completely black or completely white – all good or all bad. You believe that others are doing great and you are doing just the opposite.</p>
				<p>All or none thinking also can interfere with your working on tasks. Imagine what would happen if you thought that you had to achieve 100% success or you shouldn’t even try at all. It’s usually better to set reasonable goals and to realize that we are rarely complete successes or total failures. Most things in life are not totally black or white but fall somewhere in between.</p>
				`,
      },
    ],
  },
  {
    id: 22,
    title: 'Practical Suggestions for Developing Rational Alternatives',
    isReadingMaterial: true,
    practice: [
      {
        type: 'description',
        display_name: 'Practical Suggestions for Developing Rational Alternatives',
      },
      {
        type: 'reading',
        html: `
				<h3>Imagine How You Would Think if You Weren’t Depressed</h3>
				<p>Because depression usually puts a negatively biased filter on thinking, it can help to think back to the times before you became depressed. Or, you can try to remember intervals where depression went away or was not causing much of a problem. Using this perspective of a person who isn’t depressed, what rational alternatives come to mind?</p>
				<p>A good strategy is to think of times in your life when positive things were happening. If you can let the positive memories flow through you, at least temporarily, you may be able to see alternatives that will help you change your automatic thoughts.</p>
				
				<h3>Get an Outsider’s Perspective</h3>
				<p>Another great way to broaden your perspective is to think about what a positive, but objective, person might say about you. Imagine that you had a personal coach who would “tell it like it is” but would always be looking for rational alternatives to negative automatic thoughts. What would your coach be telling you?</p>
				<p>You could also imagine that you had a scientist or a detective working with you to look for balanced and accurate alternatives to automatic thoughts. This person would be very objective in looking for the “evidence.” What evidence would this person find that could support some helpful alternatives to replace troublesome automatic thoughts?</p>	

				<h3>Brainstorm</h3>
				<p>When you try to generate alternatives, do you ever fall into the trap of thinking “Yes, but…?” One of the pitfalls in working to develop a healthier thinking style is that good ideas can get rejected immediately. Depression and anxiety can lead to a sense that change will be extremely difficult or even impossible. Thus, alternatives that may have some merit are minimized or quickly discarded. Brainstorming can be a helpful way to break through this barrier.</p>
				<p>The brainstorming technique is used widely by scientists, authors, artists, business people, and others who want to be as creative as possible in coming up with a wide variety of alternatives. You probably have used this method yourself in the past to free up your thinking and find solutions to problems.</p>	
				<p>So, spend some time brainstorming for alternatives to negative automatic thoughts. Just write down any idea that comes to mind. Temporarily suspend the “but” from your “Yes, but…” statements.</p>	
				<p>After you explore lots of possibilities, you can try to settle on some alternatives that you believe are accurate and will help you overcome depression and anxiety.</p>	

				<h3>Listen to Positive People in Your Life</h3>
				<p>People who suffer from depression and related problems often turn inward and listen primarily, or sometimes completely, to their negative self-talk in making judgements about themselves. They may minimize or downplay supportive comments from people who care about them. Or, they may be hesitant to ask for feedback or constructive suggestions.</p>
				<p>Of course, there is the possibility that a partner, a parent, a child, a friend, or a co-worker may make critical or unhelpful comments. However, there may be opportunities in your life for asking positive, caring people to help you see your situation in accurate and affirming ways.</p>	
				<p>In the first scene in this computer program, Karen tried to help Joan see that her situation wasn’t as negative as Joan painted it. However, Joan’s depression made it hard for her to listen to Karen and accept a more realistic viewpoint. Do you have positive people in your life who could help you see healthy alternatives to negative automatic thoughts? Could you listen with greater openness to these people? Or, could you ask them to help you find good options for replacing thoughts that are leading to depression or anxiety?</p>
				`,
      },
    ],
  },
  {
    id: 23,
    title: 'Principles for Taking Action',
    isReadingMaterial: true,
    practice: [
      {
        type: 'description',
        display_name: 'Principles for Taking Action',
      },
      {
        type: 'reading',
        html: `
				<bl>
				<li>Set reasonable goals for change.</li>
				<li>Start with actions that seem manageable – ones that have a good chance for success.</li>
				<li>Make small changes at first instead of trying to do it all at once.</li>
				<li>Ask for help from your therapist, family, or friends if you need it.</li>
				<li>Monitor your automatic thoughts about actions for change. Modify twisted thoughts if they occur.</li>
				<li>If you have trouble, step back and try to learn from the experience.</li>
				<li>Develop specific problem-solving strategies for difficult or challenging tasks.</li>
				<li>Give yourself credit for successes and be understanding if things don’t go as planned.</li>
				</bl>
				`,
      },
    ],
  },
  {
    id: 24,
    title: 'Tips for Finding Alternatives to Negative Schemas',
    isReadingMaterial: true,
    practice: [
      {
        type: 'description',
        display_name: 'Tips for Finding Alternatives to Negative Schemas',
      },
      {
        type: 'reading',
        html: `
				<p>These tips are adapted with permission from:Breaking Free from Depression: Pathways to Wellness by Jesse H. Wright, M.D., Ph.D. and Laura Wright McCray, M.D.</p>
				
				<h3>Brainstorm</h3>
				<p>Words such as “always”, “never”, and “must” in a schema usually mean that you are falling victim to all or nothing thinking. Try substituting others that are more reasonable. Changing just one word (“I would like to succeed,” instead of “I must succeed”) can make a big difference.</p>

				<h3>Spot “If-Then Statements.”</h3>
				<p>Do you have any schemas that are “if-then” rules? Some examples are “If people knew me, they wouldn’t like me…If I choose to do something, I must do it perfectly…Without a man, I’m a failure…If I take on a task, I probably won’t finish it.”</p>
				<p>Can you see the problem with “if-then” rules? If the first part of the statement occurs, then you can be trapped into responding in ways that erode your self-esteem and interfere with positive coping.</p>
				<p>Try to recognize any of your “if-then” rules that could be changed as you move forward on your path to wellness.</p>

				<h3>Identify Extremes in Thinking</h3>
				<p>If your negatively toned schemas contain absolute words such as “never,” “must,” “can’t,” “everything,” or “always,” you will have excellent opportunities for making productive changes. Could you downtune the “all or none” quality of these statements?</p>
				<p>Perhaps changing a few words in a schema would make it a much more reasonable rule for guiding your life. For example, a change in the schema “I must always be in control” to “I would like to be in control in situations where control is very important” makes this rule more flexible and less absolute.</p>

				<h3>Think Toward the Future</h3>
				<p>Try to imagine how your life might work out differently if you changed a schema. For example, if you had a schema about needing to always be in control and you could loosen the grip of this schema, what healthy changes might you see? How would your behavior change around your family and friends or your co-workers? Would you be less driven and tense? Could you enjoy life more? Would you put less strain on your physical health?</p>
				<p>There can be big payoffs in changing schemas. Thinking ahead to see positive outcomes can help you stay motivated to work on modifying core beliefs.</p>

				<h3>Learn from Others</h3>
				<p>If you are fortunate enough to have a good marriage or a long-standing relationship, you may be able to learn some new ways of thinking from this person. Or perhaps your children can teach you to see the world differently. How are your friends influencing your thinking? Take some time to talk with people you can trust to weigh the merits of possible changes in your rules of thinking. Others may be able to see potentials for change that are not apparent to you or can give you valuable feedback on some ideas that you are considering.</p>
				`,
      },
    ],
  },
  {
    id: 25,
    title: 'Tips for Changing Automatic Thoughts',
    isReadingMaterial: true,
    practice: [
      {
        type: 'description',
        display_name: 'Tips for Changing Automatic Thoughts',
      },
      {
        type: 'reading',
        html: `
				<h3>Stay on the Lookout for Negative Automatic Thoughts</h3>
				<p>Some of the things that can help you spot automatic thoughts are:</p>
				<bl>
				<li>Recognizing that strong emotions are stimulated by automatic thoughts.</li>
				<li>Observing that you use intense or absolute words (for example: “I failed again—-She hates me—-”he controls everything I do—-I can’t do anything right").</li>
				<li>Realizing that you are physically tense.</li>
				<li>Identifying stressful situations that trigger automatic thoughts.</li>
				</bl>

				<h3>How to “Tune-In”</h3>
				<p>If you have trouble in “tuning in” to your automatic thoughts, you can try to imagine yourself back in a situation that caused distress. Picture the main characters and the setting just like you’re seeing a video replay of the scene.</p>
				<p>The method of using your imagination to get back in touch with automatic thoughts is sometimes called “imagery.” Many individuals have found that “imagery” can help them recall important automatic thoughts.</p>
				
				<h3>Keep Practicing with the TCR and Other Exercises</h3>
				<p>Keep using the Thought Change Record and other exercises to change automatic thoughts.</p>
				<p>Regular practice with the Thought Change Record, Examining the Evidence, and other exercises found in the Practice section will really pay off.</p>
				
				<h3>Use Your Sense of Humor</h3>
				<p>Do you think you could get to the point that automatic thoughts or cognitive errors seem almost funny when they occur? Cognitive errors can be so extreme that you might be able to laugh a bit when you catch yourself jumping to conclusions, overgeneralizing, using all or nothing thinking, or having some other distorted thought.</p>
				<p>Laughter can be an antidote to depression and anxiety.</p>

				<h3>Continue Working with Rational Alternatives</h3>
				<p>Develop healthy rational thoughts that will increase your self-esteem and will allow you to cope with your problems.</p>
				<p>With continued practice, rational alternative thoughts will almost automatically take the place of your old negative thoughts.</p>
				
				<h3>Good Ways to Develop Rational Thoughts</h3>
				<bl>
				<li>Think back to times before you were depressed or anxious, and identify positive or adaptive thoughts you had then.</li>
				<li>Imagine that you are one of your friends or family who know you well. What strengths or positive features would they recognize in you?</li>
				<li>Use the brainstorming technique to free up your thinking.</li>
				<li>Identify and reduce cognitive errors in your automatic thoughts.</li>
				<li>Give yourself a “homework assignment” to practice rational thinking. Choose a specific situation where you can apply what you have learned.</li>
				</bl>
				<p>It usually takes time to fully change your thinking. But, continued use of these techniques can help you think more clearly and rationally.</p>

				<h3>Putting Coping Cards to Work</h3>
				<p>A coping card is a great way to remember a healthier way of thinking and to practice putting these constructive thoughts into action. You can use the Coping Card exercise in the Practice section to generate and organize your cards.</p>

				<h3>Review the Work that You’ve Done in Cognitive Therapy</h3>
				<p>Even if you believe that you have recovered from depression or anxiety, it’s a good idea to go back over what you have learned so that you’ll be prepared to handle future problems.</p>
				<p>If you find that you are getting depressed or anxious again, you can get yourself back on track by reviewing your cognitive therapy materials and putting these skills to work.</p>

				`,
      },
    ],
  },
  {
    id: 26,
    title: 'Tips for Setting Effective Goals',
    isReadingMaterial: true,
    practice: [
      {
        type: 'description',
        display_name: 'Tips for Setting Effective Goals',
      },
      {
        type: 'reading',
        html: `
				<h3>Rational Thinking is Required for Rational Goals</h3>
				<p>If you have negatively distorted thoughts, you probably will have trouble setting constructive goals. Hopelessness, helplessness, or low self-esteem will interfere with your view of what you can accomplish.</p>
				<p>Using cognitive therapy techniques such as the Thought Change Record, Examining the Evidence, or Listing Advantages and Disadvantages can prepare you to develop clear and effective goals.</p>

				<h3>Be Honest with Yourself When You Set Goals</h3>
				<p>Take a balanced view of your strengths and weaknesses, and then set reasonable goals that help you focus on making productive changes.</p>
				<p>It won’t help to ignore your shortcomings or to downplay real problems in your environment. Try to set goals that will allow you to build up your strengths as you tackle your difficulties.</p>

				<h3>Count on Yourself to Make the Changes</h3>
				<p>If your goals are directed primarily at getting others to change, you’ll probably be disappointed. It works much better to set goals for your own personal improvement or to develop goals that will help you cope better with the behavior of others.</p>
				<p>Often if you begin to change, you’ll find that relationships with other people will also start to improve.</p>

				<h3>Set Clear Goals</h3>
				<p>Clearly stated goals will give you an accurate picture of what you want to accomplish, and will keep you on target as you make changes in how you think and act.</p>
				<p>On the other hand, vague or overgeneralized goals may get you confused or interfere with your progress.</p>

				<h3>Set Goals that You Can Achieve</h3>
				<p>When you are depressed or anxious it’s probably best to focus primarily on manageable short-term goals.</p>
				<p>For example, you might want to set goals for changing your daily activity schedule, building up your self-esteem, or tackling one of your current problems. Setting a number of extremely challenging long-term goals could make you more discouraged if you don’t start to see progress.</p>
				<p>Usually it’s wise to have a series of short and long-term goals. The long-term goals, such as completing your education or getting a new job, can be balanced with more readily achievable short-term goals.</p>
				<p>It’s important to have goals that will help you:</p>
				<bl>
				<li>make progress in the near future and</li>
				<li>stretch to reach your potential.</li>
				</bl>
				`,
      },
    ],
  },
  {
    id: 27,
    title: 'Tips for Taking Action',
    isReadingMaterial: true,
    practice: [
      {
        type: 'description',
        display_name: 'Tips for Taking Action',
      },
      {
        type: 'reading',
        html: `
				<h3>Use the Three Steps</h3>
				<p>Use the three steps for taking action – monitor, plan, and act – when you want to change your behavior.</p>
				<p>These basic steps are included in all of the cognitive therapy techniques used to help you take action.</p>

				<h3>Activity Scheduling</h3>
				<p>Activity scheduling is an extremely powerful technique that can be used to counter states of deep depression and to overcome problems with decreased interest, low productivity, or poor self-esteem.</p>
				<p>You can use activity scheduling to pull out of depression or to fight excessive anxiety.</p>
				<p>After you start to improve, you probably won’t need to carefully record all of your activities. However, you may want to continue to use activity scheduling for some special purposes such as reducing procrastination or increasing your level of efficiency.</p>
				<p>Also, you may find activity scheduling helpful if you start to slip back into depression.</p>

				<h3>Step-by-Step Approach</h3>
				<p>The step-by-step approach is one of the fundamental cognitive therapy procedures for taking action. This technique can be used in all phases of recovery from depression or anxiety.</p>
				<p>When you utilize the step-by-step approach, you may need a detailed plan like the one Joan used to manage the problem with her home office. But, sometimes a less complex plan will get the job done.</p>
				<p>For example, you might have to list a only a few steps for tasks such as “cleaning the hall closet” or “planning a family trip.”</p>
				<p>Tasks that are particularly challenging or complex, such as “getting a new job” or “graduating from college,” may require a carefully laid out plan with multiple steps.</p>
				<p>No matter how difficult the task, the same basic principles of using the step-by-step approach always apply.</p>
				
				<p>Let’s review the essential features of the step-by-step approach:</p>
				<bl>
				<li>Step 1: Identify an action or task that seems difficult or challenging.</li>
				<li>Step 2: List the steps that might be required to manage the situation.</li>
				<li>Step 3: Identify small steps that can be handled without too much trouble.</li>
				<li>Step 4: Begin with the least difficult steps.</li>
				<li>Step 5: Take on larger or more challenging steps as you gain confidence and experience.</li>
				<li>Step 6: Monitor your thoughts about taking the steps and use what you’ve learned in cognitive therapy to modify negative thoughts.</li>
				<li>Step 7: Give yourself credit for the progress you are making.</li>
				<li>Step 8: If you are having difficulty completing the steps, review the problem and develop another strategy (for example, take smaller steps, obtain instruction or advice, modify your thinking.)</li>
				</bl>

				<h3>For Phobias or Panic Attacks</h3>
				<p>People who have phobias or panic attacks may find the step-by-step approach particularly useful in overcoming their fears. If you have this type of problem, you can attack your fears in step-wise fashion.</p>
				<p>For example, if you were afraid of crowds, you could set up a step-by-step method of getting used to the situation and gaining confidence that you could be around large groups of people. You might start with going to a small meeting where only a few people would be expected to be present. Then you could practice being in groups of gradually increasing size until you become comfortable with large crowds.</p>

				<h3>Behavior Change Planner and Coping Cards</h3>
				<p>Use the Behavior Change Planner as a method of focusing your efforts on taking action. Writing your plans down can be a big help in getting things done.</p>
				<p>After you develop your ideas, you can use Coping Cards to help you carry out your plans.</p>

				<h3>Try to Set Rational Goals for Taking Action</h3>
				<p>You might remember that we reviewed Tips for Setting Goals in the last lesson. You can review them again by finding them in the Lesson 8 Practice section. You’ll have a greater chance of reaching your objectives if you follow these guidelines.</p>
				`,
      },
    ],
  },
  {
    id: 28,
    title: 'Tips for Changing Schemas',
    isReadingMaterial: true,
    practice: [
      {
        type: 'description',
        display_name: 'Tips for Changing Schemas',
      },
      {
        type: 'reading',
        html: `
				<h3>Identifying Schemas in Several Different Ways</h3>
				<p>First, look for schemas in patterns of automatic thoughts. Schemas are the basic attitudes or rules that underlie our automatic thoughts. Another good way to recognize schemas is to read about the experiences of others.</p>

				<h3>List of Recommended Self-Help Books</h3>
				<bl>
				<li>Barlow DH, Craske MG: Mastery of Your Anxiety and Panic. San Antonio, The Psychological Corporation, 2000</li>
				<li>Basco MR: Never Good Enough. New York, The Free Press, 1999</li>
				<li>Burns DD: Feeling Good. New York, Avon Books, 1999</li>
				<li>Greenberger D, Padesky CA: Mind Over Mood. New York, Guilford Press, 1995</li>
				<li>Wright JH, Basco MR: Getting Your Life Back: The Complete Guide to Recovery from Depression. New York, Touchstone, 2002</li>
				<li>Wright JH, McCray LW: Power Over Depression: Finding Your Path to Wellness. New York, Guilford Press, 2011</li>
				</bl>

				<h3>Exercises for Identifying Schemas</h3>
				<p>You also can identify personal schemas by completing checklists such as the one contained in this learning program.</p>
				<p>The most powerful and thorough way to uncover schemas is to be involved in cognitive therapy. Your therapist will point out possible schemas and suggest exercises to help you learn more about your basic attitudes.</p>

				<h3>Using Your Adaptive and Maladaptive Schemas</h3>
				<p>Use the exercises to review and revise your Personal Lists of Adaptive and Maladaptive Schemas. Add any newly uncovered schemas as soon as you identify them.</p>
				<p>Remember negative schemas are often below the surface. They may be relatively dormant or inactive when you are feeling well. However, they can resurface when you are under stress or when you become depressed or anxious.</p>
				<p>Keeping a list will help you to recall your schemas and to stay focused on change. Even if you have recovered from depression or anxiety, it will still help you to work on your Schema List.</p>
				<p>As you revise your schemas, you’ll probably be able to handle stress better, feel less tense or driven, and have improved self-esteem.</p>

				<h3>Practice These Techniques</h3>
				<p>You have learned how to modify schemas by examining the evidence, listing advantages and disadvantages, and developing rational alternatives. Continued practice with these techniques will lead to further improvements in your abilities to use these fundamental cognitive therapy skills.</p>
				<p>The exercises section contains all of these powerful tools to change your schemas.</p>

				<h3>Remember the Tips for Finding Rational Alternatives</h3>
				<p>Now, let’s review some tips for finding rational alternatives to negative schemas.</p>
				<bl>
				<li>Keep an open mind.</li>
				<li>Write out multiple ideas for changes.</li>
				<li>Avoid modifications that are clearly unrealistic.</li>
				<li>Review your list of alternatives on a regular basis.</li>
				<li>Experiment with alternative schemas.</li>
				<li>Act like a scientist who is testing out a new theory.</li>
				<li>Try out your new ideas in real life situations.</li>
				<li>Practice your modified schemas over and over.</li>
				</bl>
				
				<h3>Rehearse Your New Schemas</h3>
				<p>Sometimes it’s difficult to immediately put a modified schema into action in real life situations. You may be insecure about trying the new schema or uncertain about how you will act around others.</p>
				<p>In this case, it may be helpful to use a technique called cognitive-behavioral rehearsal to get you ready to use your alternative schema. When you perform cognitive-behavioral rehearsal, you think through a scene in advance to prepare for what to expect.</p>
				<p>Championship athletes often use a similar technique to visualize the challenges of an upcoming event. For example, a downhill skier might imagine skiing on a specific course under a variety of conditions so that he or she is fully prepared for what might happen.</p>
				<p>You can do the same type of advance planning for handling the possible uncertainties of using a new schema. Try to visualize various scenes where the revised schema might cause you to act differently.</p>
				<p>Then practice how you could respond. It helps to have a variety of options in mind, and to have rehearsed until you are reasonably secure that you can put the changed schema into action.</p>
				<p>You’ll find tips for using cognitive-behavioral rehearsal in the Practice section of the program.</p>

				<h3>Track Your Use of Your New Schemas</h3>
				<p>If you want to make fundamental changes in your schemas, you’ll need to actually use the new beliefs repeatedly in real life situations.</p>
				<p>A Schema Change Log is included in the exercises to help you keep track of your efforts to use new schemas in daily life.</p>

				<h3>Give Yourself Credit for Effort</h3>
				<p>The final tip is to give yourself credit for all the efforts that you have made.</p>
				<p>You’ve worked hard, and many new things have been learned. If you recognize your gains, you’ll have greater confidence to keep stretching to reach your goals.</p>
				<p>From time to time the software gave you positive feedback for your work in cognitive therapy. Try to do the same thing for yourself. It helps to pause on occasion to tell yourself that you’ve done a good job or that you have accomplished something important.</p>
				`,
      },
    ],
  },
  {
    id: 29,
    title: 'Tips for Examining the Evidence',
    isReadingMaterial: true,
    practice: [
      {
        type: 'description',
        display_name: 'Tips for Examining the Evidence',
      },
      {
        type: 'reading',
        html: `
				<h3>How to “Examine the Evidence”</h3>
				<p>When you examine the evidence for automatic thoughts, you evaluate your cognitions in a balanced and accurate way. This valuable method helps you find evidence to disprove negative automatic thoughts. If you can disprove a dysfunctional thought, you can drop this way of thinking and move on to a more positive way of seeing things.</p>
				<p>Sometimes you may find evidence that seems to offer support (at least at first) for a negative automatic thought. But, evidence that appears to back up a negative cognition often can be false. Try to look for cognitive errors, or other problems in your logic, if you list evidence in favor of a negative automatic thought.</p>
				<p>However, on occasion, you’ll find that upsetting things are actually true. It might be that there’s a real chance you could lose your job or your spouse could leave you. Maybe you do have some personal habits that you need to change.</p>
				<p>Even if you do have these kinds of problems, cognitive therapy can still help. Remember, depression and anxiety cause you to ignore your strengths and magnify your weaknesses. Following the principles of cognitive therapy can help you cope with big problems instead of giving up.</p>
				<p>The examining the evidence exercise involves writing down evidence for and against an automatic thought on a two-column form. Try to keep an open mind when you examine the evidence. Act like a scientist who is gathering evidence to prove or disprove a theory. You’ll probably find lots of evidence that will change your thinking in a positive direction.</p>
				`,
      },
    ],
  },
]
