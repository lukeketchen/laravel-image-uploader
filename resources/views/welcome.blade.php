<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel Image Uploader</title>

    </head>
    <body class="antialiased">

		<div id="app">
			<router-view></router-view>

			<hr>

			<router-link to="/">Home</router-link>
			<router-link :to="{ name: 'profile' }">Profile</router-link>
			<router-link :to="{ name: 'upload' }">Upload Image</router-link>

		</div>
		<script src="{{ mix('js/app.js') }}" defer></script>
    </body>
</html>
