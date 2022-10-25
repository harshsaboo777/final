import pg from "pg";

var conString = "postgres://zstsryjp:nBWr5W5S0HMoq34lHHl0z5FYnDPQAyLc@satao.db.elephantsql.com/zstsryjp" //Can be found in the Details page
var client = new pg.Client(conString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query("select Member.mem_id from Member WHERE Email='hd@gmail.com' and Password='123456';", function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0]);
    // >> output: 2018-08-23T14:02:57.117Z
    
  });
});

export default client;
