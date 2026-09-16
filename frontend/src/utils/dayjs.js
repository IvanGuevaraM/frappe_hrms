import dayjs from "dayjs"
import updateLocale from "dayjs/plugin/updateLocale"
import localizedFormat from "dayjs/plugin/localizedFormat"
import relativeTime from "dayjs/plugin/relativeTime"
import isToday from "dayjs/plugin/isToday"
import isYesterday from "dayjs/plugin/isYesterday"
import isBetween from "dayjs/plugin/isBetween"
import "dayjs/locale/es"
import "dayjs/locale/es-mx"

dayjs.extend(updateLocale)
dayjs.extend(localizedFormat)
dayjs.extend(relativeTime)
dayjs.extend(isToday)
dayjs.extend(isYesterday)
dayjs.extend(isBetween)

export function configureDayjsLocale(language) {
	const locale = language?.replace("_", "-").toLowerCase()
	if (locale === "es-mx") {
		dayjs.locale("es-mx")
	} else if (locale?.startsWith("es")) {
		dayjs.locale("es")
	}
}

export default dayjs
