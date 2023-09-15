

    function User(name, surname, age, isMale, email, isSubscribed) {
        this.firstName = name;
        this.lastName = surname;
        this.age = age;
        this.isMale = isMale;
        this.email = email;
        this.isSubscribed = isSubscribed;
      }
      
      const users = [];
      
      for (let i = 0; i < 100; i++) {
        const user = new User(
          `Username${i}`,
          `Usersurname${i}`,
          Math.floor(Math.random() * 90),
          Math.random() > 0.5,
          `useremail${i}@gmail.com`,
          Math.random() > 0.5
        );
        users.push(user);
      }

      console.table(users);

//Отримати масив користувачів, які не підписані (not subscribed)

const notSubscribed = users.filter(item => !item.isSubscribed);
console.table(notSubscribed);


//Отримати масив повних імен осіб жіночої статі шкільного віку (6 – 18 років).

const maleAge = users
.filter(item => !item.isMale && item.age >= 6 && item.age <= 18)
.map(user => user.firstName + ' ' + user.lastName);

console.table(maleAge);

//Видалити з масиву користувача з email useremail5@gmail.com

const deletEmail = users.findIndex(item => item.email === 'useremail5@gmail.com')

if (deletEmail) {
    users.splice(deletEmail, 1);
}

console.table(users)

//Перевірити, чи є серед користувачів користувач з email`ом useremail99@gmail.com

const isMail = users.some(item => item.email === 'useremail99@gmail.com');
console.table(isMail);

//Перевірити, чи всі користувачі підписані (subscribed).

const yesSubscribed = users.every(item => item.isSubscribed);
















