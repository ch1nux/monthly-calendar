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
@charset "utf-8";

@import "~bulma/sass/utilities/_all"

@import "~bulma/sass/base/_all"

@import "~bulma/sass/elements/box"
@import "~bulma/sass/elements/button"
@import "~bulma/sass/elements/container"
@import "~bulma/sass/elements/form"
@import "~bulma/sass/elements/table"

@import "~bulma/sass/elements/title"

@import "~bulma/sass/grid/columns"

@import "~bulma/sass/layout/section"
@import "~bulma/sass/layout/footer"

</style>

