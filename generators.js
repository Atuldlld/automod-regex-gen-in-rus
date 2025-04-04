// MIT License

// Copyright (c) 2023 - 2025 treeben77

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

const numReplacers = {
    // English
    "i": ["1"],
    "l": ["1"],
    "e": ["3"],
    "a": ["4"],
    "s": ["5"],
    "t": ["7"],
    "b": ["8"],
    "g": ["9"],
    "o": ["0"],
    // Russian
    "и": ["1"],
    "л": ["1"],
    "е": ["3"],
    "а": ["4"],
    "з": ["3"],
    "ч": ["4"],
    "б": ["6"],
    "г": ["7"],
    "в": ["8"],
    "о": ["0"],
    "ю": ["10"]
};

const symReplacers = {
    // English
    "a": ["@", "∆", "/-\\\\", "/_\\\\", "/\\\\", "Д"],
    "b": ["\\|}", "\\|:", "\\|8", "ß", "ь"],
    "c": ["\\(", "€"],
    "e": ["£"],
    "f": ["ƒ", "£"],
    "h": ["\\|-\\|", "#", "\\}\\{"],
    "i": ["!", "\\|"],
    "j": ["ʝ"],
    "k": ["\\|<"],
    "l": ["!", "\\|"],
    "n": ["\\|\\\\|"],
    "s": ["\\$", "§"],
    "x": ["><"],
    "y": ["¥"],
    // Russian
    "а": ["@", "∆"],
    "б": ["6", "ь"],
    "в": ["\\|3", "ß"],
    "г": ["г", "\\|\\-"],
    "д": ["D", "g"],
    "е": ["€", "3"],
    "ж": ["\\>K", "\\*"],
    "з": ["3", "§"],
    "и": ["\\|/\\|", "N"],
    "й": ["\\|/\\|\\*", "N\\*"],
    "к": ["\\|<", "K"],
    "л": ["\\|\\-\\|", "J\\|"],
    "м": ["\\|\\v\\|", "M"],
    "н": ["\\|\\-\\|", "H"],
    "о": ["0", "()"],
    "п": ["\\|\\-\\|", "П"],
    "р": ["P", "p"],
    "с": ["\\(", "C"],
    "т": ["T", "+"],
    "у": ["Y", "y"],
    "ф": ["\\|\\|\\)", "q>"],
    "х": ["><", "X"],
    "ц": ["\\U", "u,"],
    "ч": ["4", "\\-|"],
    "ш": ["\\|\\|\\|", "w"],
    "щ": ["\\|\\|\\|,", "w,"],
    "ъ": ["\\|\\>", "b"],
    "ы": ["\\|bl", "bi"],
    "ь": ["\\|b", "b"],
    "э": ["€-", "3-"],
    "ю": ["\\|O", "IO"],
    "я": ["\\|9", "R"]
};

const letReplacers = {
    // English
    "i": ["l"],
    "l": ["i"],
    "u": ["v"],
    "m": ["nn", "rn"],
    "w": ["vv", "uu"],
    // Russian
    "а": ["о"],
    "о": ["а"],
    "е": ["э"],
    "э": ["е"],
    "и": ["й"],
    "й": ["и"],
    "ь": ["ъ"],
    "ъ": ["ь"],
    "ш": ["щ"],
    "щ": ["ш"],
    "м": ["н"],
    "н": ["м"],
    "л": ["д"],
    "д": ["л"]
};

const emoReplacers = {
    // English
    "a": ["🇦", "🅰️"],
    "b": ["🇧", "🅱️"],
    "c": ["🇨", "©️"],
    "d": ["🇩"],
    "e": ["🇪"],
    "f": ["🇫"],
    "g": ["🇬"],
    "h": ["🇭"],
    "i": ["🇮", "ℹ️"],
    "j": ["🇯"],
    "k": ["🇰"],
    "l": ["🇱"],
    "m": ["🇲", "Ⓜ️"],
    "n": ["🇳"],
    "o": ["🇴", "🅾️", "⭕"],
    "p": ["🇵", "🅿️"],
    "q": ["🇶"],
    "r": ["🇷", "®️"],
    "s": ["🇸"],
    "t": ["🇹", "✝️"],
    "u": ["🇺"],
    "v": ["🇻"],
    "w": ["🇼"],
    "x": ["🇽", "❌", "❎", "✖️"],
    "y": ["🇾"],
    "z": ["🇿"],
    "1": ["1️⃣"],
    "2": ["2️⃣"],
    "3": ["3️⃣"],
    "4": ["4️⃣"],
    "5": ["5️⃣"],
    "6": ["6️⃣"],
    "7": ["7️⃣"],
    "8": ["8️⃣"],
    "9": ["9️⃣"],
    "0": ["0️⃣"],
    // Russian
    "а": ["🅰️"],
    "б": ["🅱️"],
    "в": ["🇻"],
    "г": ["🇬"],
    "д": ["🇩"],
    "е": ["🇪"],
    "ж": ["⚡"],
    "з": ["3️⃣"],
    "и": ["ℹ️"],
    "й": ["ℹ️⭐"],
    "к": ["🇰"],
    "л": ["🇱"],
    "м": ["Ⓜ️"],
    "н": ["🇳"],
    "о": ["⭕", "🅾️"],
    "п": ["🇵"],
    "р": ["®️"],
    "с": ["©️"],
    "т": ["✝️"],
    "у": ["🇺"],
    "ф": ["🏧"],
    "х": ["❌"],
    "ц": ["🏛️"],
    "ч": ["4️⃣"],
    "ш": ["📊"],
    "щ": ["📊➕"],
    "ъ": ["🚫"],
    "ы": ["🇼"],
    "ь": ["🔻"],
    "э": ["3️⃣"],
    "ю": ["🇺🇴"],
    "я": ["🇷"]
};

const uniReplacers = {
    // English
    "a": ["ɑ", "а", "🅐"],
    "b": ["Ƅ", "Ь", "Ꮟ", "ᑲ", "ᖯ", "🅑"],
    "c": ["ϲ", "с", "ᴄ", "ⲥ", "ꮯ", "🅒"],
    "d": ["ԁ", "Ꮷ", "ᑯ", "ꓒ", "🅓"],
    "e": ["е", "ҽ", "ꬲ", "🅔"],
    "f": ["ẝ", "ꞙ", "ꬵ", "🅕"],
    "g": ["ƍ", "ɡ", "ᶃ", "🅖"],
    "h": ["һ", "հ", "Ꮒ", "🅗"],
    "i": ["ı", "ɩ", "ɪ", "ӏ", "Ꭵ", "ꙇ", "ꭵ", "ǀ", "Ι", "І", "Ӏ", "׀", "ו", "ן", "١", "۱", "ا", "Ⲓ", "ⵏ", "ꓲ", "𐊊", "𐌉", "𐌠", "𖼨", "ﺍ", "ﺎ", "￨", "🅘"],
    "j": ["🅙"],
    "k": ["🅚"],
    "l": ["ı", "ɩ", "ɪ", "ӏ", "Ꭵ", "ꙇ", "ꭵ", "ǀ", "Ι", "І", "Ӏ", "׀", "ו", "ן", "١", "۱", "ا", "Ⲓ", "ⵏ", "ꓲ", "𐊊", "𐌉", "𐌠", "𖼨", "ﺍ", "ﺎ", "￨", "🅛"],
    "m": ["𑜀", "𑣣", "🅜"],
    "n": ["ո", "ռ", "🅝"],
    "o": ["σ", "о", "ס", "ه", "٥", "ھ", "ہ", "ە", "۵", "०", "੦", "૦", "௦", "ం", "౦","ಂ","೦","ം","ං","๐","໐","ဝ","၀","ჿ","ᴏ","ᴑ","ⲟ","ꬽ","𐓪","𑣈","𑣗","ﮦ","ﻩ","ｏ", "○", "◍", "●", "🅞"],
    "p": ["р", "ⲣ", "ք", "🅟"],
    "q": ["🅠"],
    "r": ["г", "ᴦ", "ⲅ", "ꭇ", "ꭈ", "ꮁ", "🅡"],
    "s": ["ƽ", "ꜱ", "ꮪ", "𐑈", "𑣁", "🅢"],
    "t": ["🅣"],
    "u": ["ʋ", "υ", "ս", "ᴜ", "ꞟ", "ꭎ", "ꭒ", "𑣘", "ט", "𑜆", "🅤"],
    "v": ["ν", "ѵ", "ꮩ", "𑣀", "𑜆", "🅥"],
    "w": ["ɯ", "ѡ", "ԝ", "ա", "ᴡ", "ꮃ", "𑜊", "𑜎", "𑜏", "🅦"],
    "x": ["х", "ᕁ", "ᕽ", "᙮", "🅧"],
    "y": ["ɣ", "ʏ", "γ", "у", "ү", "ყ", "ᶌ", "ỿ", "ℽ", "ꭚ", "𑣄", "🅨"],
    "z": ["ᴢ", "ꮓ", "🅩"],
    // Russian
    "а": ["ɑ", "a", "𝓪", "𝒂", "𝕒"],
    "б": ["ƃ", "b", "𝓫", "𝒃", "𝕓"],
    "в": ["ʙ", "в", "𝓿", "𝒗", "𝕧"],
    "г": ["ᴦ", "г", "𝓰", "𝒈", "𝕘"],
    "д": ["ᴅ", "д", "𝓭", "𝒅", "𝕕"],
    "е": ["ε", "e", "𝓮", "𝒆", "𝕖"],
    "ж": ["ж", "𝔧", "𝓳", "𝒋", "𝕛"],
    "з": ["ʒ", "з", "𝔷", "𝓩", "𝒛", "𝕫"],
    "и": ["и", "i", "𝓲", "𝒊", "𝕚"],
    "й": ["й", "𝔦", "𝓲", "𝒊", "𝕚"],
    "к": ["κ", "k", "𝓴", "𝒌", "𝕜"],
    "л": ["ʌ", "л", "𝓵", "𝒍", "𝕝"],
    "м": ["ᴍ", "м", "𝓶", "𝒎", "𝕞"],
    "н": ["н", "n", "𝓷", "𝒏", "𝕟"],
    "о": ["ο", "o", "𝓸", "𝒐", "𝕠"],
    "п": ["п", "n", "𝓹", "𝒑", "𝕡"],
    "р": ["ρ", "p", "𝓻", "𝒓", "𝕣"],
    "с": ["ϲ", "c", "𝓬", "𝒄", "𝕔"],
    "т": ["τ", "t", "𝓽", "𝒕", "𝕥"],
    "у": ["у", "y", "𝔂", "𝒚", "𝕪"],
    "ф": ["φ", "ф", "𝓯", "𝒇", "𝕗"],
    "х": ["χ", "x", "𝔁", "𝒙", "𝕩"],
    "ц": ["ц", "u", "𝓾", "𝒖", "𝕦"],
    "ч": ["ч", "4", "𝓬", "𝒄", "𝕔"],
    "ш": ["ш", "w", "𝔀", "𝒘", "𝕨"],
    "щ": ["щ", "w", "𝓌", "𝒘", "𝕨"],
    "ъ": ["ъ", "b", "𝓫", "𝒃", "𝕓"],
    "ы": ["ы", "bl", "𝔂", "𝒚", "𝕪"],
    "ь": ["ь", "b", "𝓫", "𝒃", "𝕓"],
    "э": ["э", "e", "𝓮", "𝒆", "𝕖"],
    "ю": ["ю", "io", "𝔦𝔬", "𝓲𝓸", "𝒊𝒐"],
    "я": ["я", "r", "𝓻", "𝒓", "𝕣"]
};

function generateLeetspeakRegex(text, settings) {

    let end_text = "";
    let previous_charater;
    let previous_charater_combo = 0;
    let previous_charater_modified = false;
    for (var i = 0; i < text.length; i++) {
        let character = (text[i]);
        let replacers = [];

        if (character == previous_charater & previous_charater_modified) {
            previous_charater_combo++;
            continue;
        } else if (previous_charater_combo > 0 & previous_charater_modified) {
            if ((settings & 16) != 1) {
                end_text = end_text.concat(`{${previous_charater_combo + 1},}`);
            } else if ((settings & 512) != 0 && (settings & 16) != 0) {
                end_text = end_text.concat(`+`)
            } else if ((settings & 512) != 0 && (settings & 16) == 0) {
                end_text = end_text.concat(`{1, ${previous_charater_combo + 1}}`)
            } else {
                end_text = end_text.concat(`{${previous_charater_combo + 1}}`);
            }
            previous_charater_combo = 0;
            previous_charater_modified = false;
        } else if (i != 0 & previous_charater_combo == 0 & (settings & 16) != 0) {
            end_text = end_text.concat(`+`);
        };

        if ((settings & 1) != 0) {
            const numbers = numReplacers[character];
            if (numbers) {
                for (var i2 = 0; i2 < numbers.length; i2++) {
                    replacers.push(numbers[i2]);
                };
            };
        };

        if ((settings & 2) != 0) {
            const symbols = symReplacers[character];
            if (symbols) {
                for (var i2 = 0; i2 < symbols.length; i2++) {
                    replacers.push(symbols[i2]);
                };
            };
        };

        if ((settings & 4) != 0) {
            const letters = letReplacers[character];
            if (letters) {
                for (var i2 = 0; i2 < letters.length; i2++) {
                    replacers.push(letters[i2]);
                };
            };
        };

        if ((settings & 8) != 0) {
            const emojis = emoReplacers[character];
            if (emojis) {
                for (var i2 = 0; i2 < emojis.length; i2++) {
                    replacers.push(emojis[i2]);
                };
            };
        };

        
        if ((settings & 1024) != 0) {
            const unicodes = uniReplacers[character];
            if (unicodes) {
                for (var i2 = 0; i2 < unicodes.length; i2++) {
                    replacers.push(unicodes[i2]);
                };
            };
        };

        let is_all_one_char = true
        for (var i2 = 0; i2 < replacers.length; i2++) {
            let replacer = replacers[i2];

            if (replacer == null) {break}

            if (replacer.replaceAll("\\", "").length > 1 & ((settings & 32) != 0 ||
            /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g.test(replacer))) {
                is_all_one_char = false
            } else if (replacer.replaceAll("\\", "").length == 1 & !replacer.includes("\\\\")) {
                // pass
            } else if (replacer.length > 1) {
                replacers.splice(i2, 1)
                i2--
            }
        };

        if ((settings & 64) != 0 & !end_text == "") {
            end_text = end_text.concat("\\s*")
        }
        if (replacers.length == 0) {
            end_text = end_text.concat(character);
        } else {
            if (is_all_one_char) {
                end_text = end_text.concat(`[${character}${replacers.join('')}]`);
            } else {
                end_text = end_text.concat(`(${character}|${replacers.join('|')})`);
            }
            previous_charater_modified = true;
        };

        if ((settings & 128) != 0 & (character == "a" || character == "e" || character == "i" || character == "o" || character == "u")) {
            end_text = end_text.concat("?")
        };

        previous_charater = character;
    };

    if (previous_charater_combo > 0 & previous_charater_modified) {
        if ((settings & 16) != 0) {
            end_text = end_text.concat(`{${previous_charater_combo + 1},}`);
        } else {
            end_text = end_text.concat(`{${previous_charater_combo + 1}, ${previous_charater_combo + 1}}`);
        }
        previous_charater_combo = 0;
        previous_charater_modified = false;
    };

    if (previous_charater_combo > 0 & previous_charater_modified) {
        if ((settings & 16) != 0  && (settings & 512) == 0) {
            end_text = end_text.concat(`{${previous_charater_combo + 1},}`);
        } else if ((settings & 512) != 0 && (settings & 16) != 0) {
            end_text = end_text.concat(`+`)
        } else if ((settings & 512) != 0 && (settings & 16) == 0) {
            end_text = end_text.concat(`{0, ${previous_charater_combo + 1}}`)
        } else {
            end_text = end_text.concat(`{${previous_charater_combo + 1}}`);
        }
        previous_charater_combo = 0;
        previous_charater_modified = false;
    } else if (previous_charater_combo == 0 & (settings & 16) != 0) {
        end_text = end_text.concat(`+`);
    };

    if ((settings & 256) == 0) {
        end_text = `(\\A|\\s)${end_text}(\\z|\\s)`
    }
    
    return {
      regex: end_text,
      too_long: end_text.length > 260
    }
}

const REGEX_CHARACTER_SETS = [
    {
        setting_bitwise: 2,
        value: function(settings) {
            if (!(settings & 8)) {
                return "a-zA-Z";
            } else {return ""};
        },
        essential: true
    },
    {
        setting_bitwise: 4,
        value: function(settings) {
            if (!(settings & 8)) {
                return "0-9";
            } else {return ""};
        },
        essential: true
    },
    {
        setting_bitwise: 8,
        value: function(settings) {
            if (settings & 2 && settings & 4) {
                return "\\p{ASCII}";
            } else if (settings & 2) {
                return "\\p{ASCII}--[0-9]";
            } else if (settings & 4) {
                return "\\p{ASCII}--[a-zA-Z]";
            }  else {
                return "\\p{ASCII}--[a-zA-Z0-9]";
            }
        },
        essential: true
    },
    {
        setting_bitwise: 16,
        value: "€…†‡‘’“”•–—™¢£¤¥¦§©®°±²³µ¶¹"
    },
    {
        setting_bitwise: 32,
        value: function(settings) {
            if (settings & 16) {
                return "À-ÿŸ¿¡"
            } else {
                return "À-ÿŸ"
            }
        }
    },
    {
        setting_bitwise: 64,
        value: "\\p{Extended_Pictographic}\\u{200d}\\u{1f3fb}-\\u{1f3ff}\\u{1f1e6}-\\u{1f1ff}\\u{fe0f}"
    },
    {
        setting_bitwise: 128,
        value: "\\u{0400}-\\u{04ff}\\u{0500}-\\u{052f}\\u{a640}-\\u{a69f}\\u{1e030}-\\u{1e08f}\\u{1d2b}-\\u{1d78}\\u{fe2e}-\\u{fe2f}"
    },
    {
        setting_bitwise: 256,
        value: "\\u{3000}-\\u{303f}\\u{3040}-\\u{309f}\\u{30a0}-\\u{30ff}\\u{ff00}-\\u{ff9f}\\u{4e00}-\\u{9faf}\\u{3400}-\\u{4dbf}"
    },
    {
        setting_bitwise: 512,
        value: "\\u{0621}-\\u{064b}\\u{0660}-\\u{0669}"
    }
]

function generateCharacterTypeRegex(settings) {
    let character_sets = [];
    let violates_essential = false;

    for (var i = 0; i < REGEX_CHARACTER_SETS.length; i++) {
        let character_set = REGEX_CHARACTER_SETS[i];

        if (settings & character_set.setting_bitwise) {
            if (typeof character_set.value === 'function') {
                character_sets.push(character_set.value(settings));
            } else {
                character_sets.push(character_set.value);
            };
            if (character_set.essential && !(settings & 1)) {
                violates_essential
            }
        }
    };

    let end_text
    if (settings & 1) {
        end_text = `[^${character_sets.join('')}]`;
        if (!character_sets.length) {
            end_text = `.`;
        };
    } else {
        end_text = `[${character_sets.join('')}]`;
        if (!character_sets.length) {
            end_text = ``;
        };
    }

    return {
        regex: end_text,
        too_long: end_text.length > 260
    };
};

export { generateLeetspeakRegex, generateCharacterTypeRegex }
