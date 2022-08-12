export class Utils {
  public static translateStatus(status: string) {
    switch (status) {
      case 'Rumored':
        return 'Se rumorea';
      case 'Planned':
        return 'Planificado';
      case 'In Production':
        return 'En producción';
      case 'Post Production':
        return 'Post-producción';
      case 'Released':
        return 'Liberado';
      case 'Canceled':
        return 'Cancelado';
      default:
        return status;
    }
  }

  public static getLanguageFromIso(iso: string) {
    switch (iso) {
      case 'ab':
        return 'Abkhaz';
      case 'aa':
        return 'Afar';
      case 'af':
        return 'Africanos';
      case 'ak':
        return 'Akan';
      case 'sq':
        return 'Albania';
      case 'am':
        return 'Amárico';
      case 'ar':
        return 'Árabe';
      case 'an':
        return 'Aragonés';
      case 'hy':
        return 'Armenio';
      case 'as':
        return 'Assamese';
      case 'av':
        return 'Avaric';
      case 'ae':
        return 'Avestan';
      case 'ay':
        return 'Aymara';
      case 'az':
        return 'Azerbaiyán';
      case 'bm':
        return 'Bambara';
      case 'ba':
        return 'Bashkir';
      case 'eu':
        return 'Vasco';
      case 'be':
        return 'Belarús';
      case 'bn':
        return 'Bengalí';
      case 'bh':
        return 'Bihari';
      case 'bi':
        return 'Bislama';
      case 'bs':
        return 'Bosnia';
      case 'br':
        return 'Breton';
      case 'bg':
        return 'Búlgaro';
      case 'my':
        return 'Burmese';
      case 'ca':
        return 'Catalán';
      case 'ch':
        return 'Chamorro';
      case 'ce':
        return 'Chechenio';
      case 'ny':
        return 'Chichewa, Chewa, Nyanja';
      case 'zh':
        return 'Chino';
      case 'cv':
        return 'Chuvashia';
      case 'kw':
        return 'Cornualles';
      case 'co':
        return 'Corso';
      case 'cr':
        return 'Cree';
      case 'hr':
        return 'Croacia';
      case 'cs':
        return 'Checo';
      case 'da':
        return 'Danés';
      case 'dv':
        return 'Divehi, Dhivehi, Maldivas';
      case 'nl':
        return 'Holandés';
      case 'dz':
        return 'Dzongkha';
      case 'en':
        return 'Inglés';
      case 'eo':
        return 'Esperanto';
      case 'et':
        return 'Estonia';
      case 'ee':
        return 'Ewe';
      case 'fo':
        return 'Faroese';
      case 'fj':
        return 'Fiji';
      case 'fi':
        return 'Finlandés';
      case 'fr':
        return 'Francés';
      case 'ff':
        return 'Fula, Fulah, Pulaar, Pular';
      case 'gl':
        return 'Galicia';
      case 'ka':
        return 'Georgiano';
      case 'de':
        return 'Alemán';
      case 'el':
        return 'Griego Moderno';
      case 'gn':
        return 'Guaraní';
      case 'gu':
        return 'Gujarati';
      case 'ht':
        return 'Haitiano, creole haitiano';
      case 'ha':
        return 'Hausa';
      case 'he':
        return 'Hebreo (moderno)';
      case 'hz':
        return 'Herero';
      case 'hi':
        return 'Hindi';
      case 'ho':
        return 'Hiri Motu';
      case 'hu':
        return 'Húngaro';
      case 'ia':
        return 'Interlingua';
      case 'id':
        return 'Indonesio';
      case 'ie':
        return 'Interlingue';
      case 'ga':
        return 'Irlanda';
      case 'ig':
        return 'Igbo';
      case 'ik':
        return 'Inupiaq';
      case 'io':
        return 'Ido';
      case 'is':
        return 'Islandés';
      case 'it':
        return 'Italiano';
      case 'iu':
        return 'Inuktitut';
      case 'ja':
        return 'Japonés';
      case 'jv':
        return 'Javanés';
      case 'kl':
        return 'Kalaallisut, Groenlandia';
      case 'kn':
        return 'Canarés';
      case 'kr':
        return 'Kanuri';
      case 'ks':
        return 'Cachemira';
      case 'kk':
        return 'Kazajstán';
      case 'km':
        return 'Khmer';
      case 'ki':
        return 'Kikuyu, Gikuyu';
      case 'rw':
        return 'Kinyarwanda';
      case 'ky':
        return 'Kirguises, Kirguistán';
      case 'kv':
        return 'Komi';
      case 'kg':
        return 'Kongo';
      case 'ko':
        return 'Corea';
      case 'ku':
        return 'Kurdo';
      case 'kj':
        return 'Kwanyama, Kuanyama';
      case 'la':
        return 'Latin';
      case 'lb':
        return 'Luxemburgués, Luxemburgués';
      case 'lg':
        return 'Luganda';
      case 'li':
        return 'Limburgués, Limburgan, Limburger';
      case 'ln':
        return 'Lingala';
      case 'lo':
        return 'Lao';
      case 'lt':
        return 'Lituano';
      case 'lu':
        return 'Luba-Katanga';
      case 'lv':
        return 'Letonia';
      case 'gv':
        return 'Manx';
      case 'mk':
        return 'Macedonia';
      case 'mg':
        return 'Madagascar';
      case 'ms':
        return 'Malayo';
      case 'ml':
        return 'Malayalam';
      case 'mt':
        return 'Maltés';
      case 'mi':
        return 'Māori';
      case 'mr':
        return 'Maratí (Marathi)';
      case 'mh':
        return 'De las Islas Marshall';
      case 'mn':
        return 'Mongolia';
      case 'na':
        return 'Nauru';
      case 'nv':
        return 'Navajo, Navaho';
      case 'nb':
        return 'Noruego Bokmål';
      case 'nd':
        return 'Ndebele del Norte';
      case 'ne':
        return 'Nepali';
      case 'ng':
        return 'Ndonga';
      case 'nn':
        return 'Noruego Nynorsk';
      case 'no':
        return 'Noruego';
      case 'ii':
        return 'Nuosu';
      case 'nr':
        return 'Ndebele del sur';
      case 'oc':
        return 'Occitano';
      case 'oj':
        return 'Ojibwe, Ojibwa';
      case 'cu':
        return 'Antiguo eslavo eclesiástico, Iglesia eslava, eslavo eclesiástico, antiguo Búlgaro, Esclavo viejo';
      case 'om':
        return 'Oromo';
      case 'or':
        return 'Oriya';
      case 'os':
        return 'Osetia del Sur, osetio';
      case 'pa':
        return 'Panjabi, Punjabi';
      case 'pi':
        return 'Pāli';
      case 'fa':
        return 'Persa';
      case 'pl':
        return 'Polaco';
      case 'ps':
        return 'Pashto, Pushto';
      case 'pt':
        return 'Portugués';
      case 'qu':
        return 'Quechua';
      case 'rm':
        return 'Romanche';
      case 'rn':
        return 'Kirundi';
      case 'ro':
        return 'Rumania, Moldavia, Moldavan';
      case 'ru':
        return 'Ruso';
      case 'sa':
        return 'Sánscrito (samskrta)';
      case 'sc':
        return 'Sardo';
      case 'sd':
        return 'Sindhi';
      case 'se':
        return 'Sami del norte';
      case 'sm':
        return 'Samoa';
      case 'sg':
        return 'Sango';
      case 'sr':
        return 'Serbio';
      case 'gd':
        return 'Gaélico escocés, gaélico';
      case 'sn':
        return 'Shona';
      case 'si':
        return 'Cingalés, singalés';
      case 'sk':
        return 'Eslovaca';
      case 'sl':
        return 'Esloveno';
      case 'so':
        return 'Somalí';
      case 'st':
        return 'Southern Sotho';
      case 'es':
        return 'Español, castellano';
      case 'su':
        return 'Sundanese';
      case 'sw':
        return 'Swahili';
      case 'ss':
        return 'Swati';
      case 'sv':
        return 'Sueco';
      case 'ta':
        return 'Tamil';
      case 'te':
        return 'Telugu';
      case 'tg':
        return 'Tayikistán';
      case 'th':
        return 'Tailandia';
      case 'ti':
        return 'Tigrinya';
      case 'bo':
        return 'Tibetano estándar, Tibetano, Central';
      case 'tk':
        return 'Turkmenistán';
      case 'tl':
        return 'Tagalo';
      case 'tn':
        return 'Tswana';
      case 'to':
        return 'Tonga (Islas Tonga)';
      case 'tr':
        return 'Turco';
      case 'ts':
        return 'Tsonga';
      case 'tt':
        return 'Tártara';
      case 'tw':
        return 'Twi';
      case 'ty':
        return 'Tahitian';
      case 'ug':
        return 'Uighur, Uyghur';
      case 'uk':
        return 'Ucrania';
      case 'ur':
        return 'Urdu';
      case 'uz':
        return 'Uzbeko';
      case 've':
        return 'Venda';
      case 'vi':
        return 'Vietnamita';
      case 'vo':
        return 'Volapük';
      case 'wa':
        return 'Valonia';
      case 'cy':
        return 'Galés';
      case 'wo':
        return 'Wolof';
      case 'fy':
        return 'Oeste de Frisia';
      case 'xh':
        return 'Xhosa';
      case 'yi':
        return 'Yiddish';
      case 'yo':
        return 'Yoruba';
      case 'za':
        return 'Zhuang, Chuang';
      case 'zu':
        return 'Zulu';
      default:
        return iso
    }
  }
}
