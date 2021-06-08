const axios = require('axios');

Array(10)
  .fill(null)
  .map(() => {
    const t = Date.now();
    axios.default
      .get(
        'https://stg.saarthiapp.com/saarthi-data-service/api/v1/participation/getLeaderboard?contestId=ckn9tney805534tli8pizmfu6&totalQuestions=10&RightAnswers=2&goal=SSC&page=0&limit=10',
        {
          headers: {
            Authorization:
              'be eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNrbTVkOG5rNTc1NDQ0bXY4MjR6YnQycjYiLCJ0eXBlIjoiU3R1ZGVudCIsImlhdCI6MTYyMjg5NjkzM30.k6HySGNQun5ohKrIeidOMZNSlBElMiBvjrucPwH96xs',
          },
        },
      )
      .then(data => {
        console.log(`TIME :  ${Date.now() - t}`);
      });
  });
