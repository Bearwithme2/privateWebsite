<template>
  <b-container class="screen" fluid>
    <b-row class="vh-85 justify-content-center" align-v="center" cols-lg="3">
      <b-col class="text-center">
        <b-row>
          <b-col>
            <h1>
              O MNĚ
            </h1>
            <hr />
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <p>
              Mám pokročilé znalosti vývoje a správy webových stránek. PHP,
              Javascript, HTML, SQL, MySQL. Pracoval jsem s PHP frameworky Nette
              a Syfmony. Okrajově Javascript frameworky React a Vue. Znám
              základy programovacích jazyků C a Java GoLang.
            </p>
            <hr />
            <p>
              Mezi mé záliby patří četba, psaní fantasy a sci-fi povídek. Dále
              potom hraní počítačových her (i v alfa/beta fázi vývoje), hraji
              celou škálu druhů od RPG po FPS. Rád také sportuji, nejraději se
              věnuji volejbalu, plavání a ježdění na kole.
            </p>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "CVAbout"
};
</script>
<style scoped>
hr {
  border: none;
  height: 3px;
  width: 50px;
  color: #333; /* old IE */
  background-color: #333; /* Modern Browsers */
}
</style>
