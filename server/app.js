Meteor.publish('wac', function() {
  return Wacs.find({
    'likedBy.id': {
      $ne: this.userId
    }
  });
});

Meteor.publish('favoris', function() {
  return Wacs.find({
    'likedBy.id': this.userId
  });
});


Meteor.methods({
  addLike(name, liked) {
    Wacs.update({
      name: name
    }, {
      $push: {
        likedBy: {
          id: this.userId,
          liked: liked
        }
      }
    });
  }
});
