<template>
  <div class="form-page">
    <div class="form-page-inner">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="form-page-form">
              <h1 class="ideal-flaw-title">Believe in something / Be vulnerable</h1>
              <p>
                Choose an ideal that
                guides your behavior.
                This is your moral
                core: the belief that
                will help you know
                what your character
                might do in lots of
                situations. You can
                choose one of these
                or create your own.
              </p>

              <p>
                Nobody's perfect.
                Choose a flaw to
                make your character
                complicated and
                believable. Like your
                ideal, you're free to
                choose one of these
                suggestions or create
                your own.
              </p>

              <div class="form-page-preview">
                <div class="row">
                  <div class="col-md-12">
                    <div class="sheetRow">
                      I'm belive in
                      <span id="ideal" class="sheetField">{{ideal}}</span>, but my
                    </div>

                    <div class="sheetRow">
                      <span id="flaw" class="style sheetField">{{flaw}}</span> side can get in my way.
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <b-form-group id="input-group-2" label="Ideal:" label-for="ideal-input">
                    <b-input-group>
                      <b-form-input id="ideal-input" class="input-ideal" v-model="ideal"></b-form-input>

                      <template v-slot:append>
                        <b-dropdown variant="primary" right>
                          <b-dropdown-item
                            v-for="(idealOption, index) in idealOptions"
                            v-on:click="updateideal(idealOption)"
                            v-bind:key="index"
                          >{{idealOption}}</b-dropdown-item>
                        </b-dropdown>
                      </template>
                    </b-input-group>
                  </b-form-group>
                </div>

                <div class="col-md-6">
                  <b-form-group id="input-group-3" label="Flaw:" label-for="flaw-input">
                    <b-input-group>
                      <b-form-input id="flaw-input" class="input-flaw" v-model="flaw"></b-form-input>

                      <template v-slot:append>
                        <b-dropdown variant="primary" right>
                          <b-dropdown-item
                            v-for="(flawOption, index) in flawOptions"
                            v-on:click="updateflaw(flawOption)"
                            v-bind:key="index"
                          >{{flawOption}}</b-dropdown-item>
                        </b-dropdown>
                      </template>
                    </b-input-group>
                  </b-form-group>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end row -->
        <div class="row">
          <div class="col-md-6">
            <router-link to="/callhome" class="btn btn-lg btn-primary">
              <b-icon-arrow-left-short></b-icon-arrow-left-short>Previous: Call home
            </router-link>
          </div>
          <div class="col-md-6 text-md-right">
            <router-link to="/dream" class="btn btn-lg btn-primary">
              Next: Dream big
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
  data() {
    return {
      idealOptions: [
        "compassion",
        "henerosity",
        "heroism",
        "justice",
        "order",
        "pleasure",
        "pragmatism",
        "honor",
        "power",
        "salvation",
        "the ends"
      ],
      flawOptions: [
        "fearful",
        "megalomaniac",
        "idiot",
        "impish",
        "oblivious",
        "thief",
        "hedonist",
        "liar",
        "reckless",
        "wrathful",
        "vain"
      ]
    };
  },
  computed: {
    ideal: {
      get() {
        return this.$store.state.ideal;
      },
      set(value) {
        this.$store.commit("updateMessage", {
          name: "ideal",
          message: value
        });
      }
    },
    flaw: {
      get() {
        return this.$store.state.flaw;
      },
      set(value) {
        this.$store.commit("updateMessage", {
          name: "flaw",
          message: value
        });
      }
    }
  },
  methods: {
    updateideal: function(ideal) {
      this.ideal = ideal;
    },
    updateflaw: function(flaw1) {
      this.flaw = flaw1;
    }
  }
};
</script>