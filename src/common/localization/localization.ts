import LocalizedStrings from 'react-native-localization';

class Localization {
    common = new LocalizedStrings({
        "ru":{
            phrase: "Намаскар",
            en: "en",
            ru: "ru",
            hi: "hi",
        },
        "en":{
            phrase: "Namaskar",
            en: "en",
            ru: "ru",
            hi: "hi",
        },
        "hi":{
            phrase: "नमस्कार",
            en: "en",
            ru: "ru",
            hi: "hi",
        },
    })
}
export const localization = new Localization();
