<!DOCTYPE html>
<html lang="en">

<head>
    @include('partials.head')
</head>


<body class="hold-transition skin-blue sidebar-mini">

<div id="app">
    <div id="wrapper">

    @include('partials.topbar')
    @include('partials.sidebar')

    <event-hub></event-hub>
    <router-view></router-view>

    </div>
</div>

<form method="post" action="/logout" style="display: none;" id="logout">
<button type="submit">Logout</button>
</form>
@include('partials.javascripts')
</body>
</html>
