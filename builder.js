Survey
	.StylesManager
	.applyTheme("modern");
	
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

var surveyJSON = {
 "pages": [
  {
   "name": "welcome_page",
   "elements": [
    {
     "type": "html",
     "name": "introduction",
     "html": "<!DOCTYPE html>\n<html>\n<body>\n\n<h1><center>Welcome!</center></h1>\n<br />\n<br />\n<p>Thank you for taking part in this experiment! The data you will provide here will be kept anonymous and only shared with the researchers supervising this master thesis. Your participation in this experiment is voluntary. You may quit at any moment without negative consequences.\n<br />\n<br />\nThe experiment will take around 30 minutes. Please read the instructions carefully and answer the questions fully.</p>\n<br />\n<br />\n</body>\n</html>\n"
    }
   ]
  },
  {
   "name": "general_instructions",
   "elements": [
    {
     "type": "html",
     "name": "instruction_imc",
     "html": "</html>\n<h1><center>Work-out</center></h1>\n</br>\n<p style=\"font-size:15px\">In this study, you will be providing some ratings and written explanations on several topics. As in any other experiment, thorough attention to the instructions is expected to obtain reliable results. With that in mind, this screen aims to ensure that you are actually taking the time to carefully read the instructions. So, in order to demonstrate that you have read these instructions, please ignore the question for how frequent you engage in physical activity. Instead, please click on the little dot below to proceed with the experiment.</p><center><p style=\"font-size:30px\">How many days a week do you exercise?</p></center>\n</html>"
    },
    {
     "type": "radiogroup",
     "name": "activity_disctractor",
     "indent": 10,
     "titleLocation": "hidden",
     "choices": [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7"
     ],
     "colCount": 0
    },
    {
     "type": "html",
     "name": "question1",
     "html": "</br>\n</br>\n</br>\n</br>\n</br>\n"
    },
    {
     "type": "radiogroup",
     "name": "control_imc",
     "useDisplayValuesInTitle": false,
     "titleLocation": "hidden",
     "isRequired": true,
     "choices": [
      {
       "value": "1",
       "text": "  "
      }
     ],
     "otherErrorText": "c",
     "colCount": 0
    }
   ]
  },
  {
   "name": "crt",
   "elements": [
    {
     "type": "html",
     "name": "crt_instructions",
     "html": "</html>\n</br>\n</br>\nTo start off, please solve the problems below.</br>\n\n</html>"
    },
    {
     "type": "multipletext",
     "name": "crt_questions",
     "titleLocation": "hidden",
     "items": [
      {
       "name": "crt_2_1",
       "title": "If you’re running a race and you pass the person in second place, what place are you in?  ____ place"
      },
      {
       "name": "crt_2_2",
       "title": "A farmer had 15 sheep and all but 8 died. How many are left? ____ sheep"
      },
      {
       "name": "crt_2_3",
       "title": "Emily’s father has three daughters. The first two are named April and May.  What is the third daughter’s name? ____ "
      },
      {
       "name": "crt_2_4",
       "title": "How many cubic meter of dirt are there in a hole that is 3m deep x 3m wide x 3m long? ____ cubic meter"
      }
     ]
    }
   ]
  },
  {
   "name": "inst_pre_at",
   "elements": [
    {
     "type": "html",
     "name": "instruction_at_pre",
     "html": "<h1><center>Instructions</center></h1>\n<br />\n<br />\nIn this first block of questions, you will be presented with several statements, each regarding a specific topic. Please read all of the sentences and state your opinion on each of them by answering the questions."
    }
   ]
  },
  {
   "name": "attitude",
   "elements": [
    {
     "type": "radiogroup",
     "name": "gw_at",
     "title": "How likely you think it is for humanity to overcome the negative effects of the current climate change emergency (as for instance, achieving the goals adopted in the Paris agreement).",
     "hideNumber": true,
     "isRequired": true,
     "choices": [
      {
       "value": "1",
       "text": "Extremely unlikely"
      },
      {
       "value": "2",
       "text": "Somewhat unlikely"
      },
      {
       "value": "3",
       "text": "Neither likely nor unlikely"
      },
      {
       "value": "4",
       "text": "Somewhat likely"
      },
      {
       "value": "5",
       "text": "Extremely likely"
      }
     ],
     "colCount": 5
    },
    {
     "type": "radiogroup",
     "name": "nuclear_at",
     "title": "how appropriate you think the nuclear energy is as an alternative to conventional energy production methods (i.e., fossil fuels as coal, oil and natural gas).",
     "hideNumber": true,
     "isRequired": true,
     "choices": [
      {
       "value": "1",
       "text": "Extremely inappropriate"
      },
      {
       "value": "2",
       "text": "Somewhat inappropriate"
      },
      {
       "value": "3",
       "text": "Neither appropriate nor inappropriate"
      },
      {
       "value": "4",
       "text": "Somewhat appropriate"
      },
      {
       "value": "5",
       "text": "Extremely appropriate"
      }
     ],
     "colCount": 5
    },
    {
     "type": "radiogroup",
     "name": "gmo_at",
     "title": "How far do you agree or disagree with the use of genetic engineering for food production and the treatment of human and animal diseases.",
     "hideNumber": true,
     "isRequired": true,
     "choices": [
      {
       "value": "1",
       "text": "Extremely disagree"
      },
      {
       "value": "2",
       "text": "Somewhat disagree"
      },
      {
       "value": "3",
       "text": "Neither agree nor disagree"
      },
      {
       "value": "4",
       "text": "Somewhat agree"
      },
      {
       "value": "5",
       "text": "Extremely agree"
      }
     ],
     "colCount": 5
    },
    {
     "type": "radiogroup",
     "name": "panels_at",
     "title": "How far do you agree or disagree with the following statement: \"Solar panels are the best alternative for conventional energy production methods (i.e., fossil fuels as coal, oil and natural gas).\"",
     "hideNumber": true,
     "isRequired": true,
     "choices": [
      {
       "value": "1",
       "text": "Extremely disagree"
      },
      {
       "value": "2",
       "text": "Somewhat disagree"
      },
      {
       "value": "3",
       "text": "Neither agree nor disagree"
      },
      {
       "value": "4",
       "text": "Somewhat agree"
      },
      {
       "value": "5",
       "text": "Extremely agree"
      }
     ],
     "colCount": 5
    },
    {
     "type": "radiogroup",
     "name": "antibio_at",
     "title": "How far do you agree or disagree with the use and prescription of antibiotics for treating minor infections.",
     "hideNumber": true,
     "isRequired": true,
     "choices": [
      {
       "value": "1",
       "text": "Extremely disagree"
      },
      {
       "value": "2",
       "text": "Somewhat disagree"
      },
      {
       "value": "3",
       "text": "Neither agree nor disagree"
      },
      {
       "value": "4",
       "text": "Somewhat agree"
      },
      {
       "value": "5",
       "text": "Extremely agree"
      }
     ],
     "colCount": 5
    },
    {
     "type": "radiogroup",
     "name": "drugs_at",
     "title": "How far do you agree or disagree with the use of drugs in the treatment of mental disorders.",
     "hideNumber": true,
     "isRequired": true,
     "choices": [
      {
       "value": "1",
       "text": "Extremely disagree"
      },
      {
       "value": "2",
       "text": "Somewhat disagree"
      },
      {
       "value": "3",
       "text": "Neither agree nor disagree"
      },
      {
       "value": "4",
       "text": "Somewhat agree"
      },
      {
       "value": "5",
       "text": "Extremely agree"
      }
     ],
     "colCount": 5
    }
   ],
   "questionsOrder": "random"
  },
  {
   "name": "stimulus_instruction",
   "elements": [
    {
     "type": "html",
     "name": "stimulus_instructions",
     "html": "</html>\n\n<h1><center>Instructions</center></h1>\n<br />\n<br />\nFor the next task, I will show you one story published in one renowned magazine regarding one of the topics you have rated before. \n</br>\n</br>\nPlease read carefully the whole piece and answer the questions placed at the end of the story.\n\n</html>"
    }
   ]
  },
  {
   "name": "news_stimulus_neg_1",
   "elements": [
    {
     "type": "html",
     "name": "negative_news_1",
     "html": "</html>\n<h1><center>Why we won’t avoid a climate catastrophe</center></h1>\n</br>\n<p>On the first Earth Day, 22 April 1970, 20 million people turned to the streets in America—a way bigger crowd than the man who’d dreamed up the occasion, U.S. senator Gaylord Nelson, had anticipated. \n</br>\n</br>\nHowever, toward the end of his report on the festivities, NBC presenter Frank Blair, delivered a curious message. Quoting a government scientist named J. Murray Mitchell, Blair alerted on an “awesome Earth Day warning.” Blair summarized the warning this way: Unless something were done to reduce air pollution, it would “create a greenhouse effect” that would warm the entire planet. Eventually the effect would be enough to melt the Arctic ice cap and flood “vast areas of the world.”\n</br>\n</br>\nIn 1970 the term “global warming” had yet to be coined. Scientists knew that certain gases heat up the Earth. But only a few had tried to calculate what the impact of burning fossil fuels would be. Now, its effects are disturbingly evident. Over the past half century, perennial ice cap has shrunk by more than a million square miles. Sea levels are rising ever faster, largely thanks to accelerating melt from Greenland and Antarctica. \n</br>\n</br>\nAnd the kind of sea-level rise that will make life difficult in places like Boston is apt to make it impossible in places like the Marshall Islands and the Maldives. A recent study by American and Dutch researchers predicted that by the middle of this century, most atolls would be uninhabitable. A warmer world is also racked by deeper droughts, fiercer storms, and more erratic monsoons. It’s a world where the wildfire season lasts longer and the blazes grow bigger and more intense. Land degradation, coral bleaching, increasingly deadly heat waves, the expansion of marine dead zones—these are all happening now. We’re already seeing a great deal of damage, and it’s increasing year by year. But to a disturbing extent, the future has already been written. <b>(Continue next page)</b>\n</p>\n</html>"
    }
   ]
  },
  {
   "name": "news_stimulus_neg_2",
   "elements": [
    {
     "type": "html",
     "name": "negative_news_2",
     "hideNumber": true,
     "html": "</html>\n</p>\n</br>\n</br>\nIn 1970 the planet was home to 3.7 billion people. There were some 200 million cars and trucks on the road; oil consumption was around 45 million barrels a day. Today there are nearly eight billion people and some 1.5 billion vehicles on the planet. Global oil consumption has more than doubled, as has power use and pork and poultry consumption. Yet, we kept “demanding more and more.” \n</br>\n</br>\nThis means that even if we were to start cutting emissions today, the problem of climate change would continue to grow—just as the water level in a bathtub will continue to rise if you reduce but don’t shut off the flow from the tap. To keep temperatures under the 2-degree threshold, global emissions would have to drop by at least half over the next few decades, and all the way to zero by 2070 or so.\n</br>\n</br>\nThe big boom in renewable energy has not reduced our use of fossil fuels, because we keep demanding more and more energy. If current trends continue, the world in 2070 will be a very different and much more dangerous place—one in which flooding, drought, fire, and probably also climate-related unrest will have forced millions of people from their homes.\n</br>\n</br>\nIf people are doing better than they were in 1970, clearly the opposite is true for most other creatures. The two trends can be traced to the same source. To feed, house, and provide energy for our own growing population, we’ve appropriated ever more of the world’s resources for ourselves.\n</br>\n</br>\nPerhaps we’ll also figure out ways to deal with rising sea levels and fiercer storms and deeper droughts. Perhaps new, genetically engineered crops will allow us to continue to feed a growing population even as the world warms. Perhaps we’ll find “the interconnected web of life” isn’t essential to human existence after all. It would mean we could continue indefinitely along on our current path—altering the atmosphere, draining wetlands, emptying the oceans, and clearing the skies of life. Having freed ourselves from nature, we would find ourselves more and more alone, except perhaps for our insect drones.\n</p>\n</html>"
    }
   ]
  },
  {
   "name": "news_stimulus_neg_questions",
   "elements": [
    {
     "type": "radiogroup",
     "name": "threshold",
     "title": "According to the author, what is the threshold under which we should keep the rise in temperatures by 2070?",
     "hideNumber": true,
     "isRequired": true,
     "choices": [
      {
       "value": "1",
       "text": "1.5-degree"
      },
      {
       "value": "2",
       "text": "2-degree"
      },
      {
       "value": "3",
       "text": "2.5-degree"
      }
     ],
     "colCount": 5
    },
    {
     "type": "radiogroup",
     "name": "earth_day",
     "title": "In which year was the \"Earth Day\" celebrated for the first time?",
     "hideNumber": true,
     "isRequired": true,
     "choices": [
      {
       "value": "1",
       "text": "1971"
      },
      {
       "value": "2",
       "text": "1973"
      },
      {
       "value": "3",
       "text": "1970"
      }
     ],
     "colCount": 5
    },
    {
     "type": "radiogroup",
     "name": "vehicles",
     "title": "How many vehicles are there currently on the planet?",
     "hideNumber": true,
     "isRequired": true,
     "choices": [
      {
       "value": "1",
       "text": "1.5 billion"
      },
      {
       "value": "2",
       "text": "200 million"
      },
      {
       "value": "3",
       "text": "1 billion"
      }
     ],
     "colCount": 5
    }
   ]
  },
  /*{
   "name": "news_stimulus_pos_1",
   "elements": [
    {
     "type": "html",
     "name": "story_1",
     "html": "</html>\n<h1><center>Why we’ll succeed in saving the planet from climate change</center></h1>\n</br>\n<p>Life will be different—and warmer—in 2070. But we will find ways to limit carbon emissions, embrace nature, and thrive. \n</br>\n</br>\nIn February 1970, After 50 years of the first Earth day, my mother remembers those gowns well, 50 years later. The students that day were worried about dirty water and overpopulation as well as dirty air, but my mother was optimistic. “I assumed that human beings would step up when we had to,” she says. And to an extent we did: Cars in the United States are 99 percent cleaner than they were back then, thanks to pollution laws.\n</br>\n</br>\nWhat gives me hope? We already have the knowledge and technology we need to feed a larger population, provide energy for all, begin to reverse climate change, and prevent most extinctions. The public desire for action is bursting forth on the streets. Last September some six million people worldwide went on “climate strike.” Just as in 1970, the electric crackle of cultural change is once again in the air. I believe we will build a good 2070.\n</br>\n</br>\nIt will not look like 2020 or 1970. We cannot undo what we’ve done; we cannot go back in time. Change—ecological, economic, social—is inevitable. I predict that we will look back at the late 20th and early 21st centuries as a painful, turbulent transition, during which humanity learned to thrive in positive ecological relationships with one another and with the species around us. We cannot solve the climate crisis by being ‘good’ consumers. But we can make things much better by being good citizens.\n</br>\n</br>\nA quarter of emissions come from electricity and heat generation. Happily, with the political will, these are also the easiest emissions to eliminate. “We could easily cut it in half in 10 years,” says Jonathan Foley, the executive director of Project Drawdown, which does cost-benefit analyses of climate change solutions. Wind and solar power are mature enough to deploy on a massive scale, and batteries to store the power—both centrally and house-to-house—are getting better and cheaper. Meanwhile, coal companies are going bankrupt.\n<b>(Continue next page)</b>\n</p>\n</html>"
    }
   ]
  },
  {
   "name": "news_stimulus_pos_2",
   "elements": [
    {
     "type": "html",
     "name": "story_2",
     "html": "</html>\n<p>Agriculture, forestry, and land use are trickier. One solution is to stop subsidizing meat production and to encourage society-wide shifts to more plant foods. I don’t imagine everyone will be vegan in 2070. But most people will simply eat far less meat than they do today—and probably won’t miss it. \n</br>\n</br>\nThe rest of our carbon emissions come from industry, transportation, and buildings. The only real option is for governments to drive the change with tax incentives and regulations. In Norway half of new cars registered are now electric, in large part because the government exempts them from sales tax, making them as cheap as gas-powered cars—the sale of which will be banned by 2025.\n</br>\n</br>\nOne of the most cost-effective solutions to climate change, says Foley, is ensuring that girls and women have access to education and birth control. Women in Kenya, for example, went from having 8.1 children on average in the 1970s to just 3.7 children in 2015.\n</br>\n</br>\nTo tackle climate change, even as we turn global emissions down to near zero, we still will need to invest in methods to remove some greenhouse gases already in the atmosphere. Technologies to do this are promising but mostly in their infancy—except for trees, which in the short term at least are good at soaking up carbon. New research suggests most species can be saved and wildlife restored to higher abundances with a combination of more parks and protected areas, restoration of some ecosystems, and a reduction in farmland. \n</br>\n</br>\nIt took me way too long to realize that forces such as colonialism and racism are part of the climate crisis and need to be addressed as part of the solution. Real climate justice would make Earth more resilient even as it helped humanity heal from historic trauma and pain. In a sense, climate change is an opportunity for us to step up—to grow up—as a species.\n</p>\n</html>"
    }
   ]
  },
  {
   "name": "news_stimulus_pos_questions",
   "elements": [
    {
     "type": "radiogroup",
     "name": "control_neg_1",
     "title": "According to the author, by when will the gas-powered vehicles be banned in Norway?",
     "hideNumber": true,
     "isRequired": true,
     "choices": [
      {
       "value": "1",
       "text": "2023"
      },
      {
       "value": "2",
       "text": "2030"
      },
      {
       "value": "3",
       "text": "2025"
      }
     ],
     "colCount": 5
    },
    {
     "type": "radiogroup",
     "name": "control_neg_2",
     "title": "How much more cleaner are vehicles today than they were in 1970?",
     "hideNumber": true,
     "isRequired": true,
     "choices": [
      {
       "value": "1",
       "text": "95%"
      },
      {
       "value": "2",
       "text": "99%"
      },
      {
       "value": "3",
       "text": "90%"
      }
     ],
     "colCount": 5
    },
    {
     "type": "radiogroup",
     "name": "control_neg_3",
     "title": "According to the research mentioned by the author, how many children in average did Kenyan women have in 1970?",
     "hideNumber": true,
     "isRequired": true,
     "choices": [
      {
       "value": "1",
       "text": "6.5"
      },
      {
       "value": "2",
       "text": "4.2"
      },
      {
       "value": "3",
       "text": "8.1"
      }
     ],
     "colCount": 5
    }
   ],
   "questionsOrder": "random"
  },*/
  {
   "name": "ioed_instructions",
   "elements": [
    {
     "type": "html",
     "name": "ioed_inst",
     "html": "<!DOCTYPE html>\n<html>\n<body>\n\n<h1><center>Rating Scale Instructions</center></h1>\n<br />\n<br />\nFor the following task, I will ask you to rate how well you feel you understand the topics you just rate before. You will make your ratings on a 5-point scale where 1 indicates \"vague \nunderstanding\" and 5 indicates \"thorough understanding.\" Before you get started, this \nintroduction will try to explain what the different scores on the scale are supposed to \nreflect. \n<br />\n<br />\nNext you will see three different levels of understanding of the how immigration \npolicy impacts the economy. The understanding is shown by depicting the person's \nknowledge with a verbal description. Please read each explanation level in order to \nunderstand how to use the rating scale. As you will see, a 5 implies detailed and deep \nknowledge of the impacts of immigration policy on the economy. A 1 implies very little \nknowledge and a 3 is in the middle.\n</body>\n</html>\n"
    }
   ]
  },
  {
   "name": "ioed_5_understanding",
   "elements": [
    {
     "type": "html",
     "name": "7_understanding",
     "html": "<!DOCTYPE html>\n<html>\n<body>\n<p>\n<h1><center>Rating Scale Instructions</center></h1>\n</br>\n<b>Level 5 of knowledge: </b>A person with level 5 knowledge has very deep and detailed \nknowledge of immigration policy and its impacts on the economy. For instance he or she \nwill know that one consideration of immigrant impact on local economies is the \nrelationship between taxes paid versus social services received. But immigration also has \nless direct impacts on the local economy by influencing pay for higher-skilled workers, \nprices for goods and services produced by immigrant labor, and efficiency and wages for \nsome owners of capital. He or she will also know that immigrant workers compete with \ndomestic workers for low-skilled jobs, but some immigrants specialize in activities that \notherwise would not exist in an area, and thus can increase the overall labor force.</p>\n</body>\n</html>\n"
    }
   ]
  },
  {
   "name": "ioed_3_understanding",
   "elements": [
    {
     "type": "html",
     "name": "4_understanding",
     "html": "<!DOCTYPE html>\n<html>\n<body>\n<p>\n\n<h1><center>Rating Scale Instructions</center></h1>\n</br>\n<b>Level 3 of knowledge: </b>A person with level 3 knowledge has some knowledge of how \nimmigration policy affects the economy though he or she does not understand the issue in \ngreat depth or detail. For instance, he or she might know that immigration can have both \npositive and negative effects on the economy. He or she might know that immigrants can \nbe a drain in social services and create competition for jobs but also provide an \ninexpensive source of labor and often fill jobs that domestic residents do not want to do.</p>\n</body>\n</html>\n"
    }
   ]
  },
  {
   "name": "ioed_1_understanding",
   "elements": [
    {
     "type": "html",
     "name": "1_understanding",
     "html": "<!DOCTYPE html>\n<html>\n<body>\n<p>\n\n<h1><center>Rating Scale Instructions</center></h1>\n</br>\n<b>Level 1 of knowledge: </b>A person with level 1 knowledge knows very little about the \nimmigration policy issue and how it impacts the economy. He or she might know in a \ncursory way that immigration has economic impacts like affecting competition for jobs. \n</p>\n</body>\n</html>\n"
    }
   ]
  },
  {
   "name": "ioed_pre_ratings",
   "elements": [
    {
     "type": "html",
     "name": "instructions_ioed_pre",
     "html": "<!DOCTYPE html>\n<html>\n<body>\n<p>\n\n<h1><center>Rating Scale</center></h1>\n</br>\nWith the immigration example in mind, please rate your understanding on the topics below using the 5-point scale you just read. \n</p>\n</body>\n</html>\n"
    },
    {
     "type": "matrix",
     "name": "ioed_pre",
     "indent": 1,
     "titleLocation": "hidden",
     "isRequired": true,
     "columns": [
      "1",
      "2",
      "3",
      "4",
      "5"
     ],
     "rows": [
      {
       "value": "gw",
       "text": "How global warming works"
      },
      {
       "value": "drugs",
       "text": "How antidepressants affect the brain"
      },
      {
       "value": "gmo",
       "text": "How genetic engineering is used to produce genetically modified organisms"
      },
      {
       "value": "panels",
       "text": "How solar panels produce electricity"
      },
      {
       "value": "antibio",
       "text": "How antibiotics work"
      },
      {
       "value": "nuclear",
       "text": "How nuclear energy becomes electricity"
      }
     ],
     "rowsOrder": "random"
    }
   ]
  },
  {
   "name": "explanation_ioed",
   "elements": [
    {
     "type": "html",
     "name": "explanation_ins",
     "html": "<!DOCTYPE html>\n<html>\n<body>\n<p>\nNow, I’d like to probe your knowledge in a little more detail about the topic you read the story about. Please describe all the information that you know about how global warming occurs and how the human impact has accelerated it. Try to include as much information as you can. If you find that you are unsure about certain pieces of information, please write the word “UNSURE” in your description at that point, and then continue. Feel free to use as much space as you need.\n</br>\n</br>\nPlease take your time, as I expect your best explanation.</p>\n</br>\n</br>\n<p style=\"font-size:18px\">How does global warming work?</p>\n</body>\n</html>\n"
    },
    {
     "type": "comment",
     "name": "explanation_textbox",
     "titleLocation": "hidden",
     "isRequired": true
    }
   ]
  },
  {
   "name": "post_rating",
   "elements": [
    {
     "type": "html",
     "name": "post_rating_inst",
     "html": "<!DOCTYPE html>\n<html>\n<body>\n<p>\nNow, please rate again your knowledge on this topic using the 5-point understanding scale you have used before.</p>\n</body>\n</html>\n"
    },
    {
     "type": "matrix",
     "name": "post_rating_score",
     "indent": 1,
     "titleLocation": "hidden",
     "isRequired": true,
     "columns": [
      "1",
      "2",
      "3",
      "4",
      "5"
     ],
     "rows": [
      {
       "value": "gw",
       "text": "How global warming works"
      }
     ],
     "rowsOrder": "random"
    }
   ]
  },
  {
   "name": "expert_exp",
   "elements": [
    {
     "type": "html",
     "name": "explanation_expert",
     "html": "<!DOCTYPE html>\n<html>\n<body>\n<p>\nBelow you will find an expert explanation of how global warming works. Please read this explanation carefully. \n</br>\n</br>\n</body>\n</html>\n"
    },
    {
     "type": "html",
     "name": "expert_story",
     "html": "<center><h1>How Does Climate Change (“Global Warming”) Work?</h1>\n<h2><i>The Mechanism of Global Warming, an Extra Greenhouse Effect</i></h2></center>\n</br>\n</br>\nScientists tell us that human activities are changing Earth’s atmosphere and increasing Earth’s average temperature. What causes these climate changes?\n</br>\n</br>\nFirst, let’s understand Earth’s “normal” temperature: When Earth absorbs sunlight, which is mostly visible light, it heats up. Like the sun, Earth emits energy––but because it is cooler than the sun, Earth emits lower-energy infrared wavelengths. Greenhouse gases in the atmosphere (methane, carbon dioxide, etc.) let visible light pass through, but absorb infrared light––causing the atmosphere to heat up. The warmer atmosphere emits more infrared light, which tends to be re-absorbed––perhaps many times––before the energy eventually returns to space. The extra time this energy hangs around has helped keep Earth warm enough to support life as we know it. (In contrast, the moon has no atmosphere, and it is colder than Earth, on average.)\n</br>\n</br>\nSince the industrial age began around the year 1750, atmospheric carbon dioxide has increased by 40% and methane has increased by 150%. Such increases cause extra infrared light absorption, further heating Earth above its typical temperature range (even as energy from the sun stays basically the same). In other words, energy that gets to Earth has an even harder time leaving it, causing Earth’s average temperature to increase–– producing global climate change.\n</br>\n</br>\n[In molecular detail, greenhouse gases absorb infrared light because their molecules can vibrate to produce asymmetric distributions of electric charge, which match the energy levels of various infrared wavelengths. In contrast, non-greenhouse gases (such as oxygen and nitrogen–– that is, O2 and N2) don't absorb infrared light, because they have symmetric charge distributions even when vibrating.]\n</br>\n</br>\nSummary: (a) Earth absorbs most of the sunlight it receives; (b) Earth then emits the absorbed light’s energy as infrared light; (c) greenhouse gases absorb a lot of the infrared light before it can leave our atmosphere; (d) being absorbed slows the rate at which energy escapes to space; and (e) the slower passage of energy heats up the atmosphere, water, and ground. By increasing the amount of greenhouse gases in the atmosphere, humans are increasing the atmosphere’s absorption of infrared light, thereby warming Earth and disrupting global climate patterns. "
    }
   ]
  },
  {
   "name": "check_understanding",
   "elements": [
    {
     "type": "html",
     "name": "expert_post_und",
     "html": "<!DOCTYPE html>\n<html>\n<body>\n<p>\nLet’s assume that the expert explanation represents Level 5 knowledge. With this in mind, please re-rate your initial level of understanding of the topic you provided an explanation for (that is, your level of understanding before you read the expert explanation).</p>\n</body>\n</html>\n"
    },
    {
     "type": "matrix",
     "name": "ioed_post_expert",
     "indent": 1,
     "titleLocation": "hidden",
     "columns": [
      "1",
      "2",
      "3",
      "4",
      "5"
     ],
     "rows": [
      {
       "value": "gw",
       "text": "How global warming works"
      }
     ],
     "rowsOrder": "random"
    }
   ]
  },
  {
   "name": "inst_post_at",
   "elements": [
    {
     "type": "html",
     "name": "instruction_at_post",
     "html": "<h1><center>Instructions</center></h1>\n<br />\n<br />\nIn the next screen, I will ask you to rate again your opinion on the topics you read in the beginning by answering some questions."
    }
   ]
  },
  {
   "name": "attitude_post",
   "elements": [
    {
     "type": "radiogroup",
     "name": "gm_at_post",
     "title": "How likely you think it is for humanity to overcome the negative effects of the current climate change emergency (as for instance, achieving the goals adopted in the Paris agreement).",
     "hideNumber": true,
     "isRequired": true,
     "choices": [
      {
       "value": "1",
       "text": "Extremely unlikely"
      },
      {
       "value": "2",
       "text": "Somewhat unlikely"
      },
      {
       "value": "3",
       "text": "Neither likely nor unlikely"
      },
      {
       "value": "4",
       "text": "Somewhat likely"
      },
      {
       "value": "5",
       "text": "Extremely likely"
      }
     ],
     "colCount": 5
    },
    {
     "type": "radiogroup",
     "name": "nucelar_at_post",
     "title": "how appropriate you think the nuclear energy is as an alternative to conventional energy production methods (i.e., fossil fuels as coal, oil and natural gas).",
     "hideNumber": true,
     "isRequired": true,
     "choices": [
      {
       "value": "1",
       "text": "Extremely inappropriate"
      },
      {
       "value": "2",
       "text": "Somewhat inappropriate"
      },
      {
       "value": "3",
       "text": "Neither appropriate nor inappropriate"
      },
      {
       "value": "4",
       "text": "Somewhat appropriate"
      },
      {
       "value": "5",
       "text": "Extremely appropriate"
      }
     ],
     "colCount": 5
    },
    {
     "type": "radiogroup",
     "name": "gmo_at_post",
     "title": "How far do you agree or disagree with the use of genetic engineering for food production and the treatment of human and animal diseases.",
     "hideNumber": true,
     "isRequired": true,
     "choices": [
      {
       "value": "1",
       "text": "Extremely disagree"
      },
      {
       "value": "2",
       "text": "Somewhat disagree"
      },
      {
       "value": "3",
       "text": "Neither agree nor disagree"
      },
      {
       "value": "4",
       "text": "Somewhat agree"
      },
      {
       "value": "5",
       "text": "Extremely agree"
      }
     ],
     "colCount": 5
    },
    {
     "type": "radiogroup",
     "name": "panels_at_post",
     "title": "How far do you agree or disagree with the following statement: \"Solar panels are the best alternative for conventional energy production methods (i.e., fossil fuels as coal, oil and natural gas).\"",
     "hideNumber": true,
     "isRequired": true,
     "choices": [
      {
       "value": "1",
       "text": "Extremely disagree"
      },
      {
       "value": "2",
       "text": "Somewhat disagree"
      },
      {
       "value": "3",
       "text": "Neither agree nor disagree"
      },
      {
       "value": "4",
       "text": "Somewhat agree"
      },
      {
       "value": "5",
       "text": "Extremely agree"
      }
     ],
     "colCount": 5
    },
    {
     "type": "radiogroup",
     "name": "antibio_at_post",
     "title": "How far do you agree or disagree with the use and prescription of antibiotics for treating minor infections.",
     "hideNumber": true,
     "isRequired": true,
     "choices": [
      {
       "value": "1",
       "text": "Extremely disagree"
      },
      {
       "value": "2",
       "text": "Somewhat disagree"
      },
      {
       "value": "3",
       "text": "Neither agree nor disagree"
      },
      {
       "value": "4",
       "text": "Somewhat agree"
      },
      {
       "value": "5",
       "text": "Extremely agree"
      }
     ],
     "colCount": 5
    },
    {
     "type": "radiogroup",
     "name": "drugs_at_post",
     "title": "How far do you agree or disagree with the use of drugs in the treatment of mental disorders.",
     "hideNumber": true,
     "isRequired": true,
     "choices": [
      {
       "value": "1",
       "text": "Extremely disagree"
      },
      {
       "value": "2",
       "text": "Somewhat disagree"
      },
      {
       "value": "3",
       "text": "Neither agree nor disagree"
      },
      {
       "value": "4",
       "text": "Somewhat agree"
      },
      {
       "value": "5",
       "text": "Extremely agree"
      }
     ],
     "colCount": 5
    }
   ],
   "questionsOrder": "random"
  },
  {
   "name": "valence",
   "elements": [
    {
     "type": "html",
     "name": "valence_inst",
     "html": "<!DOCTYPE html>\n<html>\n<body>\n<p>\nFinally, please indicate how positively/negatively framed was the story you read before (NOT the expert explanation)</b>.\n</p>\n</body>\n</html>\n"
    },
    {
     "type": "matrix",
     "name": "valence_rating",
     "titleLocation": "hidden",
     "columns": [
      {
       "value": "1",
       "text": "1 Completely negative"
      },
      "2",
      "3",
      "4",
      {
       "value": "5",
       "text": "5 Completely positive"
      }
     ],
     "rows": [
      {
       "value": "1",
       "text": "Global Warming"
      }
     ]
    }
   ]
  },
  {
   "name": "demographics",
   "elements": [
    {
     "type": "html",
     "name": "demogrpahic_ins",
     "html": "<!DOCTYPE html>\n<html>\n<body>\n<p>To obtain a better analysis of the results, please answer following questions.\n</p>\n</body>\n</html>\n"
    },
    {
     "type": "text",
     "name": "age",
     "title": "Age (in years):",
     "isRequired": true
    },
    {
     "type": "dropdown",
     "name": "gender",
     "title": "Gender:",
     "isRequired": true,
     "choices": [
      {
       "value": "f",
       "text": "Female"
      },
      {
       "value": "m",
       "text": "Male"
      },
      {
       "value": "o",
       "text": "Other"
      }
     ]
    },
    {
     "type": "dropdown",
     "name": "education",
     "title": "Level of Education:",
     "isRequired": true,
     "choices": [
      {
       "value": "1",
       "text": "Graduated high school"
      },
      {
       "value": "2",
       "text": "Graduated college"
      },
      {
       "value": "3",
       "text": "Higher degree"
      }
     ]
    },
    {
     "type": "text",
     "name": "language",
     "title": "Native languages:",
     "description": "(i.e., The language spoken at home when you were a child)"
    },
    {
     "type": "text",
     "name": "question2",
     "title": "VP-Hour info:",
     "description": "If you want to obtain a VP-Hour for your participation in this experiment, please write below your last name, first name and your student number. These data will be deleted once the examination office is informed of your participation."
    }
   ]
  }
 ]
}

$(".sv_q_num").remove();

function sendDataToServer(survey) {
    survey.sendResult('4381ad07-65c2-4bfe-9bc1-4a91183dd6e8');
}

var survey = new Survey.Model(surveyJSON);
$("#surveyContainer").Survey({
    model: survey,
    onComplete: sendDataToServer
});
