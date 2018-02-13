import * as _ from 'lodash';

var empty = [{
  name: 'Bob-omb Battlefield',
  stars: [{
    name: 'Big Bob-omb on the Summit',
    offset: 0x0C,
    mask: 0x01
  }, {
    name: 'Footrace with Koopa the Quick',
    offset: 0x0C,
    mask: 0x02
  }, {
    name: 'Shoot to the Island in the Sky',
    offset: 0x0C,
    mask: 0x04
  }, {
    name: 'Find the 8 Red Coins',
    offset: 0x0C,
    mask: 0x08
  }, {
    name: 'Mario Wings to the Sky',
    offset: 0x0C,
    mask: 0x10
  }, {
    name: 'Behind Chain Chomp\'s Gate',
    offset: 0x0C,
    mask: 0x20
  }, {
    name: '100 Coins',
    offset: 0x0C,
    mask: 0x40
  }, {
    name: 'Cannon Opened',
    offset: 0x0D,
    mask: 0x80
  }]
}, {
  name: 'Whomp\'s Fortress',
  stars: [{
    name: 'Chip Off Whomp\'s Block',
    offset: 0x0D,
    mask: 0x01
  }, {
    name: 'To the Top of the Fortress',
    offset: 0x0D,
    mask: 0x02
  }, {
    name: 'Shoot into the Wild Blue',
    offset: 0x0D,
    mask: 0x04
  }, {
    name: 'Red Coins on the Floating Isle',
    offset: 0x0D,
    mask: 0x08
  }, {
    name: 'Fall onto the Caged Island',
    offset: 0x0D,
    mask: 0x10
  }, {
    name: 'Blast Away the Wall',
    offset: 0x0D,
    mask: 0x20
  }, {
    name: '100 Coins',
    offset: 0x0D,
    mask: 0x40
  }, {
    name: 'Cannon Opened',
    offset: 0x0E,
    mask: 0x80
  }]
}, {
  name: 'Jolly Roger Bay',
  stars: [{
    name: 'Plunder in the Sunken Ship',
    offset: 0x0E,
    mask: 0x01
  }, {
    name: 'Can the Eel Come Out to Play?',
    offset: 0x0E,
    mask: 0x02
  }, {
    name: 'Treasure of the Ocean Cave',
    offset: 0x0E,
    mask: 0x04
  }, {
    name: 'Red Coins on the Ship Afloat',
    offset: 0x0E,
    mask: 0x08
  }, {
    name: 'Blast to the Stone Pillar',
    offset: 0x0E,
    mask: 0x10
  }, {
    name: 'Through the Jet Stream',
    offset: 0x0E,
    mask: 0x20
  }, {
    name: '100 Coins',
    offset: 0x0E,
    mask: 0x40
  }, {
    name: 'Cannon Opened',
    offset: 0x0F,
    mask: 0x80
  }]
}, {
  name: 'Cool, Cool Mountain',
  stars: [{
    name: 'Slip Slidin\' Away',
    offset: 0x0F,
    mask: 0x01
  }, {
    name: 'Li\'l Penguin Lost',
    offset: 0x0F,
    mask: 0x02
  }, {
    name: 'Big Penguin Race',
    offset: 0x0F,
    mask: 0x04
  }, {
    name: 'Frosty Slide for 8 Red Coins',
    offset: 0x0F,
    mask: 0x08
  }, {
    name: 'Snowman\'s Lost His Head',
    offset: 0x0F,
    mask: 0x10
  }, {
    name: 'Wall Kicks Will Work',
    offset: 0x0F,
    mask: 0x20
  }, {
    name: '100 Coins',
    offset: 0x0F,
    mask: 0x40
  }, {
    name: 'Cannon Opened',
    offset: 0x10,
    mask: 0x80
  }]
}, {
  name: 'Big Boo\'s Haunt',
  stars: [{
    name: 'Go on a Ghost Hunt',
    offset: 0x10,
    mask: 0x01
  }, {
    name: 'Ride Big Boo\'s Merry-Go-Round',
    offset: 0x10,
    mask: 0x02
  }, {
    name: 'Secret of the Haunted Books',
    offset: 0x10,
    mask: 0x04
  }, {
    name: 'Seek the 8 Red Coins',
    offset: 0x10,
    mask: 0x08
  }, {
    name: 'Big Boo\'s Balcony',
    offset: 0x10,
    mask: 0x10
  }, {
    name: 'Eye to Eye in the Secret Room',
    offset: 0x10,
    mask: 0x20
  }, {
    name: '100 Coins',
    offset: 0x10,
    mask: 0x40
  }]
}, {
  name: 'Hazy Maze Cave',
  stars: [{
    name: 'Swimming Beast in the Cavern',
    offset: 0x11,
    mask: 0x01
  }, {
    name: 'Elevate for 8 Red Coins',
    offset: 0x11,
    mask: 0x02
  }, {
    name: 'Metal-Head Mario Can Move!',
    offset: 0x11,
    mask: 0x04
  }, {
    name: 'Navigating the Toxic Maze',
    offset: 0x11,
    mask: 0x08
  }, {
    name: 'A-Maze-Ing Emergency Exit',
    offset: 0x11,
    mask: 0x10
  }, {
    name: 'Watch for Rolling Rocks',
    offset: 0x11,
    mask: 0x20
  }, {
    name: '100 Coins',
    offset: 0x11,
    mask: 0x40
  }]
}, {
  name: 'Lethal Lava Land',
  stars: [{
    name: 'Boil the Big Bully',
    offset: 0x12,
    mask: 0x01
  }, {
    name: 'Bully the Bullies',
    offset: 0x12,
    mask: 0x02
  }, {
    name: '8-Coin Puzzle With 15 Pieces',
    offset: 0x12,
    mask: 0x04
  }, {
    name: 'Red-Hot Log Rolling',
    offset: 0x12,
    mask: 0x08
  }, {
    name: 'Hot-Foot-It into the Volcano',
    offset: 0x12,
    mask: 0x10
  }, {
    name: 'Elevator Tour in the Volcano',
    offset: 0x12,
    mask: 0x20
  }, {
    name: '100 Coins',
    offset: 0x12,
    mask: 0x40
  }]
}, {
  name: 'Shifting Sand Land',
  stars: [{
    name: 'In the Talons of the Big Bird',
    offset: 0x13,
    mask: 0x01
  }, {
    name: 'Shining Atop the Pyramid',
    offset: 0x13,
    mask: 0x02
  }, {
    name: 'Inside the Ancient Pyramid',
    offset: 0x13,
    mask: 0x04
  }, {
    name: 'Stand Tall on the Four Pillars',
    offset: 0x13,
    mask: 0x08
  }, {
    name: 'Free Flying for 8 Red Coins',
    offset: 0x13,
    mask: 0x10
  }, {
    name: 'Pyramid Puzzle',
    offset: 0x13,
    mask: 0x20
  }, {
    name: '100 Coins',
    offset: 0x13,
    mask: 0x40
  }, {
    name: 'Cannon Opened',
    offset: 0x14,
    mask: 0x80
  }]
}, {
  name: 'Dire, Dire Docks',
  stars: [{
    name: 'Board Bowser\'s Sub',
    offset: 0x14,
    mask: 0x01
  }, {
    name: 'Chests in the Current',
    offset: 0x14,
    mask: 0x02
  }, {
    name: 'Pole-Jumping for Red Coins',
    offset: 0x14,
    mask: 0x04
  }, {
    name: 'Through the Jet Stream',
    offset: 0x14,
    mask: 0x08
  }, {
    name: 'The Manta Ray\'s Reward',
    offset: 0x14,
    mask: 0x10
  }, {
    name: 'Collect the Caps...',
    offset: 0x14,
    mask: 0x20
  }, {
    name: '100 Coins',
    offset: 0x14,
    mask: 0x40
  }]
}, {
  name: 'Snowman\'s Land',
  stars: [{
    name: 'Snowman\'s Big Head',
    offset: 0x15,
    mask: 0x01
  }, {
    name: 'Chill with the Bully',
    offset: 0x15,
    mask: 0x02
  }, {
    name: 'In the Deep Freeze',
    offset: 0x15,
    mask: 0x04
  }, {
    name: 'Whirl from the Freezing Pond',
    offset: 0x15,
    mask: 0x08
  }, {
    name: 'Shell Shreddin\' for Red Coins',
    offset: 0x15,
    mask: 0x10
  }, {
    name: 'Into the Igloo',
    offset: 0x15,
    mask: 0x20
  }, {
    name: '100 Coins',
    offset: 0x15,
    mask: 0x40
  }, {
    name: 'Cannon Opened',
    offset: 0x16,
    mask: 0x80
  }]
}, {
  name: 'Wet-Dry World',
  stars: [{
    name: 'Shocking Arrow Lifts!',
    offset: 0x16,
    mask: 0x01
  }, {
    name: 'Top o\' the Town',
    offset: 0x16,
    mask: 0x02
  }, {
    name: 'Secrets in the Shallows & Sky',
    offset: 0x16,
    mask: 0x04
  }, {
    name: 'Express Elevator--Hurry Up!',
    offset: 0x16,
    mask: 0x08
  }, {
    name: 'Go to Town for Red Coins',
    offset: 0x16,
    mask: 0x10
  }, {
    name: 'Quick Race Through Downtown!',
    offset: 0x16,
    mask: 0x20
  }, {
    name: '100 Coins',
    offset: 0x16,
    mask: 0x40
  }, {
    name: 'Cannon Opened',
    offset: 0x17,
    mask: 0x80
  }]
}, {
  name: 'Tall, Tall Mountain',
  stars: [{
    name: 'Scale the Mountain',
    offset: 0x17,
    mask: 0x01
  }, {
    name: 'Mystery of the Monkey Cage',
    offset: 0x17,
    mask: 0x02
  }, {
    name: 'Scary \'Shrooms, Red Coins',
    offset: 0x17,
    mask: 0x04
  }, {
    name: 'Mysterious Mountainside',
    offset: 0x17,
    mask: 0x08
  }, {
    name: 'Breathtaking View from Bridge',
    offset: 0x17,
    mask: 0x10
  }, {
    name: 'Blast to the Lonely Mushroom',
    offset: 0x17,
    mask: 0x20
  }, {
    name: '100 Coins',
    offset: 0x17,
    mask: 0x40
  }, {
    name: 'Cannon Opened',
    offset: 0x18,
    mask: 0x80
  }]
}, {
  name: 'Tiny-Huge Island',
  stars: [{
    name: 'Pluck the Piranha Flower',
    offset: 0x18,
    mask: 0x01
  }, {
    name: 'The Tip Top of the Huge Island',
    offset: 0x18,
    mask: 0x02
  }, {
    name: 'Rematch with Koopa the Quick',
    offset: 0x18,
    mask: 0x04
  }, {
    name: 'Five Itty Bitty Secrets',
    offset: 0x18,
    mask: 0x08
  }, {
    name: 'Wiggler\'s Red Coins',
    offset: 0x18,
    mask: 0x10
  }, {
    name: 'Make Wiggler Squirm',
    offset: 0x18,
    mask: 0x20
  }, {
    name: '100 Coins',
    offset: 0x18,
    mask: 0x40
  }, {
    name: 'Cannon Opened',
    offset: 0x19,
    mask: 0x80
  }]
}, {
  name: 'Tick Tock Clock',
  stars: [{
    name: 'Roll into the Cage',
    offset: 0x19,
    mask: 0x01
  }, {
    name: 'The Pit and the Pendulums',
    offset: 0x19,
    mask: 0x02
  }, {
    name: 'Get a Hand',
    offset: 0x19,
    mask: 0x04
  }, {
    name: 'Stomp on the Thwomp',
    offset: 0x19,
    mask: 0x08
  }, {
    name: 'Timed Jumps on Moving Bars',
    offset: 0x19,
    mask: 0x10
  }, {
    name: 'Stop Time for Red Coins',
    offset: 0x19,
    mask: 0x20
  }, {
    name: '100 Coins',
    offset: 0x19,
    mask: 0x40
  }]
}, {
  name: 'Rainbow Ride',
  stars: [{
    name: 'Cruiser Crossing the Rainbow',
    offset: 0x1A,
    mask: 0x01
  }, {
    name: 'The Big House in the Sky',
    offset: 0x1A,
    mask: 0x02
  }, {
    name: 'Coins Amassed in a Maze',
    offset: 0x1A,
    mask: 0x04
  }, {
    name: 'Swingin\' in the Breeze',
    offset: 0x1A,
    mask: 0x08
  }, {
    name: 'Tricky Triangles!',
    offset: 0x1A,
    mask: 0x10
  }, {
    name: 'Somewhere Over the Rainbow',
    offset: 0x1A,
    mask: 0x20
  }, {
    name: '100 Coins',
    offset: 0x1A,
    mask: 0x40
  }, {
    name: 'Cannon Opened',
    offset: 0x1B,
    mask: 0x80
  }]
}, {
  name: 'Secret Stars 1',
  stars: [{
    name: 'Bowser in the Dark World Reds',
    offset: 0x1B,
    mask: 0x01
  }, {
    name: 'Bowser in the Fire Sea Reds',
    offset: 0x1C,
    mask: 0x01
  }, {
    name: 'Bowser in the Sky Reds',
    offset: 0x1D,
    mask: 0x01
  }, {
    name: 'The Princess\'s Secret Slide (Box)',
    offset: 0x1E,
    mask: 0x01
  }, {
    name: 'The Princess\'s Secret Slide (Timed)',
    offset: 0x1E,
    mask: 0x02
  }, {
    name: 'The Secret Aquarium',
    offset: 0x23,
    mask: 0x01
  }, {
    name: 'Wing Mario over the Rainbow',
    offset: 0x22,
    mask: 0x01
  }, {
    name: 'WMotR Cannon Opened',
    offset: 0x23,
    mask: 0x80
  }]
}, {
  name: 'Secret Stars 2',
  stars: [{
    name: 'Tower of the Wing Cap',
    offset: 0x20,
    mask: 0x01
  }, {
    name: 'Cavern of the Metal Cap',
    offset: 0x1F,
    mask: 0x01
  }, {
    name: 'Vanish Cap under the Moat',
    offset: 0x21,
    mask: 0x01
  }, {
    name: 'MIPS (15 Stars)',
    offset: 0x08,
    mask: 0x08
  }, {
    name: 'MIPS (50 Stars)',
    offset: 0x08,
    mask: 0x10
  }, {
    name: 'Basement Toad',
    offset: 0x08,
    mask: 0x01
  }, {
    name: 'Upstairs Toad',
    offset: 0x08,
    mask: 0x02
  }, {
    name: 'Tippy Toad',
    offset: 0x08,
    mask: 0x04
  }]
}, {
  name: 'Misc. 1',
  stars: [{
    name: 'Cap Lost in SL',
    offset: 0x09,
    mask: 0x01
  }, {
    name: 'Cap Lost in SSL',
    offset: 0x09,
    mask: 0x02
  }, {
    name: 'Cap Lost in TTM',
    offset: 0x09,
    mask: 0x04
  }, {
    name: 'DDD Water Pushed Back',
    offset: 0x0A,
    mask: 0x01
  }, {
    name: 'Moat Drained',
    offset: 0x0A,
    mask: 0x02
  }, {
    name: 'Save File Exists',
    offset: 0x0B,
    mask: 0x01
  }]
}, {
  name: 'Misc. 2',
  stars: [{
    name: '1-Star Door',
    offset: 0x0A,
    mask: 0x04
  }, {
    name: '2-Star Door',
    offset: 0x0A,
    mask: 0x08
  }, {
    name: '3-Star Door (CCM)',
    offset: 0x0A,
    mask: 0x10
  }, {
    name: '3-Star Door (JRB)',
    offset: 0x0A,
    mask: 0x20
  }, {
    name: '8-Star Door',
    offset: 0x0A,
    mask: 0x40
  }, {
    name: '30-Star Door',
    offset: 0x0A,
    mask: 0x80
  }, {
    name: '50-Star Door',
    offset: 0x09,
    mask: 0x10
  }]
}, {
  name: 'Misc. 3',
  stars: [{
    name: 'Have Basement Key',
    offset: 0x0B,
    mask: 0x10
  }, {
    name: 'Basement Door Unlocked',
    offset: 0x0B,
    mask: 0x40
  }, {
    name: 'Have Upstairs Key',
    offset: 0x0B,
    mask: 0x20
  }, {
    name: 'Upstairs Door Unlocked',
    offset: 0x0B,
    mask: 0x80
  }, {
    name: 'Wing Cap Switch Pressed',
    offset: 0x0B,
    mask: 0x02
  }, {
    name: 'Metal Cap Switch Pressed',
    offset: 0x0B,
    mask: 0x04
  }, {
    name: 'Vanish Cap Switch Pressed',
    offset: 0x0B,
    mask: 0x08
  }]
}];

empty = _.map(empty, course => {
  return {
    name: course.name,
    stars: _.map(course.stars, star => {
      return {
        name: star.name,
        offset: star.offset,
        mask: star.mask,
        checked: false
      }
    })
  }
})

let all = _.map(empty, course => {
  return {
    name: course.name,
    stars: _.map(course.stars, star => {
      return {
        name: star.name,
        checked: true
      }
    })
  }
})
all[17].stars[0].checked = false; // Cap Lost in SL
all[17].stars[1].checked = false; // Cap Lost in SSL
all[17].stars[2].checked = false; // Cap Lost in TTM
all[19].stars[5].checked = false; // Metal Cap Switch Pressed

let testBool = [
  [ true, true, true, true, true, true, true, true ],
  [ false, true, true, true, true, false, true, true ],
  [ true, true, true, true, false, true, false, true ],
  [ true, true, false, true, false, true, true, true ],
  [ true, false, true, true, true, false, true ],
  [ true, true, true, false, false, true, true ],
  [ true, true, false, true, true, false, true ],
  [ true, false, true, true, true, true, true, true ],
  [ true, true, true, true, true, false, false ],
  [ false, true, true, true, true, true, true, true ],
  [ true, false, false, true, true, false, true, true ],
  [ true, true, true, true, true, true, true, true ],
  [ true, false, false, true, true, false, true, true ],
  [ true, true, true, true, false, false, true ],
  [ true, false, true, true, true, true, true, true ],
  [ true, false, false, true, true, true, true, true ],
  [ true, true, true, true, true, true, true, true ],
  [ true, false, true, true, false, true ],
  [ true, true, false, true, true, false, true ],
  [ true, true, true, false, true, false, true ]
];

function boolToPreset(bool) {
  return _.map(empty, (course, courseIdx) => {
    return {
      name: course.name,
      stars: _.map(course.stars, (star, starIdx) => {
        return {
          name: star.name,
          checked: bool[courseIdx][starIdx]
        }
      })
    };
  });
}

export var presets = [
  {
    name: 'Empty',
    courses: empty,
  }, {
    name: '120 Star',
    courses: all
  }, {
    name: 'Test',
    courses: boolToPreset(testBool)
  }
]
