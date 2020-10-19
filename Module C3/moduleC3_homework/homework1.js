function ownProperties (object) {
    for (let prop in object) {
      if (object.hasOwnProperty(prop)) {
        console.log(prop, object[prop]);
      }
    }
  }