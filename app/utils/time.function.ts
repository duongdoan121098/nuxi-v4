import {useDayjs} from "#dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/vi";
import type {Dayjs} from "dayjs";

const dayjs = useDayjs();
dayjs.extend(relativeTime);

async function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function getDateFromUnix(time: number) {
    return dayjs.unix(time).utcOffset("+07:00").format("DD/MM/YYYY HH:mm:ss");
}

function getNow(conditions?: boolean) {
    if (conditions) {
        return dayjs
            .utc()
            .subtract(1, "day")
            .utcOffset("+07:00")
            .format("YYYY/MM/DD");
    }
    return dayjs.utc().utcOffset("+07:00").format("YYYY/MM/DD");
}

function getDayOfWeek(date: string): number {
    return dayjs(date, "YYYY/MM/DD").day();
}

export {
    sleep,
    getDateFromUnix,
    getNow,
    getDayOfWeek,
};
