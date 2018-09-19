<template>
	<div>
		<page-title-bar></page-title-bar>
		<v-container grid-list-xl fluid pt-0>
			<app-card>
				<v-layout row wrap>
					<v-flex xs12>
						<v-card class="elevation-5">
							<v-list two-line>
								<template v-for="item in info">
									<v-list-tile avatar v-bind:key="item.id" @click="">
									<v-list-tile-content>
										<v-list-tile-title v-html="item.name" style="font-weight: bold; font-size: large"></v-list-tile-title>
										<v-list-tile-sub-title v-html="item.desc"></v-list-tile-sub-title>
									</v-list-tile-content>
									<v-btn raised color="success" @click="editTreeHandle(item.id)">Древо</v-btn>
									<v-btn raised color="warning" @click="editTreeHandle(item.id)">Редактировать</v-btn>
									</v-list-tile>
								</template>
							</v-list>
						</v-card>
					</v-flex>
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