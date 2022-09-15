<template>
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="card shadow-sm">
					<div class="card-header">
						<h3>Profile</h3>
					</div>
					<div class="card-body">
						<p class="mb-0">You are logged in as <b>{{user.email}}</b></p>
						<div class="container mt-5">
							<div class="row">

								<div class="col-3 mb-3" v-for="item in gallery">
									<img :src="item.image" alt="{{item.image}}" class="img-thumbnail rounded"  />
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>

export default {
    name:"profile",
    data(){
        return {
		title: 'Profile',
            user:this.$store.state.auth.user,
		gallery: [
			{ image: 'https://source.unsplash.com/1600x900/?nature'},
			{ image: 'https://source.unsplash.com/1600x900/?beach'},
			{ image: 'https://source.unsplash.com/1600x900/?backgrounds'},
			{ image: 'https://source.unsplash.com/1600x900/?animals'},
			{ image: 'https://source.unsplash.com/1600x900/?sun'},
			{ image: 'https://source.unsplash.com/1600x900/?water'},
		],
        }
		/*
			[ ] call users images from store and loop over them
		*/
    }
}
</script>
