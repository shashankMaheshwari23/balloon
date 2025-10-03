import english from '../../public/assets/lang/english.json'
interface stringsArrayType {
    english: Object
}

export default {
    getLocalizationFile: function (key: string, locale: string) {
        var stringsArray: stringsArrayType = {
            english: english,
        }
        return new Promise(
            function (resolve) {
                var data = {}
                var filename: 'english' | "" = ""
                var lang = locale
                switch (lang.split("-")[0]) {
                    default:
                        filename = "english";
                }
                data = stringsArray[filename][key];
                
                resolve(data);
            })
    }
}