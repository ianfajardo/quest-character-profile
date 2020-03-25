<template>
  <div class="form-page">
    <div class="form-page-inner">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="form-page-form">
              <h1>Show your style</h1>
              <p>
                Choose how you present yourself to the world.
                Pick your usual outfit, and imagine what your
                character looks like when they move. It only
                takes a couple of features to help people imagine
                you, but you can be even more detailed if you like.
              </p>

              <div class="form-page-preview">
                <div class="row">
                  <div class="col-md-12">
                    <div class="sheetRow">
                      I wear
                      <div class="fieldContainer fieldContainer-style">
                        <span id="outfit1" class="sheetField">{{outfit1}}</span>
                      </div>,
                      <span id="outfit2" class="sheetField">{{outfit2}}</span>, and move with
                      <span id="move" class="sheetField">{{move}}</span>.
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <b-form-group id="input-group-2" label="Outfit 1:" label-for="outfit1-input">
                    <b-input-group>
                      <b-form-input id="outfit1-input" class="input-style" v-model="outfit1"></b-form-input>

                      <template v-slot:append>
                        <b-dropdown variant="primary" right>
                          <b-dropdown-item
                            v-for="(styleItem, index) in style1"
                            v-on:click="updateField('outfit1', styleItem)"
                            v-bind:key="index"
                          >{{styleItem}}</b-dropdown-item>
                        </b-dropdown>
                      </template>
                    </b-input-group>
                  </b-form-group>
                </div>

                <div class="col-md-6">
                  <b-form-group id="input-group-2" label="Outfit 2:" label-for="outfit2-input">
                    <b-input-group>
                      <b-form-input id="outfit2-input" class="input-style" v-model="outfit2"></b-form-input>

                      <template v-slot:append>
                        <b-dropdown variant="primary" right>
                          <b-dropdown-item
                            v-for="(styleItem, index) in style1"
                            v-on:click="updateField('outfit2', styleItem)"
                            v-bind:key="index"
                          >{{styleItem}}</b-dropdown-item>
                        </b-dropdown>
                      </template>
                    </b-input-group>
                  </b-form-group>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6">
                  <b-form-group id="input-group-2" label="Move with:" label-for="move-input">
                    <b-input-group>
                      <b-form-input id="move-input" class="input-move" v-model="move"></b-form-input>

                      <template v-slot:append>
                        <b-dropdown variant="primary" right>
                          <b-dropdown-item
                            v-for="(styleItem, index) in style3"
                            v-on:click="updateField('move', styleItem)"
                            v-bind:key="index"
                          >{{styleItem}}</b-dropdown-item>
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
        <div class="row py-5">
          <div class="col-md-4">
            <router-link to="/scene" class="btn btn-lg btn-primary">
              <b-icon-arrow-left-short></b-icon-arrow-left-short>Previous: Enter The Scene
            </router-link>
          </div>
          <div class="col-md-4 text-md-center">
            <router-link to="/charactersheet" class="btn btn-lg btn-secondary">
              <i class="fas fa-binoculars"></i> &nbsp; Character Profile
            </router-link>
          </div>
          <div class="col-md-4 text-md-right">
            <router-link to="/callhome" class="btn btn-lg btn-primary">
              Next: Call Home
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
      style1: [
        "etched leather armor",
        "a billowing jumpsuit",
        "a tightly fitted tunic",
        "religious vestments",
        "nicked chainmail",
        "runes in my hair",
        "a fluttering cape",
        "weathered rags",
        "a layered dress",
        "a warm cloak",
        "an owl pin",
        "a charmed necklace",
        "a ragged headcover",
        "antique eyeglasses",
        "a patterned hijab",
        "a silken eyepatch",
        "fingerless gloves",
        "a quilted jacket",
        "encrusted cuffs",
        "a feathered cap",
        "a boned bodice",
        "a fancy hat",
        "a bronze breastplate",
        "oversized spectacles",
        "a homemade charm",
        "hammered earrings",
        "an ornamented belt",
        "a shining hauberk",
        "an animal brooch",
        "obsidian bracers",
        "a symbol of god",
        "a tarnished ring",
        "a humble tunic"
      ],
      style3: [
        "no sense of urgency",
        "an effortless glide",
        "frenzied footwork",
        "a confident step",
        "great difficulty",
        "a reliable pace",
        "wide-swinging arms",
        "a spring in my step",
        "a singular purpose",
        "no sense of space",
        "music in my feet",
        "an uneven gait",
        "a joyful whistle",
        "relentless focus",
        "casual swagger",
        "apprehension",
        "a heavy step",
        "fearlessness"
      ]
    };
  },
  computed: {
    outfit1: {
      get() {
        return this.$store.state.outfit1;
      },
      set(value) {
        this.$store.commit("updateMessage", {
          name: "outfit1",
          message: value
        });
      }
    },
    outfit2: {
      get() {
        return this.$store.state.outfit2;
      },
      set(value) {
        this.$store.commit("updateMessage", {
          name: "outfit2",
          message: value
        });
      }
    },
    move: {
      get() {
        return this.$store.state.move;
      },
      set(value) {
        this.$store.commit("updateMessage", {
          name: "move",
          message: value
        });
      }
    }
  },
  methods: {
    updateField: function(name, item) {
      this[name] = item;
      console.log(this[name]);
    }
  }
};
</script>