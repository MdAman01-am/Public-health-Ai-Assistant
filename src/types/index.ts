export type Language = 'en' | 'hi';

export type VerificationStatus = 'supported' | 'contradicted' | 'misleading';

export interface HealthClaim {
  id: string;
  claimEn: string;
  claimHi: string;
  verdict: VerificationStatus;
  summaryEn: string;
  summaryHi: string;
  scientificExplanationEn: string;
  scientificExplanationHi: string;
  source: string;
  sourceUrl?: string;
  category: 'nutrition' | 'communicable' | 'chronic' | 'maternal' | 'rumor';
  dateVerified: string;
  sharesCount: number;
}

export interface EmergencyRedFlag {
  keyword: string;
  condition: string;
  emergencyActionEn: string;
  emergencyActionHi: string;
  helpline: string;
}

export interface HealthFacility {
  id: string;
  name: string;
  type: 'District Hospital' | 'Ayushman Arogya Mandir' | 'Tele-MANAS Center' | 'Community Health Center' | 'Tertiary Hospital';
  state: string;
  city: string;
  address: string;
  phone: string;
  hasEmergency24x7: boolean;
  services: string[];
}

export interface Campaign {
  id: string;
  titleEn: string;
  titleHi: string;
  badgeEn: string;
  badgeHi: string;
  descriptionEn: string;
  descriptionHi: string;
  targetAudience: string;
  ashaScriptEn: string[];
  ashaScriptHi: string[];
  keyActionsEn: string[];
  keyActionsHi: string[];
  guidelineSource: string;
  bannerColor: string;
}

export interface QuizQuestion {
  id: string;
  questionEn: string;
  questionHi: string;
  optionsEn: string[];
  optionsHi: string[];
  correctIndex: number;
  explanationEn: string;
  explanationHi: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant' | 'system';
  text: string;
  timestamp: string;
  isEmergency?: boolean;
  sources?: string[];
  helpline?: string;
}
