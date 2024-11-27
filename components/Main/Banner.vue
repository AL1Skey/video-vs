<script lang="ts" setup>
const loader = ref(true);
onMounted(()=>{
    loader.value = false;
})
</script>
<template>
 <!-- slider-area -->
 <section class="slider-area" v-if="!loader">
                <div class="slider-active">
                    <div class="single-slider">
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-lg-6 order-0 order-lg-2">
                                    <div class="slider-img text-end" data-animation="fadeInRight" data-delay=".8s">
                                        <img src="assets/img/slider/slider_img01.png" alt="">
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="slider-content">
                                        <h2 class="title" data-animation="fadeInUp" data-delay=".2s">Digital Agency Business Make Big Deal.</h2>
                                        <p data-animation="fadeInUp" data-delay=".4s">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
                                        <div class="slider-btn">
                                            <a href="contact.html" class="btn" data-animation="fadeInLeft" data-delay=".6s">Get Started <span></span></a>
                                            <a href="https://www.youtube.com/watch?v=bixR-KIJKYM" class="popup-video" data-animation="fadeInRight" data-delay=".6s">See Live Demo <i class="fas fa-play pulse"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="single-slider">
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-lg-6 order-0 order-lg-2">
                                    <div class="slider-img text-end" data-animation="fadeInRight" data-delay=".8s">
                                        <img src="assets/img/slider/slider_img01.png" alt="">
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="slider-content">
                                        <h2 class="title" data-animation="fadeInUp" data-delay=".2s">Digital Agency Business Make Big Deal.</h2>
                                        <p data-animation="fadeInUp" data-delay=".4s">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
                                        <div class="slider-btn">
                                            <a href="contact.html" class="btn" data-animation="fadeInLeft" data-delay=".6s">Get Started <span></span></a>
                                            <a href="https://www.youtube.com/watch?v=bixR-KIJKYM" class="popup-video" data-animation="fadeInRight" data-delay=".6s">See Live Demo <i class="fas fa-play pulse"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="single-slider">
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-lg-6 order-0 order-lg-2">
                                    <div class="slider-img text-end" data-animation="fadeInRight" data-delay=".8s">
                                        <img src="assets/img/slider/slider_img01.png" alt="">
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="slider-content">
                                        <h2 class="title" data-animation="fadeInUp" data-delay=".2s">Digital Agency Business Make Big Deal.</h2>
                                        <p data-animation="fadeInUp" data-delay=".4s">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
                                        <div class="slider-btn">
                                            <a href="contact.html" class="btn" data-animation="fadeInLeft" data-delay=".6s">Get Started <span></span></a>
                                            <a href="https://www.youtube.com/watch?v=bixR-KIJKYM" class="popup-video" data-animation="fadeInRight" data-delay=".6s">See Live Demo <i class="fas fa-play pulse"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="slider-shape-wrap">
                    <img src="assets/img/slider/slider_shape01.png" alt="">
                    <img src="assets/img/slider/slider_shape02.png" alt="">
                    <img src="assets/img/slider/slider_shape03.png" alt="">
                    <img src="assets/img/slider/slider_shape04.png" alt="">
                    <img src="assets/img/slider/slider_shape05.png" alt="">
                    <img src="assets/img/slider/slider_shape06.png" alt="">
                </div>
            </section>
            <!-- slider-area-end -->
</template>