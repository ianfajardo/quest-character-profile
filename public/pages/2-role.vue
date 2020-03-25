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
                      <div class="fieldContainer fieldContainer-role">
                        <span id="role" class="sheetField">{{role}}</span>
                      </div>.
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div
                  class="col-md-6 col-lg-3"
                  v-for="role in roles"
                  v-bind:class="'animated ' + ((activeRole === role.className) ? 'tada' : '')"
                  v-bind:key="role.name"
                >
                  <div
                    class="role-card"
                    v-bind:class="'role-card-' + role.name + ' ' + ((activeRole === role.className) ? 'active' : '')"
                    v-on:click="setRole(role.className)"
                  >
                    <div class="role-title">The {{role.name}}</div>
                    <div class="role-desc">{{role.desc}}</div>
                    <div class="role-link">
                      <a>{{(activeRole === role.className) ? "Selected" : "Choose " + role.name }}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end row -->
        <div class="row py-5">
          <div class="col-md-4">
            <router-link to="/name" class="btn btn-lg btn-primary">
              <b-icon-arrow-left-short></b-icon-arrow-left-short>Previous: Say your name
            </router-link>
          </div>
          <div class="col-md-4 text-md-center">
            <router-link to="/charactersheet" class="btn btn-lg btn-secondary">
              <i class="fas fa-binoculars"></i> &nbsp; Character Profile
            </router-link>
          </div>
          <div class="col-md-4 text-md-right">
            <router-link to="/scene" class="btn btn-lg btn-primary text-md-right">
              Next: Enter the Scene
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
      roles: [
        {
          name: "fighter",
          className: "Fighter",
          desc:
            "The Fighter takes charge to meet challenges up close. They are weapon masters and martial artists, relying on their physical might to overcome foes."
        },
        {
          name: "invoker",
          className: "Invoker",
          desc:
            "The Invoker is a battle mage, relying on the force of their ideals. They conjure protective wards, invigorate allies in a pinch, and smite enemies with radiance."
        },
        {
          name: "ranger",
          className: "Ranger",
          desc:
            "The Ranger is an outlander, hunter, and skilled navigator, thriving on the fringes of civilization. They keep faithful pets and have a special bond with beasts."
        },
        {
          name: "naturalist",
          className: "Naturalist",
          desc:
            "The Naturalist channels their connection with nature to manipulate the elements, commune with animals, and even transform themselves into wild beasts."
        },
        {
          name: "doctor",
          className: "Doctor",
          desc:
            "The Doctor is a magic scientist who tinkers with the forces of life and death. They reverse (or advance) the effects of damage, disease, and decay."
        },
        {
          name: "spy",
          className: "Spy",
          desc:
            "The Spy is a crafty agent of stealth and subterfuge. They are master assassins and experts in the use of magical gadgets, chemicals, traps, disguises, and forgeries."
        },
        {
          name: "magician",
          className: "Magician",
          desc:
            "The Magician specializes in conjuration and psychic manipulation. From parlor tricks to elaborate deceptions, they are master illusionists, capable of twisting the mind."
        },
        {
          name: "wizard",
          className: "Wizard",
          desc:
            "The Wizard is a powerful spellcaster with a diverse set of magical abilities. At the height of their power, they can travel to other worlds and transcend their mortal selves."
        }
      ],
      activeRole: ""
    };
  },
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

      if (this.activeRole == role) {
        this.activeRole = "";
        this.role = "";
      } else {
        this.activeRole = role;
      }
    }
  }
};
</script>