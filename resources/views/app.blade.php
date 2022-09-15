<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel Image Uploader</title>

		<link rel="stylesheet" href="{{ url('css/app.css') }}">

    </head>
    <body class="antialiased">
		<div id="app">
			<div class="container mt-5">
				<div class="row text-center">
					<header>
						<h1>Laravel Image Uploader</h1>
					</header>
				</div>

				<main>
					<div class="container">
						<router-view></router-view>
					</div>
				</main>
			</div>
		</div>
		<script src="{{ mix('js/app.js') }}" defer></script>
    </body>
</html>
