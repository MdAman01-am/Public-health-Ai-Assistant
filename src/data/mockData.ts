import { HealthClaim, HealthFacility, Campaign, QuizQuestion, EmergencyRedFlag } from '@/types';

export const EMERGENCY_RED_FLAGS: EmergencyRedFlag[] = [
  {
    keyword: 'chest pain',
    condition: 'Potential Acute Coronary Syndrome (Heart Attack)',
    emergencyActionEn: 'CRITICAL ALERT: Chest pain, tightness, or pain radiating to jaw/left arm requires immediate emergency intervention. Do not drive yourself. Call 108 or 112 immediately.',
    emergencyActionHi: 'आपातकालीन चेतावनी: सीने में तेज दर्द, जकड़न या बाएं हाथ/जबड़े तक फैलने वाला दर्द दिल के दौरे का संकेत हो सकता है। तुरंत 108 या 112 एम्बुलेंस पर कॉल करें।',
    helpline: '108',
  },
  {
    keyword: 'stroke',
    condition: 'Acute Stroke / CVA (Face drooping, Arm weakness, Speech difficulty)',
    emergencyActionEn: 'CRITICAL ALERT: FAST protocol applies (Face drooping, Arm weakness, Speech difficulty, Time to call 108). Immediate brain imaging required within golden hour.',
    emergencyActionHi: 'आपातकालीन चेतावनी: लकवा/स्ट्रोक के लक्षण (चेहरा टेढ़ा होना, हाथ की कमजोरी, बोलने में कठिनाई)। तुरंत 108 पर कॉल करें। गोल्डन ऑवर में अस्पताल पहुंचें।',
    helpline: '108',
  },
  {
    keyword: 'snake bite',
    condition: 'Snake Envenomation',
    emergencyActionEn: 'CRITICAL ALERT: Keep patient calm, immobilize bitten limb with a splint. DO NOT cut, suck venom, or apply tight tourniquet. Rush to nearest district hospital for Anti-Snake Venom (ASV).',
    emergencyActionHi: 'आपातकालीन चेतावनी: सांप के काटने पर मरीज को शांत रखें, अंग को न हिलाएं। घाव पर चीरा न लगाएं या मुंह से जहर न चूसें। तुरंत नजदीकी अस्पताल में एंटी-स्नेक वेनम (ASV) के लिए जाएं।',
    helpline: '108',
  },
  {
    keyword: 'burn',
    condition: 'Severe Thermal or Chemical Burns',
    emergencyActionEn: 'Cool burn with clean running tap water for 20 minutes. DO NOT apply ice, oil, toothpaste, or turmeric. Cover with clean sterile cloth and go to emergency.',
    emergencyActionHi: 'गंभीर जलन पर तुरंत 20 मिनट तक सामान्य ठंडे बहते पानी से धोएं। टूथपेस्ट, तेल या हल्दी न लगाएं। साफ कपड़े से ढककर तुरंत अस्पताल जाएं।',
    helpline: '108',
  },
  {
    keyword: 'breathing',
    condition: 'Acute Severe Dyspnea / Respiratory Distress',
    emergencyActionEn: 'Severe shortness of breath, blue lips/fingertips, or inability to speak in sentences is a medical emergency. Administer oxygen support at the nearest emergency facility.',
    emergencyActionHi: 'सांस लेने में अत्यधिक कठिनाई, होंठ नीले पड़ना या बोलने में असमर्थ होना आपातकालीन स्थिति है। तुरंत ऑक्सीजन व मेडिकल सहायता के लिए 108 पर कॉल करें।',
    helpline: '108',
  },
];

export const VERIFIED_CLAIMS: HealthClaim[] = [
  {
    id: 'claim-1',
    claimEn: 'Papaya leaf juice cures Dengue fever and permanently raises platelets.',
    claimHi: 'पपीते के पत्तों का रस डेंगू बुखार को ठीक करता है और प्लेटलेट्स को स्थायी रूप से बढ़ाता है।',
    verdict: 'misleading',
    summaryEn: 'While small observational trials suggest mild thrombopoietic support, it is NOT an official cure for Dengue or severe plasma leakage.',
    summaryHi: 'छोटे अध्ययनों में प्लेटलेट में मामूली सुधार देखा गया है, लेकिन यह डेंगू का कोई प्रमाणित इलाज नहीं है और न ही प्लाज्मा रिसाव को रोकता है।',
    scientificExplanationEn: 'ICMR and WHO guidelines emphasize that Dengue management relies strictly on vigilant hemodynamic monitoring, precise oral/IV hydration, and paracetamol for fever. Papaya leaf juice can cause gastric irritation and must never replace medical fluid resuscitation.',
    scientificExplanationHi: 'ICMR और WHO के दिशानिर्देशों के अनुसार, डेंगू का मुख्य उपचार पर्याप्त मात्रा में ओआरएस, तरल पदार्थ और सतर्क निगरानी है। पपीते के रस से पेट में जलन हो सकती है और यह चिकित्सकीय निगरानी का विकल्प नहीं है।',
    source: 'ICMR Clinical Management Guidelines for Dengue / WHO SEARO',
    category: 'rumor',
    dateVerified: '2026-03-15',
    sharesCount: 1420,
  },
  {
    id: 'claim-2',
    claimEn: 'Drinking warm water with lemon and baking soda eliminates Cancer cells.',
    claimHi: 'नींबू और बेकिंग सोडा मिलाकर गर्म पानी पीने से कैंसर की कोशिकाएं नष्ट हो जाती हैं।',
    verdict: 'contradicted',
    summaryEn: 'Scientifically false. Blood pH is tightly regulated by the kidneys and lungs and cannot be altered by alkaline drinks.',
    summaryHi: 'वैज्ञानिक रूप से असत्य। रक्त का pH फेफड़ों और गुर्दों द्वारा नियंत्रित होता है और इसे क्षारीय पेय से नहीं बदला जा सकता।',
    scientificExplanationEn: 'Cancer cells create an acidic microenvironment due to altered metabolism, but ingesting alkaline food or baking soda cannot cure or prevent cancer. Delaying evidence-based oncology treatment (surgery, chemo, radiation) causes severe harm.',
    scientificExplanationHi: 'यह दावा पूर्णतः भ्रामक है। नींबू पानी विटामिन सी प्रदान करता है परंतु कैंसर कोशिकाओं को नष्ट नहीं कर सकता। वैज्ञानिक चिकित्सा में देरी करने से मरीज को भारी नुकसान हो सकता है।',
    source: 'National Cancer Grid (NCG) India / Tata Memorial Centre Advisories',
    category: 'rumor',
    dateVerified: '2026-02-10',
    sharesCount: 3890,
  },
  {
    id: 'claim-3',
    claimEn: 'ORS (Oral Rehydration Salts) with Zinc is the first-line therapy for pediatric diarrhea.',
    claimHi: 'ओआरएस (ORS) और जिंक बच्चों में दस्त (डायरिया) के लिए पहली पंक्ति का प्रामाणिक उपचार है।',
    verdict: 'supported',
    summaryEn: 'Completely verified. WHO low-osmolarity ORS combined with Zinc reduces stool volume and prevents dehydration mortality.',
    summaryHi: 'पूर्णतः सत्य एवं प्रमाणित। WHO प्रमाणित ओआरएस और जिंक बच्चों में निर्जलीकरण और मृत्यु के खतरे को समाप्त करता है।',
    scientificExplanationEn: 'MoHFW India and WHO recommend low-osmolarity ORS immediately upon onset of loose stools. Zinc supplementation (20mg daily for 14 days; 10mg for infants under 6 months) accelerates mucosal recovery and prevents recurrence.',
    scientificExplanationHi: 'स्वास्थ्य मंत्रालय (MoHFW) और WHO के अनुसार दस्त शुरू होते ही ओआरएस घोल और 14 दिनों तक जिंक की खुराक आंतों की परत को ठीक करने में सबसे प्रभावी है।',
    source: 'MoHFW India Guidelines on Diarrhea Control & WHO Guidelines',
    category: 'maternal',
    dateVerified: '2026-01-20',
    sharesCount: 840,
  },
  {
    id: 'claim-4',
    claimEn: 'Taking antibiotics cures viral flu, common cold, and viral fever quickly.',
    claimHi: 'एंटीबायोटिक दवाएं लेने से वायरल फ्लू, सामान्य सर्दी और बुखार तुरंत ठीक हो जाते हैं।',
    verdict: 'contradicted',
    summaryEn: 'Dangerous and false. Antibiotics ONLY kill bacteria, having zero effect on viral infections, and cause antimicrobial resistance.',
    summaryHi: 'खतरनाक और गलत। एंटीबायोटिक्स केवल बैक्टीरिया को मारते हैं, वायरस पर इनका कोई असर नहीं होता और इससे दवा प्रतिरोधकता (AMR) बढ़ती है।',
    scientificExplanationEn: 'Antibiotics like Azithromycin or Amoxicillin do not work against respiratory viruses. Indiscriminate use destroys healthy gut flora and accelerates superbug emergence, classified by ICMR and WHO as a global health threat.',
    scientificExplanationHi: 'एंटीबायोटिक्स केवल जीवाणु संक्रमण (Bacteria) पर काम करती हैं। सामान्य सर्दी और फ्लू वायरस से होते हैं। बिना डॉक्टर की सलाह के एंटीबायोटिक लेना शरीर के लिए अत्यंत हानिकारक है।',
    source: 'ICMR National Guidelines on Antimicrobial Stewardship in Hospitals',
    category: 'communicable',
    dateVerified: '2026-04-01',
    sharesCount: 5120,
  },
  {
    id: 'claim-5',
    claimEn: 'Pregnant women should avoid iron and folic acid supplements because they make the baby dark-skinned.',
    claimHi: 'गर्भवती महिलाओं को आयरन और फोलिक एसिड की गोलियां नहीं खानी चाहिए क्योंकि इससे शिशु का रंग सांवला होता है।',
    verdict: 'contradicted',
    summaryEn: 'Harmful traditional myth. IFA tablets prevent maternal anemia, low birth weight, and neural tube defects.',
    summaryHi: 'हानिकारक और भ्रामक अंधविश्वास। आयरन व फोलिक एसिड मां में एनीमिया रोकते हैं और शिशु के मस्तिष्क और रीढ़ के विकास के लिए अनिवार्य हैं।',
    scientificExplanationEn: 'Infant skin pigmentation is determined solely by genetics (melanin synthesis), not maternal oral iron. Iron deficiency anemia in pregnancy dramatically increases risks of post-partum hemorrhage and maternal mortality.',
    scientificExplanationHi: 'त्वचा का रंग आनुवंशिकी (DNA) पर निर्भर करता है। आयरन की कमी से मां में गंभीर खून की कमी (एनीमिया) हो सकती है। सरकार द्वारा दी जाने वाली लाल गोलियां (IFA) अवश्य लें।',
    source: 'Anemia Mukt Bharat Operational Guidelines / MoHFW India',
    category: 'maternal',
    dateVerified: '2026-03-28',
    sharesCount: 2950,
  },
];

export const PUBLIC_CAMPAIGNS: Campaign[] = [
  {
    id: 'camp-dengue',
    titleEn: 'Mission Dengue Mukt: Vector Control & Early Warning',
    titleHi: 'मिशन डेंगू मुक्त: मच्छर नियंत्रण और सतर्कता अभियान',
    badgeEn: 'Active Monsoon Drive',
    badgeHi: 'सक्रिय मानसूनी अभियान',
    descriptionEn: 'Targeted community drive to eliminate Aedes aegypti breeding sites, promote clean stagnant water management, and identify danger signs of Dengue early.',
    descriptionHi: 'एडिस मच्छर के प्रजनन स्थलों को समाप्त करने, रुके हुए पानी को साफ करने और डेंगू के शुरुआती लक्षणों की पहचान का राष्ट्रव्यापी अभियान।',
    targetAudience: 'Urban & Rural households, School authorities, Gram Panchayats',
    ashaScriptEn: [
      '"Namaste! Today we are checking water coolers, flower pots, and overhead tanks for mosquito larvae."',
      '"Remember: The Dengue mosquito bites during the day and breeds in fresh, clean standing water."',
      '"Dry out your water coolers every Sunday (\'Dry Day\')."',
      '"If anyone gets sudden high fever with eye pain, do NOT take Aspirin or Brufen. Use only Paracetamol and drink ORS/tender coconut water."'
    ],
    ashaScriptHi: [
      '"नमस्ते दीदी! आज हम आपके घर में कूलर, गमलों और छतों पर रखे बर्तनों में डेंगू के लार्वा की जांच करने आए हैं।"',
      '"याद रखें: डेंगू फैलाने वाला एडिस मच्छर दिन के समय काटता है और साफ ठहरे हुए पानी में पनपता है।"',
      '"हर रविवार को \'ड्राई डे\' मनाएं — कूलर और पानी के बर्तनों को खाली करके सुखाएं।"',
      '"यदि किसी को तेज बुखार, सिरदर्द या आंखों के पीछे दर्द हो, तो ब्रूफेन या एस्पिरिन बिल्कुल न लें। केवल पैरासिटामोल लें और खूब ओआरएस व पानी पिएं।"'
    ],
    keyActionsEn: [
      'Empty and scrub indoor water storage vessels once weekly.',
      'Dispose of discarded tires, broken plastic, and coconut shells.',
      'Wear full-sleeved clothing during dawn and dusk.',
      'Seek instant testing (NS1 antigen) on day 1-3 of fever at Ayushman Arogya Mandirs.'
    ],
    keyActionsHi: [
      'हफ्ते में एक बार पानी की टंकियों और कूलरों को खाली कर रगड़कर साफ करें।',
      'घर के आसपास पुराने टायर, प्लास्टिक और नारियल के खोल को नष्ट करें।',
      'सुबह और शाम पूरी आस्तीन के कपड़े पहनें।',
      'बुखार के 1-3 दिन के भीतर नजदीकी आयुष्मान आरोग्य मंदिर में NS1 एंटीजन जांच कराएं।'
    ],
    guidelineSource: 'National Vector Borne Disease Control Programme (NVBDCP)',
    bannerColor: 'from-amber-600 to-orange-500',
  },
  {
    id: 'camp-heatwave',
    titleEn: 'Garmi Se Bachav: Heatwave Resilience & Hydration',
    titleHi: 'गर्मी से बचाव: लू और डिहाइड्रेशन से सुरक्षा अभियान',
    badgeEn: 'Seasonal Alert',
    badgeHi: 'मौसमी चेतावनी',
    descriptionEn: 'Preventing heat exhaustion and fatal heatstroke among outdoor workers, farmers, senior citizens, and children during extreme summer temperatures.',
    descriptionHi: 'भीषण गर्मी और लू के दौरान मजदूरों, किसानों, बुजुर्गों और बच्चों में हीट स्ट्रोक और डिहाइड्रेशन की रोकथाम हेतु विशेष परामर्श।',
    targetAudience: 'Daily-wage workers, Agricultural labor, Schoolchildren, Elderly',
    ashaScriptEn: [
      '"Namaste! During peak sun hours (12 PM to 3 PM), please stay in shaded areas whenever possible."',
      '"Always carry an ORS packet, lemon water with a pinch of salt, or chhaas (buttermilk) before heading outdoors."',
      '"If someone stops sweating, has hot dry red skin, or becomes confused, sponge them with cool water and rush to hospital immediately."'
    ],
    ashaScriptHi: [
      '"नमस्ते! दोपहर 12 बजे से 3 बजे के बीच जब तक बहुत जरूरी न हो, सीधी धूप में निकलने से बचें।"',
      '"बाहर निकलते समय साथ में पानी की बोतल, ओआरएस, नींबू-नमक पानी या छाछ अवश्य रखें।"',
      '"अगर किसी को पसीना आना बंद हो जाए, शरीर बहुत गर्म हो या बेहोशी छाने लगे, तो तुरंत ठंडे पानी से स्पंज करें और नजदीकी स्वास्थ्य केंद्र ले जाएं।"'
    ],
    keyActionsEn: [
      'Drink 3-4 liters of water daily even if not feeling thirsty.',
      'Cover head with light cotton cloth or gamchha.',
      'Never leave children or pets inside closed parked vehicles.',
      'Recognize heat exhaustion: heavy sweating, dizziness, nausea.'
    ],
    keyActionsHi: [
      'प्यास न लगने पर भी दिन में 3-4 लीटर पानी, शिकंजी या छाछ पिएं।',
      'धूप में निकलते समय सिर को हल्के सूती गमछे या टोपी से ढकें।',
      'बंद गाड़ियों में बच्चों या बुजुर्गों को अकेला कभी न छोड़ें।',
      'चक्कर, उल्टी और अत्यधिक कमजोरी महसूस होने पर तुरंत ठंडी छायादार जगह पर आराम करें।'
    ],
    guidelineSource: 'National Disaster Management Authority (NDMA) & MoHFW Heat Action Plan',
    bannerColor: 'from-rose-600 to-red-500',
  },
  {
    id: 'camp-maternal',
    titleEn: 'Surakshit Matritva: 1000 Days Nutritional Security',
    titleHi: 'सुरक्षित मातृत्व: पहले 1000 सुनहरे दिन अभियान',
    badgeEn: 'Maternal & Child Health',
    badgeHi: 'मातृ एवं शिशु स्वास्थ्य',
    descriptionEn: 'Ensuring 4 antenatal checkups (ANC), full course of IFA and Calcium supplementation, institutional delivery, and exclusive breastfeeding for the first 6 months.',
    descriptionHi: 'गर्भावस्था के दौरान 4 प्रसव पूर्व जांच (ANC), आयरन-कैल्शियम की पूर्ण खुराक, संस्थागत प्रसव और पहले 6 महीने केवल स्तनपान का संदेश।',
    targetAudience: 'Expectant mothers, Young mothers, Families, Rural communities',
    ashaScriptEn: [
      '"Did you know? The first 1,000 days from conception to the child\'s 2nd birthday shape lifetime brain growth and immunity."',
      '"Take 1 Iron Folic Acid tablet daily after lunch with water or lemon water — never with hot tea or milk."',
      '"Ensure institutional delivery at the Community Health Center for safety and benefits under Janani Suraksha Yojana."'
    ],
    ashaScriptHi: [
      '"दीदी, गर्भधारण से लेकर बच्चे के 2 वर्ष की आयु तक के पहले 1000 दिन बच्चे के दिमाग और जीवनभर के स्वास्थ्य की नींव होते हैं।"',
      '"रोज दोपहर के भोजन के बाद 1 लाल गोली (आयरन) नींबू पानी या सादे पानी से लें, चाय या दूध के साथ न लें।"',
      '"सुरक्षित प्रसव के लिए नजदीकी सरकारी अस्पताल का ही चयन करें ताकि जननी सुरक्षा योजना का लाभ मिल सके।"'
    ],
    keyActionsEn: [
      'Register pregnancy in first trimester on the RCH portal.',
      'Complete minimum 4 ANC checkups with blood pressure and hemoglobin testing.',
      'Start breastfeeding within 1 hour of birth (colostrum is liquid gold).',
      'Do not give water, honey, or ghutti to infants before 6 months.'
    ],
    keyActionsHi: [
      'पहली तिमाही में ही नजदीकी आशा दीदी या एएनएम के पास गर्भावस्था का पंजीकरण कराएं।',
      'कम से कम 4 बार प्रसव पूर्व जांच (ANC) कराएं जिसमें हीमोग्लोबिन और बीपी की जांच अनिवार्य हो।',
      'जन्म के 1 घंटे के भीतर मां का पहला गाढ़ा पीला दूध (कोलोस्ट्रम) जरूर पिलाएं।',
      '6 महीने तक बच्चे को केवल और केवल मां का दूध दें, पानी या घुट्टी भी न दें।'
    ],
    guidelineSource: 'Pradhan Mantri Matru Vandana Yojana (PMMVY) / POSHAN Abhiyaan',
    bannerColor: 'from-emerald-600 to-teal-500',
  },
];

export const HEALTH_FACILITIES: HealthFacility[] = [
  {
    id: 'fac-1',
    name: 'All India Institute of Medical Sciences (AIIMS)',
    type: 'Tertiary Hospital',
    state: 'Delhi',
    city: 'New Delhi',
    address: 'Sri Aurobindo Marg, Ansari Nagar, New Delhi 110029',
    phone: '011-26588500',
    hasEmergency24x7: true,
    services: ['24/7 Trauma Care', 'Advanced Cardiology', 'Burn Unit', 'Pediatrics', 'Oncology', 'Free OPD for BPL'],
  },
  {
    id: 'fac-2',
    name: 'District Government General Hospital',
    type: 'District Hospital',
    state: 'Uttar Pradesh',
    city: 'Varanasi',
    address: 'Pandeypur, Varanasi, Uttar Pradesh 221002',
    phone: '0542-2501234',
    hasEmergency24x7: true,
    services: ['Emergency 108 Triage', 'Anti-Snake Venom (ASV)', 'Maternity Ward (SNCU)', 'Blood Bank', 'Free Generic Pharmacy'],
  },
  {
    id: 'fac-3',
    name: 'Ayushman Arogya Mandir (Health & Wellness Centre)',
    type: 'Ayushman Arogya Mandir',
    state: 'Maharashtra',
    city: 'Pune',
    address: 'Haveli Taluka, Pune District 412207',
    phone: '020-26123456',
    hasEmergency24x7: false,
    services: ['Primary Healthcare', 'Teleconsultation (eSanjeevani)', 'NCD Screening (Diabetes, BP)', 'Maternal IFA Distribution'],
  },
  {
    id: 'fac-4',
    name: 'NIMHANS Tele-MANAS Mental Health Cell',
    type: 'Tele-MANAS Center',
    state: 'Karnataka',
    city: 'Bengaluru',
    address: 'Hosur Road, Bengaluru, Karnataka 560029',
    phone: '14416',
    hasEmergency24x7: true,
    services: ['24/7 Mental Health Counselling', 'Crisis Intervention', 'Stress & Anxiety Support', 'Free Nationwide Helpline'],
  },
  {
    id: 'fac-5',
    name: 'Sub-Divisional Civil Hospital',
    type: 'Community Health Center',
    state: 'Bihar',
    city: 'Patna',
    address: 'Danapur Cantonment, Patna, Bihar 801503',
    phone: '0612-2209876',
    hasEmergency24x7: true,
    services: ['Emergency Care', 'Labor Room', 'Immunization', 'Malaria & Dengue Testing', 'Ultrasound'],
  },
  {
    id: 'fac-6',
    name: 'District Memorial Hospital',
    type: 'District Hospital',
    state: 'Rajasthan',
    city: 'Jaipur',
    address: 'Station Road, Jaipur, Rajasthan 302006',
    phone: '0141-2365400',
    hasEmergency24x7: true,
    services: ['24/7 Casualty', 'ICU', 'Pediatric ICU (PICU)', 'Heatstroke Treatment Cell', 'Dialysis Centre'],
  },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q-1',
    questionEn: 'Can taking antibiotics cure a common cold or viral flu?',
    questionHi: 'क्या एंटीबायोटिक दवाएं लेने से सामान्य सर्दी या वायरल फ्लू ठीक हो सकता है?',
    optionsEn: [
      'Yes, they kill viruses immediately',
      'No, antibiotics only act against bacteria and do not affect viruses',
      'Only if taken in double doses',
      'Yes, if taken with warm honey'
    ],
    optionsHi: [
      'हाँ, वे वायरस को तुरंत मार देती हैं',
      'नहीं, एंटीबायोटिक्स केवल बैक्टीरिया पर काम करती हैं, वायरस पर नहीं',
      'केवल तभी जब दोगुनी खुराक ली जाए',
      'हाँ, यदि गर्म शहद के साथ ली जाए'
    ],
    correctIndex: 1,
    explanationEn: 'Viruses cause colds and influenza. Antibiotics specifically target bacterial structures. Taking them unnecessarily causes severe antibiotic resistance (AMR).',
    explanationHi: 'सर्दी और फ्लू वायरस के कारण होते हैं। एंटीबायोटिक्स केवल बैक्टीरिया को मारते हैं। इनका अनुचित उपयोग शरीर में दवा प्रतिरोधकता बढ़ाता है।',
  },
  {
    id: 'q-2',
    questionEn: 'What is the immediate and most critical first aid for someone suffering a severe burn?',
    questionHi: 'गंभीर रूप से जले हुए व्यक्ति के लिए सबसे प्राथमिक और सुरक्षित प्राथमिक चिकित्सा क्या है?',
    optionsEn: [
      'Apply toothpaste and raw turmeric paste',
      'Rub butter or mustard oil over the wound',
      'Cool with clean, gentle running tap water for 15-20 minutes',
      'Break open all blisters immediately'
    ],
    optionsHi: [
      'टूथपेस्ट और कच्ची हल्दी का लेप लगाएं',
      'घाव पर मक्खन या सरसों का तेल रगड़ें',
      '15-20 मिनट तक साफ सामान्य बहते पानी से ठंडा करें',
      'सभी छालों को तुरंत फोड़ दें'
    ],
    correctIndex: 2,
    explanationEn: 'Cool running water dissipates trapped heat, halts thermal tissue injury, and relieves pain. Oils, toothpaste, and powders trap heat and increase infection risk.',
    explanationHi: 'सामान्य बहता पानी जले हुए स्थान की गर्मी को बाहर निकालता है और ऊतकों के नुकसान को रोकता है। तेल या टूथपेस्ट लगाने से गर्मी अंदर कैद हो जाती है और संक्रमण फैलता है।',
  },
  {
    id: 'q-3',
    questionEn: 'At what age should an infant first be given water, honey, or supplementary food?',
    questionHi: 'नवजात शिशु को पहली बार पानी, शहद या अन्य ऊपरी आहार किस उम्र में दिया जाना चाहिए?',
    optionsEn: [
      'From 1 month onwards',
      'Immediately after birth (Janm Ghutti)',
      'Strictly after completing 6 full months of exclusive breastfeeding',
      'At 3 months if the weather is hot'
    ],
    optionsHi: [
      '1 महीने की उम्र से',
      'जन्म के तुरंत बाद (जन्म घुट्टी)',
      '6 महीने तक केवल मां का दूध, उसके बाद ही ऊपरी आहार',
      'गर्मी का मौसम हो तो 3 महीने में'
    ],
    correctIndex: 2,
    explanationEn: 'WHO and ICMR mandate Exclusive Breastfeeding (EBF) for the first 6 months. Mother\'s breastmilk provides 88% water and all essential nutrients, antibodies, and enzymes.',
    explanationHi: 'WHO और ICMR के अनुसार पहले 6 महीने केवल मां का दूध ही बच्चे के लिए पूर्ण आहार और पानी की आपूर्ति करता है। 6 माह से पहले पानी या घुट्टी देने से संक्रमण का खतरा रहता है।',
  },
  {
    id: 'q-4',
    questionEn: 'Which national emergency number in India provides 24x7 free mental health counselling (Tele-MANAS)?',
    questionHi: 'भारत में कौन सा राष्ट्रीय नंबर 24x7 निःशुल्क मानसिक स्वास्थ्य परामर्श (Tele-MANAS) प्रदान करता है?',
    optionsEn: [
      '14416',
      '100',
      '102',
      '139'
    ],
    optionsHi: [
      '14416',
      '100',
      '102',
      '139'
    ],
    correctIndex: 0,
    explanationEn: '14416 (or 1800-891-4416) is the toll-free round-the-clock Tele-MANAS helpline launched by MoHFW under NIMHANS for mental health support in multiple Indian languages.',
    explanationHi: '14416 स्वास्थ्य मंत्रालय की राष्ट्रीय टेली-मानस मानसिक स्वास्थ्य हेल्पलाइन है जो 24x7 निःशुल्क और गोपनीय परामर्श कई भारतीय भाषाओं में देती है।',
  },
];
