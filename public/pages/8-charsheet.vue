<template>
  <div class="charSheet">
    <div class="container d-print-none">
      <div class="row align-items-center">
        <div class="col-lg-8">
          <div class="charSheet-instructions">
            <h2>Character Profile Sheet</h2>
            <p>Click on an underlined field to return to that step and edit.</p>
            <p>
              When you're done, use the options to print or save your character profile as a jpg. Also don't forget to
              <a target="_blank" href="https://www.adventure.game/store">pick up a copy of the book</a>!
            </p>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="charSheet-utility d-print-none">
            <div class="d-flex">
              <div class="ml-lg-auto">
                <button v-on:click="saveAsJpg()" class="btn btn-primary">
                  <i class="fas fa-file-image"></i> Save as JPG
                </button>
                <button v-on:click="print()" class="btn btn-primary">
                  <i class="fas fa-print"></i> Print
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="charSheetPrintable">
      <div class="charSheetTop">
        <div class="container" id="header">
          <div class="row">
            <div class="col-md-12">
              <img src="../img/quest-logo-black.png" alt="Quest Logo" width="150" />
            </div>
          </div>
        </div>
      </div>
      <div class="charSheetInner">
        <div class="charSheetInner-title">
          <h3>Character Profile</h3>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="sheetRow">Hello,</div>

              <div class="sheetRow">
                My name is
                <div v-on:click="editPage('name')" class="fieldContainer fieldContainer-name">
                  <span id="name" class="sheetField">{{name}}</span>
                </div>
                <div v-on:click="editPage('name')" class="fieldContainer fieldContainer-pronouns">
                  (
                  <span id="pronouns" class="sheetField">{{pronouns}}</span> )
                </div>
              </div>

              <div class="sheetRow">
                I'm
                <div v-on:click="editPage('name')" class="fieldContainer fieldContainer-age">
                  <span id="age" class="sheetField">{{age}}</span>
                </div>&nbsp;years old, and stand
                <div v-on:click="editPage('name')" class="fieldContainer fieldContainer-height">
                  <span id="height" class="sheetField">{{height}}</span>
                </div>&nbsp;tall.
              </div>

              <div class="sheetRow">
                I'm the party's
                <div v-on:click="editPage('role')" class="fieldContainer fieldContainer-role">
                  <span id="role" class="sheetField">{{role}}</span>
                </div>.
              </div>

              <div class="sheetRow">
                When people seem me, they first notice my
                <div class="featuresContainer">
                  <div
                    v-on:click="editPage('scene')"
                    class="fieldContainer fieldContainer-features"
                  >
                    <span id="body" class="sheetField">{{body}}</span>
                  </div>,
                  <span v-on:click="editPage('scene')" id="face" class="sheetField">{{face}}</span>,
                </div>
                <div class="featuresContainer">
                  and
                  <span v-on:click="editPage('scene')" id="vibe" class="sheetField">{{vibe}}</span>.
                </div>
              </div>

              <div class="sheetRow">
                I wear
                <div v-on:click="editPage('style')" class="fieldContainer fieldContainer-style">
                  <span id="outfit1" class="sheetField">{{outfit1}}</span>
                </div>,
                <span v-on:click="editPage('style')" id="outfit2" class="sheetField">{{outfit2}}</span>, and move with
                <span
                  v-on:click="editPage('style')"
                  id="move"
                  class="sheetField"
                >{{move}}</span>.
              </div>

              <div class="sheetRow">
                I'm from
                <div v-on:click="editPage('callhome')" class="fieldContainer fieldContainer-home">
                  <span id="home" class="sheetField">{{home}}</span>
                </div>, where my people are known for
                <div
                  v-on:click="editPage('callhome')"
                  class="fieldContainer fieldContainer-community"
                >
                  <span id="knownFor" class="sheetField">{{knownFor}}</span>
                </div>.
              </div>

              <div class="sheetRow">
                I believe in
                <div
                  v-on:click="editPage('ideal-flaw')"
                  class="fieldContainer fieldContainer-ideal"
                >
                  <span id="ideal" class="sheetField">{{ideal}}</span>
                </div>, but my
              </div>

              <div class="sheetRow">
                <div v-on:click="editPage('ideal-flaw')" class="fieldContainer fieldContainer-flaw">
                  <span id="flaw" class="sheetField">{{flaw}}</span>
                </div>side can get in my way.
              </div>

              <div class="sheetRow">
                I dream of
                <div v-on:click="editPage('dream')" class="fieldContainer fieldContainer-dream">
                  <span id="dream" class="sheetField">{{dream}}</span>
                </div>.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default {
  methods: {
    print: function() {
      window.print();
    },
    saveAsJpg: function() {
      window.scrollTo(0, 0);
      html2canvas(document.querySelector(".charSheetPrintable"), {
        allowTaint: true
      }).then(function(canvas) {
        saveAs(canvas.toDataURL(), "quest-character-profile.jpg");
      });
    },
    editPage: function(page) {
      this.$router.push(page);
    }
  },
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
    },
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
    },
    body: {
      get() {
        return this.$store.state.body;
      },
      set(value) {
        this.$store.commit("updateMessage", {
          name: "body",
          message: value
        });
      }
    },
    face: {
      get() {
        return this.$store.state.face;
      },
      set(value) {
        this.$store.commit("updateMessage", {
          name: "face",
          message: value
        });
      }
    },
    vibe: {
      get() {
        return this.$store.state.vibe;
      },
      set(value) {
        this.$store.commit("updateMessage", {
          name: "vibe",
          message: value
        });
      }
    },
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
    },
    home: {
      get() {
        return this.$store.state.home;
      },
      set(value) {
        this.$store.commit("updateMessage", {
          name: "home",
          message: value
        });
      }
    },
    knownFor: {
      get() {
        return this.$store.state.knownFor;
      },
      set(value) {
        this.$store.commit("updateMessage", {
          name: "knownFor",
          message: value
        });
      }
    },
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
    },
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
  }
};

function saveAs(uri, filename) {
  var link = document.createElement("a");

  if (typeof link.download === "string") {
    link.href = uri;
    link.download = filename;

    //Firefox requires the link to be in the body
    document.body.appendChild(link);

    //simulate click
    link.click();

    //remove the link when done
    document.body.removeChild(link);
  } else {
    window.open(uri);
  }
}
</script>