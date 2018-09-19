<template>
	<div>
		<page-title-bar></page-title-bar>
		<v-container grid-list-xl fluid pt-0>
			<app-card>
				<v-layout row wrap>
					qqq
				</v-layout>
			</app-card>
		</v-container>
	</div>
</template>

<script>
	import axios from 'axios'; 

	const apiURL = 'http://127.0.0.1:8081/';
	const frontURL = 'http://localhost:8080/default/pages/';

	export default {
	data() {
		return {
			info: null
		};
	},		
	mounted() {
    	this.getData();
  	},
  	methods: {
    	getData() {
      		axios
				.get(`${apiURL}sciences`)
				.then(response => {
					this.info = response.data;
					console.log(response);
					console.log(this.info)
				})
				.catch(error => {
					console.log(error);
				});
		},
		editTreeHandle(id) {
			window.location.assign(`${frontURL}sciences/${id}/tree-edit`);
		},
		editScienceHandle(id) {
			window.location.assign(`${frontURL}sciences/${id}/edit`);
		}
  	}
	};
</script>