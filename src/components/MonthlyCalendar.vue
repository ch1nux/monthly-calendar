<template>
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
</template>

<script>
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
