'use strict';
// /** @type {import('sequelize-cli').Migration} */

// {
//   productId: ,
//   userId: , //
//   rating: ,
//   title: "",
//   description: "",
// },


const demoReviews = [
  /********************** 1. Personal Care **********************/
  // ✅ 1. toothpaste
  {
    productId: 1,
    userId: 68, // Yibo
    rating: 5,
    title: "Right size",
    description: "Just what wanted, right size and price",
  },
  {
    productId: 1,
    userId: 120, // Nhut
    rating: 5,
    title: "Minty fresh",
    description: "Minty fresh feeling, love it!",
  },
  // ✅ 5. solution
  {
    productId: 5,
    userId: 29, // David Nash
    rating: 1,
    title: "This solution is the devil.",
    description: "I purchased a small bottle of ths for a weekend trip. It isn't the solution I typically use at home. The trip ended up being ruined because after soaking my contacts in this solution friday night i could barely see the rest of the weekend. My eyes became red, irritated, and painful. I don't use this solution at home. I only bought it because it was a small easy to travel with bottle. It cost me a trip to the eye doctor, a new pair of contacts, and it took several weeks for my eyes to get back to normal. I wouldn't wish this solution on my worst enemy.",
  },
  {
    productId: 5,
    userId: 124, // Trevor Jones
    rating: 5,
    title: "sensitive skin",
    description: "all other brands of solution irritate the skin around my eyes. this brand works great and I never have any irritation!",
  },
  // ✅ 6. softlips
  {
    productId: 6,
    userId: 25, // Sherry
    rating: 5,
    title: "Great product!",
    description: "I bought this a month ago and it's been amazing. It smells good, adds the right amount of shine. It moisturizes and keeps my lips soft. It's easy to take one with you everywhere",
  },
  {
    productId: 6,
    userId: 127, // Christy
    rating: 5,
    title: "Saves dry cracked lips",
    description: "The best when it comes to moisturizing your chapped lips. I love these. They're small and easy to fit into a purse, it glides on smoothly and it really works fast.",
  },
  {
    productId: 6,
    userId: 131, // Mark Rodriguez
    rating: 5,
    title: "Perfect lip balm",
    description: "Best chapstick, it’s not greasy. I use this all year round. Perfect for everyday use.",
  },
  // ✅ 9. cotton
  {
    productId: 9,
    userId: 25, // Sherry
    rating: 5,
    title: "Good quality cotton balls",
    description: "Nice and good quality cotton",
  },
  {
    productId: 9,
    userId: 120, // Nhut
    rating: 1,
    title: "SHARP PLASTIC IN COTTONBALLS!",
    description: "I would give zero stars if possible. These cotton balls have not only gotten smaller in size over time but I’ve noticed that the last few bags I bought had some very rough, scratchy ones. I didn’t think much of it at first but the more I used them, the more I’m finding these “rough” ones. So I decided to investigate and I pulled at the rough spot last night and come to find this sharp string of hard plastic in a it. I’m using these to take off my eye makeup and could have seriously damaged my eyes with this! Not cool! Sounds like Target might have a future lawsuit.",
  },
  // ✅ 10. tissue
  {
    productId: 10,
    userId: 15, // Jojo
    rating: 4,
    title: "I like the product and buy it when I need tissues.",
    description: "Opened a box of 124 2-ply tissues and the box only had two tissues in it. I bought a package of 3 and it was the middle box. Thought you should know.",
  },
  {
    productId: 10,
    userId: 19, // Sam
    rating: 5,
    title: "Puffs",
    description: "My favorite when allergy season is here but cost to much!",
  },
  // ✅ 11. ibuprofen
  {
    productId: 11,
    userId: 122, // Noah Winzig
    rating: 3,
    title: "Ehh it's okay",
    description: "So these actually aren't the most effective for me. I don't feel better after these & require more to feel better compared to other brands.",
  },

  /********************** 2. Home **********************/
  // ✅ 13. gloves
  {
    productId: 13,
    userId: 66, // Moran
    rating: 4,
    title: "Just Ok",
    description: "These are just ok. They tend to thin and tear after about 3 weeks",
  },
  // ✅ 14. mrs. meyers
  {
    productId: 14,
    userId: 66, // Moran
    rating: 5,
    title: "Delicious Scent",
    description: "Earthy smelling, one of my fave scents… and I buy them all. Effective at cleaning. Love the bottle size and the sprayer is always even and drip less and perfect.",
  },
  // ✅ 17. woollite
  {
    productId: 17,
    userId: 63, // Jason Kong
    rating: 5,
    title: "Amazing",
    description: "This is great on black clothes. It doesn’t fade.",
  },
  {
    productId: 17,
    userId: 66, // Moran
    rating: 4,
    title: "Good soap but pricy",
    description: "Like everything but the price",
  },
  {
    productId: 17,
    userId: 8, // Brad Simpson
    rating: 5,
    title: "Woolite - needs no introduction!",
    description: "This is the only detergent for dark delicates I use (and the White bottle for light delicates). Woolite is the best - hands down for keeping fabrics looking new and gently washing away soil. The scent is pleasant and not overpowering.",
  },
  // ✅ 18. hangers
  {
    productId: 18,
    userId: 12, // Peter
    rating: 5,
    title: "Smart looking",
    description: "I think when all the hangers are the same you get instant neatness. These hangers are simple and sleek looking. I’ve transition almost all my clothes to them. I did try another brand and the hang and hook detached. These have been sturdy and reliable.",
  },
  // ✅ 19. towels
  {
    productId: 19,
    userId: 63, // Jason Kong
    rating: 3,
    title: "Okay material",
    description: "Cheap price, quality is okay. Good if you just need some new towels on a budget they’re not very soft but you get what you pay for",
  },
  {
    productId: 19,
    userId: 113, // Jarrod
    rating: 3,
    title: "Very nice towels",
    description: "Great size, wash well, just the right thickness. Amazing price. I want more! 😁",
  },
  // ✅ 21. steamer
  {
    productId: 21,
    userId: 21, // Olivia
    rating: 5,
    title: "Portable and Reliable",
    description: "This is one of the best steamers that I’ve owned. It takes the wrinkles out of my clothes and it is extremely easy to transport.",
  },
  {
    productId: 21,
    userId: 114, // Jenny Jiang
    rating: 4,
    title: "Awesome!",
    description: "We have been so pleased with our streamer. So convenient and easy to use.",
  },
  {
    productId: 21,
    userId: 128, // Calvin Liu
    rating: 5,
    title: "Portable light weight works great!!",
    description: "Bought awhile ago fairer used it to dewrinkle a shirt, came out great so i finally used it on some new curtains worked great!! Also used it on some vertical blinds that were jacked up from being stored presto they straighten out",
  },
  /********************** 3. Kitchen & Dining **********************/
  // ✅ 27. wine glasses
  {
    productId: 27,
    userId: 27, // Whit
    rating: 5,
    title: "Nice lottke glass",
    description: "Great price, fun to drink my sparkling water out of",
  },
  {
    productId: 27,
    userId: 61, // Eliza
    rating: 5,
    title: "Wine glasses",
    description: "Loved them. Perfect small Casual wine glasses at a great price.",
  },
  {
    productId: 27,
    userId: 67, // Yasha
    rating: 5,
    title: "Cute stemless glasses",
    description: "I got the stackable stemless glasses. They are super cute and stack well in cabinets! They are not perfectly even, but they are great quality for the price paid. Also love that they are dishwasher safe.",
  },
  {
    productId: 27,
    userId: 15, // Jojo
    rating: 2,
    title: "Dare not drop it",
    description: "Shatters into large and small chunks.",
  },
  // ✅ 28. knives
  {
    productId: 28,
    userId: 39, // David Rogers
    rating: 5,
    title: "No issues!",
    description: "Works great, best basic set I've ever gotten.",
  },
  {
    productId: 28,
    userId: 115, // Jon Park
    rating: 1,
    title: "Unsatisfied",
    description: "Don’t waste your money on this. The handles are hallow & make noise. Never used them, so they’re brand new. My fault I waited so long to open it that the return date had expired. Now my only option is to give it away or sell it for less than what I paid.",
  },
  // ✅ 29. grilling
  {
    productId: 29,
    userId: 39, // David Rogers
    rating: 5,
    title: "Very Good",
    description: "Very happy with this set. It is large as others have mentioned but for those with bigger hands it is perfect for turning steaks with the strong tongs as well as the very sturdy spatula for other items. Easy clean up also.",
  },
  {
    productId: 29,
    userId: 8, // Brad Simpson
    rating: 4,
    title: "Would be great scaled down a bit ...",
    description: "I love OXO utensils, but the size of this set is overkill (unusable) for my small hands and Weber Smokey Joe grill.",
  },
  // ✅ 30. compostable baking sheet
  {
    productId: 30,
    userId: 39, // David Rogers
    rating: 5,
    title: "Non stick natural",
    description: "It works well, no need to use oil doesn't stick. Easy clean up. Natural parchment. They changed the box, now easier too cut the parchment.",
  },
  {
    productId: 30,
    userId: 18, // Ari
    rating: 5,
    title: "Parchment paper",
    description: "I like the earth friendly quality",
  },
  // ✅ 34. toaster oven
  {
    productId: 34,
    userId: 5, // Geoffrey
    rating: 5,
    title: "Nice",
    description: "Nice design. Easy to use and clean",
  },
  {
    productId: 34,
    userId: 104, // Ben Thai
    rating: 5,
    title: "Buy one",
    description: "Worked perfectly. Bought one 4 yrs ago and still use it everyday. No problems.",
  },
  // ✅ 35. cookware
  {
    productId: 35,
    userId: 61, // Eliza
    rating: 5,
    title: "Good Quality",
    description: "Deep skillets. Good heat distribution. Nice selection of sizes in the set.",
  },
  /********************** 4. Grocery **********************/
  // ✅ 37. eggs
  {
    productId: 37,
    userId: 22, // Nate
    rating: 5,
    title: "Some leaking do check the carton!",
    description: "Good quality for an even better price! Less than $2 is hard to beat. You do have to check each carton to ensure there aren’t cracks though.",
  },
  // ✅ 38. bread
  {
    productId: 38,
    userId: 22, // Nate
    rating: 1,
    title: "PERSERVATIVE NATION!",
    description: "This bread has an insane amount of additives. People wonder why everyone is walking around with health issues, do better!",
  },
  {
    productId: 38,
    userId: 38, // Drew
    rating: 1,
    title: "Not sourdough",
    description: "Is this a joke? Not sourdough, same dish sponge consistency as most store bought breads... Sticking to HEB one, the only real bread I'm able to find",
  },
  // ✅ 39. rice
  {
    productId: 39,
    userId: 24, // Alex Pezzati
    rating: 5,
    title: "Good Product",
    description: "This is good value and great product. We buy bags when it is available.",
  },
  // ✅ 40. butter
  {
    productId: 40,
    userId: 38, // Drew
    rating: 5,
    title: "Best better; the only one I use",
    description: "The only butter I use for everything! Can’t tell how many times I have bought this.",
  },
  {
    productId: 40,
    userId: 4, // Shane
    rating: 5,
    title: "Best butter",
    description: "Such good butter!! Nice, rich, and salty.",
  },
  // ✅ 41. sriracha
  {
    productId: 41,
    userId: 47, // John C
    rating: 5,
    title: "Sriracha is awesome",
    description: "Yeah man, Sriracha is awesome and this is the best Sriracha",
  },
  // ✅ 42. Nutella
  {
    productId: 42,
    userId: 122, // Noah Winzig
    rating: 5,
    title: "Yummy",
    description: "I love this. I go through a couple of the big containers every year. My favorite is having it as a peanut butter and Nutella sandwich",
  },
  {
    productId: 42,
    userId: 9, // Hector
    rating: 5,
    title: "Perfect snack",
    description: "I love nutella because I can add it to anything and it will be delicious. I love making a nutella and banana sandwhich as a snack. It's really good.",
  },
  // ✅ 43. Ritter Sport
  {
    productId: 43,
    userId: 15, // Jojo
    rating: 5,
    title: "Go to treat",
    description: "One of my favorite sweet treats. The chocolate is delicious and the whole hazelnuts. So moreish. And cost is at least $1 cheaper at target than any grocery stores.",
  },
  {
    productId: 43,
    userId: 19, // Sam
    rating: 5,
    title: "One of my favorite",
    description: "Been having these for years and like the taste and hazelnuts in them. One of my best chocolates out there. The price has gone up but glad the taste is still the best.",
  },
  // ✅ 44. donuts
  {
    productId: 44,
    userId: 9, // Hector
    rating: 5,
    title: "A fluffy delight",
    description: "It was so soft and not too sugary",
  },
  // ✅ 45. Ice cream
  {
    productId: 45,
    userId: 7, // Dan Purcell
    rating: 5,
    title: "The GOAT",
    description: "The GOAT. The Tom Brady of ice creams.",
  },
  {
    productId: 45,
    userId: 27, // Whit
    rating: 5,
    title: "The best ice cream",
    description: "I had never had a better ice cream than this one! This is the best flavor from the best brand! The cone pieces along with the chocolate and caramel create a PERFECT flavor explosion. Absolutely love it!",
  },
  {
    productId: 45,
    userId: 34, // Anthony Lovern
    rating: 5,
    title: "Delicious",
    description: "This is my favorite flower, I like the taste, the ingredients and nutrients, it is delicious and enjoyable, you can try and check this out.",
  },
  // ✅ 46. orange juice
  {
    productId: 46,
    userId: 22, // Nate
    rating: 5,
    title: "Best OJ",
    description: "Best Orange 🍊 Juice",
  },
  {
    productId: 46,
    userId: 50, // Brennon
    rating: 5,
    title: "Best OJ",
    description: "It’s the best no pulp orange juice in the game!",
  },
  {
    productId: 46,
    userId: 68, // Yibo
    rating: 5,
    title: "Simply OJ",
    description: "I love this juice, especially the flavor",
  },
  {
    productId: 46,
    userId: 19, // Sam
    rating: 5,
    title: "So good",
    description: "Who doesn’t love a good no pulp OJ , ehh!?! Lol delicious",
  },
  // ✅ 47. soymilk
  {
    productId: 47,
    userId: 68, // Yibo
    rating: 5,
    title: "classic",
    description: "there is something about classic silk soy milk and tazo chia tea mix together that I am beyond addicted to. the flavors balance each other so well. i wish i could still find soy ice cream another fav of mine but now theyre all coconut milk.",
  },
  {
    productId: 47,
    userId: 18, // Ari
    rating: 5,
    title: "Great, just don't get close to freezing",
    description: "Smooth and consistent taste and great quality. My 2 year old and I both are very picking and love regular milk but we love this milk on occasion as we try to incorporate more plant based foods in our diets. Product gets weird clumps if it freezes.",
  },
  // ✅ 48. wine
  {
    productId: 48,
    userId: 42, // Tiffany
    rating: 4,
    title: "Nice",
    description: "A lighter or medium red this is bursting with berry flavors. It goes down very smoothly. It’s pretty good for California wine but I honestly think you can find better for cheaper. Many love this one though!",
  },
  {
    productId: 48,
    userId: 45, // Gary
    rating: 5,
    title: "Small bottle!",
    description: "The bottle is small This is what I get for not reading the ounces either way I’m gonna drink it and it’s delicious but just warning others this is a mini bottle not a full size for you guys probably already knew lol",
  },
  {
    productId: 48,
    userId: 59, // Cindy
    rating: 4,
    title: "It is smooth to",
    description: "It is smooth to drink and has subtle notes of berries. Compared to other Pinot Noirs, I think there are better ones to choose from, but at this price point I think this is a good option. If you are new to wine, this bottle is a great Noir to start with.",
  },
  {
    productId: 48,
    userId: 60, // David Burch
    rating: 5,
    title: "Out go to standard",
    description: "Out go to standard Pinot Noir! Usually pretty affordable. All the flavors and notes you expect from a Pinot Noir",
  },
  {
    productId: 48,
    userId: 61, // Eliza
    rating: 5,
    title: "Delicious, Refreshing, and 10/10",
    description: "I am a fan of Kim Crawford’s Sauvignon Blanc! It’s fresh and crisp. Perfect for a summer day. Pairs well with everything. Cheers!",
  },
  {
    productId: 48,
    userId: 62, // James
    rating: 5,
    title: "Hands down, best Pinot!!!",
    description: "Having a bad day? Meiomi. Having a good day? Meiomi. Need a you day? Meiomi. Each and every time. I am obsessed with this wine. Have gotten all my friends hooked on it as well!",
  },
  {
    productId: 48,
    userId: 66, // Moran
    rating: 1,
    title: "So overplayed",
    description: "This wine isn't it. It's quality has gone down and is now just a mass produced grape juice with zero quality.",
  },
  {
    productId: 48,
    userId: 67, // Yasha
    rating: 5,
    title: "My favorite",
    description: "Never met anyone that doesn’t like this wine. Even for beginners!",
  },
  {
    productId: 48,
    userId: 11, // Cameron
    rating: 2,
    title: "Smooth but yuck",
    description: "It has a smooth finish, but something about the taste is awful to me.",
  },
  /********************** 5. Electronics **********************/
  // ✅ 49. tv
  {
    productId: 49,
    userId: 22, // Nate
    rating: 5,
    title: "Great colors",
    description: "I bought it last month and we are happy with the TV we bought",
  },
  {
    productId: 49,
    userId: 28, // Daniel Flores
    rating: 5,
    title: "Great colors and clarity",
    description: "I replaced my old 55 inch with this 0LED and the colors and definition is outstanding.",
  },
  {
    productId: 49,
    userId: 33, // Ryan Schneider
    rating: 5,
    title: "Fabulous",
    description: "Recently upgraded from a 6yr old 65 LG OLED to a C2 77. It does appear in 6yrs the improvement in technology has made a difference for the good. I had been contemplating this for the better part of the year and I am glad I finally pulled the trigger.",
  },
  {
    productId: 49,
    userId: 58, // Christo
    rating: 5,
    title: "Great purchase!",
    description: "I purchased this tv 3 weeks ago and I'm very pleased with the features and the picture quality. Would recommend it if you are looking for a great tv.",
  },
  {
    productId: 49,
    userId: 5, // Geoffrey
    rating: 5,
    title: "Great tv",
    description: "Best decision I made in a while, nice upgrade from my Samsung, great price at Costco, really enjoy watching my movies and sports on this",
  },
  {
    productId: 49,
    userId: 7, // Dan Purcell
    rating: 5,
    title: "Great tv all around",
    description: "Have had this tv for about two weeks with no issues. Picture is clear and colors are vibrant. Sound is good even without external speakers",
  },
  {
    productId: 49,
    userId: 13, // Braxton
    rating: 5,
    title: "Gorgeous picture!",
    description: "The picture quality is stunning on this tv , so much better than we anticipated. We did our research, read reviews etc and it is so much better than the descriptions. You feel like you are with the actors, or at least could reach out and touch them.",
  },
  {
    productId: 49,
    userId: 16, // Nick
    rating: 5,
    title: "Movie Theater Experience in a Small Room",
    description: "I recently bought this TV a few weeks ago and have loved it ever since. Every movie, shows and games that my family and I have watched has been nothing but extraordinary.",
  },
  {
    productId: 49,
    userId: 57, // Chris P
    rating: 5,
    title: "great TV",
    description: "I bought this Tv 3 weeks ago. It was easy to set up and I do not consider myself to be tech savvy.the LG allows you to pick preset contrast and tone for movies ,gaming, sports etc. It will even suggest which one to switch too. the picture is excellent!",
  },
  // ✅ 50. ipad
  {
    productId: 50,
    userId: 26, // Rawaha
    rating: 5,
    title: "Awesome with a few exceptions",
    description: "I absolutely love the size of this ipad. The only downfall is if you’re on a Zoom call the battery will die quickly. I learned to put it in low power mode. Also you need wireless headphones in order use it privately in public.",
  },
  {
    productId: 50,
    userId: 28, // Daniel Flores
    rating: 5,
    title: "Awesomeness",
    description: 'I totally love it.!! “Style, Weight, Color” And Retina Display and Functions.!! Awesomeness .!!',
  },
  {
    productId: 50,
    userId: 29, // David Nash
    rating: 4,
    title: "Great product",
    description: "Love it. Only issue I had was the instructions from ATT. They said it was already activated and to follow the directions on the IPAD. You have to call att for them to activate it. It does not come already activated.",
  },
  {
    productId: 50,
    userId: 32, // Cesar
    rating: 5,
    title: "New Purchase",
    description: "I have enjoyed every minute using my new iPad. It is everything I have been needing for sometime.",
  },
  {
    productId: 50,
    userId: 33, // Ryan Schneider
    rating: 5,
    title: "Very pleased with this item.",
    description: "****Cool ***** Much sleeker than previous ipad",
  },
  {
    productId: 50,
    userId: 57, // Chris P
    rating: 5,
    title: "Love it",
    description: "Love it a lot a lot a lot",
  },
  {
    productId: 50,
    userId: 58, // Christo
    rating: 5,
    title: "Upgraded ipad",
    description: "I love how the camera recognizes the face it will move to find your face",
  },
  {
    productId: 50,
    userId: 68, // Yibo
    rating: 5,
    title: "GREAT PRODUCT. FAST SHIPPING",
    description: "Love this iPad. It’s so easy to use and has a very posh look and feel",
  },
  {
    productId: 50,
    userId: 2, // Bill
    rating: 5,
    title: "Love it.",
    description: "The new iPad Pro is just what my daughter needed.",
  },
  {
    productId: 50,
    userId: 11, // Cameron
    rating: 5,
    title: "Apple is solid",
    description: "Love the new iPad maybe I should have gotten the bigger screen.",
  },
  // ✅ 51. airpods
  {
    productId: 51,
    userId: 21, // Olivia
    rating: 5,
    title: "Love everything but the fit",
    description: "I love the noise canceling and the design kinda hard to fit in ear",
  },
  {
    productId: 51,
    userId: 41, // Jair
    rating: 5,
    title: "Worth it",
    description: "The best ones so far and as cool new features",
  },
  {
    productId: 51,
    userId: 46, // Jake M
    rating: 5,
    title: "Must buy",
    description: "Lost my first generation pros and bought these. These are phenomenal headphones and the clarity of the headphones has truly enhanced from the 1st generation AirPods Pro’s",
  },
  {
    productId: 51,
    userId: 56, // Adam
    rating: 5,
    title: "Very good",
    description: "was able to pick it up same day right after school for cheaper price than apple store. work like a charm",
  },
  {
    productId: 51,
    userId: 57, // Chris P
    rating: 5,
    title: "Great Buy",
    description: "Loving the ANC and transparency modes so far, battery life is great and sound quality is top tier. Defined would recommend, 10/10!",
  },
  {
    productId: 51,
    userId: 63, // Jason Kong
    rating: 5,
    title: "Amazing earbuds",
    description: "Wow! Amazing noise cancellation! Amazing stereo! I have had apple earbuds before but they were nothing compared to these!!",
  },
  {
    productId: 51,
    userId: 68, // Yibo
    rating: 5,
    title: "Happy with my choice",
    description: "Great sound and the fit is better. I love the ability to adjust the volume from the pods Target made price worth it",
  },
  {
    productId: 51,
    userId: 98, // Alex Auch
    rating: 5,
    title: "Apple Airpods Pro Gen 2 - nothing can compare to sound quality!",
    description: "Title speaks for itself. Has to be one of the best if not 'the best' out there in the market today. Apple did a good job this time. Excellent sound quality! There's absolutely nothing I can think of that's negative. Best money spent no doubt!",
  },
  {
    productId: 51,
    userId: 4, // Shane
    rating: 5,
    title: "Very cool",
    description: "These are the best headphones",
  },
  {
    productId: 51,
    userId: 9, // Hector
    rating: 5,
    title: "Sound quality amazing!",
    description: "Sound quality amazing! I had Power Beats before and I loved them because the battery lasted 15 hours and these definitely don’t last as long (about half the time) but the quality of the sounds is unbeatable.",
  },
  {
    productId: 51,
    userId: 10, // Cody
    rating: 5,
    title: "Worth it",
    description: "The noise canceling is beyond impressive. This is my first pair of apple AirPods and I’m ecstatic about them!",
  },
  // ✅ 52. homepod mini
  {
    productId: 52,
    userId: 8, // Brad Simpson
    rating: 5,
    title: "Amazing product",
    description: "For those who say “Hur Hur. It needs PlUgGeD in Fer PoWeR”, they need to go back to elementary school to learn that power is needed to make anything work and needs to be plugged into some sort of power source. This is a great product.",
  },
  {
    productId: 52,
    userId: 23, // Daniel Chin
    rating: 5,
    title: "Best smart speaker",
    description: "If you have Apple products (iPhone, iPad, Mac, etc) this little speaker is a no brainer! Excellent sound quality! Small, but mighty!! I already had one and purchased 2 more! Excited to try the intercom feature! The new blue color is very pretty!",
  },
  {
    productId: 52,
    userId: 38, // Drew
    rating: 5,
    title: "10/10 recommend!",
    description: "I love it! the sound quality is amazing!",
  },
  {
    productId: 52,
    userId: 49, // Thenu
    rating: 5,
    title: "Love",
    description: "Great sound and seamlessly pairs with all Apple devices. The small size makes it easy to move around. Only reason for 4 stars is that it needs to be plugged in",
  },
  {
    productId: 52,
    userId: 57, // Chris P
    rating: 5,
    title: "Fantastic!",
    description: "Fantastic speaker in a very small package. Fills my bedroom with sound and only takes up a tiny space.",
  },
  // ✅ 57. webcam
  {
    productId: 57,
    userId: 16, // Nick
    rating: 4,
    title: "Worked for 3 years!",
    description: "I've had this webcam for over 3 years and it has worked well! The only issue is that now it only shows a white screen. I've tried the troubleshooting tips found on Logitech's website and taken it apart but no luck in fixing it.",
  },
  {
    productId: 57,
    userId: 34, // Anthony Lovern
    rating: 5,
    title: "Good Picture",
    description: "Good quality picture for an inexpensive camera",
  },
  {
    productId: 57,
    userId: 57, // Chris P
    rating: 5,
    title: "Adequate and Effective",
    description: "I am new to technology and my son advised me that this would be effective tool to use to meet clients. Very user friendly.",
  },
  {
    productId: 57,
    userId: 131, // Mark Rodriguez
    rating: 5,
    title: "Great budget camera",
    description: "Great quality video for the price, and easy setup.",
  },
  // ✅ 59. lights
  {
    productId: 59,
    userId: 35, // Franco
    rating: 4,
    title: "Lots of options!",
    description: "Love that this strip gives you the option to cut it and make it exactly the length that you need it to be! My only wish is that it was a little more flexible for making a turn so that I could have wrapped it a little better around my TV stand.",
  },
  {
    productId: 59,
    userId: 37, // David DeHerrera
    rating: 5,
    title: "Great for larger TVs",
    description: "I was gifted this to try out and I am in love. Our TV is 87 inches and we needed more strip lights and this set the effect over the edge. EVeryone that comes into my house is amazing as its the first thing they say.",
  },
  {
    productId: 59,
    userId: 45, // Gary
    rating: 5,
    title: "Out with the old, in with the Hue!",
    description: "I had a ton of cheap LED strip lights from low-grade brands and I finally upgraded to these lights and I couldn't be happier. The color options are endless and installation was super easy. The lights feel secure and definitely worth the splurge.",
  },
  {
    productId: 59,
    userId: 47, // John C
    rating: 5,
    title: "Great light strips!",
    description: "I love that these lightstrips are so easy to install! The app is easy to use as well and offers so many pretty color options. I used these under my kitchen cabinets and they transform my whole kitchen!",
  },
  {
    productId: 59,
    userId: 57, // Chris P
    rating: 1,
    title: "Bad adhesive strip - too expensive",
    description: "If your wall isn’t completely smooth the adhesive will not stick. Had to return it because it just came undone over and over again.",
  },
  // ✅ 60. robovac
  {
    productId: 60,
    userId: 45, // Gary
    rating: 5,
    title: "Great deal and big help!",
    description: "Such a great robovac for dust and debris esp for a big house with two little ones and a lot of things in the way. Every day I empty it out and it's had gathered up a full carton.",
  },
  {
    productId: 60,
    userId: 57, // Chris P
    rating: 5,
    title: "WOW!! Love my Eufy!!",
    description: "Easy app setup. Shared settings with another phone easily. Ran on max suction for at least 45 min. Picked up plenty of dog hair and other debris, dust and dirt. Really was surprised at how well it cleaned.",
  },

  /********************** 6. Video Games **********************/
  // ✅ 61. xbox
  {
    productId: 61,
    userId: 16, // Nick
    rating: 4,
    title: "Very good petite console",
    description: "This is a console that focus’s on peak performance and I enjoy that. It also packs a punch in the form of the high level graphics and the durability of the console solid 8/10",
  },
  {
    productId: 61,
    userId: 22, // Nate
    rating: 5,
    title: "Fun",
    description: "I have so much fun with it every day I recommend this",
  },
  {
    productId: 61,
    userId: 57, // Chris P
    rating: 5,
    title: "XBOX XBOX XBOX",
    description: "XBOX IS GREAT, NO COMPARING",
  },
  // ✅ 62. PS5
  {
    productId: 62,
    userId: 17, // Andrew Fava
    rating: 5,
    title: "Step in the right direction",
    description: "Absolutely love this console this is a huge step up from me jumping from ps4 pro. No more fan noise, no more long loading times, a wayyyyy faster UI. This in every way possible is truly a next gen console. I was so lucky to be able to get the final ps5.",
  },
  {
    productId: 62,
    userId: 35, // Franco
    rating: 5,
    title: "Ps5",
    description: "It is very smooth and defiantly worth the price",
  },
  {
    productId: 62,
    userId: 36, // Kevin B
    rating: 5,
    title: "2 years later",
    description: "Was finally able to get my hands on one this weekend woke up early Saturday morning went on target and they had one in stock put my pick up order in and was surprised I got it love it",
  },
  {
    productId: 62,
    userId: 57, // Chris P
    rating: 5,
    title: "PlayStation 5",
    description: "Everything is perfect with the PS5. Quick download and load speed. Plays games without any issues. Plenty of memory space.",
  },
  // ✅ 63. meta quest
  {
    productId: 63,
    userId: 28, // Daniel Flores
    rating: 5,
    title: "Hardware is fine",
    description: "I have a Rift S and just bought the Quest 2. I love the cordless thing but some changes to the software side would be nice. With the Rift S I can roam around in my VR home environment but with the Quest 2 I can only stand in one place.",
  },
  {
    productId: 63,
    userId: 30, // John Lee
    rating: 5,
    title: "Overly Surprised",
    description: "I owned the first Oculus (SDK) and years later got a Valve Index. I purchased the Quest for my kid and set it up for him. I am really surprised on the hardware, the tracking, the comfort, the roomscale drawing/layout, the battery, and over all product.",
  },
  {
    productId: 63,
    userId: 36, // Kevin B
    rating: 2,
    title: "Review after using Meta Quest a couple of months",
    description: "It's heavy, not comfortable with glasses, dizzy, not enough contents. The contents are selling but not satisfied when purchased. I didn't buy this for gaming.",
  },
  // ✅ 67. keyboard
  {
    productId: 67,
    userId: 20, // Tanner
    rating: 5,
    title: "Best decent Gaming Keyboard",
    description: "I really enjoy the green switches, sounds great, and surprisingly it comes with PBT keycaps, Amazing quality",
  },
  {
    productId: 67,
    userId: 24, // Alex Pezzati
    rating: 5,
    title: "Good keyboard",
    description: "This keyboard is comfortable to use. The keys make a loud clicking sound when you press them. This keyboard is compact, making it great for smaller spaces. The RGB options are a nice touch for customized lighting.",
  },
  {
    productId: 67,
    userId: 37, // David DeHerrera
    rating: 4,
    title: "Decent but very loud",
    description: "It is pretty decent and types fairly smooth but I don’t really like how loud it types. The quality is good and sturdy doesn’t feel cheap and has a bit of weight to it. When plugging it in the my computer I get a software with razer to install.",
  },
  {
    productId: 67,
    userId: 41, // Jair
    rating: 5,
    title: "Great tactile response!",
    description: "I usually play FPS and MOBA games and this is absolutely perfect for both! Tactile response is so crisp and precise with good feedback. I love how it’s so compact and I can take it with me when we travel. It does have a cool RGB backlighting feature.",
  },
  {
    productId: 67,
    userId: 43, // Daniel Lam
    rating: 5,
    title: "Works fantastic",
    description: "I use this for work rather than for gaming. I like the feel and the lights. Makes working from home much more pleasant. I wish it had a 10 key but otherwise it is durable and works well. Very comfortable.",
  },
  {
    productId: 67,
    userId: 56, // Adam
    rating: 5,
    title: "Works great",
    description: "I love this keyboard! It’s very responsive and feels nice to game on. It is a nice addition to my gaming set up. The lighting is so cool and customizable and and if you’re into the clicking sounds of a keyboard, you’ll love this!",
  },
  // ✅ 69. gaming chair
  {
    productId: 69,
    userId: 16, // Nick
    rating: 5,
    title: "Great chair",
    description: "This chair has great back support. I haven’t used it for long so I am not sure how long it will hold up but I love it so far!",
  },
  {
    productId: 69,
    userId: 22, // Nate
    rating: 5,
    title: "Comfortable Chair for work",
    description: "chair is saving my back and legs after 3 years of remote work on a junky task chair",
  },
  // ✅ 70. arcade
  {
    productId: 70,
    userId: 65, // Max
    rating: 5,
    title: "It's legit!",
    description: "Well made table. Exceeded my expectations! Just got it though - we'll see how it holds up.",
  },
  {
    productId: 70,
    userId: 108, // David Siwulec
    rating: 5,
    title: "Sturdy, good size and lots of fun",
    description: "Build was easy. Instructions are very clear to follow. The machine is incredibly well wrapped. Very heavy and sturdy!. Graphics and sound are very clear.",
  },

  /********************** 7. Sports & Outdoors **********************/
  // ✅ 73. weights
  {
    productId: 73,
    userId: 13, // Braxton
    rating: 5,
    title: "Comfortable Weights",
    description: "Bought these to complete my home gym weights set. These are comfortable to hold and I love all the fun colors. Definitely reccomend them.",
  },
  {
    productId: 73,
    userId: 17, // Andrew Fava
    rating: 5,
    title: "Just Right",
    description: "We have tried dumbbells of varying sizes over time. These are just right for everyday use. There is no pain and we still get a light workout.",
  },
  {
    productId: 73,
    userId: 50, // Brennon
    rating: 5,
    title: "Muscle bound",
    description: "Needed heavier workout weights & these were exactly what I wanted & needed.",
  },
  {
    productId: 73,
    userId: 101, // Alex Feinberg
    rating: 5,
    title: "Great ddumbells",
    description: "Love the different colors of each lbs. Sturdy and the Comfort it has when using them. Definitely recommend, it does get pricier as lbs go up (bleh lol).",
  },
  // ✅ 74. yoga mat
  {
    productId: 74,
    userId: 67, // Yasha
    rating: 3,
    title: "It's a pass for me",
    description: "Wish I could return it but I’ve already used it in a hot yoga class. I wouldn’t recommend this for yoga - maybe fun for a kids mat but my hands and feet always slip.",
  },
  {
    productId: 74,
    userId: 5, // Geoffrey
    rating: 2,
    title: "Slippery",
    description: "Unfortunately this mat is way too slippery for yoga.",
  },
  {
    productId: 74,
    userId: 116, // Jwad
    rating: 2,
    title: "Thin",
    description: "I found one of these in perfect condition on the curb just before trash day and took it home. I used (in parts) it for everything but yoga, mostly in my shoes to even out a short leg. After a week it was as flat as a piece of construction paper. Overpriced, still there are a hundred uses for a roll of foam such as this, you couldn't go wrong to buy one and tuck it away, but for yoga? I don't think so - get something much thicker.",
  },
  // ✅ 77. hiking
  {
    productId: 77,
    userId: 10, // Cody
    rating: 5,
    title: "Good links for connecting to your backpack",
    description: "There is nothing to dislike. I use these to attach my water bottle to my backpack. I guess you can use them as a key ring also.",
  },
  {
    productId: 77,
    userId: 31, // Andrew Tran
    rating: 5,
    title: "Works Great and Looks Snazzy",
    description: "It works as advertised. I clip my car and house keys to my pants while working everyday (do lots of walking around and physical labor). It stays in place and seems very sturdy. Gettting a pack of 2 is fantastic.",
  },
  {
    productId: 77,
    userId: 64, // Joanna
    rating: 5,
    title: "Great Multi Purpose Hooks",
    description: "Bought these to hold doggy bags on my pets leash and they work perfectly! Easy to use, love the bright colors. No issues with breaking yet!",
  },
  // ✅ 78. water bottle
  {
    productId: 78,
    userId: 10, // Cody
    rating: 5,
    title: "The best Waterbottle",
    description: "This is the best waterbottle I have ever had! Defently recamend. Beautiful and very afordible!",
  },
  {
    productId: 78,
    userId: 64, // Joanna
    rating: 2,
    title: "Missing. Straw Top with no Straw!?",
    description: "Missing pieces. It's the straw lid design, but didn't come with the actual straw.... Bottle itself is fine.",
  },

  /********************** 8. Pets **********************/
  // ✅ 85. cat food
  {
    productId: 85,
    userId: 26, // Rawaha
    rating: 5,
    title: "Meow",
    description: "My cats love it. They have been eating Meow mix for 8+ years.",
  },
  // ✅ 86. dog food
  {
    productId: 86,
    userId: 14, // Jesse C.
    rating: 5,
    title: "Great food",
    description: "Love the brand and my dogs love the quality of dog food they receive.",
  },
  {
    productId: 86,
    userId: 4, // Shane
    rating: 5,
    title: "My dogs love it!",
    description: "My dogs can't get enough of this. My senior dog actually has some prep in his step after switching to this. The cost is killing me though.",
  },
  // ✅ 87. cat toy
  {
    productId: 87,
    userId: 39, // David Rogers
    rating: 5,
    title: "Popular with stray kitten",
    description: "My stray cats love it. I wish it was cheaper. My stray cat ran away and hid it now I have to buy another one.",
  },
  // ✅ 88. dog toy
  {
    productId: 88,
    userId: 14, // Jesse C.
    rating: 5,
    title: "Lab's best friend",
    description: "Very durable for my lab puppy who chews through almost everything. Longest lasting you so far. Highly recommend!",
  },
  {
    productId: 88,
    userId: 4, // Shane
    rating: 3,
    title: "Great toy, but it won't hold up to chewers.",
    description: "My dog LOVES this stick! She pulled the noise maker out in minutes and chewed off the ends and branches in a day, but over a year later she still loves what's left! If you have an aggressive chewer this won't last.",
  },
  // ✅ 94. litter
  {
    productId: 94,
    userId: 26, // Rawaha
    rating: 5,
    title: "Great litter abd Vet approved!!",
    description: "This is my favorite litter. Cats are sensitive to strong perfume scents. I love this litter it does the job and you never smell anything. The best part it does not hurt my fur baby and all the previous cats I have had.",
  },
  {
    productId: 94,
    userId: 63, // Jason Kong
    rating: 5,
    title: "Love this for multiple cats. Only one I use!",
    description: "I prefer to only use this litter, for the price, odor control. And cats like it!",
  },

  /********************** 9. Furniture **********************/
  // ✅ 97. dining table
  {
    productId: 97,
    userId: 48, // Maliha
    rating: 5,
    title: "Great Value",
    description: "This table is perfect for my kitchen. I wanted something round and not too big for the area. 4 chairs fit easily around it. The base is heavy so it is very stable. Easy to assemble though the base is heavy to move but worth the effort.",
  },
  {
    productId: 97,
    userId: 58, // Christo
    rating: 5,
    title: "Table",
    description: "Love this table so much! Easy to clean and looks beautiful in the space I needed it for",
  },
  {
    productId: 97,
    userId: 61, // Eliza
    rating: 5,
    title: "Classy",
    description: "Purchased this as a conference table for my office. It is so sleek and pretty. Gives my office a solid, but feminine flair!",
  },
  {
    productId: 97,
    userId: 130, // Allie
    rating: 5,
    title: "Stunning!!",
    description: "Absolutely gorgeous table.. now I want new chairs cuz it’s too pretty for the ones I got",
  },
  // ✅ 99. side tables
  {
    productId: 99,
    userId: 18, // Ari
    rating: 5,
    title: "Love these tables!",
    description: "So easy to assemble and very attractive when placed together. They feel very solid!",
  },
  {
    productId: 99,
    userId: 49, // Thenu
    rating: 2,
    title: "They’ll have to do",
    description: "I realize this is a $100 pair of tables and my expectations should be low—and they were, but what I pulled out of the packaging blew my mind. Most strange of all, the parts came out of the box feeling damp to the touch and smelling of wet soil.",
  },
  {
    productId: 99,
    userId: 61, // Eliza
    rating: 5,
    title: "Sturdy",
    description: "Sturdy legs, metal brackets to secure-no wobbles!!",
  },
  {
    productId: 99,
    userId: 103, // Ashwin
    rating: 5,
    title: "Adorable!",
    description: "These are so stinking cute! I bought them to replace an old end table in my bedroom, and they are very chic. They are also generously sized, enough to fit some decorations.",
  },
  {
    productId: 99,
    userId: 130, // Allie
    rating: 5,
    title: "Gorgeous and affordable",
    description: "Love these chairs, purchased a few of them. Great as coding chairs. I suggest adding leg foot pads to avoid floor scratches.",
  },
  // ✅ 100. bookcase
  {
    productId: 100,
    userId: 60, // David Burch
    rating: 5,
    title: "Works great!",
    description: "Fits perfectly in my small closet! Saves space and is great for organizing.",
  },
  {
    productId: 100,
    userId: 63, // Jason Kong
    rating: 5,
    title: "Goog product",
    description: "Easy to put together. The pieces were will marked and all holes were drilled well and in the correct spots.",
  },
  {
    productId: 100,
    userId: 130, // Allie
    rating: 5,
    title: "Good for the price",
    description: "Very easy to assemble, can be done by one person within 30-40 minutes. Looks nice, we have 3 of these now.",
  },
  // ✅ 104. frames
  {
    productId: 104,
    userId: 42, // Tiffany
    rating: 5,
    title: "Cute simple frame",
    description: "I love these simple frames. You just have to be careful when buying because a lot of them have black marks from being moved around or something",
  },
  {
    productId: 104,
    userId: 55, // Andrew Kim
    rating: 5,
    title: "Frames",
    description: "Looks absolutely amazing on my family photo wall.",
  },
  {
    productId: 104,
    userId: 106, // Casstiel
    rating: 5,
    title: "Looks expensive",
    description: "These frames are very sturdy, not cheap or thin. I bought 1 at first, once I hung it up, I went back and bought 3 more. I bought these in the store without seeing the reviews in advance. The frame is good and so is the mat that was included. It’s looks expensive, great value. Buy it, you won’t be disappointed,",
  },
  // ✅ 105. vases
  {
    productId: 105,
    userId: 25, // Sherry
    rating: 5,
    title: "Must have vase",
    description: "One of my favorite purchases. Perfect size vase. I loved it so much I bought two.",
  },
  {
    productId: 105,
    userId: 27, // Whit
    rating: 5,
    title: "Perfect for floral centerpieces",
    description: "I bought this to create low floral centerpieces for the dinner table. It's the perfect size and height and the stems stay in. The glass is also strong and heavy. I had to get 8 so the price was good.",
  },
  {
    productId: 105,
    userId: 42, // Tiffany
    rating: 3,
    title: "Okay vase",
    description: "Not bad, smaller that I thought even though it had dimensions. Doesn't really look like a vase, more like a cup",
  },
  // ✅ 108. white board
  {
    productId: 108,
    userId: 7, // Dan Purcell
    rating: 5,
    title: "Amazing Dry Erase Board!",
    description: "This dry erase board is large yet lightweight. I absolutely love the size of it. It was very easy to install myself. I came with the instillation kit and a black Quartet marker. The surface is smooth and slick and the markers glide effortlessly.",
  },
  {
    productId: 108,
    userId: 8, // Brad Simpson
    rating: 4,
    title: "Great product",
    description: "I got this dry erase board to put in my home office and it is absolutely amazing. It was easy to install and hang. I am able to put important dates and reminders and have a constant visual of upcoming appointments. Writing on it is a breeze.",
  },
  {
    productId: 108,
    userId: 24, // Alex Pezzati
    rating: 5,
    title: "Great dry-erase board",
    description: "This is a great dry-erase board that can help keep you and your family organized. We have this hung up in our family room with notes/reminders for everyone in the family. It was easy to install. The board is fairly big, so you can do a lot with this.",
  },
  {
    productId: 108,
    userId: 34, // Anthony Lovern
    rating: 4,
    title: "Excellent Board, Insufficient Packaging",
    description: "The board is great but the packaging needs some work. I received a damaged board with missing hardware that was obviously caused by insufficient packaging. Thankfully customer service is excellent and they shipped a replacement immediately.",
  },
  {
    productId: 108,
    userId: 131, // Mark Rodriguez
    rating: 5,
    title: "Overall, a very good product",
    description: "I received this product for review. The board is very large and has plenty of space for writing and storing documents with the clips you can put around the edges. It's built very sturdy and seems to be well constructed for long-lasting use. It also comes with a tray that you can assemble to hold the markers and eraser. The only complaint I might have is installing it on the wall. The instructions were a tad complicated but not something we couldn't figure out, and if you can't figure them out, you could always just buy some Command strips to hang it. Overall, a very good product!",
  },
  /******************* Phase 2 Products *******************/
    // ✅ 2. face wash
  {
    productId: 2,
    userId: 43, // Daniel Lam
    rating: 5,
    title: "Grapefruit exfoliator",
    description: "Smells good. Refreshing feeling. Exfoliates",
  },
  {
    productId: 2,
    userId: 66, // Moran
    rating: 1,
    title: "Returning!",
    description: "since Neutrogena discontinued the Pore Minimizer Scrub in the white tube I thought I'd try this and what a joke. This doesn't even come close to the other scrub. I cannot understand why they would cancel such a great product. This has some type of big uneven ground up type seeds for the scrub and it's terrible. Pore Minimizer scrub had tiny beads that left my skin smooth and clean, not this.",
  },
  {
    productId: 2,
    userId: 129, // Wes Trinh
    rating: 5,
    title: "Soft skin + goodbye pimples!",
    description: "I've been using this product since 2015, literally no regrets until now. It really helps reducing acne if you use it at least twice a week, leaves your face extremely soft and also improves erasing of dark spots. 5/5",
  },
    // ✅ 3. toner
  {
    productId: 3,
    userId: 99, // Alexis West
    rating: 5,
    title: "Sensitive skin",
    description: "I love this toner cause it's without alcohol and very gentle for my sensitive skin. Moisturize and leaves skin fresh and supple.",
  },
  {
    productId: 3,
    userId: 81, // Justin
    rating: 5,
    title: "Liked it",
    description: "I liked that this product wasn’t super expensive and that it didn’t leave my face feeling like a bunch of bees just stung it. It had a slight scent, but nothing abnormal. If using this right after washing my face, I felt like I could feel my face just getting lighter.",
  },
    // ✅ 4. lotion
  {
    productId: 4,
    userId: 96, // Gabe
    rating: 1,
    title: '"smart" pump more like "broken" pump',
    description: "my family and i are absolutely obsessed with the almond smooth intensive care lotion. we have purchased atleast 6 bottles everytime we get home and lather up until our skin stops soaking it in, we walk away. let's say a cat knocks it just down into the sink? broken. we now have to take all the stuff off the lid and shake the lotion out and use 600 ML of lotion before it dries out.",
  },
  {
    productId: 4,
    userId: 81, // Justin
    rating: 4,
    title: "Keep me looking sexy",
    description: "At 49 years old I need all the I can get. This lotion keeps my skin hydrated and looking healthy. I put it on every day . I love the way it smells, like coconut. I doesn't make me sticky either so I can put it on before bed and I don't stick to the sheets.",
  },
    // ✅ 7. brows
  {
    productId: 7,
    userId: 82, // Keer
    rating: 3,
    title: "Not sure",
    description: "I thought midnight brown was a very dark brown but it looks almost reddish on my skin tone. A dark brown pencil usually works ok with my skin tone especially if I line the outside of my eyebrows and lightly shade in any sparse areas before using a brush. I seem to only be able to do a light fill in here & there without the color being too noticeable.",
  },
  {
    productId: 7,
    userId: 75, // Calvin Tzeng
    rating: 5,
    title: "Natural color",
    description: "I like that this product has a variety of colors. They have black, brown and honey colors. Personally, I prefer the brown ones because they look more natural on skin and help lighten skin tone a little bit. It's super easy to apply and removed by any makeup remover.",
  },
  {
    productId: 7,
    userId: 48, // Maliha
    rating: 4,
    title: "RICH BROWN?",
    description: "I've used these pencils for years in Rich Brown but now I don't see that color selection and I'm reading bad reviews about the Midnight Brown which is possibly what replaced Rich Brown. What I DON'T LIKE about these pencils is that some don't sharpen well after a certain point. Most do sharpen well so I'll continue to buy IF I can find Rich Brown.",
  },
  // ✅ 8. razor
  {
    productId: 8,
    userId: 121, // Noah Kerner
    rating: 5,
    title: "10 / 10",
    description: "This razor is amazing!! I have very sensitive skin and I had no problem with this razed. I highly recommend",
  },
  {
    productId: 8,
    userId: 122, // Noah Winzig
    rating: 5,
    title: "My Boyfriend's Go-To",
    description: "My boyfriend has multiple of these they’re so good.",
  },
    // ✅ first aid
  {
    productId: 12,
    userId: 88, // Richard
    rating: 5,
    title: "First aid travel kit",
    description: "Perfect to take while you’re on vacation",
  },
  {
    productId: 12,
    userId: 90, // Schae
    rating: 5,
    title: "Good for small medical needs",
    description: "Bought this for my beach bag and will get another for my car. Great to have but tiny. Great for price and will refill as needed.",
  },
    // ✅ trash liners
  {
    productId: 15,
    userId: 93, // Simon
    rating: 1,
    title: "Don't waste your money",
    description: "Very flimsy, thin, and tear easily. Don't waste your money. Buy Hefty brand name.",
  },
  {
    productId: 15,
    userId: 95, // David C
    rating: 5,
    title: "Good buy",
    description: "Nice lawn/trash bags. Love that they don’t come with an odor like many trash cans.",
  },
  {
    productId: 15,
    userId: 124, // Trevor Jones
    rating: 5,
    title: "They hold up",
    description: "these hold up very well to heavy items being thrown away they can be compared as good as the name brand ones",
  },
  {
    productId: 15,
    userId: 126, // Randy
    rating: 5,
    title: "Mom of 2",
    description: "Used these for moving. Not as sturdy as some others, but got our things from one house to another.",
  },
    // ✅ 16. swiffer
  {
    productId: 16,
    userId: 91, // Sean
    rating: 3,
    title: "A bit flimsy to me",
    description: "It’s ok. A little bit flimsy compared to the other style wet mop. The last part of the handle gave some trouble to secure because the little ‘button’ didn’t want to pop in the hole to secure itself. I had to use something to play with it a bit to get it to pop through. That’s frustrated me a bit.",
  },
  {
    productId: 16,
    userId: 97, // Erin
    rating: 5,
    title: "Love swifter",
    description: "Always love the starter kits. Just hope one day swifter will make the wipe holder 360 rotation rather than just 180.",
  },
  {
    productId: 16,
    userId: 123, // Tan
    rating: 5,
    title: "E",
    description: "Easy to use for small spaces",
  },
    // ✅ 20. pillows
  {
    productId: 20,
    userId: 89, // Sam
    rating: 5,
    title: "Great",
    description: "they're great pillows. soft. but not too soft.",
  },
  {
    productId: 20,
    userId: 81, // Justin
    rating: 1,
    title: "Paula",
    description: "The end of the pillow ripped in 3 days after I got it",
  },
  {
    productId: 20,
    userId: 115, // Jon Park
    rating: 4,
    title: "Unbeatable price",
    description: "I use them more for decorative pillows on my bed but I do sleep on them and I think they are perfect comfort with another pillow under them",
  },
    // ✅ 22. candle
  {
    productId: 22,
    userId: 84, // Kris
    rating: 5,
    title: "Capri blue dupe",
    description: "Smells yummy and delicious. Purchased this many times and gifted it. Everyone loves it.",
  },
  {
    productId: 22,
    userId: 85, // Matt H
    rating: 5,
    title: "amazing",
    description: "Absolutely LOVE this scent! I burns nicely but I still can’t get over how good it smells.",
  },
  {
    productId: 22,
    userId: 116, // Jwad
    rating: 5,
    title: "Smells wonderful",
    description: "I have the large candle and usually only light two wicks. It actually makes the living room smell amazing! Usually the candles that I buy don’t smell strong enough but this one is great. Doesn’t smell like string guava, either it’s actually just fruity.",
  },
    // ✅ 23. command strips
  {
    productId: 23,
    userId: 87, // Nate
    rating: 5,
    title: "Diy Hat Wall",
    description: "Used To Make Diy Hat Wall",
  },
  {
    productId: 23,
    userId: 77, // Jake L
    rating: 5,
    title: "Does the job",
    description: "Used it to hold up posters, art, pennants, etc. in my kids room. Need to order another as I used most of these up and need to have them handy as well.",
  },
  {
    productId: 23,
    userId: 104, // Ben Thai
    rating: 5,
    title: "Grab it!",
    description: "Works great! Used it to hang a few 10x14 gallery wraps.",
  },
    // ✅ 24. tools
  {
    productId: 24,
    userId: 76, // Carmelino
    rating: 5,
    title: "Worth it!",
    description: "Nice drill to have to complete those around the house projects! Totally worth the buy….",
  },
  {
    productId: 24,
    userId: 77, // Jake L
    rating: 5,
    title: "Amazing Drill",
    description: "Works like any other Drill, perfect cuz it's portable too.",
  },
  {
    productId: 24,
    userId: 23, // Daniel Chin
    rating: 5,
    title: "Small gets the iob done",
    description: "Glad I bought this, small but does the job",
  },
    // ✅ 25. flatware
  {
    productId: 25,
    userId: 79, // Jason P
    rating: 5,
    title: "Flatware",
    description: "Love it and will recommend these",
  },
  {
    productId: 25,
    userId: 80, // Jesse B
    rating: 5,
    title: "Great basics",
    description: "Perfect basic set for my daughter’s first apartment. Bought 2 sets. Worked out great for her and her roommates. Great value.",
  },
  {
    productId: 25,
    userId: 114, // Jenny Jiang
    rating: 5,
    title: "Not heavy",
    description: "These are so nice, not heavy, and perfect size.",
  },
    // ✅ 26. dinnerware
  {
    productId: 26,
    userId: 70, // Aijia
    rating: 5,
    title: "Great dishes",
    description: "The dishes are beautiful! Classic. Well made.",
  },
  {
    productId: 26,
    userId: 86, // Na
    rating: 5,
    title: "Beautiful Dinnerware",
    description: "Love this set, they’re beautiful very heavy plates just as a restaurant style plate!",
  },
  {
    productId: 26,
    userId: 105, // Brin
    rating: 5,
    title: "Happy and love them",
    description: "Beautiful dinnerware. I purchased this set after my Peir 1 stoneware set was broken and missing items from years of use. I love the pure white color and heard porcelain is very durable. Looking forward to using these in the many years to come",
  },
    // ✅ 31. tupperware
  {
    productId: 31,
    userId: 97, // Erin
    rating: 5,
    title: "Love it!",
    description: "I love these so much, they have a little handle on the side so when you warm up your food you don’t burn yourself like different glass food containers. My parents like them too I ended up buying them a pair of these 10/10 the price is worth it.",
  },
  {
    productId: 31,
    userId: 85, // Matt H
    rating: 5,
    title: "Love having this set",
    description: "Great product and suction on lid. Held up in freezer and refrigerator. I have not taken it straight from freezer/fridge to microwave. I have always let it rest for awhile at room temp first. So happy I purchased as they are used also for storing trail mix & other pantry items. They also have held up cooking in the oven but the lid is not oven safe.",
  },
  {
    productId: 31,
    userId: 112, // Dylan Luu
    rating: 5,
    title: "GLASS IS BEST",
    description: "These containers are perfect for storing anything!",
  },
    // ✅ 32. measuring cup
  {
    productId: 32,
    userId: 83, // Kelly
    rating: 5,
    title: "Measuring cup",
    description: "Nice quality kitchen staple!",
  },
  {
    productId: 32,
    userId: 82, // Keerr
    rating: 5,
    title: "Love this measuring cup",
    description: "Why would I love this cup? Weird. But I use it for so many things. Small pitcher, measuring, etc. It's worth the money because it isn't glass and you can look at the measurments without squinting at the numbers. Has conversions right there too.",
  },
  {
    productId: 32,
    userId: 113, // Jarrod
    rating: 5,
    title: "Great additin to cooking accessories",
    description: "It’s functional and gives the measurements I need.",
  },
    // ✅ 33. kettle
  {
    productId: 33,
    userId: 79, // Jason P
    rating: 3,
    title: "Maybe dogs can hear it?",
    description: "Heats water quickly but doesn’t whistle. ☹️",
  },
  {
    productId: 33,
    userId: 52, // Alex K
    rating: 1,
    title: "Perfect if you like drinking rust!",
    description: "Believe the reviews! It rusts after just a few uses.",
  },
  {
    productId: 33,
    userId: 126, // Randy
    rating: 5,
    title: "Are all the negative reviews fake?",
    description: "People with all the problems with melting the kettle must be putting it on a camp fire. Here it is the truth. It whistles loud! I have tinnitus. It doesn’t melt when using it on a glass stove top even when I use a burner bigger than the kettle to make it heat up faster. It heats up as expected. The others who have melted theirs must have let the water run out. Yes, it will melt the plastic if you run it out of water and keep it on the hot burner. I know I did it to the one I replaced by another company. $8 yeah buy it!",
  },
    // ✅ 36. cookbook
  {
    productId: 36,
    userId: 51, // Logan
    rating: 5,
    title: "You'll Love it Too!",
    description: "Who doesn’t like Mary Berry? Well written with a great selection of recipes. Would make a lovely gift too!",
  },
  {
    productId: 36,
    userId: 50, // Brennon
    rating: 5,
    title: "Great Book",
    description: "WONDERFUL book and price. It was a Mothers Day gift for a good friend. She loved it!!",
  },
    // ✅ 53. charging cable
  {
    productId: 53,
    userId: 54, // Tom
    rating: 2,
    title: "Frayed and melted",
    description: "Apple cords tend to charge faster and are more reliable. However, after a year of gentle home use the cord frayed where it meets with the connector and it started melting. Now it’s junk. Come on Apple, you can do better.",
  },
  {
    productId: 53,
    userId: 53, // Jackson
    rating: 5,
    title: "Works Great",
    description: "Works great would buy again",
  },
  {
    productId: 53,
    userId: 118, // Matt Li
    rating: 5,
    title: "Samsung compatible",
    description: "Works with galaxy note and zflip",
  },
  {
    productId: 53,
    userId: 119, // Namju
    rating: 5,
    title: "Apple charger cable",
    description: "Charges my iPhone very fast!",
  },
    // ✅ 54. HDMI
  {
    productId: 54,
    userId: 55, // Andrew K
    rating: 1,
    title: "Never worked",
    description: "I probably got a defective one because it never worked. I tried using it with a ps4, switch, and roku and it didn't work with any.",
  },
  {
    productId: 54,
    userId: 69, // Abel
    rating: 5,
    title: "Perfect length",
    description: "I needed this to connect fire cube to TV. Prefect length so there isn't a lot of extra cord.",
  },
  {
    productId: 54,
    userId: 119, // Namju
    rating: 5,
    title: "Good cord",
    description: "Have been using this for about a year (to play Netflix through my laptop onto the TV screen). No problems.",
  },
  {
    productId: 54,
    userId: 128, // Calvin Liu
    rating: 5,
    title: "What you'd expect",
    description: "Used this item for approximately 5 days. It does what it needs to do without a problem.",
  },
    // ✅ 55. power bank
  {
    productId: 55,
    userId: 73, // Brad Lewter
    rating: 5,
    title: "Cutest little power bank",
    description: "There’s not many things that drive me as crazy as being out and about and having my phone die. Chances are, I’m in the process of using it for taking family, photos and videos or something else that is relatively important. With this power bank, I don’t have to worry about that. it is small and convenient for being portable whether I’m carrying in my pocket or purse. It’s powerful enough to charge my phone with a 5 volt 2.1 output. I also love that it’s cute and petite vs a standard large and bulky power bank.",
  },
  {
    productId: 55,
    userId: 75, // Calvin Tzeng
    rating: 5,
    title: "Very useful power bank",
    description: "Love this beautiful lavender colored power bank came in very handy when my girl drained her whole charging on our recent road trip she had this in the back and her phone charged up pretty quick. Very sleek fits in her backpack and is perfect for busy teens who want to stay connected every second but are lazy to charge their phone lol btw my daughter loves the color.",
  },
  {
    productId: 55,
    userId: 102, // Ali
    rating: 5,
    title: "..can't complain",
    description: "It does what it is supposed to do and I don't hate the color...and only $10 so..that is cool",
  },
  {
    productId: 55,
    userId: 129, // Wes Trinh
    rating: 5,
    title: "So far so good.",
    description: "I bought this item to keep with me as a backup to ensure that I always have a way to make sure that I have some kind of charge on my cellphone. Haven’t needed to use it yet. While it came with the cord needed to charge it up you will need a different cord to charge your device. Unless it just happens to take the same kind of cord that this takes to charge itself up. Which my phone doesn’t. But I love the color of it. The fact that it came fully charged and ready to use was an added bonus.",
  },
    // ✅ 56. polaroid
  {
    productId: 56,
    userId: 89, // Sam
    rating: 5,
    title: "Good christmas gift",
    description: "I like how portable it is! I got it for my brother for Christmas and he hasn’t stopped using it!",
  },
  {
    productId: 56,
    userId: 92, // Sebastian
    rating: 5,
    title: "IS INTENDED TO BE A POLAROID CAMERA",
    description: "it's a TON of fun to experience! truly a blast from the past (age?!?)! it's most definitely intended to be a Polaroid camera, as such, realistic expectations you'll be smiling in no time ....perhaps even enjoy a walk down memory lane!",
  },
  {
    productId: 56,
    userId: 106, // Casstiel
    rating: 5,
    title: "Lovely camera",
    description: "The size is perfect, and it looks so cute.",
  },
    // ✅ 58. surveillance cam
  {
    productId: 58,
    userId: 91, // Sean
    rating: 5,
    title: "Google nest doorbell",
    description: "This doorbell works seamlesslY with the hub. It also shows You alerts on Your phone. BatterY wise I have zero complains. I had read some reviews that the batterY life was not good, I disagree.",
  },
  {
    productId: 58,
    userId: 72, // Andrew W
    rating: 1,
    title: "Dont waste your money",
    description: "Biggest waste of money. App is Google Home Not NEST, like my other NEST cameras !! Unit is plugged in at all times with power supply purchased FROM GOOGLE. Yet battery dies and unit stops recording all the time ! Too hot, too cold… same story unit completely shuts down. Garbage ! Unbelievable a company like google can’t build a functioning wireless doorbell, it seems like every other company can & has.",
  },
  {
    productId: 58,
    userId: 123, // Tan
    rating: 1,
    title: "Doesn't latch on",
    description: "I’ve had this for about seven months. I took it off to charge (which you have to do every few weeks) and now it won’t latch back on. I’ve tried several times and I can’t get it to work anymore. I did call Target customer service and they had to transfer me. The girl I spoke with was very helpful and out in a request with the manufacturer. Waiting to see what they say.",
  },
  {
    productId: 58,
    userId: 131, // Mark Rodriguez
    rating: 5,
    title: "Great purchase",
    description: "The battery life and image quality are great. It would have been great if the storage lasted more than a few hours",
  },
    // ✅ 64. controller
  {
    productId: 64,
    userId: 74, // Caleb
    rating: 5,
    title: "Awesome controller",
    description: "This worked better than expected! So happy with this purchase!",
  },
  {
    productId: 64,
    userId: 86, // Na
    rating: 5,
    title: "Great gift idea",
    description: "Goos price point for a great holiday gift. It works well and makes playing games fun on phones.",
  },
  {
    productId: 64,
    userId: 127, // Christy
    rating: 5,
    title: "Great controller for iphones",
    description: "This controller really keeps you in the game when you play on your iPhone. You can connect to your GamePAss account and play all your games thru your phone anywhere you go.",
  },
    // ✅ 65. external storage
  {
    productId: 65,
    userId: 87, // Nate
    rating: 3,
    title: "OK but bad app",
    description: "It works ok, but when opening the backup app of it, the connection time is very long.",
  },
  {
    productId: 65,
    userId: 84, // Kris
    rating: 5,
    title: "Ive bought a bunch over the years",
    description: "I’m a photographer and producer and i use these drives to do delivery to my clients or editors, they do the trick for that light lift",
  },
  {
    productId: 65,
    userId: 103, // Ashwin
    rating: 5,
    title: "Great HARD Drive",
    description: "Great Find! Worked Perfect With My Ps4. Now I can Play All The Call Of Duty I WANT",
  },
    // ✅ 66. headset
  {
    productId: 66,
    userId: 94, // Yas
    rating: 3,
    title: "xbox wired",
    description: "if you plan on getting this for the xbox STOP. this headset only works wired to the xbox controller and will not work wirelessly. but for eveything else pretty nice headset tho",
  },
  {
    productId: 66,
    userId: 96, // Gabe
    rating: 1,
    title: "Not xbox compatible",
    description: "IS NOT COMPATIBLE WITH XBOX. ONLY WILL WORK WITH 3.5mm cable. Misleading title in ad.",
  },
    // ✅ 68. monitor
  {
    productId: 68,
    userId: 6, // Alec
    rating: 5,
    title: "Great quality and features",
    description: "I have this monitor for a few days. its awesome with all the features it has. I can play videogames wile watchin a video or work wile watching your favorite tv show. the resolution and detail is out of this world. highly recommend. note: have in mind the size of it. it is really big.",
  },
  {
    productId: 68,
    userId: 21, // Olivia
    rating: 5,
    title: "Perfect monitor",
    description: "Been using this monitor for about a week and so far, knock-on wood, have had zero issues with it. No dead pixels, beautiful bright screen, and smooth 240Hz. I had the CRG9 prior to this (which also gave me no issues) so I'm hopeful this one will stand the test of time. Love these monitors and can't imagine going back to anything smaller.",
  },
  {
    productId: 68,
    userId: 105, // Brin
    rating: 5,
    title: "Perfect for simulation racing",
    description: "Purchased this about a year ago now. I was worried about it's longevity but I must say, I'm happer then expected. This monitor has been extremely reliable with no issues. Perfect for simulation racing and flying",
  },
    // ✅ 70. gaming desk
  {
    productId: 70,
    userId: 44, // Connor Lam
    rating: 4,
    title: "Gamer for sure",
    description: "It lacked having a drawer for storage otherwise a good product",
  },
  {
    productId: 70,
    userId: 41, // Jair
    rating: 5,
    title: "Gaming deck",
    description: "My son loves his gaming deck. We put his gaming deck together. It was fun working with my son. It was his Christmas gift.",
  },
    // ✅ 72. gift card
  {
    productId: 72,
    userId: 78, // Jason A
    rating: 5,
    title: "I mean who doesn't like a gift card",
    description: "Just wish that if you purchased them online you had the option to get the redemption code in a email instead of a physical card. #ForThePolarBears . Still a great gift though",
  },
  {
    productId: 72,
    userId: 100, // Kevinelle
    rating: 5,
    title: "Steam gift card",
    description: "Why would anyone not like this it’s perfect",
  },
    // ✅ 75. tennis racket
  {
    productId: 75,
    userId: 98, // Alex A
    rating: 2,
    title: "Not great",
    description: "Looks great and reasonably priced. But not easy to play and it vibrates too much while playing",
  },
  {
    productId: 75,
    userId: 98, // David C
    rating: 4,
    title: "Good beginner racket!",
    description: "I’m starting tennis for fun and just wanted an affordable racket before investing in a nice one and this one is perfect!",
  },
  {
    productId: 75,
    userId: 108, // David C
    rating: 4,
    title: "Great buy for a casual or beginner player",
    description: "Excellent value for the price! Obviously, it's not the same experience as playing with a higher end racket, but it holds up surprisingly well given the super low price. A great buy if for a casual or beginner player.",
  },
    // ✅ 76. golf balls
  {
    productId: 76,
    userId: 77, // Jake L
    rating: 5,
    title: "GREAT BALL !!!!!!",
    description: "GREAT BALL !! PLAYS WELL GOOD DISTANCE AND GREAT ROLL ON THE GREENS",
  },
  {
    productId: 76,
    userId: 81, // Justin
    rating: 5,
    title: "Great ball for older players like me who have a slower swing. Love it .",
    description: "I have used this ball for about three years as I am in a 87 year old golfer and have a slower swing, this is a great ball for me and I think it would be great for other seniors.",
  },
  {
    productId: 76,
    userId: 101, // Alex Feinberg
    rating: 5,
    title: "Excellant Ball",
    description: "I have played them for a 3 years and I do not plan to Change............",
  },
    // ✅ 79. mattress
  {
    productId: 79,
    userId: 83, // Kelly
    rating: 5,
    title: "Comfortable and great buy!",
    description: "Comfortable and worth the money spent.",
  },
  {
    productId: 79,
    userId: 56, // Adam
    rating: 5,
    title: "Good air mattress!",
    description: "Easy and quick to inflate and deflate. No issues turning off the pump and keeping air in - unlike some other air mattresses I've used before, where you have to scramble quickly to close the cap. The pump goes inside and turns off when the cap is closed, and then you use the foot pump to top it off to your preferred fullness.",
  },
  {
    productId: 79,
    userId: 117, // Kyle Solano
    rating: 5,
    title: "Twin air mattress",
    description: "Very easy to inflate.",
  },
    // ✅ 80. tent
  {
    productId: 80,
    userId: 60, // David B
    rating: 5,
    title: "Highly Recommend",
    description: "This tent is huge! Spacious and well priced. The colors coding bars made it easy to put together even in the dark and while raining. It kept us dry and comfortable through thunderstorms.",
  },
  {
    productId: 80,
    userId: 47, // John C
    rating: 5,
    title: "Efficient, dependable!",
    description: "The Coleman Sunlodge cabin tent is really easy to set up and I love that everything is color coded. The quality is amazing and I love that with the cabin style, I can fully stand up inside of it. The tent is nice and spacious, with plenty of room for my family of five and room to spare. Coleman has been my families go to brand for all of our camping equipment for years and it will continue to be because they are always high quality and affordable.",
  },
    // ✅ 81. duffle bag
  {
    productId: 81,
    userId: 48, // Ryan W
    rating: 5,
    title: "Afforable and does the job",
    description: "We needed an extra bag to bring home some purchases made on vacation and this was perfect to throw clothes in while gifts were tucked into suitcases. It was an affordable purchase that we can bring along next trip in our suitcase and it folds up (or shoves!) easily into a suitcase without taking up much space.",
  },
  {
    productId: 81,
    userId: 66, // Moran
    rating: 1,
    title: "Not what i Expected",
    description: "Not very durable. I was expecting a little more for the price.",
  },
  {
    productId: 81,
    userId: 111, // Donovan
    rating: 5,
    title: "Ms donna",
    description: "It helps my grandson to put his football stuff in",
  },
    // ✅ 82. luggage
  {
    productId: 82,
    userId: 59, // Cindy
    rating: 3,
    title: "Had high hopes...",
    description: "Loved it at first -holds a lot of my stuff, but after a recent trip to Manahattan, I pulled it off the carousel at Laguardia and after walking about 10 feet, realized it wasn't rolling smoothly. Upon inspection, the wheels on one corner had broken off. Not good! Very hesitant to buy another one.",
  },
  {
    productId: 82,
    userId: 62, // James
    rating: 5,
    title: "Impressed.",
    description: "Very good manufacture quality..Gorgeous.",
  },
  {
    productId: 82,
    userId: 110, // Frank Song
    rating: 5,
    title: "Greag suitcase!",
    description: "Love this suitcase. I got it in blue and it’s a really nice pale color. It isn’t very heavy which makes it easy to put in the overhead bins. It fits a lot as well which is nice.",
  },
    // ✅ 83. bike
  {
    productId: 83,
    userId: 84, // Kris
    rating: 1,
    title: "Absolute junk, sold broken, assembled broke",
    description: "Got bike, its crank was broken in the manufacturing process. Almost impossible to get help on it. Did a video on you tube to show it",
  },
    // ✅ 84. fit bit
  {
    productId: 84,
    userId: 74, // Caleb
    rating: 5,
    title: "Great way to track exercise .",
    description: "My Fitbit Inspire 2 was my best purchase ever at Target.",
  },
  {
    productId: 84,
    userId: 71, // Allen
    rating: 5,
    title: "Easy to use",
    description: "Works for my lifestyle",
  },
    // ✅ 89. cat collar
  {
    productId: 89,
    userId: 83, // Kelly
    rating: 4,
    title: "Great sounding bell, but frays into a poof",
    description: "The bell is a clear sound, not muffled like other bells. But my cat scratched this collar up until finally it looked like a ring of poof. It also turned so the top edge of the collar was making contact, not the thick part of the collar. It aged weird.",
  },
  {
    productId: 89,
    userId: 90, // Schae
    rating: 5,
    title: "Mia approved! I think...",
    description: "Cat would scratch at it so it would fray easily. Maybe it was too itchy for her. Beautiful green matched perfectly with her eyes. The clasp is good enough and the bell has saved me so much time looking for her.",
  },
    // ✅ 90. dog leash
  {
    productId: 90,
    userId: 60, // David B
    rating: 4,
    title: "Decent!",
    description: "I like this especially for the price but my lab keeps chewing through them. So do not recommend if your dog is an avid chewer.",
  },
  {
    productId: 90,
    userId: 97, // Erin
    rating: 5,
    title: "Look No Further for a Good Quality Leash",
    description: "I wish the shorter loop was shorter but the padding helps me keep hold of the leash without hurting my hands. Very nice look and happy it is reflective.",
  },
    // ✅ 91. cat clotes
  {
    productId: 91,
    userId: 98, // Alex A
    rating: 5,
    title: "Such a cute little hat",
    description: "Bought this hat for my aunt’s dog (yes it’s for cats but it still works) and she loves it (my aunt not necessarily her dog haha). The hat’s good quality and has so far survived two attempts of being destroyed (as mentioned her dog in fact doesn’t want to be a little chef haha). If you have a dog or cat and want them to look adorable then you need this!",
  },
  {
    productId: 91,
    userId: 96, // Gabe
    rating: 3,
    title: "Ehhh",
    description: "Super cute but didn’t fit my cats head right … looked funky",
  },
  {
    productId: 91,
    userId: 112, // Dylan Luu
    rating: 5,
    title: "Woof",
    description: "Got this for a small/medium dog and it works.",
  },
    // ✅ 92. dog clothes
  {
    productId: 92,
    userId: 92, // Seb
    rating: 4,
    title: "Great for smaller breeds",
    description: "These are great for smaller dogs but do not work for larger breeds. We have a petite boxer who can wear it however it doesn’t fit our GSP and def not our Great Dane. Returning 2/3.",
  },
  {
    productId: 92,
    userId: 68, //Yibo
    rating: 5,
    title: "Good product",
    description: "Soft material a little bigger than the other one I ordered",
  },
    // ✅ 93. dog bags
  {
    productId: 93,
    userId: 81, // Justin
    rating: 5,
    title: "It does the job",
    description: "easy opening , does what its meant to do",
  },
  {
    productId: 93,
    userId: 82, // Keer
    rating: 5,
    title: "love",
    description: "love these bags!!! ollie has the world’s largest poops but that’s okay because they fit nicely in these. bags easily come apart but don’t rip. i get unscented now but lavender is ok too",
  },
    // ✅ 95. litter box
  {
    productId: 95,
    userId: 39, // David R
    rating: 5,
    title: "Great litter box",
    description: "I gave this litterbox for my friend's cat. At first the cat was curious about the box and examined it. He seemed interested in the top hole of the box. He suddenly disappeared for a few minutes and did his business. My friend told me he uses the box as his primary litterbox which she loves because of the design.",
  },
  {
    productId: 95,
    userId: 47, // John C
    rating: 5,
    title: "Clever Design!",
    description: "I love the top entry design as it keeps the litter from getting all over the floor. I needed to help my kitten into it the first time she used it. Now she is able to jump right in and out by herself. I really appreciate the scoop handle on the outside of the box. The bags are so easy to replace. This is a perfect litter box for clean freak pet owners.",
  },
    // ✅ 96. dog feeder
  {
    productId: 96,
    userId: 54, // tom
    rating: 5,
    title: "Very happy",
    description: "So happy with the cam feeder I just love it And my puppy loves it too.",
  },
  {
    productId: 96,
    userId: 125, // William Ngo
    rating: 5,
    title: "Love the design!",
    description: "We love the original design of this feeder. It reminds us our expresso machine. Love the camera too.",
  },
  {
    productId: 96,
    userId: 72, // Andrew W
    rating: 5,
    title: "Best Purchase!",
    description: "My puppy and I are so happy with this Cam Feeder. I can be out with no worries because I can always check on her thru the Cam. :)",
  },
  {
    productId: 96,
    userId: 130, // Allie
    rating: 5,
    title: "Amazing Feeder!",
    description: "We used to mix up whether we've fed our fur baby. With this feeder, we know Elsie's fed three times a day with the desired amount of food. We can also manually add a meal from our fingertip if she had a wild day and needs another snack. The CAMERA is high definition. I can't help checking out a few times a day see how she's doing while I'm at work! :)",
  },
    // ✅ 98. dining chairs
  {
    productId: 98,
    userId: 76, // Carmel
    rating: 5,
    title: "Modern and good quality!",
    description: "The chairs were really easy to put together. Simple and straight forward directions. I got the beige due to another review saying it was more of a cream, however, the color is true to a beige. The brown undertones make it look like a darker oatmeal. The chairs are sturdy and look great in my dining room! Definitely recommend these to anyone looking for affordable dining chairs.",
  },
  {
    productId: 98,
    userId: 73, // Brad Lewter
    rating: 5,
    title: "LOVE!",
    description: "I got these in the green and I am so pleased! I really like the linen. They are the perfect size, and super comfortable. They are shipped unassembled and packaged very well. Assembling could not be easier. If I had the room I would buy more!",
  },
  {
    productId: 98,
    userId: 125, // William Ngo
    rating: 5,
    title: "LOVE these chairs!",
    description: "We bought 6 of the dark gray upholstered dining chairs and they are perfect! Super easy to assemble and they look even better than we'd hoped. Also very comfortable. Definitely recommend!",
  },
    // ✅ 101. chest drawer
  {
    productId: 101,
    userId: 80, // Jesse
    rating: 5,
    title: "White dresser",
    description: "Fast delivery easy set up Looks very nice",
  },
  {
    productId: 101,
    userId: 49, // Thenu
    rating: 4,
    title: "Okay but not great",
    description: "Decent for what it’s worth. Check for damaged pieces BEFORE you begin assembly!",
  },
  {
    productId: 101,
    userId: 107, // Curtis
    rating: 5,
    title: "Love It!",
    description: "Easy Assembly, Perfect for any room",
  },
    // ✅ 102. lamp
  {
    productId: 102,
    userId: 50, // Brennon
    rating: 5,
    title: "Great price, works prefect.",
    description: "Needed a simple, modern look, inexpensive lamp for the living room and searched on Target.com. Read the reviews, ordered the lamp, and so far no complaints at all. Just what we needed.",
  },
  {
    productId: 102,
    userId: 51, // Logan
    rating: 5,
    title: "Glad I Bought It",
    description: "Easy assembly, very cozy light, good price.",
  },
  {
    productId: 102,
    userId: 110, // Frank
    rating: 5,
    title: "Love it",
    description: "will probably get a second one",
  },
    // ✅ 103. mirror
  {
    productId: 103,
    userId: 32, // Cesar
    rating: 5,
    title: "Awesome for small spaces",
    description: "This mirror never fails; if you leave it leaning against a wall it might be slightly distorted because it’s a little flimsy, but if you hang it up on a wall it’s perfect for a small space",
  },
  {
    productId: 103,
    userId: 41, // Jair
    rating: 5,
    title: "Nice product",
    description: "Good product and very useful.",
  },
  {
    productId: 103,
    userId: 107, // Curtis
    rating: 5,
    title: "Sleek mirror",
    description: "Simple and inexpensive it is thin.",
  },
    // ✅ 106. planter
  {
    productId: 106,
    userId: 45, // Gary
    rating: 5,
    title: "Perfect little planters!",
    description: "These were an awesome addition to our front yard this year! I filled them with a mix of annuals and hung them all the way along a railing that runs across the front of our house, and I got so many compliments!! They were an amazing price, and made such a huge difference to our home, I’ll definitely be using these again next year!",
  },
  {
    productId: 106,
    userId: 44, // Connor
    rating: 5,
    title: "Great price with so many options!",
    description: "Excellent price, and even better is how multi use these are. I hung one against a tree with a nail. I hung the others from a fence. I just looped clear zip ties through the hole that's already provided on the planter. I fit one little impatient in each and they are thriving! Honestly the self watering compartment doesn't hold much water but I don't mind, I like watering my plants!",
  },
  {
    productId: 106,
    userId: 109, // Dion
    rating: 5,
    title: "Mainly for outdoor use",
    description: "They’re perfect for any plant lover, however I wouldn’t recommend using them indoors unless you have it leveled flat on something. The bottom revisor isn’t big but if you “overwater” it will come pouring out. I bought a lot and hung them along my fence and they look great!!",
  },
    // ✅ 107. trash bin
  {
    productId: 107,
    userId: 6, // Alec
    rating: 5,
    title: "Serve its purpose",
    description: "Serve its purpose. It’s a trash can, perfect for our house, but taking the trash bag out when it’s full might need some patience. The same goes with placing new trash bag in the can so that it’s clipped and don’t fall down. Impatient people please look elsewhere.",
  },
  {
    productId: 107,
    userId: 25, // Sherry
    rating: 5,
    title: "Great for the price",
    description: "Great trash can and price. Looks great without taking up too much space.",
  },
  {
    productId: 107,
    userId: 109, // Dion
    rating: 5,
    title: "I absolutely love this trash can",
    description: "when I order this online I was worry that will would be small , cause the picture online kinda make it look small. When the item arrive it was the perfect size and plus it gave me more space under my sink. Also it nice to have a trash that doesn't take over to much space",
  },
    // ✅ 109. wreath
  {
    productId: 109,
    userId: 27, // Whit
    rating: 4,
    title: "Beautiful 😍",
    description: "Beautiful wreath!!!! I just add a poinsettia flower to match the Christmas 🎄 😉 Thank you target...",
  },
  {
    productId: 109,
    userId: 28, // Daniel F
    rating: 5,
    title: "Cute & simple",
    description: "Love this LED wreath! I added a gift bow for a little something extra. You may have to arrange the branches to hide the wiring and switch, but it’s super easy.",
  },
    // ✅ 110. ornaments
  {
    productId: 110,
    userId: 52, // Alex K
    rating: 5,
    title: "Gingerbread Ornaments",
    description: "Beautiful ornaments. Nicer quality than I expected!",
  },
  {
    productId: 110,
    userId: 73, // Brad Lewter
    rating: 5,
    title: "Good buy",
    description: "These look so cute and festive on the tree. They feel sturdy and hang nicely.",
  },
  {
    productId: 110,
    userId: 117, // Kyle Solano
    rating: 5,
    title: "Great details",
    description: "They are really high quality, I liked them from photos but when I received them I was shocked to see how amazing they were. They are ceramic not plastic.",
  },
  {
    productId: 110,
    userId: 117, // Matt Li
    rating: 5,
    title: "So cute",
    description: "I really love these gingerbread Christmas ornaments. They are so cute, and look exactly like gingerbread cookies. I am extremely excited to use them later this year when I add them to our Christmas tree.",
  },
    // ✅ 111. stocking
  {
    productId: 111,
    userId: 53, // Jackson
    rating: 5,
    title: "classy knit stocking",
    description: "beautiful and great price",
  },
  {
    productId: 111,
    userId: 88, // Richard
    rating: 5,
    title: "Adorable Stocking!",
    description: "I love this stocking! Great colors to match a wide range of decor. Durable fabric built to last. Will match with other older and newer designs. Great product through and through! Will definitely purchase more to make a set",
  },
    // ✅ 112. lights
  {
    productId: 112,
    userId: 42, // Tiff
    rating: 4,
    title: "Color isn't warm",
    description: "The size is very cute but the color is just not 'warm' like vintage bulbs. Which was disappointing. The light is also very bright. It's so frustrating that none of these LED light makers can get the actual warm glow of incandescent looking Christmas lights when they are available as regular house bulbs. I did keep them because there's not many alternatives, but I was hoping for better.",
  },
  {
    productId: 112,
    userId: 60, // David B
    rating: 5,
    title: "Cozy lights",
    description: "Love the larger sized bulbs. They really pop on our 6ft tree; one package covers it well.",
  },
    // ✅ 113. candy cane
  {
    productId: 113,
    userId: 69, // Abel
    rating: 5,
    title: "Great item",
    description: "I love the mini candy canes! They are the perfect size!",
  },
  {
    productId: 113,
    userId: 73, // Brad Lewter
    rating: 5,
    title: "Great value & perfect size!",
    description: "Yummy! And perfect size.",
  },
  {
    productId: 113,
    userId: 111, // Donovan
    rating: 5,
    title: "Not 50 candy canes",
    description: "My box only had 45 candy canes and I needed 48. This was very annoying.",
  },
    // ✅ 114. gingerbread house
  {
    productId: 114,
    userId: 70, // Aijia
    rating: 5,
    title: "Just Right!",
    description: "I’m a fan of this set because you can split it up and everyone does a small house. I helped my younger kids assemble the houses, and then they did all the decorating. I recommend purchasing additional white icing. It comes with just enough, and it would be nice to have more for decorating and more “snow”. Recommend buying some extra candies like sprinkles and m&ms, too!",
  },
  {
    productId: 114,
    userId: 71, // Allen
    rating: 1,
    title: "Dont buy!!",
    description: "Every house broke when I tried getting the pieces apart. There were broken bases as well. There was NO saving them.",
  },
  {
    productId: 114,
    userId: 102, // Ali E
    rating: 4,
    title: "The cutest little gingerbread houses",
    description: "These mini gingerbread houses are so cute!! Perfect size for my 2, 4, and 6 yo kids. Just enough to decorate and they each get their own to work on. We used a dremel to separate the pieces and then hot glued the pieces to assemble the houses. I gave it 4 stars because I can’t imagine breaking all the pieces apart and not everyone has the tools to make it easier.",
  },
    // ✅ 115. mug
  {
    productId: 115,
    userId: 49, // Thenu
    rating: 5,
    title: "Christmas Tree Mug!!!",
    description: "So happy that I saw this in my local Target that I has to have it. I saw a similar one and the price was outrageous. Using this as part of my decorating. Very Cute Indeed!!!",
  },
  {
    productId: 115,
    userId: 62, // James
    rating: 5,
    title: "Festive mug",
    description: "Love this cup! So festive",
  },
    // ✅ 116. candles
  {
    productId: 116,
    userId: 66, // Mroan
    rating: 4,
    title: "Cute but too large for some",
    description: "Adorable but do not fit the menorah we have and says they will..",
  },
    // ✅ 117. menorah
  {
    productId: 117,
    userId: 66, // Mroan
    rating: 5,
    title: "Gorgeous!",
    description: "I absolutely love mine. I bought it in store, so I obviously didn’t have any issues with shipping that some others have had. That being said, it has held up nicely and I keep it on display all year long! Gorgeous menorah.",
  },
    // ✅ 118. gift wrap
  {
    productId: 118,
    userId: 52, // Alex K
    rating: 5,
    title: "Quality",
    description: "I love the Sugar Paper brand. The wrapping paper is very well made and the designs all coordinate from year to year.",
  },
  {
    productId: 118,
    userId: 47, // John C
    rating: 5,
    title: "Get this",
    description: "Great quality the red roll too",
  },
    // ✅ 119. cards
  {
    productId: 119,
    userId: 47, // John C
    rating: 5,
    title: "Love it!",
    description: "I love that it’s 3D and has glitter. Deft recommend it.",
  },
  {
    productId: 119,
    userId: 96, // Gabe
    rating: 5,
    title: "good",
    description: "cute glittery nice quality",
  },
    // ✅ christmas tree
  {
    productId: 120,
    userId: 78, // Jason
    rating: 5,
    title: "Very happy",
    description: "tree was very easy to put together 3 sections that well labeled a, b, c along with visual instructions",
  },
  {
    productId: 120,
    userId: 100, // Kevin
    rating: 5,
    title: "Stunning",
    description: "Tree is stunning in person and looks real",
  },
]


let prodIds = [];
demoReviews.forEach(review => {
  if (!prodIds.includes(review.productId)) {
    prodIds.push(review.productId)
  }
})


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'SeedReviews',
      demoReviews,
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete(
      'SeedReviews',
      { productId: { [Op.in]: prodIds } }
    )
  }
};
