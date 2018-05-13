<template>
	<div class="box">
		<div class="field">
			<label class="label">Start Date</label>
			<datepicker
				placeholder="M/dd/yyyy"
				input-class="input"
				wrapper-class="control"
				format="M/dd/yyyy">
			</datepicker>
		</div>
		<div class="field">
			<label class="label">Number of days</label>
			<div class="control">
				<input class="input" type="number" value="0" min="0" placeholder="0">
			</div>
		</div>
		<div class="field">
			<label class="label">Country Code</label>
			<div class="control">
				<input class="input" type="text" placeholder="Valid codes: US, ES">
			</div>
		</div>
	</div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'

export default {
	components: {
		Datepicker
	}
}
</script>

<style lang="sass" scoped>

@import "~bulma/sass/utilities/_all"

</style>

