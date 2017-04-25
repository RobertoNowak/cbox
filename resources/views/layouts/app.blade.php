<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>
    <link href="assets/global/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
    <link href="assets/global/css/simple-line-icons.min.css" rel="stylesheet" type="text/css" />
    <link href="assets/global/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="assets/global/bootstrap/css/bootstrap-fileinput.css" rel="stylesheet" type="text/css" />
    <link href="assets/global/bootstrap/css/bootstrap-datepicker3.min.css" rel="stylesheet" type="text/css" />
    <!-- <link href="assets/global/bootstrap/css/bootstrap-modal-bs3patch.css" rel="stylesheet" type="text/css" /> -->
    <!-- END GLOBAL MANDATORY STYLES -->
    <!-- BEGIN THEME GLOBAL STYLES -->
    <link href="assets/global/css/components.min.css" rel="stylesheet" id="style_components" type="text/css" />
    <link href="assets/global/css/plugins.min.css" rel="stylesheet" type="text/css" />
    <link href="assets/global/css/owl.carousel.css" rel="stylesheet" type="text/css" />
    <link href="assets/global/css/owl.theme.css" rel="stylesheet" type="text/css" />
    <link href="assets/global/plugins/slider-revolution-slider/rs-plugin/css/settings.css" rel="stylesheet">
    <link href="assets/global/plugins/fancybox/source/jquery.fancybox.css" rel="stylesheet" type="text/css" />
    <!-- END THEME GLOBAL STYLES -->
    <link href="assets/one-page/css/settings.css" rel="stylesheet">
    <link href="assets/one-page/css/style.css" rel="stylesheet" type="text/css" />
    <link href="assets/one-page/css/red.css" rel="stylesheet" type="text/css" />
    <!-- BEGIN THEME LAYOUT STYLES -->
    <link href="assets/global/css/layout.min.css" rel="stylesheet" type="text/css" />
    <!-- <link href="assets/global/css/themes/darkblue.min.css" rel="stylesheet" type="text/css" id="style_color" /> -->
    <link href="assets/global/css/login.min.css" rel="stylesheet" type="text/css" />
    <link href="assets/global/css/layout.min.css" rel="stylesheet" type="text/css" />
    <link href="assets/global/css/custom.min.css" rel="stylesheet" type="text/css" />
    <!-- END THEME LAYOUT STYLES -->
    <link rel="shortcut icon" href="favicon.ico" />
    <!-- Styles -->
    <link href="/css/app.css" rel="stylesheet">

    <!-- Scripts -->
    <script>
        window.Laravel = <?php echo json_encode([
            'csrfToken' => csrf_token(),
        ]); ?>
    </script>
</head>
<body>
    <div id="app">
        <div class="header" >
            <div class="container">
                <a class="mobi-toggler"><i class="fa fa-bars"></i></a>
                <div class="logo-mid">
                <a class="" href="/#/home"><img src="assets/img/logo-mid.png" alt="MillionMitzvot.com" class="logo-mid"></a>
                </div>
                <div class="header-navigation pull-right font-transform-inherit" style="    height: 75px;">
                <ul>
                    <li class="main-menu-li">
                        <a href="/#/home">
                            Home
                        </a>
                    </li>
                    <li class="main-menu-li dropdown">
                        <a class="dropdown-toggle" data-toggle="dropdown">
                            About Us
                        </a>
                        <ul class="dropdown-menu">
                            <li><a href="/#/director_board/">Board of Directors</a></li>
                            <li><a href="/#/contact/">Contact Us</a></li>
                        </ul>
                    </li>
                    <li  class="main-menu-li">
                        <a class="" href="/#/score">
                            ScoreBoard
                        </a>
                    </li>
                    <li class="main-menu-li">
                        <a class="" href="/#/sell">
                            Purchase
                        </a>
                    </li>
                    <li class="main-menu-li">
                        <a class="dropdown-toggle" data-toggle = "dropdown" href="/#/selldonate">
                            Donate
                        </a>
                    </li>
                    <li class="main-menu-li dropdown">
                        <a class="dropdown-toggle" data-toggle="dropdown">
                            @if (Auth::guest())
                                Sign In/Up
                            @else
                                Profile
                            @endif
                        </a>
                        <ul class="dropdown-menu">
                            @if (Auth::guest())
                                <li><a href="{{ url('/login') }}">Sign In</a></li>
                                <li><a href="{{ url('/register') }}">Sign Up</a></li>
                            @else
                                <li><a href="/#/profile/">Edit Profile</a></li>
                                <li>
                                    <a href="/messages">Messages</a>
                                </li>
                                @if(Auth::user()->hasRole('SCHOOL') || Auth::user()->hasRole('INSTITUTION'))
                                <li class="main-menu-li" >
                                    <a class="" href="/#/report">
                                        Report
                                    </a>
                                </li>
                                @endif
                                <li ><a href="/#/profile/boxes">My Boxes</a></li>
                                @if(Auth::user()->hasRole('SCHOOL') || Auth::user()->hasRole('INSTITUTION'))
                                <li ><a href="/#/profile/members">My Members</a></li>
                                @endif
                                <li><a href="/#/profile/changePassword">Change Password</a></li>
                                <li>
                                    <a href="{{ url('/logout') }}"
                                        onclick="event.preventDefault();
                                                document.getElementById('logout-form').submit();">
                                        Logout
                                    </a>

                                    <form id="logout-form" action="{{ url('/logout') }}" method="POST" style="display: none;">
                                        {{ csrf_field() }}
                                    </form>
                                </li>
                            @endif
                        </ul>
                    </li>
                </ul>

                </div>
                @if (Session::has('flash_message'))
                        <div class="alert alert-success">
                            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                            {{ Session::get('flash_message') }}
                        </div>
                @endif
            </div>
        </div>
        @yield('content')
    </div>

    <!-- Scripts -->
    <script src="assets/global/js/jquery.min.js"></script>
    <script src="assets/global/js/jquery-migrate.min.js" type="text/javascript"></script>
    <script src="assets/global/js/bootstrap.min.js" type="text/javascript"></script>
    <script src="assets/global/js/bootstrap-datepicker.min.js" type="text/javascript"></script>
    <script src="assets/global/js/owl.carousel.min.js" type="text/javascript"></script>
    <script src="assets/global/js/bootstrap-fileinput.js" type="text/javascript"></script>
    <script src="/js/custom.js"></script>
    <!--<script src="/js/app.js"></script>-->
</body>
</html>
