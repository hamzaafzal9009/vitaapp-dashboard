import {shallowMount} from "@vue.test-utils";
import Login from '@/components/Login.vue';
import Dashboard from '@/components/Dashboard.vue';
import Automations from '@/components/Automations.vue';
import ParsingRules from '@/components/ParsingRules.vue';
import ParsingList from '@/components/ParsingList.vue';
import LocationList from '@/components/LocationList.vue';
import AddLocation from '@/components/AddLocation.vue';

// Testing modals or other pages with props values.

function mountWithProps(Component, propsData) {
  const Constructor = Vue.extend(Component);
  const vm = new Constructor({
    propsData
  }).$mount();
  return vm.$el
}

// Login Page

describe("Login.vue", () => {
  it("gets cookie if it exists", () => {
    const login = "test@opiniion.com";
    const wrapper = shallowMount(Login, {
      //Test cookie
    });
    expect(wrapper.cookie()).toMatch(login)
  })
})

// Dashboard

// Dashboard Components

// Automations

// Parsing Rules

// Parsing List

// Location List

// Add Location