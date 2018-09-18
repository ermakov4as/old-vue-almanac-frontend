<template>
	<v-container fluid>
		<div>
		<app-card :fullBlock="true">
			<v-breadcrumbs style="padding: 0">
				<div style="width: 100% ">
					<v-btn flat large disabled class="btn-left">Дисциплины</v-btn>
					<v-btn flat large disabled class="btn-right">Я пользователь</v-btn>
				</div>
			</v-breadcrumbs>
			<v-breadcrumbs style="text-align: center">
				<h2 style="width: 100%; font-size: 36px">{{$t(pageTitle)}}</h2>
			</v-breadcrumbs>
		</app-card>
		</div>
	</v-container>
</template>

<script>
export default {
  computed: {
    // computed property to get page breadcrumbs
    pageTitle() {
      return this.$breadcrumbs[0].meta.title;
    },
    pageBreadcrumb() {
      return this.$breadcrumbs[0].meta.breadcrumb;
    }
  }
};
</script>
