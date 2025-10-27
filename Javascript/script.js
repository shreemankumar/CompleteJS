function rps(user,computer){
  if(user === computer) return "draw";

  if(user === "rock" && computer === "scissor") return "user";
  if(user === "scissor" && computer === "rock") return "computer";
  if(user === "paper" && computer === "rock") return "user"

  return "computer";
}
console.log(rps("rock","scissor"))