<template>
  <div class="form-page">
    <div class="form-page-inner">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="form-page-form">
              <h1>Say your name</h1>
              <p>
                You can start right now by choosing a
                name. It can be anything! Choose what your
                pronouns are to let others know how to
                refer to you. Some examples are: they/them,
                she/her, and/or he/him. Next, choose your
                age (with a maximum lifespan of 300 years)
                and your height (between 3 and 8 feet tall).
              </p>
              <div class="form-page-preview">
                <div class="row">
                  <div class="col-md-12">
                    <div class="sheetRow">
                      My name is
                      <div class="fieldContainer fieldContainer-name">
                        <span id="name" class="sheetField">{{name}}</span>
                      </div>
                      <div class="fieldContainer fieldContainer-pronouns">
                        (
                        <span id="pronouns" class="sheetField">{{pronouns}}</span> )
                      </div>
                    </div>

                    <div class="sheetRow">
                      I'm
                      <div class="fieldContainer fieldContainer-age">
                        <span id="age" class="sheetField">{{age}}</span>
                      </div>&nbsp;years old, and stand
                      <div class="fieldContainer fieldContainer-height">
                        <span id="height" class="sheetField">{{height}}</span>
                      </div>tall.
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                    <b-form-input id="input-2" v-model="name" required></b-form-input>
                  </b-form-group>
                </div>
                <div class="col-md-6">
                  <b-form-group id="input-group-2" label="Pronouns:" label-for="pronouns-input">
                    <b-input-group>
                      <b-form-input id="pronouns-input" class="input-pronouns" v-model="pronouns"></b-form-input>

                      <template v-slot:append>
                        <b-dropdown variant="primary" right>
                          <b-dropdown-item v-on:click="updatePronouns('He / Him')">He / Him</b-dropdown-item>
                          <b-dropdown-item v-on:click="updatePronouns('She / Her')">She / Her</b-dropdown-item>
                          <b-dropdown-item v-on:click="updatePronouns('They / Them')">They / Them</b-dropdown-item>
                        </b-dropdown>
                      </template>
                    </b-input-group>
                  </b-form-group>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6">
                  <b-form-group id="age-label" label="Age:" label-for="age-input" class="mt-3">
                    <b-form-input id="age-input" v-model="age" required type="text" max="300"></b-form-input>
                  </b-form-group>
                </div>
                <div class="col-md-6">
                  <b-form-group
                    id="height-label"
                    label="Height:"
                    label-for="height-input"
                    class="mt-3"
                  >
                    <b-form-input id="height-input" v-model="height" required type="text"></b-form-input>
                  </b-form-group>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end row -->
        <div class="row py-5">
          <div class="col-md-4">
            <router-link to="/" class="btn btn-lg btn-primary">
              Start Over
              <b-icon-arrow-counterclockwise></b-icon-arrow-counterclockwise>
            </router-link>
          </div>
          <div class="col-md-4 text-md-center">
            <router-link to="/charactersheet" class="btn btn-lg btn-secondary">
              <i class="fas fa-binoculars"></i> &nbsp; Character Profile
            </router-link>
          </div>
          <div class="col-md-4 text-md-right">
            <router-link to="/role" class="btn btn-lg btn-primary">
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
    },
    pronouns: {
      get() {
        return this.$store.state.pronouns;
      },
      set(value) {
        this.$store.commit("updateMessage", {
          name: "pronouns",
          message: value
        });
      }
    },
    age: {
      get() {
        return this.$store.state.age;
      },
      set(value) {
        this.$store.commit("updateMessage", {
          name: "age",
          message: value
        });
      }
    },
    height: {
      get() {
        return this.$store.state.height;
      },
      set(value) {
        this.$store.commit("updateMessage", {
          name: "height",
          message: value
        });
      }
    }
  },
  methods: {
    updatePronouns: function(pronoun) {
      this.pronouns = pronoun;
    }
  }
};
</script>