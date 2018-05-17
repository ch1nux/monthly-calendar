<template>
	<div v-show="dataReceived">
		<table class="table is-narrow" cellspacing="1" v-for="month in monthList">
			<thead>
				<tr>
					<th v-for="day in calendarDays">{{ day }}</th>
				</tr>
				<tr>
					<th colspan="7" class="is-month">
						{{ calendarMonthName(month[0]) }} {{ month[1] }}
					</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="week in month[2]">
				<td v-for="d in week" :class="d.state">{{ d.day }}</td>
					<!--<td v-for="d in week">{{ d }}</td>-->
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import { Bus } from '../main'
import { calendar } from '../Calendar'

const
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
				countryCode: '',
				monthList: []
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
			}
		},
		methods: {
			generateCalendar (info) {
				this.startDate = info.startDateSelected
				this.daysAfterStartDate = info.numberOfDaysSelected
				this.countryCode = info.countryCodeSelected

				let timePast = this.startDate.getTime() + (
					this.daysAfterStartDate * 24 * 60 * 60 * 1000
				)

				let	endDate = new Date(timePast)

				this.monthList = calendar(this.startDate, endDate)

				this.monthList = this.monthList.map((month) => {
					month[2] = month[2].map((week) => {
						return week.map((day, i) => {
							let state = (!day) ? 'is-disabled' :
								(i === 0 || i === 6) ? 'is-weekend' : 'is-normal'
							return { day, state }
						})
					})
					return month
				})

			},
			calendarMonthName (n) {
				return this.calendarMonths[n]
			}
		},
		created () {
			Bus.$on('datasent', (data) => {
				this.generateCalendar(data)
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

