import Root from "./components";

const myFirstTheme = {
  name: "my-first-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {
      isUrlVisible: false,

    }
  },
  actions: {
    theme: {
      toggleUrl: ({ state }) => {
        console.log("here");
        state.theme.isUrlVisible = !state.theme.isUrlVisible
      },
    }
  }
};


export default myFirstTheme;