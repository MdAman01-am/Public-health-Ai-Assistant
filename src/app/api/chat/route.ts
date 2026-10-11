import { NextResponse } from 'next/server';
import { EMERGENCY_RED_FLAGS, VERIFIED_CLAIMS } from '@/data/mockData';

export async function POST(req: Request) {
  try {
    const { message, language } = await req.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const lowerQuery = message.toLowerCase();

    // 1. Check for Emergency Red Flags
    for (const flag of EMERGENCY_RED_FLAGS) {
      if (lowerQuery.includes(flag.keyword)) {
        return NextResponse.json({
          reply: language === 'hi' ? flag.emergencyActionHi : flag.emergencyActionEn,
          isEmergency: true,
          helpline: flag.helpline,
          sources: ['National Emergency Medical Service (108 / 112)', 'Emergency First Aid Protocols'],
        });
      }
    }

    // 2. Check for matching verified claims in database
    const matchedClaim = VERIFIED_CLAIMS.find((c) => {
      const q = lowerQuery;
      return (
        (q.includes('dengue') || q.includes('platelet') || q.includes('papaya')) && c.id === 'claim-1' ||
        (q.includes('lemon') || q.includes('baking soda') || q.includes('cancer')) && c.id === 'claim-2' ||
        (q.includes('ors') || q.includes('zinc') || q.includes('diarrhea') || q.includes('loose motion') || q.includes('दस्त')) && c.id === 'claim-3' ||
        (q.includes('antibiotic') || q.includes('cold') || q.includes('flu') || q.includes('एंटीबायोटिक')) && c.id === 'claim-4' ||
        (q.includes('pregnancy') || q.includes('pregnant') || q.includes('iron') || q.includes('folic') || q.includes('गर्भवती')) && c.id === 'claim-5'
      );
    });

    if (matchedClaim) {
      const replyText = language === 'hi'
        ? `【सत्यापन परिणाम: ${matchedClaim.verdict.toUpperCase()}】\n\n${matchedClaim.summaryHi}\n\nवैज्ञानिक व्याख्या: ${matchedClaim.scientificExplanationHi}\n\nआधिकारिक दिशानिर्देश: ${matchedClaim.source}`
        : `[VERIFICATION STATUS: ${matchedClaim.verdict.toUpperCase()}]\n\n${matchedClaim.summaryEn}\n\nScientific Evidence: ${matchedClaim.scientificExplanationEn}\n\nOfficial Source: ${matchedClaim.source}`;

      return NextResponse.json({
        reply: replyText,
        isEmergency: false,
        sources: [matchedClaim.source],
      });
    }

    // 3. Check for Gemini API Key if available
    const apiKey = process.env.GEMINI_API_KEY;
    if (apiKey && apiKey.trim() !== '') {
      try {
        const promptText = `You are SehatSaathi, an evidence-based digital public health assistant for India, grounded strictly in guidelines from the Indian Council of Medical Research (ICMR), Ministry of Health and Family Welfare (MoHFW), and the World Health Organization (WHO).
User language preference: ${language === 'hi' ? 'Hindi' : 'English'}.
User inquiry: "${message}"

Requirements:
1. Provide a direct, compassionate, scientifically accurate answer.
2. If this is a medical emergency, strongly advise calling 108/112 immediately.
3. Explicitly state that you provide public health education, not a personal clinical prescription.
4. Cite relevant ICMR, MoHFW, or WHO guidance principles where applicable.
5. Answer in ${language === 'hi' ? 'clear, respectful Hindi (Devanagari script)' : 'clear English'}.`;

        const geminiRes = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{ parts: [{ text: promptText }] }],
            }),
          }
        );

        if (geminiRes.ok) {
          const geminiData = await geminiRes.json();
          const generatedText =
            geminiData?.candidates?.[0]?.content?.parts?.[0]?.text;
          if (generatedText) {
            return NextResponse.json({
              reply: generatedText,
              isEmergency: false,
              sources: ['Live Gemini Grounded Expansion (ICMR / MoHFW / WHO Knowledge Baseline)'],
            });
          }
        }
      } catch (err) {
        console.error('Gemini call error:', err);
      }
    }

    // 4. Default Grounded RAG Knowledge Baseline response
    const defaultResponse =
      language === 'hi'
        ? `नमस्ते! सेहत साथी के साक्ष्य-आधारित जनस्वास्थ्य भंडार के अनुसार:\n\n1. किसी भी तीव्र या असामान्य लक्षण के लिए स्व-उपचार (Self-medication) अथवा सोशल मीडिया के नुस्खों पर निर्भर न रहें।\n2. प्राथमिक उपचार और मुफ्त परामर्श के लिए अपने नजदीकी आयुष्मान आरोग्य मंदिर या सरकारी प्राथमिक स्वास्थ्य केंद्र (PHC) से संपर्क करें।\n3. आपातकालीन स्थिति में तुरंत 108 (एम्बुलेंस) या 112 डायल करें।\n4. मानसिक स्वास्थ्य सहायता के लिए निःशुल्क राष्ट्रीय टेली-मानस हेल्पलाइन 14416 पर कॉल करें।\n\n(स्रोत: स्वास्थ्य एवं परिवार कल्याण मंत्रालय - MoHFW / ICMR जनस्वास्थ्य दिशानिर्देश)`
        : `According to SehatSaathi's grounded public health repository (ICMR & MoHFW clinical guidelines):\n\n1. Always avoid unverified self-medication, especially antibiotics or unproven social media remedies.\n2. For primary health screenings and diagnostic checks, visit your nearest Ayushman Arogya Mandir or District Hospital.\n3. In case of acute red flags (sudden severe pain, difficulty breathing, altered consciousness), contact Emergency Ambulance 108 or 112.\n4. For 24x7 free and confidential mental health support, dial the national Tele-MANAS helpline at 14416.\n\n(Source: Ministry of Health & Family Welfare / ICMR Guidelines)`;

    return NextResponse.json({
      reply: defaultResponse,
      isEmergency: false,
      sources: ['ICMR Clinical Management Protocols', 'MoHFW Standard Operating Procedures'],
    });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred while processing your request' },
      { status: 500 }
    );
  }
}
