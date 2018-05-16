<template>
  <section class="section" id="app">
		<div class="container">
			<h1 class="title">Monthly Calendar</h1>
			<h2 class="subtitle">Insert the data in the left.</h2>
			<div class="columns">
				<div class="column">
					<user-data></user-data>
				</div>
				<div class="column">
					<div class="box">
						<monthly-calendar></monthly-calendar>
					</div>
				</div>
			</div>
		</div>
  </section>
</template>

<script>
import UserData from './components/UserData.vue'
import MonthlyCalendar from './components/MonthlyCalendar.vue'

export default {
	components: {
		UserData,
		MonthlyCalendar
	}
}
</script>

<style lang="sass">
@import './assets/sass/app'
</style>

