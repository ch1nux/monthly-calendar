<template>
	<div class="box">
		<div class="field">
			<label class="label">Start Date</label>
			<datepicker
				v-model="startDateSelected"
				placeholder="M/dd/yyyy"
				input-class="input"
				wrapper-class="control"
				format="M/dd/yyyy">
			</datepicker>
		</div>
		<div class="field">
			<label class="label">Number of days</label>
			<div class="control">
				<input
					v-model="numberOfDaysSelected"
					class="input"
					type="number"
					value="0"
					min="0" placeholder="0">
			</div>
		</div>
		<div class="field">
			<label class="label">Country Code</label>
			<div class="control">
				<input
					v-model="countryCodeSelected"
					class="input"
					type="text"
					placeholder="Valid codes: US, ES">
			</div>
		</div>
		<button :class="['button', {'is-static': validate()}]" @click="sendData">Generate!</button>
	</div>
</template>

<script>
import { Bus } from '../main'
import Datepicker from 'vuejs-datepicker'

export default {
	data () {
		return {
			startDateSelected: '',
			numberOfDaysSelected: 0,
			countryCodeSelected: ''
		}
	},
	components: {
		Datepicker
	},
	methods: {
		validate () {
			return !this.startDateSelected ||
							!this.numberOfDaysSelected ||
							!this.countryCodeSelected
		},
		sendData () {
			Bus.$emit('datasent',
				{
					startDateSelected: this.startDateSelected,
					numberOfDaysSelected: this.numberOfDaysSelected,
					countryCodeSelected: this.countryCodeSelected
				}
			)
		}
	}
}
</script>

<style lang="sass" scoped>

@import "~bulma/sass/utilities/_all"

</style>

