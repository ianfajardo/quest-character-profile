<template>
  <div class="charSheet" v-on:click="pageDrawerToggle()">
    <div class="container" id="header">
      <div class="row">
        <div class="col-md-12">
          <img
            src="https://static1.squarespace.com/static/5a03659a18b27dcf1b480a1a/t/5c70b0c0e2c483c9fc6c8432/1556387006530/?format=1500w"
            alt
            style="filter: invert(100%); max-width: 150px; width: 100%; margin-top: 30px; display: block;"
          />
          <h3>Character Profile</h3>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="sheetRow">Hello,</div>

          <div class="sheetRow">
            My name is
            <div class="fieldContainer fieldContainer-name">
              <span id="name" class="sheetField">{{name}}</span>
            </div>(
            <div class="fieldContainer fieldContainer-pronouns">
              <span id="pronouns" class="sheetField">{{pronouns}}</span>
            </div>)
          </div>

          <div class="sheetRow">
            I'm
            <div class="fieldContainer fieldContainer-age">
              <span id="age" class="sheetField">{{age}}</span>
            </div>years old, and stand
            <div class="fieldContainer fieldContainer-height">
              <span id="height" class="sheetField">{{height}}</span>
            </div>tall.
          </div>

          <div class="sheetRow">
            I'm the party's
            <span id="role" class="sheetField">{{role}}</span>.
          </div>

          <div class="sheetRow">When people seem me, they first notice my</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    name: {
      get() {
        return this.$store.state.name;
      },
      set(value) {
        this.$store.commit("updateMessage", {
          name: "name",
          message: value
        });
      }
    }
  }
};
</script>