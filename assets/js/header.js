//start js

let appHeader = `
<!-- header start -->

<nav class="navbar navbar-expand-lg navbar-light shadow" style="padding-bottom: 0px; ">
    <div class="container d-flex justify-content-between align-items-center" id="main_nav">

        <a class="navbar-brand text-success logo h1 align-self-center" href="index.html" id="logo-text">
            HAWK
        </a>

        <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" data-bs-parent="#main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <div class="container" onclick="myFunction(this)">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>
        </button>

        <div class="align-self-center navbar-collapse flex-fill d-lg-flex justify-content-lg-between collapse" id="templatemo_main_nav">
            <div class="flex-fill">
                <ul class="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                            <a class="nav-link" href="#" data-bs-toggle="collapse" data-bs-target=".dropdown" data-bs-parent="#main_nav">Services<div id="service-drop">&nbsp;▾</div></a>
                                <ul class="collapse dropdown" data-bs-parent="#main_nav">
                                    <li><a class="nav-link anchor-hover" href="Sub_Design.html">Design</a></li>
                                    <li><a class="nav-link anchor-hover" href="Sub_Presstools.html">Press tools</a></li>
                                    <li><a class="nav-link anchor-hover" href="Sub_Jigs&fixtures.html">Jigs &amp; fixtures</a></li>
                                    <li><a class="nav-link anchor-hover" href="Sub_Checkinggauges.html">Checking gauges</a></li>
                                    <li><a class="nav-link anchor-hover" href="Sub_SPM.html">SPM</a></li>    
                                </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="about.html">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="shop.html">Product</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contact.html">Contact</a>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</nav>

<!-- header end -->
`;
document.getElementById("app-header").innerHTML = appHeader;

// end js