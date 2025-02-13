import type {UrlType} from "~/types";

const paramsToString = (params: any, url?: UrlType | string): string => {
    const arrayTemp: string[] = [];
    const urlTemp = url;
    if (params) {
        for (const [key, value] of Object.entries(params)) {
            arrayTemp.push(`${key}-${value}`);
        }
    }
    if (typeof urlTemp === "string") {
        urlTemp.replaceAll("/", "-");
    }
    if (arrayTemp.length > 1) {
        return urlTemp + arrayTemp.toString();
    }
    return String(urlTemp);
};

async function fetchWithRetry(url: string, options: RequestInit = {}, retries = 5, delay = 2000): Promise<any> {
    try {
        const response = await fetch(url, options);
        if (response.status === 503) {
            if (retries > 0) {
                await new Promise(resolve => setTimeout(resolve, delay)); // Chờ trước khi thử lại
                return fetchWithRetry(url, options, retries - 1, delay);
            } else {
                return null;
            }
        }

        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}

export {paramsToString,fetchWithRetry};
