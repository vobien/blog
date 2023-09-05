module.exports = {
    toObjects: (objects) => {
        return objects.map((object) => object.toObject());
    },
    toObject: (object) => {
        return object ? object.toObject() : object;
    },
    convertToAscii: (inputString) => {
        const asciiMap = {
            à: 'a',
            á: 'a',
            ả: 'a',
            ã: 'a',
            ạ: 'a',
            ă: 'a',
            ằ: 'a',
            ắ: 'a',
            ẳ: 'a',
            ẵ: 'a',
            ặ: 'a',
            â: 'a',
            ầ: 'a',
            ấ: 'a',
            ẩ: 'a',
            ẫ: 'a',
            ậ: 'a',
            đ: 'd',
            è: 'e',
            é: 'e',
            ẻ: 'e',
            ẽ: 'e',
            ẹ: 'e',
            ê: 'e',
            ề: 'e',
            ế: 'e',
            ể: 'e',
            ễ: 'e',
            ệ: 'e',
            ì: 'i',
            í: 'i',
            ỉ: 'i',
            ĩ: 'i',
            ị: 'i',
            ò: 'o',
            ó: 'o',
            ỏ: 'o',
            õ: 'o',
            ọ: 'o',
            ô: 'o',
            ồ: 'o',
            ố: 'o',
            ổ: 'o',
            ỗ: 'o',
            ộ: 'o',
            ơ: 'o',
            ờ: 'o',
            ớ: 'o',
            ở: 'o',
            ỡ: 'o',
            ợ: 'o',
            ù: 'u',
            ú: 'u',
            ủ: 'u',
            ũ: 'u',
            ụ: 'u',
            ư: 'u',
            ừ: 'u',
            ứ: 'u',
            ử: 'u',
            ữ: 'u',
            ự: 'u',
            ỳ: 'y',
            ý: 'y',
            ỷ: 'y',
            ỹ: 'y',
            ỵ: 'y',
        };

        // Use a regular expression to replace Vietnamese characters with ASCII equivalents
        const asciiString = inputString.replace(
            /[àáảãạăằắẳẵặâầấẩẫậđèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵ]/g,
            (match) => asciiMap[match] || match
        );
        return asciiString;
    },
    generateSlug: (name, isUnique = false) => {
        let slug = name
            .toLowerCase()
            .replace(/[!?'"_]/g, '')
            .trim()
            .replace(/ +/g, '-');
        console.log(slug);

        // Normalize Unicode characters to their closest ASCII representation
        slug = module.exports.convertToAscii(slug);
        console.log(slug);

        if (isUnique) {
            // Generate a unique timestamp (milliseconds since epoch)
            const timestamp = new Date().getTime();

            // Combine the clean name and timestamp to create a unique slug
            slug = `${slug}-${timestamp}`;
            console.log(slug);
        }
        return slug;
    },
};
