import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    ActivityIndicator,
    TouchableOpacity,
    FlatList
  } from 'react-native';
  import React, {useEffect, useState,useRef} from 'react';
  import {useRoute} from '@react-navigation/native';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import LinearGradient from 'react-native-linear-gradient';
  const English = () => {
    const [containquestionindex, setcontainquestionindex] = useState([]);
    const scrollViewRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const scrollToTop = () => {
      scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: true });
    };
  
    // Function to handle scroll events and update the scroll position
    const handleScroll = (event) => {
      setScrollPosition(event.nativeEvent.contentOffset.y);
    };
    const [lenght, setlength] = useState();
    const [page, setPage] = useState(0);
    const route = useRoute();
    const [pagenumber,setPagenumber]=useState(0);
    const [questionsarray, setqusetionsarray] = useState([{
      "_id": {
        "$oid": "65166dbb1634489240c293be"
      },
      "data": [
        {
          "question": "1. ‘Proba-3 Mission’, which will be launched aboard ISRO’s PSLV, is associated with which space agency?",
          "options": [
            "[A] NASA",
            "[B] ESA",
            "[C] JAXA",
            "[D] CNSA"
          ],
          "correctAnswer": "Correct Answer: B [ESA]",
          "hint": "Notes:The European Space Agency’s Proba-3 Mission will be launched aboard the ISRO’s PSLV in 2024. Its two satellites will study the Sun’s faint corona and surrounding atmosphere.\nThe 340-kilogram spacecraft will be deployed by PSLV in a high Earth orbit with an orbital period of 19.7 hours."
        },
        {
          "question": "2. ‘Lynx-U2 System’ is an indigenously developed naval gun fire control system, manufactured by which institution?",
          "options": [
            "[A] HAL",
            "[B] DRDO",
            "[C] BEL",
            "[D] BHEL"
          ],
          "correctAnswer": "Correct Answer: C [BEL]",
          "hint": "Notes:Lynx-U2 System is an indigenously developed naval gun fire control system. The Union Defence Ministry recently signed a contract with BEL for the procurement of 13 of these systems for the Indian Navy.\nThe purchase under the Buy Indian – IDMM (Indigenously Designed, Developed, and Manufactured) category will be placed on new-gen offshore patrol vessels to be constructed indigenously at Garden Reach Shipbuilders and Engineers and Goa Shipyard Limited."
        },
        {
          "question": "3. ‘Jang Palpung Zangdok Palri Monastery’ is situated in which state?",
          "options": [
            "[A] Assam",
            "[B] Sikkim",
            "[C] Arunachal Pradesh",
            "[D] Karnataka"
          ],
          "correctAnswer": "Correct Answer: C [Arunachal Pradesh]",
          "hint": "Notes:Jang Palpung Zangdok Palri Monastery is situated in Tawang district in the state of Arunachal Pradesh.\nThis Buddhist monastery recently introduced dances of two deities Palden Lhamo and Gonpo, or Mahakala."
        },
        {
          "question": "4. What is the estimated amount that the government will borrow for the first half of financial year 2023-24?",
          "options": [
            "[A] Rs 5.55 lakh crore",
            "[B] Rs 8.88 lakh crore",
            "[C] Rs 11.11 lakh crore",
            "[D] Rs 13.33 lakh crore"
          ],
          "correctAnswer": "Correct Answer: B [Rs 8.88 lakh crore]",
          "hint": "Notes:The Centre plans to raise ₹ 8.88 lakh crore through market borrowing in the April-September period of 2023-24 to fund the revenue gap to push economic growth.\nThe Finance Ministry announced this after consultation with the Reserve Bank of India."
        },
        {
          "question": "5. World Health Organisation (WHO) certified which countries as Malaria-free recently?",
          "options": [
            "[A] India and Sri Lanka",
            "[B] Azerbaijan and Tajikistan",
            "[C] Pakistan and Afghanistan",
            "[D] Nepal and Bangladesh"
          ],
          "correctAnswer": "Correct Answer: B [Azerbaijan and Tajikistan]",
          "hint": "Notes:Recently, the World Health Organisation certified Azerbaijan and Tajikistan as Malaria-Free Countries.\nThey succeeded in eliminating the Anopheles mosquito-borne disease in their territories. In Tajikistan and Azerbaijan, the last cases of regional spread of Plasmodium vivax malaria were discovered in 2012 and 2014."
        },
        {
          "question": "6. When is the ‘World Autism Awareness Day’ observed every yer?",
          "options": [
            "[A] April 1",
            "[B] April 2",
            "[C] April 5",
            "[D] April 8"
          ],
          "correctAnswer": "Correct Answer: B [April 2]",
          "hint": "Notes:World Autism Awareness Day is observed on April 2 every year. The theme for 2023 is “Transformation: Toward a Neuro-Inclusive World for All”.\nThis year’s celebration focuses on the contribution of autistic people in the home, work, arts and policy-making."
        },
        {
          "question": "7. ‘Sagar-Setu’ app is associated with which Union Ministry?",
          "options": [
            "[A] Ports, Shipping and Waterways Ministry",
            "[B] Jal Shakti Ministry",
            "[C] Road Transport and Highways Ministry",
            "[D] Commerce and Industry Ministry"
          ],
          "correctAnswer": "Correct Answer: A [Ports, Shipping and Waterways Ministry]",
          "hint": "Notes:Union Minister for Ports, Shipping and Waterways Sarbananda Sonowal launched the App Version of National Logistics Portal (Marine) ‘Sagar-Setu’.\nIt will provide real-time information on activities that are generally not within reach of the importer, exporter, and customs broker."
        },
        {
          "question": "8. ISRO conducted the ‘Reusable Launch Vehicle Autonomous Landing Mission’ along with which institutions?",
          "options": [
            "[A] DRDO and IAF",
            "[B] DRDO and BEL",
            "[C] DRDO and HAL",
            "[D] DRDO and BARC"
          ],
          "correctAnswer": "Correct Answer: A [DRDO and IAF]",
          "hint": "Notes:Reusable Launch Vehicle Autonomous Landing Mission (RLV LEX) was conducted recently by ISRO in collaboration with the DRDO and IAF.\nIt involved Indian Air Force Chinook helicopter lifting off a winged body to an altitude of 4.5 km and freeing it to execute an independent landing on a runway."
        },
        {
          "question": "9. Which state is the host of the ‘Cope India Exercise’?",
          "options": [
            "[A] Sikkim",
            "[B] Maharashtra",
            "[C] West Bengal",
            "[D] Punjab"
          ],
          "correctAnswer": "Correct Answer: C [West Bengal]",
          "hint": "Notes:The Air Forces of India and the U.S. are set to conduct the Cope India exercise from April 10 to 21 at the Kalaikunda airbase in West Bengal.\nThe exercise will see intense air manoeuvres aimed at improving interoperability. Japan will be the observer of the exercise."
        },
        {
          "question": "10. Habrocestum togansangmai, a new species discovered, belongs to which species?",
          "options": [
            "[A] Spider",
            "[B] Snake",
            "[C] Turtle",
            "[D] Gecko"
          ],
          "correctAnswer": "Correct Answer: A [Spider]",
          "hint": "Notes:Four new species of jumping spiders were recently discovered from the Meghalaya. One among them is ‘Habrocestum togansangmai’.\nIt is named after Garo freedom fighter Togan Sangma."
        },
        {
          "question": "11. What is the repo rate as of April 2023, after the Monetary Policy Committee Meeting?",
          "options": [
            "[A] 6.2 per cent",
            "[B] 6.5 per cent",
            "[C] 6.8 per cent",
            "[D] 7.2 per cent"
          ],
          "correctAnswer": "Correct Answer: B [6.5 per cent]",
          "hint": "Notes:After raising repo rate in six consecutive policies, the Reserve Bank of India (RBI), decided to pause its rate hike cycle amid rising concerns over global financial stability.\nThe Monetary Policy Committee decided to keep the policy repo rate unchanged at 6.5 per cent in this meeting."
        },
        {
          "question": "12. Which institution released the ‘Government Trends Report’?",
          "options": [
            "[A] NITI Aayog",
            "[B] Deloitte Center for Government Insights",
            "[C] Oxfam International",
            "[D] Amnesty International"
          ],
          "correctAnswer": "Correct Answer: B [Deloitte Center for Government Insights]",
          "hint": "Notes:The ‘Government Trends Report’ was released recently by the Deloitte Center for Government Insights.\nIt highlighted 9 trends that are reshaping how the governments deliver solutions to the common citizen. The report cites six shifts that have emerged as factors behind this transition in the government’s approach towards delivering public value."
        },
        {
          "question": "13. ‘TOPS’ scheme, which was seen in the news, is associated with which Union Ministry?",
          "options": [
            "[A] Ministry of External Affairs",
            "[B] Ministry of Youth Affairs and Sports",
            "[C] Ministry of Home Affairs",
            "[D] Ministry of Health and Family Welfare"
          ],
          "correctAnswer": "Correct Answer: B [Ministry of Youth Affairs and Sports]",
          "hint": "Notes:Target Olympic Podium Scheme’s purpose is to identify, groom and prepare potential candidates for Olympic medals.\nThe Sports Ministry’s Mission Olympic Cell recently gave nod for financial assistance under this scheme for 12 para-badminton players, who are set to participate in the upcoming Brazil Para-Badminton International."
        },
        {
          "question": "14. ‘B-52H strategic bomber’ was recently used in the bilateral air drills between which countries?",
          "options": [
            "[A] South Korea -USA",
            "[B] Japan- South Korea",
            "[C] India – South Korea",
            "[D] India – France"
          ],
          "correctAnswer": "Correct Answer: A [South Korea -USA]",
          "hint": "Notes:B-52H strategic bomber is a long-range, supersonic, jet-powered strategic heavy bomber capable of carrying nuclear arsenals.\nIt was recently used during the bilateral air drills between South Korea and the United States.  In recent weeks, North Korea has tested an underwater nuclear-capable drone and an intercontinental ballistic missile."
        },
        {
          "question": "15. The ‘Draft National Curriculum Framework for School Education’ provides frame work for children of which age group?",
          "options": [
            "[A] 3-18",
            "[B] 5-15",
            "[C] 5-10",
            "[D] 6-18"
          ],
          "correctAnswer": "Correct Answer: A [3-18]",
          "hint": "Notes:The Draft National Curriculum Framework for School Education provides framework for educational curriculum for children age groups 3 to 18 years.\nThe pre-draft of this framework was released recently and the Ministry of Education invites suggestions and public opinion."
        },
        {
          "question": "16. Idaho, which was seen in the news, is a state of which country?",
          "options": [
            "[A] USA",
            "[B] Australia",
            "[C] UK",
            "[D] Germany"
          ],
          "correctAnswer": "Correct Answer: A [USA]",
          "hint": "Notes:Idaho is a rocky mountain state in the United States. Idaho recently introduced an abortion trafficking law to restrict travel for abortions.\nThe bill makes it illegal for an adult to help minor get an abortion without parental consent."
        },
        {
          "question": "17. As per the ‘Global Energy Monitor’s 9th Annual Survey’, which country accounted for the highest coal capacity as of 2023?",
          "options": [
            "[A] India",
            "[B] China",
            "[C] USA",
            "[D] Bangladesh"
          ],
          "correctAnswer": "Correct Answer: B [China]",
          "hint": "Notes:As per the report released by US-based Global Energy Monitor, the operating coal fleet grew by 19.5 gigawatt in 2022 globally.\nAs per the report, the war between Russia and Ukraine resulted in a slowdown of coal retirements. China accounted for 59 per cent of the new coal capacity while Bangladesh ranked the 9th among the rest of the countries after India, Pakistan, Vietnam and Indonesia, among others."
        },
        {
          "question": "18. How many villages are covered under the ‘My Village My Heritage Programme’?",
          "options": [
            "[A] 1 thousand",
            "[B] 10 thousand",
            "[C] 1 lakh",
            "[D] 10 lakh"
          ],
          "correctAnswer": "Correct Answer: C [1 lakh]",
          "hint": "Notes:My Village My Heritage Programme is implemented under the aegis of the National Mission for Cultural Mapping (NMCM).\nNMCM seeks to develop a comprehensive database of art forms, artists and other resources across India. Over 1 lakh villages have been covered under this programme."
        },
        {
          "question": "19. ‘Rayyanah Barnawi’ is set to become the first woman astronaut from which country?",
          "options": [
            "[A] UAE",
            "[B] Saudi Arabia",
            "[C] Israel",
            "[D] Pakistan"
          ],
          "correctAnswer": "Correct Answer: B [Saudi Arabia]",
          "hint": "Notes:Rayyanah Barnawi is set to become the first woman astronaut from Saudi Arabia. Barnawi and Ali Al-Qarni will take off from Florida on a private mission to the International Space Station.\nThere are two other astronauts who will join Barnawi and Ali Al-Qarni in their voyage. They are Peggy Whitson, a former NASA astronaut and John Shoffner, a businessman from Tennessee who will serve as pilot."
        },
        {
          "question": "20. Which country hosts the multinational wargame named ‘Exercise Orion’?",
          "options": [
            "[A] India",
            "[B] USA",
            "[C] France",
            "[D] Australia"
          ],
          "correctAnswer": "Correct Answer: C [France]",
          "hint": "Notes:Exercise Orion is the largest multinational exercise conducted by the French defence forces. The multinational wargame codenamed Orion will involve India, the USA and other allies of France.\nFor the first time, Indian Rafale combat aircraft is expected to take part in this wargame. India will send its Refale fighter jets to take part in the exercise Orion in France."
        },
        {
          "question": "21. Which Indian chess player has won the World Chess Armageddon Asia & Oceania?",
          "options": [
            "[A] R Praggnanandhaa",
            "[B] D Gukesh",
            "[C] Arjun Erigaisi",
            "[D] Nihal Sarin"
          ],
          "correctAnswer": "Correct Answer: B [D Gukesh]",
          "hint": "Notes:Teenaged Indian Grandmaster D Gukesh stunned former world rapid champion Nodirbek Abdusattorov of Uzbekistan in the final to win the World Chess Armageddon Asia & Oceania.\nThe 16-year-old Indian won in a field that included former world classical champion Vladimir Kramnik, Daniil Dubov, Yangyi Yu (China), Vidit Gujrathi and Karthikeyan Murali (both India) and Param Maghsoodloo (Iran), apart from Abdusattorov."
        },
        {
          "question": "22. Which space agency has released the image of Crab Nebula?",
          "options": [
            "[A] ISRO",
            "[B] European Space Agency",
            "[C] Roscosmos",
            "[D] NASA"
          ],
          "correctAnswer": "Correct Answer: D [NASA]",
          "hint": "Notes:Crab Nebula is a supernova remnant and pulsar wind nebula found in the Taurus constellation, which is located 6500 light-years from Earth.\nIts image which was captured using Imaging X-ray Polarimetry Explorer (IXPE) spacecraft was released by NASA. Using the IXPE, Scientists have mapped the iconic Crab Nebula’s magnetic field in greater detail than ever before."
        },
        {
          "question": "23. Where is Zojila tunnel being constructed?",
          "options": [
            "[A] Himachal Pradesh",
            "[B] Assam",
            "[C] Arunachal Pradesh",
            "[D] Jammu and Kashmir"
          ],
          "correctAnswer": "Correct Answer: D [Jammu and Kashmir]",
          "hint": "Notes:The Zojila Tunnel, which would be Asia’s longest tunnel once completed, is being constructed in Jammu & Kashmir to establish all weather connectivity for Ladakh. 19 tunnels are being constructed in Jammu and Kashmir at a cost of Rs.25000 crore, of which the major one is the Zojila Tunnel.\nWith the construction of this 14.15 km tunnel, there will be all-weather connectivity for Ladakh, which will cut down travel time to cross the Zojila Pass from three hours to 20 minutes."
        },
        {
          "question": "24. ‘Cumbum Panneer Thratchai’ grapes, which received G.I tag recently, is from which state/UT?",
          "options": [
            "[A] Odisha",
            "[B] Tamil Nadu",
            "[C] Karnataka",
            "[D] West Bengal"
          ],
          "correctAnswer": "Correct Answer: B [Tamil Nadu]",
          "hint": "Notes:Tamil Nadu’s Cumbum grapes, also known as Cumbum Panneer Thratchai, recently received GI tag. It constitutes 85 percent of the grapes grown in Tamil Nadu.\nThe Cumbum valley also called Kambam Valley, located at the Western Ghats in Tamil Nadu, is known as the ‘Grapes city of South India’."
        },
        {
          "question": "25. Which armed force launched the Regional Pollution Response Exercise ‘RPREX-2023’?",
          "options": [
            "[A] Indian Army",
            "[B] Indian Navy",
            "[C] Indian Coast Guard",
            "[D] Indian Air Force"
          ],
          "correctAnswer": "Correct Answer: C [Indian Coast Guard]",
          "hint": "Notes:The Regional Pollution Response Exercise, RPREX-2023, was launched recently by the Indian Coast Guard.\nIt will assess the preparedness of the oil exploration companies to handle oil spills and marine pollutions."
        },
        {
          "question": "26. Bathinda military station, which was seen in the news, is located in which state?",
          "options": [
            "[A] Punjab",
            "[B] Assam",
            "[C] West Bengal",
            "[D] Sikkim"
          ],
          "correctAnswer": "Correct Answer: A [Punjab]",
          "hint": "Notes:The Bathinda military station is the headquarters of the 10 Corps of the Army, also called as the Chetak Corps). Recently, four Army jawans in this military station were killed.\nBathinda Police arrested one solider in connection with a military station firing incident, who has confessed the crime."
        },
        {
          "question": "27. ‘Urja Ganga Pipeline’ is an ambitious initiative of which country?",
          "options": [
            "[A] Sri Lanka",
            "[B] India",
            "[C] Nepal",
            "[D] Bangladesh"
          ],
          "correctAnswer": "Correct Answer: B [India]",
          "hint": "Notes:Urja Ganga Pipeline is an ambitious project of India that seeks to take CNG to far-flung areas. This has helped expand the adoption of cleaner fuels to the hinterlands.\nIn 2016, work on laying a 2,655-km pipeline from Uttar Pradesh to West Bengal, Jharkhand and Odisha began. The line was extended to Assam from Bihar, a length of 726 km, to take the fuel to unconnected states in the East."
        },
        {
          "question": "28. What is the growth forecast of India by the International Monetary Fund (IMF) for 2023-24?",
          "options": [
            "[A] 4.9 %",
            "[B] 5.9 %",
            "[C] 6.9 %",
            "[D] 7.9 %"
          ],
          "correctAnswer": "Correct Answer: B [5.9 %]",
          "hint": "Notes:International Monetary Fund (IMF) has cut its GDP growth forecast for India for the financial year 2023-24 by 20 basis points to 5.9 per cent.\nIn its latest bi-annual World Economic Outlook, RBI also announced that India’s retail inflation to ease from 6.7 per cent in FY23 to 4.9 per cent in FY24 and current account deficit to come down to 2.2 per cent of GDP from 2.6 per cent in FY23."
        },
        {
          "question": "29. When is ‘Ambedkar Jayanti’ observed in India?",
          "options": [
            "[A] January 14",
            "[B] February 14",
            "[C] March 14",
            "[D] April 14"
          ],
          "correctAnswer": "Correct Answer: D [April 14]",
          "hint": "Notes:Ambedkar Jayanti is observed on April 14, to mark the birth anniversary of Bharat Ratna Dr. B. R. Ambedkar.\nThe birth anniversary of Dr B.R. Ambedkar is being celebrated as the ‘Equality Day’ in Tamil Nadu.  Dr Ambedkar headed the committee drafting the Constitution of India."
        },
        {
          "question": "30. Which country was recently hit by ‘Cyclone Ilsa’?",
          "options": [
            "[A] USA",
            "[B] Australia",
            "[C] Russia",
            "[D] Germany"
          ],
          "correctAnswer": "Correct Answer: B [Australia]",
          "hint": "Notes:Cyclone Ilsa is a category 5 storm that recently made landfall into a remote stretch of coast in Western Australia.\nIts high wind speeds broke previous records that were set around a decade ago in the same place. Severe Tropical Cyclone Ilsa struck the places close to Port Hedland, the world’s largest iron ore export hub."
        },
        {
          "question": "31. Baisakhi (Vaisakhi) is a spring harvest festival primarily celebrated in which state?",
          "options": [
            "[A] Sikkim",
            "[B] Punjab",
            "[C] West Bengal",
            "[D] Rajasthan"
          ],
          "correctAnswer": "Correct Answer: B [Punjab]",
          "hint": "Notes:Baisakhi is a spring harvest festival celebrated primarily in northern parts of India. It marks the start of the month of Vaisakh.\nVaisakhi is a spring festival which happens in the month of April every year. It is a day to celebrate 1699 – the year when Sikhism was born as a collective faith. Vaisakhi has been a harvest festival in Punjab for a long time, even before it became so important to Sikhs."
        },
        {
          "question": "32. Shawwal Moon, which was seen in the news, is associated with which religion?",
          "options": [
            "[A] Judaism",
            "[B] Islam",
            "[C] Sikhism",
            "[D] Buddhism"
          ],
          "correctAnswer": "Correct Answer: B [Islam]",
          "hint": "Notes:The Shawwal Moon is an important celestial event in the Islamic calendar that marks the start of the Eid Al-Fitr.\nIt occurs in the tenth month of the Islamic calendar, also known as the Hijri calendar. This year, it is likely to be either on April 20 or 21. Each month starts with the sighting of the moon."
        },
        {
          "question": "33. ‘Juice Jacking’, which was seen in the news, is related to which field?",
          "options": [
            "[A] Environment",
            "[B] Agriculture",
            "[C] Electronics",
            "[D] Sports"
          ],
          "correctAnswer": "Correct Answer: C [Electronics]",
          "hint": "Notes:Juice jacking is the term that was coined in 2011 to describe the security vulnerability created due to the tampering of the USB charging station to compromise linked devices.\nThe FBI recently warned people not to use public phone charging station or USB ports due to the presence of this threat."
        },
        {
          "question": "34. ‘GN-z11’, which was seen in the news, is the farthest object of which category?",
          "options": [
            "[A] Exo-planet",
            "[B] Galaxy",
            "[C] Asteroid",
            "[D] Comet"
          ],
          "correctAnswer": "Correct Answer: B [Galaxy]",
          "hint": "Notes:GN-z11, found in the constellation Ursa Major, is among the farthest and earliest galaxies ever discovered.\nThe latest spectroscopic results from this galaxy revealed the complete absence of dust particles from its surroundings for an interim time period despite the presence of a very high star formation rate."
        },
        {
          "question": "35. Which institution has launched the ‘Mission 50K-EV4ECO’?",
          "options": [
            "[A] RBI",
            "[B] SIDBI",
            "[C] SEBI",
            "[D] NITI Aayog"
          ],
          "correctAnswer": "Correct Answer: B [SIDBI]",
          "hint": "Notes:The Small Industries Development Bank of India (SIDBI) has announced the launch of a pilot phase of ‘Mission 50K-EV4ECO’\nThe pilot scheme aims at strengthening the EV ecosystem, including uptake for two, three and four-wheelers through direct and indirect lending."
        },
        {
          "question": "36. Which city is the host of the ‘G20 Space Economy Leaders Meeting’ in India?",
          "options": [
            "[A] Bengaluru",
            "[B] Chennai",
            "[C] Shillong",
            "[D] Kolkata"
          ],
          "correctAnswer": "Correct Answer: C [Shillong]",
          "hint": "Notes:The G20 Space Economy Leaders Meeting was organized in Shillong in April 2023. The Meeting is being organised under India’s G20 presidency by the Department of Space, Government of India.\nThe Indian Space Research Organisation (ISRO) will be organizing the precursor event of this meeting."
        },
        {
          "question": "37. Which Indian state/UT announced ‘Dr. B R Ambedkar Award’ for recognising people involved in the welfare of Dalits?",
          "options": [
            "[A] Tamil Nadu",
            "[B] Telangana",
            "[C] Madhya Pradesh",
            "[D] West Bengal"
          ],
          "correctAnswer": "Correct Answer: B [Telangana]",
          "hint": "Notes:The Telangana Government recently announced an award in the name of Babasaheb Dr. B R Ambedkar.\nThe government will form Rs.51 crore corpus for this award and every year. Rs.3 crore worth of award will be given to anyone involved in the welfare of Dalits."
        },
        {
          "question": "38. Which country is the host of ‘SCO Millets Food Festival’?",
          "options": [
            "[A] Japan",
            "[B] India",
            "[C] China",
            "[D] Sri Lanka"
          ],
          "correctAnswer": "Correct Answer: B [India]",
          "hint": "Notes:Union Minister of State for Tourism Shripad Naik inaugurated a Millets Food Festival of the member countries of Shanghai Cooperation Organization (SCO) in Mumbai.\nIt includes a variety of cuisines made of different millets prepared by chefs from Kazakhstan, Kyrgyzstan Uzbekistan, Russia and India."
        },
        {
          "question": "39. Which Indian scientist had demonstrated that plants feel pain and have sensations?",
          "options": [
            "[A] Jagadish Chandra Bose",
            "[B] Sir CV Raman",
            "[C] Satyendra Nath Bose",
            "[D] Srinivasa Ramanujam"
          ],
          "correctAnswer": "Correct Answer: A [Jagadish Chandra Bose]",
          "hint": "Notes:Recently, a group of researchers from Tel Aviv University in Israel have reported that their team pick up distress noises – very distinct, high-pitched sounds in the ultrasonic range made by plants when they faced stress.\nThis phenomenon was stated a century ago by Indian scientist Jagadish Chandra Bose, who demonstrated that plants feel pain and have sensations just like animals."
        },
        {
          "question": "40. What is ‘RHESSI’, which was seen in the news recently?",
          "options": [
            "[A] Covid 19 Variant",
            "[B] Titanium Alloy",
            "[C] NASA’S defunct satellite",
            "[D] ISRO’s new satellite"
          ],
          "correctAnswer": "Correct Answer: C [NASA’S defunct satellite]",
          "hint": "Notes:RHESSI – Reuven Ramaty High Energy Solar Spectroscopic Image satellite / probe is NASA’s old defunct satellite, which plummeted into Earth’s atmosphere and disintegrated over the Saharan desert recently.\nThe probe was launched in February, 2002 and probe spent 16 years studying the rush of highly-energetic particles ejected from the Sun."
        },
        {
          "question": "41. Which institution has prepared the White Paper on ‘Gearing Up To Solve Food Security Challenges’?",
          "options": [
            "[A] NABARD",
            "[B] FCI",
            "[C] Atal Innovation Mission",
            "[D] FSSAI"
          ],
          "correctAnswer": "Correct Answer: C [Atal Innovation Mission]",
          "hint": "Notes:The white paper on ‘Gearing Up to Solve Food Security Challenges’ was prepared by the Atal Innovation Mission in partnership with the United Nations Capital Development Fund (UNCDF) and with support from the Rabo Foundation and Bill and Melinda Gates Foundation.\nIt recommended that states develop their own Agri-Tech policies in order to encourage the growth of agriculture-focused start-ups, while also facilitating the adoption of digital licensing systems."
        },
        {
          "question": "42. Which institution released the ‘The State of the World’s Children 2023: For Every Child, Vaccination’ report?",
          "options": [
            "[A] UNICEF",
            "[B] NITI Aayog",
            "[C] Women and Child Development Ministry",
            "[D] Pratham Foundation"
          ],
          "correctAnswer": "Correct Answer: A [UNICEF]",
          "hint": "Notes:‘The State of the World’s Children 2023: For Every Child, Vaccination’ report was released recently by the UNICEF India.\nAccording to this report, India is one of the countries with highest vaccine confidence in the world. The popular perception of the importance of vaccines for children held firm or improved only in China, India and Mexico out of 55 countries studied."
        },
        {
          "question": "43. ‘Mission Youth’, which received the PM Award for Excellence under Innovation Category, is from which state/UT?",
          "options": [
            "[A] Karnataka",
            "[B] Jammu and Kashmir",
            "[C] Odisha",
            "[D] Jharkhand"
          ],
          "correctAnswer": "Correct Answer: B [Jammu and Kashmir]",
          "hint": "Notes:The Jammu and Kashmir administration’s flagship initiative, ‘Mission Youth’ recently received the Prime Minister’s Award for Excellence under the Innovation (state) category.\nIt is a unique programme aimed at empowering youth in the union territory. The mission will focus on all individuals between the age of 15 to 35 years."
        },
        {
          "question": "44. FOSCOS is the web-based application of which institution?",
          "options": [
            "[A] FCI",
            "[B] FSSAI",
            "[C] NABARD",
            "[D] Ministry of Civil Aviation"
          ],
          "correctAnswer": "Correct Answer: B [FSSAI]",
          "hint": "Notes:FOSCOS (Food Safety and Compliance System) is a web-based application of the Food Safety and Standards Authority of India (FSSAI).\nThe food safety regulator has taken steps to translate this web application in Hindi and all the regional languages."
        },
        {
          "question": "45. What is the outlay of the ‘Promotion of Research and Innovation in Pharma MedTech Sector’ scheme?",
          "options": [
            "[A] Rs 1000 crore",
            "[B] Rs 3000 crore",
            "[C] Rs 5000 crore",
            "[D] Rs 7000 crore"
          ],
          "correctAnswer": "Correct Answer: C [Rs 5000 crore]",
          "hint": "Notes:Promotion of Research and Innovation in Pharma MedTech Sector is a government scheme that will be launched to strengthen Research and Development in the Indian pharmaceuticals and medical technology sectors.\nIt will be implemented over five years with an outlay of Rs.5,000 crore."
        },
        {
          "question": "46. Which Union Ministry launched the ‘Sangathan se Samriddhi’ scheme?",
          "options": [
            "[A] Ministry of Agriculture",
            "[B] Ministry of Rural Development",
            "[C] Ministry of MSME",
            "[D] Ministry of Commerce and Industry"
          ],
          "correctAnswer": "Correct Answer: B [Ministry of Rural Development]",
          "hint": "Notes:‘Sangathan se Samriddhi’ scheme was recently launched by the Union Rural Development Minister Giriraj Singh.\nIts purpose is to empower marginalized rural households by bringing all eligible rural women into the fold of Self-Help Groups."
        },
        {
          "question": "47. Which state/UT launched the ‘Mehngai Rahat Camp’?",
          "options": [
            "[A] Rajasthan",
            "[B] Sikkim",
            "[C] West Bengal",
            "[D] Gujarat"
          ],
          "correctAnswer": "Correct Answer: A [Rajasthan]",
          "hint": "Notes:‘Mehngai Rahat Camp’ was recently inaugurated by Rajasthan Chief Minister Ashok Gehlot. They will provide relief for people from rising inflation.\nUnder these camps, the general public and deprived sections will be provided relief from inflation by connecting them with the public welfare schemes of the state government."
        },
        {
          "question": "48. Which is the first country in the world to have remittances from abroad crossing the USD 100-billion mark?",
          "options": [
            "[A] China",
            "[B] India",
            "[C] USA",
            "[D] Indonesia"
          ],
          "correctAnswer": "Correct Answer: B [India]",
          "hint": "Notes:India has become the first country in the world to have annual remittances from abroad crossing the USD 100-billion mark.\nAccording to the World Bank, private remittances, or transfer of money from NRI to friends and relatives in India crossed the threshold in 2022, with a year-on- year growth of 12%."
        },
        {
          "question": "49. ‘Khongjom Day’ is celebrated in which state/UT?",
          "options": [
            "[A] Assam",
            "[B] Manipur",
            "[C] Arunachal Pradesh",
            "[D] Jammu and Kashmir"
          ],
          "correctAnswer": "Correct Answer: B [Manipur]",
          "hint": "Notes:Khongjom Day is observed in Manipur on April 23. It commemorates Manipuri warriors who fought against the British during the 1891 Anglo Manipuri War.\nManipur Chief Minister N. Biren Singh and Governor Ms. Anusuiya Uikey led others in paying tributes to the heroes."
        },
        {
          "question": "50. Which state launched the ‘Siksha Setu Asom Portal App’?",
          "options": [
            "[A] Gujarat",
            "[B] Assam",
            "[C] Odisha",
            "[D] Telangana"
          ],
          "correctAnswer": "Correct Answer: B [Assam]",
          "hint": "Notes:Siksha Setu Asom Portal App was launched recently by the Assam Government. This application will be used to collect information about schools, students, teachers and more.\nThe portal has been initiated to capture all details regarding schools including information of the staff as well as those of the students."
        }
      ],
      "type": "current-affairs-quiz-april-2023",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "65166dbf1634489240c293c0"
      },
      "data": [
        {
          "question": "1. Nagorno-Karabakh is a region which is disputed between which 2 countries?",
          "options": [
            "[A] Armenia and Azerbaijan",
            "[B] Russia and Ukraine",
            "[C] USA and Mexico",
            "[D] Nepal and China"
          ],
          "correctAnswer": "Correct Answer: A [Armenia and Azerbaijan]",
          "hint": "Notes:Nagorno-Karabakh is a landlocked mountainous region in the South Caucasus that is disputed between Armenia and Azerbaijan. The two countries, both formerly part of the Soviet Union – have fought repeatedly over the last 35 years for control of Nagorno-Karabakh.\nAzerbaijan has recently set up a checkpoint at the start of the Lachin corridor, the only land route that links Armenia to Nagorno-Karabakh."
        },
        {
          "question": "2. As per a recent study, trees and crops endemic to which country have higher ‘Air Pollution Tolerance Index’?",
          "options": [
            "[A] India",
            "[B] Brazil",
            "[C] Chile",
            "[D] Sri Lanka"
          ],
          "correctAnswer": "Correct Answer: A [India]",
          "hint": "Notes:The Air Pollution Tolerance Index is a tool used to assess the tolerance capacity of a crop or tree species against air pollution. A new study has found that certain trees and crops endemic to India have high APTI.\nTrees such as pipal, neem, mango and crops like maize, pigeon pea and safflower, which are endemic to India can help lower the impact of air pollution by absorbing and filtering pollutants."
        },
        {
          "question": "3. ‘Cyber National Mission Force’ is associated with which country?",
          "options": [
            "[A] India",
            "[B] USA",
            "[C] Russia",
            "[D] Israel"
          ],
          "correctAnswer": "Correct Answer: B [USA]",
          "hint": "Notes:The Cyber National Mission Force (CNMF) comes under the aegis of the US Department of Defense. It is responsible for combating foreign malicious cyber actors and aiding foreign governments fight hackers.\nThe United States is sending more of its cyber forces abroad to help foreign governments fight hackers. In the last three years, CNMF has conducted 47 such defensive operations across 20 countries."
        },
        {
          "question": "4. Which institution released the ‘Promoting Millets in Diets’ Report?",
          "options": [
            "[A] NABARD",
            "[B] FCI",
            "[C] NITI Aayog",
            "[D] FSSAI"
          ],
          "correctAnswer": "Correct Answer: C [NITI Aayog]",
          "hint": "Notes:The report titled “Promoting Millets in Diets: Best Practices across States/UTs of India” was released recently by NITI Aayog.\nIt provides a set of good and innovative practices that have been adopted by state governments and organizations across the various aspects of the millet value-chain."
        },
        {
          "question": "5. Which company has been recently upgraded to the status of Navratna CPSE (in May 2023)?",
          "options": [
            "[A] Airports Authority of India",
            "[B] Rail Vikas Nigam Limited",
            "[C] Hindustan Copper Limited",
            "[D] Indian Railway Catering &amp; Tourism Corporation Limited"
          ],
          "correctAnswer": "Correct Answer: B [Rail Vikas Nigam Limited]",
          "hint": "Notes:Navratna Companies are public sector companies that are given financial autonomy to invest up to Rs.1,000 crore without the Indian government’s approval.\nThe Union Finance Ministry recently upgraded the status of the Rail Vikas Nigam Limited (RVNL) from Category-I Miniratna to Navratna Central Public Sector Enterprise (CPSE)."
        },
        {
          "question": "6. From which year, the ‘IFRS 17’ financial reporting standard became effective?",
          "options": [
            "[A] 2000",
            "[B] 2010",
            "[C] 2015",
            "[D] 2023"
          ],
          "correctAnswer": "Correct Answer: D [2023]",
          "hint": "Notes:The IFRS 17 is an international financial reporting standard that was issued by the International Accounting Standards Board in 2017. It has become effective on January 1, 2023.\nIt will replace IFRS 4 on accounting for insurance contracts. The earlier application permitted as long as IFRS 9 is also applied."
        },
        {
          "question": "7. Which asteroid produces the annual Geminid meteor shower?",
          "options": [
            "[A] Asteroid Phaethon",
            "[B] Asteroid Ceres",
            "[C] Asteroid Pallas",
            "[D] Asteroid Vesta"
          ],
          "correctAnswer": "Correct Answer: A [Asteroid Phaethon]",
          "hint": "Notes:Asteroid Phaethon, which was discovered in 1983, produces the annual Geminid meteor shower.\nNew research has found that its close encounter with the Sun causes the vaporization of the sodium within the asteroid, resulting in comet-like activity."
        },
        {
          "question": "8. ‘Sultan Al-Neyadi’, who became the first Arab t undertake a spacewalk, is from which country?",
          "options": [
            "[A] Israel",
            "[B] Qatar",
            "[C] UAE",
            "[D] Saudi Arabia"
          ],
          "correctAnswer": "Correct Answer: C [UAE]",
          "hint": "Notes:Sultan Al-Neyadi, a UAE astronaut, recently became the first Arab to undertake a spacewalk by venturing out of the ISS. The spacewalk lasted for around seven hours in the vacuum of space.\nThe 41-year-old was one of the first two astronauts from the United Arab Emirates, along with Hazza Al Mansouri."
        },
        {
          "question": "9. Who became the Commander-in-Chief of the Andaman and Nicobar Command (CINCAN)?",
          "options": [
            "[A] Air Marshal Saju Balakrishnan",
            "[B] Air Marshal Subroto Mukerjee",
            "[C] Air Marshal B. Manikantan",
            "[D] Air Marshal Anil Kumar"
          ],
          "correctAnswer": "Correct Answer: A [Air Marshal Saju Balakrishnan]",
          "hint": "Notes:Air Marshal Saju Balakrishnan AVSM, VM recently became the 17th Commander-in-Chief of the Andaman and Nicobar Command (CINCAN).\nThe Andaman and Nicobar Command (ANC) is the only Joint-services Command in India."
        },
        {
          "question": "10. Liberica excelsa, which was seen in the news, belongs to which species?",
          "options": [
            "[A] Tea",
            "[B] Coffee",
            "[C] Rice",
            "[D] Wheat"
          ],
          "correctAnswer": "Correct Answer: B [Coffee]",
          "hint": "Notes:Liberica excelsa is a species of coffee that is found to be capable of withstanding heat, drought and disease exacerbated by global warming.\nIt is being promoted by large coffee exporting countries in Africa as an alternative to Arabica and robusta, which are at risk to climate change."
        },
        {
          "question": "11. As per a Supreme Court bench ruling, it can use its powers under which Article to directly grant a divorce decree?",
          "options": [
            "[A] Article 21",
            "[B] Article 92",
            "[C] Article 121",
            "[D] Article 142"
          ],
          "correctAnswer": "Correct Answer: D [Article 142]",
          "hint": "Notes:Recently, a five-judge bench of the Supreme Court ruled that it can use its powers under Article 142 of the Constitution to grant a divorce decree directly to consenting parties in cases where there is an irretrievable breakdown of marriage.\nThis would eliminate the need for the parties to be referred to a family court, where they would have to wait for 6 to 18 months for a decree of divorce by mutual consent."
        },
        {
          "question": "12. Ministry of External Affairs along with its counterpart of which country launched a foundation to promote dialogue between youth leaders?",
          "options": [
            "[A] USA",
            "[B] France",
            "[C] Australia",
            "[D] New Zealand"
          ],
          "correctAnswer": "Correct Answer: B [France]",
          "hint": "Notes:France India Foundation is a private not for profit organisation in India launched as part of the France Asia Foundation with the support of the Ministry of External Affairs and the French Ministry of Foreign Affairs.\nIts objective is to promote meaningful dialogue between youth leaders."
        },
        {
          "question": "13. ‘Santiago Peña’ recently became the President of which country?",
          "options": [
            "[A] Suda",
            "[B] Paraguay",
            "[C] Brazil",
            "[D] Canada"
          ],
          "correctAnswer": "Correct Answer: B [Paraguay]",
          "hint": "Notes:Santiago Peña, a 44-year-old former finance minister and economist at the IMF, has been elected as the next President of Paraguay.\nHe took nearly 43% of votes in Paraguay’s presidential election. He is a former member of the Board of Directors of the Central Bank of Paraguay."
        },
        {
          "question": "14. ‘Innovating for Transport and Energy Systems (ITES)’ is a collaboration of India and which country?",
          "options": [
            "[A] UK",
            "[B] USA",
            "[C] Australia",
            "[D] Japan"
          ],
          "correctAnswer": "Correct Answer: A [UK]",
          "hint": "Notes:The UK and India are collaborating on an innovation partnership, called Innovating for Transport and Energy Systems (ITES), to develop more sustainable and affordable transportation systems, including electric vehicle-ready infrastructure. The partnership is backed by both governments, UK Research and Innovation (UKRI), and involves industry leaders, researchers, policymakers, and investors from both countries."
        },
        {
          "question": "15. Which institution released a report on Currency and Finance?",
          "options": [
            "[A] NITI Aayog",
            "[B] RBI",
            "[C] NPCI",
            "[D] SEBI"
          ],
          "correctAnswer": "Correct Answer: B [RBI]",
          "hint": "Notes:The RBI Report on Currency and Finance was released recently based on the theme “Towards a Greener Cleaner India”.\nAccording to this report, regulatory policies such as carbon taxes and ETS standards for carbon emission rates and energy efficiency can contribute to the reduction of overall CO2 emissions in an economy."
        },
        {
          "question": "16. India’s CSIR signed MoU on Industrial Research and Development Cooperation with which country?",
          "options": [
            "[A] Brazil",
            "[B] Israel",
            "[C] Iran",
            "[D] Russia"
          ],
          "correctAnswer": "Correct Answer: B [Israel]",
          "hint": "Notes:India’s CSIR and its Israeli counterpart sign MoU on Industrial Research and Development Cooperation.\nCouncil of Scientific and Industrial Research (CSIR) functions under the Ministry of Science and Technology of India. The MoU will be implemented through specific projects agreed upon by both parties and monitored by a Joint Steering Committee led by the heads of CSIR and DDR&D."
        },
        {
          "question": "17. President of India Droupadi Murmu launched the ‘Addiction Free’ campaign in which state?",
          "options": [
            "[A] Gujarat",
            "[B] Odisha",
            "[C] West Bengal",
            "[D] Bihar"
          ],
          "correctAnswer": "Correct Answer: B [Odisha]",
          "hint": "Notes:President of India Droupadi Murmu has recently launched the ‘Addiction Free Odisha’ campaign.\nThis campaign is organized by Brahma Kumaris Centre at Hatbadra, Mayurbhanj. The Brahma Kumaris are a spiritual movement that originated in Hyderabad, Sindh, during the 1930s."
        },
        {
          "question": "18. What is the name of the inaugural cargo ship to the Myanmar’s Sittwe Port?",
          "options": [
            "[A] MV-ITT LION (V-273)",
            "[B] MV-ITT TIGER (V-273)",
            "[C] MV-ITT BULL (V-273)",
            "[D] MV-ITT CHEETAH (V-273)"
          ],
          "correctAnswer": "Correct Answer: A [MV-ITT LION (V-273)]",
          "hint": "Notes:The MV-ITT LION (V-273) was flagged off recently from Kolkata. It is the inaugural cargo ship to the Sittwe Port of Myanmar.\nThe port was built with India’s assistance under the Kaladan Multimodal Transit Transport Project (KMTTP)."
        },
        {
          "question": "19. As per the ‘Global Warming’s Four Indias, 2022’, what percent of Indians are concerned about Global warming?",
          "options": [
            "[A] 58 %",
            "[B] 62 %",
            "[C] 72 %",
            "[D] 82 %"
          ],
          "correctAnswer": "Correct Answer: D [82 %]",
          "hint": "Notes:‘Global Warming’s Four Indias, 2022’ is a report that was released recently by the Yale Program on Climate Change Communication and CVoter International, an Indian international polling agency headquartered in Delhi.\nAccording to this report, majority of Indians around 82 %, think that the governments should ramp up efforts on climate action."
        },
        {
          "question": "20. Which country has deployed the Tu-160 strategic bomber, known as the Blackjack?",
          "options": [
            "[A] USA",
            "[B] Iran",
            "[C] UAE",
            "[D] Russia"
          ],
          "correctAnswer": "Correct Answer: D [Russia]",
          "hint": "Notes:The Tu-160 strategic bomber has been deployed in Ukraine by Russia. It is the world’s largest bomber, known as the Blackjack in NATO countries.\nIt is a supersonic, variable-sweep wing, strategic bomber developed by Russia’s Tupolev Design Bureau in the 1980s."
        },
        {
          "question": "21. India Post and Confederation of All India Traders (CAIT) partnered to operationalise which portal?",
          "options": [
            "[A] Craft India",
            "[B] Bharat EMart",
            "[C] India Mart",
            "[D] Bharat Store"
          ],
          "correctAnswer": "Correct Answer: B [Bharat EMart]",
          "hint": "Notes:Recently, the India Post, Confederation of All India Traders (CAIT) and Tripta Technologies entered into an agreement to facilitate the operationalization of the Bharat EMart Portal.\nThis portal will provide the facility to pick up consignments from the premises of the traders and ensure the door-step delivery for the consignees across India."
        },
        {
          "question": "22. Which institution launched Renewable Grid Integration Laboratory and Green Hydrogen Laboratory?",
          "options": [
            "[A] IIT Madras",
            "[B] IIT Roorkee",
            "[C] NIT Warangal",
            "[D] NIT Tiruchirappalli"
          ],
          "correctAnswer": "Correct Answer: B [IIT Roorkee]",
          "hint": "Notes:IIT Roorkee has unveiled new labs to drive India’s clean energy transition.\nTwo new labs namely Renewable Grid Integration Laboratory and Green Hydrogen Laboratory were inaugurated at the IIT Roorkee’s Department of Hydro and Renewable Energy (HRED)."
        },
        {
          "question": "23. The 35th Indo-Thai CORPAT was organised in which region?",
          "options": [
            "[A] Andaman Sea",
            "[B] Indian Ocean",
            "[C] South China Sea",
            "[D] Pacific Ocean"
          ],
          "correctAnswer": "Correct Answer: A [Andaman Sea]",
          "hint": "Notes:The 35th edition of India-Thailand Coordinated Patrol (Indo-Thai CORPAT) between the Indian Navy and the Royal Thai Navy was conducted recently.\nIndian Naval Ship (INS) Kesari and Thailand’s Saiburi Frigate, along with Maritime Patrol Aircraft from both navies participated in the CORPAT along the International Maritime Boundary Line in the Andaman Sea."
        },
        {
          "question": "24. Which institution released the “Improving maternal and newborn health and survival and reducing stillbirth” Report?",
          "options": [
            "[A] NITI Aayog",
            "[B] UN",
            "[C] Ministry of Family and Health Affairs",
            "[D] John Hopkins University"
          ],
          "correctAnswer": "Correct Answer: B [UN]",
          "hint": "Notes:The report titled “Improving maternal and newborn health and survival and reducing stillbirth” was released recently by the United Nations. It is edited by WHO, UNICEF and UNFPA.\nAccording to this report, progress in reducing maternal and newborn deaths has remained stagnant since 2015."
        },
        {
          "question": "25. The invasion of a tiny insect named ‘Eretmoptera murphyi’ is changing the ecosystem of which continent?",
          "options": [
            "[A] Australia",
            "[B] Antarctica",
            "[C] Asia",
            "[D] Africa"
          ],
          "correctAnswer": "Correct Answer: B [Antarctica]",
          "hint": "Notes:Eretmoptera murphyi is a flightless midge. It is currently changing Antarctica’s Signy Island soil and ecosystem by feasting on dead organic matter.\nIt has led to faster plant decomposition, thus increasing the soil nitrate levels by three-five times compared to places on the island where the midge is absent."
        },
        {
          "question": "26. ‘E-retrofitment’, which was seen in the news, is associated with which field?",
          "options": [
            "[A] Culture",
            "[B] Electric Mobility",
            "[C] Finance",
            "[D] Sports"
          ],
          "correctAnswer": "Correct Answer: B [Electric Mobility]",
          "hint": "Notes:E-retrofitment is the process of converting a conventional vehicle into an EV by replacing internal combustion engine with the electric powertrain.\nIt is expected play a major role in India’s transition to electric mobility. The Indian government has set an ambitious target of 30 per cent sales penetration of electric passenger cars by 2030."
        },
        {
          "question": "27. Which country has been hit by a large outbreak of the Moroccan locust in wheat plants?",
          "options": [
            "[A] India",
            "[B] Pakistan",
            "[C] Afghanistan",
            "[D] Myanmar"
          ],
          "correctAnswer": "Correct Answer: C [Afghanistan]",
          "hint": "Notes:The large outbreak of the Moroccan locus in the wheat basket of Afghanistan is estimated to destroy a quarter of the annual harvest. This loss is valued at 280 million USD to 480 million USD.\nThe Moroccan locust eats more than 150 species of plants, including tree crops, pastures and 50 food crops. The species is ranked among the most economically damaging plant pests anywhere in the world."
        },
        {
          "question": "28. Dr Jayant V. Narlikar, who was seen in the news recently, is associated with which profession?",
          "options": [
            "[A] Historian",
            "[B] Astronomer",
            "[C] Scientist",
            "[D] Virologist"
          ],
          "correctAnswer": "Correct Answer: B [Astronomer]",
          "hint": "Notes:Dr Jayant V. Narlikar, an astronomer, recently became the first recipient of the ASI Govind Swarup Lifetime Achievement award.\nThe award was instituted in 2022 to celebrate the golden jubilee of the Astronomical Society of India (ASI)."
        },
        {
          "question": "29. ‘Rebuild Kerala Initiative’ is aimed at rebuilding which entity?",
          "options": [
            "[A] Beaches",
            "[B] Roads",
            "[C] Urban Forests",
            "[D] Ancient Buildings"
          ],
          "correctAnswer": "Correct Answer: B [Roads]",
          "hint": "Notes:Rebuild Kerala Initiative is a state government initiative which is aimed at rebuilding roads better after floods.\nThe World Bank team recently reviewed the activities under this initiative. It also has agreed to explore possible areas of cooperation in six priority projects."
        },
        {
          "question": "30. Where is the ‘Great Grandfather Tree’ located?",
          "options": [
            "[A] India",
            "[B] China",
            "[C] Greece",
            "[D] Chile"
          ],
          "correctAnswer": "Correct Answer: D [Chile]",
          "hint": "Notes:The “Great Grandfather” tree is currently in the process of being organized as the oldest tree in the world. Situated in Chile, this tree is believed to be around more than 5,000 years old.\nThe sample which was extracted and other dating methods suggest the tree is up to 5,484 years old. The current record-holder is a 4,853 year old bristlecone pine tree in California."
        },
        {
          "question": "31. What is a ‘Comb Jelly’, which was seen in the news recently?",
          "options": [
            "[A] Semi conductor Chip",
            "[B] Malware",
            "[C] Marine Organism",
            "[D] Cryptocurrency"
          ],
          "correctAnswer": "Correct Answer: C [Marine Organism]",
          "hint": "Notes:Comb jellies, also known as ctenophores, are marine organisms known for the groups of cilia they use for swimming.\nA new study revealed that the nerve-net neurons of the comb jellies are not connected by synapses but by a single plasma membrane."
        },
        {
          "question": "32. Which country has recently approved the ‘Isaac River coal mine project’?",
          "options": [
            "[A] USA",
            "[B] Australia",
            "[C] Russia",
            "[D] India"
          ],
          "correctAnswer": "Correct Answer: B [Australia]",
          "hint": "Notes:The Australian government has recently approved the Queensland’s Isaac River coal mine project. The coal mine will be built near Moranbah.\nBowen Coking Coal has been authorised yextract metallurgical coal for making steel. This is the first new coal mine to be given the go-ahead by the government."
        },
        {
          "question": "33. Which institution launched the ‘100 Days 100 Pays’ campaign?",
          "options": [
            "[A] RBI",
            "[B] NPCI",
            "[C] SEBI",
            "[D] SBI"
          ],
          "correctAnswer": "Correct Answer: A [RBI]",
          "hint": "Notes:The Reserve Bank of India (RBI) has announced the launch of the ‘100 Days 100 Pays’ campaign by banks recently.\nIt aims to trace and settle top 100 unclaimed deposits of every bank in every district of the country within 100 days. An unclaimed deposit is one which does not see any activity like the infusion of funds, withdrawal from the depositor for 10 years or more."
        },
        {
          "question": "34. Which country has set up the ‘Palli Karma Sahayak Foundation (PKSF)’?",
          "options": [
            "[A] India",
            "[B] Bangladesh",
            "[C] Myanmar",
            "[D] Nepal"
          ],
          "correctAnswer": "Correct Answer: B [Bangladesh]",
          "hint": "Notes:Palli Karma Sahayak Foundation (PKSF) was set up by the Bangladesh government to provide debt assistance to the country’s not-for-profit micro lenders.\nIndia’s microfinance sector is looking to set up a dedicated funding institution in line with Bangladesh model."
        },
        {
          "question": "35. India EXIM Finserv IFSC Private Ltd is to be set up in which place?",
          "options": [
            "[A] Mumbai",
            "[B] Ahmedabad",
            "[C] New Delhi",
            "[D] Chennai"
          ],
          "correctAnswer": "Correct Answer: B [Ahmedabad]",
          "hint": "Notes:India EXIM Finserv IFSC Private Ltd will be set up in the GIFT city by the EXIM Bank of the third quarter of the current financial year.\nThis proposed subsidiary of the EXIM bank will focus on the on international export factoring in the presence of an import factor to promote trade finance and factoring."
        },
        {
          "question": "36. Which institution built the ‘INS Mormugao’ guided missile destroyer of the Indian Navy?",
          "options": [
            "[A] Cochin Shipyard",
            "[B] Mazagon Dock Ltd",
            "[C] Garden Reach Shipbuilders",
            "[D] GAIL"
          ],
          "correctAnswer": "Correct Answer: B [Mazagon Dock Ltd]",
          "hint": "Notes:INS Mormugao is the second ship of the Visakhapatnam-class stealth guided-missile destroyers of the Indian Navy.\nIt was built at Mazagon Dock Limited and the ship was commissioned on 18 December 2022. A Brahmos Supersonic cruise missile was test fired using this vessel recently."
        },
        {
          "question": "37. Which is the first state in the country to introduce a welfare fund for MGNREGS workers?",
          "options": [
            "[A] Tamil Nadu",
            "[B] Kerala",
            "[C] Telangana",
            "[D] Odisha"
          ],
          "correctAnswer": "Correct Answer: B [Kerala]",
          "hint": "Notes:Kerala recently became the first state in the country to introduce a welfare fund for Mahatma Gandhi Rural Employment Guarantee Scheme (MGNREGS) workers.\nUnder this initiative, individuals above the age of 60 will be eligible for pension under this fund. The welfare fund has been formed as per the Kerala Employment Guarantee Workers’ Welfare Fund Act, 2021."
        },
        {
          "question": "38. Which Union Ministry has revised the Approved List of Models and Manufacturers (ALMM) regulations?",
          "options": [
            "[A] Ministry of Defence",
            "[B] Ministry of Renewable Energy",
            "[C] Ministry of Power",
            "[D] Ministry of Steel"
          ],
          "correctAnswer": "Correct Answer: B [Ministry of Renewable Energy]",
          "hint": "Notes:The Union MNRE Ministry has revised the Approved List of Models and Manufacturers (ALMM) regulations to increase participation of private entities in the renewable energy manufacturing supply chain.\nIt will minimize compliance cost for solar PV manufacturers and ease the processing of application filing."
        },
        {
          "question": "39. Tungnath Temple, which was seen in the news, is located in which state/UT?",
          "options": [
            "[A] Uttarakhand",
            "[B] Jammu and Kashmir",
            "[C] Assam",
            "[D] Rajasthan"
          ],
          "correctAnswer": "Correct Answer: A [Uttarakhand]",
          "hint": "Notes:Tungnath temple is the country’s highest Shiva temple located in Rudraprayag, Uttarakhand.\nAn Archaeological Survey of India (ASI) study has found that Tungnath temple in Garhwal Himalayas is tilting 5 to 6 degrees and smaller structures in the complex by 10 degrees."
        },
        {
          "question": "40. In Defence, what is the name of the action against an adversary without a direct conventional military action?",
          "options": [
            "[A] Non-kinetic warfare",
            "[B] Non-military warfare",
            "[C] Non-offensive warfare",
            "[D] Non-assistive warfare"
          ],
          "correctAnswer": "Correct Answer: A [Non-kinetic warfare]",
          "hint": "Notes:Non-kinetic warfare, also known as the contactless warfare, is the action against an adversary without a direct conventional military action.\nDefence Rajnath Singh said the concept of non-kinetic warfare has highlighted the need for advanced technology in the defence sector."
        },
        {
          "question": "41. What is the aim of ‘Sagar Parikrama Yatra’?",
          "options": [
            "[A] Resolve issues of fishermen",
            "[B] Improve Security of Coasts",
            "[C] Increase patrolling service",
            "[D] Protect Aquatic Animals"
          ],
          "correctAnswer": "Correct Answer: A [Resolve issues of fishermen]",
          "hint": "Notes:Sagar Parikrama Yatra Phase-V was launched recently. Its purpose is to resolve issues of fishermen and other stakeholders and promote their economic wellbeing.\nIt facilitates their economic upliftment through various fisheries schemes and programs being implemented by the Government of India such as Pradhan Mantri Matsya Sampada Yojana (PMMSY) and Kisan Credit Card (KCC)."
        },
        {
          "question": "42. Where is the ‘Rajaji Tiger Reserve’ located in India?",
          "options": [
            "[A] Gujarat",
            "[B] Uttarakhand",
            "[C] Madhya Pradesh",
            "[D] Maharashtra"
          ],
          "correctAnswer": "Correct Answer: B [Uttarakhand]",
          "hint": "Notes:Rajaji Tiger Reserve is situated in Uttarakhand. A tigress that was relocated from the woodland region of Corbett Tiger Reserve was released within the Motichur forest area of Rajaji Tiger Reserve.\nA female and another male were translocated to Rajaji from Corbett in December 2020 and January 2021, respectively."
        },
        {
          "question": "43. In which city, the Janganana Bhawan, was inaugurated?",
          "options": [
            "[A] New Delhi",
            "[B] Mumbai",
            "[C] Hyderabad",
            "[D] Varanasi"
          ],
          "correctAnswer": "Correct Answer: A [New Delhi]",
          "hint": "Notes:Janganana Bhawan was inaugurated recently by Union Minister Amit Shah in New Delhi. It is the office of the Registrar General and Census Commissioner of India.\nHe also launched Web portal for Birth and Death Registration, an Upgraded SRS Mobile Application with Geofencing, and Web portal for Online Sale of Census Publications. Mr Shah also released Census Compendium from 1981 to upcoming Census."
        },
        {
          "question": "44. Which institution will launch the ONDC Academy?",
          "options": [
            "[A] SEBI",
            "[B] EXIM Bank",
            "[C] ONDC",
            "[D] ECGC"
          ],
          "correctAnswer": "Correct Answer: C [ONDC]",
          "hint": "Notes:The ONDC Academy will be launched by the Open Network for Digital Commerce to raise awareness about various processes and to train network partners.\nIts purpose is to develop a robust ecosystem of certified buyers, sellers and logistics network partners across the country."
        },
        {
          "question": "45. Which country announced the ‘12-point development plan for the Pacific Island nations’?",
          "options": [
            "[A] China",
            "[B] Bangladesh",
            "[C] India",
            "[D] Myanmar"
          ],
          "correctAnswer": "Correct Answer: C [India]",
          "hint": "Notes:As part of the Act East Policy, the Indian government announced a 12-point development plan for the Pacific Island nations at the Forum for India-Pacific Islands Cooperation (FIPIC) summit held at Port Moresby, the capital of Papua New Guinea.\nThe 12- point development agenda is part of the Act East Policy of India. This plan focuses on areas like renewable energy, healthcare and cybersecurity."
        },
        {
          "question": "46. Which country hosted the ‘Langkawi International Maritime & Aerospace Exhibition 2023’?",
          "options": [
            "[A] Sri Lanka",
            "[B] Malaysia",
            "[C] Singapore",
            "[D] Nepal"
          ],
          "correctAnswer": "Correct Answer: B [Malaysia]",
          "hint": "Notes:The Langkawi International Maritime and Aerospace Exhibition (LIMA) 2023 will be organized in Malaysia. The 16th edition of the event was held from May 22 to 25.\nLIMA is one of the largest maritime and aerospace exhibitions in the Asia-Pacific. This year’s edition involves over 600 exhibitors from more than 30 countries, including India."
        },
        {
          "question": "47. Mangalore Refinery and Petrochemicals Ltd (MRPL) into Hindustan Petroleum Corp Ltd (HPCL) are the subsidiaries of which organisation?",
          "options": [
            "[A] GAIL",
            "[B] ONGC",
            "[C] REC",
            "[D] BHEL"
          ],
          "correctAnswer": "Correct Answer: B [ONGC]",
          "hint": "Notes:The Union Ministry of Oil is currently taking steps to merge the Mangalore Refinery and Petrochemicals Ltd (MRPL) into Hindustan Petroleum Corp Ltd (HPCL).\nThe MRPL and HPCL are two listed subsidiaries of the Oil and Natural Gas Corporation (ONGC). It is an Indian central public sector undertaking under the ownership of Ministry of Petroleum and Natural Gas."
        },
        {
          "question": "48. Uttarakhand’s first Vande Bharat Express train travels from Dehradun to which city?",
          "options": [
            "[A] Guwahati",
            "[B] New Delhi",
            "[C] Varanasi",
            "[D] Kolkata"
          ],
          "correctAnswer": "Correct Answer: B [New Delhi]",
          "hint": "Notes:Uttarakhand’s first Vande Bharat Express is set to be flagged off by Prime Minister Modi. It will travel from Dehradun to Delhi.\nThe train has been indigenously manufactured and is equipped with advanced safety features, including the Kavach technology."
        },
        {
          "question": "49. Which country test-fired the long-range ballistic missile Kheibar?",
          "options": [
            "[A] Israel",
            "[B] Iran",
            "[C] UAE",
            "[D] Ukraine"
          ],
          "correctAnswer": "Correct Answer: B [Iran]",
          "hint": "Notes:Kheibar is a long-range ballistic missile with a potential range of 2,000 kilometres. It was recently test fired by Iran.\nIt is capable of reaching a range of 2,000 kilometers and carrying a warhead weighing up to 1.5 metric tons. The United States claimed that Iran’s missile program posed a ‘serious threat’."
        },
        {
          "question": "50. As per the ‘State of Ransomware 2023’ report, what per cent of India-based organisations were victims to ransomware?",
          "options": [
            "[A] 53",
            "[B] 63",
            "[C] 73",
            "[D] 93"
          ],
          "correctAnswer": "Correct Answer: C [73]",
          "hint": "Notes:The ‘State of Ransomware 2023’ report revealed that 73 per cent of India-based organisations that were surveyed were victims to ransomware.\nAs per the report, 43 percent of organizations that were surveyed had their data encrypted but still had to pay ransom."
        }
      ],
      "type": "current-affairs-quiz-may-2023",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "65166dd11634489240c293c2"
      },
      "data": [
        {
          "question": "1. Who chairs the governing council meeting of NITI Aayog?",
          "options": [
            "[A] NITI Aayog CEO",
            "[B] Prime Minister",
            "[C] Finance Minister",
            "[D] Supreme Court Chief Justice"
          ],
          "correctAnswer": "Correct Answer: B [Prime Minister]",
          "hint": "Notes:Prime Minister Narendra Modi chaired the 8th Governing Council Meeting of NITI Aayog, at New Delhi.\nIt was attended by Chief Ministers and Lieutenant Governors representing 19 States and 6 UTs. HE urged the Centre, States and UTs should work as Team India and fulfil the dreams and aspirations of people for a Viksit Bharat at 2047."
        },
        {
          "question": "2. Sabang port, which was seen in the news, is located in which country?",
          "options": [
            "[A] India",
            "[B] Myanmar",
            "[C] Indonesia",
            "[D] Sri Lanka"
          ],
          "correctAnswer": "Correct Answer: C [Indonesia]",
          "hint": "Notes:Sabang port in Indonesia is situated 700 km from the Andaman and Nicobar Islands. Recently, India and Indonesia completed a joint feasibility study on the development of this port.\nThe successful development of this port would allow India easier access to the Malacca Straits, a narrow stretch of the sea between Indonesia and Malaysia and one of six chokepoints along the world’s maritime trading routes."
        },
        {
          "question": "3. Which institution released the ‘Forever Toxic: The science on health threats from plastic recycling’?",
          "options": [
            "[A] WMO",
            "[B] UNEP",
            "[C] WHO",
            "[D] Greenpeace Philippines"
          ],
          "correctAnswer": "Correct Answer: D [Greenpeace Philippines]",
          "hint": "Notes:The report titled “Forever Toxic: The science on health threats from plastic recycling” was released recently by Greenpeace Philippines. According to this report, recycling can increase the toxicity of plastics.\nThe report was released ahead of the second session of the Intergovernmental Negotiating Committee to develop a Global Plastics Treaty, being held at Paris, France."
        },
        {
          "question": "4. Pisodonophis kalinga, which was discovered recently, belongs to which species?",
          "options": [
            "[A] Snake",
            "[B] Eel",
            "[C] Spider",
            "[D] Turtle"
          ],
          "correctAnswer": "Correct Answer: B [Eel]",
          "hint": "Notes:Pisodonophis kalinga is a newly discovered species of eel found in Palur canal in Odisha’s Ganjam district.\nIt was found by scientists from the Zoological Survey of India (ZSI). The new species has been named Pisodonophis kalinga after the name of ancient Odisha. It has a snake-like appearance and has length from 560 millimetres to 7 metres."
        },
        {
          "question": "5. Which Indian port topped Indian ports in the ‘Global Container Port Performance Index (CPPI) 2022’?",
          "options": [
            "[A] Pipavav Port",
            "[B] Mundra Port",
            "[C] Deendayal Port",
            "[D] Chennai Port"
          ],
          "correctAnswer": "Correct Answer: A [Pipavav Port]",
          "hint": "Notes:Global Container Port Performance Index (CPPI) 2022 was released by the World Bank and S&P Global Market Intelligence.\nIt acts as the benchmark for assessing container port performance and efficiency worldwide. Pipavav Port on the Gujarat coast has emerged as the most efficient port in India in Global Container Port Performance Index (CPPI) 2022. Globally, Pipavav Port has secured the 30th position."
        },
        {
          "question": "6. Which state announced that the Ahmednagar will be renamed Ahilyanagar?",
          "options": [
            "[A] Odisha",
            "[B] Gujarat",
            "[C] Maharashtra",
            "[D] Uttarakhand"
          ],
          "correctAnswer": "Correct Answer: C [Maharashtra]",
          "hint": "Notes:Maharashtra Chief Minister Eknath Shinde has announced that Ahmednagar will be renamed Ahilyanagar in an ode to 18th-century Maratha queen Ahilyabai Holkar.\nAhilyabai Holkar reigned Malwa from 1765 to 1795. She had established Maheshwar (in Madhya Pradesh) as the seat of the Holkar dynasty. In February, the government had renamed Osmanabad as Dharashiv and Aurangabad as Chhatrapati Sambhajinagar."
        },
        {
          "question": "7. Where is the ‘Mahakal Lok corridor’ located?",
          "options": [
            "[A] Gujarat",
            "[B] Uttarakhand",
            "[C] Madhya Pradesh",
            "[D] Maharashtra"
          ],
          "correctAnswer": "Correct Answer: C [Madhya Pradesh]",
          "hint": "Notes:Mahakal Lok corridor, which was inaugurated by Prime Minister Modi in 2022, is part of the redevelopment project around the Mahakaleshwar temple, Ujjain.\nSix out of seven idols of ‘Saptarishis’ installed at the Mahakal Lok corridor have collapsed due to gusty winds. Madhya Pradesh’s Lokayukta has taken suo motu cognisance of the damage that gusty winds caused to six statues installed as part of the Mahakal Lok Corridor Project."
        },
        {
          "question": "8. ‘HMPV’ Virus, which was seen in the news, affects which part of the body?",
          "options": [
            "[A] Liver",
            "[B] Respiratory Tract",
            "[C] Brain",
            "[D] Pancreas"
          ],
          "correctAnswer": "Correct Answer: B [Respiratory Tract]",
          "hint": "Notes:The human metapneumovirus (HMPV) is a pathogen capable of affecting upper and lower respiratory tract.\nIn March, the United States has recorded HMPV, with 11 percent of PCR tests and 20 percent of antigen tests coming out as positive."
        },
        {
          "question": "9. Which institution released the ‘Draft Master Directions on Cyber Resilience and Digital Payment Security Controls for PSOs’?",
          "options": [
            "[A] NPCI",
            "[B] NITI Aayog",
            "[C] RBI",
            "[D] SEBI"
          ],
          "correctAnswer": "Correct Answer: C [RBI]",
          "hint": "Notes:The draft Master Directions on Cyber Resilience and Digital Payment Security Controls for PSOs was released recently by the Reserve Bank of India.\nIt is a governance framework that encompasses the processes of identifying, evaluating, overseeing, and controlling cybersecurity risks."
        },
        {
          "question": "10. Which country won the Men’s Junior Asia Cup 2023 title?",
          "options": [
            "[A] India",
            "[B] Pakistan",
            "[C] South Korea",
            "[D] Malaysia"
          ],
          "correctAnswer": "Correct Answer: A [India]",
          "hint": "Notes:The Indian hockey team recorded a 2-1 win over Pakistan in the final of the Men’s Junior Asia Cup 2023 in Salalah, Oman to successfully defend its title.\nAraijeet Singh Hundal was India’s top-scorer at Men’s Junior Asia Cup hockey 2023 with eight goals. This was India’s fourth title at Men’s Junior Asia Cup, having won it previously in 2004, 2008 and 2015."
        },
        {
          "question": "11. The Helmand River originates in which country?",
          "options": [
            "[A] Afghanistan",
            "[B] Egypt",
            "[C] Israel",
            "[D] Myanmar"
          ],
          "correctAnswer": "Correct Answer: A [Afghanistan]",
          "hint": "Notes:The Helmand is Afghanistan’s longest river. It originates near Kabul in the western Hindu Kush Mountain range and flows in a south-western direction through desert areas for about 1,150 kilometers before emptying into Lake Hamun, which spans the Afghanistan-Iran border.\nClashes broke out between Iran and Afghanistan along the border due to dispute over the sharing of water from the Helmand River. This conflict resulted in killing and wounding of troops."
        },
        {
          "question": "12. Which country recently passed the Patriotic Bill that prohibits criticism of the government prior to elections?",
          "options": [
            "[A] India",
            "[B] Zimbabwe",
            "[C] China",
            "[D] North Korea"
          ],
          "correctAnswer": "Correct Answer: B [Zimbabwe]",
          "hint": "Notes:Zimbabwe’s Parliament recently passed the Patriotic Bill that prohibits criticism of the government prior to the presidential and parliamentary elections in August.\nThe violation of this law would mean imprisonment for up to 20 years. It criminalizes speech that harms “the country’s positive image and integrity or reputation"
        },
        {
          "question": "13. Which country approved a Law to Tackle Loneliness and Social Isolation?",
          "options": [
            "[A] Israel",
            "[B] Ukraine",
            "[C] Japan",
            "[D] Germany"
          ],
          "correctAnswer": "Correct Answer: C [Japan]",
          "hint": "Notes:The Japanese Parliament Diet’s upper chamber recently approved a legislation to tackle loneliness and social isolation. It will come to effect on April 1 next year.\nIn a survey conducted by the government in 2022 for people age 16 or over nationwide, 40.3% of all respondents said that they had felt lonely."
        },
        {
          "question": "14. As per NSO data, what is India’s GDP growth in the January to March 2023 quarter?",
          "options": [
            "[A] 5.8 %",
            "[B] 6.1 %",
            "[C] 6.5 %",
            "[D] 7.2 %"
          ],
          "correctAnswer": "Correct Answer: B [6.1 %]",
          "hint": "Notes:India’s GDP growth accelerated to 6.1% in the January to March 2023 quarter, according to the provisional national income data released by the National Statistical Office (NSO).\nThis has lifted the economy’s uptick in 2022-23 to 7.2% from the 7% estimated earlier. The Gross Value Added (GVA) in the economy rose to 7% in 2022-23."
        },
        {
          "question": "15. Which city has successfully tested Medication Delivery via Drones with collision avoidance technology and real-time monitoring?",
          "options": [
            "[A] New York",
            "[B] Dubai",
            "[C] Melbourne",
            "[D] London"
          ],
          "correctAnswer": "Correct Answer: B [Dubai]",
          "hint": "Notes:Dubai Successfully Trials Medication Delivery via Drones with collision avoidance technology and real-time monitoring.\nThe trial, conducted at Dubai Silicon Oasis (DSO) in partnership with Fakeeh University Hospital. ‘Dubai Programme to Enable Drone Transportation,’ was initiated by Sheikh Hamdan bin Mohammed bin Rashid Al Maktoum, Crown Prince of Dubai."
        },
        {
          "question": "16. Amchang Wildlife Sanctuary is located in which state/UT?",
          "options": [
            "[A] Assam",
            "[B] West Bengal",
            "[C] Odisha",
            "[D] Meghalaya"
          ],
          "correctAnswer": "Correct Answer: A [Assam]",
          "hint": "Notes:The Indian Army has created a distinctive environment to foster harmonious coexistence with wild elephants, with the objective of reducing the conflict between humans and elephants in the Amchang Wildlife Sanctuary in Assam.\nWithin the vicinity of the military station, the Indian army has established multiple ponds and cultivated fruit trees and grasses to provide resources for wild elephants."
        },
        {
          "question": "17. Which country hosts the ‘Special Olympics World Summer Games’?",
          "options": [
            "[A] India",
            "[B] Germany",
            "[C] France",
            "[D] Australia"
          ],
          "correctAnswer": "Correct Answer: B [Germany]",
          "hint": "Notes:The Special Olympics World Summer Games will be held in Germany from June 17 to 25. India will send a 255-member contingent to this event.\nThe Special Olympics World Games are the world’s largest inclusive sporting event for people with intellectual disabilities."
        },
        {
          "question": "18. CAI Central Council approves renewal of mutual recognition agreement (MRA) with which countries?",
          "options": [
            "[A] Canada, Ireland",
            "[B] Australia, New Zealand",
            "[C] Norway, Finland",
            "[D] USA, Mexico"
          ],
          "correctAnswer": "Correct Answer: A [Canada, Ireland]",
          "hint": "Notes:The CA Institute’s Central Council has approved the renewal of the existing mutual recognition agreement (MRA) with CPA Canada and CPA Ireland.\nThe Central Council has also approved the renewal of MRA/MoUs with the South African Institute of Chartered Accountants (SAICA), Bahrain Institute of Banking and Finance (BIBF), the National Board of Accountants and Auditors (Tanzania) and Qatar Financial Centre Authority."
        },
        {
          "question": "19. What is Sea Ice?",
          "options": [
            "[A] Frozen CO2",
            "[B] Frozen sea water",
            "[C] Frozen salt",
            "[D] Frozen sugar"
          ],
          "correctAnswer": "Correct Answer: B [Frozen sea water]",
          "hint": "Notes:Sea ice is frozen seawater which floats on the ocean surface. It undergoes a melting process during summer and then re-freezes during the winter season. It forms in both the Arctic and the Antarctic in each hemisphere’s winter.\nA new study revealed that Arctic may become sea ice-free in the summers by 2030s."
        },
        {
          "question": "20. Nand Baba Milk Mission is launched by which state?",
          "options": [
            "[A] Uttar Pradesh",
            "[B] Madhya Pradesh",
            "[C] Bihar",
            "[D] Maharashtra"
          ],
          "correctAnswer": "Correct Answer: A [Uttar Pradesh]",
          "hint": "Notes:In a bid to make Uttar Pradesh a leading State in the field of milk development and milk production, the State Government has launched the Nand Baba Milk Mission scheme at a cost of ₹1,000 crore.\nThe scheme provides milk producers the facility of selling their milk at a reasonable price in villages through dairy co-operative societies."
        },
        {
          "question": "21. HUDA City Centre-Cyber City metro project is to be constructed in which city?",
          "options": [
            "[A] New Delhi",
            "[B] Gurugram",
            "[C] Hyderabad",
            "[D] Bengaluru"
          ],
          "correctAnswer": "Correct Answer: B [Gurugram]",
          "hint": "Notes:The Union cabinet has approved the elevated Gurugram metro project to connect Cyber City with Huda City Centre with spur to Dwarka Expressway covering a total of 28.5 km.\nThe metro project was approved recently by the Union Cabinet. The estimated expenditure of this project is Rs 5,452 crore."
        },
        {
          "question": "22. IPCEI, which was seen in the news, is associated with which bloc?",
          "options": [
            "[A] G-7",
            "[B] G-20",
            "[C] EU",
            "[D] ASEAN"
          ],
          "correctAnswer": "Correct Answer: C [EU]",
          "hint": "Notes:Important Projects of Common European Interest (IPCEI) are crucial tools for executing the European Union (EU) Industrial Strategy. European Commission has granted approval for 8.1 billion euros in state aid for microelectronics and communication technology initiatives.\nThese projects have been collectively recognized as an Important Project of Common European Interest (IPCEI), making them eligible for simplified EU state aid regulations."
        },
        {
          "question": "23. Narengi Military Station is situated in which state/UT?",
          "options": [
            "[A] West Bengal",
            "[B] Assam",
            "[C] Punjab",
            "[D] Rajasthan"
          ],
          "correctAnswer": "Correct Answer: B [Assam]",
          "hint": "Notes:Narengi Military Station in Guwahati, Assam, has become a crucial logistics hub for the Indian army in the Eastern region, aiding in the improvement of the logistics chain and operational readiness across the region.\nSpanning approximately 3300 acres, the military station plays a significant role in enhancing the army’s preparedness in the entire eastern theatre."
        },
        {
          "question": "24. Which state commissioned the K-FON Fibre Optic Network Project?",
          "options": [
            "[A] Karnataka",
            "[B] Kerala",
            "[C] Assam",
            "[D] Telangana"
          ],
          "correctAnswer": "Correct Answer: B [Kerala]",
          "hint": "Notes:Kerala Chief Minister Pinarayi Vijayan commissioned the first phase of the Kerala Fibre Optic Network (K-FON).\nThe project is aimed at providing free Internet access to 20 lakh below poverty line (BPL) families and connecting 30,000 government institutions, as well as providing Internet connection at nominal rate to the public."
        },
        {
          "question": "25. Janan Bushehri, is the only woman legislator elected in which country’s general election?",
          "options": [
            "[A] Israel",
            "[B] Kuwait",
            "[C] UAE",
            "[D] Iran"
          ],
          "correctAnswer": "Correct Answer: B [Kuwait]",
          "hint": "Notes:Opposition lawmakers won a majority in Kuwait’s parliament with only one woman -Janan Bushehri elected, after the Gulf state’s seventh general election in just over a decade.\nSince Kuwait adopted a parliamentary system in 1962, the legislature has been dissolved around a dozen times."
        },
        {
          "question": "26. Which country is the host of the ‘Subsidiary Bodies 58’ (SB58) Conference?",
          "options": [
            "[A] Germany",
            "[B] Australia",
            "[C] India",
            "[D] China"
          ],
          "correctAnswer": "Correct Answer: A [Germany]",
          "hint": "Notes:The Subsidiary Bodies 58 (SB 58) conference in Bonn, Germany, hit a deadlock during its second plenary meeting regarding the adoption of the agenda, resulting in no formal agenda being approved.\nThis is the 58th session of the UNFCCC Subsidiary Body for Implementation (SBI) and Subsidiary Body for Scientific and Technological Advice (SBSTA)."
        },
        {
          "question": "27. ‘Trooping the Colour’ is a ceremony that is associated with which country?",
          "options": [
            "[A] USA",
            "[B] UK",
            "[C] Australia",
            "[D] Japan"
          ],
          "correctAnswer": "Correct Answer: B [UK]",
          "hint": "Notes:Trooping the Colour is a ceremony that is associated with the British monarch’s birthday. This year’s ceremony will mark King Charles’ first birthday parade as the British monarch.\nBuckingham Palace announced that the King will ride on horseback in his upcoming birthday parade in London. It will mark the first time the British monarch has saddled up for the annual event since 1986."
        },
        {
          "question": "28. Which institution has established the NRL – Centre of Excellence (CoE) for Sustainable Materials Translational Facility on Bioplastics?",
          "options": [
            "[A] IIT Madras",
            "[B] IIT Guwahati",
            "[C] IIT Varanasi",
            "[D] IIT Kanpur"
          ],
          "correctAnswer": "Correct Answer: B [IIT Guwahati]",
          "hint": "Notes:Indian Institute of Technology- Guwahati has set up the NRL – Centre of Excellence (CoE) for Sustainable Materials Translational Facility on Bioplastics.\nIts aim is to work towards the development of environment-friendly sustainable plastics."
        },
        {
          "question": "29. The Indian government has put forth stock limit on which food product for the first time in 15 years?",
          "options": [
            "[A] Rice",
            "[B] Wheat",
            "[C] Sugar",
            "[D] Coconut"
          ],
          "correctAnswer": "Correct Answer: B [Wheat]",
          "hint": "Notes:The Indian government has put forth stock limit on wheat for the first time in 15 years. The stock limit has been imposed until March 31 next year.\nThe centre has also decided to offload 15 lakh tonnes of wheat in the first phase from central pool stock under Open Market Sale Scheme to control retail prices of wheat."
        },
        {
          "question": "30. Which country has declared the UN envoy Volker Perthes to be persona non grata in that country?",
          "options": [
            "[A] Sudan",
            "[B] Germany",
            "[C] Ethiopia",
            "[D] South Africa"
          ],
          "correctAnswer": "Correct Answer: A [Sudan]",
          "hint": "Notes:The Sudanese government has declared the UN envoy to the country, Volker Perthes, to be persona non grata, meaning it no longer recognizes his position in Sudan. This has been notified by the country to UN Secretary-General António Guterres.\nSince 2015, Sudan’s military and the paramilitary Rapid Support Forces have been locked in a violent power struggle that has killed more than 860 civilians. Perthes was a key mediator in Sudan since being appointed as special envoy in 2021."
        },
        {
          "question": "31. Which country’s central bank Governor has been honoured with the ‘Governor of the Year’ award?",
          "options": [
            "[A] Sri Lanka",
            "[B] Afghanistan",
            "[C] India",
            "[D] Iran"
          ],
          "correctAnswer": "Correct Answer: C [India]",
          "hint": "Notes:Reserve Bank of India (RBI) Governor Shaktikanta Das honoured with ‘Governor of the Year’ award at Central Banking Awards 2023.\nCentral Banking is an international economic research journal. The award recognised his role as the RBI chief in managing inflation and handling India’s banking system during crises like COVID pandemic and global turmoils."
        },
        {
          "question": "32. Which state has bagged the overall championship in 2023 Janjatiya Khel Mahotsav?",
          "options": [
            "[A] Tamil Nadu",
            "[B] Kerala",
            "[C] Tripura",
            "[D] Odisha"
          ],
          "correctAnswer": "Correct Answer: D [Odisha]",
          "hint": "Notes:The maiden Janjatiya Khel Mahotsav was held recently in Bhubaneswar with Odisha emerging as overall champion.\nThe Mahotsav is a coordinated effort of the Union Ministry of Culture, Odisha Government, and KIIT University. The event witnessed participation of 5000 tribal athletes, 1000 officials of 2 states."
        },
        {
          "question": "33. The Ministry of Defence (MoD) has inked a Rs.500 crore contract with ICOMM Tele, for procurement of which equipment?",
          "options": [
            "[A] Radio Relay Communication equipment containers",
            "[B] Radars",
            "[C] Night Vision sensors",
            "[D] Advanced light weight sensors"
          ],
          "correctAnswer": "Correct Answer: A [Radio Relay Communication equipment containers]",
          "hint": "Notes:The Ministry of Defence (MoD) has inked a Rs.500 crore contract with ICOMM Tele, for the procurement of 1,035 numbers of 5/7.5 Ton Radio Relay Communication equipment containers. The delivery of the containers is scheduled to commence from the current Financial Year 2023-24.\nThese containers will be utilized to provide a protected environment for communication equipment to function in a failsafe and reliable manner."
        },
        {
          "question": "34. Which state/UT launched the ‘Celebrities associated with Shimla’ map?",
          "options": [
            "[A] Sikkim",
            "[B] Himachal Pradesh",
            "[C] Uttarakhand",
            "[D] Jammu and Kashmir"
          ],
          "correctAnswer": "Correct Answer: B [Himachal Pradesh]",
          "hint": "Notes:‘Celebrities associated with Shimla’ map was launched recently by Himachal Pradesh Chief Minister.\nIt was prepared by Trilok Suryavanshi – the former Assistant Director of the Department of Language, Art and Culture. The map will serve as a record for youth to get information about the historical importance of Shimla."
        },
        {
          "question": "35. Which country recently announced compensation for holocaust survivors who fled the Einsatzgruppen?",
          "options": [
            "[A] Russia",
            "[B] Germany",
            "[C] France",
            "[D] USA"
          ],
          "correctAnswer": "Correct Answer: B [Germany]",
          "hint": "Notes:The Einsatzgruppen were mobile units formed by the Nazi regime during World War II. Their primary purpose was to systematically eliminate Jewish communities, among other targeted groups, through mass murder.\nGermany recently announced compensation for holocaust survivors who fled the Einsatzgruppen."
        },
        {
          "question": "36. Aditi Gopichand Swamy, who was seen in the news, is associated with which sports?",
          "options": [
            "[A] Squash",
            "[B] Chess",
            "[C] Archery",
            "[D] Tennis"
          ],
          "correctAnswer": "Correct Answer: C [Archery]",
          "hint": "Notes:The 16-year-old debutant Aditi Gopichand Swamy broke the Under 18 compound world record to top the women’s qualification round in the third stage of the Archery World Cup.\nThe Indian women’s compound team of Jyothi, Aditi and Parneet topped the seedings with 2119 points in the qualifications. Compound men’s team of Abhishek, Ojas and Prathamesh settled for the second seed with 2112 points."
        },
        {
          "question": "37. Which Union Ministry unveiled the ‘Dugdh Sankalan Sathi Mobile App’?",
          "options": [
            "[A] Ministry of Jal Shakti",
            "[B] Ministry of MSME",
            "[C] Ministry of Heavy Industries",
            "[D] Ministry of Commerce and Industry"
          ],
          "correctAnswer": "Correct Answer: C [Ministry of Heavy Industries]",
          "hint": "Notes:The Dugdh Sankalan Sathi Mobile App was launched recently by the Union Minister of Heavy Industries Dr.Mahendra Nath Pandey in Mussorie, Uttarakhand.\nThe app was developed by Rajasthan Electronics & Instruments Limited (REIL), a Mini Ratna Central Public Sector Enterprise under the Ministry of Heavy Industries. This mobile app aims to improve the quality of milk, foster transparency among stakeholders, and streamline operations at the grassroots village level, including milk cooperative societies."
        },
        {
          "question": "38. Which country has received a financial support of USD 1 billion from China, recently?",
          "options": [
            "[A] India",
            "[B] Pakistan",
            "[C] Bangladesh",
            "[D] Myanmar"
          ],
          "correctAnswer": "Correct Answer: B [Pakistan]",
          "hint": "Notes:The Government of Pakistan, has recently received USD 1 billion from its close ally China to support its critically low foreign reserves.\nThe funds were received by the State Bank of Pakistan. Pakistan’s economy is at the verge of default and the IMF is pushing the country to fulfil its many demands for providing bailout package."
        },
        {
          "question": "39. Who is the first Muslim woman to serve as a federal judge in the US history?",
          "options": [
            "[A] Nusrat Choudhury",
            "[B] Fathima Beevi",
            "[C] Ayesha Malik",
            "[D] Hina Rabbani Khar"
          ],
          "correctAnswer": "Correct Answer: A [Nusrat Choudhury]",
          "hint": "Notes:Nusrat Choudhury was recently confirmed as the first Muslim woman to serve as a federal judge in the US history. The confirmation was made by the US Senate.\nShe will assume her lifetime appointment in Brooklyn federal court in New York. She serves as the legal director of the American Civil Liberties Union."
        },
        {
          "question": "40. Which country is the host of the ‘Ex Khaan Quest 2023’ multilateral peacekeeping joint exercise?",
          "options": [
            "[A] India",
            "[B] Sri Lanka",
            "[C] Mongolia",
            "[D] Israel"
          ],
          "correctAnswer": "Correct Answer: C [Mongolia]",
          "hint": "Notes:Ex Khaan Quest 2023 is a multilateral peacekeeping joint exercise that is currently being held in Mongolia. It involved the participation of military contingents and observers from around 20 countries.\nPresident of Mongolia inaugurated the Exercise, which is co-sponsored by Mongolian Armed Forces (MAF) and United States Army Pacific Command (USARPAC)."
        },
        {
          "question": "41. Aditi Gopichand Swamy, who was seen in the news, is associated with which sports?",
          "options": [
            "[A] Squash",
            "[B] Chess",
            "[C] Archery",
            "[D] Tennis"
          ],
          "correctAnswer": "Correct Answer: C [Archery]",
          "hint": "Notes:The 16-year-old debutant Aditi Gopichand Swamy broke the Under 18 compound world record to top the women’s qualification round in the third stage of the Archery World Cup.\nThe Indian women’s compound team of Jyothi, Aditi and Parneet topped the seedings with 2119 points in the qualifications. Compound men’s team of Abhishek, Ojas and Prathamesh settled for the second seed with 2112 points."
        },
        {
          "question": "42. As per a recent security pact, Papua Guinea allowed which country to station troops and vessels at six key ports and airports?",
          "options": [
            "[A] China",
            "[B] Russia",
            "[C] USA",
            "[D] Germany"
          ],
          "correctAnswer": "Correct Answer: C [USA]",
          "hint": "Notes:The U.S. military can develop and operate out of bases in Papua New Guinea, according to a landmark security pact.\nWith Papua New Guinea’s agreement, the United States will be able to station troops and vessels at six key ports and airports, including Lombrum Naval Base on Manus Island and facilities in the capital Port Moresby."
        },
        {
          "question": "43. Which institution signed the GoI- UN Sustainable Development Cooperation Framework 2023-2027?",
          "options": [
            "[A] Ministry of Social Justice and Empowerment",
            "[B] NITI Aayog",
            "[C] NASSCOM",
            "[D] NPCI"
          ],
          "correctAnswer": "Correct Answer: B [NITI Aayog]",
          "hint": "Notes:NITI Aayog and the United Nations in India signed the Government of India – United Nations Sustainable Development Cooperation Framework 2023-2027.\nIt represents the UN development system’s collective offer to the Government of India, in line with the national vision for development, for the achievement of the Sustainable Development Goals, promoting gender equality, youth empowerment and human rights."
        },
        {
          "question": "44. Bhimbetka Cave Shelter is a UNESCO World Heritage Site located in which state?",
          "options": [
            "[A] Gujarat",
            "[B] Madhya Pradesh",
            "[C] Karnataka",
            "[D] Andhra Pradesh"
          ],
          "correctAnswer": "Correct Answer: B [Madhya Pradesh]",
          "hint": "Notes:In a recent study, Indian scientists have demonstrated that the Indian Dickinsonia fossil, previously identified at the UNESCO World Heritage Site Bhimbetka Cave Shelter in 2021 research, is an imprint left behind by a fallen beehive, rather than an authentic fossil.\nLaser Raman Spectroscopy and X-Ray Diffraction (XRD) confirmed presence of honey and wax in the material."
        },
        {
          "question": "45. Kamala Sohonie, who was honoured in the Google Doodle, was the first Indian woman to achieve which feat?",
          "options": [
            "[A] Get a PhD degree in a scientific discipline.",
            "[B] Become an Astronaut",
            "[C] Get the first Sports Medal",
            "[D] Receive Academy Award"
          ],
          "correctAnswer": "Correct Answer: A [Get a PhD degree in a scientific discipline.]",
          "hint": "Notes:Kamala Sohonie’s 112th birth anniversary was observed recently. She was the first Indian woman to get a PhD degree in a scientific discipline.\nShe won the Rashtrapati Award for her work on Neera, a palm extract that could fight malnutrition among children from tribal communities in India."
        },
        {
          "question": "46. Which country has won the title of ‘World Squash Championship’ in 2023?",
          "options": [
            "[A] India",
            "[B] Egypt",
            "[C] China",
            "[D] Japan"
          ],
          "correctAnswer": "Correct Answer: B [Egypt]",
          "hint": "Notes:Egypt has retained World Squash Championship, after beating Malaysia 2-1 in the final in Chennai.\nThe third place was shared jointly by hosts India and Japan. India was beaten by Malaysia 3-0 in the semi-final. Eight countries took part in the World Squash Championship."
        },
        {
          "question": "47. Which bloc recently adopted recommendations to strengthen action against antimicrobial resistance (AMR)?",
          "options": [
            "[A] G-20",
            "[B] ASEAN",
            "[C] BIMSTEC",
            "[D] EU"
          ],
          "correctAnswer": "Correct Answer: D [EU]",
          "hint": "Notes:The Council of the European Union (EU) adopted a set of recommendations to strengthen action against antimicrobial resistance (AMR). It recommended prudent use of antimicrobials such as antibiotics in human and animal health.\nAntimicrobial resistance refers to the ability of microorganisms, such as bacteria, viruses, and parasites, to adapt and withstand the effects of antimicrobial drugs, rendering them less effective or completely ineffective in treating infections."
        },
        {
          "question": "48. Which institution conducts the ‘India’s Household Consumption Expenditure Survey’?",
          "options": [
            "[A] Reserve Bank of India",
            "[B] National Statistical Office",
            "[C] Ministry of Finance",
            "[D] NITI Aayog"
          ],
          "correctAnswer": "Correct Answer: B [National Statistical Office]",
          "hint": "Notes:India’s Household Consumption Expenditure Survey is a new consumption survey that will track online expenses. Its aim is to capture real economic picture.\nThe National Statistical Office (NSO) conducts the household consumer expenditure survey (HCES) every five years. It includes question on OTT subscription spend, the time spent online, how often we shop online, whether we order meals from Zomato or Swiggy, and if we own an electric vehicle."
        },
        {
          "question": "49. What is ‘Vasovagal syncope’, which was seen in the news?",
          "options": [
            "[A] Monument",
            "[B] New Species",
            "[C] Medical Condition",
            "[D] Vaccine"
          ],
          "correctAnswer": "Correct Answer: C [Medical Condition]",
          "hint": "Notes:Vasovagal syncope is a condition characterized by a sudden drop in heart rate and blood pressure leading to fainting.\nAccording to a study conducted by AIIMS, yoga has been found to enhance the quality of life for individuals with Vasovagal syncope. It is a widespread clinical condition, with an estimated lifetime prevalence of 35%."
        },
        {
          "question": "50. ‘Blue Pansy (Junonia Orithya)’ has been named as the official butterfly of which state/UT?",
          "options": [
            "[A] Karnataka",
            "[B] Jammu and Kashmir",
            "[C] Arunachal Pradesh",
            "[D] Sikkim"
          ],
          "correctAnswer": "Correct Answer: B [Jammu and Kashmir]",
          "hint": "Notes:Blue Pansy (Junonia Orithya) has been named the official butterfly of Jammu and Kashmir. The Blue Pansy, a type of vivid blue butterfly, can be observed in different regions of Southeast Asia, Australia, and Africa.\nThese butterflies, recognized for their territorial behavior, display 26 distinct local subspecies within their habitat."
        }
      ],
      "type": "current-affairs-quiz-june-2023",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "65166dd71634489240c293c4"
      },
      "data": [
        {
          "question": "1. Utah Mountains, which were seen in the news for Watermelon Snow, is situated in which country?",
          "options": [
            "[A] Russia",
            "[B] Ukraine",
            "[C] USA",
            "[D] Indonesia"
          ],
          "correctAnswer": "Correct Answer: C [USA]",
          "hint": "Notes:Watermelon snow is a natural occurrence found in mountainous regions worldwide, where the vibrant color of the snow is caused by a green algae bloom that thrives in cold, snowy conditions.\nThis phenomenon can give the appearance of the snow changing color, but it is actually due to the presence of the algae. This was recently reported in the Utah Mountains, USA."
        },
        {
          "question": "2. Which Indian golfer won ‘Czech Ladies Open title’?",
          "options": [
            "[A] Aditi Ashok",
            "[B] Diksha Dagar",
            "[C] Pranavi Urs",
            "[D] Amandeep Drall"
          ],
          "correctAnswer": "Correct Answer: B [Diksha Dagar]",
          "hint": "Notes:Indian golfer Diksha Dagar won her second Ladies European Tour (LET) title as she grabbed a four-shot win at the Tipsport Czech Ladies Open.\nThe 22-year-old won her first LET title back in 2019 in her rookie year and in 2021 she was part of the winning team at the Aramco Team Series in London. This was Diksha’s 79th start on the LET and she now has two individual wins and nine Top-10 finishes."
        },
        {
          "question": "3. Sutirtha Mukherjee and Ayhika Mukherjee are associated with which sports?",
          "options": [
            "[A] Badminton",
            "[B] Tennis",
            "[C] Table Tennis",
            "[D] Squash"
          ],
          "correctAnswer": "Correct Answer: C [Table Tennis]",
          "hint": "Notes:Sutirtha Mukherjee and Ayhika Mukherjee claimed its maiden women’s doubles title in the WTT Contender Tunis.\nThe pair thus became the first Indian table tennis players to clinch a WTT Contender title this year. The Indian duo defeated the Japanese pair of Miyuu Kihara and Miwa Harimoto 3-1."
        },
        {
          "question": "4. An important variety of pineapple called Queen Pineapple is grown in which state?",
          "options": [
            "[A] West Bengal",
            "[B] Tripura",
            "[C] Assam",
            "[D] Odisha"
          ],
          "correctAnswer": "Correct Answer: B [Tripura]",
          "hint": "Notes:International Pineapple Day is celebrated on June 27th each year to honor and appreciate the tropical fruit.\nOne of the finest varieties of pineapple called Queen Pineapple is particularly grown in Tripura. Another famous variety of pineapple that is grown in the state is Queue."
        },
        {
          "question": "5. Which city is the host of the ‘ODI Cricket World Cup 2023’?",
          "options": [
            "[A] Chennai",
            "[B] Mumbai",
            "[C] Ahmedabad",
            "[D] Kolkata"
          ],
          "correctAnswer": "Correct Answer: C [Ahmedabad]",
          "hint": "Notes:The International Cricket Council (ICC) announced the schedule for the 2023 men’s ODI cricket world cup.\nThe 50-over men’s cricket will commence on 5 October at the Narendra Modi Stadium in Ahmedabad. India is set to host Pakistan after seven years for a cricket match."
        },
        {
          "question": "6. Which city is the host of ‘International Conference on Green Hydrogen’?",
          "options": [
            "[A] Mysuru",
            "[B] Bengaluru",
            "[C] New Delhi",
            "[D] Pune"
          ],
          "correctAnswer": "Correct Answer: C [New Delhi]",
          "hint": "Notes:The International Conference on Green Hydrogen is scheduled to take place in New Delhi from July 5 to 7, 2023.\nThe primary objective of the conference is to establish a comprehensive Green Hydrogen Ecosystem and accelerate progress towards global decarbonization goals by leveraging the potential of Green Hydrogen."
        },
        {
          "question": "7. Which Union Ministry presented the inaugural report on “Critical Minerals for India”?",
          "options": [
            "[A] Ministry of Mines",
            "[B] Ministry of Chemicals and Fertilisers",
            "[C] Ministry of Home Affairs",
            "[D] Ministry of Environment, Forest and Climate Change"
          ],
          "correctAnswer": "Correct Answer: A [Ministry of Mines]",
          "hint": "Notes:The Minister of Coal and Mines Pralhad Joshi, has officially presented the inaugural report on “Critical Minerals for India.”\nThe report was prepared by a team of experts appointed by the Ministry of Mines. This list, for the first time in India, has identified the comprehensive list of critical minerals while considering the requirements of sectors like defence, agriculture, energy, pharmaceutical, telecom etc."
        },
        {
          "question": "8. ‘Global Biodiversity Framework Fund’ is associated with which institution?",
          "options": [
            "[A] World Bank",
            "[B] World Economic Forum",
            "[C] Global Environment Facility",
            "[D] International Monetary Fund"
          ],
          "correctAnswer": "Correct Answer: C [Global Environment Facility]",
          "hint": "Notes:The governing board of the 64th Global Environment Facility (GEF) has given the green light for the creation of the Global Biodiversity Framework Fund.\nThe fund will help with the implementation of the Kunming-Montreal Global Biodiversity Framework, which was reached in December 2022 during the Convention on Biological Diversity COP15 summit in Montreal."
        },
        {
          "question": "9. Which country’s king recently apologised for his country’s role in slavery and asked for forgiveness during a historic speech?",
          "options": [
            "[A] UK",
            "[B] The Netherlands",
            "[C] Spain",
            "[D] Thailand"
          ],
          "correctAnswer": "Correct Answer: B [The Netherlands]",
          "hint": "Notes:King Willem-Alexander of the Netherlands apologised for his country’s role in slavery and asked for forgiveness during a historic speech at an event to commemorate the anniversary of the abolition of slavery in Dutch colonies.\nThe king’s speech followed Dutch Prime Minister Mark Rutte’s apology late last year. The government is establishing a 200-million-euro fund for initiatives that tackle the legacy of slavery in the Netherlands and its former colonies."
        },
        {
          "question": "10. The report titled “Burden of disease attributable to unsafe drinking water, sanitation and hygiene: 2019 update” is released by which organization?",
          "options": [
            "[A] WHO",
            "[B] AIIMS",
            "[C] IIT Bombay",
            "[D] UNICEF"
          ],
          "correctAnswer": "Correct Answer: A [WHO]",
          "hint": "Notes:The World Health Organization (WHO) has recently released a report titled “Burden of disease attributable to unsafe drinking water, sanitation and hygiene: 2019 update”\nAccording to this report, the lack of access to safe drinking water, sanitation, and proper hygiene (WASH) has led to the unfortunate loss of 395,000 lives among children under the age of five."
        },
        {
          "question": "11. The lowest geoid anomaly on Earth has been identified in which Ocean?",
          "options": [
            "[A] Pacific Ocean",
            "[B] Indian Ocean",
            "[C] Arctic Ocean",
            "[D] Antarctic Ocean"
          ],
          "correctAnswer": "Correct Answer: B [Indian Ocean]",
          "hint": "Notes:Researchers from Bengaluru’s Indian Institute of Science (IISc) have identified the cause of an over three million square kilometres-wide ‘gravity hole’ in the Indian Ocean.\nIt is here that the Earth’s gravitational pull is at its weakest and as a result, the sea level is a 100 metres lower than the global average. The Indian Ocean geoid low (IOGL) represents the most prominent gravitational anomaly on Earth."
        },
        {
          "question": "12. France has collaborated with which country to fast-track transition to clean energy?",
          "options": [
            "[A] UAE",
            "[B] Italy",
            "[C] Germany",
            "[D] UK"
          ],
          "correctAnswer": "Correct Answer: A [UAE]",
          "hint": "Notes:France and the United Arab Emirates have joined forces to expedite the transition to clean energy solutions.\nThe two countries are collaborating on projects in fields such as hydrogen and nuclear energy. A trilateral cooperation initiative involving France, the UAE, and India was established earlier this year."
        },
        {
          "question": "13. National Centre for Ocean Information Services (INCOIS) functions under which Union Ministry?",
          "options": [
            "[A] Ministry of Defence",
            "[B] Ministry of Jal Shakti",
            "[C] Ministry of Earth Sciences",
            "[D] Ministry of External Affairs"
          ],
          "correctAnswer": "Correct Answer: C [Ministry of Earth Sciences]",
          "hint": "Notes:Scientists from Bangladesh and Mauritius joined the Indian research vessel ‘Sagar Nidhi’ for a collaborative oceanic expedition lasting approximately 35 days.\nThe expedition is being organized by the Indian National Centre for Ocean Information Services (INCOIS), operating under the Ministry of Earth Sciences."
        },
        {
          "question": "14. Which Indian Institution is working on the development of a secure signaling system for the Indian Railways, by using block chain technology?",
          "options": [
            "[A] ISRO",
            "[B] DRDO",
            "[C] IIT Kharagpur",
            "[D] Indian Army"
          ],
          "correctAnswer": "Correct Answer: C [IIT Kharagpur]",
          "hint": "Notes:The Indian Institute of Technology – Kharagpur, is working on the development of a secure signaling system for the Indian Railways, utilizing blockchain technology.\nThis tamper-proof system will incorporate advanced safety features and serve as a complement to the existing Data Logger, commonly known as the ‘Black Box,’ used in rolling stock."
        },
        {
          "question": "15. Ramses II, famously known as Ramses the Great was a ruler of which country?",
          "options": [
            "[A] Germany",
            "[B] Egypt",
            "[C] Japan",
            "[D] Greece"
          ],
          "correctAnswer": "Correct Answer: B [Egypt]",
          "hint": "Notes:Recently, Switzerland returned to Egypt a piece of a 3,400-year-old statue belonging to the ancient Egyptian pharaoh Ramses II. The fragment had been stolen over three decades ago.\nRamses II, famously known as Ramses the Great, governed for over six decades in the 13th century BC. Throughout his reign, he achieved significant military triumphs, spearheaded grand construction initiatives, and remarkably fathered a progeny of over 100 offspring."
        },
        {
          "question": "16. Egypt and which country appointed Ambassadors to each others for the first time in a decade?",
          "options": [
            "[A] Turkey",
            "[B] Greece",
            "[C] China",
            "[D] India"
          ],
          "correctAnswer": "Correct Answer: A [Turkey]",
          "hint": "Notes:Egypt and Turkey had appointed Ambassadors to each others’ countries for the first time in a decade.\nThe two nations’ relations broke down in 2013 after Egypt’s then-army chief Abdel Fattah al-Sisi led the ouster of the Muslim Brotherhood’s Mohamed Mursi, an ally of Ankara. Egypt expelled Turkey’s ambassador and accused Ankara of backing organizations bent on undermining the country."
        },
        {
          "question": "17. Which state/UT has launched a basic income scheme for women named ‘Kalaignar Magalir Urimai Thogai’?",
          "options": [
            "[A] West Bengal",
            "[B] Tamil Nadu",
            "[C] Karnataka",
            "[D] Odisha"
          ],
          "correctAnswer": "Correct Answer: B [Tamil Nadu]",
          "hint": "Notes:Tamil Nadu has issued Guidelines for ‘Kalaignar Magalir Urimai Thogai’ scheme. As per the guidelines, women with an annual family income of less than ₹2.5 lakh; family land holding not exceeding 5 acres (wetland) and 10 acres (dryland); and annual household electricity consumption below 3,600 units would be eligible to avail themselves of a monthly aid of Rs 1,000 in Tamil Nadu."
        },
        {
          "question": "18. Bastille Day is the National Day of which country?",
          "options": [
            "[A] Bhutan",
            "[B] Bangladesh",
            "[C] France",
            "[D] USA"
          ],
          "correctAnswer": "Correct Answer: C [France]",
          "hint": "Notes:14th July is celebrated as the Fête Nationale Française, or the National Day in France. It is also known as the Bastille Day.\nFor this year’s celebrations, the Prime Minister of India, Shri Narendra Modi has been invited as the Guest of Honour at the Bastille Day Parade in France."
        },
        {
          "question": "19. What is Leqembi, which is in news recently?",
          "options": [
            "[A] Medication for Alzheimer’s disease",
            "[B] COVID 19 variant",
            "[C] Plant based nutrient",
            "[D] Bio Ethanol variant"
          ],
          "correctAnswer": "Correct Answer: A [Medication for Alzheimer’s disease]",
          "hint": "Notes:The United States Food and Drug Administration (FDA) has approved Leqembi (lecanemab-irmb) which is a medication designed to treat Alzheimer’s disease.\nHowever, this decision raises difficult issues concerning the safety and affordability of the drug."
        },
        {
          "question": "20. As per the recent Finance Ministry report, what is India’s GDP growth for FY 23?",
          "options": [
            "[A] 6.2 per cent",
            "[B] 7.2 per cent",
            "[C] 7.5 per cent",
            "[D] 8.2 per cent"
          ],
          "correctAnswer": "Correct Answer: B [7.2 per cent]",
          "hint": "Notes:Recently, the Finance Ministry unveiled the Annual Economic Review report for May 2023, announcing that India’s GDP growth for FY 23 reached 7.2 percent, exceeding the previously estimated 7 percent from February. The report also highlighted that both consumption and investment have surpassed their levels prior to the pandemic, indicating a positive recovery in the post-pandemic period."
        },
        {
          "question": "21. Emma Reyes, who is known as “godmother” of Latin American art, belonged to which country?",
          "options": [
            "[A] USA",
            "[B] Brazil",
            "[C] Colombia",
            "[D] Equador"
          ],
          "correctAnswer": "Correct Answer: C [Colombia]",
          "hint": "Notes:Emma Reyes, who is known as “godmother” of Latin American was a realism painter and writer from Bogota, Colombia. Her birth anniversary was observed recently on 9th July.\nShe was orphaned at a young age, and she spent much of her childhood in orphanages. Despite these challenges, she realized her dream of becoming successful painter and sculptor."
        },
        {
          "question": "22. Louvre Museum, which was seen in the news, is located in which country?",
          "options": [
            "[A] Russia",
            "[B] Ukraine",
            "[C] France",
            "[D] Germany"
          ],
          "correctAnswer": "Correct Answer: C [France]",
          "hint": "Notes:India is in the final stages of establishing a unique partnership with the renowned Louvre Museum to assist in the design and planning of the proposed new National Museum in the national capital, located on Raisina Hill.\nDuring Prime Minister Narendra Modi’s visit to Paris, an extensive cultural agreement is expected to be signed between the Indian and French governments."
        },
        {
          "question": "23. As per a recent draft notice, Installation of air-conditioning systems has been mandated in the cabins of trucks manufactured from which date?",
          "options": [
            "[A] 1st January 2024",
            "[B] 1st January 2025",
            "[C] 1st January 2026",
            "[D] 1st January 2027"
          ],
          "correctAnswer": "Correct Answer: B [1st January 2025]",
          "hint": "Notes:Recently, the Indian government released a draft notice that requires the installation of air-conditioning systems in truck cabins, manufactured from 1st January 2025 onwards.\nThis step aims to enhance the working environment for truck drivers in India. The Ministry of Road Transport and Highways said installation of air-conditioning system in the cabins of motor vehicles belonging to categories N2 and N3 will be mandatory. The N2 category motor vehicles are goods carriages of 3.5 tons, while N3 exceed 12 tons."
        },
        {
          "question": "24. Who emerged as the female gymnast in the individual all-around competition in the Asian Games selection trials?",
          "options": [
            "[A] Pranati Nayak",
            "[B] Dipa Karmakar",
            "[C] Meghana GundlaPally",
            "[D] Aditi Ashok"
          ],
          "correctAnswer": "Correct Answer: B [Dipa Karmakar]",
          "hint": "Notes:Ace Indian gymnast Dipa Karmakar secured her place in the Asian Games squad, following a 21-month suspension due to a doping violation.\nDipa Karmakar garnered the maximum points to emerge as the number one female gymnast in the individual all-around competition in the Asian Games selection trials at the Kalinga Stadium."
        },
        {
          "question": "25. Which state/UT launched the ‘Gajah Kotha Campaign’?",
          "options": [
            "[A] Madhya Pradesh",
            "[B] West Bengal",
            "[C] Assam",
            "[D] Bihar"
          ],
          "correctAnswer": "Correct Answer: C [Assam]",
          "hint": "Notes:Assam has initiated the ‘Gajah Kotha’ campaign to address the growing issue of human-elephant conflict (HEC) by involving more than 1,200 individuals in promoting coexistence.\nThe campaign focuses on villages in eastern Assam affected by HEC, aiming to educate residents about the behavior, ecology, and cultural significance of elephants in the region while emphasizing the importance of their conservation efforts."
        },
        {
          "question": "26. Which state/UT implements ‘Mukhyamantri Sabha Gruha Scheme’?",
          "options": [
            "[A] Odisha",
            "[B] West Bengal",
            "[C] Bihar",
            "[D] Telangana"
          ],
          "correctAnswer": "Correct Answer: A [Odisha]",
          "hint": "Notes:Odisha announced that it will build 2,000 meeting halls as part of the Mukhyamantri Sabha Gruha Scheme in western Odisha.\nThe state is preparing to face both Assembly and general elections in a year. Chief Minister of Odisha Naveen Patnaik also inaugurated and laid the foundation stones for several projects ₹33.58 crore."
        },
        {
          "question": "27. India is set to co-develop combat aircraft engine and engine for the Indian multi-role helicopter (IMRH) with which country?",
          "options": [
            "[A] Russia",
            "[B] France",
            "[C] USA",
            "[D] Israel"
          ],
          "correctAnswer": "Correct Answer: B [France]",
          "hint": "Notes:India and France will extend their  defence cooperation in advanced aeronautical technologies by supporting the joint development of a combat aircraft engine and an engine for the Indian Multi Role Helicopter (IMRH).\nThe helicopter is being designed and developed by the state-owned Hindustan Aeronautics Limited (HAL)."
        },
        {
          "question": "28. Maputo Protocol, which was seen in the news, is associated with which field?",
          "options": [
            "[A] Human Rights and Women Rights",
            "[B] Climate Change",
            "[C] Labour Rights",
            "[D] Water Resources"
          ],
          "correctAnswer": "Correct Answer: A [Human Rights and Women Rights]",
          "hint": "Notes:The Protocol to the African Charter on Human and Peoples’ Rights on the Rights of Women in Africa, better known as the Maputo Protocol, is an international human rights instrument established by the African Union that went into effect in 2005.\nA report titled ‘20 Years of the Maputo Protocol: Where are we now?’ was released recently. It revealed that there has been some progress on gender equality in Africa due to the Maputo Protocol."
        },
        {
          "question": "29. How many people living with HIV globally were unable to obtain HIV treatment?",
          "options": [
            "[A] 2.2 million",
            "[B] 4.2 million",
            "[C] 7.2 million",
            "[D] 9.2 million"
          ],
          "correctAnswer": "Correct Answer: D [9.2 million]",
          "hint": "Notes:In 2022, approximately 9.2 million individuals who are living with HIV globally were unable to obtain HIV treatment, as stated in the report titled ‘The Path That Ends AIDS’.\nFurthermore, the report highlighted that even among the 2.1 million people who received treatment, a significant number were not able to achieve viral suppression."
        },
        {
          "question": "30. Which breed of fish is used to tackle mosquito-borne diseases?",
          "options": [
            "[A] Rohu",
            "[B] Gambusia",
            "[C] Bangda",
            "[D] Hilsa"
          ],
          "correctAnswer": "Correct Answer: B [Gambusia]",
          "hint": "Notes:Gambusia Fish which is commonly referred to as mosquito fish are widely recognized for their ability to control mosquito larvae and are used as a natural means of mosquito control.\nThe government of Andhra Pradesh has recently introduced around 10 million Gambusia fish into the state’s water reservoirs as a measure to prevent mosquito borne diseases in the state."
        },
        {
          "question": "31. Which continent is recently affected by ‘Cerberus heatwave’?",
          "options": [
            "[A] Asia",
            "[B] Europe",
            "[C] North America",
            "[D] Antarctica"
          ],
          "correctAnswer": "Correct Answer: B [Europe]",
          "hint": "Notes:Europe has been experiencing unusually high temperatures this year both El Nino pattern and Cerberus heatwave. The heat wave is named after a mythical monster by the Italian Meteorological Society.\nThe heatwave is anticipated to persist for few weeks, with temperatures reaching as high as 48°C in Sardinia."
        },
        {
          "question": "32. The International Energy Agency (IEA) in association with which institution has released the “IEA Oil 2023 – Supply and demand dynamics to 2028” report?",
          "options": [
            "[A] Indian Oil Limited",
            "[B] BARC",
            "[C] Petroleum Planning and Analysis Cell",
            "[D] GAIL India Limited"
          ],
          "correctAnswer": "Correct Answer: C [Petroleum Planning and Analysis Cell]",
          "hint": "Notes:The International Energy Agency (IEA) and the Petroleum Planning and Analysis Cell (PPAC) under the Union Ministry of Petroleum and Natural Gas have jointly released a report titled “IEA Oil 2023 – Supply and demand dynamics to 2028”.\nAccording to the report, global oil demand is expected to experience a significant deceleration, nearly reaching a standstill by 2028."
        },
        {
          "question": "33. Where is the Chachin Grazing Festival celebrated?",
          "options": [
            "[A] Assam",
            "[B] Arunachal Pradesh",
            "[C] Uttar Pradesh",
            "[D] Andhra Pradesh"
          ],
          "correctAnswer": "Correct Answer: B [Arunachal Pradesh]",
          "hint": "Notes:The Chachin Grazing Festival is celebrated in the state of Arunachal Pradesh, by local graziers of the Tawang region near Bumla Pass. The 2-day event held this year witnessed participation from grazers all across the Tawang region.\nThe Chachin and other traditional grazing areas near Bumla Pass have played a crucial role in sustaining the local Monpa way of life."
        },
        {
          "question": "34. Which country recently signed accession protocol for the Comprehensive and Progressive Agreement for Trans-Pacific Partnership?",
          "options": [
            "[A] USA",
            "[B] UK",
            "[C] UAE",
            "[D] Israel"
          ],
          "correctAnswer": "Correct Answer: B [UK]",
          "hint": "Notes:U.K. officially signed accession protocol for the Comprehensive and Progressive Agreement for Trans-Pacific Partnership (CPTPP).\nEntry into force of the agreement will take place once the UK and CPTPP Parties have finished their legislative processes."
        },
        {
          "question": "35. Which Tennis player won the Wimbledon men’s single title in 2023?",
          "options": [
            "[A] Novak Djokovic",
            "[B] Rafael Nadal",
            "[C] Carlos Alcaraz",
            "[D] Stephano Tsitsipas"
          ],
          "correctAnswer": "Correct Answer: C [Carlos Alcaraz]",
          "hint": "Notes:Spain’s Carlos Alcaraz defeated seven-time champion Novak Djokovic to claim his first Wimbledon title.\nThe Spaniard wins maiden Wimbledon title and second Grand Slam after US Open. He also ended Novak Djokovic’s hopes of a record-equalling 24th Grand Slam titles."
        },
        {
          "question": "36. Keerthana Pandian, who was seen in the news, plays which sports?",
          "options": [
            "[A] Squash",
            "[B] Snooker",
            "[C] Badminton",
            "[D] Table Tennis"
          ],
          "correctAnswer": "Correct Answer: B [Snooker]",
          "hint": "Notes:Keerthana Pandian defeated fellow Indian Anupama Ramachandran in the final in Riyadh, Saudi Arabia.\nShe emerged as the IBSF World under-21 women’s snooker champion. Bengaluru’s Natasha Chethan clinched a bronze medal. Dhruv Patel was the best performer in the men’s title, who went down in the quarter finals."
        },
        {
          "question": "37. Which state has announced toe establish ‘CM Rise’ schools?",
          "options": [
            "[A] Gujarat",
            "[B] Madhya Pradesh",
            "[C] Maharashtra",
            "[D] Assam"
          ],
          "correctAnswer": "Correct Answer: B [Madhya Pradesh]",
          "hint": "Notes:To ensure the availability of high-quality education, the Madhya Pradesh government has decided to establish 9,000 ‘CM Rise’ schools.\nDuring his visit to Shajapur district, Chief Minister Shivraj Singh Chouhan inaugurated a CM Rise School in Gulana village. He also announced that the school would be dedicated to the renowned jurist and social reformer, Babasaheb Ambedkar."
        },
        {
          "question": "38. What is the brand name of the subsidized chana dal sold by the Ministry of Food and Consumer Affairs?",
          "options": [
            "[A] India Dhal",
            "[B] Bharat Dhal",
            "[C] Janata Dhal",
            "[D] Antyodaya Dhal"
          ],
          "correctAnswer": "Correct Answer: B [Bharat Dhal]",
          "hint": "Notes:Recently, the Minister of Food and Consumer Affairs, Piyush Goyal, initiated the sale of subsidized chana dal under the brand name ‘Bharat Dal’ at a price of Rs 60 per kilogram.\nThis initiative aims to make pulses more accessible and affordable to consumers."
        },
        {
          "question": "39. Which institution unveiled the Techno-Commercial Readiness and Market Maturity Matrix (TCRM Matrix) Framework?",
          "options": [
            "[A] SEBI",
            "[B] NITI Aayog",
            "[C] NASSCOM",
            "[D] BSE"
          ],
          "correctAnswer": "Correct Answer: B [NITI Aayog]",
          "hint": "Notes:The Techno-Commercial Readiness and Market Maturity Matrix (TCRM Matrix) Framework was unveiled by NITI Aayog, aiming to foster innovation and entrepreneurship in India.\nIt is an innovative evaluation tool, has been developed to transform technology assessment, promote innovation, and ignite entrepreneurship in India."
        },
        {
          "question": "40. Which country hosted the Asian Surfing Championship 2023?",
          "options": [
            "[A] India",
            "[B] Maldives",
            "[C] Mauritius",
            "[D] Bangladesh"
          ],
          "correctAnswer": "Correct Answer: B [Maldives]",
          "hint": "Notes:The India surf team, participating for the first time, in the Asian championship has bagged the bronze medal.\nTwo Tamil Nadu youths also broke into the top 10 Asian rankings. As a team, India scored 2,708 points securing the third position, thereby winning the bronze medal. Japan won the gold with 4,450 points."
        },
        {
          "question": "41. Esther Vergeer and Rick Draney, who were seen in the news, are associated with which sports?",
          "options": [
            "[A] Cricket",
            "[B] Tennis",
            "[C] Badminton",
            "[D] Chess"
          ],
          "correctAnswer": "Correct Answer: B [Tennis]",
          "hint": "Notes:Esther Vergeer and Rick Draney are to be inducted into Tennis Hall of Fame. 21-time Grand Slam singles champion and seven-time Paralympic gold medallist, Esther Vergeer began her career in an era when wheelchair tennis was not included in the top events.\nRick Draney, who won 12 singles titles and six in doubles before the Grand Slam era of wheelchair tennis. Draney has been credited with bringing quad tennis — a classification that accounts for impairment in the arms as well — to the Paralympics and other top tournaments."
        },
        {
          "question": "42. Which state hosted the fifth Helicopter and Small Aircraft Summit?",
          "options": [
            "[A] Maharashtra",
            "[B] Madhya Pradesh",
            "[C] Gujarat",
            "[D] Goa"
          ],
          "correctAnswer": "Correct Answer: B [Madhya Pradesh]",
          "hint": "Notes:The 5th Helicopter and Small Aircraft Summit, themed ‘Reaching the Last Mile: Regional Connectivity through Helicopters and Small Aircraft’ took place in Khajuraho, Madhya Pradesh.\nThe event will be jointly organized by the Ministry of Civil Aviation, Government of Madhya Pradesh, Pawan Hans Ltd., and the Federation of Indian Chambers of Commerce and Industry (FICCI)."
        },
        {
          "question": "43. The redeveloped India Trade Promotion Organisation (ITPO) complex was inaugurated in which state/UT?",
          "options": [
            "[A] Gujarat",
            "[B] New Delhi",
            "[C] Uttar Pradesh",
            "[D] West Bengal"
          ],
          "correctAnswer": "Correct Answer: B [New Delhi]",
          "hint": "Notes:Prime Minister has recently inaugurated the redeveloped India Trade Promotion Organisation (ITPO) complex at Pragati Maidan in New Delhi.\nCalled ‘Bharat Mandapam’, the complex is the venue for the G-20 leaders’ meeting in September."
        },
        {
          "question": "44. Which state has unveiled its dedicated Semiconductor Policy (2022-2027)?",
          "options": [
            "[A] Telangana",
            "[B] Gujarat",
            "[C] Odisha",
            "[D] West Bengal"
          ],
          "correctAnswer": "Correct Answer: B [Gujarat]",
          "hint": "Notes:The Gujarat government has unveiled the Semiconductor Policy (2022-2027), becoming ione of the first states in India to introduce a dedicated Semiconductor Policy.\nThe State government has also unveiled an IT/ITES (Information Technology and Information Technology Enabled Services) policy to promote the information technology and semiconductor design domains."
        },
        {
          "question": "45. Which bill has been recently withdrawn by the Union Government from the Lok Sabha",
          "options": [
            "[A] Indian Institutes of Management (Amendment) Bill",
            "[B] DNA Technology (Use and Application) Regulation Bill",
            "[C] Jammu and Kashmir Reorganisation (Amendment) Bill",
            "[D] Cinematograph (Amendment) Bill"
          ],
          "correctAnswer": "Correct Answer: B [DNA Technology (Use and Application) Regulation Bill]",
          "hint": "Notes:Recently, the government withdrew the DNA Technology (Use and Application) Regulation Bill, 2019 from Lok Sabha.\nIt aimed to build a new regulatory framework for the use of DNA fingerprinting technology in the criminal justice system. The Bill, introduced in Parliament multiple times, faced opposition on grounds of the accuracy of DNA technology, potential threats to individual privacy, and the possibility of abuse."
        },
        {
          "question": "46. Which racing driver has won the Hungarian Grand Prix 2023 tournament?",
          "options": [
            "[A] Max Verstappen",
            "[B] Lewis Hamilton",
            "[C] Sergio Pérez",
            "[D] Charles Leclerc"
          ],
          "correctAnswer": "Correct Answer: A [Max Verstappen]",
          "hint": "Notes:Verstappen delivered his Red Bull team a record-breaking 12th consecutive Formula One win as he wins Hungarian Grand Prix.\nVerstappen’s seventh straight win stretched his lead over Perez to 110 points in the championship."
        },
        {
          "question": "47. Which is the first African country to initiate a debt-for-nature swap?",
          "options": [
            "[A] Egypt",
            "[B] South Africa",
            "[C] Gabon",
            "[D] Kenya"
          ],
          "correctAnswer": "Correct Answer: C [Gabon]",
          "hint": "Notes:Recently, Gabon made history as the first African country to initiate a debt-for-nature swap.\nThe country intends to purchase a minimum of USD 450 million of its government debt in exchange for an environmentally sustainable blue bond."
        },
        {
          "question": "48. X-59, also known as the ‘Son of Concorde, is an experimental supersonic aircraft of which country?",
          "options": [
            "[A] Russia",
            "[B] China",
            "[C] USA",
            "[D] UAE"
          ],
          "correctAnswer": "Correct Answer: C [USA]",
          "hint": "Notes:As NASA is gearing up to conduct tests on its latest experimental supersonic aircraft, the X-59, affectionately known as the ‘Son of Concorde,’ there is a serious anticipation for a potential supersonic revival.\nThis advanced aircraft has the potential to traverse any two locations on the globe in just 2 hours, raising hopes for a return of supersonic travel."
        },
        {
          "question": "49. ‘Worldcoin project’, which was seen in the news, is associated with which field?",
          "options": [
            "[A] Sports",
            "[B] Cryptocurrency",
            "[C] Defence",
            "[D] Gender Equality"
          ],
          "correctAnswer": "Correct Answer: B [Cryptocurrency]",
          "hint": "Notes:The ‘Worldcoin project,’ led by OpenAI CEO Sam Altman, has gained worldwide recognition as individuals across the globe participate in eye scans in return for a digital identification and the opportunity to receive free cryptocurrency.\nIt is causing privacy concerns.  Using a device called “Orb,” Worldcoin volunteers known as ‘Orb operators’ scan a person’s iris pattern to collect their biometric data and help them get a World ID through the World app."
        },
        {
          "question": "50. Gulf Stream system, which was seen in the news, is a system of ocean currents that circulates water within which Ocean?",
          "options": [
            "[A] Pacific Ocean",
            "[B] Atlantic Ocean",
            "[C] Indian Ocean",
            "[D] Arctic Ocean"
          ],
          "correctAnswer": "Correct Answer: B [Atlantic Ocean]",
          "hint": "Notes:The AMOC is a system of ocean currents that circulates water within the Atlantic Ocean, bringing warm water north and cold water south.\nAccording to a recent study, there are indications that the Gulf Stream system, also referred to as the Atlantic Meridional Overturning Circulation (Amoc), could experience a collapse by 2025, leading to severe climate consequences."
        }
      ],
      "type": "current-affairs-quiz-july-2023",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "65166dd91634489240c293c6"
      },
      "data": [
        {
          "question": "1. Khongsang railway station, which was seen in the news, is located in which state?",
          "options": [
            "[A] Manipur",
            "[B] Assam",
            "[C] Sikkim",
            "[D] Arunachal Pradesh"
          ],
          "correctAnswer": "Correct Answer: A [Manipur]",
          "hint": "Notes:The Northeast Frontier (NF) Railway in association with the state’s transport department dispatched the first goods trains carrying food grains and essential commodities to Khongsang railway station at Manipur from Guwahati.\nKhongsang is the latest station which was commissioned in 2022 in the Jiribam-Imphal new line project. The first direct passenger train service namely ‘Jan Shatabdi Express’ was earlier inaugurated between Tripura’s Agartala and Khongsang ."
        },
        {
          "question": "2. Muhammad Yunus, the Nobel laureate who was seen in the news, is from which country?",
          "options": [
            "[A] India",
            "[B] Pakistan",
            "[C] Bangladesh",
            "[D] Sri Lanka"
          ],
          "correctAnswer": "Correct Answer: C [Bangladesh]",
          "hint": "Notes:In Bangladesh, the appellate division of the Supreme Court ordered Nobel laureate Muhammad Yunus to pay 12 crore Taka (USD 1.1 million) tax.\nDr. Yunus has donated money to three of his own trusts namely: Dr. Mohammad Yunus Trust, Yunus Family Trust, And Yunus Centre Trust. Income Tax Authorities in Bangladesh imposed a tax on Money donated to these three trusts."
        },
        {
          "question": "3. Which state hosted the awareness program named ‘Anu Awareness Yatra – 2023’?",
          "options": [
            "[A] Tamil Nadu",
            "[B] Kerala",
            "[C] Andhra Pradesh",
            "[D] West Bengal"
          ],
          "correctAnswer": "Correct Answer: A [Tamil Nadu]",
          "hint": "Notes:An awareness program named “Anu Awareness Yatra – 2023” with the theme of ‘Atoms in the service of the nation’ was launched at Indira Gandhi Centre for Atomic Research (IGCAR), Kalpakkam.\nIt is organised in association with the National Council of Science Museum (NCSM), Ministry of Culture, Government of India, Vigyan Bharathi – Arivial Sangam, Tamil Nadu and Indian Association for Radiation Protection."
        },
        {
          "question": "4. Pedro Sanchez was formally named caretaker Prime Minister of which country?",
          "options": [
            "[A] Spain",
            "[B] Ukraine",
            "[C] Russia",
            "[D] France"
          ],
          "correctAnswer": "Correct Answer: A [Spain]",
          "hint": "Notes:Pedro Sanchez was formally named Spain’s caretaker Prime Minister of an interim government.\nThe interim government that will remain in place until Spain resolves the political uncertainty that emerged from the inconclusive elections. If the political deadlock is not resolved in the coming months, Spain will likely have to hold a repeat election."
        },
        {
          "question": "5. Which city hosted the ‘National Conference on ‘Moving Mental Health Beyond Institutions’?",
          "options": [
            "[A] Mumbai",
            "[B] Pune",
            "[C] New Delhi",
            "[D] Mysuru"
          ],
          "correctAnswer": "Correct Answer: C [New Delhi]",
          "hint": "Notes:The National Conference on ‘Moving Mental Health Beyond Institutions’ was inaugurated recently in New Delhi.\nThe main purpose of the conference is to address the difficulties faced during the execution of the Mental Healthcare Act, 2017, and to engage in thoughtful discussions about the future steps to resolve mental health concerns."
        },
        {
          "question": "6. Which state implements the ‘Mukhyamantri Ladli Behna Yojana’?",
          "options": [
            "[A] Uttar Pradesh",
            "[B] Madhya Pradesh",
            "[C] Gujarat",
            "[D] Assam"
          ],
          "correctAnswer": "Correct Answer: B [Madhya Pradesh]",
          "hint": "Notes:Under ‘Mukhyamantri Ladli Behna Yojana’, underprivileged women between 23 and 60 years were eligible for ₹1,000 every month.\nHowever, after distributing two instalments the government decided that those completing 21 years from January this year would also be included. They should be married and fulfil the other existing eligibility criteria."
        },
        {
          "question": "7. Which is the headquarters of the ‘Asia Pacific Telecommunity (APT)’?",
          "options": [
            "[A] Bangkok",
            "[B] Singapore",
            "[C] New Delhi",
            "[D] Colombo"
          ],
          "correctAnswer": "Correct Answer: A [Bangkok]",
          "hint": "Notes:The Asia Pacific Telecommunity was founded on the joint initiatives of the United Nations Economic and Social Commission for Asia and the Pacific, and the International Telecommunication Union.\nAn important gathering of the Asia Pacific Telecommunity (APT) is set to take place in Brisbane, with the primary objective of determining the future allocation of the 6 GHz spectrum band for 5G services in India."
        },
        {
          "question": "8. Which country has launched the ‘Young Professional Scheme’ for visas to Indians aged between 18 and 30?",
          "options": [
            "[A] USA",
            "[B] UK",
            "[C] Australia",
            "[D] Canada"
          ],
          "correctAnswer": "Correct Answer: B [UK]",
          "hint": "Notes:The British government has opened its second ballot under the UK-India Young Professional Scheme. This is a scheme for Indians aged between 18 and 30 years with graduate-level qualifications for visas to the United Kingdom.\nIt offers eligible young Indians the opportunity to live, work or study in UK for up to two years. This joint scheme between UK and India was formally launched this year in February. This scheme will enable candidates to enter the UK at any time while their visa is valid and leave or return anytime during their stay."
        },
        {
          "question": "9. What is the total tiger population of India in 2022?",
          "options": [
            "[A] 2682",
            "[B] 3682",
            "[C] 4682",
            "[D] 5682"
          ],
          "correctAnswer": "Correct Answer: A [2682]",
          "hint": "Notes:India’s tiger population increased to 3,682 in 2022, up from 2,967 in 2018, according to an estimate released recently.\nThis is an upward revision from April this year, when a minimum of 3,167 animals were estimated by the Wildlife Institute of India (WII)."
        },
        {
          "question": "10. Which Union Ministry has set up a working group to decriminalise laws to further promote ease of doing business?",
          "options": [
            "[A] Ministry of Finance",
            "[B] Ministry of MSME",
            "[C] Ministry of Commerce and Industry",
            "[D] Ministry of Corporate Affairs"
          ],
          "correctAnswer": "Correct Answer: C [Ministry of Commerce and Industry]",
          "hint": "Notes:The Ministry of Commerce and Industry has set up a working group to decriminalise laws to further promote ease of doing business.\nThe group comprised representatives from industry associations, business chambers, legal professionals, and officials of seven ministries. It would also have representatives of the National Housing Bank, NABARD and CPCB."
        },
        {
          "question": "11. ‘Rocket Force’ is the strategic and tactical missile force of which country?",
          "options": [
            "[A] Ukraine",
            "[B] China",
            "[C] Russia",
            "[D] Germany"
          ],
          "correctAnswer": "Correct Answer: B [China]",
          "hint": "Notes:The Rocket Force of China’s People’s Liberation Army is responsible for the strategic and tactical missile operations and is tasked with managing the nation’s nuclear arsenal.\nRecently, China introduced fresh leadership for its Rocket Force, appointing new officials to replace the two previous generals who were in charge of the country’s missile forces."
        },
        {
          "question": "12. Which institution has developed a Point-Of-Care Testing (POCT) prototype to detect the UTI-causing bacteria?",
          "options": [
            "[A] IIT Madras",
            "[B] IIT Guwahati",
            "[C] NIV",
            "[D] AIIMS"
          ],
          "correctAnswer": "Correct Answer: B [IIT Guwahati]",
          "hint": "Notes:UTI (Urinary Tract Infection) is a health problem globally, including India, and is particularly common in females, especially during pregnancy.\nThe Point-Of-Care Testing (POCT) prototype developed at IIT Guwahati, is a photodetector that detects and quantifies a UTI-causing bacteria called ‘Klebsiella pneumoniae’ within five minutes from a patient’s urine sample."
        },
        {
          "question": "13. Which country has organised the ‘Ocean Shield-2023’ in the Baltic Sea?",
          "options": [
            "[A] Russia",
            "[B] Ukraine",
            "[C] USA",
            "[D] Japan"
          ],
          "correctAnswer": "Correct Answer: A [Russia]",
          "hint": "Notes:Ocean Shield-2023 exercises are live-fire naval exercises carried out in the Baltic Sea by Russia.\nDrill involves over 30 military vessels and boats, 20 support vessels, 30 naval aviation and Aerospace Forces of Russia aircraft, and about 6,000 troops."
        },
        {
          "question": "14. The Mines and Minerals Amendment Bill, which was passed, allows private sector to mine how many minerals?",
          "options": [
            "[A] Two",
            "[B] Four",
            "[C] Six",
            "[D] Ten"
          ],
          "correctAnswer": "Correct Answer: C [Six]",
          "hint": "Notes:The Rajya Sabha passed the Mines and Minerals (Development and Regulation) Amendment Bill, 2023, allowing the private sector to mine six atomic minerals, including lithium, as well as deep-seated minerals like gold and silver.\nIn the past, the mining and exploration of all 12 atomic minerals were exclusively reserved for state-owned entities."
        },
        {
          "question": "15. Which country signed the Communication Interoperability and Security Memorandum of Agreement (CIS-MOA) with the U.S.?",
          "options": [
            "[A] Russia",
            "[B] Pakistan",
            "[C] China",
            "[D] Papua New Guinea"
          ],
          "correctAnswer": "Correct Answer: B [Pakistan]",
          "hint": "Notes:Pakistan’s Cabinet has approved the signing of a new security pact with the U.S., a move that indicates a fresh start in defence cooperation after years of distrust between the two nations and may open avenues for Islamabad to get military hardware from Washington.\nThrough a circulation summary, the Cabinet gave its seal of approval to sign the Communication Interoperability and Security Memorandum of Agreement, known as the CIS-MOA, between Pakistan and the U.S."
        },
        {
          "question": "16. ‘Red admiral’ belongs to which species?",
          "options": [
            "[A] Honey Bee",
            "[B] Butterfly",
            "[C] Spider",
            "[D] Gecko"
          ],
          "correctAnswer": "Correct Answer: B [Butterfly]",
          "hint": "Notes:The red admiral, a familiar butterfly in British and Irish gardens, is actually a migrant species from Europe and North Africa.\nThis year, experts have observed a higher number of red admirals staying in southern England during the winter, resulting in increased sightings."
        },
        {
          "question": "17. Which state launched the ‘Gruha Jyothi scheme’?",
          "options": [
            "[A] Kerala",
            "[B] Karnataka",
            "[C] Odisha",
            "[D] Madhya Pradesh"
          ],
          "correctAnswer": "Correct Answer: B [Karnataka]",
          "hint": "Notes:The Karnataka government launched the Gruha Jyothi free power scheme, which aims to provide free electricity up to 200 units for every household in the state. About 2.14 crore households will get benefited from the Gruha Jyothi scheme.\nAround 1.41 crore have already registered for the scheme.  Applications have also been invited for the Griha Laxmi scheme under under which Rs 2,000 allowance will be given for all woman heads of BPL families."
        },
        {
          "question": "18. Finance Ministry imposed anti-dumping duty on which product imports from China, South Korea and Indonesia?",
          "options": [
            "[A] Optical Fibre",
            "[B] Electronic products",
            "[C] Medical Devices",
            "[D] Plastic Toys"
          ],
          "correctAnswer": "Correct Answer: A [Optical Fibre]",
          "hint": "Notes:The Finance Ministry has imposed anti-dumping duty on certain optical fibre imports from China, South Korea and Indonesia, based on the recommendations of the Directorate General of Trade Remedies (DGTR).\nIt aims to give relief to the domestic optical fibre industry reeling under the adverse impact of low-price and low-quality imports."
        },
        {
          "question": "19. Which Indian chess player overtook Viswanathan Anand as the highest-rated Indian chess player in FIDE rankings?",
          "options": [
            "[A] Praggnananda",
            "[B] Gukesh",
            "[C] Arjun Erigaisi",
            "[D] Nihal Sarin"
          ],
          "correctAnswer": "Correct Answer: B [Gukesh]",
          "hint": "Notes:Grandmaster D. Gukesh overtook Viswanathan Anand as the highest-rated Indian chess player in FIDE rankings. He is the second-youngest Grandmaster (GM) globally and the youngest Indian to achieve this feat.\nGukesh became the number one chess player in India after posting a win against Misratdin Iskandarov of Azerbaijan in the World Cup in Baku, Azerbaijan."
        },
        {
          "question": "20. Which Union Ministry organised the ‘Digital India RISC-V’ Symposium?",
          "options": [
            "[A] Ministry of Home Affairs",
            "[B] Ministry of Electronics and IT",
            "[C] Ministry of Science and Technology",
            "[D] Ministry of MSME"
          ],
          "correctAnswer": "Correct Answer: B [Ministry of Electronics and IT]",
          "hint": "Notes:‘Digital India RISC-V’ Symposium is set to be organized by IIT Madras and IIT-M Pravartak Technologies Foundation and the Ministry of Electronics and Information Technology.\nIt was organized to showcase the ‘The future of Electronics in India through the RISC-V pathway’. Digital India RISC-V Microprocessor (DIR-V) Programme was launched with an aim to create Microprocessors for the future in India."
        },
        {
          "question": "21. Which country’s researchers achieved net energy gain in a nuclear fusion reaction for the second time?",
          "options": [
            "[A] China",
            "[B] USA",
            "[C] India",
            "[D] Israel"
          ],
          "correctAnswer": "Correct Answer: B [USA]",
          "hint": "Notes:American researchers have achieved net energy gain in a nuclear fusion reaction for the second time, following a significant accomplishment in December 2022.\nThis achievement is considered a significant advancement in the journey towards harnessing a nearly boundless, secure, and environmentally friendly energy resource."
        },
        {
          "question": "22. Which state granted 32% quota for tribals in schools?",
          "options": [
            "[A] Madhya Pradesh",
            "[B] Gujarat",
            "[C] Chhattisgarh",
            "[D] Jharkhand"
          ],
          "correctAnswer": "Correct Answer: C [Chhattisgarh]",
          "hint": "Notes:Chhattisgarh state cabinet decided that the admission process in educational institutions would be completed under the existing system of 58% reservation instead of the previous 50% roster.\nThe Supreme Court passed an order, which stayed a high court decision that invalidated a 2012 state government order to implement a 58% reservation in government job appointments and admissions in educational institutions."
        },
        {
          "question": "23. India’s Defence Ministry has decided to replace Microsoft Operating System with which Operating system?",
          "options": [
            "[A] Maya",
            "[B] macOS",
            "[C] Kuku",
            "[D] Haiku"
          ],
          "correctAnswer": "Correct Answer: A [Maya]",
          "hint": "Notes:India’s Defence Ministry has decided to replace Microsoft Operating System (OS) in all its computers that can connect to the Internet with Maya.\nMaya, which has been developed by Indian government agencies within six months, and is aimed at preventing malware attacks by cybercriminals. The new OS will be backed by a protection system called Chakravyuh."
        },
        {
          "question": "24. Who became the fastest Indian cricketer to clinch 50 wickets in T20 Internationals?",
          "options": [
            "[A] Jasprit Bumrah",
            "[B] R Ashwin",
            "[C] Kuldeep Yadav",
            "[D] Ravindra Jadeja"
          ],
          "correctAnswer": "Correct Answer: C [Kuldeep Yadav]",
          "hint": "Notes:Left-arm spinner Kuldeep Yadav became the fastest Indian to clinch 50 wickets in T20 Internationals in terms of number of matches played.\nKuldeep achieved the feat in his 30th T20I match for India, surpassing teammate Yuzvendra Chahal, who had 50 T20I wickets in 34 games."
        },
        {
          "question": "25. Rajouri Chikri woodcraft, which was seen in the news, is associated with which state/UT?",
          "options": [
            "[A] Karnataka",
            "[B] Jammu and Kashmir",
            "[C] Goa",
            "[D] Himachal Pradesh"
          ],
          "correctAnswer": "Correct Answer: B [Jammu and Kashmir]",
          "hint": "Notes:Two products from Jammu and Kashmir’s Rajouri and Anantnag districts—the Rajouri Chikri woodcraft and the Mushqbudji rice variety—have earned the coveted Geographical Indication (GI) tags.\nWith its honey-toned appearance and smooth, refined texture, Chikri wood is found in the mountainous regions of the Jammu province."
        },
        {
          "question": "26. Which city is the host of the ‘National Conference on Nalanda Buddhism’?",
          "options": [
            "[A] Guwahati",
            "[B] Patna",
            "[C] Leh",
            "[D] Shillong"
          ],
          "correctAnswer": "Correct Answer: C [Leh]",
          "hint": "Notes:The Indian Himalayan Council of Nalanda Buddhist Tradition (IHCNBT) hosted the National Conference on Nalanda Buddhism in Leh, Ladakh.\nThe conference covers three main topics: first, exploring the origins of Nalanda Buddhism by following the paths of the Nalanda Masters/; second, delving into the history and philosophy of the four prominent traditions: Nyingma, Sakya, Kagyud, and Geluk; and third, addressing the challenges and responses of Nalanda Buddhism in the 21st century."
        },
        {
          "question": "27. Which company owns the ‘Icon of the Seas’, the world’s cruise vessel?",
          "options": [
            "[A] Royal Caribbean",
            "[B] Mediterranean Shipping Company",
            "[C] Maersk",
            "[D] COSCO"
          ],
          "correctAnswer": "Correct Answer: A [Royal Caribbean]",
          "hint": "Notes:The ‘Icon of the Seas’, set to be the world’s largest cruise ship, is nearing completion at a Finnish shipyard in Turku.\nThis grand vessel, owned by Royal Caribbean, is scheduled for its maiden voyage in January 2024. The passenger volume is expected to surpass pre-pandemic levels with 31.5 million passengers in 2023."
        },
        {
          "question": "28. Which institution will fund the project for integrated urban flood management for Chennai basin?",
          "options": [
            "[A] World Bank",
            "[B] AIIB",
            "[C] Union Home Ministry",
            "[D] NABARD"
          ],
          "correctAnswer": "Correct Answer: C [Union Home Ministry]",
          "hint": "Notes:The Disaster Management Division of the Union Ministry of Home Affairs will fund the project for integrated urban flood management for Chennai basin. The estimated project cost is Rs.189 crore.\nThe project involves re-establishment of surplus canals for erstwhile minor irrigation tanks in the city. The projects also include installation of software for remote operation of the surplus regulators during emergency and water supply regulators in the city reservoirs."
        },
        {
          "question": "29. Where was the Amazon Summit 2023 held?",
          "options": [
            "[A] Brazil",
            "[B] Chile",
            "[C] Argentina",
            "[D] Mexico"
          ],
          "correctAnswer": "Correct Answer: A [Brazil]",
          "hint": "Notes:This year’s Amazon Summit was held in the Brazilian city of Belém, in which the Amazon nations discussed how the rainforest is managed.\nOn the final day of the summit, 12 countries have called on wealthy nations to meet their climate funding obligations. A joint statement issued during the summit, called for the development of a financing mechanism which the international community could pay for the critical services provided by forests."
        },
        {
          "question": "30. Which country is the host of Malabar 2023 multilateral naval exercise?",
          "options": [
            "[A] India",
            "[B] Australia",
            "[C] UAE",
            "[D] Sri Lanka"
          ],
          "correctAnswer": "Correct Answer: B [Australia]",
          "hint": "Notes:The multilateral naval exercise Malabar 2023 commenced at Sydney in Australia. Indian Navy’s indigenous frontline warships INS Sahyadri and INS Kolkata is participating in the 11-day event.\nShips and aircraft from the US Navy, Japan Maritime Self Defence Force and the Royal Australian Navy are also participating in the exercise. MALABAR series of maritime exercise commenced in 1992 as a bilateral exercise between Indian Navy and US Navy."
        },
        {
          "question": "31. Which country issued nearly USD 9.6 billion in sukuk after buyback?",
          "options": [
            "[A] Saudi Arabia",
            "[B] Israel",
            "[C] Iran",
            "[D] Afghanistan"
          ],
          "correctAnswer": "Correct Answer: A [Saudi Arabia]",
          "hint": "Notes:Saudi Arabia issued nearly USD 9.6 billion in local sukuk following early redemptions. The Sukuk that underwent early redemption were originally scheduled to mature in 2024, 2025, and 2026.\nThe buyback represents the largest early purchase transaction arranged by National Debt Management Center (NDMC)."
        },
        {
          "question": "32. Bindeshwar Pathak, who passed away recently, was associated with which field?",
          "options": [
            "[A] Politics",
            "[B] Social Work",
            "[C] Sports",
            "[D] Science"
          ],
          "correctAnswer": "Correct Answer: B [Social Work]",
          "hint": "Notes:Sulabh International founder, Padma Bhushan recipient, and social worker Bindeshwar Pathak passed away at the age of 80.\nPathak was the founder of Sulabh International, an India-based social service organisation which works to promote human rights, environmental sanitation, waste management and reforms through education. He was credited with bringing in the revolutionary Sulabh Complex public toilet system to India."
        },
        {
          "question": "33. Karnail Singh Isru, who was seen in the news, was a social activist from which state?",
          "options": [
            "[A] Punjab",
            "[B] Gujarat",
            "[C] Kerala",
            "[D] Sikkim"
          ],
          "correctAnswer": "Correct Answer: A [Punjab]",
          "hint": "Notes:On India’s Independence Day this year, Punjab Chief Minister Bhagwant Mann paid his tributes to the late activist Karnail Singh Isru, who died on the same day in 1955 while participating in the Goa Liberation Movement for the state’s accession to India.\nIsru was born on September 9, 1930, in the Chak 30 village which is now in Pakistan. Isru, along with satyagrahis, participated in a march from Pune to Goa in 1955 at a time when the state was under Portugese colonial rule."
        },
        {
          "question": "34. Mohit Kumar and Priya, who were seen in the news, are associated with which sports?",
          "options": [
            "[A] Shooting",
            "[B] Wrestling",
            "[C] Boxing",
            "[D] Tennis"
          ],
          "correctAnswer": "Correct Answer: B [Wrestling]",
          "hint": "Notes:Mohit Kumar became the first Indian wrestler to become a junior world champion since 2019 after edging Russia’s Eldar Akhmadudinov in the 61kg final, in the World under-20 championships.\nPriya (women’s 76kg) earned another gold medal for the country and became the country’s only second woman grappler to grab the title."
        },
        {
          "question": "35. ‘Luna-25’ is the Lunar Mission of which country?",
          "options": [
            "[A] Israel",
            "[B] UAE",
            "[C] Japan",
            "[D] Russia"
          ],
          "correctAnswer": "Correct Answer: D [Russia]",
          "hint": "Notes:Russia’s first lunar mission in nearly five decades, Luna-25, crashed into Moon a day after it had spun into uncontrolled orbit.\nThe lunar mission was Russia’s first since 1976, when it was part of the Soviet Union. Only three governments have managed successful moon landings: the Soviet Union, the United States and China."
        },
        {
          "question": "36. Which Union Ministry unveiled the ‘Wedding Tourism Campaign’?",
          "options": [
            "[A] Ministry of Tourism",
            "[B] Ministry of Culture",
            "[C] Ministry of External Affairs",
            "[D] Ministry of Home Affairs"
          ],
          "correctAnswer": "Correct Answer: A [Ministry of Tourism]",
          "hint": "Notes:Ministry of Tourism unveiled an ambitious campaign aimed at showcasing India as a premier wedding destination on the global stage.\nThis campaign seeks to explore avenues of great potential, for scaling tourism in India to new heights. The campaign seeks to expand India’s wedding industry, by enticing couples from around the world to celebrate their special day in India."
        },
        {
          "question": "37. Tenerife, which was seen in the news, is located in which country?",
          "options": [
            "[A] Spain",
            "[B] Australia",
            "[C] Philippines",
            "[D] Indonesia"
          ],
          "correctAnswer": "Correct Answer: A [Spain]",
          "hint": "Notes:A wildfire on the Spanish island of Tenerife that has forced thousands of people to flee their homes remained out of control.\nMore than 26,000 people have been evacuated. It covered an area of over 8,000 hectares with a perimeter of 70 km, spreading from 5,000 hectares and a perimeter of 50 km."
        },
        {
          "question": "38. What is the share provided by the Centre in implementation of projects under “North East Special Infrastructure Development Scheme” (NESIDS)?",
          "options": [
            "[A] 100%",
            "[B] 75%",
            "[C] 50%",
            "[D] 25%"
          ],
          "correctAnswer": "Correct Answer: A [100%]",
          "hint": "Notes:The North East Special Infrastructure Development Scheme” (NESIDS) is a Central Sector Scheme on launched in 2017, under which 100% centrally funding is provided to the State Governments of North Eastern Region for the projects of physical infrastructure.\nRecently, the continuation of the NESIDS with an approved by the cabinet, for the period from 2022-23 till 2025-26 at an outlay of Rs.8139.50 crore."
        },
        {
          "question": "39. Indian banking system liquidity slipped into a deficit in which month of 2023?",
          "options": [
            "[A] April",
            "[B] May",
            "[C] July",
            "[D] August"
          ],
          "correctAnswer": "Correct Answer: D [August]",
          "hint": "Notes:Indian banking system liquidity slipped into a deficit in which month of August since end-March, as the Reserve Bank of India’s (RBI) temporary liquidity withdrawal and tax outflows impacted banks’ funding.\nBanking system liquidity stood at a deficit of 236 billion rupees ($2.84 billion) as of Aug. 21, according to RBI data. Liquidity surplus had hit a 13-month high of 2.8 trillion rupees at the start of the month, which has been dropping since then."
        },
        {
          "question": "40. Honey Dabas and Rahul Jograjiya, who recently first medals for India, play which sports?",
          "options": [
            "[A] Archery",
            "[B] Powerlifting",
            "[C] Tennis",
            "[D] Badminton"
          ],
          "correctAnswer": "Correct Answer: B [Powerlifting]",
          "hint": "Notes:Indian powerlifters, Honey Dabas and Rahul Jograjiya, clinched gold and silver medals respectively on the opening day of the World Para Powerlifting Championships in Dubai.\nThese Medals are historic for India as these are the first ever Gold and Silver for India in any World Championships."
        },
        {
          "question": "41. Where was the Joint Group of Customs (JGC) meeting between India and Bangladesh, held recently?",
          "options": [
            "[A] New Delhi",
            "[B] Dhaka",
            "[C] Mumbai",
            "[D] Kolkata"
          ],
          "correctAnswer": "Correct Answer: A [New Delhi]",
          "hint": "Notes:The 14th Joint Group of Customs (JGC) meeting between India and Bangladesh was held in New Delhi on 21st and 22nd August. During the meeting, India and Bangladesh reaffirmed their commitment to bolstering customs cooperation and streamlining cross-border trade\nA set of bilateral issues like opening of new land customs stations, easing port restrictions, development of road and rail infrastructure and pre-arrival exchange of customs data were deliberated during the event."
        },
        {
          "question": "42. Which institution has forecasted India’s GDP growth at 8.3 per cent for April-June quarter?",
          "options": [
            "[A] CRISIL",
            "[B] World Bank",
            "[C] IMF",
            "[D] State Bank of India"
          ],
          "correctAnswer": "Correct Answer: D [State Bank of India]",
          "hint": "Notes:The India’s largest lender State Bank of India has made a AI based model using Artificial Neural Network (ANN) with 30 high frequency indicators, using which the Bank has forecasted India’s GDP growth for the April -June quarter at 8.3 per cent.\nThis is higher than the projection made by the Monetary Policy Committee’s projection of 8 per cent. The projection report has listed good growth in manufacturing and picking up of services as reasons for higher growth."
        },
        {
          "question": "43. India signed the Standard Operating Procedure (SOP) for exchange of White Shipping Information with which country?",
          "options": [
            "[A] Sri Lanka",
            "[B] France",
            "[C] Bangladesh",
            "[D] Philippines"
          ],
          "correctAnswer": "Correct Answer: D [Philippines]",
          "hint": "Notes:Admiral R Hari Kumar, Chief of the Naval Staff and Commandant of Philippine Coast Guard signed the Standard Operating Procedure (SOP) for exchange of White Shipping Information.\nThe signing of the SOP between Philippine Coast Guard and Indian Navy would facilitate operationalization of information exchange on merchant shipping traffic, which will contribute to enhanced maritime safety and security in the region."
        },
        {
          "question": "44. Hogfish, which was seen in the news, is native to which region?",
          "options": [
            "[A] Indian Ocean",
            "[B] South Pacific Ocean",
            "[C] Western Atlantic Ocean",
            "[D] Arctic Ocean"
          ],
          "correctAnswer": "Correct Answer: C [Western Atlantic Ocean]",
          "hint": "Notes:The hogfish is a species of wrasse, native to the Western Atlantic Ocean, living in a range from Nova Scotia, Canada, to northern South America, including the Gulf of Mexico.\nA new study has suggested that hogfish don’t just see with their eyes, they also see with their skin. Hogfish known for its colour-changing skin, can morph from white to mottled to reddish-brown in a matter of milliseconds to blend in with corals, sand or rocks. They have light-sensing skin or skin vision, which helps them to see surroundings."
        },
        {
          "question": "45. Which country has suggested the creation of a BRICS space consortium?",
          "options": [
            "[A] India",
            "[B] China",
            "[C] Brazil",
            "[D] Russia"
          ],
          "correctAnswer": "Correct Answer: A [India]",
          "hint": "Notes:Prime Minister Narendra Modi suggested the creation of a BRICS space consortium, hours before India’s Chandrayaan-3 spacecraft landed near the moon’s south pole.\nBrazil’s President called for the BRICS nations to create a common currency for trade and investment between each other."
        },
        {
          "question": "46. Which country’s Prime Minister was granted the ‘Grand Cross of the Order of Honour’ by Greece in 2023?",
          "options": [
            "[A] China",
            "[B] USA",
            "[C] Ukraine",
            "[D] India"
          ],
          "correctAnswer": "Correct Answer: D [India]",
          "hint": "Notes:The President of Greece, Katerina Sakellaropoulou conferred Indian Prime Minister Narendra Modi with The Grand Cross of the Order of Honour. The Order of Honour was established in 1975.\nThe Honour is conferred by the President of Greece to Prime Ministers and eminent personalities who by reason of their distinguished position, have contributed to enhancing the stature of Greece."
        },
        {
          "question": "47. Ministry of Defence signed 19,000 crore contract with which company for five Fleet Support Ships for Indian Navy?",
          "options": [
            "[A] Hindustan Shipyard Limited",
            "[B] Cochin Shipyard Limited",
            "[C] Garden Reach Shipbuilders &amp; Engineers",
            "[D] Mazagon Dock Shipbuilders"
          ],
          "correctAnswer": "Correct Answer: A [Hindustan Shipyard Limited]",
          "hint": "Notes:Ministry of Defence signed a contract with Hindustan Shipyard Limited (HSL), Visakhapatnam for acquisition of five Fleet Support Ships (FSS) for the Indian Navy at an overall cost of Rs 19,000 crore. It would be a major boost towards achieving the goal of self-reliance in defence manufacturing as these ships will be indigenously designed and constructed by HSL, Visakhapatnam."
        },
        {
          "question": "48. India and which country upgraded their relations to a strategic partnership recently?",
          "options": [
            "[A] UAE",
            "[B] Maldives",
            "[C] Greece",
            "[D] Thailand"
          ],
          "correctAnswer": "Correct Answer: C [Greece]",
          "hint": "Notes:India and Greece upgraded their relations to a strategic partnership and pledged to double two-way trade by 2030 during Prime Minister Narendra Modi’s visit.\nThis is the first by an Indian premier to the European country in four decades. The two sides further decided to speedily finalise a mobility and migration partnership agreement to facilitate skilled migration."
        },
        {
          "question": "49. Which country emerged as the champions of the inaugural Women’s Asian Hockey 5s World Cup Qualifier?",
          "options": [
            "[A] India",
            "[B] Malaysia",
            "[C] China",
            "[D] South Korea"
          ],
          "correctAnswer": "Correct Answer: A [India]",
          "hint": "Notes:In the finals held in Salalah (Oman), India’s women’s hockey team secured a 7-2 victory against Thailand, emerging as the champions of the inaugural Women’s Asian Hockey 5s World Cup Qualifier.\nWith this win, India has also earned their spot in the World Cup set to take place in Muscat from January 24-27 next year."
        },
        {
          "question": "50. Which state implements the ‘shasan aplya dari’ (government at your doorstep) drive?",
          "options": [
            "[A] Maharashtra",
            "[B] West Bengal",
            "[C] Assam",
            "[D] Gujarat"
          ],
          "correctAnswer": "Correct Answer: A [Maharashtra]",
          "hint": "Notes:Maharashtra Chief Minister Eknath Shinde said 1.5 crore people in the state have benefitted from the ‘shasan aplya dari’ (government at your doorstep) drive and CM’s Relief Fund.\nThe state has so far distributed 22,000 tractors and 22,50 rotavators (rotary tillers) to farmers. Around 4 lakh people have received Rs 1,351 crore under various schemes."
        }
      ],
      "type": "current-affairs-quiz-august-2023",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "65166dde1634489240c293c8"
      },
      "data": [
        {
          "question": "1. What is the transaction limit for small value digital payments in offline mode, as of September 2023?",
          "options": [
            "[A] Rs 1000",
            "[B] Rs 500",
            "[C] Rs 200",
            "[D] Rs 100"
          ],
          "correctAnswer": "Correct Answer: B [Rs 500]",
          "hint": "Notes:The Reserve Bank of India (RBI) has announced to enhance transaction limits for small value digital payments in offline mode to ₹500 from the earlier cap of ₹200.\nThese can be made using any channel or instruments such as cards, wallets, mobile devices in face-to-face mode only. Although the upper limit of an offline payment transaction shall be ₹500, the total limit on a payment instrument will be ₹2,000 at any point in time."
        },
        {
          "question": "2. When is the National Sports Day celebrated in India?",
          "options": [
            "[A] August 21",
            "[B] August 23",
            "[C] August 25",
            "[D] August 29"
          ],
          "correctAnswer": "Correct Answer: D [August 29]",
          "hint": "Notes:Every year on August 29, India celebrates National Sports Day to commemorate the birth anniversary of hockey legend Major Dhyan Chand.\nIt is also called Rashtriya Khel Divas. The day is dedicated to the country’s sports heroes and champions for their contribution and dedication towards bringing pride to the nation. It aims to raise awareness about the values of sports."
        },
        {
          "question": "3. Shinon Meeras, a centre showcasing the history of Dard-Shina tribes, was opened in which state/UT?",
          "options": [
            "[A] Jammu and Kashmir",
            "[B] Maharashtra",
            "[C] Goa",
            "[D] Jharkhand"
          ],
          "correctAnswer": "Correct Answer: A [Jammu and Kashmir]",
          "hint": "Notes:Recently, Shinon Meeras, a centre showcasing the history of Dard-Shina tribes, was opened to the public at the Gurez Valley in Kashmir.\nDard is a strong community of around 38000 people living in the valley, which speaks the rapidly fading Shina language. The first such cultural centre has been curated and developed by the Indian Army and the Lieutenant-Governor’s administration."
        },
        {
          "question": "4. Gabon, which was seen in the news, is located in which region?",
          "options": [
            "[A] Africa",
            "[B] Europe",
            "[C] Australia",
            "[D] Asia"
          ],
          "correctAnswer": "Correct Answer: A [Africa]",
          "hint": "Notes:Rebel soldiers in Central African nation Gabon claim to have ousted their President Ali Bongo Ondimba.\nRebel officers in the oil-rich central African state of Gabon announced they had seized power following disputed elections in which President Ali Bongo Ondimba, in power since 2009, had been declared victorious."
        },
        {
          "question": "5. Asian Development Bank (ADB) has sanctioned  3.32 crore grant for safe public transport travel in which city?",
          "options": [
            "[A] Chennai",
            "[B] Hyderabad",
            "[C] Pune",
            "[D] Mysuru"
          ],
          "correctAnswer": "Correct Answer: B [Hyderabad]",
          "hint": "Notes:A team of technology experts of BITS Hyderabad, IIT Mumbai and IIT Kharagpur, has won Asian Development Bank’s grant of USD 3.99 lakh (₹3.32 crore) to develop TUTEM.\nTUTEM stands for Technologies for Urban Transit to Enhance Mobility and Safe Accessibility. It aims for safe public transport travel in Hyderabad."
        },
        {
          "question": "6. NITI Aayog signed a MoU with which institution on fast tracking SDGs?",
          "options": [
            "[A] UNDP",
            "[B] UNEP",
            "[C] World Bank",
            "[D] WEF"
          ],
          "correctAnswer": "Correct Answer: A [UNDP]",
          "hint": "Notes:NITI Aayog and UNDP India have signed, a Memorandum of Understanding (MoU) to formalise a framework of cooperation on a range of areas, including SDG localisation, data-driven monitoring, Aspirational Districts and Blocks, among others.\nThe MoU was signed for a period of five years. NITI Aayog is the nodal Institution for coordinating the adoption and monitoring of SDGs at the national and sub-national levels. UNDP plays the integrator role in coordinating efforts to fast-track progress on the SDGs within the UN system."
        },
        {
          "question": "7. ‘Bhaderwah Rajmash and Sulai honey’, which got Geographical Indication (GI) tag, is from which State/UT?",
          "options": [
            "[A] Assam",
            "[B] Jammu and Kashmir",
            "[C] Rajasthan",
            "[D] West Bengal"
          ],
          "correctAnswer": "Correct Answer: B [Jammu and Kashmir]",
          "hint": "Notes:Bhaderwah Rajmash and Sulai honey of Doda and Ramban districts of Jammu and Kashmir, have been granted Geographical Indication (GI) tags.\nIn 2015, Prime Minister Narendra Modi had gifted organic Sulai honey to Queen Elizabeth during his visit to Britain."
        },
        {
          "question": "8. ‘Rashtriya Poshan Maah’ is observed in which month in India?",
          "options": [
            "[A] August",
            "[B] September",
            "[C] October",
            "[D] November"
          ],
          "correctAnswer": "Correct Answer: B [September]",
          "hint": "Notes:Ministry of Women and Child Development is celebrating the 6th Rashtriya Poshan Maah throughout September 2023.\nSeveral activities are organised across the country with themes like ‘Improving Nutrition through Mission LiFE & ‘Exclusive Breastfeeding & Complimentary Feeding’."
        },
        {
          "question": "9. What is the name of the seventh and last stealth frigate of Project 17A, that was recently launched?",
          "options": [
            "[A] Kailashgiri",
            "[B] Mahendragiri",
            "[C] Sivagiri",
            "[D] Bharatgiri"
          ],
          "correctAnswer": "Correct Answer: B [Mahendragiri]",
          "hint": "Notes:The seventh and last stealth frigate of Project 17A, Mahendragiri, was launched at Mazagon Dock Shipbuilders Ltd. (MDL) in Mumbai.\nUnder Project 17A, a total of seven ships were constructed, four at Mazagon Dock Shipbuilders Ltd. , Mumbai and three at Garden Reach Ship Builders Limited (GRSE), Kolkata."
        },
        {
          "question": "10. Which country is set to send its representatives to China to stabilise its relationships?",
          "options": [
            "[A] India",
            "[B] Australia",
            "[C] USA",
            "[D] UK"
          ],
          "correctAnswer": "Correct Answer: B [Australia]",
          "hint": "Notes:Australia will send a delegation of industry, government, academic, media and arts representatives to Beijing for a dialogue with their Chinese counterparts next week to stabilise its relationship with China, as per Australia’s Foreign Ministry.\nTrade, investment, people-to-people links as well as regional and international security are among the issues up for discussion in the next talks. The high-level dialogue had been held annually from 2014 until it was stopped in 2020."
        },
        {
          "question": "11. Satkosia Tiger Reserve, that was recently making news, is in which state?",
          "options": [
            "[A] Odisha",
            "[B] Andhra Pradesh",
            "[C] Gujarat",
            "[D] Jharkhand"
          ],
          "correctAnswer": "Correct Answer: A [Odisha]",
          "hint": "Notes:In the Satkosia Tiger Reserve, two highly decomposed elephant carcasses were recently discovered. This reserve is situated in the Odisha, spanning across four districts: Angul, Cuttack, Boudh, and Nayagarh. The reserve covers a vast area of 1136.70 sq km, with 523.61 sq km designated as the core area. It’s also part of the Mahanadi Elephant Reserve and serves as the confluence of two significant bio-geographic regions in India: the Deccan Peninsula and the Eastern Ghats. Satkosia’s terrain is characterized by hills, moderate to steep slopes, and narrow valleys. The forest primarily consists of North Indian tropical moist deciduous forests and Moist peninsular low-level sal. Sal trees dominate the landscape, often growing in dense clusters, alongside species like Asan, Dhaura, Bamboo, and Simal. The reserve is home to a variety of wildlife, including tigers, leopards, elephants, spotted deer, sambar, chowsingha, barking deer, bison, wild dogs, sloth bears, jackals, giant squirrels, and porcupines. It also provides a natural habitat for two endangered species: the freshwater crocodile and the gharial."
        },
        {
          "question": "12. Which Railway Station was recently awarded the ‘Green Railway Station’ certification with the highest rating of Platinum by the Indian Green Building Council?",
          "options": [
            "[A] Chengalpattu Railway Station, Tamil Nadu",
            "[B] Hubbali Railway Station, Karnataka",
            "[C] Kalyan Railway Station, Maharashtra",
            "[D] Vijaywada Railway Station, Andhra Pradesh"
          ],
          "correctAnswer": "Correct Answer: D [Vijaywada Railway Station, Andhra Pradesh]",
          "hint": "Notes:Vijayawada Railway Station achieved the prestigious ‘Green Railway Station’ certification, receiving the highest Platinum rating from the Indian Green Building Council (IGBC), a division of the Confederation of Indian Industry (CII) founded in 2001. IGBC serves as India’s foremost certification body, offering services such as green building rating programs, certification, and training. They host the annual Green Building Congress and actively participate in global discussions on environmental issues. The station’s rating considers six key environmental categories: sustainable facilities, health and sanitation, energy and water efficiency, smart and green initiatives, and innovation. IGBC’s headquarters are located in Hyderabad."
        },
        {
          "question": "13. ‘Kinzhal Missile’, that was recently making news, is developed by which country?",
          "options": [
            "[A] USA",
            "[B] France",
            "[C] Russia ",
            "[D] Israel"
          ],
          "correctAnswer": "Correct Answer: C [Russia ]",
          "hint": "Notes:The first Su-34 bomber crew to launch a Kinzhal missile in Ukraine received state awards. The Kh-47M2, known as “Kinzhal” (Dagger), is a Russian air-launched hypersonic ballistic missile capable of carrying conventional or nuclear warheads with a 480 kg payload, including a 10-50 kt thermonuclear option. It achieves speeds up to Mach 10 (12,350 km/hr) and has a range of 1,500-2,000 km. With an 8 m length, 1 m body diameter, and 4,300 kg launch weight, it’s launched from MiG-31 jets at 18 km altitude, maneuvering throughout its flight to evade air defense."
        },
        {
          "question": "14. “Banglar Mati, Banglar Jol” is a patriotic song written by?",
          "options": [
            "[A] Nazrul Islam ",
            "[B] Rabindranath Tagore",
            "[C] Jibanananda Das",
            "[D] Sukanta Bhattacharya"
          ],
          "correctAnswer": "Correct Answer: B [Rabindranath Tagore]",
          "hint": "Notes:On on 7 September 2023, West Bengal assembly has adopted a resolution to celebrate the first day of the Bengali calendar, Poila Baisakh, as “Bangla Divas (Bengal Day)”. This decision was made with 167 MLAs in favor and 62 against, with all 62 opposing the resolution being from the BJP. West Bengal Legislative Assembly also passed a resolution, officially designating “Banglar Mati Banglar Jol” as the state song of West Bengal.\nBanglar Mati Banglar Jol is a Bengali patriotic song written by Rabindranath Tagore written in 1905 in support of the “Bangabhanga Rodh Movement” in Bengal, initiated by Tagore. He launched the “Raksha Bandhan Utsav” on 16 October 1905, aiming to unite Hindu and Muslim Bengalis who were protesting against the Partition of Bengal (1905). On that significant day, “Banglar Mati Banglar Jol” became the rallying cry of the movement, symbolizing unity and resilience. The musical notation for the song was provided by Indira Debi Chowdhurani."
        },
        {
          "question": "15. Scientists have discovered the fossil of Fujianvenator, a bird-like dinosaur in which country?",
          "options": [
            "[A] Greece",
            "[B] China",
            "[C] Chile",
            "[D] Japan"
          ],
          "correctAnswer": "Correct Answer: B [China]",
          "hint": "Notes:Scientists have discovered the fossil of a pheasant-sized, bird-like dinosaur in Fujian Province, China, dating back to approximately 148 to 150 million years ago.\nThe dinosaur, named Fujianvenator prodigiosus, has an unusual anatomy, with elongated legs and arms resembling wings. It belonged to a group called avialans, which includes birds and their closest non-avian dinosaur relatives."
        },
        {
          "question": "16. Claudia Sheinbaum, who was seen in the news, is set to become the first leader of which country?",
          "options": [
            "[A] Singapore",
            "[B] Mexico",
            "[C] Australia",
            "[D] France"
          ],
          "correctAnswer": "Correct Answer: B [Mexico]",
          "hint": "Notes:Mexico’s ruling party, the leftist National Regeneration Movement (MORENA), has named former Mexico City Mayor Claudia Sheinbaum as its candidate for the next year’s presidential election. Sheinbaum, a close ally of the President, is now positioned to become Mexico’s first female leader.\nSheinbaum secured her nomination after winning each of five nationwide polls, averaging about 39% of the vote."
        },
        {
          "question": "17. India has decided to settle WTO Poultry Dispute with which country?",
          "options": [
            "[A] Japan",
            "[B] USA",
            "[C] China",
            "[D] Pakistan"
          ],
          "correctAnswer": "Correct Answer: B [USA]",
          "hint": "Notes:India and the United States of America have reached an agreement to settle their longstanding World Trade Organisation (WTO) poultry dispute. This resolution was announced in a joint statement following a meeting between Indian Prime Minister and US President.\nAs part of the settlement, India will reduce tariffs on various American products, including frozen turkey, frozen duck, fresh, frozen, dried, and processed blueberries and cranberries."
        },
        {
          "question": "18. Which state has approved Rs 256.46 Crore for Chambal River Bridge and Road Construction Projects?",
          "options": [
            "[A] Rajasthan",
            "[B] Madhya Pradesh",
            "[C] Uttar Pradesh",
            "[D] Maharashtra"
          ],
          "correctAnswer": "Correct Answer: A [Rajasthan]",
          "hint": "Notes:The State of Rajasthan has approved to allocate Rs 256.46 crore for the construction of a high-level bridge over the Chambal River in Kota district. The earlier budget allocation was Rs 165 crore for the project.\nThe bridge, set to be built promises to provide a shorter travel route and enhanced convenience for the people."
        },
        {
          "question": "19. Which Indian city is set to launch an innovative disease surveillance dashboard?",
          "options": [
            "[A] Mumbai",
            "[B] Chennai",
            "[C] Bengaluru",
            "[D] New Delhi"
          ],
          "correctAnswer": "Correct Answer: C [Bengaluru]",
          "hint": "Notes:Bengaluru, India’s tech capital, is set to launch an innovative disease surveillance dashboard in collaboration with the Indian Institute of Science (IISc), the Bruhat Bengaluru Mahanagara Palike (BBMP), and the Health and Family Welfare Department.\nThis dashboard can predict disease outbreaks up to four weeks in advance with an impressive accuracy rate of 70%. Unlike previous models, this system forecasts a range of communicable diseases, including vector-borne illnesses like dengue, chikungunya, and malaria."
        },
        {
          "question": "20. Mount Fuji is located in which country?",
          "options": [
            "[A] Tibet",
            "[B] China",
            "[C] Japan",
            "[D] Indonesia"
          ],
          "correctAnswer": "Correct Answer: C [Japan]",
          "hint": "Notes:The iconic Mount Fuji in Japan has witnessed a dramatic increase in visitors, with over 5.1 million tourists between 2012 and 2019.\nThis has led to concerns about ecological damage and safety risks to the mountain ecosystem. Visitors, including those climbing at night to witness the sunrise, have overwhelmed the region. Facilities catering to tourists rely on diesel generators, leading to environmental concerns, while overcrowding and breaches of etiquette have become common."
        },
        {
          "question": "21. Which country has announced plans to finalize the route for the ‘Power of Siberia 2’ pipeline?",
          "options": [
            "[A] Russia",
            "[B] Japan",
            "[C] Ukraine",
            "[D] Belarus"
          ],
          "correctAnswer": "Correct Answer: A [Russia]",
          "hint": "Notes:Russia has announced plans to finalize the route for the “Power of Siberia 2” pipeline, a major project.\nThe project is aimed at increasing natural gas exports to China. This move comes as Russia seeks to diversify its energy markets in response to its military actions in Ukraine, shifting its focus towards Asian buyers. The construction of the pipeline is scheduled to begin next year."
        },
        {
          "question": "22. ‘LAKHPATI DIDIs’ is envisaged under which mission?",
          "options": [
            "[A] National Rural Livelihood Mission",
            "[B] National Urban Livelihood Mission",
            "[C] National Health Mission",
            "[D] National Poshan Mission"
          ],
          "correctAnswer": "Correct Answer: A [National Rural Livelihood Mission]",
          "hint": "Notes:The Union Minister for Rural Development and Panchayati Raj Giriraj Singh had recently chaired the National Conclave on Enabling 2 Crore ‘LAKHPATI DIDIs’.\nLAKHPATI DIDIs are SHG women members who earn a sustainable income of at least Rs one Lakh per annum per Household. This is envisaged under the Deendayal Antyodaya Yojana National Rural Livelihoods Mission (DAY-NRLM)."
        },
        {
          "question": "23. Durand Cup is associated with which sport?",
          "options": [
            "[A] Cricket",
            "[B] Basketball",
            "[C] Football",
            "[D] Hockey"
          ],
          "correctAnswer": "Correct Answer: C [Football]",
          "hint": "Notes:The Durand Cup is associated with Football. Recently, Mohun Bagan clinched the Durand Cup 2023 trophy beating East Bengal at Kolkata. This is the 132nd Durand Cup tournament and Mohun Bagan team has won the trophy after 23 years.\nWith this victory, Mohun Bagan SG became the first team in the history of Durand Cup to win 17 titles."
        },
        {
          "question": "24. What does “I” stand in I-CRR stand for?",
          "options": [
            "[A] Incidental",
            "[B] Incremental",
            "[C] Instrumental",
            "[D] International"
          ],
          "correctAnswer": "Correct Answer: B [Incremental]",
          "hint": "Notes:The Reserve Bank of India (RBI) has recently announced the phased discontinuation of the Incremental Cash Reserve Ratio (I-CRR), which was introduced on August 10, 2023.\nThe I-CRR was implemented to absorb surplus liquidity caused by various factors, including the return of Rs 2,000 notes to the banking system. The RBI aims to release I-CRR funds gradually to avoid shocks to system liquidity and ensure orderly money market functioning."
        },
        {
          "question": "25. NASA’s MOXIE Successfully Generated Oxygen on which planet?",
          "options": [
            "[A] Mars",
            "[B] Jupiter",
            "[C] Moon",
            "[D] Venus"
          ],
          "correctAnswer": "Correct Answer: A [Mars]",
          "hint": "Notes:The US Space agency NASA has announced that its Mars Oxygen In-Situ Resource Utilization Experiment (MOXIE) which is on board the Perseverance Mars Rover has been successful in generating oxygen in Mars. The equipment demonstrated its ability to convert Martian carbon dioxide (CO2) into oxygen.\nThis technology breakthrough could play a crucial role in future human missions to Mars, providing a sustainable source of breathable air and rocket propellant."
        },
        {
          "question": "26. Which state has approved Rs 256.46 Crore for Chambal River Bridge and Road Construction Projects?",
          "options": [
            "[A] Rajasthan",
            "[B] Madhya Pradesh",
            "[C] Uttar Pradesh",
            "[D] Maharashtra"
          ],
          "correctAnswer": "Correct Answer: A [Rajasthan]",
          "hint": "Notes:The State of Rajasthan has approved to allocate Rs 256.46 crore for the construction of a high-level bridge over the Chambal River in Kota district. The earlier budget allocation was Rs 165 crore for the project.\nThe bridge, set to be built promises to provide a shorter travel route and enhanced convenience for the people."
        },
        {
          "question": "27. Which state has mandated Vehicle Location Tracking Devices for Commercial Vehicles?",
          "options": [
            "[A] Tamil Nadu",
            "[B] Kerala",
            "[C] Karnataka",
            "[D] Odisha"
          ],
          "correctAnswer": "Correct Answer: D [Odisha]",
          "hint": "Notes:The Odisha State Transport Authority (STA) has made it mandatory for all commercial vehicles, excluding three-wheelers, to install Vehicle Location Tracking (VLT) devices with panic buttons.\nThis decision, aimed at enhancing passenger safety, particularly for women and children, applies to all categories of new commercial vehicles, including buses, taxis, goods vehicles, and ambulances. The deadline for new vehicles to have these devices is October 1, with installation required at the time of registration. Older vehicles have until December 31 to comply."
        },
        {
          "question": "28. Which state is set to release a dictionary for its regional dialects?",
          "options": [
            "[A] Tamil Nadu",
            "[B] Kerala",
            "[C] Uttar Pradesh",
            "[D] Assam"
          ],
          "correctAnswer": "Correct Answer: C [Uttar Pradesh]",
          "hint": "Notes:The Uttar Pradesh State Institute of Education (SIE) has come up with a first-of-its-kind dialects dictionary containing 76,000 words in regional dialects/languages of the State like Bhojpuri, Awadhi, Braj and Bundelkhandi.\nThis initiative aims to conserve regional dialects of the State and also aims to remove linguistic barriers across various parts of the state."
        },
        {
          "question": "29. Varuna is the bilateral exercise between the navies of which countries?",
          "options": [
            "[A] India and France",
            "[B] India and Sri Lanka",
            "[C] India and Australia",
            "[D] India and USA"
          ],
          "correctAnswer": "Correct Answer: A [India and France]",
          "hint": "Notes:Phase 2 of the 21st edition of Varuna bilateral exercise between Indian and French Navy was conducted in the Arabian Sea.\nThe exercise witnessed participation of guided missile frigates, tanker, Maritime Patrol Aircraft and integral helicopters from the two sides. The first phase of ‘Varuna-2023’ was conducted off India’s Western Seaboard."
        },
        {
          "question": "30. Which city is the host of the ‘First Global Symposium on Farmers’ Rights’?",
          "options": [
            "[A] Mumbai",
            "[B] New Delhi",
            "[C] Varanasi",
            "[D] Amritsar"
          ],
          "correctAnswer": "Correct Answer: B [New Delhi]",
          "hint": "Notes:The President of India Droupadi Murmu inaugurated the inaugural ‘Global Symposium on Farmers’ Rights’ (GSFR) at the ICAR Convention Centre in New Delhi.\nThis event is organized by the Secretariat of the International Treaty on Plant Genetic Resources for Food and Agriculture (International Treaty), in collaboration with various Indian agricultural bodies. Notably, India was the first country to include Farmers’ Rights in its Protection of Plant Varieties and Farmers’ Rights (PPVFR) Act in 2001."
        },
        {
          "question": "31. India has decided to settle WTO Poultry Dispute with which country?",
          "options": [
            "[A] Japan",
            "[B] USA",
            "[C] China",
            "[D] Pakistan"
          ],
          "correctAnswer": "Correct Answer: B [USA]",
          "hint": "Notes:India and the United States of America have reached an agreement to settle their longstanding World Trade Organisation (WTO) poultry dispute. This resolution was announced in a joint statement following a meeting between Indian Prime Minister and US President.\nAs part of the settlement, India will reduce tariffs on various American products, including frozen turkey, frozen duck, fresh, frozen, dried, and processed blueberries and cranberries."
        },
        {
          "question": "32. Mount Fuji is located in which country?",
          "options": [
            "[A] Tibet",
            "[B] China",
            "[C] Japan",
            "[D] Indonesia"
          ],
          "correctAnswer": "Correct Answer: C [Japan]",
          "hint": "Notes:The iconic Mount Fuji in Japan has witnessed a dramatic increase in visitors, with over 5.1 million tourists between 2012 and 2019.\nThis has led to concerns about ecological damage and safety risks to the mountain ecosystem. Visitors, including those climbing at night to witness the sunrise, have overwhelmed the region. Facilities catering to tourists rely on diesel generators, leading to environmental concerns, while overcrowding and breaches of etiquette have become common."
        },
        {
          "question": "33. Which organisation has announced plans to build World’s Highest Fighter Airfield, at Ladakh?",
          "options": [
            "[A] Indian Airforce",
            "[B] Airports Authority of India",
            "[C] National Highways Authority of India",
            "[D] Border Roads Organisation"
          ],
          "correctAnswer": "Correct Answer: D [Border Roads Organisation]",
          "hint": "Notes:The Border Roads Organisation (BRO) has announced its plans to construct the world’s highest fighter airfield in the Nyoma region of Ladakh at a staggering altitude of approximately 13,700 feet.\nOn 12 September 2023, Defence Minister Rajnath Singh laid the foundation stone for the airfield. This is a part of BRO’s vision to enhance India’s infrastructure along the Line of Actual Control (LAC)."
        },
        {
          "question": "34. India signed a MoU with which country on energy co-operation recently?",
          "options": [
            "[A] UAE",
            "[B] Saudi Arabia",
            "[C] Malaysia",
            "[D] Afghanistan"
          ],
          "correctAnswer": "Correct Answer: B [Saudi Arabia]",
          "hint": "Notes:India and Saudi Arabia have signed a Memorandum of Understanding (MoU) on energy cooperation in New Delhi.\nThe MoU encompasses various areas of collaboration, including renewable energy, energy efficiency, hydrogen, electricity, grid interconnection, petroleum, natural gas, strategic petroleum reserves, and energy security."
        },
        {
          "question": "35. ‘Exercise Eagle Partner’ is a joint military exercise between USA and which country?",
          "options": [
            "[A] Argentina",
            "[B] Armenia",
            "[C] Chile",
            "[D] Germany"
          ],
          "correctAnswer": "Correct Answer: B [Armenia]",
          "hint": "Notes:‘Exercise Eagle Partner’ is a joint military exercise between USA and Armenia. Around 85 U.S. soldiers will train with 175 Armenian troops during this exercise.\nThese exercises are happening at a time when Armenia is expressing frustration over Russia’s perceived failure to act as a security guarantor, particularly regarding its tensions with historic rival Azerbaijan."
        },
        {
          "question": "36. Which state approved a permanent housing scheme for displaced people and extended the ‘disturbed area’ status of the State?",
          "options": [
            "[A] Uttar Pradesh",
            "[B] Manipur",
            "[C] Assam",
            "[D] Gujarat"
          ],
          "correctAnswer": "Correct Answer: B [Manipur]",
          "hint": "Notes:The Manipur Cabinet approved a permanent housing scheme for displaced people and extended the ‘disturbed area’ status of the State.\nThe State Cabinet also approves the extension of the ‘disturbed area’ status and condemns the ‘unwanted actions’ of the Central security forces on civilians."
        },
        {
          "question": "37. Which state launched  ‘Mobile Van Program’ to promote Natural Farming?",
          "options": [
            "[A] Assam",
            "[B] Himachal Pradesh",
            "[C] Arunachal Pradesh",
            "[D] Rajasthan"
          ],
          "correctAnswer": "Correct Answer: B [Himachal Pradesh]",
          "hint": "Notes:The Himachal Pradesh Agriculture Department has introduced a ‘Mobile Van Program’ as part of the ‘Prakritik Kheti Khushhal Kisan Yojana’.\nIt aims to advance eco-friendly and natural farming practices. This initiative focuses on delivering fresh, organic produce directly to consumers while promoting organic and chemical-free farming."
        },
        {
          "question": "38. Which country has enforced a European Union (EU) ban on all Russian-registered passenger cars entering the country?",
          "options": [
            "[A] France",
            "[B] Italy",
            "[C] Poland",
            "[D] Germany"
          ],
          "correctAnswer": "Correct Answer: C [Poland]",
          "hint": "Notes:Poland has begun enforcing a European Union (EU) ban on all Russian-registered passenger cars entering the country, in line with the EU’s sanctions against Russia due to its war in Ukraine.\nThis move comes shortly after Lithuania, Latvia, and Estonia also implemented a similar ban on vehicles with Russian license plates. The decision reflects the EU’s stance on Russia’s actions in Ukraine and its threat to international security."
        },
        {
          "question": "39. Amrit Brikhya Andolan, 2023’ is associated with which state/UT?",
          "options": [
            "[A] Assam",
            "[B] West Bengal",
            "[C] Odisha",
            "[D] Jharkhand"
          ],
          "correctAnswer": "Correct Answer: A [Assam]",
          "hint": "Notes:As a part of ‘Amrit Brikhya Andolan, 2023’, the Assam government, along with public support, attempted nine world records during a drive to increase the State’s green cover.\nThe world records attempted during the movement included the largest spiral of saplings, the largest number of seedlings distributed in one day at one venue, most trees planted by a team in 24 hours, most trees planted in an hour, largest planted tree mosaic, most trees planted by a team of 100 in an hour among others."
        },
        {
          "question": "40. The Ministry of Finance approved welfare measures for the benefit of employees of which institution?",
          "options": [
            "[A] EPFO",
            "[B] LIC",
            "[C] ISRO",
            "[D] IOCL"
          ],
          "correctAnswer": "Correct Answer: B [LIC]",
          "hint": "Notes:The Ministry of Finance approved a series of welfare measures for the benefit of Life Insurance Corporation of India (LIC) agents and employees.\nThe welfare measures are related to the amendments to LIC (Agents) Regulations, 2017, Enhancement of Gratuity Limit, and Uniform Rate of Family Pension among others. It will benefit more than 13 lakhs agents and more than 1 lakh regular employees."
        },
        {
          "question": "41. The ‘Conference of the Asia Pacific Forum on Human Rights’ was inaugurated in which country?",
          "options": [
            "[A] India",
            "[B] Sri Lanka",
            "[C] Bangladesh",
            "[D] Japan"
          ],
          "correctAnswer": "Correct Answer: A [India]",
          "hint": "Notes:President of India inaugurated Annual General Meeting and Biennial Conference of the Asia Pacific Forum on Human Rights in New Delhi.\nThis year’s Conference marks the 75th anniversary of the Universal Declaration on Human Rights. Asia Pacific Forum also celebrated 30 years of national human rights institutions and the Paris Principles; with a sub-theme on the environment and climate change."
        },
        {
          "question": "42. Which institution is associated with ‘National Broadcasting Policy’?",
          "options": [
            "[A] NITI Aayog",
            "[B] NASSCOM",
            "[C] TRAI",
            "[D] Prasar Bharati"
          ],
          "correctAnswer": "Correct Answer: C [TRAI]",
          "hint": "Notes:Telecom Regulatory Authority of India (TRAI) consulted stakeholders on ‘National Broadcasting Policy’.\nAs per TRAI, the Policy may provide a common approach for licenses, oversight, and compliances. The government is seeking to bring further parity in how digital and legacy mediums like television and OTT streaming are regulated."
        },
        {
          "question": "43. Which country recently delayed the ban on new petrol and diesel cars?",
          "options": [
            "[A] USA",
            "[B] UK",
            "[C] Canada",
            "[D] Russia"
          ],
          "correctAnswer": "Correct Answer: B [UK]",
          "hint": "Notes:In a major change to the government’s approach to achieving net zero by 2050, UK Prime Minister Rishi Sunak delayed the ban on new petrol and diesel cars, to 2035 from 2030.\nThe British prime minister Rishi Sunak announced key changes in the government policies that include nine-year delay in the ban on new fossil fuel heating for off-gas-grid homes to 2035."
        },
        {
          "question": "44. ‘International Lawyers’ Conference 2023’ was inaugurated in which city?",
          "options": [
            "[A] New Delhi",
            "[B] Mumbai",
            "[C] Varanasi",
            "[D] Bengaluru"
          ],
          "correctAnswer": "Correct Answer: A [New Delhi]",
          "hint": "Notes:Prime Minister Narendra Modi inaugurated the ‘International Lawyers’ Conference 2023’ at Vigyan Bhawan in New Delhi.\nOrganised by the Bar Council of India, the International Lawyer’s Conference 2023 focuses on the theme of ‘Emerging Challenges in the Justice Delivery System’."
        },
        {
          "question": "45. Which state has launched its ‘Action Plan for Management of Paddy Stubble Burning’?",
          "options": [
            "[A] Punjab",
            "[B] Haryana",
            "[C] Uttar Pradesh",
            "[D] Rajasthan"
          ],
          "correctAnswer": "Correct Answer: B [Haryana]",
          "hint": "Notes:Haryana submitted its ‘State Action Plan for Management of Paddy Stubble Burning’ to Commission for Air Quality Management (CAQM).\nIn the plan, Haryana aims to significantly reduce and potentially eliminate fire incidents resulting from paddy stubble burning this year. To achieve this, the state plans to implement bio-decomposer applications in 5 lakh acres of land during the current harvesting season."
        },
        {
          "question": "46. Which country is set to host the Artificial Intelligence (AI) safety summit?",
          "options": [
            "[A] USA",
            "[B] UK",
            "[C] Australia",
            "[D] Canada"
          ],
          "correctAnswer": "Correct Answer: B [UK]",
          "hint": "Notes:British Prime Minister is Rishi Sunak is scheduled to convene the Artificial Intelligence (AI) safety summit in November, this year.\nIt will bring together governments, technology firms, and scholars to discuss on the hazards presented by the technology. The European Union is considering whether to send officials to Britain’s summit."
        },
        {
          "question": "47. Which equipment is used to split water molecules into hydrogen and oxygen by utilizing electricity?",
          "options": [
            "[A] Electrolysers",
            "[B] Neutralisers",
            "[C] Electrolytes",
            "[D] Water splitter"
          ],
          "correctAnswer": "Correct Answer: A [Electrolysers]",
          "hint": "Notes:Electrolysers are instruments employed in the industrial process of splitting water molecules into hydrogen and oxygen by utilizing electricity generated from renewable sources like solar, wind, or nuclear power.\nAccording to a recent report by the International Energy Agency, China is expected to have authority over 50% of the global installed capacity of electrolysers for low-carbon hydrogen production by the conclusion of 2023, despite a decrease in new projects due to rising inflation."
        },
        {
          "question": "48. A biodiversity knowledge centre named Neelakkurinji has been opened in which state?",
          "options": [
            "[A] Tamil Nadu",
            "[B] Kerala",
            "[C] Andhra Pradesh",
            "[D] Karnataka"
          ],
          "correctAnswer": "Correct Answer: B [Kerala]",
          "hint": "Notes:A biodiversity knowledge centre named Neelakkurinji has been recently opened in Adimaly in Idukki district of Kerala. The biodiversity centre is located at the entry point of the Munnar hill station.\nThe centre has been set up by the Kerala State Haritha Keralam Mission, United Nations Development Programme (UNDP), and the Idukki district panchayat."
        },
        {
          "question": "49. Tamil Nadu Public Health Act has been invoked for control of which communicable disease?",
          "options": [
            "[A] Typhoid",
            "[B] Covid",
            "[C] Dengue",
            "[D] Chicken Pox"
          ],
          "correctAnswer": "Correct Answer: C [Dengue]",
          "hint": "Notes:In the wake of a surge in dengue fever cases in Tamil Nadu, the Directorate of Public Health (DPH) and Preventive Medicine of the state has invoked provisions of the Tamil Nadu Public Health Act 1939, for control of the disease.\nFailure to report a notifiable disease, failure to comply with notices requiring measures against mosquito breeding or interrupting mosquito control work would attract penalties under the Act."
        },
        {
          "question": "50. Tigist Assefa, who broke the women’s marathon world record, is from which country?",
          "options": [
            "[A] Kenya",
            "[B] Ethiopia",
            "[C] Jamaica",
            "[D] South Africa"
          ],
          "correctAnswer": "Correct Answer: B [Ethiopia]",
          "hint": "Notes:Tigist Assefa from Ethiopia recently broke the women’s marathon world record at the Berlin Marathon.\nThe 26-year-old runner broke the record by crossing the finish line in two hours, eleven minutes, and fifty-three seconds."
        }
      ],
      "type": "current-affairs-quiz-september-2023",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "65166de51634489240c293ca"
      },
      "data": [
        {
          "question": "1. What is the charge levied for RuPay credit card use on UPI for transactions up to ₹2,000?",
          "options": [
            "[A] 0.5 %",
            "[B] 2 %",
            "[C] 5 %",
            "[D] No charge"
          ],
          "correctAnswer": "Correct Answer: D [No charge]",
          "hint": "Notes:The National Payments Corporation of India (NPCI) has clarified that there will be no charge for RuPay credit card use on Unified Payments Interface (UPI) for transactions up to ₹2,000.\nNil Merchant Discount Rate (MDR) would apply for this category up to the transaction amount less than and equal to ₹2,000. In September, RBI Governor launched the Rupay credit card on UPI network."
        },
        {
          "question": "2. Who regulates the Credit information companies (CICs) in India?",
          "options": [
            "[A] SEBI",
            "[B] RBI",
            "[C] Ministry of Finance",
            "[D] SIDBI"
          ],
          "correctAnswer": "Correct Answer: B [RBI]",
          "hint": "Notes:The Reserve Bank of India (RBI) grants certificate of registration to the Credit information companies (CICs) in India.\nRecently, the RBI in its ‘Statement of Developmental and Regulatory Policies’, has called for which type of companies to appoint an internal ombudsman by April 1, 2023. This step aims to strengthen and improve the efficiency of the internal grievance redressal mechanisms."
        },
        {
          "question": "3. As of 2022, what is the estimated insurance penetration in India?",
          "options": [
            "[A] 1 %",
            "[B] 3 %",
            "[C] 7 %",
            "[D] 11 %"
          ],
          "correctAnswer": "Correct Answer: B [3 %]",
          "hint": "Notes:Insurance penetration is measured as the percentage of insurance premiums to GDP. In India, the insurance penetration is estimated at a little over 3 per cent.\nHDFC Life, one of the country’s leading Insurance Companies, has recently launched the ‘Insure India’ campaign. The campaign aims to educate Indians on the benefits of life insurance as a product category."
        },
        {
          "question": "4. As per the recent RBI guidelines, what is the minimum capital requirement for setting up an asset reconstruction company (ARC)?",
          "options": [
            "[A] Rs 50 Crore",
            "[B] Rs 300 Crore",
            "[C] Rs 500 Crore",
            "[D] Rs 1000 Crore"
          ],
          "correctAnswer": "Correct Answer: B [Rs 300 Crore]",
          "hint": "Notes:The Reserve Bank raised the minimum capital requirement for setting up an asset reconstruction company (ARC) to Rs 300 crore from the existing Rs 100 crore.\nThe decision is aimed to strengthen the securitisation sector which plays a vital role in the management of distressed financial assets. The existing ARCs are given a glide path to meet the minimum net owned fund (NOF) requirement till April 2026."
        },
        {
          "question": "5. As per the recent data, what is the CPI-based retail inflation recorded in India?",
          "options": [
            "[A] 6.25 %",
            "[B] 7.2 %",
            "[C] 7.41 %",
            "[D] 7.91 %"
          ],
          "correctAnswer": "Correct Answer: C [7.41 %]",
          "hint": "Notes:Official data released by National Statistical Office (NSO) showed that the retail inflation based on Consumer Price Index (CPI) was at 7.41 per cent in September\nThe figure was at 7 per cent in August. Retail inflation rose to a five-month high of 7.41 per cent in September due to costlier food items. It is for the ninth month in a row that retail inflation remained above the Reserve Bank of India’s upper band of 6 per cent."
        },
        {
          "question": "6. Fintech Platform PhonePe launched its first green data centre in India in which state/UT?",
          "options": [
            "[A] Karnataka",
            "[B] Maharashtra",
            "[C] Tamil Nadu",
            "[D] Gujarat"
          ],
          "correctAnswer": "Correct Answer: B [Maharashtra]",
          "hint": "Notes:Homegrown fintech platform PhonePe announced the launch of its first green data centre in India, at Mahape, Navi Mumbai in Maharashtra.\nThe platform has leveraged technologies and solutions from Dell Technologies and NTT. The facility will open up new opportunities in data management with efficient data security and power efficiency. The centre will also help the company to build sustainable infrastructure to scale its operations across the country."
        },
        {
          "question": "7. Which company is the investment manager of the ‘Self Reliant India (SRI) fund’?",
          "options": [
            "[A] LIC",
            "[B] SBICAP Ventures",
            "[C] Aditya Birla Sun Life Fund",
            "[D] Edelweiss Fund"
          ],
          "correctAnswer": "Correct Answer: B [SBICAP Ventures]",
          "hint": "Notes:The Self Reliant India (SRI) fund’, launched by the government of India to provide growth capital to MSMEs, has committed to deploy Rs 5,000 crore, in 38 private equity (PE) and venture capital (VC) firms.\nSBICAP Ventures, owned by the State Bank of India Group, is the investment manager of the fund. SRI fund is a SEBI-registered category-II Alternative Investment Fund (AIF) that operates through the mother-fund and daughter-fund structure."
        },
        {
          "question": "8. Which bank topped the ‘EASE 5.0 Reform Index’ for the first quarter of FY 2022-23?",
          "options": [
            "[A] Union Bank of India",
            "[B] Bank of India",
            "[C] State Bank of India",
            "[D] Canara Bank"
          ],
          "correctAnswer": "Correct Answer: C [State Bank of India]",
          "hint": "Notes:State Bank of India topped the EASE  5.0 Reform Index for the first quarter of FY 2022-23. It is followed by the Union Bank of India.\nThe Index has various parameters including Digitally enabled customer offerings, Big data & analytics, Modem technology capabilities, Collaborative banking and Employee development and governance."
        },
        {
          "question": "9. Who is the head of the FPI Advisory Committee (FAC), recently formed by SEBI?",
          "options": [
            "[A] Ajay Tyagi",
            "[B] S C Garg",
            "[C] Hasmukh Adhia",
            "[D] Madhabi Puri Buch"
          ],
          "correctAnswer": "Correct Answer: C [Hasmukh Adhia]",
          "hint": "Notes:The Securities and Exchange Board of India (SEBI) has set up a 16-member FPI Advisory Committee (FAC) chaired by Hasmukh Adhia, Former Finance Secretary. It will also include H R Khan, former deputy governor, RBI and R Subramanian, Executive Director, RBI.\nThe 20-member committee on Review of Takeover Regulations will be headed by retired Justice Shiavax Jal Vazifdar. The social stock exchange (SSEs) advisory committee will be headed by R Balasubramaniam, Chairman, Grassroots Research and Advocacy Movement (Graam)."
        },
        {
          "question": "10. RBI is set to introduce the ‘single-block and multiple debit functionality’ in which platform?",
          "options": [
            "[A] BBPS",
            "[B] UPI",
            "[C] Rupay Debit Card",
            "[D] CBDC"
          ],
          "correctAnswer": "Correct Answer: B [UPI]",
          "hint": "Notes:The Reserve Bank of India (RBI) is set to introduce additional features to the existing Unified Payments Interface (UPI) platforms to allow multiple debits.\nThe central bank will roll out single-block and multiple debit functionality that will enable users to block funds in their accounts. With the added feature, merchants can make multiple debit transactions within a permitted limit."
        },
        {
          "question": "11. As per Finance Ministry’s latest data, what is India’s gross domestic product growth in the first half of 2022-23?",
          "options": [
            "[A] 7.7 %",
            "[B] 8.7 %",
            "[C] 9.7 %",
            "[D] 10.7 %"
          ],
          "correctAnswer": "Correct Answer: C [9.7 %]",
          "hint": "Notes:As per the Finance Ministry’s latest data, India’s gross domestic product growth in the first half of 2022-23 is averaged to 9.7 %.\nThis was announced in the Ministry’s mid-year expenditure and revenue statement. The ministry said it could not present the medium-term expenditure framework (MTEF) as mandated by the Fiscal Responsibility and Budget Management Act, as the global macro-economic situation disrupted the government’s projections."
        },
        {
          "question": "12. What is the name given to a business with a value more than USD 10 billion?",
          "options": [
            "[A] Unicorn",
            "[B] Decacorn",
            "[C] Decathlon",
            "[D] Decagon"
          ],
          "correctAnswer": "Correct Answer: B [Decacorn]",
          "hint": "Notes:Decacorn is the name given to a business with a value more than USD 10 billion. Unicorns are businesses with a value more than USD 1 billion.\nRecently, the collective value of the Indian Premier League (IPL) is estimated to have gone up to USD 10.9 billion, thereby becoming a decacorn. Media rights, sponsorships, ticket sales, and in-stadia revenue are the contributors for its revenue."
        },
        {
          "question": "13. ‘Daksh’ is the payments fraud reporting module maintained by which institution?",
          "options": [
            "[A] SEBI",
            "[B] NITI Aayog",
            "[C] RBI",
            "[D] SBI"
          ],
          "correctAnswer": "Correct Answer: C [RBI]",
          "hint": "Notes:Daksh is the advanced supervisory management system maintained by the Reserve Bank of India (RBI).\nRBI recently announced that it is migrating the payments fraud reporting module to Daksh on January 1, 2023. The move aims to streamline reporting, enhance efficiency and automate the payments fraud management process."
        },
        {
          "question": "14. ‘Financial Stability report (FSR)’ is a flagship publication of which institution?",
          "options": [
            "[A] NITI Aayog",
            "[B] International Monetary Fund",
            "[C] Reserve Bank of India",
            "[D] Bombay Stock Exchange"
          ],
          "correctAnswer": "Correct Answer: C [Reserve Bank of India]",
          "hint": "Notes:Reserve Bank of India (RBI) releases the financial stability report (FSR) twice a year in every June and December.\nAs per the recent report, the gross non-performing asset (GNPA) ratio of scheduled commercial banks (SCBs) fell to a seven-year low of 5.0 per cent. The net non-performing assets (NNPA) have dropped to ten-year low of 1.3 per cent in September 2022."
        },
        {
          "question": "15. Sam Bankman-Fried, who was in the news recently, was the founder of which company?",
          "options": [
            "[A] Tesla",
            "[B] FTX",
            "[C] TikTok",
            "[D] CoinBase"
          ],
          "correctAnswer": "Correct Answer: B [FTX]",
          "hint": "Notes:The founder of cryptocurrency company FTX, Sam Bankman-Fried faces eight criminal counts, including wire fraud and money laundering conspiracy, among others\nHe recently pleaded not guilty Manhattan federal court, to charges of defrauding investors related to the collapse of the crypto exchange. He is accused of redirecting the deposits of FTX customers without their consent to his Alameda Research hedge fund."
        },
        {
          "question": "16. ‘Centralised Receipt and Processing Center (CRPC)’ and ‘Integrated Ombudsman Scheme’ are related to which institution?",
          "options": [
            "[A] NITI Aayog",
            "[B] Reserve Bank of India",
            "[C] DPIIT",
            "[D] ISRO"
          ],
          "correctAnswer": "Correct Answer: B [Reserve Bank of India]",
          "hint": "Notes:The Reserve Bank of India recently released Annual Report of Ombudsman Schemes for 2021-22.  The Centralised Receipt and Processing Center (CRPC) was established by RBIunder the Integrated Ombudsman Scheme 2021.\nAs per the report, the volume of complaints received by the ombudsman schemes or consumer education and protection cells during the year 2021-22 increased by 9.39 per cent to 4,18,184. According to the Report, complaints relating to the digital modes of payment and transactions were the highest in number."
        },
        {
          "question": "17. What is the expansion of ‘V-CIP’, which was seen in the news related to banking?",
          "options": [
            "[A] Venture Capital Identification Process",
            "[B] Video based Customer identification process",
            "[C] Voice based Customer identification process",
            "[D] Venture Capital Investment Process"
          ],
          "correctAnswer": "Correct Answer: B [Video based Customer identification process]",
          "hint": "Notes:Reserve Bank of India announced that a fresh KYC process can be done by visiting a bank branch or remotely through a Video-based Customer Identification Process (V-CIP).\nIf there is no change in the KYC, a self-declaration from the individual customer is sufficient to complete the re-KYC process"
        },
        {
          "question": "18. What is the name of the entity which facilitates e-commerce sites and merchants to accept payment instruments from customers?",
          "options": [
            "[A] Payment aggregators",
            "[B] Fin-tech companies",
            "[C] Payment Corporations",
            "[D] Transfer Agents"
          ],
          "correctAnswer": "Correct Answer: A [Payment aggregators]",
          "hint": "Notes:Payment aggregators facilitate e-commerce sites and merchants to accept payment instruments from customers.\nHitachi Payment Services and BharatPe have recently received in-principle authorisation from the Reserve Bank of India (RBI) to operate as payment aggregators."
        },
        {
          "question": "19. US-based Hindenburg Research published a report accusing which business group for stock manipulation?",
          "options": [
            "[A] Reliance Industries",
            "[B] Adani Group",
            "[C] ITC Limited",
            "[D] Aditya Birla Group"
          ],
          "correctAnswer": "Correct Answer: B [Adani Group]",
          "hint": "Notes:A report recently published by Hindenburg Research has accused Adani Group of stock manipulation, improper use of tax havens and money laundering.\nIt has also raised concerns about the group’s mounting debts. The report has led to sharp erosion in the valuation of listed companies like Adani Enterprises, Adani Power, Adani Total Gas, Adani Transmission, Adani Ports & SEZ, Adani Green Energy and NDTV among others."
        },
        {
          "question": "20. What is the disinvestment target of the Finance ministry for the year 2023-24?",
          "options": [
            "[A] Rs 98000 crore",
            "[B] Rs 82000 crore",
            "[C] Rs 65000 crore",
            "[D] Rs 51000 crore"
          ],
          "correctAnswer": "Correct Answer: D [Rs 51000 crore]",
          "hint": "Notes:For the next fiscal year 2023-24, the Union Budget has pegged disinvestment revenue at Rs 51,000 crore.\nThe government has also scaled down the disinvestment target for the current fiscal to Rs 50,000 crore, from Rs 65,000 crore budgeted last year. The Government expects divestment processes initiated in the current fiscal to be closed by the next fiscal year, including IDBI, Shipping Corporation of India and NMDC Steel."
        },
        {
          "question": "21. What is the name of the entity which facilitates e-commerce sites and merchants to accept payment instruments from customers?",
          "options": [
            "[A] Payment aggregators",
            "[B] Fin-tech companies",
            "[C] Payment Corporations",
            "[D] Transfer Agents"
          ],
          "correctAnswer": "Correct Answer: A [Payment aggregators]",
          "hint": "Notes:Payment aggregators facilitate e-commerce sites and merchants to accept payment instruments from customers.\nHitachi Payment Services and BharatPe have recently received in-principle authorisation from the Reserve Bank of India (RBI) to operate as payment aggregators."
        },
        {
          "question": "22. Which is the first country to back the debt restructure programme of Sri Lanka?",
          "options": [
            "[A] India",
            "[B] Pakistan",
            "[C] China",
            "[D] Australia"
          ],
          "correctAnswer": "Correct Answer: A [India]",
          "hint": "Notes:India has sent financing assurances to the International Monetary Fund (IMF). It thereby becomes the first of Sri Lanka’s creditors to officially back the crisis-hit island nation’s debt restructure programme.\nIndia’s move takes Sri Lanka one step closer to a crucial USD 2.9-billion package from the IMF."
        },
        {
          "question": "23. Which institution launched an information database including a repository of information pertaining to municipal bonds?",
          "options": [
            "[A] RBI",
            "[B] SEBI",
            "[C] IRDAI",
            "[D] NSE"
          ],
          "correctAnswer": "Correct Answer: B [SEBI]",
          "hint": "Notes:The Securities and Exchange Board of India (SEBI) has launched an information database including a repository of information pertaining to municipal bonds on its website.\nIt aims to assist municipal debt issuers and other stakeholders in the municipal debt market. The information database will also be accessible by using a QR Code. The repository also contains checklists for pre-listing requirements and sample letters and certificates from intermediaries to be obtained by an issuer."
        },
        {
          "question": "24. As per Kantar India Union Budget Survey 2023, what is the concern among consumers regarding budget announcement?",
          "options": [
            "[A] Inflationary pressures",
            "[B] Income Tax",
            "[C] GST",
            "[D] Cryptocurrency"
          ],
          "correctAnswer": "Correct Answer: A [Inflationary pressures]",
          "hint": "Notes:According to the Kantar India Union Budget Survey 2023, Inflationary pressures remained the top concern among consumers regarding the Centre’s budget announcement on February 1, 2023.\nThree out of four Indians expressed concerns about the rising inflation and want the government to introduce measures to tackle these challenges. Every one in four Indian is concerned about the threat of job layoff."
        },
        {
          "question": "25. Which country introduced new bank stress-test scenarios to examine the ability of the 23 biggest lenders?",
          "options": [
            "[A] India",
            "[B] USA",
            "[C] UK",
            "[D] China"
          ],
          "correctAnswer": "Correct Answer: B [USA]",
          "hint": "Notes:US Federal Reserve, the country’s central bank recently introduced Wall Street bank stress-test scenarios.\nThe central bank will examine the ability of the 23 biggest US lenders to withstand crisis conditions without degrading their capital. For the first time, the so-called stress test will feature an ‘exploratory market shock’ to the trading books of the largest and most complex banks."
        },
        {
          "question": "26. QR Code-based Coin Vending Machine, which was announced recently, dispenses coins using which technology?",
          "options": [
            "[A] Aadhar enabled payment system",
            "[B] Unified Payment Interface",
            "[C] Central Bank Digital Currency",
            "[D] Bharat Bill Payment System"
          ],
          "correctAnswer": "Correct Answer: B [Unified Payment Interface]",
          "hint": "Notes:QR code-based coin vending machine or QCVM has been announced as a part of the recently concluded RBI Monetary policy.\nQCVM is intended to dispense coins similar to how ATMs dispense currency notes. Coins can be withdrawn using the UPI QR code in designated vending machines. RBI plans to launch the product in 19 locations across 12 cities."
        },
        {
          "question": "27. As per a recent report, what was the top financial activity done in India in the last 12 months?",
          "options": [
            "[A] Putting money in savings",
            "[B] Paying for health insurance",
            "[C] Investments in stocks and shares",
            "[D] Repaying Loans"
          ],
          "correctAnswer": "Correct Answer: A [Putting money in savings]",
          "hint": "Notes:As per YouGov’s latest report, over a third of urban Indians have claimed that their disposable income has decreased in the last 12 months.\nPutting money in their savings (33 per cent), paying for health insurance (26 per cent) and investments in stocks and shares (21 per cent) were the top three financial activities done in the past 12 months, as per the report."
        },
        {
          "question": "28. Bima Sugam portal is o be set up by which institution?",
          "options": [
            "[A] LIC",
            "[B] IRDAI",
            "[C] PFRDA",
            "[D] NITI Aayog"
          ],
          "correctAnswer": "Correct Answer: B [IRDAI]",
          "hint": "Notes:Insurance Regulatory and Development Authority of India has informed that the Bima Sugam portal will be an insurance market infrastructure.\nInsurers, distribution networks and the policy holders can virtually meet across the digital platform. The portal is expected to improve accessibility and ease of insurance purchase to policyholders."
        },
        {
          "question": "29. Which institution has set up a panel to protect investor interest?",
          "options": [
            "[A] RBI",
            "[B] SEBI",
            "[C] Supreme Court",
            "[D] NITI Aayog"
          ],
          "correctAnswer": "Correct Answer: C [Supreme Court]",
          "hint": "Notes:The Supreme Court said it will set up a six-member panel to look into regulatory mechanisms to protect investors’ interest after a report by a US short seller Hindenburg on the Adani conglomerate led to large investor losses.\nThe shares of Adani group firms nose-dived last month after the short seller Hindenburg Research alleged a massive financial fraud. The Adani group strongly denied the allegation and called Hindenburg’s report a “calculated attack” on India, its institutions and growth story."
        },
        {
          "question": "30. What is the Wholesale Price Index (WPI)-based inflation in India in February 2023?",
          "options": [
            "[A] 7.85 %",
            "[B] 6.85 %",
            "[C] 5.85 %",
            "[D] 3.85 %"
          ],
          "correctAnswer": "Correct Answer: D [3.85 %]",
          "hint": "Notes:The Wholesale Price Index (WPI)-based inflation declined to a 25-month low of 3.85 per cent in February 2023.\nThis is the ninth straight month of decline in WPI-based inflation. As per the government data, the decline is due to the easing prices of manufactured items and fuel and power. The Reserve Bank of India (RBI) had hiked key interest rate by 25 basis points to 6.50 per cent, saying core inflation still remains sticky."
        },
        {
          "question": "31. ‘SCORES’ is the grievance redressing platform of which institution?",
          "options": [
            "[A] RBI",
            "[B] SEBI",
            "[C] IRDAI",
            "[D] PFRDA"
          ],
          "correctAnswer": "Correct Answer: B [SEBI]",
          "hint": "Notes:The SCORES platform allows the public to lodge a complaint with the Securities and Exchange Board of India (SEBI) and view its status.\nAs many as 2,457 complaints against companies and market intermediaries have been disposed of via this platform."
        },
        {
          "question": "32. Which Indian PSU has made significant progress in Forbes’ “The Global 2000” List for 2023 by ascending 52 places?",
          "options": [
            "[A] IOCL",
            "[B] NTPC",
            "[C] PFC",
            "[D] GAIL"
          ],
          "correctAnswer": "Correct Answer: B [NTPC]",
          "hint": "Notes:Indian Maharatna PSU – NTPC Limited which is the largest power generation company in India, has made significant progress in Forbes’ “The Global 2000” List for 2023.\nThe company has progressed by ascending by 52 places to reach the 433rd rank in the ranking, from its previous position of 485th rank in 2022."
        },
        {
          "question": "33. The World Bank (WB) launched its first dedicated road safety project in South Asia, for which country?",
          "options": [
            "[A] India",
            "[B] Bangladesh",
            "[C] Nepal",
            "[D] Myanmar"
          ],
          "correctAnswer": "Correct Answer: B [Bangladesh]",
          "hint": "Notes:The World Bank (WB) launched its first dedicated road safety project in South Asia, with a USD 358 million financing agreement signed with the government of Bangladesh.\nThe project seeks to improve road safety and reduce fatalities and injuries from road crashes in selected cities, high-risk highways, and district roads."
        },
        {
          "question": "34. Which Central Bank recently raised its borrowing costs again, the highest in 22 years?",
          "options": [
            "[A] US Fed Reserve",
            "[B] Reserve Bank of India",
            "[C] European Central Bank",
            "[D] Central Bank of Australia"
          ],
          "correctAnswer": "Correct Answer: C [European Central Bank]",
          "hint": "Notes:The European Central Bank (ECB) decided to raise borrowing costs again in an effort to bring down inflation.\nThe ECB increased its three key interest rates by 25 basis points (bps), bringing its main rate to 3.5%, the highest it has been in 22 years. The bank has moved rates up at each of its meetings since last July."
        },
        {
          "question": "35. Which institution is set to release a consultation paper on ‘Finfluencers’?",
          "options": [
            "[A] RBI",
            "[B] NITI Aayog",
            "[C] SEBI",
            "[D] NPCI"
          ],
          "correctAnswer": "Correct Answer: C [SEBI]",
          "hint": "Notes:Finfluencers are individuals who utilize their public social media platforms to provide guidance and share anecdotes regarding money, finance, and stock investments.\nSecurities and Exchange Board of India (SEBI) chief Madhabi Puri Buch talked about the growing number of finfluencers and inducements in the market. SEBI’s plan to publish a consultation paper consisting of a set of rules to be followed by the financial influencers."
        },
        {
          "question": "36. As per RBI data, what is the total external debt of India at the end of March 2023?",
          "options": [
            "[A] USD 24.7 billion",
            "[B] USD 124.7 billion",
            "[C] USD 224.7 billion",
            "[D] USD 624.7 billion"
          ],
          "correctAnswer": "Correct Answer: D [USD 624.7 billion]",
          "hint": "Notes:India’s external debt, at end-March 2023, increased by USD 5.6 billion to USD 624.7 billion from the year-earlier period.\nThe external debt to GDP ratio declined to 18.9% at end-March from 20% a year earlier, as per the data released by the Reserve Bank of India (RBI)."
        },
        {
          "question": "37. What is the Goods and Services Tax (GST) collection for the month of June?",
          "options": [
            "[A] Rs 1.41 lakh crore",
            "[B] Rs 1.61 lakh crore",
            "[C] Rs 1.81 lakh crore",
            "[D] Rs 2.01 lakh crore"
          ],
          "correctAnswer": "Correct Answer: B [Rs 1.61 lakh crore]",
          "hint": "Notes:India’s Goods & Services Tax (GST) collections rose 12% to over ₹1.61 lakh crore in June, as per the Finance Ministry.\nThe gross GST collection has crossed ₹1.60 lakh crore mark for the fourth time since the roll-out of the indirect tax regime six years ago on July 1, 2017."
        },
        {
          "question": "38. Which institution released a consultation paper on Consolidated Cyber Security and Cyber Resilience Framework (CSCRF)?",
          "options": [
            "[A] NITI Aayog",
            "[B] SEBI",
            "[C] RBI",
            "[D] NASSCOM"
          ],
          "correctAnswer": "Correct Answer: B [SEBI]",
          "hint": "Notes:SEBI has recently released a consultation paper on ‘Consolidated Cyber Security and Cyber Resilience Framework (CSCRF) for Sebi Regulated Entities’.\nThis proposed framework requires all regulated entities to establish an updated cyber crisis management plan."
        },
        {
          "question": "39. Which institution constituted a working group on implementing RBI’s recommendations on “working of the Asset Reconstruction Companies (ARCs)”?",
          "options": [
            "[A] IRDAI",
            "[B] IBA",
            "[C] SBI",
            "[D] SEBI"
          ],
          "correctAnswer": "Correct Answer: B [IBA]",
          "hint": "Notes:The Indian Banks’ Association (IBA) has recently constituted a five-member working group for implementing the recommendations of the Reserve Bank of India’s on “working of the Asset Reconstruction Companies (ARCs)”.\nThe Group has been constituted at the aegis of the Reserve Bank of India.The Group comprises Ajit Kumar, MD and CEO, Secondary Loan Market Association (SLMA); Hari Hara Mishra, CEO, Association of ARCs in India; Mythili Balasubramanian, Executive Director, Edelweiss ARC; and senior officials from State Bank of India (Dharmendra Pali) and ICICI Bank (Anupama Ranade)."
        },
        {
          "question": "40. Which institution has been working on ‘Internationalisation of rupee’?",
          "options": [
            "[A] NITI Aayog",
            "[B] RBI",
            "[C] SEBI",
            "[D] NPCI"
          ],
          "correctAnswer": "Correct Answer: B [RBI]",
          "hint": "Notes:The Reserve Bank of India (RBI’s) inter-departmental group is currently working on a roadmap towards the internationalization of the rupee.\nThis comes in light of the economic sanctions imposed by the US on Russia."
        },
        {
          "question": "41. Who is the head of the RBI’s working group on internationalisation of the rupee.?",
          "options": [
            "[A] D Subbarao",
            "[B] Sakthikanta Das",
            "[C] Urjit Patel",
            "[D] Radha Shyam Ratho"
          ],
          "correctAnswer": "Correct Answer: D [Radha Shyam Ratho]",
          "hint": "Notes:The Reserve Bank recently constituted a working group on to accelerate the pace of internationalisation of the rupee, which is headed by RBI Executive Director Radha Shyam Ratho.\nThe working group has submitted its report and has recommended various measures, including inclusion of the rupee in the Special Drawing Rights (SDR) basket and recalibration of the foreign portfolio investor (FPI) regime etc."
        },
        {
          "question": "42. Which entity has been recently brought under Prevention of Money Laundering Act (PMLA)?",
          "options": [
            "[A] Central Vigilance Commission",
            "[B] Goods and Services Tax Network",
            "[C] NITI Aayog",
            "[D] Central Bureau of Investigation"
          ],
          "correctAnswer": "Correct Answer: B [Goods and Services Tax Network]",
          "hint": "Notes:The government has updated the Prevention of Money Laundering Act to include the Goods and Services Tax Network (GSTN) among the entities obligated to share information with the Enforcement Directorate (ED) and the Financial Intelligence Unit (FIU).\nAs the 26th entity on the list, the GSTN will be required to provide relevant information to these agencies when investigations fall under their jurisdiction or when the agencies request information for their probes."
        },
        {
          "question": "43. The GST Council imposed what percent tax on online gaming, horse racing and casinos?",
          "options": [
            "[A] 5 per cent",
            "[B] 12 per cent",
            "[C] 18 per cent",
            "[D] 28 per cent"
          ],
          "correctAnswer": "Correct Answer: D [28 per cent]",
          "hint": "Notes:Over 130 online gaming companies and industry associations have approached the Centre urging it reconsider the 28 per cent GST on the full-face value for online gaming.\nThe GST Council imposed a 28 per cent tax on online gaming, horse racing and casinos. The effective date for the 28 per cent GST levy on online gaming will be announced after amendments to GST law."
        },
        {
          "question": "44. What is India’s GST collection for the month of July 2023?",
          "options": [
            "[A] Rs 1.05 lakh crore",
            "[B] Rs 1.15 lakh crore",
            "[C] Rs 1.65 lakh crore",
            "[D] Rs 1.95 lakh crore"
          ],
          "correctAnswer": "Correct Answer: C [Rs 1.65 lakh crore]",
          "hint": "Notes:India’s gross revenues from the Goods and Services Tax (GST) hit a three-month high to cross ₹1.65 lakh crore in July 2023. July’s collections were 2.2% higher than the previous month’s GST collection.\nHowever, at 10.8%, it was the slowest uptick in collections since July 2021 compared to revenues from the same month last year."
        },
        {
          "question": "45. India has settled its first-ever crude oil payment to which country in local currency?",
          "options": [
            "[A] UAE",
            "[B] Russia",
            "[C] Iran",
            "[D] Malaysia"
          ],
          "correctAnswer": "Correct Answer: A [UAE]",
          "hint": "Notes:In an effort to boost bilateral trade and reduce reliance on the US dollar, India has settled its first-ever crude oil payment to the United Arab Emirates (UAE) in local currency.\nThe deal was facilitated under the ‘local currency settlement’ (LCS) system between state-owned Abu Dhabi National Oil Company and the Indian Oil Corporation. The deal is the second transaction under the LCS. The first deal took place in July, and involved the sale of 25kg of gold from a leading UAE gold exporter to a buyer in India."
        },
        {
          "question": "46. Urban Infrastructure Development Fund (UIDF) is executed by which institution?",
          "options": [
            "[A] National Housing Bank",
            "[B] Reserve Bank of India",
            "[C] NITI Aayog",
            "[D] Securities Exchange Board of India"
          ],
          "correctAnswer": "Correct Answer: A [National Housing Bank]",
          "hint": "Notes:The National Housing Bank (NHB), in charge of executing the Urban Infrastructure Development Fund (UIDF), had issued guidelines in July and asked states to submit their proposals by September.\nThe fund makes low-cost loans available to 459 tier-2 cities with a population between 1 lakh and 9,99,999 and 580 tier-3 towns with a population between 50,000 and 99,999 as per the 2011 Census."
        },
        {
          "question": "47. What does “I” stand in I-CRR stand for?",
          "options": [
            "[A] Incidental",
            "[B] Incremental",
            "[C] Instrumental",
            "[D] International"
          ],
          "correctAnswer": "Correct Answer: B [Incremental]",
          "hint": "Notes:The Reserve Bank of India (RBI) has recently announced the phased discontinuation of the Incremental Cash Reserve Ratio (I-CRR), which was introduced on August 10, 2023.\nThe I-CRR was implemented to absorb surplus liquidity caused by various factors, including the return of Rs 2,000 notes to the banking system. The RBI aims to release I-CRR funds gradually to avoid shocks to system liquidity and ensure orderly money market functioning."
        },
        {
          "question": "48. Which institution funds the Veteran Skilling Program to empower Ladakh’s Ex-Army Personnel?",
          "options": [
            "[A] Airbus",
            "[B] Boeing",
            "[C] SpaceX",
            "[D] ISRO"
          ],
          "correctAnswer": "Correct Answer: B [Boeing]",
          "hint": "Notes:Boeing India, in collaboration with the Learning Links Foundation (LLF), has announced the expansion of their Veteran Skilling Program to Ladakh, India.\nThis initiative, funded by Boeing, is aimed at equipping former Indian Army veterans in Ladakh with the skills needed for employment, facilitating their integration into the local workforce. The program will provide technical and non-technical training, including soft skills, to prepare veterans for various industries. The first batch of the Veteran Skilling Program is set to commence in October 2023."
        },
        {
          "question": "49. The Ministry of Finance approved welfare measures for the benefit of employees of which institution?",
          "options": [
            "[A] EPFO",
            "[B] LIC",
            "[C] ISRO",
            "[D] IOCL"
          ],
          "correctAnswer": "Correct Answer: B [LIC]",
          "hint": "Notes:The Ministry of Finance approved a series of welfare measures for the benefit of Life Insurance Corporation of India (LIC) agents and employees.\nThe welfare measures are related to the amendments to LIC (Agents) Regulations, 2017, Enhancement of Gratuity Limit, and Uniform Rate of Family Pension among others. It will benefit more than 13 lakhs agents and more than 1 lakh regular employees."
        },
        {
          "question": "50. The Reserve Bank of India (RBI) has listed how many NBFCs in in the Upper Layer (NBFC-UL) under Scale Based Regulations (SBR)?",
          "options": [
            "[A] 5",
            "[B] 10",
            "[C] 15",
            "[D] 20"
          ],
          "correctAnswer": "Correct Answer: C [15]",
          "hint": "Notes:The Reserve Bank of India (RBI) has listed 15 non-banking finance companies (NBFCs), including LIC Housing Finance, Bajaj Finance, Shriram Finance, Tata Sons, and Cholamandalam Investment and Finance Company, placing them in the Upper Layer (NBFC-UL) under Scale Based Regulations (SBR) for non-bank lenders.\nThese NBFCs will be subject to enhanced regulatory requirements, at least for a period of five years from their classification in the layer, even in case they do not meet the parametric criteria in the subsequent year/s."
        }
      ],
      "type": "business-economy-banking-current-affairs",
      "__v": 0
    }]);
    const {type} = route?.params;
  ;
    const removeindex = index => {
      const filterarray = containquestionindex.filter(item => item != index);
      setcontainquestionindex(filterarray);
    };
    const finalobj = questionsarray.find((item)=>item.type==type);
    // setlength(finalobj.data.length);
  
   
  
    const styles = StyleSheet.create({
      text: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
      },
      options: {
        color: 'black',
        fontSize: 15,
      },
    });
    return (
      <LinearGradient
        colors={['#e5f6c1', '#cee993', '#b8ebd5', '#ede880']}
        style={{flex: 1, opacity: 0.8}}>
        <View
          style={{
            backgroundColor: 'rgba(255,255,255,.5)',
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={[styles.text]}>{type && type.toUpperCase()}</Text>
        </View>
        <ScrollView ref={scrollViewRef}
          onScroll={handleScroll}>
          {finalobj ? (
            finalobj.data.slice(pagenumber, pagenumber + 10).map((item, index) => (
              <View
                key={index}
                style={{
                  marginHorizontal: 10,
                  marginVertical: 15,
                  backgroundColor: 'rgba(255,255,255,.4)',
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                  borderRadius: 10,
                }}>
                <Text style={[styles.text, {marginBottom: 7}]}>
                  {/* {page * 10 == 0 ? index + 1 : index + 1 + page * 10} .{' '} */}
                  {item.question}
                </Text>
                {item.options.map((option, key) => (
                  <Text key={key} style={styles.options}>{option}</Text>
                ))}
                {containquestionindex && containquestionindex.includes(index) ? (
                  <TouchableOpacity
                    onPress={() => removeindex(index)}
                    style={{
                      backgroundColor: '#809ced',
                      marginVertical: 8,
                      width: 110,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 5,
                      height: 35,
                    }}>
                    <Text
                      style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
                      Hide Answer
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={() => {
                      setcontainquestionindex([...containquestionindex, index]);
                      console.log(containquestionindex);
                    }}
                    style={{
                      backgroundColor: '#809ced',
                      marginVertical: 8,
                      width: 110,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 5,
                      height: 35,
                    }}>
                    <Text
                      style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
                      Show Answer
                    </Text>
                  </TouchableOpacity>
                )}
                {containquestionindex && containquestionindex.includes(index) && (
                 <View>
                 <Text style={[styles.options, {marginTop: 7}]}>
                 <Text style={{fontWeight:"bold",fontSize:15.5}}>Answer</Text> - {item.correctAnswer.substring(15,)} 
                    
                  </Text>
                  <Text style={[styles.options, {marginTop: 7}]}>
                  <Text style={{fontWeight:"bold",fontSize:15.5}}>Hint</Text> - {item.hint} 
                    
                  </Text>
                 </View>
                )}
              </View>
            ))
          ) : (
            <ActivityIndicator size="large" color="black" />
          )}
          <Text
            style={{
              
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginVertical: 30,
              marginHorizontal:20,
              gap:10
            }}>
            {finalobj &&
              Array.from({length: finalobj.data.length / 10}).map(
                (item, index) => (
                <View key={index} style={{width:45,marginLeft:10,marginBottom:5,height:45}}>
                <TouchableOpacity
                    disabled={page == index }
                    onPress={() => {setPage(index); setPagenumber(index*10); scrollToTop();}}
                    style={{
                      width: 30,
                      height: 30,
                      backgroundColor:page==index?"#c5202c":'#809ced',
                      borderRadius: 15,
                      justifyContent: 'center',
                      alignItems: 'center',
                 
                    }}>
                    <Text style={[styles.text, {color: 'white'}]}>
                      {index + 1}
                    </Text>
                  </TouchableOpacity>
                </View>
                ),
              )}
          </Text>
        </ScrollView>
      </LinearGradient>
    );
  };
  
  export default English;
  