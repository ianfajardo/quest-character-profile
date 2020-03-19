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
                <div class="col-md-6 col-lg-3" v-for="role in roles" v-bind:key="role.name">
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
        <div class="row">
          <div class="col-md-6">
            <router-link to="/name" class="btn btn-lg btn-primary">
              <b-icon-arrow-left-short></b-icon-arrow-left-short>Previous: Say your name
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
  data() {
    return {
      roles: [
        {
          name: "fighter",
          className: "Fighter",
          desc:
            "The Fighter is a sturdy and versatile role that can be used effectively for direct combat and also team support. While they can handily wield weapons of war, they can be equally skilled in matters of the heart."
        },
        {
          name: "invoker",
          className: "Invoker",
          desc:
            "The Invoker is a capable battle mage, mixing martial prowess with a touch of wizardry. Their powers are fueled by their bond to their ideals, making the role a great choice for people who want to roleplay a character who serves the gods or a set of beliefs."
        },
        {
          name: "ranger",
          className: "Ranger",
          desc:
            "The Ranger is a great choice for people who want to play a skilled hunter and survivalist who thrives on the fringes of civilization."
        },
        {
          name: "naturalist",
          className: "Naturalist",
          desc:
            "The Naturalist is a powerful magic user who can transform into animal forms and shape the elements. If you want to sling fireballs, call down lightning, summon clouds of fog, or create dazzling auroras in the sky, The Naturalist is the role for you."
        },
        {
          name: "doctor",
          className: "Doctor",
          desc:
            "The Doctor is a magic scientist who can work wonders. You can play the Doctor as a traditional healer role, or use its inquisitive abilities to be more like a magical detective. Or, if you’re feeling slightly sinister, you can dabble in some necromancy…"
        },
        {
          name: "spy",
          className: "Spy",
          desc: "You should play The Spy if you want to roleplay a supremely skilled character who relies on practical means to achieve their aims. It’s a great choice for playing a secret agent or roguish assassin"
        },
        {
          name: "magician",
          className: "Magician",
          desc: "Choose The Magician if you want to use spells that affect the mind and the senses. The role is a great choice for people who want to play a dazzling performer, or a devious manipulator."
        },
        {
          name: "wizard",
          className: "Wizard",
          desc: "You can use The Wizard’s generalist magic role to play any kind of spellcaster you want, from a bookish academic on a knowledge quest, to a conjurer of tricks, or a megalomaniacal mage seeking absolute power."
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