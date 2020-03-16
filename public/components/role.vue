<template>
  <div class="form-page">
    <div class="form-page-inner">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="form-page-form">
              <h1>Choose your role</h1>
              <p>Your role gives you a unique set of abilities and is a big part of your character’s identity. This is just a brief overview of Quest's eight roles; you can see their skills in the Ability Catalog.</p>
              <div class="form-page-preview">
                <div class="row">
                  <div class="col-md-12">
                    <div class="sheetRow">
                      I'm the party's
                      <span id="role" class="sheetField">{{role}}</span>.
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-3">
                  <div class="role-card role-card-fighter" v-on:click="setRole('Fighter')">
                    <div class="role-title">The Fighter</div>
                    <div class="role-image"></div>
                    <div class="role-link">
                      <a href="https://www.adventure.game/the-fighter">Learn More</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="role-card role-card-invoker" v-on:click="setRole('Invoker')">
                    <div class="role-title">The Invoker</div>
                    <div class="role-image"></div>
                    <div class="role-link">
                      <a href="https://www.adventure.game/the-invoker" target="_blank">Learn More</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="role-card role-card-ranger" v-on:click="setRole('Ranger')">
                    <div class="role-title">The Ranger</div>
                    <div class="role-image"></div>
                    <div class="role-link">
                      <a href="https://www.adventure.game/the-ranger" target="_blank">Learn More</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-3"></div>
              </div>
            </div>
          </div>
        </div>
        <!-- end row -->
        <div class="row">
          <div class="col-md-6">
            <router-link to="/name" class="btn btn-lg btn-primary">
              <b-icon-arrow-left-short></b-icon-arrow-left-short> Previous: Say your name
            </router-link>
          </div>
          <div class="col-md-6 text-md-right">
            <router-link to="/name" class="btn btn-lg btn-primary text-md-right">
              Next: Choose Your Role
              <b-icon-arrow-right-short></b-icon-arrow-right-short>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    role: {
      get() {
        return this.$store.state.role;
      },
      set(value) {
        this.$store.commit("updateMessage", {
          name: "role",
          message: value
        });
      }
    }
  },
  methods: {
    setRole: function(role) {
      this.role = role;
    }
  }
};
</script>