function doPost(e) {
  MailApp.sendEmail({
    to: email,
    subject: "Take Action on Distraction!",
    htmlBody: "Your friend " + name + " violated his agreement to stop wasting time! Go shame him!"
  });
}

function formatTime(t) {
  var f = Math.floor;
  return (t >= 3600 ? "" + f(t / 3600) + "h " : "") + f(t % 3600 / 60) + "m";
}

function sendEmail(user) {
  MailApp.sendEmail({
    to: user.email1,
    subject: "Take Action on Distraction!",
    htmlBody: "Your friend " + user.name + " violated his agreement to stop wasting time! He spent a total of " +
    formatTime(user.time_wasted_in_seconds) + " on " + user.website + "."
  });
  MailApp.sendEmail({
    to: user.email2,
    subject: "Take Action on Distraction!",
    htmlBody: "Your friend " + user.name + " violated his agreement to stop wasting time! He spent a total of " +
    formatTime(user.time_wasted_in_seconds) + " on " + user.website + "."
  });
}

function formatDate(d) {
  return d.getFullYear() + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2);
}

function doGet(e) {
  var email1 = e.parameter.email1;
  var email2 = e.parameter.email2;
  var name = e.parameter.name;
  var apiToken = e.parameter.apiToken;
  var threshold = parseInt(e.parameter.threshold, 10);
  var website = e.parameter.website;
  var adURL = 'https://www.rescuetime.com/anapi/data?key=' + apiToken + '&format=json';
  var adjson = UrlFetchApp.fetch(adURL).getContentText();
  var ad = JSON.parse(adjson);
  var websiteRow = undefined;
  ad.rows.forEach(function(row) {
    if (row[3] == website) websiteRow = row;
  });
  var timeSpent = websiteRow[1];
  sendEmail({
    name: e.parameter.name,
    email1: e.parameter.email1,
    email2: e.parameter.email2,
    website: e.parameter.website,
    time_wasted_in_seconds: timeSpent
  });
}
