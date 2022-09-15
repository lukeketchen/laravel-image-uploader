<template>
	<div>
		<div class="container">
			<div class="row align-items-start">
				<div class="col">
					<ul class="nav">
						<li class="nav-item">
							<router-link :to="{ name: 'profile'}" class="nav-link">Profile</router-link>
						</li>
						<li class="nav-item">
							<router-link :to="{ name: 'upload'}" class="nav-link">Upload Image</router-link>
						</li>
					</ul>
				</div>
				<div class="col">
					<ul class="nav justify-content-end">
						<li class="nav-item">
							<a class="nav-link" href="javascript:void(0)" @click="logout">Logout</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<hr>
		<main class="mt-3">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<div class="card shadow-sm">
							<div class="card-header">
								<h3>Upload Image</h3>
							</div>
							<div class="card-body">
								<div class="container">
									<div class="row align-items-center">
										<div class="col-6 offset-md-3">
											<p class="mb-0"><b>{{user.name}}</b> click on the button and upload an image</p>
										<form>
											<div class="form-group mt-3">
												<label for="imageUrl">Image URI</label>
												<input type="text" class="form-control" id="imageUrl" aria-describedby="emailHelp"
													placeholder="Enter image uri">
											</div>
											<button type="submit" class="btn btn-primary mt-4">Upload Image</button>
										</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
	name:"upload-image",
	data(){
		return {
			user: this.$store.state.auth.user
		}
	},
	methods: {
		...mapActions({
			signOut: "auth/logout"
		}),
		async logout() {
			await axios.post('/logout').then(({ data }) => {
				this.signOut()
				this.$router.push({ name: "login" })
			})
		}

		/*
			[ ] capture the input image uri
				https://stackoverflow.com/questions/56668709/how-to-save-images-in-laravel

			[ ] set up endpoint in api with user/token and uri to upload

			[ ] add to users images
				https://stackoverflow.com/questions/38736717/how-to-get-image-from-resources-in-laravel

			[ ] add to users store
		*/
	}
}
</script>
