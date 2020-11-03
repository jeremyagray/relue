function initialDoors(n) {
  let doors = [];
  for (let i = 0; i < n; i++) {
    doors.push(false);
  }

  return doors;
}

function toggleDoors(doors, n) {
  let myDoors = [...doors];
  for (let i = 0; i < myDoors.length; i++) {
    if ((i + 1) % n == 0) {
      myDoors[i] ? myDoors[i] = false : myDoors[i] = true;
    }
  }
  return myDoors;
}

function getOpenDoors(doors) {
  let open = [];
  for (let i = 0; i < doors.length; i++) {
    if (doors[i]) {
      open.push(i + 1);
    }
  }

  return open;
}

function getFinalOpenedDoors(n) {
  let doors = initialDoors(n);
  for (let i = 1; i <= n; i++) {
    doors = toggleDoors(doors, i);
  }

  return getOpenDoors(doors);
}
