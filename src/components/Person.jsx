const Person = ({ name, age, image }) => {
  return (
    <article className="person">
      <img src={image} alt={name} className="img" />
      <div>
        <h4>{name}</h4>
        <p style={{ margin: '0.1rem' }}>{age} Years</p>
      </div>
    </article>
  )
}
export default Person
