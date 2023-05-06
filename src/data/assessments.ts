export const assessments = {
  PSS: {
    name: 'PSS',
    heading:
      'The questions in this scale ask you about your feelings and thoughts during the last month. In each case, you will be asked to indicate by selecting how often you felt or thought a certain way.',
    interpretation: {
      statement:
        'Individual scores on the PSS can range from 0 to 40 with higher scores indicating higher perceived stress. ',
      scores: [
        {
          statement: '* Scores ranging from 0-13 would be considered low stress.',
        },
        {
          statement: '* Scores ranging from 0-13 would be considered low stress.',
        },
        {
          statement: '* Scores ranging from 0-13 would be considered low stress.',
        },
      ],
      conclusion:
        "Your score on the PSS can reflect the amount of stress you have perceived in your life over the last month.  Over time, if you can reduce your score on the PSS, it may reflect a reduction in your personal stress or an improved ability to cope with life's stressful situations.",
    },
    questions: [
      {
        id: 297,
        statement: 'In the last month, how often have you been upset because of something that happened unexpectedly?',
        options: [
          { id: 1140, statement: 'Never' },
          { id: 1141, statement: 'Almost Never' },
          { id: 1142, statement: 'Sometimes' },
          { id: 1143, statement: 'Fairly Often' },
          { id: 1144, statement: 'Very Often' },
        ],
      },
      {
        id: 298,
        statement:
          'In the last month, how often have you felt that you were unable to control the important things in your life?',
        options: [
          { id: 1145, statement: 'Never' },
          { id: 1146, statement: 'Almost Never' },
          { id: 1147, statement: 'Sometimes' },
          { id: 1148, statement: 'Fairly Often' },
          { id: 1149, statement: 'Very Often' },
        ],
      },
      {
        id: 299,
        statement: 'In the last month, how often have you felt nervous and “stressed”?',
        options: [
          { id: 1150, statement: 'Never' },
          { id: 1151, statement: 'Almost Never' },
          { id: 1152, statement: 'Sometimes' },
          { id: 1153, statement: 'Fairly Often' },
          { id: 1154, statement: 'Very Often' },
        ],
      },
      {
        id: 300,
        statement:
          'In the last month, how often have you felt confident about your ability to handle your personal problems?',
        options: [
          { id: 1155, statement: 'Never' },
          { id: 1156, statement: 'Almost Never' },
          { id: 1157, statement: 'Sometimes' },
          { id: 1158, statement: 'Fairly Often' },
          { id: 1159, statement: 'Very Often' },
        ],
      },
      {
        id: 301,
        statement: 'In the last month, how often have you felt that things were going your way?',
        options: [
          { id: 1160, statement: 'Never' },
          { id: 1161, statement: 'Almost Never' },
          { id: 1162, statement: 'Sometimes' },
          { id: 1163, statement: 'Fairly Often' },
          { id: 1164, statement: 'Very Often' },
        ],
      },
      {
        id: 302,
        statement:
          'In the last month, how often have you found that you could not cope with all the things that you had to do?',
        options: [
          { id: 1165, statement: 'Never' },
          { id: 1166, statement: 'Almost Never' },
          { id: 1167, statement: 'Sometimes' },
          { id: 1168, statement: 'Fairly Often' },
          { id: 1169, statement: 'Very Often' },
        ],
      },
      {
        id: 303,
        statement: 'In the last month, how often have you been able to control irritations in your life?',
        options: [
          { id: 1170, statement: 'Never' },
          { id: 1171, statement: 'Almost Never' },
          { id: 1172, statement: 'Sometimes' },
          { id: 1173, statement: 'Fairly Often' },
          { id: 1174, statement: 'Very Often' },
        ],
      },
      {
        id: 304,
        statement: 'In the last month, how often have you felt that you were on top of things?',
        options: [
          { id: 1175, statement: 'Never' },
          { id: 1176, statement: 'Almost Never' },
          { id: 1177, statement: 'Sometimes' },
          { id: 1178, statement: 'Fairly Often' },
          { id: 1179, statement: 'Very Often' },
        ],
      },
      {
        id: 305,
        statement:
          'In the last month, how often have you been angered because of things that were outside of your control?',
        options: [
          { id: 1180, statement: 'Never' },
          { id: 1181, statement: 'Almost Never' },
          { id: 1182, statement: 'Sometimes' },
          { id: 1183, statement: 'Fairly Often' },
          { id: 1184, statement: 'Very Often' },
        ],
      },
      {
        id: 306,
        statement:
          'In the last month, how often have you felt difficulties were piling up so high that you could not overcome them?',
        options: [
          { id: 1185, statement: 'Never' },
          { id: 1186, statement: 'Almost Never' },
          { id: 1187, statement: 'Sometimes' },
          { id: 1188, statement: 'Fairly Often' },
          { id: 1189, statement: 'Very Often' },
        ],
      },
    ],
  },
  'ER Survey': {
    name: 'ER Survey',
    heading:
      'Please answer the following questions about your use of emergency rooms over the past month and the past six months.',
    interpretation: {
      statement: 'Thank you for your responses!  You can ignore the score for this survey.',
    },
    questions: [
      {
        id: 284,
        statement:
          'How often have you used the emergency room in the *past month* for any reason related to your pain or pain medication(s)?',
        options: [
          { id: 1078, statement: 'None' },
          { id: 1079, statement: '1 time' },
          { id: 1080, statement: '2 times' },
          { id: 1081, statement: '3 times' },
          { id: 1082, statement: '4 times' },
          { id: 1083, statement: '5 or more times' },
          { id: 1084, statement: 'Not sure / Prefer not to say' },
        ],
      },
      {
        id: 285,
        statement:
          'How often have you used the emergency room in the *past six months* for any reason related to your pain or pain medication(s)?',
        options: [
          { id: 1085, statement: 'None' },
          { id: 1086, statement: '1 time' },
          { id: 1087, statement: '2 times' },
          { id: 1088, statement: '3 times' },
          { id: 1089, statement: '4 times' },
          { id: 1090, statement: '5 or more times' },
          { id: 1091, statement: 'Not sure / Prefer not to say' },
        ],
      },
    ],
  },
  'GAD-7': {
    name: 'GAD-7',
    heading: 'Over the last two weeks, how often have you been bothered by the following problems?',
    interpretation: {
      statement: 'GAD-7 Score',
      scores: [
        {
          range: '0-7',
          statement: 'None',
        },
        {
          range: '8+',
          statement: 'Probable anxiety disorder',
        },
      ],
    },
    questions: [
      {
        id: 215,
        statement: 'Feeling nervous, anxious or on edge',
        options: [
          { id: 707, statement: 'Not at all' },
          { id: 708, statement: 'Several days' },
          { id: 709, statement: 'More than half the days' },
          { id: 710, statement: 'Nearly every day' },
        ],
      },
      {
        id: 216,
        statement: 'Not being able to stop or control worrying',
        options: [
          { id: 711, statement: 'Not at all' },
          { id: 712, statement: 'Several days' },
          { id: 713, statement: 'More than half the days' },
          { id: 714, statement: 'Nearly every day' },
        ],
      },
      {
        id: 217,
        statement: 'Worrying too much about different things',
        options: [
          { id: 715, statement: 'Not at all' },
          { id: 716, statement: 'Several days' },
          { id: 717, statement: 'More than half the days' },
          { id: 718, statement: 'Nearly every day' },
        ],
      },
      {
        id: 218,
        statement: 'Trouble relaxing',
        options: [
          { id: 719, statement: 'Not at all' },
          { id: 720, statement: 'Several days' },
          { id: 721, statement: 'More than half the days' },
          { id: 722, statement: 'Nearly every day' },
        ],
      },
      {
        id: 219,
        statement: 'Being so restless that it is hard to sit still',
        options: [
          { id: 723, statement: 'Not at all' },
          { id: 724, statement: 'Several days' },
          { id: 725, statement: 'More than half the days' },
          { id: 726, statement: 'Nearly every day' },
        ],
      },
      {
        id: 220,
        statement: 'Becoming easily annoyed or irritated',
        options: [
          { id: 727, statement: 'Not at all' },
          { id: 728, statement: 'Several days' },
          { id: 729, statement: 'More than half the days' },
          { id: 730, statement: 'Nearly every day' },
        ],
      },
      {
        id: 221,
        statement: 'Feeling afraid as if something awful might happen',
        options: [
          { id: 731, statement: 'Not at all' },
          { id: 732, statement: 'Several days' },
          { id: 733, statement: 'More than half the days' },
          { id: 734, statement: 'Nearly every day' },
        ],
      },
    ],
  },
  'PHQ-9': {
    name: 'PHQ-9',
    heading: 'Over the last two weeks, how often have you been bothered by the following problems?',
    interpretation: {
      statement: 'Total Score: Depression Severity',
      scores: [
        {
          range: '1-4',
          statement: 'Minimal depression',
        },
        {
          range: '5-9',
          statement: 'Mild depression',
        },
        {
          range: '10-14',
          statement: 'Moderate depression',
        },
        {
          range: '15-19',
          statement: 'Moderately severe depression',
        },
        {
          range: '20-27',
          statement: 'Severe depression',
        },
      ],
    },
    questions: [
      {
        id: 192,
        statement: 'Little interest or pleasure in doing things',
        options: [
          { id: 620, statement: 'Not at all' },
          { id: 621, statement: 'Several days' },
          { id: 647, statement: 'More than half the days' },
          { id: 648, statement: 'Nearly every day' },
        ],
      },
      {
        id: 193,
        statement: 'Feeling down, depressed, or hopeless',
        options: [
          { id: 635, statement: 'Not at all' },
          { id: 636, statement: 'Several days' },
          { id: 637, statement: 'More than half the days' },
          { id: 622, statement: 'Nearly every day' },
        ],
      },
      {
        id: 197,
        statement: 'Trouble falling or staying asleep, or sleeping too much',
        options: [
          { id: 638, statement: 'Not at all' },
          { id: 639, statement: 'Several days' },
          { id: 649, statement: 'More than half the days' },
          { id: 650, statement: 'Nearly every day' },
        ],
      },
      {
        id: 201,
        statement: 'Feeling tired or having little energy',
        options: [
          { id: 651, statement: 'Not at all' },
          { id: 652, statement: 'Several days' },
          { id: 653, statement: 'More than half the days' },
          { id: 654, statement: 'Nearly every day' },
        ],
      },
      {
        id: 202,
        statement: 'Poor appetite or overeating',
        options: [
          { id: 655, statement: 'Not at all' },
          { id: 656, statement: 'Several days' },
          { id: 657, statement: 'More than half the days' },
          { id: 658, statement: 'Nearly every day' },
        ],
      },
      {
        id: 203,
        statement: 'Feeling bad about yourself — or that you are a failure or have let yourself or your family down',
        options: [
          { id: 659, statement: 'Not at all' },
          { id: 660, statement: 'Several days' },
          { id: 661, statement: 'More than half the days' },
          { id: 662, statement: 'Nearly every day' },
        ],
      },
      {
        id: 204,
        statement: 'Trouble concentrating on things, such as reading the newspaper or watching television',
        options: [
          { id: 663, statement: 'Not at all' },
          { id: 664, statement: 'Several days' },
          { id: 665, statement: 'More than half the days' },
          { id: 666, statement: 'Nearly every day' },
        ],
      },
      {
        id: 205,
        statement:
          'Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual',
        options: [
          { id: 667, statement: 'Not at all' },
          { id: 668, statement: 'Several days' },
          { id: 669, statement: 'More than half the days' },
          { id: 670, statement: 'Nearly every day' },
        ],
      },
      {
        id: 206,
        statement: 'Thoughts that you would be better off dead or of hurting yourself in some way',
        options: [
          { id: 671, statement: 'Not at all' },
          { id: 672, statement: 'Several days' },
          { id: 673, statement: 'More than half the days' },
          { id: 674, statement: 'Nearly every day' },
        ],
      },
    ],
  },
  'Daily Living Activities (DLA-20)': {
    name: 'Daily Living Activities (DLA-20)',
    heading:
      'Using the scale below, rate how often or how well you independently performed or managed each of the 20 activities of Daily Living during the last 30 days. If your level of functioning varied, rate the lowest possible score. Consider impairments in functioning due to physical limitations as well as those due to mental impairments. Do not consider environmental limitations (e.g., “no jobs available”).',
    interpretation: {
      statement: 'DLA-20 Score:',
      scores: [
        {
          range: '20-29',
          statement: 'Extremely severe functional impairment',
        },
        {
          range: '30-49',
          statement: 'Very severe functional impairment',
        },
        {
          range: '50-69',
          statement: 'Severe functional impairment',
        },
        {
          range: '70-89',
          statement: 'Moderate functional impairment',
        },
        {
          range: '90-109',
          statement: 'Mild functional impairment',
        },
        {
          range: '110-129',
          statement: 'Intermittent functional impairment',
        },
        {
          range: '130-140',
          statement: ' Optimal functioning',
        },
      ],
    },
    questions: [
      {
        id: 222,
        statement:
          'Health Practices: Takes care of health issues, manages moods, infections; takes medication as prescribed; follows up on medical appointments.',
        options: [
          { id: 735, statement: 'None of the time' },
          { id: 736, statement: 'A little of the time' },
          { id: 737, statement: 'Occasionally' },
          { id: 795, statement: 'Some of the time' },
          { id: 796, statement: 'A good bit of the time' },
          { id: 797, statement: 'Most of the time' },
          { id: 798, statement: 'All of the time' },
        ],
      },
      {
        id: 223,
        statement: 'Housing Stability, Maintenance: Maintains stable housing; organizes possessions, cleans.',
        options: [
          { id: 738, statement: 'None of the time' },
          { id: 739, statement: 'A little of the time' },
          { id: 740, statement: 'Occasionally' },
          { id: 799, statement: 'Some of the time' },
          { id: 800, statement: 'A good bit of the time' },
          { id: 801, statement: 'Most of the time' },
          { id: 802, statement: 'All of the time' },
        ],
      },
      {
        id: 224,
        statement: 'Communication: Listens to people, expresses opinions/feelings; makes wishes know effectively.',
        options: [
          { id: 741, statement: 'None of the time' },
          { id: 742, statement: 'A little of the time' },
          { id: 743, statement: 'Occasionally' },
          { id: 803, statement: 'Some of the time' },
          { id: 804, statement: 'A good bit of the time' },
          { id: 805, statement: 'Most of the time' },
          { id: 806, statement: 'All of the time' },
        ],
      },
      {
        id: 225,
        statement:
          'Safety: Safely moves about community – adequate vision, hearing, makes safe decisions. Safely uses small appliances, ovens/burners, matches, knives, razors, other tools.',
        options: [
          { id: 744, statement: 'None of the time' },
          { id: 745, statement: 'A little of the time' },
          { id: 746, statement: 'Occasionally' },
          { id: 807, statement: 'Some of the time' },
          { id: 808, statement: 'A good bit of the time' },
          { id: 809, statement: 'Most of the time' },
          { id: 810, statement: 'All of the time' },
        ],
      },
      {
        id: 226,
        statement:
          'Managing Time: Follows regular schedule for bedtime, wake-up, meal times, rarely tardy or absent for work, day programs, appointments, scheduled activities.',
        options: [
          { id: 747, statement: 'None of the time' },
          { id: 748, statement: 'A little of the time' },
          { id: 749, statement: 'Occasionally' },
          { id: 811, statement: 'Some of the time' },
          { id: 812, statement: 'A good bit of the time' },
          { id: 813, statement: 'Most of the time' },
          { id: 814, statement: 'All of the time' },
        ],
      },

      {
        id: 227,
        statement: 'Managing Money :Manages money wisely (independent source of funds); controls spending habits.',
        options: [
          { id: 750, statement: 'None of the time' },
          { id: 751, statement: 'A little of the time' },
          { id: 752, statement: 'Occasionally' },
          { id: 815, statement: 'Some of the time' },
          { id: 816, statement: 'A good bit of the time' },
          { id: 817, statement: 'Most of the time' },
          { id: 818, statement: 'All of the time' },
        ],
      },
      {
        id: 228,
        statement: 'Nutrition: Eats at least 2 basically nutritious meals daily.',
        options: [
          { id: 753, statement: 'None of the time' },
          { id: 754, statement: 'A little of the time' },
          { id: 755, statement: 'Occasionally' },
          { id: 819, statement: 'Some of the time' },
          { id: 820, statement: 'A good bit of the time' },
          { id: 821, statement: 'Most of the time' },
          { id: 822, statement: 'All of the time' },
        ],
      },
      {
        id: 229,
        statement:
          'Problem Solving: Resolves basic problems of daily living, asks questions for clarity and setting expectations.',
        options: [
          { id: 756, statement: 'None of the time' },
          { id: 757, statement: 'A little of the time' },
          { id: 758, statement: 'Occasionally' },
          { id: 823, statement: 'Some of the time' },
          { id: 824, statement: 'A good bit of the time' },
          { id: 825, statement: 'Most of the time' },
          { id: 826, statement: 'All of the time' },
        ],
      },
      {
        id: 230,
        statement:
          'Family Relationships: Gets along with family, positive relationships as parent, sibling, child, significant other family member.',
        options: [
          { id: 759, statement: 'None of the time' },
          { id: 760, statement: 'A little of the time' },
          { id: 761, statement: 'Occasionally' },
          { id: 827, statement: 'Some of the time' },
          { id: 828, statement: 'A good bit of the time' },
          { id: 829, statement: 'Most of the time' },
          { id: 830, statement: 'All of the time' },
        ],
      },
      {
        id: 231,
        statement:
          'Alcohol/Drug Use: Avoids abuse or abstains from alcohol/drugs, cigarettes; understands signs and symptoms of abuse or dependency; avoids misuse or combining alcohol, drugs, medication.',
        options: [
          { id: 762, statement: 'None of the time' },
          { id: 763, statement: 'A little of the time' },
          { id: 764, statement: 'Occasionally' },
          { id: 831, statement: 'Some of the time' },
          { id: 832, statement: 'A good bit of the time' },
          { id: 833, statement: 'Most of the time' },
          { id: 834, statement: 'All of the time' },
        ],
      },
      {
        id: 232,
        statement:
          'Leisure: Relaxes with a variety of activities; attends/participates in sports or performing arts events; reads newspapers, magazines, books; recreational games with others; involved arts/crafts; goes to movies.',
        options: [
          { id: 765, statement: 'None of the time' },
          { id: 766, statement: 'A little of the time' },
          { id: 767, statement: 'Occasionally' },
          { id: 835, statement: 'Some of the time' },
          { id: 836, statement: 'A good bit of the time' },
          { id: 837, statement: 'Most of the time' },
          { id: 838, statement: 'All of the time' },
        ],
      },
      {
        id: 233,
        statement:
          'Community Resources: Uses other community services, self-help groups, telephone, public transportation, religious organizations, shopping.',
        options: [
          { id: 768, statement: 'None of the time' },
          { id: 769, statement: 'A little of the time' },
          { id: 770, statement: 'Occasionally' },
          { id: 839, statement: 'Some of the time' },
          { id: 840, statement: 'A good bit of the time' },
          { id: 841, statement: 'Most of the time' },
          { id: 842, statement: 'All of the time' },
        ],
      },
      {
        id: 234,
        statement: 'Social Network: Gets along with friends, neighbors, coworkers, other peers.',
        options: [
          { id: 771, statement: 'None of the time' },
          { id: 772, statement: 'A little of the time' },
          { id: 773, statement: 'Occasionally' },
          { id: 843, statement: 'Some of the time' },
          { id: 844, statement: 'A good bit of the time' },
          { id: 845, statement: 'Most of the time' },
          { id: 846, statement: 'All of the time' },
        ],
      },
      {
        id: 235,
        statement:
          'Sexuality: Appropriate behavior toward others; comfortable with gender, respects privacy and rights of others, practices safe sex or abstains.',
        options: [
          { id: 774, statement: 'None of the time' },
          { id: 775, statement: 'A little of the time' },
          { id: 776, statement: 'Occasionally' },
          { id: 847, statement: 'Some of the time' },
          { id: 848, statement: 'A good bit of the time' },
          { id: 849, statement: 'Most of the time' },
          { id: 850, statement: 'All of the time' },
        ],
      },
      {
        id: 236,
        statement:
          'Productivity: Independently working, volunteering, homemaking, or learning skills for financial self-support.',
        options: [
          { id: 777, statement: 'None of the time' },
          { id: 778, statement: 'A little of the time' },
          { id: 779, statement: 'Occasionally' },
          { id: 851, statement: 'Some of the time' },
          { id: 852, statement: 'A good bit of the time' },
          { id: 853, statement: 'Most of the time' },
          { id: 854, statement: 'All of the time' },
        ],
      },
      {
        id: 237,
        statement:
          'Coping Skills:Knows about nature of disability/illness, probable limitations, and symptoms of relapse; behaviors that cause relapse or make situation/condition worse; options for coping, improving, preventing relapse, restoring feelings of self-worth.',
        options: [
          { id: 780, statement: 'None of the time' },
          { id: 781, statement: 'A little of the time' },
          { id: 782, statement: 'Occasionally' },
          { id: 855, statement: 'Some of the time' },
          { id: 856, statement: 'A good bit of the time' },
          { id: 857, statement: 'Most of the time' },
          { id: 858, statement: 'All of the time' },
        ],
      },
      {
        id: 238,
        statement:
          'Behavior Norms: Complies with community norms, probation/parole, court requirements, if applicable; controls dangerous, violent, aggressive, bizarre, or nuisance behaviors; respects rights of others.',
        options: [
          { id: 783, statement: 'None of the time' },
          { id: 784, statement: 'A little of the time' },
          { id: 785, statement: 'Occasionally' },
          { id: 859, statement: 'Some of the time' },
          { id: 860, statement: 'A good bit of the time' },
          { id: 861, statement: 'Most of the time' },
          { id: 862, statement: 'All of the time' },
        ],
      },
      {
        id: 239,
        statement: 'Personal Hygiene: Cares for personal cleanliness, such as bathing, brushing teeth.',
        options: [
          { id: 786, statement: 'None of the time' },
          { id: 787, statement: 'A little of the time' },
          { id: 788, statement: 'Occasionally' },
          { id: 863, statement: 'Some of the time' },
          { id: 864, statement: 'A good bit of the time' },
          { id: 865, statement: 'Most of the time' },
          { id: 866, statement: 'All of the time' },
        ],
      },
      {
        id: 240,
        statement: 'Grooming: Cares for hair, hands, general appearance; shaves.',
        options: [
          { id: 789, statement: 'None of the time' },
          { id: 790, statement: 'A little of the time' },
          { id: 791, statement: 'Occasionally' },
          { id: 867, statement: 'Some of the time' },
          { id: 868, statement: 'A good bit of the time' },
          { id: 869, statement: 'Most of the time' },
          { id: 870, statement: 'All of the time' },
        ],
      },
      {
        id: 241,
        statement:
          'Dress: Dresses self; wears clean clothes that are appropriate for weather, job, and other activities; clothing is generally neat and intact.',
        options: [
          { id: 792, statement: 'None of the time' },
          { id: 793, statement: 'A little of the time' },
          { id: 794, statement: 'Occasionally' },
          { id: 871, statement: 'Some of the time' },
          { id: 872, statement: 'A good bit of the time' },
          { id: 873, statement: 'Most of the time' },
          { id: 874, statement: 'All of the time' },
        ],
      },
    ],
  },
  'Adult Outcomes Questionnaire (AOQ)': {
    name: 'Adult Outcomes Questionnaire (AOQ)',
    heading: 'Over the last two weeks, how often have you been bothered by any of the following problems?',
    questions: [
      {
        id: 242,
        statement: 'Little interest or pleasure in doing things',
        options: [
          { id: 875, statement: 'Not at all' },
          { id: 888, statement: 'Several days' },
          { id: 901, statement: 'More than half the days' },
          { id: 902, statement: 'Nearly every day' },
        ],
      },
      {
        id: 243,
        statement: 'Feeling down depressed or hopeless',
        options: [
          { id: 876, statement: 'Not at all' },
          { id: 889, statement: 'Several days' },
          { id: 903, statement: 'More than half the days' },
          { id: 904, statement: 'Nearly every day' },
        ],
      },
      {
        id: 244,
        statement: 'Trouble falling or staying asleep, or sleeping too much',
        options: [
          { id: 877, statement: 'Not at all' },
          { id: 890, statement: 'Several days' },
          { id: 905, statement: 'More than half the days' },
          { id: 906, statement: 'Nearly every day' },
        ],
      },
      {
        id: 245,
        statement: 'Feeling tired or having little energy',
        options: [
          { id: 878, statement: 'Not at all' },
          { id: 891, statement: 'Several days' },
          { id: 907, statement: 'More than half the days' },
          { id: 908, statement: 'Nearly every day' },
        ],
      },
      {
        id: 246,
        statement: 'Poor appetite or overeating',
        options: [
          { id: 879, statement: 'Not at all' },
          { id: 892, statement: 'Several days' },
          { id: 909, statement: 'More than half the days' },
          { id: 910, statement: 'Nearly every day' },
        ],
      },
      {
        id: 247,
        statement: 'Feeling bad about yourself – or that you are a failure or have let yourself or your family down',
        options: [
          { id: 880, statement: 'Not at all' },
          { id: 893, statement: 'Several days' },
          { id: 911, statement: 'More than half the days' },
          { id: 912, statement: 'Nearly every day' },
        ],
      },
      {
        id: 248,
        statement: 'Trouble concentrating on things, such as reading the newspaper or watching television',
        options: [
          { id: 881, statement: 'Not at all' },
          { id: 894, statement: 'Several days' },
          { id: 913, statement: 'More than half the days' },
          { id: 914, statement: 'Nearly every day' },
        ],
      },
      {
        id: 249,
        statement:
          'Moving or speaking so slowly that other people could have noticed. Or the opposite – being so fidgety or restless that you have been moving around a lot more than usual',
        options: [
          { id: 882, statement: 'Not at all' },
          { id: 895, statement: 'Several days' },
          { id: 915, statement: 'More than half the days' },
          { id: 916, statement: 'Nearly every day' },
        ],
      },
      {
        id: 250,
        statement: 'Thoughts that you would be better off dead, or of hurting yourself in some way',
        options: [
          { id: 883, statement: 'Not at all' },
          { id: 896, statement: 'Several days' },
          { id: 917, statement: 'More than half the days' },
          { id: 918, statement: 'Nearly every day' },
        ],
      },
      {
        id: 251,
        statement: 'Feeling nervous, anxious or on edge',
        options: [
          { id: 884, statement: 'Not at all' },
          { id: 897, statement: 'Several days' },
          { id: 919, statement: 'More than half the days' },
          { id: 920, statement: 'Nearly every day' },
        ],
      },
      {
        id: 252,
        statement: 'Not being able to stop or control worrying',
        options: [
          { id: 885, statement: 'Not at all' },
          { id: 898, statement: 'Several days' },
          { id: 921, statement: 'More than half the days' },
          { id: 922, statement: 'Nearly every day' },
        ],
      },
      {
        id: 253,
        statement: 'Feeling unproductive at work or other daily activities',
        options: [
          { id: 886, statement: 'Not at all' },
          { id: 899, statement: 'Several days' },
          { id: 923, statement: 'More than half the days' },
          { id: 924, statement: 'Nearly every day' },
        ],
      },
      {
        id: 254,
        statement: 'Having trouble focusing on achieving your goals',
        options: [
          { id: 887, statement: 'Not at all' },
          { id: 900, statement: 'Several days' },
          { id: 925, statement: 'More than half the days' },
          { id: 926, statement: 'Nearly every day' },
        ],
      },
    ],
  },
  // pending
  'Beck Depression Inventory (BDI-2)': {
    name: 'Beck Depression Inventory (BDI-2)',
    heading:
      'This questionnaire consists of 21 groups of statements. Please read each group of statements carefully, and then pick out the one statement in each group that best describes the way you have been feeling during the past two weeks, including today. If several statements in the group seem to apply equally well, circle the highest number for that group.',
    interpretation: {
      statement: 'Total Score - Levels of Depression',
      scores: [
        {
          range: '0-10',
          statement: 'These ups and downs are considered normal',
        },
        {
          range: '11-16',
          statement: 'Mild mood disturbance',
        },
        {
          range: '17-20',
          statement: 'Borderline clinical depression',
        },
        {
          range: '21-30',
          statement: 'Moderate depression',
        },
        {
          range: '31-40',
          statement: 'Severe depression',
        },
        {
          range: 'over 40',
          statement: 'Extreme depression',
        },
      ],
      conclusion: 'A persistent score of 17 or above indicates that you may need treatment.',
    },
    questions: [
      {
        id: 255,
        statement: 'Sadness',
        options: [
          { id: 927, statement: 'I do not feel sad.' },
          { id: 928, statement: 'I feel sad much of the time.' },
          { id: 929, statement: 'I am sad all the time.' },
          { id: 930, statement: "I am so sad or unhappy that I can't stand it." },
        ],
      },
      {
        id: 256,
        statement: 'Pessimism',
        options: [
          { id: 931, statement: 'I am not discouraged about my future.' },
          { id: 932, statement: 'I feel more discouraged about my future than I used to be.' },
          { id: 933, statement: 'I do not expect things to work out for me.' },
          { id: 934, statement: 'I feel my future is hopeless and will only get worse.' },
        ],
      },
      {
        id: 257,
        statement: 'Past Failure',
        options: [
          { id: 935, statement: 'I do not feel like a failure.' },
          { id: 936, statement: 'I have failed more than I should have.' },
          { id: 937, statement: 'As I look back, I see a lot of failures.' },
          { id: 938, statement: 'I feel I am a total failure as a person.' },
        ],
      },
      {
        id: 258,
        statement: 'Loss of Pleasure',
        options: [
          { id: 939, statement: 'I get as much pleasure as I ever did from the things I enjoy.' },
          { id: 940, statement: "I don't enjoy things as much as I used to." },
          { id: 941, statement: 'I get very little pleasure from the things I used to enjoy.' },
          { id: 942, statement: "I can't get any pleasure from the things I used to enjoy." },
        ],
      },
      {
        id: 259,
        statement: 'Guilty Feelings',
        options: [
          { id: 943, statement: "I don't feel particularly guilty." },
          { id: 944, statement: 'I feel guilty over many things I have done or should have done.' },
          { id: 945, statement: 'I feel quite guilty most of the time.' },
          { id: 946, statement: 'I feel guilty all of the time.' },
        ],
      },
      {
        id: 260,
        statement: 'Punishment Feelings',
        options: [
          { id: 947, statement: "I don't feel I am being punished." },
          { id: 948, statement: 'I feel I may be punished.' },
          { id: 949, statement: 'I expect to be punished.' },
          { id: 950, statement: 'I feel I am being punished.' },
        ],
      },
      {
        id: 261,
        statement: 'Self-Dislike',
        options: [
          { id: 951, statement: 'I feel the same about myself as ever.' },
          { id: 952, statement: 'I have lost confidence in myself.' },
          { id: 953, statement: 'I am disappointed in myself.' },
          { id: 954, statement: 'I dislike myself.' },
        ],
      },
      {
        id: 262,
        statement: 'Self-Criticalness',
        options: [
          { id: 955, statement: "I don't criticize or blame myself more than usual." },
          { id: 956, statement: 'I am more critical of myself than I used to be.' },
          { id: 957, statement: 'I criticize myself for all of my faults.' },
          { id: 958, statement: 'I blame myself for everything bad that happens.' },
        ],
      },
      {
        id: 263,
        statement: 'Suicidal Thoughts or Wishes',
        options: [
          { id: 959, statement: "I don't have any thoughts of killing myself." },
          {
            id: 960,
            statement: 'I have thoughts of killing myself, but I would not carry them out.',
          },
          { id: 961, statement: 'I would like to kill myself.' },
          { id: 962, statement: 'I would kill myself if I had the chance.' },
        ],
      },
      {
        id: 264,
        statement: 'Crying',
        options: [
          { id: 963, statement: "I don't cry anymore than I used to." },
          { id: 964, statement: 'I cry more than I used to.' },
          { id: 965, statement: 'I cry over every little thing.' },
          { id: 966, statement: "I feel like crying, but I can't." },
        ],
      },
      {
        id: 265,
        statement: 'Agitation',
        options: [
          { id: 967, statement: 'I am no more restless or wound up than usual.' },
          { id: 968, statement: 'I feel more restless or wound up than usual.' },
          { id: 969, statement: "I am so restless or agitated that it's hard to stay still." },
          {
            id: 970,
            statement: 'I am so restless or agitated that I have to keep moving or doing something.',
          },
        ],
      },
      {
        id: 266,
        statement: 'Loss of Interest',
        options: [
          { id: 971, statement: 'I have not lost interest in other people or activities.' },
          { id: 972, statement: 'I am less interested in other people or things than before.' },
          { id: 973, statement: 'I have lost most of my interest in other people or things.' },
          { id: 974, statement: "It's hard to get interested in anything." },
        ],
      },
      {
        id: 267,
        statement: 'Indecisiveness',
        options: [
          { id: 975, statement: 'I make decisions about as well as ever.' },
          { id: 976, statement: 'I find it more difficult to make decisions than usual.' },
          {
            id: 977,
            statement: 'I have much greater difficulty in making decisions than I used to.',
          },
          { id: 978, statement: 'I have trouble making any decisions.' },
        ],
      },
      {
        id: 268,
        statement: 'Worthlessness',
        options: [
          { id: 979, statement: 'I do not feel worthless.' },
          { id: 980, statement: "I don't consider myself as worthwhile and useful as I used to." },
          { id: 981, statement: 'I feel more worthless as compared to other people.' },
          { id: 982, statement: 'I feel utterly worthless.' },
        ],
      },
      {
        id: 269,
        statement: 'Loss of Energy',
        options: [
          { id: 983, statement: 'I have as much energy as ever.' },
          { id: 984, statement: 'I have less energy than I used to have.' },
          { id: 985, statement: "I don't have enough energy to do very much." },
          { id: 986, statement: "I don't have enough energy to do anything." },
        ],
      },
      {
        id: 270,
        statement: 'Change in Sleeping Pattern',
        options: [
          { id: 987, statement: 'I have not experienced any change in my sleeping pattern.' },
          {
            id: 988,
            statement: 'I sleep somewhat more than usual, or I sleep somewhat less than usual.',
          },
          { id: 989, statement: 'I sleep a lot more or less than usual.' },
          {
            id: 990,
            statement: "I sleep most of the day, or I wake up 1-2 hours early and can't get back to sleep.",
          },
        ],
      },
      {
        id: 271,
        statement: 'Irritibility',
        options: [
          { id: 991, statement: 'I am no more irritable than usual.' },
          { id: 992, statement: 'I am more irritable than usual.' },
          { id: 993, statement: 'I am much more irritable than usual.' },
          { id: 994, statement: 'I am irritable all the time.' },
        ],
      },
      {
        id: 272,
        statement: 'Changes in Appetite',
        options: [
          { id: 995, statement: 'I have not experienced any change in my appetite.' },
          { id: 996, statement: 'My appetite is somewhat less or greater than usual.' },
          { id: 997, statement: 'My appetite is much less or greater than usual.' },
          { id: 998, statement: 'I have no appetite at all, or I crave food all the time.' },
        ],
      },
      {
        id: 273,
        statement: 'Concentration Difficulty',
        options: [
          { id: 999, statement: 'I can concentrate as well as ever.' },
          { id: 1000, statement: "I can't concentrate as well as usual." },
          { id: 1001, statement: "It's hard to keep my mind on anything for very long." },
          { id: 1002, statement: "I find I can't concentrate on anything." },
        ],
      },
      {
        id: 274,
        statement: 'Tiredness or Fatigue',
        options: [
          { id: 1003, statement: 'I am no more tired or fatigued than usual.' },
          { id: 1004, statement: 'I get more tired or fatigued more easily than usual.' },
          {
            id: 1005,
            statement: 'I am too tired or fatigued to do a lot of the things I used to do.',
          },
          {
            id: 1006,
            statement: 'I am too tired or fatigued to do most of the things I used to do.',
          },
        ],
      },
      {
        id: 275,
        statement: 'Loss of Interest in Sex',
        options: [
          { id: 1007, statement: 'I have not noticed any recent change in my interest in sex.' },
          { id: 1008, statement: 'I am less interested in sex than I used to be.' },
          { id: 1009, statement: 'I am much less interested in sex now.' },
          { id: 1010, statement: 'I have lost interest in sex completely.' },
        ],
      },
    ],
  },
  PEG: {
    name: 'PEG',
    heading: 'Please answer the following three questions about your pain over the past week.',
    interpretation: {
      statement:
        'The PEG (Pain, Enjoyment, General activity) scale helps you and your healthcare team track the impact of pain on your life over time.',
    },
    questions: [
      {
        id: 276,
        statement: 'What number best describes your pain on average in the past week?',
        options: [
          { id: 1011, statement: '0 - No pain' },
          { id: 1012, statement: '1' },
          { id: 1013, statement: '2' },
          { id: 1014, statement: '3' },
          { id: 1015, statement: '4' },
          { id: 1016, statement: '5' },
          { id: 1017, statement: '6' },
          { id: 1018, statement: '7' },
          { id: 1019, statement: '8' },
          { id: 1020, statement: '9' },
          { id: 1041, statement: '10 - Pain as bad as you can imagine' },
        ],
      },
      {
        id: 277,
        statement:
          'What number best describes how, during the past week, pain has interfered with your enjoyment of life?',
        options: [
          { id: 1021, statement: '0 - Does not interfere' },
          { id: 1022, statement: '1' },
          { id: 1023, statement: '2' },
          { id: 1024, statement: '3' },
          { id: 1025, statement: '4' },
          { id: 1026, statement: '5' },
          { id: 1027, statement: '6' },
          { id: 1028, statement: '7' },
          { id: 1029, statement: '8' },
          { id: 1030, statement: '9' },
          { id: 1042, statement: '10 - Completely interferes' },
        ],
      },
      {
        id: 278,
        statement:
          'What number best describes how, during the past week, pain has interfered with your general activity?',
        options: [
          { id: 1031, statement: '0 - Does not interfere' },
          { id: 1032, statement: '1' },
          { id: 1033, statement: '2' },
          { id: 1034, statement: '3' },
          { id: 1035, statement: '4' },
          { id: 1036, statement: '5' },
          { id: 1037, statement: '6' },
          { id: 1038, statement: '7' },
          { id: 1039, statement: '8' },
          { id: 1040, statement: '9' },
          { id: 1043, statement: '10 - Completely interferes' },
        ],
      },
    ],
  },
  'Pilot Survey - First Module': {
    name: 'Pilot Survey - First Module',
    heading: 'Please answer the following questions.',
    interpretation: {
      statement: 'Thank you for your responses!  You can ignore the score for this survey.',
    },
    questions: [
      {
        id: 286,
        statement: 'Have you ever used medication (prescription or non-prescription) for pain management?',
        options: [
          { id: 1092, statement: 'Yes' },
          { id: 1093, statement: 'No' },
          { id: 1094, statement: 'Not sure / Prefer not to say' },
        ],
      },
      {
        id: 287,
        statement:
          'Have you ever used alternative therapies (for example, acupuncture, chiropractor) for pain management?',
        options: [
          { id: 1095, statement: 'Yes' },
          { id: 1096, statement: 'No' },
          { id: 1097, statement: 'Not sure / Prefer not to say' },
        ],
      },
      {
        id: 288,
        statement: 'Have you ever used counseling (group or one-on-one) for pain management?',
        options: [
          { id: 1098, statement: 'Yes' },
          { id: 1099, statement: 'No' },
          { id: 1100, statement: 'Not sure / Prefer not to say' },
        ],
      },
      {
        id: 289,
        statement: 'What is the top reason why you tried this program?',
        options: [
          { id: 1101, statement: 'I wanted to try a new approach to manage my pain' },
          { id: 1102, statement: 'My doctor or therapist wanted me to try it' },
          { id: 1103, statement: 'I had to try it to get my medication' },
          { id: 1104, statement: 'Other / Prefer not to say' },
        ],
      },
      {
        id: 290,
        statement: 'What feature of the program most interests you?',
        options: [
          { id: 1105, statement: 'Web-based: I can use the program on my own time' },
          { id: 1106, statement: 'Online community: I can connect with other people with pain' },
          { id: 1107, statement: 'Content: I can learn proven techniques for managing pain' },
          { id: 1108, statement: 'Not sure / Prefer not to say' },
        ],
      },
    ],
  },
  'PHQ-8': {
    name: 'PHQ-8',
    heading: 'Over the last two weeks, how often have you been bothered by the following problems?',
    interpretation: {
      statement: 'Total Score: Depression Severity',
      scores: [
        {
          range: '1-4',
          statement: 'Minimal depression',
        },
        {
          range: '5-9',
          statement: 'Mild depression',
        },
        {
          range: '10-14',
          statement: 'Moderate depression',
        },
        {
          range: '15-19',
          statement: 'Moderately severe depression',
        },
        {
          range: '20-27',
          statement: 'Severe depression',
        },
      ],
    },
    questions: [
      {
        id: 207,
        statement: 'Little interest or pleasure in doing things',
        options: [
          { id: 675, statement: 'Not at all' },
          { id: 676, statement: 'Several days' },
          { id: 691, statement: 'More than half the days' },
          { id: 692, statement: 'Nearly every day' },
        ],
      },
      {
        id: 208,
        statement: 'Feeling down, depressed, or hopeless',
        options: [
          { id: 677, statement: 'Not at all' },
          { id: 678, statement: 'Several days' },
          { id: 693, statement: 'More than half the days' },
          { id: 694, statement: 'Nearly every day' },
        ],
      },
      {
        id: 209,
        statement: 'Trouble falling or staying asleep, or sleeping too much',
        options: [
          { id: 679, statement: 'Not at all' },
          { id: 680, statement: 'Several days' },
          { id: 695, statement: 'More than half the days' },
          { id: 696, statement: 'Nearly every day' },
        ],
      },
      {
        id: 210,
        statement: 'Feeling tired or having little energy',
        options: [
          { id: 681, statement: 'Not at all' },
          { id: 682, statement: 'Several days' },
          { id: 697, statement: 'More than half the days' },
          { id: 698, statement: 'Nearly every day' },
        ],
      },
      {
        id: 211,
        statement: 'Poor appetite or overeating',
        options: [
          { id: 683, statement: 'Not at all' },
          { id: 684, statement: 'Several days' },
          { id: 699, statement: 'More than half the days' },
          { id: 700, statement: 'Nearly every day' },
        ],
      },

      {
        id: 212,
        statement: 'Feeling bad about yourself — or that you are a failure or have let yourself or your family down',
        options: [
          { id: 685, statement: 'Not at all' },
          { id: 686, statement: 'Several days' },
          { id: 701, statement: 'More than half the days' },
          { id: 702, statement: 'Nearly every day' },
        ],
      },
      {
        id: 213,
        statement: 'Trouble concentrating on things, such as reading the newspaper or watching television',
        options: [
          { id: 687, statement: 'Not at all' },
          { id: 688, statement: 'Several days' },
          { id: 703, statement: 'More than half the days' },
          { id: 704, statement: 'Nearly every day' },
        ],
      },
      {
        id: 214,
        statement:
          'Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual',
        options: [
          { id: 689, statement: 'Not at all' },
          { id: 690, statement: 'Several days' },
          { id: 705, statement: 'More than half the days' },
          { id: 706, statement: 'Nearly every day' },
        ],
      },
    ],
  },
}
