<template>
    <div ref="reactRoot"></div>
  </template>
  
  <script>
  import React from 'react'
  import { createRoot } from 'react-dom/client'
  import ReactDOM from 'react-dom'
  
  export default {
    props: {
      reactComponent: {
        type: Object,
        required: true
      },
      props: Object
    },
    mounted() {
      this.renderReactComponent();
    },
    beforeDestroy() {
      ReactDOM.unmountComponentAtNode(this.$refs.reactRoot);
    },
    methods: {
      renderReactComponent() {
        createRoot(
          React.createElement(this.reactComponent, this.props),
          this.$refs.reactRoot
        );
      }
    },
    watch: {
      props: {
        deep: true,
        handler() {
          this.renderReactComponent();
        }
      }
    }
  };
  </script>
  