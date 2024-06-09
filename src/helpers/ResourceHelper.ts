import {SupportedLanguages} from "../classes/SupportedLanguages";
import {DefaultResources_DE} from "../resources/translations/DefaultResources_DE";
import {DefaultResources_EN} from "../resources/translations/DefaultResources_EN";
import {DefaultResourcesInterface} from "../resources/translations/DefaultResourcesInterface";

export class ResourceHelper {

  static getLanguage() {
    // @ts-ignore
    const userLang: string = navigator.language || navigator.userLanguage;
    switch (userLang.slice(0, 2)) {
      case 'de':
        return SupportedLanguages.German;
      case 'fr':
        return SupportedLanguages.French;
      case 'en':
        return SupportedLanguages.English;
      case 'nl':
        return SupportedLanguages.Netherlands
      default:
        return SupportedLanguages.English;
    }
  }

  static get DefaultResource(): DefaultResourcesInterface {
    switch (this.getLanguage()) {
        case SupportedLanguages.German:
            return DefaultResources_DE;
        case SupportedLanguages.English:
            return DefaultResources_EN;
        default:
            return DefaultResources_EN;
    }
  }

}
