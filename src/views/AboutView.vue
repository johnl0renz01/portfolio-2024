<script setup></script>

<template>
  <nav class="bg-transparent">
    <div class="flex h-20 items-center mx-auto sm:px-6 lg:px-12">
      <RouterLink class="flex flex-shrink-0 items-center" to="/">
        <span class="hidden md:block text-darkshade text-2xl font-bold"
          >Logo</span
        >
      </RouterLink>
    </div>
  </nav>
  <section class="bg-transparent text-black sm:px-6 lg:px-[20rem]">
    <div
      class="grid grid-cols-2 gap-x-16 place-items-start max-h-[46rem] overflow-hidden py-10"
    >
      <div class="max-h-full overflow-hidden">
        <img
          class=""
          src="https://i.pinimg.com/originals/7a/9d/0d/7a9d0d3e2678927b6d1994d9b078030b.png"
          alt=""
        />
      </div>
      <div class="">
        <h1 class="text-[3.5rem] font-semibold font-kanit leading-[5rem] mb-6">
          John Lorenz Dela Cruz
        </h1>
        <div class="relative">
          <div class="font-montserrat mb-12 text-[1.4rem] font-bold">
            <ul class="flex justify-center gap-x-4">
              <li class="border-r-2 border-r-black pr-5">
                Full-stack Developer
              </li>
              <li class="border-r-2 border-r-black pr-5">Creative Artist</li>
              <li class="border-r-2 border-r-black pr-5">Passionate Learner</li>
              <li class="">Technology Enthusiast</li>
            </ul>
          </div>
          <div class="text-left">
            <div class="text-[1.1rem] text-justify">
              <strong>I'm a motivated</strong> and
              <strong>detail-oriented computer science graduate</strong>
              with a <strong>strong foundation</strong> in
              <strong>software development</strong> and a
              <strong>passion for continuous learning</strong>.

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
          class="text-base font-nunito text-left mt-16 pt-4 border-t-2 border-t-black/50"
        >
          Thanks for your consideration, and I look forward to working together!
          <br />
          Feel free to explore my portfolio or contact me directly at
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
