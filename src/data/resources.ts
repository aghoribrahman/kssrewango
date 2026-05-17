export interface Resource {
  id: string;
  title: string;
  description: string;
  category: "prevention" | "care" | "nutrition" | "rights" | "tb";
  language: "hi" | "en";
  downloadUrl: string;
  summary: string;
}

export const resources: Resource[] = [
  {
    id: "1",
    title: "सिकल सेल गाइड - हिंदी",
    description: "सिकल सेल रोग को समझने और प्रबंधित करने के लिए एक व्यापक मार्गदर्शिका।",
    category: "care",
    language: "hi",
    downloadUrl: "/pdf/Sickle Cell Awareness comic.pdf",
    summary: "इसमें संकट (crisis) के लक्षणों, जलयोजन (hydration) के महत्व और दैनिक देखभाल के सुझावों को शामिल किया गया है।"
  },
  {
    id: "2",
    title: "Sickle Cell Guide - English",
    description: "A comprehensive guide to understanding and managing Sickle Cell Disease.",
    category: "care",
    language: "en",
    downloadUrl: "#",
    summary: "Covers crisis symptoms, importance of hydration, and daily care tips."
  },
  {
    id: "3",
    title: "पोषण मार्गदर्शिका",
    description: "सिकल सेल और टीबी रोगियों के लिए स्वस्थ आहार और पोषण संबंधी सुझाव।",
    category: "nutrition",
    language: "hi",
    downloadUrl: "#",
    summary: "आयरन युक्त भोजन, फोलिक एसिड और स्वस्थ विकास के लिए संतुलित आहार पर केंद्रित।"
  },
  {
    id: "4",
    title: "Nutrition Guide",
    description: "Healthy diet and nutritional tips for Sickle Cell and TB patients.",
    category: "nutrition",
    language: "en",
    downloadUrl: "#",
    summary: "Focuses on iron-rich foods, folic acid, and balanced diets for healthy growth."
  },
  {
    id: "5",
    title: "जागरूकता पोस्टर - बचाव",
    description: "सिकल सेल के संचरण को रोकने के लिए सामुदायिक जागरूकता पोस्टर।",
    category: "prevention",
    language: "hi",
    downloadUrl: "#",
    summary: "विवाह से पहले कुंडली के बजाय सिकल सेल कुंडली मिलाने के महत्व को समझाता है।"
  },
  {
    id: "6",
    title: "Awareness Poster - Prevention",
    description: "Community awareness posters to prevent transmission of Sickle Cell.",
    category: "prevention",
    language: "en",
    downloadUrl: "#",
    summary: "Explains the importance of matching Sickle Cell status before marriage."
  },
  {
    id: "7",
    title: "मरीज के अधिकार",
    description: "सरकारी योजनाओं और स्वास्थ्य सेवाओं के तहत आपके अधिकार।",
    category: "rights",
    language: "hi",
    downloadUrl: "#",
    summary: "दिव्यांगता प्रमाण पत्र और मुफ्त इलाज की सरकारी योजनाओं के बारे में जानकारी।"
  },
  {
    id: "8",
    title: "टीबी देखभाल मार्गदर्शिका",
    description: "टीबी के लक्षणों, उपचार और डॉट्स (DOTS) के महत्व को समझने के लिए गाइड।",
    category: "tb",
    language: "hi",
    downloadUrl: "#",
    summary: "नियमित दवा, स्वच्छता और रिकवरी के दौरान पोषण के महत्व पर केंद्रित।"
  },
  {
    id: "9",
    title: "TB Care Guide",
    description: "Understanding TB symptoms, treatment, and the importance of DOTS.",
    category: "tb",
    language: "en",
    downloadUrl: "#",
    summary: "Focuses on medication adherence, hygiene, and nutrition during recovery."
  }
];
