

function Hello({person}) {

  return (
    <div>
      <h1>
        {person.name} says {person.message}! {person.seatNumber}
      </h1>
    </div>
  );
}

export default Hello;