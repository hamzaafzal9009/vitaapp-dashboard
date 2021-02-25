<template>
  <div id="app" :class="{'app-blank': clearBackground}">
    <div class="abso" style="position: absolute; top:0;">
      <div class="success-message" v-if="successMessage">
        <i :class="successImage"></i>
        <div class="message-container">
          <span class="detail-title">{{successTitle}}</span>
          <span class="detail-message">{{successMessage}}</span>
        </div>
      </div>
      <div class="success-message warning" v-if="warningMessage">
        <i :class="warningImage"></i>
        <div class="message-container">
          <span class="detail-title">{{warningTitle}}</span>
          <span class="detail-message">{{warningMessage}}</span>
        </div>
      </div>
      <div class="success-message error" v-if="errorMessage">
        <i :class="errorImage"></i>
        <div class="message-container">
          <span class="detail-title">{{errorTitle}}</span>
          <span class="detail-message">{{errorMessage}}</span>
        </div>
      </div>
      <div class="success-message info" v-if="infoMessage">
        <i :class="infoImage"></i>
        <div class="message-container">
          <span class="detail-title">{{infoTitle}}</span>
          <span class="detail-message">{{infoMessage}}</span>
        </div>
      </div>
    </div>
    <div class="loading" v-if="loading > 0">
      <svg class="loader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="80" stroke="#1976d2"/>
        <circle cx="100" cy="100" r="68" stroke="lightgrey"/>
        <circle cx="100" cy="100" r="55" stroke="#1976d2"/>
        <circle cx="100" cy="100" r="43" stroke="darkgray"/>
      </svg>
    </div>
    <sidebar :selected-link="currentPageTitle" v-if="displaySidebar" class="side-nav" :class="{'side-bar-open':sidebarMinimized}"/>
    <div :class="{'main-content': displaySidebar, 'main-content-login': !displaySidebar}">
      <navbar class="navbar" :page-title="currentPageTitle" v-if="displayNavbar" />
      <router-view class="main-content-view"/>
      <appFooter v-if="displayFooter"/>
    </div>
  </div>
</template>

<script>
import navbar from './components/layout/Navbar'
import sidebar from './components/layout/Sidebar'
import appFooter from './components/layout/Footer'
import { EventService } from './main';

export default {
  name: 'index',
  components: {
    navbar, sidebar, appFooter
  },
  data: function() {
    return {
      sidebarMinimized: false,
      currentPageTitle: 'Login',
      successTitle: 'Success',
      errorTitle: 'Error',
      warningTitle: 'Warning',
      infoTitle: 'Info',
      successMessage: '',
      errorMessage: '',
      warningMessage: '',
      infoMessage: '',
      successImage: 'far fa-check',
      errorImage: 'fal fa-exclamation-circle',
      warningImage: 'fal fa-exclamation-triangle',
      infoImage: 'fal fa-info-circle',
      duplicate: false,
      loading: 0,
      hideSidebarPages: ['Login', 'Leave Feedback', 'Leave Review', 'Leave Review Email', 'Leave Review Email Campaign', 'Leave Review Email Automation', 'Review Redirect', 'Reset Password', 'Set Password', 'Unsubscribe', 'Answer Survey', 'Add Customer', 'serverStatus'],
      hideNavbarPages: ['Login', 'Leave Feedback', 'Leave Review', 'Leave Review Email', 'Leave Review Email Campaign', 'Leave Review Email Automation', 'Review Redirect', 'Reset Password', 'Set Password', 'Unsubscribe', 'Answer Survey', 'serverStatus'],
      hideFooterPages: ['Login', 'Leave Feedback', 'Leave Review', 'Leave Review Email', 'Leave Review Email Campaign', 'Leave Review Email Automation', 'Review Redirect', 'Reset Password', 'Set Password', 'Unsubscribe', 'Answer Survey', 'serverStatus'],
      clearBackgroundPages: ['Leave Feedback', 'Leave Review', 'Leave Review Email', 'Leave Review Email Campaign', 'Leave Review Email Automation', 'Review Redirect', 'Unsubscribe', 'Answer Survey', 'serverStatus' ]
    }
  },
  computed: {
    displaySidebar: function() {
      return this.hideSidebarPages.indexOf(this.currentPageTitle) == -1;
    },
    displayNavbar: function() {
      return this.hideNavbarPages.indexOf(this.currentPageTitle) == -1;
    },
    displayFooter: function() {
      return this.hideFooterPages.indexOf(this.currentPageTitle) == -1;
    },
    clearBackground: function() {
      return this.clearBackgroundPages.indexOf(this.currentPageTitle) != -1;
    }
  },
  watch: {
    $route (to, from) {
      EventService.$emit("loading", "hide");
    }
  },
  created() {
    this.currentPageTitle = this.$route.name;

    EventService.$on('successMessage', this.displaySuccessMessage)
    EventService.$on('errorMessage', this.displayErrorMessage)
    EventService.$on('infoMessage', this.displayInfoMessage)
    EventService.$on('warningMessage', this.displayWarningMessage)
    EventService.$on('loading', this.displayLoading)
    EventService.$on('sidebarChange', this.toggleSidebar)
  },
  methods: {
    toggleSidebar() {
      if(this.sidebarMinimized == false) {
        this.sidebarMinimized = true;
      } else if (this.sidebarMinimized == true) {
        this.sidebarMinimized = false;
      } else {
        null;
      }
    },
    displaySuccessMessage(successMessage, successTitle) {
      this.successMessage = successMessage;
      successTitle ? this.successTitle = successTitle: null;
      setTimeout(() => {
        this.successMessage = '';
        this.successTitle = 'Success';
        this.duplicate = false;
      }, 3000);
    },
    displayErrorMessage(errorMessage, errorTitle) {
      this.errorMessage = errorMessage;
      errorTitle ? this.errorTitle = errorTitle: null;
      setTimeout(() => {
        this.errorMessage = '';
        this.errorTitle = 'Error';
      }, 3000);
    },
    displayInfoMessage(infoMessage, infoTitle) {
      this.infoMessage = infoMessage;
      infoTitle ? this.infoTitle = infoTitle: null;
      setTimeout(() => {
        this.infoMessage = '';
        this.infoTitle = 'Info';
      }, 3000);
    },
    displayWarningMessage(warningMessage, warningTitle) {
      this.warningMessage = warningMessage;
      warningTitle ? this.warningTitle = warningTitle: null;
      setTimeout(() => {
        this.warningMessage = '';
        this.warningTitle = 'Warning';
      }, 3000);
    },
    displayLoading(command) {
      let counter = 0;
      if(command == 'show') {
        ++counter;
      } if(command == 'hide') {
        counter--;
      }
      return this.loading = counter;
    },
  },
  watch:{
    $route(to, from) {
      this.currentPageTitle = to.name;
    }
  }
}
</script>

<style>
@keyframes fadeout {
  0% {opacity: .95;}
  90% {opacity: .95;}
  100% {opacity: 0;}
}

@keyframes faderepeat {
  0% {opacity: .95;}
  100% {opacity: .1;}
}

@keyframes progress {
  0% {width: 390px}
  100% {width: 0%}
}

/* @keyframes shine {
  0%
  {
      background-position: top left;
  }
  100%
  {
      background-position: top right;
  }
} */

.loading-words {
    /* background: #222 -webkit-gradient(linear, left top, right top, from(#222), to(#222), color-stop(0.5, #fff)) 0 0 no-repeat;
    -webkit-background-size: 125px; */
    /* color: rgba(255, 255, 255, 0.1); */
  /* animation: shine 2s alternate-reverse infinite; */
  animation: faderepeat .5s alternate-reverse infinite;
}

#app {
  display: flex;
  background: #F4F3EF;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
}

#app.app-blank {
  background: white;
}
.main-content-view {
  width: 100%;
  /* height: 100vh; */
  height: auto;
  /* min-height: 800px; */
}

.success-message {
  opacity: 0;
  display: flex;
  z-index: 9999;
  width: 350px;
  background: #8AC349;
  color: white;
  align-items: center;
  box-shadow: 0 0 8px rgba(0, 0, 0, .38);
  border-radius: 5px;
  justify-content: flex-start;
  animation-name: fadeout;
  animation-duration: 5s;
  padding: 20px;
  position: fixed;
  bottom: 45px;
  right: 10px;
  text-shadow: 0 0 3px rgba(0, 0, 0, .25);
}

.success-message i {
  /* font-weight: bold; */
  font-size: 30px;
}

.success-message::after {
  position: relative;
  content: '';
  display: block;
  border-bottom: 5px solid rgba(104, 104, 104, 0.8);
  border-radius: 5px;  
  width: 0%;
  animation-name: progress;
  animation-duration: 5s;
  position: fixed;
  bottom: 45px;
  right: 10px;
}

.message-container {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
}

.detail-title {
  font-weight: bolder;
  margin-bottom: 6px;
  font-size: 18px;
}

.detail-message {
  font-size: 16px;
}

.error {
  background: red;
}

.error i {
  font-weight: bolder;
}

.warning {
  background: #f48d46;
}

.info {
  background: rgb(0, 123, 255);
}

.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: rgba(255,255,255,.3);
  /* box-shadow: 0px 1px 3px rgba(0,0,0,.25); */
}

.loader {
  max-width: 10rem;
  width: 100%;
  height: auto;
  stroke-linecap: round;
  /* background-color: white; */
}

.loader circle {
  fill: none;
  stroke-width: 2;
  animation-name: preloader;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  transform-origin: 100px 100px;
  will-change: transform;
}

.loader circle:nth-child(1) {
  stroke-dasharray: 300px;
  animation-delay: -.08s;
}

.loader circle:nth-child(2) {
  stroke-dasharray: 250px;
  animation-delay: -.25s;
}

.loader circle:nth-child(3) {
  stroke-dasharray: 225px;
  animation-delay: -.45s;
}

.loader circle:nth-child(4) {
  stroke-dasharray: 150px;
  animation-delay: -.64s;
}

@keyframes preloader {
  50% {
    transform: rotate(500deg);
  }
}

.loading p {
  position: absolute;
  transform: translateY(-17px);
}

div.null-nav {
  margin: 0px;
  padding: 0px;
}

.under-navbar.under-blank {
  background: white;
}

div.sidebar {
  overflow-x: hidden;
  z-index: 20;
  width: 45px;
}

div.sidebar:hover {
  width: 150px;
}

div.fully-extended {
  /* margin-left: 75px !important; */
}

div.side-bar-open {
  /* width: 260px !important; */
}

div.side-bar-open .sidebar-link .sidebar-link-text {
  opacity: 1;
}

div.sidebar:hover .sidebar-link .sidebar-link-text {
  opacity: 1;
}

.main-content {
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: auto;
  margin-top: var(--navbar-height);
  padding: 20px;
  box-sizing: border-box;
}

.main-content-login {
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: auto;
  /* margin-top: var(--navbar-height); */
  /* padding: 20px; */
  box-sizing: border-box;
}
@media (max-width: 1200px) {
  .main-content {
    padding: 10px;
    padding-top: 20px;
  }
}

@media only screen and (max-width: 700px) {
  .main-content {
    /* padding: 0; */
    /* margin: 0; */
  }
}
</style>
