<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel Image Uploader</title>

		<style rel="stylesheet" href="{{ mix('css/app.css') }}" defer></style>

    </head>
    <body class="antialiased">
		<div id="app">
			<div class="container">
				<header>
					<h1>Laravel Image Uploader</h1>
				</header>

				<main>
					<aside>
						<hr>
						<div class="nav">
							<div class="col">
								<router-link to="/">Home</router-link>
								<router-link :to="{ name: 'profile' }">Profile</router-link>
								<router-link :to="{ name: 'upload' }">Upload Image</router-link>
							</div>
							<div class="col">
								<router-link :to="{ name: 'login' }">Login</router-link>
								<router-link :to="{ name: 'register' }">Register</router-link>
							</div>
						</div>
						<hr>
					</aside>

					<div class="primary">
						<router-view></router-view>
					</div>
				</main>
			</div>
		</div>
		<script src="{{ mix('js/app.js') }}" defer></script>
    </body>
</html>
