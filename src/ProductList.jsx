
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from './CartSlice'
import './ProductList.css'

const categories = [
  {
    name: 'Air Purifying Plants',
    plants: [
      { id: 1, name: 'Snake Plant', description: 'Easy-care plant for a fresher home.', price: 8500, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=500' },
      { id: 2, name: 'Peace Lily', description: 'Elegant green leaves and white blooms.', price: 12000, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=500' },
      { id: 3, name: 'Spider Plant', description: 'A cheerful plant for shelves and desks.', price: 6500, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500' },
      { id: 4, name: 'Areca Palm', description: 'Bring a tropical feel into your space.', price: 18000, image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=500' },
      { id: 5, name: 'Rubber Plant', description: 'Glossy leaves with a bold appearance.', price: 15000, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500' },
      { id: 6, name: 'Boston Fern', description: 'Full, feathery foliage for bright rooms.', price: 9500, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500' },
    ],
  },
  {
    name: 'Low Maintenance Plants',
    plants: [
      { id: 7, name: 'Aloe Vera', description: 'A useful succulent that loves sunlight.', price: 5000, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500' },
      { id: 8, name: 'ZZ Plant', description: 'Hardy, glossy foliage for busy people.', price: 14000, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500' },
      { id: 9, name: 'Jade Plant', description: 'A charming succulent for your desk.', price: 6000, image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?w=500' },
      { id: 10, name: 'Ponytail Palm', description: 'A playful plant with cascading leaves.', price: 16000, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500' },
      { id: 11, name: 'Cactus Garden', description: 'A compact collection of desert plants.', price: 7500, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500' },
      { id: 12, name: 'Chinese Evergreen', description: 'Decorative foliage with lovely patterns.', price: 11000, image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=500' },
    ],
  },
  {
    name: 'Decorative Plants',
    plants: [
      { id: 13, name: 'Monstera Deliciosa', description: 'Statement leaves for modern interiors.', price: 20000, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=500' },
      { id: 14, name: 'Golden Pothos', description: 'Trailing vines for shelves and hangers.', price: 7000, image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=500' },
      { id: 15, name: 'Calathea', description: 'Beautiful patterned leaves with character.', price: 13500, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500' },
      { id: 16, name: 'Philodendron', description: 'A lush tropical plant for your home.', price: 10000, image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=500' },
      { id: 17, name: 'Bird of Paradise', description: 'Large leaves for a dramatic focal point.', price: 25000, image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=500' },
      { id: 18, name: 'Anthurium', description: 'A striking plant with colourful blooms.', price: 17000, image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=500' },
    ],
  },
]

function ProductList() {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items)

  return (
    <main className="catalogue">
      <header className="catalogue-header">
        <p className="eyebrow">GROW SOMETHING BEAUTIFUL</p>
        <h1>Our Plant Collection</h1>
        <p>Find the perfect green companion for every corner of your home.</p>
      </header>

      {categories.map((category) => (
        <section className="plant-category" key={category.name}>
          <h2>{category.name}</h2>
          <div className="plant-grid">
            {category.plants.map((plant) => {
              const alreadyAdded = cartItems.some(
                (item) => item.id === plant.id
              )

              return (
                <article className="plant-card" key={plant.id}>
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="plant-image"
                  />
                  <div className="plant-info">
                    <h3>{plant.name}</h3>
                    <p>{plant.description}</p>
                    <strong>₦{plant.price.toLocaleString('en-NG')}</strong>
                    <button
                      className="add-button"
                      disabled={alreadyAdded}
                      onClick={() => dispatch(addItem(plant))}
                    >
                      {alreadyAdded ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                </article>
              )
            })}
          </div>
        </section>
      ))}
    </main>
  )
}

export default ProductList
