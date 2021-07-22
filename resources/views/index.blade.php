<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

        <link rel="stylesheet" href="{{ asset('css/bootstrap.min.css') }}" type="text/css">
        <link rel="stylesheet" href="{{ asset('css/font-awesome.min.css') }}" type="text/css">
        <link rel="stylesheet" href="{{ asset('css/elegant-icons.css') }}" type="text/css">
        <link rel="stylesheet" href="{{ asset('css/plyr.css') }}" type="text/css">
        <link rel="stylesheet" href="{{ asset('css/nice-select.css') }}" type="text/css">
        <link rel="stylesheet" href="{{ asset('css/owl.carousel.min.css') }}" type="text/css">
        <link rel="stylesheet" href=" {{ asset('css/slicknav.min.css') }}" type="text/css">
        <link rel="stylesheet" href="{{ asset('css/style.css') }}" type="text/css">

        <!-- Styles -->
       
    </head>
    <body class="antialiased">
        <div id="root"></div>


        <script src="{{ asset('js/app.js') }}"></script>

        <script src="{{ asset('js/jquery-3.3.1.min.js') }}"></script>
  <script src="{{ asset('js/bootstrap.min.js') }}"></script>
  <script src="{{ asset('}js/player.js') }}"></script>
  <script src=" {{ asset('js/jquery.nice-select.min.js') }}"></script>
  <script src="{{ asset('js/mixitup.min.js') }}"></script>
  <script src="{{ asset('js/jquery.slicknav.js') }}"></script>
  <script src="{{ asset('js/owl.carousel.min.js') }}"></script>
  <script src="{{ asset('js/main.js') }}"></script>

  <script async src="{{ asset('https://www.googletagmanager.com/gtag/js?id=UA-23581568-13') }}"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());

    gtag('config', 'UA-23581568-13');
  </script>
  <script defer src="{{ asset('../../../static.cloudflareinsights.com/beacon.min.js') }}"
    data-cf-beacon='{"si":10,"rayId":"62c580c109e01936","version":"2021.2.0"}'></script>
    </body>
</html>
