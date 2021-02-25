<template>
  <div class="sidebar-container">
    <el-menu
      default-active="0"
      class="sidebar-menu"
      :collapse="isCollapsed"
      :collapse-transition="true"
      :router="true"
    >
      <span
        v-if="!isCollapsed"
        @click="followLink('/dashboard')"
        class="navbar-logo"
      >
        <div class="horizontal-centered">
          <img
            src="../../assets/img/logo.png"
            alt="Viteapp"
          />
        </div>
      </span>
      <span
        v-if="isCollapsed"
        @click="followLink('/dashboard')"
        class="navbar-logo horizontal-centered"
      >
        <router-link to="/dashboard" class="horizontal-centered">
          <img
            height="40"
            src="../../assets/img/logo.png"
            alt="Viteapp Icon"
          />
        </router-link>
      </span>
      <el-menu-item
        class=""
        v-for="(link, linkIndex) in links"
        :key="linkIndex"
        :index="currentUrl"
        :class="['sidebar-link', { 'is-active': checkActivePath(link) }]"
        @click="followLink(link.targetPage)"
      >
        <i class="spaced" :class="link.icon"></i>
        <span slot="title">{{ link.displayName }}</span>
      </el-menu-item>
    </el-menu>
    <div class="sidebar-toggle" @click="toggleSideBar()" :class="{}">
      <i v-if="!isCollapsed" class="arrow fal fa-angle-left"></i>
      <i v-if="isCollapsed" class="arrow fal fa-angle-right"></i>
    </div>
    <div class="sidebar-hamburger" @click="mobileSidebarToggle">
      <i class="fal fa-bars"></i>
    </div>
  </div>
</template>

<script>
import { EventService } from "../../main";

export default {
  name: "sidebar",
  props: ["selectedLink"],
  data: function() {
    return {
      isClicked: true,
      intViewportWidth: window.innerWidth,
      isCollapsed: false,
      links: [
        {
          name: "Dashboard",
          displayName: "Dashboard",
          targetPage: "/dashboard",
          icon: "fal fa-th-large",
        },
      ],
      filteredLinks: [],
      userRole: null,
      currentUrl: "/dashboard",
    };
  },
  computed: {
    isTablet() {
      return this.intViewportWidth <= 1200;
    },
  },
  mounted() {
    this.handleWidthSize();
  },
  created() {
    if (window.innerWidth < 1600) this.isCollapsed = true;
    this.checkRoute();
  },
  watch: {
    $route: "checkRoute",
  },
  methods: {
    mobileSidebarToggle() {
      var menu = document.getElementsByClassName("sidebar-menu");
      var menuAll = document.getElementsByClassName("sidebar-menu");
      if (this.isClicked) {
        menu[0].style.display = "block";
        this.isClicked = false;
      } else {
        menu[0].style.display = "none";
        this.isClicked = true;
      }
    },
    checkRoute() {
      this.currentUrl = this.$route.path;
    },
    checkActivePath(link) {
      if (this.currentUrl == link.targetPage) {
        return true;
      } else {
        return false;
      }
    },
    handleWidthSize() {
      window.addEventListener("resize", () => {
        this.intViewportWidth = window.innerWidth;
        if (
          this.isTablet ||
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          )
        ) {
          this.isCollapsed = true;
        } else {
          this.isCollapsed = false;
        }
      });
    },
    toggleSideBar() {
      this.isCollapsed = !this.isCollapsed;
      EventService.$emit("sidebarChange");
    },
    followLink(targetPage) {
      this.$router.push(targetPage);
    },
    
  },
};
</script>

<style scoped>
.el-popover {
  height: 300px;
  max-height: 300px;
}
.wrapper {
  position: relative;
  /* --navbar-width: 260px; */
}
.arrow {
  color: #f4f3ef;
}

.spaced {
  margin-right: 20px;
}

.sidebar-container {
  position: relative;
  transition: 0.2s linear;
}

.sidebar-toggle {
  display: flex;
  position: absolute;
  right: -70px;
  justify-content: center;
  align-items: center;
  color: white;
  background: #65615b;
  height: 38px;
  width: 38px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 30px;
  top: 17px;
  z-index: 2001;
}

.sidebar-menu {
  position: relative;
  height: 100%;
  background: #212120;
  max-width: var(--sidebar-width);
  box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.2);
  color: #ffffff;
  display: flex;
  flex-direction: column;
  z-index: 2001;
}

.sidebar-links {
  overflow-x: hidden;
  margin-top: 10px;
}

.sidebar-link i {
  font-size: 20px;
  padding-left: 10px;
  padding-right: 10px;
  color: #ffffff90;
}
.el-menu-item {
  font-size: 14px;
  text-transform: uppercase;
  color: #ffffff80;
}

.el-menu-item > span,
i {
}

.el-menu-item.is-active:after {
  position: absolute;
  content: "";
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 15px 17px 15px 0px;
  border-color: transparent #f4f3ef transparent transparent;
  right: -1.5px;
  top: 13px;
  z-index: 999;
}

.el-menu-item.is-active > * {
  color: var(--opiniionblue);
  opacity: 1;
}
.el-menu-item.is-active:hover > * {
  color: var(--opiniionblue);
}

.el-menu-item:focus,
.el-menu-item:active {
  background: rgba(0, 0, 0, 0) !important;
}
.el-menu-item {
  -webkit-transition: 0.2s ease;
  transition: 0.2s ease;
  -o-transition: 0.2s ease;
  -moz-transition: 0.2s ease;
  color: #ffffff80;
}

.el-menu-item:hover {
  background: rgba(180, 180, 180, 0);
  color: white !important;
}
.el-menu-item {
}
.el-menu-item:hover i {
  color: #ffffff;
}
.el-menu-item > i {
  -webkit-transition: 0.2s ease;
  transition: 0.2s ease;
  -o-transition: 0.2s ease;
  -moz-transition: 0.2s ease;
}

.navbar-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: calc(100%-20px);
  border-bottom: 1px solid #9a9a9a;
  margin: 10px;
  margin-bottom: 30px;
  height: 65px;
}

.navbar-logo img {
  animation: fadeIn 0.35s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  width: 35%;
  margin: 0 auto 0 auto;
  padding-bottom: 10px;
}

.moved-left {
  left: 75px;
}

.sidebar-link i {
  width: 5px;
  text-align: center;
}

.sidebar-link span {
  margin-left: 10px;
}

.sidebar-link {
  position: relative;
}
.sidebar-link.active-sidebar {
  color: #4fcbc5;
}
.sidebar-link.active-sidebar::after {
  content: "";
  position: absolute;
  height: 0px;
  width: 0px;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-right: 15px solid #f4f3ef;
  right: -3px;
  top: 15px;
}

.sidebar-hamburger {
  display: none;
  position: absolute;
  right: -65px;
  top: 18px;
  z-index: 2001;
  width: 35px;
  height: 35px;
  display: none;
  color: #65615b;
  font-size: 35px;
}
.sidebar-hamburger i {
  color: #65615b;
}

@media (max-width: 1200px) {
  .sidebar-hamburger {
    display: block;
  }

  .sidebar-toggle {
    display: none;
    /* z-index: 99999; */
  }
  .sidebar-menu {
    display: none;
  }
}

</style>
