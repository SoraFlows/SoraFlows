
export default async function GetDictLang(lang: string) {
    const data = await import(`../../messages/${lang}.json`);
    console.log(data);
    return data;
}