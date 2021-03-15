import React from "react";

export default function TestCreate() {
  const [name, setName] = React.useState("");
  const [nickname, setNickname] = React.useState("");
  const [age, setAge] = React.useState("");
  const [bio, setBio] = React.useState("");
  const [friends, setFriends] = React.useState("");
  const [friend, setFriend] = React.useState("");
  const [present, setPresent] = React.useState("");
  

  let dogs = localStorage.getItem("dogs");
  dogs = (dogs) ? JSON.parse(dogs) : [];
  
  const handleSubmit = (event) => {
    
    const newdog = {
        name: name,
        nickname: nickname,
        age: age,
        bio: bio,
        friends: [ friend ],
        present: present,
    }
    
    console.log(`
      Name: ${name}
      Nickname: ${nickname}
      Age: ${age}
      Bio: ${bio}
      Friends: ${friends}
      present: ${present}
    `);

    console.log(localStorage.getItem(dogs));
    dogs.push(newdog);
    localStorage.setItem("dogs", JSON.stringify(dogs));
    {/*window.localStorage.setItem(save_id, JSON.stringify(newdog));*/}
    event.preventDefault();
  }

  {/*

    const person = {
    name: "Obaseki Nosa",
    location: "Lagos",
}

window.localStorage.setItem('user', JSON.stringify(person));


JSON.parse(window.localStorage.getItem('dog'));


*/}


  return (
    <form onSubmit={handleSubmit}>
      <h1>Create New Dog</h1>

      <label>
        Name:
        <input
          name="name"
          type="name"
          value={name}
          onChange={e => setName(e.target.value)}
          required />
      </label>

      <label>
        Nickname:
        <input
          name="nickname"
          type="nickname"
          value={nickname}
          onChange={e => setNickname(e.target.value)}
          required />
      </label>

      <label>
        Age:
        <input
          name="age"
          type="age"
          value={age}
          onChange={e => setAge(e.target.value)}
          required />
      </label>

      <label>
        Bio:
        <input
          name="bio"
          type="bio"
          value={bio}
          onChange={e => setBio(e.target.value)}
          required />
      </label>

      <label>
        Present:
        <input
          name="present"
          type="checkbox"
          value={present}
          onChange={e => setPresent(e.target.value)}
          required />
      </label>
        
        {/*
      <label>
        Friends:
        <select
          name="friends"
          value={dog}
          onChange={e => setFriend(e.target.value)}
          required>
          <option key=""></option>
          {dogs.map(dog => (
            <option key={dog}>{dog}</option>
          ))}
        </select>
      </label>
            */}

      <button>Submit</button>
    </form>
  );
}

export { TestCreate }