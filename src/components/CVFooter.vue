<template>
  <footer>
    <b-container class="pb-2 pt-2 text-white" fluid>
      <b-row>
        <b-col sm="0" lg="3"></b-col>
        <b-col>
          <b-row>
            <b-col class="text-center">
              <h5>Osobní údaje</h5>
              <hr />
            </b-col>
          </b-row>
          <b-row class="justify-content-lg-start" cols-lg="3">
            <b-col sm="3" lg="6" class="text-lg-right">E-mail:</b-col>
            <b-col sm="6" lg="6">jakubtrtik2@gmail.com</b-col>
          </b-row>
          <b-row class="justify-content-lg-start" cols-lg="3">
            <b-col sm="3" lg="6" class="text-lg-right">Telefon:</b-col>
            <b-col sm="6" lg="6">+420 728 313 469</b-col>
          </b-row>
          <b-row class="justify-content-lg-start" cols-lg="3">
            <b-col sm="3" lg="6" class="text-lg-right">Bydliště:</b-col>
            <b-col sm="6" lg="6">Brno-město, Brno</b-col>
          </b-row>
        </b-col>
        <b-col class="text-center">
          <h5>Social media</h5>
          <hr />
          <b-row class="justify-content-center mt-3">
            <b-col cols="1">
              <a href="mailto: jakubtrtik2@gmail.com">
                <b-icon
                  class="mt-2"
                  icon="envelope-open"
                  scale="2.5"
                  variant="light"
                ></b-icon>
              </a>
            </b-col>
            <b-col cols="1">
              <a href="https://www.linkedin.com/in/jakub-trtík-209786129">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  />
                </svg>
              </a>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="mt-1 strip small-text text-center">
          <i>© website by Jakub Trtík {{ currentYear }}</i>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {
  name: "CVFooter",
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>

<style scoped>
footer {
  font-size: 12px;
  width: 100%;
  height: 7.4rem;
  /*bottom: 0;*/
  /*position: fixed;*/
  background-color: #284567;
}

.strip {
  background-color: #233c58;
  width: 100%;
}

hr {
  margin-top: 0;
  margin-bottom: 3px;
  border: none;
  height: 2px;
  width: 50px;
  color: #fff; /* old IE */
  background-color: #fff; /* Modern Browsers */
}
</style>
