interface TranslationItem {
  customId: string;
  text: string;
}

export const convertToTranslationObject = (
  translationItems: TranslationItem[]
) => {
  const translationObject: { [customId: string]: string } = {};

  for (const item of translationItems) {
    translationObject[item.customId] = item.text;
  }

  return translationObject;
};
