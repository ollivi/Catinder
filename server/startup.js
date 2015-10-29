Meteor.startup(function() {
  if (Wacs.find().count() === 0) {
    let sampleWacs = [{
      name: 'Sami Agoudan',
      url: 'https://cdn.local.epitech.eu/userprofil/profilview/agouda_s.jpg',
      likedBy: []
    }, {
      name: 'Hugo Arru',
      url: 'https://cdn.local.epitech.eu/userprofil/profilview/arru_h.jpg',
      likedBy: []
    }, {
      name: 'Louis Cilpa',
      url: 'https://cdn.local.epitech.eu/userprofil/profilview/cilpa_l.jpg',
      likedBy: []
    }, {
      name: 'Thibault Colette',
      url: 'https://cdn.local.epitech.eu/userprofil/profilview/colett_t.jpg',
      likedBy: []
    }, {
      name: 'Etienne Daviot',
      url: 'https://cdn.local.epitech.eu/userprofil/profilview/daviot_e.jpg',
      likedBy: []
    }, {
      name: 'Louis Dezeeuw',
      url: 'https://cdn.local.epitech.eu/userprofil/profilview/dezeeu_l.jpg',
      likedBy: []
    }, {
      name: 'Swan Eouzan',
      url: 'https://cdn.local.epitech.eu/userprofil/profilview/eouzan_s.jpg',
      likedBy: []
    }, {
      name: 'Alexandre Frih',
      url: 'https://cdn.local.epitech.eu/userprofil/profilview/frih_a.jpg',
      likedBy: []
    }, {
      name: 'Coralyse haar',
      url: 'https://cdn.local.epitech.eu/userprofil/profilview/haar_c.jpg',
      likedBy: []
    }, {
      name: 'Leo herisson',
      url: 'https://cdn.local.epitech.eu/userprofil/profilview/heriss_l.jpg',
      likedBy: []
    }, {
      name: 'greogry Hoarau',
      url: 'https://cdn.local.epitech.eu/userprofil/profilview/hoarau_i.jpg',
      likedBy: []
    }, {
      name: 'Yohan Jaffres',
      url: 'https://cdn.local.epitech.eu/userprofil/profilview/jaffre_y.jpg',
      likedBy: []
    }, {
      name: 'Chirme',
      url: 'https://cdn.local.epitech.eu/userprofil/profilview/jain_j.jpg',
      likedBy: []
    }, {
      name: 'Vincent Joly',
      url: 'https://cdn.local.epitech.eu/userprofil/profilview/joly_v.jpg',
      likedBy: []
    }, {
      name: 'Manorie',
      url: 'https://cdn.local.epitech.eu/userprofil/profilview/kam-oo_m.jpg',
      likedBy: []
    }, {
      name: 'Guillaume Lambert',
      url: 'https://cdn.local.epitech.eu/userprofil/profilview/lamber_n.jpg',
      likedBy: []
    }, {
      name: 'Nicolas Leroux',
      url: 'https://cdn.local.epitech.eu/userprofil/profilview/leroux_n.jpg',
      likedBy: []
    }, {
      name: 'Michael Meunier',
      url: 'https://cdn.local.epitech.eu/userprofil/profilview/meunie_m.jpg',
      likedBy: []
    }, {
      name: 'Françis Munabeno',
      url: 'https://cdn.local.epitech.eu/userprofil/profilview/munabe_f.jpg',
      likedBy: []
    }, {
      name: 'Jordan-alexis Olliver',
      url: 'https://cdn.local.epitech.eu/userprofil/profilview/ollivi_b.jpg',
      likedBy: []
    }, {
      name: 'Michael Pathe',
      url: 'https://cdn.local.epitech.eu/userprofil/profilview/pathe_m.jpg',
      likedBy: []
    }, {
      name: 'Benjamin Poirier',
      url: 'https://cdn.local.epitech.eu/userprofil/profilview/poirie_b.jpg',
      likedBy: []
    }, {
      name: 'Cedric Raison',
      url: 'https://cdn.local.epitech.eu/userprofil/profilview/raison_c.jpg',
      likedBy: []
    }, {
      name: 'Thomas Rocha',
      url: 'https://cdn.local.epitech.eu/userprofil/profilview/rocha_t.jpg',
      likedBy: []
    }, {
      name: 'Michael Sandoz',
      url: 'https://cdn.local.epitech.eu/userprofil/profilview/sandoz_m.jpg',
      likedBy: []
    }, {
      name: 'Paul',
      url: 'https://cdn.local.epitech.eu/userprofil/profilview/silavo_p.jpg',
      likedBy: []
    }, {
      name: 'Boris Stanic',
      url: 'https://cdn.local.epitech.eu/userprofil/profilview/stanic_b.jpg',
      likedBy: []
    }, {
      name: 'Marc',
      url: 'https://cdn.local.epitech.eu/userprofil/profilview/wipula_m.jpg',
      likedBy: []
    }, {
      name: 'Mehdi Zenati',
      url: 'https://cdn.local.epitech.eu/userprofil/profilview/zenati_m.jpg',
      likedBy: []
    }];

    for (let user of sampleWacs) {
      Wacs.insert(user);
      console.log('insert: ' + user.name);
    }

    // loop over each sample poll and insert into database
    // _.each(samplePolls, function(poll) {
    //   Polls.insert(poll);
    // });

  }

});
