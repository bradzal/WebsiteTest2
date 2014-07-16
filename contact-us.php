<!DOCTYPE HTML>
<!--
	Ex Machina by TEMPLATED
    templated.co @templatedco
    Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
-->
<html>
	<head>
		<title>News</title>
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
		<meta name="description" content="" />
		<meta name="keywords" content="" />
		<link href='http://fonts.googleapis.com/css?family=Roboto+Condensed:700italic,400,300,700' rel='stylesheet' type='text/css'>
		<!--[if lte IE 8]><script src="js/html5shiv.js"></script><![endif]-->
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
		<script src="js/skel.min.js"></script>
		<script src="js/skel-panels.min.js"></script>
		<script src="js/init.js"></script>
		<noscript>
			<link rel="stylesheet" href="css/skel-noscript.css" />
			<link rel="stylesheet" href="css/style.css" />
			<link rel="stylesheet" href="css/style-desktop.css" />
		</noscript>
		<!--[if lte IE 8]><link rel="stylesheet" href="css/ie/v8.css" /><![endif]-->
		<!--[if lte IE 9]><link rel="stylesheet" href="css/ie/v9.css" /><![endif]-->
		<meta charset="utf-8">
    <title>Your Name Here - Welcome</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">  
    
    <link href="scripts/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="scripts/bootstrap/css/bootstrap-responsive.min.css" rel="stylesheet">

    <!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->    

    <link href="styles/custom.css" rel="stylesheet" type="text/css" />
    <script src="email/validation.js" type="text/javascript"></script>
	</head>
	<body class="no-sidebar">

	<!-- Header -->
		<div id="header">
			<div class="container">
					
				<!-- Logo -->
					<div id="logo">
						<a href="index.html"><img src="images/provbanner02.png" height="45" align="left" alt=""></a>
					</div>
				
				<!-- Nav -->
					<nav id="nav">
						<ul>
							<li><a href="index.html">Homepage</a></li>
							<li><a href="about-us.html">About Us</a>
							<ul>
								<li><a href="about-us.html">About Provantage</a></li>
								<li><a href="management-team.html">Management Team</a></li>
								<li><a href="industries-served.html">Industries Served</a></li>
							</ul>
							</li>
							<li><a href="services.html">Services</a></li>
							<li><a href="news.html">News</a></li>
							<li><a href="careers.html">Careers</a></li>
							<li class="active"><a href="contact-us.html">Contact Us</a></li>
						</ul>
					</nav>

			</div>
		</div>
	<!-- Header -->
		
	<!-- Banner -->
		<div id="banner">
			<div class="container">
			</div>
		</div>
	<!-- /Banner -->

	<!-- Main -->
		<div id="page">
				
			<!-- Main -->
			<div id="main" class="container">
				<div class="row">
					<div class="12u">
						
							<div class="span8" id="divMain">

    <h1>Contact Us</h1>
    <h3 style="color:#FF6633;"><?php echo $_GET[msg];?></h3>
    <hr>
    <!--Start Contact form -->		                                                
    <div id="main" class="container">
				<div class="row">
	<div class="6u">
	<form name="enq" method="post" action="email/" onsubmit="return validation();">
    
    <fieldset>    
    <input type="text" name="name" id="name" value=""  class="input-block-level" placeholder="Name" />
    <input type="text" name="email" id="email" value="" class="input-block-level" placeholder="Email" />
    <textarea rows="11" name="message" id="message" class="input-block-level" placeholder="Comments"></textarea>
    <div class="actions">
    <input type="submit" value="Send Your Message" name="submit" id="submitButton" class="btn btn-info pull    -right" title="Click here to submit your message!" />
    </div>	
	</div>
	</div>
    </fieldset>
	
    </form> 
	
	<div class="mapContainer">
    <div id="mapCanvas" class="mapCanvas"></div>
    <ul id="markerOptions" class="markerOptions">
         <li data-marker="0">ProVantage Automation</li>
    </ul>
</div>
	
	
</div>	
</html>

    <!--End Contact form -->											 
