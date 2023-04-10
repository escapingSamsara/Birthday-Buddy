import { useState } from 'react'
import List from './components/List'
import data from './data'
const App = () => {
  const [people, setPeople] = useState(data)
  console.log(people)

  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays today</h3>
        <List people={people} />
        <button
          className="btn btn-block"
          type="button"
          onClick={() => setPeople([])}
        >
          clear list
        </button>
        <button
          type="button"
          className="btn btn-block"
          style={{ marginTop: '2rem' }}
          onClick={() => setPeople(data)}
        >
          show today's birthdays
        </button>
      </section>
    </main>
  )
}
export default App
