const gameObject = () => ({
    home: 
      {
        teamName:'Brooklyn Nets',
        colors:'Black,White',
        players: [
          {
          name:'Alan Anderson',
          number:'0',
          shoe:'16',
          points:'22',
          rebounds:'12',
          assists:'12',
          steals:'3',
          blocks:'1',
          slamDunks:'1',
        },
        {
          name:'Reggie Evans',
          number:'30',
          shoe:'14',
          points:'12',
          rebounds:'12',
          assists:'12',
          steals:'12',
          blocks:'12',
          slamDunks:'7',
        },
        {
          name:'Brook Lopez',
          number:'11',
          shoe:'17',
          points:'17',
          rebounds:'19',
          assists:'10',
          steals:'3',
          blocks:'1',
          slamDunks:'15',
        },
        {
          name:'Mason Plumlee',
          number:'1',
          shoe:'19',
          points:'26',
          rebounds:'12',
          assists:'6',
          steals:'3',
          blocks:'8',
          slamDunks:'5',
        },
        {
          name:'Jason Terry',
          number:'31',
          shoe:'15',
          points:'19',
          rebounds:'2',
          assists:'2',
          steals:'4',
          blocks:'11',
          slamDunks:'1',
        },
        ],
      },
    away: {
      teamName:'Charlotte Hornets',
      colors:'Turquoise, Purple',
      players:[
        {
        name:'Jeff Adrian',
        number:'0',
        shoe:'16',
        points:'22',
        rebounds:'12',
        assists:'12',
        steals:'3',
        blocks:'1',
        slamDunks:'1',
        },
        {
          name:'Bismak Biyombo',
          number:'0',
          shoe:'16',
          points:'12',
          rebounds:'4',
          assists:'7',
          steals:'7',
          blocks:'15',
          slamDunks:'10',
        },
        {
          name:'DeSagna Diop',
          number:'2',
          shoe:'14',
          points:'24',
          rebounds:'12',
          assists:'12',
          steals:'4',
          blocks:'5',
          slamDunks:'5',
        },
        {
          name:'Ben Gordon',
          number:'8',
          shoe:'15',
          points:'33',
          rebounds:'3',
          assists:'2',
          steals:'1',
          blocks:'1',
          slamDunks:'0',
        },
        {
          name:'Brendan Haywood',
          number:'33',
          shoe:'15',
          points:'6',
          rebounds:'12',
          assists:'12',
          steals:'22',
          blocks:'5',
          slamDunks:'12',
        },
      ],
      },
     
  });
  function homeTeamName() {
    let object = gameObject();
    return object['home']['teamName'];
  }
  function numPointsScored(name) {
    //let gameObject = gameObject();
    for (let key in gameObject()) {
        console.log('key',key);
        console.log(gameObject()[key]['players']);
        let players = gameObject()[key]['players'];
        for (let player of players) {
            if (player['name'].toLowerCase() === name.toLowerCase()) {
                return player['points'];
            }
        }
    }
  }

  function playerNumbers(nameOfTeam) {
    let teamNumbers = [];
    for (let key in gameObject()) {
        // console.log('key',key);
        console.log(gameObject()[key]['players']);
        let players = gameObject()[key]['players'];
        for (let player of players) {
            teamNumbers.push(player['number']);
        }
        console.log(players);
    }
}

function playerStats(playerName) {
    for (let key in gameObject()) {
        let players = gameObject()[key]['players'];
        for (let player of players) {
            if (player['name']===playerName) {
                return player;
            }
        }
    }
}

// function bigShoeRebounds() {
//     for (let key in )
// }

  function shoeSize(name) {
    for (let key in gameObject()) {
        console.log('key',key);
        console.log(gameObject()[key]['players']);
        let players = gameObject()[key]['players'];
        for (let player of players) {
            if (player['name'].toLowerCase() === name.toLowerCase()) {
                return player['shoe'];
            }
        }
    }
  }



function teamColors() {
    let colorArray = [];
    for (let key in gameObject()) {
        colorArray.push(gameObject()[key]['colors']);
        }
        return colorArray;
    }

function teamNames() {
    let nameTeams = [];
    for (let key in gameObject()) {
        nameTeams.push(gameObject()[key]['teamName']);
    }
    return nameTeams;
}

