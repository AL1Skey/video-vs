<script lang="ts" setup>
const loader = ref(true);
onMounted(()=>{
    loader.value = false;
})
</script>

<template>
        <!--Preloader-->
        <div id="preloader" v-if="loader">
            <div id="loader" class="loader">
                <div class="loader-container">
                    <div class="loader-icon"><img src="assets/img/preloader.png" alt="Xolio - Creative Agency HTML5 Template"></div>
                </div>
            </div>
        </div>
        <!--Preloader-end -->

        <!-- Custom-cursor -->
        <div class="mouseCursor cursor-outer"></div>
        <div class="mouseCursor cursor-inner"><span>Drag</span></div>
        <!-- Custom-cursor-end -->

		<!-- Scroll-top -->
        <button class="scroll-top scroll-to-target" data-target="html">
            <i class="fas fa-angle-up"></i>
        </button>
        <!-- Scroll-top-end-->

        <!-- header-area -->
        <MainHeader/>
        <!-- header-area-end -->



        <!-- main-area -->
        <main class="fix">

            <!-- slider-area -->
            <MainSlider/>
            <!-- slider-area-end -->

            <!-- services-area -->
            <MainServices/>
            <!-- services-area-end -->

            <!-- brand-area -->
            <MainBrand/>
            <!-- brand-area-end -->

            <!-- agency-area -->
            <MainAgency/>
            <!-- agency-area-end -->

            <!-- counter-area -->
            <MainCounter/>
            <!-- counter-area-end -->

            <!-- project-area -->
            <MainProject/>
            <!-- project-area-end -->

            <!-- testimonial-area -->
            <MainTestimony/>
            <!-- testimonial-area-end -->

            <!-- blog-area -->
            <MainBlog/>
            <!-- blog-area-end -->

            <!-- newsletter-area -->
            <MainNewsletter/>
            <!-- newsletter-area-end -->

        </main>
        <!-- main-area-end -->

        <!-- footer-area -->
        <Footer/>
        <!-- footer-area-end -->



        <!-- JS here -->
        <Script src="js/vendor/jquery-3.6.0.min.js"></Script>
        <Script src="js/bootstrap.min.js"></Script>
        <Script src="js/isotope.pkgd.min.js"></Script>
        <Script src="js/imagesloaded.pkgd.min.js"></Script>
        <Script src="js/jquery.magnific-popup.min.js"></Script>
        <Script src="js/jquery.odometer.min.js"></Script>
        <Script src="js/swiper-bundle.min.js"></Script>
        <Script src="js/jquery.appear.js"></Script>
        <Script src="js/slick.min.js"></Script>
        <Script src="js/ajax-form.js"></Script>
        <Script src="js/parallax.min.js"></Script>
        <Script src="js/jquery.parallaxScroll.min.js"></Script>
        <Script src="js/tween-max.js"></Script>
        <Script src="js/wow.min.js"></Script>
        <Script src="js/main.js" ></Script>


</template>
