<script setup>
import Header from '@/pages/sections/Header.vue'
import Footer from '@/pages/sections/Footer.vue'
import Storage from '@/assets/images/storage.png'
import Takedown from '@/assets/images/takedown.png'
import Design from '@/assets/images/design.png'
import Install from '@/assets/images/customInstallation.png'
import ServiceCalls from '@/assets/images/serviceCalls.png'
const props = defineProps({
  title: String,
})
</script>

<template>
  <Header />
  <div class="container-lighting">
    <h1
      id="bg-img"
      :class="`${props.title.toLowerCase().includes('residential') ? 'residential' : 'commercial'}`"
    >
      <span>{{ props.title }}</span>
    </h1>
    <template v-if="title.toLowerCase().includes('commercial')">
      <h2>Make Your Business Stand Out This Holiday Season</h2>
      <p>
        First impressions matter, especially during the holidays. At Brightland, we help businesses,
        storefronts, and municipalities throughout the Seattle area create professional,
        high-quality Holiday light displays that bring in a crowd and create a warm, inviting
        atmosphere.
      </p>
      <p>
        We handle every part of the process from custom design and installation to takedown and
        storage, with a strong focus on safety, efficiency, and reliability. Whether it’s a
        storefront, office building, or public space, we make your property look its best for the
        season.
      </p>
      <h2>Full-Service Commercial Lighting</h2>
      <ul>
        <li class="icon-check">
          <span
            ><strong>Custom Design Consultation</strong><br />
            Tailored lighting plans that fit your building, brand, and budget—whether you want
            classic elegance or something bold and colorful.</span
          >
        </li>
        <li class="icon-check">
          <span
            ><strong>Safe, Professional Installation</strong><br />Your safety is our top priority.
            We use commercial-grade materials and follow strict safety protocols during every
            install. We're fully insured, experienced at working at heights, and committed to
            getting it done right the first time.</span
          >
        </li>
        <li class="icon-check">
          <span
            ><strong>Free In-Season Service Calls</strong><br />If something isn’t working, we’ll
            fix it—fast and at no extra cost.</span
          >
        </li>
        <li class="icon-check">
          <span
            ><strong>Takedown & Storage</strong><br />After the season ends, we carefully remove
            everything and store your lights securely until next year.</span
          >
        </li>
        <li class="icon-check">
          <span
            ><strong>All Lights Guaranteed for 3 Years</strong><br />We stand by our products. Every
            light we install comes with a 3-year guarantee.</span
          >
        </li>
      </ul>
      <h2>Ideal for:</h2>
      <ul>
        <li>Retail Shops & Storefronts</li>
        <li>Restaurants & Breweries</li>
        <li>Office Buildings</li>
        <li>Hotels & Event Venues</li>
        <li>City Streets & Public Spaces</li>
        <li>Car Dealership</li>
        <li>Parks</li>
        <li>Any commercial building or shopping center</li>
      </ul>
      <h2>Why Brightland?</h2>
      <ul>
        <li class="icon-check-circle">Local to Seattle with fast response times</li>
        <li class="icon-check-circle">Hands-on, owner-operated service</li>
        <li class="icon-check-circle">Fully insured and safety-focused</li>
        <li class="icon-check-circle">Friendly, professional communication from start to finish</li>
      </ul>
      <h2>Let’s Get Business Holiday-Ready</h2>
      <p>
        Our schedule fills quickly—book early to secure your installation.<br /><router-link
          to="quote"
          >[Request a Free Estimate]</router-link
        >
        today and let Brightland handle the rest.
      </p>
    </template>
    <template v-else-if="title.toLowerCase().includes('residential')">
      <h2>Hassle-Free Holiday Lighting for Your Home</h2>
      <p>
        At Brightland, we make it easy to enjoy a festive, well-lit home without the stress of
        climbing ladders or untangling wires. We provide full-service, custom holiday light
        installation for homeowners throughout the Seattle area, using long-lasting LED lights and a
        process built around quality, safety, and convenience.
      </p>
      <h2>Our Process</h2>
      <p>
        We take care of everything—from the first idea to the final takedown—so you can simply enjoy
        the season.
      </p>
      <ol class="list-img-text horizontal">
        <li class="vertical">
          <img :src="Design" />
          <p>
            <strong>Design</strong><br />
            We work with you to create a custom lighting plan tailored to your home’s layout, your
            style, and your budget.
          </p>
        </li>
        <li class="vertical">
          <img :src="Install" />
          <p>
            <strong>Custom Installation</strong><br />
            Every home is different, and we install your lights to fit yours exactly. We use
            professional-grade clips and techniques to make sure your lights are secure, neat, and
            weather-ready.
          </p>
        </li>
        <li class="vertical">
          <img :src="ServiceCalls" />
          <p>
            <strong>Free Maintenance & Service Calls</strong><br />If anything stops working during
            the season, we’ll come out and fix it at no cost. No stress, no hassle—just reliable
            support.
          </p>
        </li>
        <li class="vertical">
          <img :src="Takedown" />
          <p>
            <strong>Takedown</strong><br />When the holidays are over, we’ll return to carefully
            remove everything without damaging your home or landscape.
          </p>
        </li>
        <li class="vertical">
          <img :src="Storage" />
          <p>
            <strong>Year-Round Storage</strong><br />We dry all lights thoroughly to prevent
            moisture damage before storing them in our facility. Your lights stay organized,
            protected, and ready to go for the next season.
          </p>
        </li>
      </ol>
      <h2>Product Guarantee</h2>
      <p>
        All of our lights are LED and backed by a 3-year guarantee. We use only durable,
        energy-efficient lighting that’s built to last through Seattle’s winter weather.
      </p>
      <h2>Why Brightland?</h2>
      <ul>
        <li class="icon-check-circle">Owner-operated with a hands-on, detail-focused approach</li>
        <li class="icon-check-circle">Clean, safe installations tailored to your home</li>
        <li class="icon-check-circle">Fully insured and committed to safety</li>
        <li class="icon-check-circle">Friendly, professional service from start to finish</li>
      </ul>
      <h2>Let’s Get Your Home Holiday-Ready</h2>
      <p>
        Our schedule fills quickly—book early to secure your installation.<br /><router-link
          to="quote"
          >[Request a Free Estimate]</router-link
        >
        today and let Brightland handle the rest.
      </p>
    </template>
  </div>
  <Footer />
</template>

<style></style>
