<template>
  <div class="container-fluid background">
    <div class="row">
      <div class="col-12 col-md-4">
        <div class="row">
          <div class="col-12 col-md-12 mt-2">
            <div class="card border-0 animate__animated animate__slideInLeft">
              <img
                class="card-img-top profile-page-img"
                :src="profile.picture"
                alt="Card image cap"
              />
              <div class="card-body bg-dark">
                <h3 class="card-title red">Welcome: {{ profile.name }}</h3>
                <p class="card-text neon blue">
                  Total Prior Polls: {{ myRooms.length }}
                </p>
                <p class="neon green">{{ profile.email }}</p>
                <i
                  id="edit-name-btn"
                  class="fas fa-pen-alt"
                  aria-hidden="true"
                  @click="toggleEdit"
                ></i>
                <div class="row">
                  <form
                    v-if="editing"
                    class="form-inline"
                    @submit.prevent="finishEdit"
                  >
                    <div class="form-group col-12">
                      <label for="profilename" class="neon blue"
                        >New Profile Name:</label
                      >
                      <input
                        id="new-name-input"
                        type="text"
                        v-model="eProfile.name"
                        class="form-control p-1 m-1 neon blue"
                        placeholder="New Name"
                      />
                    </div>
                    <div class="form-group col-12">
                      <label for="profilesteam" class="neon blue"
                        >New Profile Steam Id:</label
                      >
                      <input
                        id="new-steam-id-input"
                        type="text"
                        v-model="eProfile.steamId"
                        class="form-control p-1 m-1 neon blue"
                        placeholder="Steam Id"
                      />
                    </div>
                    <div class="form-group col-12">
                      <label for="profilepic" class="neon blue"
                        >New Profile Picture:</label
                      >
                      <input
                        id="profilepic"
                        type="text"
                        v-model="eProfile.picture"
                        class="form-control p-1 m-1 neon blue"
                        placeholder="New Picture URL"
                      />
                    </div>
                    <div class="col-12 text-center">
                      <button
                        id="edit-submit-btn"
                        class="btn btn-primary mx-2 flashy neon blue"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-12 my-2">
            <div class="card bg-dark">
              <div class="card-header text-center red">
                <h3>My Previous Polls</h3>
              </div>
              <div v-if="this.myRooms.length > 0" class="card poll-container">
                <historic-poll-component
                  v-for="room in myRooms"
                  :key="room.id"
                  :pollData="room"
                />
              </div>
              <div
                v-else
                class="div spacer neon blue align-items-center justify-content-center d-flex row"
              >
                <div class="col-1">
                  <i class="fas fa-comment-slash text-muted"></i>
                </div>
                <p class="text-muted">nothing here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-8 mt-2">
        <h3 class="card-header red">My Channels</h3>
        <div class="card bg-dark text-light p-4 steam-container">
          <img
            class="card-img profile-img-overlay"
            src="@/assets/gameon.jpg"
            alt="Card image"
          />
          <div class="card-img-overlay">
            <channel-component />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import channelComponent from "../components/ChannelComponent";
import historicPollComponent from "../components/HistoricPollComponent";
export default {
  name: "Profile",
  mounted() {
    this.$store.dispatch("getRooms");
  },
  data() {
    return {
      eProfile: {},
      editing: false,
    };
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    },
    myRooms() {
      return this.$store.state.myRooms;
    },
  },
  methods: {
    toggleEdit() {
      (this.eProfile = this.profile), (this.editing = !this.editing);
    },
    finishEdit() {
      this.editing = false;
      this.$store.dispatch("editProfile", this.eProfile);
    },
  },
  components: {
    historicPollComponent,
    channelComponent,
  },
};
</script>

<style scoped>
.fas {
  color: #ff88ff;
  cursor: pointer;
}

.fas:hover {
  text-shadow: 0 0 12px #ff88ff, 0px 0px 3px #fff;
}
</style>