function getGreeting(username) {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
  
    let greeting;
  
    if (currentHour < 12) {
      greeting = `Доброго ранку, ${username}!`;
    } else if (currentHour < 18) {
      greeting = `Доброго дня, ${username}!`;
    } else {
      greeting = `Доброго вечора, ${username}!`;
    }
  
    return greeting;
  }
  
  module.exports = { getGreeting };