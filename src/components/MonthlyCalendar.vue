<template>
	<div>
		<table class="table is-narrow" cellspacing="1">
			<thead>
				<tr>
					<th>S</th>
					<th>M</th>
					<th>T</th>
					<th>W</th>
					<th>T</th>
					<th>F</th>
					<th>S</th>
				</tr>
				<tr>
					<th colspan="7" class="is-month">May 2018</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="is-weekend">1</td>
					<td class="is-normal">4</td>
					<td class="is-normal">4</td>
					<td class="is-normal">4</td>
					<td class="is-normal">4</td>
					<td class="is-normal">4</td>
					<td class="is-disabled"></td>
				</tr>
				<tr>
					<td class="is-weekend">1</td>
					<td class="is-normal">4</td>
					<td class="is-normal">4</td>
					<td class="is-today">4</td>
					<td class="is-normal">4</td>
					<td class="is-normal">4</td>
					<td class="is-disabled"></td>
				</tr>
				<tr>
					<td class="is-weekend">1</td>
					<td class="is-normal">4</td>
					<td class="is-normal">4</td>
					<td class="is-normal">4</td>
					<td class="is-normal">4</td>
					<td class="is-normal">4</td>
					<td class="is-disabled"></td>
				</tr>
				<tr>
					<td class="is-weekend">1</td>
					<td class="is-normal">4</td>
					<td class="is-normal">4</td>
					<td class="is-normal">4</td>
					<td class="is-normal">4</td>
					<td class="is-normal">4</td>
					<td class="is-disabled"></td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import { Bus } from '../main'

	const
	cal_days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
	locale_months = {
		"ES": ['Enero', 'Febrero', 'Marzo', 'Abril',
					'Mayo', 'Junio', 'Julio', 'Agosto',
					'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
		"US": ['January', 'February', 'March', 'April',
					'May', 'June', 'July', 'August',
					'September', 'October', 'November', 'Decemeber']
	},
	locale_days = {
		"ES": ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
		"US": ['S', 'M', 'T', 'W', 'T', 'F', 'S']
	},
	months = [],
	days = [], 	// Días
	weeks = []	// Semanas

	export default {
		data () {
			return {
				startDate: '',
				daysAfterStartDate: 0,
				countryCode: ''
			}
		},
		methods: {
			generateCalendar(info) {
				this.startDate = info.startDateSelected
				this.daysAfterStartDate = info.numberOfDaysSelected
				this.countryCode = info.countryCodeSelected

				console.log(this.startDate)
			}
		},
		created () {
			Bus.$on('datasent', (data) => {
				this.generateCalendar(data);
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
	th, td
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

