import  { Utilisateur }  from '../imports/api/Utilisateur.js';


if(Meteor.is_server) {

    Utilisateur.allow({
        insert: function (userId, doc) {
            //Normally I would check if (this.userId) to see if the method is called by logged in user or guest
            //you can also add some checks here like user role based check etc.,
            return true;
            }

    });

}
