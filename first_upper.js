
//substitui a primeira letra do nome pela mesma letra em maiúsculo      

const arr = ["thais", "rapha", "iago", "carol", "maria", "rio"];
      
      const newArr = arr.map((name) => name.replace(name[0], name[0].toUpperCase()));
      
      console.log(newArr);
