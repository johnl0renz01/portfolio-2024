<script setup>
import logo from '@/assets/logo.png';
import person from '@/assets/person.png';
</script>

<template>
  <nav class="bg-transparent">
    <div class="flex h-24 items-center mx-auto xs:px-6 abt:px-12">
      <div
        className="group hidden md:flex justify-center items-center relative overflow-hidden hover:scale-110 transition duration-200 ease-linear"
      >
        <RouterLink class="flex flex-shrink-0 items-center" to="/">
          <div class="flex items-center bg-darkshade">
            <img :src="logo" class="h-14" />
          </div>
        </RouterLink>
        <div
          className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-30 group-hover:animate-shine"
        ></div>
      </div>
    </div>
  </nav>
  <section
    class="bg-transparent text-black xs:px-6 sm:px-16 xl:px-[20rem] xs:pb-20 abt:pb-0"
  >
    <div
      class="abt:grid abt:grid-cols-2 abt:gap-x-16 abt:place-items-start abt:py-10"
    >
      <div class="flex justify-center max-h-[44rem] overflow-hidden">
        <img class="object-cover" :src="person" alt="" />
      </div>
      <div class="">
        <h1
          class="xs:text-[2.25rem] abt:text-[2.5rem] xl:text-[3.25rem] xs:text-center abt:text-left font-semibold font-kanit xs:mt-6 abt:mt-0 mb-6 abt:mb-2"
        >
          John Lorenz Dela&nbsp;Cruz
        </h1>
        <div class="relative">
          <div
            class="font-montserrat mb-12 xs:text-[1.1rem] abt:text-[1.4rem] xs:font-semibold sm:font-bold"
          >
            <ul
              class="xs:hidden sm:grid sm:grid-cols-2 xs:text-center sm:px-10 abt:px-0 abt:hidden block xl:text-left xl:flex xl:flex-row abt:gap-x-4"
            >
              <li
                class="abt:border-r-2 border-black/50 sm:px-2 abt:px-0 abt:pr-5"
              >
                Full-Stack Developer
              </li>
              <li
                class="abt:border-r-2 border-black/50 sm:px-2 abt:px-0 abt:pr-5"
              >
                Creative Artist
              </li>
              <li
                class="abt:border-r-2 border-black/50 sm:px-2 abt:px-0 abt:pr-5"
              >
                Passionate Learner
              </li>
              <li class="border-black/50">Tech Enthusiast</li>
            </ul>
            <ul class="xs:flex sm:hidden flex-wrap justify-center gap-x-2">
              <li>[Full-Stack Developer]</li>
              <li>[Creative Artist]</li>
              <li>[Passionate Learner]</li>
              <li>[Tech Enthusiast]</li>
            </ul>
            <div class="hidden abt:flex xl:hidden flex-wrap gap-x-5">
              <div class="border-r-2 border-black pr-5">
                <div class="">Full-Stack Developer</div>
                <div class="">Passionate Learner</div>
              </div>
              <div>
                <div class="">Creative Artist</div>
                <div class="">Tech Enthusiast</div>
              </div>
            </div>
          </div>
          <div class="text-left">
            <div class="xs:text-[1rem] abt:text-[1.1rem] text-justify">
              <strong>I'm a motivated</strong> and
              <strong>detail-oriented</strong> computer science graduate with a
              <strong>strong foundation</strong> in
              <strong>software development</strong> and a
              <strong>passion for continuous learning</strong>
              <br />
              <br />

              I am <strong>adaptable</strong> and <strong>proactive</strong>,
              tackling challenges in a collaborative environment. Committed to
              <strong>continuous learning</strong> and
              <strong>industry trends</strong>, I focus on
              <strong>user-centric design</strong> and
              <strong>innovation</strong>. Eager to leverage my skills, I aim to
              contribute to impactful projects in the
              <strong>tech industry</strong>, driven by
              <strong>curiosity</strong> and a
              <strong>commitment to succeed</strong> as a developer.
            </div>
          </div>
        </div>
        <br />
        <div
          class="xs:text-sm abt:text-base font-nunito text-left mt-16 pt-4 border-t-2 border-t-black/50"
        >
          I look forward to working together! Thanks for your time and
          attention.
          <br />
          So feel free to explore my portfolio or contact me directly at
          <strong class="">johnlorenzdelacruz@gmail.com</strong>. <br /><br />
          <div class="flex -ml-1">
            <a
              href="https://www.linkedin.com/in/john-lorenz-dela-cruz-40480a247/"
              target="_blank"
              ><v-icon name="fa-linkedin" scale="1.5" fill="black"></v-icon>
            </a>
            <a href="https://github.com/johnl0renz01" target="_blank">
              <v-icon name="fa-github" scale="1.5" fill="black"></v-icon>
            </a>
            <a href="https://leetcode.com/u/QiAsR5nsWd/" target="_blank">
              <v-icon name="si-leetcode" scale="1.5" fill="black"></v-icon>
            </a>
            <a
              href="https://www.hackerrank.com/profile/johnlorenzdelac1"
              target="_blank"
            >
              <v-icon name="fa-hackerrank" scale="1.5" fill="black"></v-icon
            ></a>
            <a href="https://codepen.io/johnl0renz01" target="_blank">
              <v-icon name="fa-codepen" scale="1.5" fill="black"></v-icon
            ></a>
            <a
              href="https://stackoverflow.com/users/28341060/john-lorenz-dela-cruz"
              target="_blank"
            >
              <v-icon name="si-stackoverflow" scale="1.5" fill="black"></v-icon
            ></a>
          </div>
        </div>
      </div>
    </div>

    <!--
    <br />
            <br />
            I have honed my skills in various
            <strong>programming languages</strong>,
            <strong>web development</strong>, and
            <strong>database management</strong>. With hands-on experience in
            developing interactive web applications, I specialize in creating
            seamless user experiences using <strong>JavaScript</strong>,
            <strong>PHP</strong>, and <strong>MySQL</strong>, along with
            frameworks such as <strong>ReactJS</strong> and
            <strong>Tailwind CSS</strong>
            .

            
    <div class="flex justify-between">
      <button
        class="flex items-center font-roboto font-bold uppercase text-darkshade"
      >
        <i
          class="pi pi-arrow-circle-up rounded-full bg-darkshade text-gray-100 text-[2rem]"
        ></i>

        <span class="text-[1.25rem]"> Previous </span>
      </button>
      <button
        class="flex items-center font-roboto font-bold uppercase text-darkshade"
      >
        <span class="text-[1.25rem]"> Next </span>
        <i
          class="pi pi-arrow-circle-down rounded-full bg-darkshade text-gray-100 text-[2rem] shadow-none"
        ></i>
      </button>
    </div>
    -->
  </section>
</template>

<style scoped>
.bg {
  background: rgb(0, 85, 105);
  background: linear-gradient(
    180deg,
    rgba(0, 85, 105, 1) 0%,
    rgba(0, 85, 105, 1) 70%,
    rgba(0, 71, 87, 1) 100%
  );
}
</style>
