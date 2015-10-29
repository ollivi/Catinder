document.title = "Tinder wac";
$('head').append('<meta name="viewport" content="width=device-width, initial-scale=1.0"/>');
$('head').append('<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">');


Template.layout.onRendered(function(){
  $(".button-collapse").sideNav();
});

Template.home.onCreated(function() {
  this.autorun(() => {
    this.subscribe('wac');
  });
});

Template.favoris.onCreated(function() {
  this.autorun(() => {
    this.subscribe('favoris');
  });
});


Template.layout.helpers({
  canShow() {
    return !!Meteor.user();
  }
});


Template.home.helpers({
  wac() {
    wac = Wacs.find({
      'likedBy.id': {
        $ne: Meteor.user()._id
      }
    });
    return wac.fetch()[0];
  }
});


Template.home.events({
  "click #like": function(event, template) {
    let name = $('#name').html();
    Meteor.call("addLike", name, true, function(error, result) {
      if (error) {
        console.log("error", error);
      }
      if (result) {
        console.log(result);
      }
    });
  },
  "click #pas_like": function(event, template) {
    let name = $('#name').html();
    Meteor.call("addLike", name, false, function(error, result) {
      if (error) {
        console.log("error", error);
      }
      if (result) {
        console.log(result);
      }
    });
  }
});



Template.favoris.helpers({
  wacs() {
      return Wacs.find({
        'likedBy.id': Meteor.user()._id
      });
    },
    like() {
      for (let data of this.likedBy) {
        if (data.id === Meteor.user()._id) {
          return data.liked ? "thumb_up" : "thumb_down";
        }
      }
    }
});
