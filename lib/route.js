FlowRouter.route('/', {
  action() {
    BlazeLayout.render("layout", {
      content: "home"
    });
  }
});

FlowRouter.route('/favoris', {
  action() {
    BlazeLayout.render("layout", {
      content: "favoris"
    });
  }
});
