function highestScore (students) {
    // Code disini
    const listClases=['foxes','wolves','tigers'];

    var result={};

    for(var i=0;i<listClases.length;i++){
        var c=listClases[i];
        var studentsHehe=students.filter((s)=>s.class === c);
        var highScore=0;
        var highestStudent={};
        for(var j=0;j<studentsHehe.length;j++){
            var s=studentsHehe[j];
            if(s.score>highScore){
                highScore=s.score;
                highestStudent=s;
            }
        }

        if(studentsHehe.length!==0)
            result[c]={
                name:highestStudent.name,
                score:highestStudent.score
            };
    }

    return result;

  }
  
  // TEST CASE
  console.log(highestScore([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  
  console.log(highestScore([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  
  console.log(highestScore([])); //{}