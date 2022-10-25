import pg from "pg";

var conString =
	"postgres://zstsryjp:nBWr5W5S0HMoq34lHHl0z5FYnDPQAyLc@satao.db.elephantsql.com/zstsryjp";
var client = new pg.Client(conString);
client.connect(function (err) {
	if (err) {
		return console.error("could not connect to postgres", err);
	}
});

export default client;
