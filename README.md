# SehatSaathi (सेहत साथी) / Bridge Care
> **Public Health Awareness & Biomedical Misinformation Verification Platform**
> Grounded against verified guidelines from the **Indian Council of Medical Research (ICMR)**, **Ministry of Health and Family Welfare (MoHFW)**, and the **World Health Organization (WHO)**.

---

## 🌟 Overview

**SehatSaathi** is an accessible, bilingual (English & Hindi) digital public health companion designed to democratize verified healthcare literacy, debunk rampant health misinformation, and empower community health workers (such as ASHA workers) and citizens across India.

---

## ✨ Key Features

1. **🤖 Grounded AI Health Assistant (`/assistant`)**
   - Answers health queries using deterministic, grounded Retrieval-Augmented Generation (RAG).
   - Instant triage for red-flag medical emergencies (chest pain, stroke, snakebites, severe burns) with emergency helpline shortcuts (112, 108, 1075).
   - Optional Live Generative AI expansion via Google Gemini API.

2. **🔍 Health Claim & Rumor Verifier (`/verify`)**
   - Real-time fact-checking database categorizing claims into *Evidence Supported*, *Contradicted / False*, or *Misleading*.
   - Direct citations to biomedical literature and official health advisories.
   - 1-click WhatsApp and social sharing of verified fact cards.

3. **📢 Health Awareness Campaigns (`/campaigns`)**
   - Active public health drives (e.g., Dengue vector control, Heatwave hydration, Cervical cancer vaccination).
   - Dedicated **ASHA & Community Worker scripts** (bilingual) for grassroots outreach.

4. **🏥 Verified Resource & Facility Directory (`/resources`)**
   - Searchable index of district hospitals, Ayushman Arogya Mandirs, Tele-MANAS centers, and testing labs.
   - Filterable by State, Union Territory, and facility type.

5. **🎯 Interactive Quizzes & Learning Modules (`/quizzes`, `/learn`)**
   - Micro-learning modules on nutrition, vector-borne diseases, maternal health, and seasonal care.
   - Gamified progress badges saved locally to preserve user privacy.

6. **🛡️ Medical Governance & Reviewer Portal (`/admin`)**
   - Editorial dashboard to audit query topics, approve citizen campaign proposals, and inspect verification statistics.

7. **♿ Inclusive & Accessible Design (`/accessibility`)**
   - Bilingual toggle (English / हिन्दी).
   - Voice input assistance via Web Speech API.
   - High-contrast visual styling and screen-reader accessibility.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 16](https://nextjs.org) with Turbopack & App Router
- **UI Library**: [React 19](https://react.dev)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **Icons**: [Lucide React](https://lucide.dev)
- **Language**: TypeScript 5 (Strict Mode)
- **State & Storage**: Client-side localStorage cache with server-side in-memory repository

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js**: v20 or higher
- **npm**: v10 or higher

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/MdAman01-am/Public-health-Ai-Assistant.git
cd Public-health-Ai-Assistant

# Install dependencies
npm install
```

### 3. Environment Setup
Copy the example environment file and configure variables:
```bash
cp .env.example .env.local
```

Key environment variables:
| Variable | Description | Default / Requirement |
|---|---|---|
| `GEMINI_API_KEY` | Google Gemini API key for live generative enhancement | *Optional* (Operates in deterministic grounded RAG mode if omitted) |
| `PORT` | Local dev port | `3000` |
| `NEXT_PUBLIC_APP_URL` | Application base URL | `http://localhost:3000` |

### 4. Running the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Production Build
```bash
npm run build
npm run start
```

---

## 🧪 Verification & Quality Checks

Run the linter and production build to ensure code quality:
```bash
# Run ESLint validation
npm run lint

# Compile and verify Next.js production bundle
npm run build
```

---

## ⚠️ Medical Disclaimer
*SehatSaathi provides public health awareness, education, and verified reference information only. It is NOT a diagnostic device, clinical tool, or prescription provider. In any emergency or acute health condition, always consult a registered medical doctor or contact emergency services (112 / 108).*

---

## 📄 License
This project is open-source under the MIT License.
