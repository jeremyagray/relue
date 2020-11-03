// https://gist.githubusercontent.com/ssskip/5a94bfcd2835bf1dea52/raw/aeed5b0cb3a7eda19e614915c3d88ce113e4a914/ISO3166-1.alpha2.json
const COUNTRY_CODES = {
  'AF': 'Afghanistan',
  'AX': 'Aland Islands',
  'AL': 'Albania',
  'DZ': 'Algeria',
  'AS': 'American Samoa',
  'AD': 'Andorra',
  'AO': 'Angola',
  'AI': 'Anguilla',
  'AQ': 'Antarctica',
  'AG': 'Antigua And Barbuda',
  'AR': 'Argentina',
  'AM': 'Armenia',
  'AW': 'Aruba',
  'AU': 'Australia',
  'AT': 'Austria',
  'AZ': 'Azerbaijan',
  'BS': 'Bahamas',
  'BH': 'Bahrain',
  'BD': 'Bangladesh',
  'BB': 'Barbados',
  'BY': 'Belarus',
  'BE': 'Belgium',
  'BZ': 'Belize',
  'BJ': 'Benin',
  'BM': 'Bermuda',
  'BT': 'Bhutan',
  'BO': 'Bolivia',
  'BA': 'Bosnia And Herzegovina',
  'BW': 'Botswana',
  'BV': 'Bouvet Island',
  'BR': 'Brazil',
  'IO': 'British Indian Ocean Territory',
  'BN': 'Brunei Darussalam',
  'BG': 'Bulgaria',
  'BF': 'Burkina Faso',
  'BI': 'Burundi',
  'KH': 'Cambodia',
  'CM': 'Cameroon',
  'CA': 'Canada',
  'CV': 'Cape Verde',
  'KY': 'Cayman Islands',
  'CF': 'Central African Republic',
  'TD': 'Chad',
  'CL': 'Chile',
  'CN': 'China',
  'CX': 'Christmas Island',
  'CC': 'Cocos (Keeling) Islands',
  'CO': 'Colombia',
  'KM': 'Comoros',
  'CG': 'Congo',
  'CD': 'Congo, Democratic Republic',
  'CK': 'Cook Islands',
  'CR': 'Costa Rica',
  'CI': 'Cote D\'Ivoire',
  'HR': 'Croatia',
  'CU': 'Cuba',
  'CY': 'Cyprus',
  'CZ': 'Czech Republic',
  'DK': 'Denmark',
  'DJ': 'Djibouti',
  'DM': 'Dominica',
  'DO': 'Dominican Republic',
  'EC': 'Ecuador',
  'EG': 'Egypt',
  'SV': 'El Salvador',
  'GQ': 'Equatorial Guinea',
  'ER': 'Eritrea',
  'EE': 'Estonia',
  'ET': 'Ethiopia',
  'FK': 'Falkland Islands (Malvinas)',
  'FO': 'Faroe Islands',
  'FJ': 'Fiji',
  'FI': 'Finland',
  'FR': 'France',
  'GF': 'French Guiana',
  'PF': 'French Polynesia',
  'TF': 'French Southern Territories',
  'GA': 'Gabon',
  'GM': 'Gambia',
  'GE': 'Georgia',
  'DE': 'Germany',
  'GH': 'Ghana',
  'GI': 'Gibraltar',
  'GR': 'Greece',
  'GL': 'Greenland',
  'GD': 'Grenada',
  'GP': 'Guadeloupe',
  'GU': 'Guam',
  'GT': 'Guatemala',
  'GG': 'Guernsey',
  'GN': 'Guinea',
  'GW': 'Guinea-Bissau',
  'GY': 'Guyana',
  'HT': 'Haiti',
  'HM': 'Heard Island & Mcdonald Islands',
  'VA': 'Holy See (Vatican City State)',
  'HN': 'Honduras',
  'HK': 'Hong Kong',
  'HU': 'Hungary',
  'IS': 'Iceland',
  'IN': 'India',
  'ID': 'Indonesia',
  'IR': 'Iran, Islamic Republic Of',
  'IQ': 'Iraq',
  'IE': 'Ireland',
  'IM': 'Isle Of Man',
  'IL': 'Israel',
  'IT': 'Italy',
  'JM': 'Jamaica',
  'JP': 'Japan',
  'JE': 'Jersey',
  'JO': 'Jordan',
  'KZ': 'Kazakhstan',
  'KE': 'Kenya',
  'KI': 'Kiribati',
  'KR': 'Korea',
  'KW': 'Kuwait',
  'KG': 'Kyrgyzstan',
  'LA': 'Lao People"s Democratic Republic',
  'LV': 'Latvia',
  'LB': 'Lebanon',
  'LS': 'Lesotho',
  'LR': 'Liberia',
  'LY': 'Libyan Arab Jamahiriya',
  'LI': 'Liechtenstein',
  'LT': 'Lithuania',
  'LU': 'Luxembourg',
  'MO': 'Macao',
  'MK': 'Macedonia',
  'MG': 'Madagascar',
  'MW': 'Malawi',
  'MY': 'Malaysia',
  'MV': 'Maldives',
  'ML': 'Mali',
  'MT': 'Malta',
  'MH': 'Marshall Islands',
  'MQ': 'Martinique',
  'MR': 'Mauritania',
  'MU': 'Mauritius',
  'YT': 'Mayotte',
  'MX': 'Mexico',
  'FM': 'Micronesia, Federated States Of',
  'MD': 'Moldova',
  'MC': 'Monaco',
  'MN': 'Mongolia',
  'ME': 'Montenegro',
  'MS': 'Montserrat',
  'MA': 'Morocco',
  'MZ': 'Mozambique',
  'MM': 'Myanmar',
  'NA': 'Namibia',
  'NR': 'Nauru',
  'NP': 'Nepal',
  'NL': 'Netherlands',
  'AN': 'Netherlands Antilles',
  'NC': 'New Caledonia',
  'NZ': 'New Zealand',
  'NI': 'Nicaragua',
  'NE': 'Niger',
  'NG': 'Nigeria',
  'NU': 'Niue',
  'NF': 'Norfolk Island',
  'MP': 'Northern Mariana Islands',
  'NO': 'Norway',
  'OM': 'Oman',
  'PK': 'Pakistan',
  'PW': 'Palau',
  'PS': 'Palestinian Territory, Occupied',
  'PA': 'Panama',
  'PG': 'Papua New Guinea',
  'PY': 'Paraguay',
  'PE': 'Peru',
  'PH': 'Philippines',
  'PN': 'Pitcairn',
  'PL': 'Poland',
  'PT': 'Portugal',
  'PR': 'Puerto Rico',
  'QA': 'Qatar',
  'RE': 'Reunion',
  'RO': 'Romania',
  'RU': 'Russian Federation',
  'RW': 'Rwanda',
  'BL': 'Saint Barthelemy',
  'SH': 'Saint Helena',
  'KN': 'Saint Kitts And Nevis',
  'LC': 'Saint Lucia',
  'MF': 'Saint Martin',
  'PM': 'Saint Pierre And Miquelon',
  'VC': 'Saint Vincent And Grenadines',
  'WS': 'Samoa',
  'SM': 'San Marino',
  'ST': 'Sao Tome And Principe',
  'SA': 'Saudi Arabia',
  'SN': 'Senegal',
  'RS': 'Serbia',
  'SC': 'Seychelles',
  'SL': 'Sierra Leone',
  'SG': 'Singapore',
  'SK': 'Slovakia',
  'SI': 'Slovenia',
  'SB': 'Solomon Islands',
  'SO': 'Somalia',
  'ZA': 'South Africa',
  'GS': 'South Georgia And Sandwich Isl.',
  'ES': 'Spain',
  'LK': 'Sri Lanka',
  'SD': 'Sudan',
  'SR': 'Suriname',
  'SJ': 'Svalbard And Jan Mayen',
  'SZ': 'Swaziland',
  'SE': 'Sweden',
  'CH': 'Switzerland',
  'SY': 'Syrian Arab Republic',
  'TW': 'Taiwan',
  'TJ': 'Tajikistan',
  'TZ': 'Tanzania',
  'TH': 'Thailand',
  'TL': 'Timor-Leste',
  'TG': 'Togo',
  'TK': 'Tokelau',
  'TO': 'Tonga',
  'TT': 'Trinidad And Tobago',
  'TN': 'Tunisia',
  'TR': 'Turkey',
  'TM': 'Turkmenistan',
  'TC': 'Turks And Caicos Islands',
  'TV': 'Tuvalu',
  'UG': 'Uganda',
  'UA': 'Ukraine',
  'AE': 'United Arab Emirates',
  'GB': 'United Kingdom',
  'US': 'United States',
  'UM': 'United States Outlying Islands',
  'UY': 'Uruguay',
  'UZ': 'Uzbekistan',
  'VU': 'Vanuatu',
  'VE': 'Venezuela',
  'VN': 'Vietnam',
  'VG': 'Virgin Islands, British',
  'VI': 'Virgin Islands, U.S.',
  'WF': 'Wallis And Futuna',
  'EH': 'Western Sahara',
  'YE': 'Yemen',
  'ZM': 'Zambia',
  'ZW': 'Zimbabwe'
};

const letters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

function validate(iban) {
  if (mod97(iban) == 1) {
    return true;
  } else {
    return false;
  }
}

function mod97(iban) {
  let numStr = '';

  // Rearrange.
  const str = iban.substring(4) + iban.substring(0, 4);

  // Convert letters to numbers.
  for (let i = 0; i < str.length; i++) {
    if (/[0-9]/.test(str[i])) {
      numStr += str[i];
    } else {
      numStr += (letters.indexOf(str[i].toLowerCase()) + 10).toString();
    }
  }

  const num = BigInt(numStr);

  return parseInt(num % 97n);
}

function calculateCheckDigits(iban) {
  const rem = mod97(iban.substring(0, 2) + '00' + iban.substring(4));

  if (rem < 10) {
    return '0' + rem.toString();
  } else {
    return rem.toString();
  }
}

function verifyCheckDigits(iban) {
  const cd = iban.substring(2, 4);
  
  if (cd == calculateCheckDigits(iban)) {
    return true;
  } else {
    return false;
  }
}

function verifyFormat(iban) {
  if (/[^A-Z0-9]/.test(iban)) {
    return false;
  } else {
    if (COUNTRY_CODES.hasOwnProperty(iban.substring(0, 2))) {
      return true;
    } else {
      return false;
    }
  }
}

function sanitize(str) {
  return str.replace(/[\s]+/gi, '');
}

function isValid(str) {
  const iban = sanitize(str.toUpperCase());

  if (! verifyFormat(iban)) {
    return false;
  } else if (! validate(iban)) {
    return false;
  } else if (verifyCheckDigits) {
    return true;
  } else {
    return false;
  }
}

console.log(isValid('GB82 WEST 1234 5698 7654 32'));
console.log(isValid('GB82 WEST 1.34 5698 7654 32'));
console.log(isValid('GB82 WEST 1234 5698 7654 325'));
console.log(isValid('GB82 TEST 1234 5698 7654 32'));
console.log(isValid('SA03 8000 0000 6080 1016 7519'));
