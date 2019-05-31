//const slider = require('./common/slider');
//const $ = require('jquery'); // если будет нужен

//slider(); // инициализируем слайдер

console.log("hello, world");

//preloader
$(window).on('load', function() {
  $('#preloader-logo').delay(1000).fadeOut();
  $('#preloader').delay(1000).fadeOut('slow'); 
  $('body').delay(1000).css({'overflow':'visible'});
});

//animated
$(document).ready(function() {
  $('.title').addClass('animated fadeInDown'); 
  $('.subtitle').addClass('animated fadeInDown'); 
  $('.btn').addClass('animated fadeInDown'); 
})


//owl 
 $(function() {
  $(".owl-carousel").owlCarousel({
    loop:true,
    items:2,
    margin:40,
    autoplay:true, 
    smartSpeed:2000,
    autoplayTimeout:4000,
    scrollPerPage : false,
    dots:true,
    responsive: {
      0: {
      items: 1
      },
      768: {
      items: 2
      }
      },
  });
 });


 //form

var ajaxForm = function (form) {
  var url = form.attr('action'),
      data = form.serialize();
  return $.ajax({
      type: 'POST',
      url: url,
      data: data,
      dataType: 'JSON'
  });
}   
var submitForm = function (e) {
e.preventDefault();
var form = $(e.target);
var request = ajaxForm(form);
request.done(function(msg) {
var popup = msg.status ? '#success' : '#error';
$status = $(popup)

// $.fancybox.open( 
//   $status
// , {
//     type: 'inline',
//     maxWidth: 250,
//     fitToView: false,
//     padding: 0,
//     afterClose() {
//       form.trigger('reset');
//     }
//   });

  $.fancybox.open($status, {
    type: 'inline',
    maxWidth: 250,
    fitToView: false,
    padding: 0,
    afterClose: function afterClose() {
      form.trigger('reset');
    }
  });
});

// request.fail(function(jqXHR, textStatus) {
//   $.fancybox.open( 
//     $('#error').html("На сервере произошла ошибка: " + textStatus)
//   , {
//       type: 'inline',
//       maxWidth: 250,
//       fitToView: false,
//       padding: 0,
//       afterClose() {
//         form.trigger('reset');
//       }
//     });
// });
request.fail(function (jqXHR, textStatus) {
  $.fancybox.open($('#error').html("На сервере произошла ошибка: " + textStatus), {
    type: 'inline',
    maxWidth: 250,
    fitToView: false,
    padding: 0,
    afterClose: function afterClose() {
      form.trigger('reset');
    }
  });
});
}

$('#form__elem').on('submit', submitForm)


//Hamburger menu
var hamburger = (function() {

  var button = document.querySelector('#hamburger__menu-link');
  var menu = document.querySelector('#dark-menu');
  var body = document.querySelector('body');
  var itemsList = document.getElementById("nav__list_hamburger").children;
  itemsList = Array.prototype.slice.call(itemsList);

  var _toggleMenu = function(e) {
      button.classList.toggle('is-active');
      menu.classList.toggle('is-active');
      body.classList.toggle('locked');
  };

  var closeMenu = function closeMenu() {
      button.classList.remove('is-active');
      menu.classList.remove('is-active');
      body.classList.remove('locked');
  };

  var addListeners = function() {
      button.addEventListener('click', _toggleMenu);

      for(i=0 ; i<itemsList.length ; i++){
              itemsList[i].addEventListener('click',closeMenu);
          }
  };

  document.addEventListener('keydown', function(e) {
      if (e.keyCode == 27) closeMenu();
  });

  return {
      init: addListeners
  };
})({
  button: '#hamburger__menu-link',
  menu: '#dark-menu'
});

hamburger.init();

 //fancybox with gallery

 $(".open_fancybox").click(function() {

  $.fancybox.open([{
      href: 'assets/images/block17/5.jpg',
      title: '"Block 17 North" on River Street north of Dundas'
    },
    {
      href: 'assets/images/block17/1.jpg',
      title: 'Designed by Wallman Architects'
    },
    {
      href: 'assets/images/block17/2.jpg',
      title: 'The 11-storey building is now topped out at a height of 42.6 metres'
    },
    {
      href: 'assets/images/block17/3.jpg',
      title: 'The main building envelope is in the form of pre-finished aluminum panels in four different tones'
    },
    {
      href: 'assets/images/block17/4.jpg',
      title: 'The brick panels surround punched windows with clear glazing and dark aluminum mullions.'
    },
    {
      href: 'assets/images/block17/6.jpeg',
      title: 'Recent start of cladding installation is hinting at the building\'s final look'
    },
    {
      href: 'assets/images/block17/7.jpg',
      title: '158 replacement rental units'
    }
  ], 
  {
    nextEffect: 'none',
    prevEffect: 'none',
    padding: 0,
    helpers: {
      title: {
        type: 'over'
      },
      thumbs: {
        width: 75,
        height: 50,
        source: function(item) {
          return item.href.replace('_b.jpg', '_s.jpg');
        }
      }
    }
  });

  return false;
});

$(".open_fancybox1").click(function() {

  $.fancybox.open([{
      href: 'assets/images/mun/1.jpg',
      title: 'Memorial University st. John\'s Newfoundland'
    },
    {
      href: 'assets/images/mun/2.jpg',
      title: 'Strucrural steel and glass installation. 2018-present'
    },
    {
      href: 'assets/images/mun/3.jpg',
      title: 'Partnership with BullsEye construction.'
    },
    {
      href: 'assets/images/mun/4.jpg',
      title: 'Memorial University st. John\'s Newfoundland'
    },
    {
      href: 'assets/images/mun/5.jpg',
      title: 'Memorial University st. John\'s Newfoundland'
    }
  ], 
  {
    nextEffect: 'none',
    prevEffect: 'none',
    padding: 0,
    helpers: {
      title: {
        type: 'over'
      },
      thumbs: {
        width: 75,
        height: 50,
        source: function(item) {
          return item.href.replace('_b.jpg', '_s.jpg');
        }
      }
    }
  });

  return false;
});

$(".open_fancybox2").click(function() {

  $.fancybox.open([{
      href: 'assets/images/1yonge/1.png',
      title: 'The Prestige at Pinnacle Condos, 1 Yonge St'
    },
    {
      href: 'assets/images/1yonge/2.png',
      title: 'This condo has 3885 condo units and can be found at 1 Yonge Street'
    }
  ], 
  {
    nextEffect: 'none',
    prevEffect: 'none',
    padding: 0,
    helpers: {
      title: {
        type: 'over'
      },
      thumbs: {
        width: 75,
        height: 50,
        source: function(item) {
          return item.href.replace('_b.jpg', '_s.jpg');
        }
      }
    }
  });

  return false;
});

$(".open_fancybox3").click(function() {

  $.fancybox.open([{
      href: 'assets/images/econdos/1.png',
      title: 'E Condos'
    },
    {
      href: 'assets/images/econdos/2.jpg',
      title: 'You will find E Condos near the intersection of Eglinton Ave East & Holly St East Side in Toronto\'s Midtown | Central neighbourhood.'
    }
  ], 
  {
    nextEffect: 'none',
    prevEffect: 'none',
    padding: 0,
    helpers: {
      title: {
        type: 'over'
      },
      thumbs: {
        width: 75,
        height: 50,
        source: function(item) {
          return item.href.replace('_b.jpg', '_s.jpg');
        }
      }
    }
  });

  return false;
});

$(".open_fancybox4").click(function() {

  $.fancybox.open([{
      href: 'assets/images/kip/1.png',
      title: 'The Kip District'
    }
  ], 
  {
    nextEffect: 'none',
    prevEffect: 'none',
    padding: 0,
    helpers: {
      title: {
        type: 'over'
      },
      thumbs: {
        width: 75,
        height: 50,
        source: function(item) {
          return item.href.replace('_b.jpg', '_s.jpg');
        }
      }
    }
  });

  return false;
});

$(".open_fancybox5").click(function() {

  $.fancybox.open([{
      href: 'assets/images/alter/1.png',
      title: 'Alter'
    },
    {
      href: 'assets/images/alter/2.png',
      title: 'Found in Toronto\'s Downtown area and built in 2018'
    },
    {
      href: 'assets/images/alter/3.jpg',
      title: 'Alter is a high-rise condo located in the Church St. Corridor neighbourhood. Spread out over 33 stories'
    },
    {
      href: 'assets/images/alter/4.png',
      title: 'This condo has 335 condo units and can be found at 89 McGill St.'
    }
  ], 
  {
    nextEffect: 'none',
    prevEffect: 'none',
    padding: 0,
    helpers: {
      title: {
        type: 'over'
      },
      thumbs: {
        width: 75,
        height: 50,
        source: function(item) {
          return item.href.replace('_b.jpg', '_s.jpg');
        }
      }
    }
  });

  return false;
});

$(".open_fancybox6").click(function() {

  $.fancybox.open([{
      href: 'assets/images/88scott/1.png',
      title: '88 Scott'
    },
    {
      href: 'assets/images/88scott/2.png',
      title: 'Located in the heart of the Financial District at Scott and Wellington, 88 Scott captures the very essence of downtown Toronto living and polishes it to new brilliance.'
    }
  ], 
  {
    nextEffect: 'none',
    prevEffect: 'none',
    padding: 0,
    helpers: {
      title: {
        type: 'over'
      },
      thumbs: {
        width: 75,
        height: 50,
        source: function(item) {
          return item.href.replace('_b.jpg', '_s.jpg');
        }
      }
    }
  });

  return false;
});

$(".open_fancybox7").click(function() {

  $.fancybox.open([{
      href: 'assets/images/10york/1.png',
      title: 'Ten York'
    },
    {
      href: 'assets/images/10york/2.jpg',
      title: 'Located in The Waterfront neighbourhood, this Toronto condo is expected to be completed in 2019'
    },
    {
      href: 'assets/images/10york/3.png',
      title: 'This condo can be found at 120 Harbour Street & 10 York Street and has 725 condo units.'
    }
  ], 
  {
    nextEffect: 'none',
    prevEffect: 'none',
    padding: 0,
    helpers: {
      title: {
        type: 'over'
      },
      thumbs: {
        width: 75,
        height: 50,
        source: function(item) {
          return item.href.replace('_b.jpg', '_s.jpg');
        }
      }
    }
  });

  return false;
});

$(".open_fancybox8").click(function() {

  $.fancybox.open([{
      href: 'assets/images/signature/1.jpg',
      title: 'Signature JK 2016'
    },
    {
      href: 'assets/images/signature/2.jpg',
      title: 'Signature JK 2016'
    },
    {
      href: 'assets/images/signature/3.jpg',
      title: 'Signature JK 2016'
    }
  ], 
  {
    nextEffect: 'none',
    prevEffect: 'none',
    padding: 0,
    helpers: {
      title: {
        type: 'over'
      },
      thumbs: {
        width: 75,
        height: 50,
        source: function(item) {
          return item.href.replace('_b.jpg', '_s.jpg');
        }
      }
    }
  });

  return false;
});

$(".open_fancybox9").click(function() {

  $.fancybox.open([{
      href: 'assets/images/madison/1.png',
      title: 'The Madison at Yonge and Eglinton'
    },
    {
      href: 'assets/images/madison/2.png',
      title: 'The Madison brings a new dimension to midtown with a striking design.'
    },
    {
      href: 'assets/images/madison/3.png',
      title: 'This high-rise condo sits near Eglinton Ave East & Dunfield Ave, in Midtown | Central\'s Mount Pleasant West neighbourhood.'
    },
    {
      href: 'assets/images/madison/4.png',
      title: 'Located at 89 Dunfield Ave & 98 Lillian St this condo has suites ranging from 395 to 1214 sqft.'
    },
    {
      href: 'assets/images/madison/5.png',
      title: 'There are 646 units at The Madison at Yonge and Eglinton, with a variety of exposures and layouts over 33 levels.'
    },
    {
      href: 'assets/images/madison/6.png',
      title: 'Elegant suites and inspired amenities.'
    }
  ], 
  {
    nextEffect: 'none',
    prevEffect: 'none',
    padding: 0,
    helpers: {
      title: {
        type: 'over'
      },
      thumbs: {
        width: 75,
        height: 50,
        source: function(item) {
          return item.href.replace('_b.jpg', '_s.jpg');
        }
      }
    }
  });

  return false;
});

$(".open_fancybox10").click(function() {

  $.fancybox.open([{
      href: 'assets/images/flaire/1.png',
      title: 'Flaire Condos'
    },
    {
      href: 'assets/images/flaire/2.png',
      title: 'You will find Flaire Condos near the intersection of Leslie in North York\'s Toronto area.'
    },
    {
      href: 'assets/images/flaire/3.png',
      title: 'Flaire Condos is an 11 storey condo, located at 99 The Donway W. With suites ranging in size from 452 to 1464 sqft, this condo has 285 units.'
    },
    {
      href: 'assets/images/flaire/4.png',
      title: 'Located in the Banbury | Don Mills neighbourhood.'
    },
    {
      href: 'assets/images/flaire/5.png',
      title: 'Completed in 2017'
    },
    {
      href: 'assets/images/flaire/6.png',
      title: 'Flaire Condos.'
    }
  ], 
  {
    nextEffect: 'none',
    prevEffect: 'none',
    padding: 0,
    helpers: {
      title: {
        type: 'over'
      },
      thumbs: {
        width: 75,
        height: 50,
        source: function(item) {
          return item.href.replace('_b.jpg', '_s.jpg');
        }
      }
    }
  });

  return false;
});

$(".open_fancybox11").click(function() {

  $.fancybox.open([{
      href: 'assets/images/essential/1.png',
      title: 'Essential'
    },
    {
      href: 'assets/images/essential/2.png',
      title: 'The Essential is set in Berczy Village, a delightful established neighbourhood of Single Family homes also built by Emery. '
    }
  ], 
  {
    nextEffect: 'none',
    prevEffect: 'none',
    padding: 0,
    helpers: {
      title: {
        type: 'over'
      },
      thumbs: {
        width: 75,
        height: 50,
        source: function(item) {
          return item.href.replace('_b.jpg', '_s.jpg');
        }
      }
    }
  });

  return false;
});

$(".open_fancybox12").click(function() {

  $.fancybox.open([{
      href: 'assets/images/onepark/1.png',
      title: 'One Park Tower'
    },
    {
      href: 'assets/images/onepark/2.png',
      title: 'Located in City Centre neighbourhood, this Mississauga condo was completed in 2008'
    },
    {
      href: 'assets/images/onepark/3.png',
      title: 'Spread out over 37 floors, One Park Tower has suites ranging in size from 557 to 1500 square feet, with many different layouts and exposures.'
    }
  ], 
  {
    nextEffect: 'none',
    prevEffect: 'none',
    padding: 0,
    helpers: {
      title: {
        type: 'over'
      },
      thumbs: {
        width: 75,
        height: 50,
        source: function(item) {
          return item.href.replace('_b.jpg', '_s.jpg');
        }
      }
    }
  });

  return false;
});

$(".open_fancybox13").click(function() {

  $.fancybox.open([{
      href: 'assets/images/harbour/1.png',
      title: 'Harbour Plaza Residences'
    },
    {
      href: 'assets/images/harbour/2.png',
      title: 'Located in The Waterfront neighbourhood, these dual towers are expected to be completed in 2017'
    },
    {
      href: 'assets/images/harbour/3.png',
      title: 'You will find Harbour Plaza Residences near the intersection of Queens Quay West & York St West Side in Toronto\'s Downtown neighbourhood.'
    },
    {
      href: 'assets/images/harbour/4.png',
      title: 'Spread out over 62 and 66 stories, suites at Harbour Plaza Residences range in size from 373 to 1121 sqft.'
    },
    {
      href: 'assets/images/harbour/5.jpg',
      title: 'This condo has 1305 condo units and can be found at 90 Harbour Street & 1 York Street.'
    },
    {
      href: 'assets/images/harbour/6.jpg',
      title: 'Harbour Plaza Residences'
    }
  ], 
  {
    nextEffect: 'none',
    prevEffect: 'none',
    padding: 0,
    helpers: {
      title: {
        type: 'over'
      },
      thumbs: {
        width: 75,
        height: 50,
        source: function(item) {
          return item.href.replace('_b.jpg', '_s.jpg');
        }
      }
    }
  });

  return false;
});

$(".open_fancybox14").click(function() {

  $.fancybox.open([{
      href: 'assets/images/isabella/1.jpg',
      title: '66 Isabella'
    },
    {
      href: 'assets/images/isabella/2.jpg',
      title: 'A luxurious new 23 storey rental residence, set in the heart of vibrant Church-Wellesley Village.'
    },
    {
      href: 'assets/images/isabella/3.jpg',
      title: '66 Isabella is home to design-forward suites with premium quality finishings and stunning city views.'
    },
    {
      href: 'assets/images/isabella/4.jpeg',
      title: 'The development was completed in 2016.'
    },
    {
      href: 'assets/images/isabella/5.jpg',
      title: '66 Isabella has a total of 211 units. Sizes start at 607 square feet.'
    }
  ], 
  {
    nextEffect: 'none',
    prevEffect: 'none',
    padding: 0,
    helpers: {
      title: {
        type: 'over'
      },
      thumbs: {
        width: 75,
        height: 50,
        source: function(item) {
          return item.href.replace('_b.jpg', '_s.jpg');
        }
      }
    }
  });

  return false;
});

$(".open_fancybox15").click(function() {

  $.fancybox.open([{
      href: 'assets/images/indx/1.png',
      title: 'INDX'
    },
    {
      href: 'assets/images/indx/2.png',
      title: 'You will find INDX near the intersection of Richmond St West & Bay St West in Toronto\'s Downtown area.'
    }
  ], 
  {
    nextEffect: 'none',
    prevEffect: 'none',
    padding: 0,
    helpers: {
      title: {
        type: 'over'
      },
      thumbs: {
        width: 75,
        height: 50,
        source: function(item) {
          return item.href.replace('_b.jpg', '_s.jpg');
        }
      }
    }
  });

  return false;
});

$(".open_fancybox16").click(function() {

  $.fancybox.open([{
      href: 'assets/images/hazeltron/1.png',
      title: '36 Hazelton'
    },
    {
      href: 'assets/images/hazeltron/2.png',
      title: 'Each unique in its own right.'
    }
  ], 
  {
    nextEffect: 'none',
    prevEffect: 'none',
    padding: 0,
    helpers: {
      title: {
        type: 'over'
      },
      thumbs: {
        width: 75,
        height: 50,
        source: function(item) {
          return item.href.replace('_b.jpg', '_s.jpg');
        }
      }
    }
  });

  return false;
});

$(".open_fancybox17").click(function() {

  $.fancybox.open([{
      href: 'assets/images/argento/1.png',
      title: 'Argento'
    },
    {
      href: 'assets/images/argento/2.png',
      title: 'This condo can be found at 18 Graydon Hall Dr and has 275 condo units.'
    }
  ], 
  {
    nextEffect: 'none',
    prevEffect: 'none',
    padding: 0,
    helpers: {
      title: {
        type: 'over'
      },
      thumbs: {
        width: 75,
        height: 50,
        source: function(item) {
          return item.href.replace('_b.jpg', '_s.jpg');
        }
      }
    }
  });

  return false;
});

$(".open_fancybox18").click(function() {

  $.fancybox.open([{
      href: 'assets/images/pears/1.png',
      title: 'Pears on the Avenue'
    },
    {
      href: 'assets/images/pears/2.png',
      title: 'Found in Toronto\'s Downtown area and built in 2015'
    },
    {
      href: 'assets/images/pears/3.png',
      title: 'Spread out over 20 stories, suites at Pears on the Avenue range in size from 486 to 3500 sqft.'
    },
    {
      href: 'assets/images/pears/4.png',
      title: 'This condo has 175 condo units and can be found at 127-135 Avenue Rd & 170 Avenue Road.'
    }
  ], 
  {
    nextEffect: 'none',
    prevEffect: 'none',
    padding: 0,
    helpers: {
      title: {
        type: 'over'
      },
      thumbs: {
        width: 75,
        height: 50,
        source: function(item) {
          return item.href.replace('_b.jpg', '_s.jpg');
        }
      }
    }
  });

  return false;
});

$(".open_fancybox19").click(function() {

  $.fancybox.open([{
      href: 'assets/images/twooldmill/1.png',
      title: 'Two Old Mill'
    },
    {
      href: 'assets/images/twooldmill/2.png',
      title: 'The second phase in Tridel’s new West End development, Two Old Mill is located at the corner of Bloor Street West and Old Mill Drive. '
    },
    {
      href: 'assets/images/twooldmill/3.png',
      title: 'With the same bold, almost white exterior of precast cement, sandstone, and black granite accents as the first phase, One Old Mill, these are high-end Toronto condos nestled nicely in the High Park-Swansea neighbourhood.'
    },
    {
      href: 'assets/images/twooldmill/4.png',
      title: 'Standing just ten-storeys, Two Old Mill offers 215 West End condos for sale and for rent, ranging in size and layout from one-bedroom apartments to two-bedrooms plus den.'
    },
    {
      href: 'assets/images/twooldmill/5.png',
      title: ' And just outside, residents will discover Bloor Street West with easy access to the TTC at Jane Station.'
    },
    {
      href: 'assets/images/twooldmill/6.png',
      title: 'One great thing about a multi-tower residence is that there is double the number of suite choices. '
    },
    {
      href: 'assets/images/twooldmill/7.png',
      title: 'Two Old Mill'
    },
    {
      href: 'assets/images/twooldmill/8.png',
      title: 'Two Old Mill'
    },
    {
      href: 'assets/images/twooldmill/9.png',
      title: 'Two Old Mill'
    },
    {
      href: 'assets/images/twooldmill/10.png',
      title: 'Two Old Mill'
    }
  ], 
  {
    nextEffect: 'none',
    prevEffect: 'none',
    padding: 0,
    helpers: {
      title: {
        type: 'over'
      },
      thumbs: {
        width: 75,
        height: 50,
        source: function(item) {
          return item.href.replace('_b.jpg', '_s.jpg');
        }
      }
    }
  });

  return false;
});

$(".open_fancybox20").click(function() {

  $.fancybox.open([{
      href: 'assets/images/oneoldmill/1.png',
      title: 'One Old Mill'
    },
    {
      href: 'assets/images/oneoldmill/2.png',
      title: 'Located at the corner of Bloor Street West and Old Mill Drive, these new Toronto condos showcase a meticulously designed cream-coloured exterior of precast cement, sandstone, and black granite accents.'
    }
  ], 
  {
    nextEffect: 'none',
    prevEffect: 'none',
    padding: 0,
    helpers: {
      title: {
        type: 'over'
      },
      thumbs: {
        width: 75,
        height: 50,
        source: function(item) {
          return item.href.replace('_b.jpg', '_s.jpg');
        }
      }
    }
  });

  return false;
});

$(".open_fancybox21").click(function() {

  $.fancybox.open([{
      href: 'assets/images/gibsonnorth/1.png',
      title: 'Gibson Square North Tower'
    },
    {
      href: 'assets/images/gibsonnorth/2.png',
      title: 'Found in Toronto\'s North York area and built in 2015'
    },
    {
      href: 'assets/images/gibsonnorth/3.png',
      title: 'Gibson Square North Tower is a high-rise condo located in the Willowdale West neighbourhood. With suites ranging in size from 567 to 2076 sqft, Gibson Square North Tower has 42 stories and is located at 5168 Yonge Street.'
    }
  ], 
  {
    nextEffect: 'none',
    prevEffect: 'none',
    padding: 0,
    helpers: {
      title: {
        type: 'over'
      },
      thumbs: {
        width: 75,
        height: 50,
        source: function(item) {
          return item.href.replace('_b.jpg', '_s.jpg');
        }
      }
    }
  });

  return false;
});

$(".open_fancybox22").click(function() {

  $.fancybox.open([{
      href: 'assets/images/gibsonsouth/1.png',
      title: 'Gibson Square South Tower'
    },
    {
      href: 'assets/images/gibsonsouth/2.png',
      title: 'This high-rise condo sits near Yonge St & Park Home Ave, in North York\'s Willowdale West neighbourhood.'
    },
    {
      href: 'assets/images/gibsonsouth/3.png',
      title: 'Spread out over 42 stories, suites at Gibson Square South Tower range in size from 514 to 2088 sqft.'
    }
  ], 
  {
    nextEffect: 'none',
    prevEffect: 'none',
    padding: 0,
    helpers: {
      title: {
        type: 'over'
      },
      thumbs: {
        width: 75,
        height: 50,
        source: function(item) {
          return item.href.replace('_b.jpg', '_s.jpg');
        }
      }
    }
  });

  return false;
});

$(".open_fancybox23").click(function() {

  $.fancybox.open([{
      href: 'assets/images/aristo/1.png',
      title: 'Aristo At Avonshire'
    },
    {
      href: 'assets/images/aristo/2.png',
      title: 'Located in the Willowdale East neighbourhood, this condo was completed in 2014.'
    },
    {
      href: 'assets/images/aristo/3.png',
      title: 'You will find Aristo At Avonshire near the intersection of 88 Upper Canada Dr in Toronto\'s North York area.'
    },
    {
      href: 'assets/images/aristo/4.png',
      title: 'Located at 120 Harrison Garden Blvd this Toronto condo has suites ranging from 400 to 992 sqft.'
    }
  ], 
  {
    nextEffect: 'none',
    prevEffect: 'none',
    padding: 0,
    helpers: {
      title: {
        type: 'over'
      },
      thumbs: {
        width: 75,
        height: 50,
        source: function(item) {
          return item.href.replace('_b.jpg', '_s.jpg');
        }
      }
    }
  });

  return false;
});

$(".open_fancybox24").click(function() {

  $.fancybox.open([{
      href: 'assets/images/fly/1.png',
      title: 'FLY Condos'
    },
    {
      href: 'assets/images/fly/2.png',
      title: 'A unique character in the scene of Toronto condos, FLY Condos is a fully modern experience of downtown living located in one of the city’s most exciting neighbourhoods.'
    },
    {
      href: 'assets/images/fly/3.png',
      title: 'Fly Condos can be found near the intersection of Front Street and Spadina Avenue, standing at 24-storeys of bright concrete, glass and steel. '
    }
  ], 
  {
    nextEffect: 'none',
    prevEffect: 'none',
    padding: 0,
    helpers: {
      title: {
        type: 'over'
      },
      thumbs: {
        width: 75,
        height: 50,
        source: function(item) {
          return item.href.replace('_b.jpg', '_s.jpg');
        }
      }
    }
  });

  return false;
});

$(".open_fancybox24").click(function() {

  $.fancybox.open([{
      href: 'assets/images/fly/1.png',
      title: 'FLY Condos'
    },
    {
      href: 'assets/images/fly/2.png',
      title: 'A unique character in the scene of Toronto condos, FLY Condos is a fully modern experience of downtown living located in one of the city’s most exciting neighbourhoods.'
    },
    {
      href: 'assets/images/fly/3.png',
      title: 'Fly Condos can be found near the intersection of Front Street and Spadina Avenue, standing at 24-storeys of bright concrete, glass and steel. '
    }
  ], 
  {
    nextEffect: 'none',
    prevEffect: 'none',
    padding: 0,
    helpers: {
      title: {
        type: 'over'
      },
      thumbs: {
        width: 75,
        height: 50,
        source: function(item) {
          return item.href.replace('_b.jpg', '_s.jpg');
        }
      }
    }
  });

  return false;
});
$(".open_fancybox25").click(function() {

  $.fancybox.open([{
      href: 'assets/images/aura/1.png',
      title: 'Aura at College Park'
    },
    {
      href: 'assets/images/aura/2.png',
      title: 'Located at the corner of Yonge Street and Gerrard, Aura stands at a striking 78-storeys of sleek glass and steel atop a three-storey granite and glass podium, featuring various retail outlets.'
    },
    {
      href: 'assets/images/aura/3.png',
      title: 'The high-rise is recognized as Canada’s tallest residential building, capturing incomparable breath-taking views of the entire city.'
    },
    {
      href: 'assets/images/aura/4.png',
      title: 'Conscious of the building\'s environmental impact, the developers of Aura at College Park designed several eco-friendly innovations to help, such as direct underground access to TTC so residents can leave their cars at home.'
    }
  ], 
  {
    nextEffect: 'none',
    prevEffect: 'none',
    padding: 0,
    helpers: {
      title: {
        type: 'over'
      },
      thumbs: {
        width: 75,
        height: 50,
        source: function(item) {
          return item.href.replace('_b.jpg', '_s.jpg');
        }
      }
    }
  });

  return false;
});

$(".open_fancybox26").click(function() {

  $.fancybox.open([{
      href: 'assets/images/bravo/1.png',
      title: 'Bravo Boutique Condos'
    },
    {
      href: 'assets/images/bravo/2.png',
      title: 'These high-rise Toronto condos were built in 2013.'
    },
    {
      href: 'assets/images/bravo/3.png',
      title: 'Located in North York\'s Willowdale East neighbourhood, the nearest main intersection to Bravo Condos is Yonge St. @ Norton Ave.'
    },
    {
      href: 'assets/images/bravo/4.png',
      title: 'Bravo Condos is a 19 storey condo, located at 26 Norton Ave. With suites ranging in size from 580 to 1225 sqft, this Toronto condo has 187 units.'
    }
  ], 
  {
    nextEffect: 'none',
    prevEffect: 'none',
    padding: 0,
    helpers: {
      title: {
        type: 'over'
      },
      thumbs: {
        width: 75,
        height: 50,
        source: function(item) {
          return item.href.replace('_b.jpg', '_s.jpg');
        }
      }
    }
  });

  return false;
});

$(".open_fancybox27").click(function() {

  $.fancybox.open([{
      href: 'assets/images/shores/1.png',
      title: 'The Shores'
    },
    {
      href: 'assets/images/shores/2.png',
      title: 'This condo can be found at 11 Bronte Rd & 56 Jones St and has 211 condo units. Spread out over 10 floors, The Shores has suites ranging in size from 496 to 2602 square feet, with many different layouts and exposures.'
    }
  ], 
  {
    nextEffect: 'none',
    prevEffect: 'none',
    padding: 0,
    helpers: {
      title: {
        type: 'over'
      },
      thumbs: {
        width: 75,
        height: 50,
        source: function(item) {
          return item.href.replace('_b.jpg', '_s.jpg');
        }
      }
    }
  });

  return false;
});

