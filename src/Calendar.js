// Días totales en los meses del calendario
const cal_days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

// Función útil para generar rangos numéricos
const range = (start, end, interval = 1) => {
	let r = []
	for (let i = start; i <= end; i += interval) {
		r.push(i)
	}
	return r
}

const setWeeks = (firstDay, month, year) => {
	// Ajuste de calendario por si año bisiesto
	let ends = cal_days_in_month[month] +
		((year % 4 === 0 && month === 1) ? 1 : 0)

	let list = range(1, ends)

	// Formato de la primera semana
	let firstWeek = list.splice(0, 7 - firstDay)
	let weeks = []

	// Marcar días "sobrantes" de la primera semana
	while (firstWeek.length < 7) {
		firstWeek.unshift('')
	}

	// Añadir cada "semana" al mes
	while (list.length > 0) {
		weeks.push(list.splice(0, 7))
	}

	// Marcar días "sobrantes" de la última semana
	while (weeks[weeks.length - 1].length < 7) {
		weeks[weeks.length - 1].push('')
	}

	// Añadir primera semana, al inicio del mes
	weeks.unshift(firstWeek)

	return weeks
}

export const calendar = (dateStart, dateEnd) => {
	let SD = dateStart.getDate(), 		// día del mes de inicio
	 		SM = dateStart.getMonth(), 		// mes del año de inicio
			SY = dateStart.getFullYear(),	// año completo de inicio
			firstDayStart = new Date(SY, SM, 1).getDay(),
	 		ED = dateEnd.getDate(), 		// día del mes de fin
	 		EM = dateEnd.getMonth(), 		// mes del año de fin
			EY = dateEnd.getFullYear(),	// año completo de fin
			mon = 0,
			months = []

	// Si la fecha de fín está dentro del mes inicial, solo se carga dicho mes
	months.push([SM, SY, setWeeks(firstDayStart, SM, SY)])

	// Si la fecha de fín está fuera del mes inicial, se itera por cada mes
	if (SM < EM) {
		mon = SM
		while (mon < EM) {
			mon++ // próximo mes
			let fd = new Date(EY, mon, 1).getDay()
			months.push([mon, EY, setWeeks(fd, mon, EY)])
		}
	}

	return months

}

