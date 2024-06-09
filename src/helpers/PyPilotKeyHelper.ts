import {SupportedLanguages} from "../classes/SupportedLanguages";
import {PyPilotKeysDE} from "../resources/translations/pypilot_keys/de_translations";
import {PyPilotKeysNL} from "../resources/translations/pypilot_keys/nl_translations";
import {PyPilotKeysFR} from "../resources/translations/pypilot_keys/fr_translations";
import {PyPilotKeysEN} from "../resources/translations/pypilot_keys/en_translations";
import {ResourceHelper} from "./ResourceHelper";

export class PyPilotKeyHelper {

  static getDescription(key: string) {
    const language = ResourceHelper.getLanguage();
    const descriptions = this.getPyPilotDescriptions(language);
    return descriptions.find(x => x.key == key)?.desc ?? 'keine Beschreibung vorhanden';
  }

  private static getPyPilotDescriptions(lang: SupportedLanguages) {
    switch (lang) {
        case SupportedLanguages.German:
            return PyPilotKeysDE;
        case SupportedLanguages.French:
            return PyPilotKeysFR;
        case SupportedLanguages.English:
            return PyPilotKeysEN;
        case SupportedLanguages.Netherlands:
            return PyPilotKeysNL;
        default:
            return PyPilotKeysEN;
    }
  }

}
