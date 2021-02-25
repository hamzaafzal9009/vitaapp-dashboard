<template>
  <div class="navbar">
    <div class="navbar-right">
      <div class="navbar-profile">
        <el-popover
          class="profile-popover"
          width="200"
          placement="bottom"
          trigger="click"
        >
          <div slot="reference" class="navbar-profile-wrapper">
            <div
              class="profile-image"
              :style="{ background: generateColor() }"
              v-if="!currentUser.userImage"
            >
              <span class="initials">A</span>
            </div>
            <span class="profile-caret"
              ><i class="profile-caret fas fa-caret-down"></i
            ></span>
          </div>
          <div class="profile-popover-content">
            <div class="profile-popover-item">
              <i class="item-icon fas fa-sign-out-alt"></i>Logout
            </div>
          </div>
        </el-popover>
      </div>
    </div>
  </div>
</template>

<script>
import { EventService } from "../../main";

export default {
  name: "navbar",
  props: ["pageTitle"],
  components: {},
  data: function() {
    return {
      showMenu: false,
      currentUser: {
        userImage: "",
      },
      isDisplayed: false,
    };
  },
  computed: {},
 
  methods: {
    
    toggleMenu() {
      this.isDisplayed = false;
      this.showMenu = !this.showMenu;
    },
    hideMenu() {
      this.isDisplayed = false;
      this.showMenu = false;
    },
    handleMenuClicks(command) {
      if (command == "/userList") {
        let url = command + "/" + this.currentUser.userId;
        if (this.$router.currentRoute.path.substr(0, 9) != "/userList") {
          this.$router.push(url);
        } else {
          EventService.$emit("selectUser", this.currentUser);
        }
      } else if (command == "logout") {
        this.logout();
      }
    },
    generateColor() {
      return "#65615B";
    },
  },
  watch: {
    pageTitle(to, from) {
      if (this.pageTitle && this.pageTitle != "Login") this.loadData();
    },
  },
};
</script>

<style scoped>
.profile-caret {
  color: #65615b;
}
.item-icon {
  width: 30px;
  max-width: 100%;
}
.profile-popover-content {
  box-sizing: border-box;
  padding: 5px;
}
.profile-popover-item {
  font-size: 16px;
  padding-top: 12px;
  padding-left: 10px;
  padding-bottom: 12px;
  border: 1px solid rgba(0, 0, 0, 0);
  color: #65615b;
}
.profile-popover-item:hover {
  background: #f2f2f2;
  border: 1px solid #9a9a9a35;
  border-radius: 6px;
  cursor: pointer;
}
#location-button {
  width: 100%;
  max-width: 360px;
  min-width: 270px;
  font-weight: 600;
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
#location-button:hover .caret i {
  transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
}
.location-popover-content {
  height: 300px;
  box-sizing: border-box;
  padding: 10px;
  overflow-y: auto;
}
.location-item {
  font-size: 14px;
  padding-top: 12px;
  padding-left: 10px;
  padding-bottom: 12px;
  border: 1px solid rgba(0, 0, 0, 0);
  color: #65615b;
}
.location-item:hover {
  background: #f2f2f2;
  border: 1px solid #9a9a9a35;
  border-radius: 6px;
  cursor: pointer;
}
.navbar {
  display: flex;
  align-items: center;
  position: fixed;
  right: 0;
  top: 0;
  height: var(--navbar-height);
  width: 100%;
  max-width: 100%;
  display: flex;
  background: #f4f3ef;
  align-items: center;
  border-bottom: 1px solid #ddd;
}

.navbar-menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin-left: calc(var(--sidebar-width) + 50px);
  color: white;
  background: #65615b;
  height: 38px;
  width: 38px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 40px;
}

.navbar-menu span {
  width: 40%;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 2px;
  height: 1px;
  margin: 2.5px 0px 2.5px 0px;
}

.navbar-logo img {
  height: 45px;
  margin: 5px 0 0 15px;
}

.navbar-right {
  position: absolute;
  right: 0;
  top: 0;
}

.navbar-profile {
  padding-top: 5px;
  color: white;
  display: flex;
  align-items: center;
}

.el-dropdown-menu {
  transform-origin: center top;
  z-index: 2023;
  position: fixed;
  top: 50px !important;
  left: 1480px;
  /* max-height: 200px; */
  /* min-width: 300px; */
  overflow: hidden;
  overflow-y: scroll;
}

.location-select {
  width: 300px;
  margin-right: 20px;
}

.navbar-notifications-container {
  padding: 11px 15px;
  font-size: 28px;
  border-left: 2px solid rgb(27, 26, 26);
  color: #4fcbc5;
  background: rgb(92, 92, 92);
}

.notification-number {
  font-size: 12px;
  border-radius: 50%;
  padding: 4px;
  border: 0.5px solid #4fcbc5;
  background: #545454;
  position: absolute;
  display: flex;
  justify-content: center;
  top: 0;
  margin-top: 7px;
  transform: translateX(10px);
  color: #f48d46;
}

.navbar-profile-icons {
  float: right;
  padding: 7px 0px 0 10px;
  font-size: 24px;
  cursor: pointer;
}

.navbar-profile-icons-menu {
  margin-right: 10px;
  margin-top: 7px;
  float: left;
  color: #4fcbc6;
}

.navbar-profile-menu-backdrop {
  position: absolute;
  background: transparent;
  right: 0px;
  left: 0px;
  top: 0px;
  height: 100vh;
  cursor: pointer;
}

.navbar-profile-menu {
  height: 0;
  position: absolute;
  background: white;
  right: 8px;
  top: 50px;
  padding: 0;
  overflow: hidden;
  font-size: 15px;
  color: #545454;
  text-align: center;
  border: none;
  border-radius: 3px;
}

.navbar-profile-menu div {
  margin: 0;
  display: flex;
  padding: 5px;
  width: 175px;
}
.navbar-profile-menu i {
  margin: 3px 15px 0px 10px;
  width: 15px;
}
.hover-indicator:nth-child(2) {
  border-radius: 3px 3px 0 0;
  margin-top: 10px;
}
.hover-indicator:last-child {
  border-radius: 0 0 3px 3px;
  margin-bottom: 15px;
}

#nav-caret {
  color: white;
  position: absolute;
  right: 16px;
  top: -8px;
  margin: 0;
  pointer-events: none;
}

.navbar-profile-menu-show {
  height: auto;
  overflow: initial;
  box-shadow: 1px 10px 17px -10px;
}
.navbar-profile-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 60px;
  margin-right: 60px;
  cursor: pointer;
}
.navbar-profile-wrapper:hover {
  opacity: 0.9;
}
.navbar-profile-wrapper:hover i {
  transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
}
.profile-image {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 1000px;
  color: white;
}
.initials {
  font-size: 16px;
  font-weight: 600;
}
/* 
.navbar-profile-image {
  height: 40px;
  width: 40px;
  margin-right: 40px;
  border-radius: 50%;
  color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.navbar-profile-image > div {
  height: 30px;
  width: 25px;
  margin-right: 5px;
  border-radius: 50%;
  padding: 5px 10px;
  color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.initials {
  font-size: 14px;
  font-weight: 400;
}

.navbar-profile-image img {
  margin-right: 5px;
}

.navbar-profile-image i {
  font-size: 20px;
} */

.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}

.navbar-profile-locations select {
  background: transparent;
  appearance: none;
  border: none;
  height: 38px;
  color: white;
  transform: translateY(-6px);
  z-index: 999;
  width: 100%;
  padding-left: 20px;
}

.navbar-profile-locations options {
  appearance: none;
}

.open-indicator {
  z-index: 998;
  position: absolute;
  right: 100px;
  top: 0;
  margin-top: 20px;
  display: inline-block;
  cursor: pointer;
  pointer-events: all;
  transition: all 150ms cubic-bezier(1, -0.115, 0.975, 0.855);
  transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);
  opacity: 1;
  height: 15px;
  width: 10px;
}
.open-indicator:before {
  border-color: #fff;
  border-style: solid;
  border-width: 3px 3px 0 0;
  content: "";
  display: inline-block;
  height: 7px;
  width: 7px;
  vertical-align: top;
  transform: rotate(133deg);
  transition: all 150ms cubic-bezier(1, -0.115, 0.975, 0.855);
  transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);
  box-sizing: inherit;
}

.closed-indicator {
  z-index: 998;
  position: absolute;
  right: 100px;
  top: 0;
  margin-top: 20px;
  display: inline-block;
  cursor: pointer;
  pointer-events: all;
  transition: all 150ms cubic-bezier(1, -0.115, 0.975, 0.855);
  transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);
  opacity: 1;
  height: 3px;
  width: 10px;
}
.closed-indicator:before {
  border-color: #fff;
  border-style: solid;
  border-width: 3px 3px 0 0;
  content: "";
  display: inline-block;
  height: 7px;
  width: 7px;
  vertical-align: top;
  transform: rotate(-45deg);
  transition: all 150ms cubic-bezier(1, -0.115, 0.975, 0.855);
  transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);
  box-sizing: inherit;
}

.navbar-profile-locations option {
  color: white;
}

.navbar-select-location {
  background: white;
  border-radius: 5px;
  min-width: 250px;
}

.navbar-profile-spoof {
  float: right;
  text-align: right;
  margin: 20px 20px 0 0;
  color: #65615b;
}

.one-location {
  /* margin-bottom: 10px; */
  width: 250px;
  background: #4fcbc5;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 55px;
}

.navbar-profile-new-locations:first-child {
  background: #4fcbc5;
  display: flex;
  align-content: center;
  align-items: center;
  height: 55px;
  padding: 0 40px;
  width: 200px;
  overflow: hidden;
}

.search-drop-menu {
  /* display: flex; */
  top: 0;
  flex-direction: column;
  position: absolute;
  background: white;
  border: 1px solid lightgrey;
  color: black;
  z-index: 999;
  margin: 0px 50px 0 0;
  border-radius: 1px;
  width: 280px;
  display: none;
  transform: translateX(-41px) translateY(55px);
  max-height: 361px;
  overflow-y: scroll;
}

.navbar-location-name {
  text-overflow: ellipsis;
  width: 250px;
  height: 55px;
  background: #4fcbc5;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-right: 40px; */
}

.display {
  display: flex;
}

.search-span {
  display: flex;
  justify-content: space-between;
  padding: 10px 0 25px 0;
  border-bottom: 1px solid lightgrey;
}

.search-span input {
  border: none;
  width: 80%;
  padding-left: 40px;
  margin: 0;
}

.search-span i {
  position: absolute;
  right: 5px;
  color: grey;
}

.search-drop-menu .spans {
  padding: 7px 40px;
  text-overflow: ellipsis;
  border-bottom: 1px solid lightgrey;
  cursor: pointer;
  text-overflow: ellipsis;
}

.search-drop-menu .spans:hover,
.span:hover {
  background: #efefef;
}

.search-drop-menu .span {
  padding: 7px 40px;
  text-overflow: ellipsis;
  border-bottom: 1px solid lightgrey;
  cursor: pointer;
}

.hover-indicator:hover {
  background: #efefef;
}

.right-space {
  margin-right: 50px;
}

.spoof-location {
  padding-left: 10px;
  padding-right: 35px;
  width: unset;
  margin-right: 0;
}

.spoof-indicator {
  right: 75px;
}

@media (max-width: 1200px) {
  .navbar {
    /* background: #4fcbc6; */
    /* width: 100%;
    max-width: 100%; */
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
  }

  .navbar-logo {
    padding: 0;
    text-align: center;
    width: 60%;
  }

  #location-button {
    max-width: 90%;
    width: 100%;
    min-width: 60px;
  }
  .navbar-profile {
    width: 100%;
    max-width: 100%;
  }
  .navbar-profile-wrapper {
    margin-right: 10px;
  }

  .navbar-title {
    float: right;
    margin-left: 0;
    width: 40%;
  }
}
</style>
