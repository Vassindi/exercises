  function parent(x) {
    return function closure() {
      // Closure is declared here.
      return x;
    };
  }
  
  const remember = parent("remembers me");
  // Seems like the variable x would be gone after
  // parent is executed, but it's not.
  
  closure();
  // Return "remembers me"