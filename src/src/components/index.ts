import Vue from 'vue';

const components = {
  
}

for (const key in components) {
  if (components.hasOwnProperty(key)) {
    Vue.component(key, components[key]);
  }
}