<template>
	<div v-show="dataReceived">
		<table class="table is-narrow" cellspacing="1">
			<thead>
				<tr>
					<th v-for="day in calendarDays">{{ day }}</th>
				</tr>
				<tr>
					<th colspan="7" class="is-month">
						{{ monthToStart }} {{ yearToStart }}
					</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="week in weekList">
					<td v-for="d in week" :class="d.state">{{ d.day }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import { Bus, range } from '../main'

	const
	cal_days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
	locale_months = {
		"ES": ['Enero', 'Febrero', 'Marzo', 'Abril',
					'Mayo', 'Junio', 'Julio', 'Agosto',
					'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
		"US": ['January', 'February', 'March', 'April',
					'May', 'June', 'July', 'August',
					'September', 'October', 'November', 'December']
	},
	locale_days = {
		"ES": ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
		"US": ['S', 'M', 'T', 'W', 'T', 'F', 'S']
	}

	export default {
		data () {
			return {
				startDate: '',
				daysAfterStartDate: 0,
				countryCode: ''
			}
		},
		methods: {
			setData(info) {
				this.startDate = info.startDateSelected
				this.daysAfterStartDate = info.numberOfDaysSelected
				this.countryCode = info.countryCodeSelected
			}
		},
		computed: {
			dataReceived () {
				return (this.startDate && this.daysAfterStartDate && this.countryCode)
			},
			calendarMonths () {
				if (this.dataReceived){
					return locale_months[this.countryCode]
				}
			},
			calendarDays () {
				if (this.dataReceived) {
					return locale_days[this.countryCode]
				}
			},
			monthToStart () {
				if (this.dataReceived) {
					return this.calendarMonths[this.startDate.getMonth()]
				}
			},
			yearToStart () {
				if (this.dataReceived) {
					return this.startDate.getFullYear()
				}
			},
			firstDayOfTheMonth () {
				if (this.dataReceived) {
					let d = new Date(
						this.startDate.getFullYear(),	this.startDate.getMonth(), 1
					)
					return d.getDay()
				}
			},
			weekList () {
				if (this.dataReceived) {
					let D = this.startDate.getDate(),
							M = this.startDate.getMonth(),
							Y = this.startDate.getFullYear()

					let list = range(
						1,
						cal_days_in_month[M] + ((Y % 4 === 0 && M === 1) ? 1 : 0)
					)

					let firstWeek = list.splice(0, 7 - this.firstDayOfTheMonth)
					let weeks = []

					while (firstWeek.length < 7) {
						firstWeek.unshift('')
					}

					while (list.length > 0) {
						weeks.push(list.splice(0, 7))
					}

					while (weeks[weeks.length - 1].length < 7) {
						weeks[weeks.length - 1].push('');
					}

					weeks = weeks.map((week) => {
						return week.map((day, i) => {
							let state = (!day) ? 'is-disabled' :
								(i === 0 || i === 6) ? 'is-weekend' : 'is-normal'
							return {
								day, state
							}
						})
					})

					return weeks
				}
			}
		},
		created () {
			Bus.$on('datasent', (data) => {
				this.setData(data)
			})
		}
	}
</script>

<style scoped lang="sass">
@import "~bulma/sass/utilities/_all"

.table
	border-collapse: separate
	border-spacing: .2rem

.table
	tr th, tr td
		border-width: 0
		text-align: center
		width: 2rem

.is-disabled
	background-color: $grey-lighter

.is-normal
	background-color: yellowgreen

.is-weekend
	background-color: yellow

.is-today
	background-color: $orange

.is-month
	background-color: palegreen
</style>

