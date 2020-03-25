<template>
  <div class="form-page">
    <div class="form-page-inner">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="form-page-form">
              <h1 class="dream-flaw-title">Dream big</h1>
              <p>
                Finally, give your character
                a dream to work toward — a
                reason that fuels their desire
                for adventure.
              </p>

              <div class="form-page-preview">
                <div class="row">
                  <div class="col-md-12">
                    <div class="sheetRow">
                      I dream of
                      <span id="dream" class="sheetField">{{dream}}</span>.
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <b-form-group id="input-group-2" label="dream:" label-for="dream-input">
                    <b-input-group>
                      <b-form-input id="dream-input" class="input-dream" v-model="dream"></b-form-input>

                      <template v-slot:append>
                        <b-dropdown variant="primary" right>
                          <b-dropdown-item
                            v-for="(dreamOption, index) in dreamOptions"
                            v-on:click="updatedream(dreamOption)"
                            v-bind:key="index"
                          >{{dreamOption}}</b-dropdown-item>
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
            <router-link to="/ideal-flaw" class="btn btn-lg btn-primary">
              <b-icon-arrow-left-short></b-icon-arrow-left-short>Previous: Believe in something
            </router-link>
          </div>
          <div class="col-md-6 text-md-right">
            <router-link to="/charactersheet" class="btn btn-lg btn-primary">
              Next: Character Sheet
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
      dreamOptions: [
        "returning to my hometown as a renowned hero",
        "freeing myself from a gang that wants me dead",
        "getting revenge on someone who wronged me",
        "finding a corner of the world to make my own",
        "publishing a book that's found in every home",
        "sparking an idea that transforms the world",
        "becoming the greatest scholar in my field",
        "recovering a stolen artifact for my people",
        "stealing from the rich to give to the poor",
        "having my name spoken by my leader",
        "meeting my parents for the first time",
        "spreading my ideal across the land",
        "overturning a corrupt government",
        "producing a timeless work of art",
        "becoming tremendously wealthy",
        "finding the source of eternal life",
        "becoming a leader of my nation",
        "becoming a notorious gambler",
        "making every stranger smile",
        "becoming a master artisan",
        "dying an honorable death",
        "mapping the entire world",
        "meeting the grim reaper",
        "pulling off the big score",
        "traveling to the stars",
        "becoming a celebrity",
        "meeting my god(s)",
        "killing my past"
      ]
    };
  },
  computed: {
    dream: {
      get() {
        return this.$store.state.dream;
      },
      set(value) {
        this.$store.commit("updateMessage", {
          name: "dream",
          message: value
        });
      }
    }
  },
  methods: {
    updatedream: function(dream) {
      this.dream = dream;
    }
  }
};
</script>