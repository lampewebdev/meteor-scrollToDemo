Something = new Mongo.Collection("something");

if (Meteor.isClient) {

  Meteor.startup(function () {
    if(Something.find({}).count() === 0){
      for (var i = 0; i > 9; i++) {
        Something.insert({"someText": "Edit me " + i});
      }
    }
  });

  Template.somethings.somethings = function(){
    return Something.find({}).fetch();
  };

  Session.setDefault("somethingEditable", false);
  Template.something.editable = function (){
    return Session.get("somethingEditable");
  };

  Template.something.events({
    "click p": function(e,t){
      blup = $(t.firstNode.parentElement).find("p");
      window.scrollTo( 0, $(blup[blup.length-1]).offset().top );
      Session.set("somethingEditable", true);
    }
  });
}

if (Meteor.isServer) {

}
